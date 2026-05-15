import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { topics } from "@/data/topicsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LogOut, LayoutDashboard, Users, FileText, Wrench, Package,
  Phone, MessageSquare, Clock, CheckCircle, XCircle, Search,
  ExternalLink, ChevronRight, TrendingUp, Globe, BookOpen,
  Bot, Code2, Search as SearchIcon, Megaphone, ClipboardList, Accessibility
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo.png";

interface Lead {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
  status: "novo" | "em_atendimento" | "concluido";
}

const AGENTS = [
  {
    id: "core",
    name: "Core Agent",
    role: "Coordenador Geral",
    icon: Bot,
    color: "bg-slate-100 text-slate-700",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    description: "Agente coordenador responsável por manter a visão geral do projeto, garantir consistência entre agentes especializados e aplicar as regras de segurança globais.",
    responsibilities: [
      "Distribuir tarefas entre agentes especializados",
      "Garantir que mudanças de um agente não conflitem com outro",
      "Manter o log de decisões arquiteturais",
      "Validar mudanças em vercel.json, sitemap.xml e rotas",
    ],
    file: "agents/core-agent.md",
    triggers: ["Conflito entre agentes", "Mudança estrutural de rotas", "Onboarding de nova sessão"],
  },
  {
    id: "dev",
    name: "Dev Agent",
    role: "Performance & Build",
    icon: Code2,
    color: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Especialista em performance técnica, build pipeline, Core Web Vitals e otimização de bundle. Responsável por manter a saúde técnica do projeto sem introduzir regressões.",
    responsibilities: [
      "Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms",
      "Code splitting e lazy loading de páginas",
      "Otimização de bundle (sem chunks > 500KB)",
      "Pipeline: vite build → prerender-seo.cjs",
    ],
    file: "agents/dev-agent.md",
    triggers: ["Bundle, build, performance", "Chunks pesados", "Regressão de Core Web Vitals"],
  },
  {
    id: "seo",
    name: "SEO Agent",
    role: "SEO Técnico & GEO",
    icon: SearchIcon,
    color: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description: "Especialista em SEO técnico e GEO (Generative Engine Optimization). Responsável por indexação, structured data, performance de rastreamento e otimização para LLMs.",
    responsibilities: [
      "Structured data JSON-LD via prerender-seo.cjs",
      "Meta tags, canonical, og:tags por página",
      "Sitemap.xml com priority e changefreq calibrados",
      "llms.txt, robots.txt para crawlers e LLMs",
    ],
    file: "agents/seo-agent.md",
    triggers: ["Meta tags, sitemap, schema.org", "GEO / LLMs", "Indexação de novas rotas"],
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    role: "Copywriting B2B",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description: "Especialista em copywriting B2B industrial, posicionamento de marca e otimização de conversão. Foco em linguagem técnica para gestores de manutenção e compradores industriais.",
    responsibilities: [
      "Headlines com palavra-chave + localização",
      "CTAs de WhatsApp e formulário de contato",
      "Tom técnico mas acessível para público industrial",
      "Provas sociais: anos de experiência, marcas, endereço",
    ],
    file: "agents/marketing-agent.md",
    triggers: ["Copy de página, CTAs, títulos", "Textos de hero section", "FAQs para clientes"],
  },
  {
    id: "po",
    name: "PO Agent",
    role: "Product Owner",
    icon: ClipboardList,
    color: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description: "Product Owner responsável por priorizar melhorias com base em impacto de negócio vs. esforço técnico. Garante que o roadmap esteja alinhado com geração de leads.",
    responsibilities: [
      "Backlog priorizado por impacto × esforço",
      "KPIs: GSC posição, CTR, Core Web Vitals, leads",
      "Prioridade automática para itens de Core Web Vitals",
      "Nunca priorizar feature nova sobre bug de conversão",
    ],
    file: "agents/po-agent.md",
    triggers: ["Priorização de backlog", "Decisão de roadmap", "Trade-offs de escopo"],
  },
  {
    id: "ux",
    name: "UX Agent",
    role: "UX & Acessibilidade",
    icon: Accessibility,
    color: "bg-pink-100 text-pink-700",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    description: "Especialista em experiência do usuário, acessibilidade (WCAG 2.1 AA), otimização mobile e arquitetura de informação. Foco em conversão via redução de fricção.",
    responsibilities: [
      "Mobile first: botões ≥ 44x44px, WhatsApp sem scroll",
      "WCAG 2.1 AA: contraste ≥ 4.5:1, alt em imagens",
      "Formulários com validação inline e labels",
      "Breadcrumbs e heading hierarchy em todas as páginas",
    ],
    file: "agents/ux-agent.md",
    triggers: ["Layout, acessibilidade, mobile", "Formulários", "Arquitetura de informação"],
  },
];

