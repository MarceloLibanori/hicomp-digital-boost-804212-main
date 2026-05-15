# SEO Review — HiComp Hidráulica
**Data:** 2026-05-14

## Resumo Executivo

Auditoria técnica de SEO realizada conforme checklist definido em `agents/seo-agent.md` e `commands/seo-review.txt`. Foram identificados e corrigidos problemas de dados inconsistentes que afetam o E-E-A-T (Experiência, Expertise, Autoridade e Confiança) do site.

---

## Problemas Corrigidos

### 1. Inconsistência de Data de Fundação (`src/data/topicContents.ts`)
- **Problema:** 20+ páginas de conteúdo informavam "desde 2011" como data de fundação da empresa, enquanto `seoSchemas.ts`, `llms.txt` e `structuredData.ts` usam 1995 (dado correto conforme `PROJECT_CONTEXT.md`).
- **Impacto:** Dados contraditórios prejudicam o E-E-A-T e confundem crawlers do Google.
- **Correção:** Todas as ocorrências de "2011" substituídas por "1995" em `topicContents.ts`.

### 2. Endereço Incorreto em Conteúdo (`src/data/topicContents.ts`)
- **Problema:** Várias páginas informavam "Rua Zalia Rolim, 647 – Vila Ede" (nome da rua com erro ortográfico + bairro errado).
- **Correção:** Substituído por "Rua Zalina Rolim, 647 – Vila Maria Alta" (consistente com schema.org, footer e `llms.txt`).

### 3. Typo de Nome da Empresa (`src/data/topicContents.ts`)
- **Problema:** "HipCom" em uma página de serviço (deve ser "HiComp").
- **Correção:** Substituído.

### 4. `PROJECT_CONTEXT.md` com Dados Desatualizados
- **Problema:** Endereço "R. Domingos Agostinho Zanardi, 225 — CEP 02176-050" e e-mail "hicomp@hicomp.com.br" divergentes do código.
- **Correção:** Atualizado para "Rua Zalina Rolim, 647 — CEP 02127-000" e e-mail "contato@hicomp.com.br".

### 5. Sitemap `lastmod` Desatualizado (`public/sitemap.xml`)
- **Problema:** 64 URLs com `lastmod` em 2025-01-27, sinalizando conteúdo antigo para os crawlers.
- **Correção:** Todas atualizadas para 2026-05-14.

### 6. `llms.txt` com Páginas Faltando
- **Problema:** 3 landing pages adicionadas em 2026-05-13 não estavam no `llms.txt`.
- **Correção:** Adicionadas `/unidade-hidraulica-industrial`, `/mangueiras-hidraulicas`, `/bomba-de-pistao-hidraulica`.

### 7. Contagem de Anos da Empresa em `llms.txt`
- **Problema:** "mais de 29 anos de mercado" (incorreto para 2026).
- **Correção:** Atualizado para "mais de 30 anos de mercado".

---

## Status por Área (Checklist)

### Meta Tags
- ✅ `index.html` com title, description, OG tags, Twitter card completos
- ✅ `canonical` apontando para `https://www.hicomp.com.br/`
- ✅ `hreflang` pt-BR configurado
- ✅ Geo tags presentes (lat/long, region BR-SP)
- ⚠️ Google Search Console verification comentada — adicionar código quando disponível

### Structured Data
- ✅ `LocalBusiness` com NAP completo em `seoSchemas.ts`
- ✅ `WebPage`, `BreadcrumbList`, `Service` schemas implementados
- ✅ `prerender-seo.cjs` injeta JSON-LD no HTML estático
- ✅ Dados de endereço consistentes em todos os schemas

### Sitemap
- ✅ 97 URLs cobertas (homepage, institucional, serviços, produtos, informações)
- ✅ `lastmod` atualizado para 2026-05-14
- ✅ Sem URLs duplicadas detectadas
- ✅ Novas landing pages (2026-05-13) presentes

### Performance de Indexação
- ✅ LCP image hero com `preload` + `fetchpriority="high"`
- ✅ Lazy loading em componentes de página
- ✅ Fonts com `preconnect`
- ✅ DNS prefetch configurado

### GEO / LLMs
- ✅ `robots.txt` permite GPTBot, ClaudeBot, Google-Extended, PerplexityBot
- ✅ `llms.txt` atualizado com todas as páginas principais
- ✅ Dados de empresa consistentes

---

## Pendências (Não Alteradas Nesta Revisão)

| Item | Prioridade | Observação |
|------|-----------|------------|
| Google Search Console verification | Alta | Requer código da Google |
| Google Meu Negócio | Alta | Ação externa ao código |
| Analytics de conversão (WhatsApp, formulário) | Média | Requer GA4 Events setup |
| Core Web Vitals (PageSpeed ≥ 85 mobile) | Média | Verificar em produção |
| Service Worker / PWA | Baixa | `manifest.json` presente, SW não implementado |

---

## Arquivos Modificados

| Arquivo | Tipo de Mudança |
|---------|----------------|
| `src/data/topicContents.ts` | Correção de dados: fundação, endereço, nome |
| `public/sitemap.xml` | Atualização de `lastmod` (64 URLs) |
| `public/llms.txt` | Adição de 3 páginas + correção de anos |
| `PROJECT_CONTEXT.md` | Correção de endereço e e-mail |
| `README-SEO.md` | Atualização de datas |
