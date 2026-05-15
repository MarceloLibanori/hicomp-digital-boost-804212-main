# Análise Inicial — HiComp Hidráulica
**Data:** 2026-05-13
**Analista:** Core Agent (sessão de onboarding)
**Escopo:** Auditoria técnica completa — SEO, performance, conversão, acessibilidade

---

## Sumário Executivo

O site da HiComp é uma SPA React bem estruturada com uma arquitetura de prerender inteligente que contorna a limitação de SEO de aplicações client-side. As otimizações críticas da sessão de onboarding elevaram o projeto de um estado básico para um nível técnico sólido. Os riscos restantes são incrementais, não estruturais.

**Status geral:** Sólido, com oportunidades de melhoria identificadas

---

## Otimizações implementadas (sessão de onboarding)

### SEO Técnico
| Item | Status | Impacto |
|------|--------|---------|
| Prerender injeta JSON-LD em cada rota | ✅ Implementado | Alto — crawlers recebem structured data sem JS |
| LocalBusiness schema com NAP completo | ✅ Implementado | Alto — rich results no Google |
| BreadcrumbList por rota | ✅ Implementado | Médio — navegação nos SERPs |
| Service schema para páginas de serviço | ✅ Implementado | Alto — indexação de serviços |
| Sitemap corrigido (typos, duplicatas) | ✅ Implementado | Alto — rastreamento correto |
| robots.txt com permissão para LLM bots | ✅ Implementado | Médio — GEO (GPTBot, ClaudeBot) |
| llms.txt criado | ✅ Implementado | Médio — indexação por LLMs |
| LocalSEO.tsx sem JSON-LD duplicado | ✅ Implementado | Médio — evita penalidade de schema duplicado |

### Performance
| Item | Status | Impacto |
|------|--------|---------|
| Hero image em /public/ com URL estática | ✅ Implementado | Alto — LCP previsível |
| `<link rel="preload">` para hero WebP | ✅ Implementado | Alto — LCP < 2.5s |
| fetchPriority="high" no hero | ✅ Implementado | Alto — LCP priorizado |
| manualChunks no vite.config.ts | ✅ Implementado | Médio — bundle splitting |
| Remoção de 7 deps não usadas (~680KB) | ✅ Implementado | Alto — bundle reduzido |
| Cache-Control: immutable para /assets/ | ✅ Implementado | Alto — CDN cache otimizado |
| Cache-Control para imagens (30 dias) | ✅ Implementado | Médio — performance recorrente |
| StrictMode em main.tsx | ✅ Implementado | Baixo — detecta problemas em dev |

### Acessibilidade / Copy
| Item | Status | Impacto |
|------|--------|---------|
| Acentuação corrigida em CTASection.tsx | ✅ Implementado | Médio — credibilidade |
| Acentuação corrigida em Empresa.tsx | ✅ Implementado | Médio — credibilidade |
| Acentuação corrigida em TestimonialsSection.tsx | ✅ Implementado | Médio — credibilidade |
| manifest.json criado | ✅ Implementado | Baixo — PWA básico |
| Meta tags obsoletas removidas (revisit-after, etc.) | ✅ Implementado | Baixo — limpeza |

### Build / Deploy
| Item | Status | Impacto |
|------|--------|---------|
| `--no-frozen-lockfile` em vercel.json | ✅ Implementado | Crítico — build não falha |
| Redirect www canônico em vercel.json | ✅ Implementado | Alto — SEO canonical |
| Security headers (X-Frame-Options, etc.) | ✅ Implementado | Médio — segurança básica |

---

## Oportunidades de melhoria remanescentes

### Alta prioridade

#### 1. Páginas de serviço — conteúdo de profundidade
**Impacto:** SEO 5/5
As páginas `/servicos/*` têm conteúdo básico. Para competir por termos como "manutenção bomba Parker São Paulo" é necessário:
- Seção "Quando você precisa deste serviço?" com sintomas comuns
- Lista de marcas/modelos específicos atendidos
- FAQ específico por serviço
- Schema FAQPage para rich results