const SERVICES = [
  { label: "Manutenção Preventiva", path: "/servicos/manutencao-preventiva" },
  { label: "Manutenção Corretiva", path: "/servicos/manutencao-corretiva" },
  { label: "Análise de Óleo", path: "/servicos/analise-oleo" },
  { label: "Retrofit", path: "/servicos/retrofit" },
  { label: "Consultoria Técnica", path: "/servicos/consultoria" },
  { label: "Treinamentos", path: "/servicos/treinamentos" },
];

const BRANDS = [
  { label: "Parker", path: "/produtos/parker" },
  { label: "Vickers", path: "/produtos/vickers" },
  { label: "Rexroth", path: "/produtos/rexroth" },
  { label: "Denison", path: "/produtos/denison" },
  { label: "Eaton", path: "/produtos/eaton" },
  { label: "HDA", path: "/produtos/hda" },
];

const PAGES = [
  { label: "Home", path: "/" },
  { label: "Empresa", path: "/empresa" },
  { label: "Contato", path: "/contato" },
  { label: "Informações", path: "/informacoes" },
  { label: "FAQ", path: "/faq" },
  { label: "Vídeos", path: "/videos" },
  { label: "Sitemap", path: "/sitemap" },
  { label: "Bombas Hidráulicas", path: "/manutencao-bombas-hidraulicas" },
  { label: "Cilindros Hidráulicos", path: "/cilindros-hidraulicos" },
  { label: "Válvulas Hidráulicas", path: "/valvulas-hidraulicas" },
  { label: "Hidráulica Industrial", path: "/hidraulica-industrial" },
  { label: "Assistência Técnica", path: "/assistencia-tecnica-industrial" },
  { label: "Unidade Hidráulica", path: "/unidade-hidraulica-industrial" },
  { label: "Mangueiras Hidráulicas", path: "/mangueiras-hidraulicas" },
  { label: "Bomba de Pistão", path: "/bomba-de-pistao-hidraulica" },
];

const statusLabel: Record<Lead["status"], string> = {
  novo: "Novo",
  em_atendimento: "Em Atendimento",
  concluido: "Concluído",
};

