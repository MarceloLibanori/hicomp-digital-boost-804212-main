# PROJECT_CONTEXT — HiComp Hidráulica

## Sobre a empresa

**HiComp Hidráulica** é uma empresa B2B especializada em componentes e manutenção de sistemas hidráulicos industriais, com sede em São Paulo (Vila Maria Alta). Atende indústrias em todo o Brasil.

- **Site:** https://www.hicomp.com.br
- **Telefone:** (11) 2619-5457
- **WhatsApp:** (11) 99246-5636
- **E-mail:** contato@hicomp.com.br
- **Endereço:** Rua Zalina Rolim, 647 — Vila Maria Alta, São Paulo/SP — CEP 02127-000

## Modelo de negócio

- **Tipo:** B2B lead-gen (sem e-commerce/checkout)
- **Conversão principal:** Contato via WhatsApp, telefone ou formulário web
- **Público-alvo:** Gestores de manutenção, técnicos industriais, compradores de peças hidráulicas
- **Área de atuação:** Brasil inteiro; atendimento presencial na Grande São Paulo

## Produtos e serviços principais

| Categoria | Detalhes |
|-----------|---------|
| Bombas hidráulicas | Pistão, engrenagem, palhetas — Parker, Rexroth, Vickers, Denison |
| Cilindros hidráulicos | Reparo, fabricação sob medida, vedações |
| Válvulas hidráulicas | Direcionais, proporcionais, pressão, alivio |
| Unidades hidráulicas | Projeto, fabricação, manutenção de centrais completas |
| Manutenção preventiva | Diagnóstico, revisão programada, troca de componentes |
| Componentes e peças | Vedações, retentores, mangueiras, conexões |

## Marcas trabalhadas

Parker Hannifin, Bosch Rexroth, Eaton Vickers, Denison Hydraulics, HDA, Yuken, Kawasaki, Atos, Moog, Linde

## Stack técnica

```
Frontend:   React 18 + Vite (SWC) + TypeScript
Estilo:     Tailwind CSS + shadcn/ui (Radix UI primitives)
Roteamento: react-router-dom v6
SEO:        react-helmet-async + prerender estático pós-build
Schema:     JSON-LD via scripts/prerender-seo.cjs (inject no HTML estático)
Deploy:     Vercel (git push → CI/CD automático)
Package:    pnpm (--no-frozen-lockfile no Vercel)
Analytics:  @vercel/analytics
```

## Arquitetura de renderização

```
vite build → dist/index.html (shell SPA vazio)
     ↓
prerender-seo.cjs → percorre todas as rotas e injeta:
  - <title>, <meta description>, <meta og:*>
  - JSON-LD structured data (LocalBusiness, WebPage, Service, BreadcrumbList)
  - Conteúdo textual básico de cada rota no #root
     ↓
Vercel serve dist/ com rewrites → /index.html (SPA fallback)
```

## Estrutura de rotas

| URL | Componente | Prioridade SEO |
|-----|-----------|---------------|
| `/` | `Index.tsx` + `Home.tsx` | 1.0 |
| `/empresa` | `Empresa.tsx` | 0.8 |
| `/servicos` | (index) | 0.9 |
| `/servicos/manutencao-bombas-hidraulicas` | `ManutencaoBombasHidraulicas.tsx` | 0.9 |
| `/servicos/cilindros-hidraulicos` | `CilindrosHidraulicos.tsx` | 0.9 |
| `/servicos/valvulas-hidraulicas` | `ValvulasHidraulicas.tsx` | 0.9 |
| `/servicos/hidraulica-industrial` | `HidraulicaIndustrial.tsx` | 0.9 |
| `/servicos/assistencia-tecnica-industrial` | `AssistenciaTecnicaIndustrial.tsx` | 0.9 |
| `/produtos` | (index) | 0.8 |
| `/informacoes` | `Informacoes.tsx` | 0.7 |
| `/informacoes/*` | (artigos individuais) | 0.6 |
| `/contato` | `Contato.tsx` | 0.8 |
| `/faq` | `FAQ.tsx` | 0.7 |

## KPIs e métricas-alvo

- **Core Web Vitals:** LCP < 2.5s, CLS < 0.1, INP < 200ms
- **PageSpeed Insights:** > 85 mobile, > 95 desktop
- **Cobertura de indexação:** 100% das rotas com JSON-LD correto
- **Conversão:** Taxa de cliques em WhatsApp / formulário de contato
- **Google Search Console:** CTR orgânico, posição média para termos-chave

## Palavras-chave prioritárias

- hidráulica industrial São Paulo
- manutenção de bombas hidráulicas
- reparo de cilindros hidráulicos
- válvulas hidráulicas Parker Rexroth
- empresa de hidráulica industrial
- peças hidráulicas São Paulo
- conserto de bomba hidráulica

## Arquivos críticos — não modificar sem análise

| Arquivo | Por que é crítico |
|---------|------------------|
| `scripts/prerender-seo.cjs` | Gera todo o HTML estático; erros quebram o build |
| `public/sitemap.xml` | Indexação no Google; alterar URLs causa perda de ranking |
| `vercel.json` | Cache, redirects, headers de segurança — impacto direto em produção |
| `src/utils/seoSchemas.ts` | Base para todos os schemas JSON-LD do site |
| `src/components/SEOEnhanced.tsx` | Componente central de SEO usado em todas as páginas |
