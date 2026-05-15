# Commands — Referência Completa

## Visão geral

Os comandos em `/commands/` são atalhos para auditorias e otimizações recorrentes. Cada arquivo contém o escopo, arquivos relevantes e critérios de sucesso para uma revisão focada.

## Como usar

1. Abra o arquivo de comando em `/commands/`
2. Leia o escopo e os arquivos relevantes
3. Cole o conteúdo do prompt correspondente em `/prompts/` no chat do seu agente de IA
4. O agente executará a revisão com contexto completo

---

## /full-review

**Arquivo:** `commands/full-review.txt`
**Prompt base:** `prompts/full-ecommerce-optimization.txt`

Revisão completa em 5 dimensões: SEO, performance, copy, acessibilidade e structured data.
Use como ponto de entrada para sprints de otimização.

**Saída:** `reports/full-review-YYYY-MM-DD.md`

---

## /seo-review

**Arquivo:** `commands/seo-review.txt`
**Prompt base:** `prompts/seo-optimization.txt`

Auditoria de SEO técnico e GEO:
- Meta tags em todas as páginas
- JSON-LD structured data (prerender + runtime)
- Sitemap.xml e robots.txt
- llms.txt para indexação por LLMs

**Saída:** `reports/seo-review-YYYY-MM-DD.md`

---

## /mobile-review

**Arquivo:** `commands/mobile-review.txt`
**Prompt base:** `prompts/mobile-ux-optimization.txt`

Auditoria de UX mobile e acessibilidade:
- Navegação e CTAs em 375px viewport
- Áreas de toque (≥ 44x44px)
- Formulário de contato no mobile
- WCAG 2.1 AA compliance

**Saída:** `reports/mobile-review-YYYY-MM-DD.md`

---

## /conversion-review

**Arquivo:** `commands/conversion-review.txt`
**Prompt base:** `prompts/conversion-optimization.txt`

Auditoria de copy e conversão:
- Funil de conversão em cada página
- CTAs (texto, posição, visibilidade)
- Proposta de valor e trust signals
- Oportunidades de melhoria de copy

**Saída:** `reports/conversion-review-YYYY-MM-DD.md`

---

## /performance-review

**Arquivo:** `commands/performance-review.txt`
**Prompt base:** `prompts/performance-optimization.txt`

Auditoria de performance técnica:
- Core Web Vitals (LCP, CLS, INP)
- Bundle analysis (tamanho dos chunks)
- Lazy loading e code splitting
- Cache-Control headers

**Saída:** `reports/performance-review-YYYY-MM-DD.md`

---

## Frequência recomendada

| Comando | Frequência | Trigger |
|---------|-----------|---------|
| `/full-review` | Mensal | Início de sprint de otimização |
| `/seo-review` | Mensal | Após adição de páginas ou mudanças de copy |
| `/mobile-review` | Trimestral | Após mudanças de layout |
| `/conversion-review` | Trimestral | Antes de campanha ou mudança de CTA |
| `/performance-review` | Após cada deploy | Quando PageSpeed cair < 85 |
