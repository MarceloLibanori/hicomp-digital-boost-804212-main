import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Building2, ShieldCheck, Truck, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { generateContactPageSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/utils/seoSchemas";

type FormState = "idle" | "submitting" | "success" | "error";

const Contato = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Informe seu nome";
    if (!form.phone.trim()) e.phone = "Informe um telefone para contato";
    if (!form.message.trim()) e.message = "Descreva o que você precisa";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const saveLead = (data: typeof form) => {
    const leads = JSON.parse(localStorage.getItem("hicomp_leads") || "[]");
    leads.unshift({
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
      status: "novo",
    });
    localStorage.setItem("hicomp_leads", JSON.stringify(leads));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setFormState("submitting");
    saveLead(form);
    const msg = `Olá! Sou ${form.name}.%0AServiço: ${form.service || "Não especificado"}.%0A${form.message}%0ATelefone: ${form.phone}`;
    window.open(`https://wa.me/5511992465636?text=${msg}`, "_blank");
    setFormState("success");
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateContactPageSchema(),
      generateLocalBusinessSchema(),
      generateBreadcrumbSchema([
        { name: "Início", url: "/" },
        { name: "Contato", url: "/contato" }
      ])
    ]
  };

  // FAQs específicas para página de contato
  const contactFAQs = [
    {
      question: "Como solicitar orçamento de manutenção hidráulica?",
      answer: "Você pode solicitar orçamento grátis pelo WhatsApp (11) 99246-5636, telefone (11) 2619-5457, ou visitando nossa sede na Vila Maria Alta, São Paulo. Envie fotos da peça para avaliação rápida."
    },
    {
      question: "Qual o horário de atendimento da HiComp?",
      answer: "Atendemos de segunda a sexta das 8h às 18h. WhatsApp disponível 24h para receber suas mensagens."
    },
    {
      question: "Vocês fazem manutenção em todo o Brasil?",
      answer: "Sim! A HiComp atende todo o Brasil. Enviamos e recebemos peças via transportadora. Para clientes de São Paulo, oferecemos coleta e entrega."
    }
  ];

  return (
    <>
      <SEOEnhanced
        title="Contato HiComp | Orçamento Grátis Manutenção Hidráulica SP"
        description="Solicite orçamento grátis para manutenção de bombas e cilindros hidráulicos em São Paulo. ☎ (11) 2619-5457 | WhatsApp (11) 99246-5636. Resposta em 24h!"
        keywords="orçamento bomba hidráulica SP, contato manutenção hidráulica São Paulo, telefone HiComp, whatsapp hidráulica SP, orçamento cilindro hidráulico, manutenção hidráulica orçamento grátis"
        canonical="/contato"
        structuredData={contactSchema}
        faq={contactFAQs}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-center">
              Solicite Seu Orçamento Grátis
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Especialistas em manutenção de bombas hidráulicas Parker, Rexroth, Vickers e Denison. 
              Entre em contato para avaliação sem compromisso.
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Informações de Contato */}
              <div>
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                  Fale com Nossos Especialistas
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Endereço - Manutenção Hidráulica SP</h3>
                      <p className="text-muted-foreground">
                        Rua Zalina Rolim, 647 - Vila Maria Alta<br />
                        São Paulo - SP, CEP 02127-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefones - Orçamento Grátis</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+551126195457" className="block hover:text-primary transition-smooth text-lg font-medium">
                          (11) 2619-5457 - Comercial
                        </a>
                        <a href="tel:+551126195482" className="block hover:text-primary transition-smooth">
                          (11) 2619-5482 - Técnico
                        </a>
                        <a
                          href="https://wa.me/5511992465636"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-primary transition-smooth text-lg font-medium text-emerald-600"
                        >
                          (11) 99246-5636 - WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        <strong>Segunda a Sexta:</strong> 8h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-lg border border-border bg-card p-5">
                      <Building2 className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Empresa com base física</h3>
                      <p className="text-sm text-muted-foreground">
                        Endereço comercial em São Paulo com mapa, telefone fixo, WhatsApp e canais institucionais visíveis.
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                      <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Atendimento técnico</h3>
                      <p className="text-sm text-muted-foreground">
                        Suporte para bombas, cilindros, válvulas e unidades hidráulicas com foco em aplicação industrial.
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                      <Truck className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Cobertura nacional</h3>
                      <p className="text-sm text-muted-foreground">
                        Atendimento local em São Paulo e envio de componentes e equipamentos para clientes em todo o Brasil.
                      </p>
                    </div>
                  </div>

                  {/* Formulário de contato */}
                  <div className="pt-4">
                    {formState === "success" ? (
                      <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-center">
                        <CheckCircle className="h-10 w-10 text-emerald-500 mx-auto mb-3" aria-hidden="true" />
                        <h3 className="font-bold text-lg text-emerald-800 mb-1">Mensagem enviada!</h3>
                        <p className="text-emerald-700 text-sm">Redirecionamos sua mensagem para o nosso WhatsApp. Retornaremos em breve.</p>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        noValidate
                        aria-label="Formulário de solicitação de orçamento"
                        className="space-y-4 bg-card border border-border rounded-lg p-6"
                      >
                        <h3 className="text-lg font-bold mb-2">Solicite seu orçamento</h3>

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Nome <span aria-hidden="true" className="text-destructive">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Seu nome ou empresa"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                          {errors.name && <p id="name-error" className="text-destructive text-sm mt-1" role="alert">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Telefone / WhatsApp <span aria-hidden="true" className="text-destructive">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                          />
                          {errors.phone && <p id="phone-error" className="text-destructive text-sm mt-1" role="alert">{errors.phone}</p>}
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-1">
                            Serviço necessário
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Selecione um serviço (opcional)</option>
                            <option value="Manutenção de Bomba Hidráulica">Manutenção de Bomba Hidráulica</option>
                            <option value="Reparo de Cilindro Hidráulico">Reparo de Cilindro Hidráulico</option>
                            <option value="Manutenção de Válvula Hidráulica">Manutenção de Válvula Hidráulica</option>
                            <option value="Unidade Hidráulica">Unidade Hidráulica</option>
                            <option value="Assistência Técnica Industrial">Assistência Técnica Industrial</option>
                            <option value="Componentes e Peças">Componentes e Peças</option>
                            <option value="Outro">Outro</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Descreva sua necessidade <span aria-hidden="true" className="text-destructive">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Descreva o equipamento, marca, modelo e o problema ou necessidade..."
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                          />
                          {errors.message && <p id="message-error" className="text-destructive text-sm mt-1" role="alert">{errors.message}</p>}
                        </div>

                        <Button
                          type="submit"
                          variant="whatsapp"
                          size="lg"
                          className="w-full"
                          disabled={formState === "submitting"}
                          aria-busy={formState === "submitting"}
                        >
                          {formState === "submitting" ? (
                            "Enviando..."
                          ) : (
                            <>
                              <FaWhatsapp className="mr-2 h-5 w-5" aria-hidden="true" />
                              Enviar pelo WhatsApp
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Sua mensagem será enviada via WhatsApp. Respondemos em até 24h em dias úteis.
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                {/* Mapa atualizado */}
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.852951575686!2d-46.5955974253968!3d-23.494286959668387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5ffdc251483%3A0x45941f266e3c2628!2sHicomp%20Hidr%C3%A1ulica!5e0!3m2!1spt-BR!2sbr!4v1730841850000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HiComp Hidráulica - Manutenção de Bombas e Cilindros Hidráulicos São Paulo"
                  />
                </div>

                {/* Botão para abrir o mapa no Google Maps */}
                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/place/Hicomp+Hidr%C3%A1ulica/@-23.4942869,-46.5955974,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Ver localização no Google Maps →
                  </a>
                </div>

                {/* Seção de serviços para SEO */}
                <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Serviços de Manutenção Hidráulica</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Manutenção de bombas hidráulicas Parker</li>
                      <li>• Reparo de bombas Rexroth</li>
                      <li>• Conserto de bombas Vickers</li>
                      <li>• Manutenção de bombas Denison</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Reparo de cilindros hidráulicos</li>
                      <li>• Manutenção de válvulas hidráulicas</li>
                      <li>• Reparo de unidades hidráulicas</li>
                      <li>• Fabricação de blocos manifold</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">Como funciona o atendimento da HiComp</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground mb-2">1. Envio da demanda</p>
                      <p>O cliente envia fotos, modelo do componente ou descreve a aplicação por telefone, WhatsApp ou e-mail.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">2. Avaliação técnica</p>
                      <p>A equipe analisa a necessidade de manutenção, reposição ou fabricação e orienta o melhor caminho.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">3. Orçamento e atendimento</p>
                      <p>Após o diagnóstico, a HiComp envia orçamento e organiza coleta, entrega ou envio conforme a região.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contato;