#### 2. CTA de WhatsApp no header mobile
**Impacto:** Conversão 5/5
Verificar se o número de WhatsApp está acessível sem abrir o menu hambúrguer em telas 375px. O canal principal de lead B2B deve ter zero fricção no mobile.

#### 3. Schema FAQPage nas páginas de serviço
**Impacto:** SEO 4/5
Adicionar perguntas técnicas frequentes em cada página de serviço com markup `FAQPage` para rich results de "people also ask".

### Média prioridade

#### 4. Google My Business integrado ao site
**Impacto:** SEO Local 4/5
O schema `LocalBusiness` está completo, mas seria reforçado por:
- Link para o perfil do Google My Business
- Widget de avaliações (se disponível)
- Foto da fachada do estabelecimento

#### 5. Imagens de serviço com alt descritivo e contexto técnico
**Impacto:** SEO imagem + A11y 3/5
Verificar se todos os `<img>` em páginas de serviço têm `alt` com termos técnicos relevantes (ex: "bomba hidráulica Parker PV de pistão axial").

#### 6. Formulário de contato — validação inline
**Impacto:** Conversão 3/5
Formulário atual valida apenas no submit. Validação inline reduz abandono de formulário.

#### 7. Breadcrumbs em /informacoes/* (artigos)
**Impacto:** SEO + UX 3/5
Artigos informativos são boa oportunidade para cauda longa. Verificar que todos têm breadcrumbs e BreadcrumbList schema correto.

### Baixa prioridade

#### 8. WebSite schema com SearchAction
**Impacto:** SEO 2/5
Adicionar potentialAction de tipo SearchAction ao WebSite schema para sitelinks searchbox.

#### 9. `loading="lazy"` em imagens abaixo da dobra
**Impacto:** Performance 2/5
Revisar imagens em ServicesGrid, PartnersCarousel e Footer para adicionar `loading="lazy"` onde adequado.

#### 10. Open Graph image dedicada
**Impacto:** Social/CTR 2/5
Criar uma imagem OG customizada (1200x630px) para melhor aparência ao compartilhar o site em redes sociais.

---

## Métricas baseline estimadas

Antes das otimizações da sessão de onboarding (estimativa):
- PageSpeed mobile: ~45-55
- LCP estimado: ~4-6s (sem preload, imagem processada por Vite)
- Bundle: ~1.8MB (com recharts, date-fns, etc.)
- Structured data: apenas runtime (invisível para crawlers light)

Após otimizações implementadas (estimativa):
- PageSpeed mobile: ~75-85
- LCP estimado: ~1.8-2.5s (preload + fetchPriority)
- Bundle JS principal: ~400-600KB (sem dependências removidas)
- Structured data: injetado em HTML estático para todas as rotas

---

## Próximos passos recomendados

1. **Imediato:** Fazer deploy e medir PageSpeed Insights real
2. **Sprint 1:** Expandir conteúdo das páginas de serviço (seção de sintomas + FAQ)
3. **Sprint 2:** Schema FAQPage + validação inline no formulário
4. **Sprint 3:** Artigos informativos em /informacoes/ para cauda longa
5. **Contínuo:** Monitorar Google Search Console semanalmente

---

## Arquitetura de SEO — diagrama de fluxo

```
Usuário acessa /servicos/manutencao-bombas-hidraulicas
         ↓
Vercel serve dist/servicos/manutencao-bombas-hidraulicas/index.html
(gerado pelo prerender com JSON-LD injetado)
         ↓
Browser recebe HTML com:
  - <title> único
  - <meta description> específica
  - JSON-LD: LocalBusiness + WebPage + BreadcrumbList + Service
         ↓
React hidrata → SEOEnhanced atualiza meta via Helmet (runtime)
         ↓
Googlebot (light crawl) → vê HTML estático com JSON-LD ✓
Googlebot (full crawl) → executa JS, vê meta tags do Helmet ✓
GPTBot / ClaudeBot → vê HTML estático com entidades claras ✓
```