const statusColors: Record<Lead["status"], string> = {
  novo: "bg-blue-100 text-blue-700",
  em_atendimento: "bg-yellow-100 text-yellow-700",
  concluido: "bg-green-100 text-green-700",
};

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "pages" | "topics" | "agents">("overview");

  useEffect(() => {
    const stored = localStorage.getItem("hicomp_leads");
    if (stored) setLeads(JSON.parse(stored));
  }, []);

  const saveLeads = (updated: Lead[]) => {
    setLeads(updated);
    localStorage.setItem("hicomp_leads", JSON.stringify(updated));
  };

  const updateStatus = (id: number, status: Lead["status"]) => {
    saveLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const deleteLead = (id: number) => {
    saveLeads(leads.filter((l) => l.id !== id));
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) ||
      l.service.toLowerCase().includes(search.toLowerCase())
  );

  const newLeads = leads.filter((l) => l.status === "novo").length;
  const inProgress = leads.filter((l) => l.status === "em_atendimento").length;
  const done = leads.filter((l) => l.status === "concluido").length;

  const popularTopics = topics.filter((t) => t.popular);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-white/20">
          <img src={logo} alt="HiComp" className="h-10 w-auto brightness-0 invert mb-2" />
          <p className="text-xs text-primary-foreground/70">Painel Administrativo</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "overview", icon: LayoutDashboard, label: "Visão Geral" },
            { id: "leads", icon: Users, label: "Leads" },
            { id: "pages", icon: Globe, label: "Páginas do Site" },
            { id: "topics", icon: BookOpen, label: "Tópicos de Conteúdo" },
            { id: "agents", icon: Bot, label: "Agents IA" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === id
                  ? "bg-white/20 text-white"
                  : "text-primary-foreground/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/20 space-y-2">
          <Button asChild variant="secondary" size="sm" className="w-full">
            <Link to="/" target="_blank">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Site
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-primary-foreground/70 hover:text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">
            {activeTab === "overview" && "Visão Geral"}
            {activeTab === "leads" && "Gerenciar Leads"}
            {activeTab === "pages" && "Páginas do Site"}
            {activeTab === "topics" && "Tópicos de Conteúdo"}
            {activeTab === "agents" && "Agents IA"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">HiComp Hidráulica · Sistema de Gestão</p>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <StatCard icon={Users} label="Leads Totais" value={leads.length} color="text-blue-600 bg-blue-50" />
              <StatCard icon={MessageSquare} label="Novos Leads" value={newLeads} color="text-orange-600 bg-orange-50" />
              <StatCard icon={FileText} label="Tópicos Técnicos" value={topics.length} color="text-purple-600 bg-purple-50" />
              <StatCard icon={Globe} label="Páginas do Site" value={PAGES.length + SERVICES.length + BRANDS.length} color="text-green-600 bg-green-50" />
              <StatCard icon={Bot} label="Agents IA" value={AGENTS.length} color="text-slate-600 bg-slate-50" />
            </div>

            {/* Lead Status */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg"><Clock className="h-5 w-5 text-blue-600" /></div>
                <div>
                  <p className="text-2xl font-bold">{newLeads}</p>
                  <p className="text-sm text-muted-foreground">Aguardando atendimento</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-4">
                <div className="p-3 bg-yellow-50 rounded-lg"><TrendingUp className="h-5 w-5 text-yellow-600" /></div>
                <div>
                  <p className="text-2xl font-bold">{inProgress}</p>
                  <p className="text-sm text-muted-foreground">Em atendimento</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-lg"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                <div>
                  <p className="text-2xl font-bold">{done}</p>
                  <p className="text-sm text-muted-foreground">Concluídos</p>
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <QuickSection title="Serviços" icon={Wrench} items={SERVICES} />
              <QuickSection title="Produtos / Marcas" icon={Package} items={BRANDS} />
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Contato Rápido
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+551126195457"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (11) 2619-5457
                  </a>
                  <a
                    href="tel:+551126195482"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (11) 2619-5482
                  </a>
                  <a
                    href="https://wa.me/5511992465636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp (11) 99246-5636
                  </a>
                </div>
                <hr className="my-4" />
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Tópicos Populares</h4>
                <div className="space-y-1">
                  {popularTopics.slice(0, 4).map((t) => (
                    <Link
                      key={t.id}
                      to={`/informacoes/${t.id}`}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {t.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Leads */}
            {leads.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-5 border-b flex items-center justify-between">
                  <h3 className="font-semibold">Leads Recentes</h3>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("leads")}>
                    Ver todos
                  </Button>
                </div>
                <div className="divide-y">
                  {leads.slice(0, 5).map((lead) => (
                    <LeadRow key={lead.id} lead={lead} onStatus={updateStatus} onDelete={deleteLead} compact />
                  ))}
                </div>
              </div>
            )}

            {leads.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border p-10 text-center">
                <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">Nenhum lead recebido ainda.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Quando clientes enviarem o formulário de contato, aparecerão aqui.
                </p>
              </div>
            )}
          </div>
        )}

        {/* LEADS TAB */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, telefone ou serviço..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <span className="text-sm text-muted-foreground">{filteredLeads.length} lead(s)</span>
            </div>

            {filteredLeads.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border p-10 text-center">
                <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">
                  {leads.length === 0 ? "Nenhum lead recebido ainda." : "Nenhum resultado para a busca."}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border divide-y">
                {filteredLeads.map((lead) => (
                  <LeadRow key={lead.id} lead={lead} onStatus={updateStatus} onDelete={deleteLead} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PAGES TAB */}
        {activeTab === "pages" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> Páginas Principais
              </h3>
              <div className="space-y-1">
                {PAGES.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    target="_blank"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-muted transition-colors group"
                  >
                    <span>{p.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" /> Páginas de Serviços
              </h3>
              <div className="space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    target="_blank"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-muted transition-colors group"
                  >
                    <span>{s.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Páginas de Marcas
              </h3>
              <div className="space-y-1">
                {BRANDS.map((b) => (
                  <Link
                    key={b.path}
                    to={b.path}
                    target="_blank"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-muted transition-colors group"
                  >
                    <span>{b.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TOPICS TAB */}
        {activeTab === "topics" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <StatCard icon={FileText} label="Total de Tópicos" value={topics.length} color="text-purple-600 bg-purple-50" />
              <StatCard icon={TrendingUp} label="Tópicos Populares" value={popularTopics.length} color="text-blue-600 bg-blue-50" />
              <StatCard icon={BookOpen} label="Categorias" value={3} color="text-green-600 bg-green-50" />
            </div>
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b bg-muted/30">
                <div className="grid grid-cols-12 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <span className="col-span-5">Título</span>
                  <span className="col-span-3">Categoria</span>
                  <span className="col-span-2">Popular</span>
                  <span className="col-span-2 text-right">Link</span>
                </div>
              </div>
              <div className="divide-y max-h-[600px] overflow-y-auto">
                {topics.map((t) => (
                  <div key={t.id} className="grid grid-cols-12 items-center px-4 py-3 text-sm hover:bg-muted/20">
                    <span className="col-span-5 font-medium truncate pr-2">{t.title}</span>
                    <span className="col-span-3 capitalize text-muted-foreground">{t.category}</span>
                    <span className="col-span-2">
                      {t.popular ? (
                        <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium">
                          <CheckCircle className="h-3 w-3" /> Sim
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </span>
                    <span className="col-span-2 text-right">
                      <Link
                        to={`/informacoes/${t.id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
                      >
                        Ver <ExternalLink className="h-3 w-3" />
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AGENTS TAB */}
        {activeTab === "agents" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <StatCard icon={Bot} label="Agents Ativos" value={AGENTS.length} color="text-slate-600 bg-slate-50" />
              <StatCard icon={FileText} label="Arquivos de Configuração" value={AGENTS.length} color="text-blue-600 bg-blue-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {AGENTS.map((agent) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.id} className="bg-white rounded-xl shadow-sm border flex flex-col overflow-hidden">
                    {/* Card Header */}
                    <div className={`p-5 flex items-start gap-4 border-b`}>
                      <div className={`p-3 rounded-xl ${agent.iconBg} shrink-0`}>
                        <Icon className={`h-6 w-6 ${agent.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-foreground">{agent.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${agent.color}`}>
                            Ativo
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{agent.role}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-5 pt-4 pb-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="px-5 pb-4 flex-1">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 mt-3">
                        Responsabilidades
                      </h4>
                      <ul className="space-y-1.5">
                        {agent.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Triggers */}
                    <div className="px-5 pb-4 border-t pt-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Quando acionar
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {agent.triggers.map((t, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* File */}
                    <div className="px-5 pb-4">
                      <p className="text-xs text-muted-foreground/60 font-mono">{agent.file}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const StatCard = ({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-4">
    <div className={`p-3 rounded-lg ${color.split(" ")[1]}`}>
      <Icon className={`h-5 w-5 ${color.split(" ")[0]}`} />
    </div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

const QuickSection = ({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: { label: string; path: string }[];
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border">
    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
      <Icon className="h-4 w-4 text-primary" />
      {title}
    </h3>
    <div className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          target="_blank"
          className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-muted transition-colors group"
        >
          <span>{item.label}</span>
          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-muted-foreground" />
        </Link>
      ))}
    </div>
  </div>
);

const LeadRow = ({
  lead,
  onStatus,
  onDelete,
  compact,
}: {
  lead: Lead;
  onStatus: (id: number, s: Lead["status"]) => void;
  onDelete: (id: number) => void;
  compact?: boolean;
}) => {
  const date = new Date(lead.timestamp).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`p-4 ${compact ? "" : "hover:bg-muted/20"} transition-colors`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">{lead.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[lead.status]}`}>
              {statusLabel[lead.status]}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <a href={`tel:${lead.phone}`} className="flex items-center gap-1 hover:text-primary">
              <Phone className="h-3 w-3" />{lead.phone}
            </a>
            <a
              href={`https://wa.me/55${lead.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-700"
            >
              <FaWhatsapp className="h-3 w-3" />WhatsApp
            </a>
            {lead.service && <span>{lead.service}</span>}
            <span>{date}</span>
          </div>
          {!compact && lead.message && (
            <p className="text-sm text-muted-foreground mt-2 bg-muted/40 rounded p-2">{lead.message}</p>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <select
            value={lead.status}
            onChange={(e) => onStatus(lead.id, e.target.value as Lead["status"])}
            className="text-xs border rounded px-2 py-1 bg-white"
          >
            <option value="novo">Novo</option>
            <option value="em_atendimento">Em Atendimento</option>
            <option value="concluido">Concluído</option>
          </select>
          {!compact && (
            <button
              onClick={() => onDelete(lead.id)}
              className="p-1 text-muted-foreground hover:text-destructive transition-colors ml-1"
              title="Remover lead"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
