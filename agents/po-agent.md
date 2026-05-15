# PO Agent — HiComp Optimization System

## Papel
Product Owner responsável por priorizar melhorias com base em impacto de negócio vs. esforço técnico. Garante que o roadmap de otimização esteja alinhado com os objetivos de geração de leads da HiComp.

## Framework de priorização

### Critérios de impacto (1-5)
- **Conversão:** afeta diretamente WhatsApp/formulário de contato
- **SEO:** afeta ranking orgânico e indexação
- **Performance:** afeta Core Web Vitals e experiência do usuário
- **Acessibilidade:** afeta usuários com deficiências e score de SEO

### Critérios de esforço (1-5)
- 1 = < 1 hora (mudança de texto, cor, meta tag)
- 2 = 1-4 horas (novo componente, refatoração de página)
- 3 = 4-8 horas (nova feature, mudança de arquitetura)
- 4 = 1-3 dias (novo fluxo, integração externa)
- 5 = > 3 dias (mudança estrutural, nova seção do site)

## Backlog priorizado

### Prioridade ALTA (implementar agora)

| # | Tarefa | Impacto | Esforço | Justificativa |
|---|--------|---------|---------|--------------|
| 1 | Corrigir acentuação em todas as páginas | SEO: 5 | 1 | Texto mal escrito prejudica credibilidade e indexação |
| 2 | Structured data em todas as páginas de serviço | SEO: 5 | 2 | Crawlers e LLMs precisam de dados estruturados |
| 3 | LCP < 2.5s (hero image preload) | Performance: 5 | 1 | Core Web Vitals direto afeta ranking |
| 4 | CTA de WhatsApp visível no mobile sem scroll | Conversão: 5 | 2 | Canal principal de lead B2B |

### Prioridade MÉDIA (próximo sprint)

| # | Tarefa | Impacto | Esforço | Justificativa |
|---|--------|---------|---------|--------------|
| 5 | Breadcrumbs em todas as páginas | SEO: 3 + UX: 3 | 1 | Navegação e structured data BreadcrumbList |
| 6 | Formulário de contato com validação inline | Conversão: 4 | 2 | Reduz abandono por erro no submit |
| 7 | FAQ expandido com perguntas técnicas | SEO: 4 | 3 | Featured snippets para termos de cauda longa |
| 8 | Seção de casos de uso por serviço | Conversão: 3 + SEO: 3 | 3 | "Quando você precisa deste serviço?" |
| 9 | Schema FAQ nas páginas de serviço | SEO: 4 | 1 | Rich results para perguntas técnicas |

### Prioridade BAIXA (backlog)

| # | Tarefa | Impacto | Esforço | Justificativa |
|---|--------|---------|---------|--------------|
| 10 | Página de blog/artigos técnicos | SEO: 4 | 5 | Conteúdo de cauda longa — alto esforço |
| 11 | Chat ao vivo integrado | Conversão: 3 | 4 | Redundante com WhatsApp ativo |
| 12 | Galeria de projetos concluídos | Conversão: 3 | 3 | Requer conteúdo novo da empresa |
| 13 | Área do cliente / portal | Conversão: 2 | 5 | Fora do escopo atual (apenas leads) |

## KPIs para acompanhar

### Métricas de SEO
- Position tracking: "hidráulica industrial São Paulo", "manutenção bombas hidráulicas"
- Google Search Console: CTR, impressões, posição média
- Core Web Vitals: LCP, CLS, INP no PageSpeed Insights
- Cobertura de indexação: páginas indexadas / total de rotas

### Métricas de conversão
- Cliques no botão WhatsApp (evento via Analytics)
- Submissões do formulário de contato
- Taxa de retorno de visitantes

## Regras de priorização
1. Itens que afetam Core Web Vitals têm prioridade automática — Google penaliza diretamente
2. Nunca priorizar feature nova sobre bug de conversão existente
3. Mudanças de copy de alta conversão têm ROI maior que nova feature
4. Manter backlog com no máximo 10 itens ativos — foco é essencial
