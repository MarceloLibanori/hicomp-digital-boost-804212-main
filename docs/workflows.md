# Workflows — HiComp Optimization System

## Workflow 1: Sprint de otimização semanal

### Objetivo
Executar melhorias incrementais a cada semana sem quebrar o site.

### Processo
1. **Segunda** — rodar `/full-review` e salvar relatório em `reports/`
2. **Terça/Quarta** — implementar itens de impacto 5 (críticos)
3. **Quinta** — revisar com `/seo-review` ou `/performance-review` focado
4. **Sexta** — deploy e validação no Vercel preview

### Checklist antes de cada deploy
- [ ] `pnpm build` sem erros
- [ ] `pnpm lint` sem erros
- [ ] Prerender gerou HTML para todas as rotas do sitemap
- [ ] Nenhuma URL de rota existente foi alterada
- [ ] JSON-LD válido em pelo menos 3 páginas representativas

---

## Workflow 2: Auditoria de SEO mensal

### Objetivo
Garantir que novos conteúdos e mudanças de layout não degradaram a indexação.

### Processo
1. Rodar `/seo-review` completo
2. Verificar Google Search Console (cobertura de indexação, erros)
3. Verificar PageSpeed Insights para página principal e 2 páginas de serviço
4. Atualizar `llms.txt` se novos serviços/produtos foram adicionados
5. Atualizar `sitemap.xml` se novas rotas foram adicionadas

---

## Workflow 3: Adição de nova página

### Objetivo
Adicionar nova rota sem quebrar SEO ou build.

### Passos obrigatórios
1. Criar componente em `src/pages/NovaPage.tsx`
2. Adicionar rota em `src/App.tsx` com `React.lazy`
3. Adicionar `<SEOEnhanced>` com title, description e canonical únicos
4. Adicionar URL em `public/sitemap.xml` com priority e changefreq
5. Adicionar rota em `scripts/prerender-seo.cjs` (array de rotas)
6. Adicionar structured data correspondente em `getStructuredDataForRoute()`
7. Rodar `pnpm build` e verificar que o novo HTML foi gerado em `dist/`

---

## Workflow 4: Atualização de copy

### Objetivo
Atualizar textos de página sem impacto em SEO ou layout.

### Regras
- Manter palavras-chave SEO mapeadas em `PROJECT_CONTEXT.md`
- Não encurtar textos que contenham schema markup
- Após alterar meta description, verificar que não ultrapassou 160 chars
- Textos sempre em português com acentuação correta

---

## Workflow 5: Otimização de performance

### Objetivo
Melhorar Core Web Vitals sem introduzir regressões funcionais.

### Processo
1. Rodar `/performance-review`
2. Medir baseline no PageSpeed Insights antes de qualquer mudança
3. Implementar uma melhoria por vez
4. Medir novamente para confirmar o ganho
5. Documentar o resultado em `reports/performance-YYYY-MM-DD.md`

### Mudanças seguras (impacto isolado)
- `loading="eager/lazy"` em imagens
- `fetchPriority="high"` no hero
- `<link rel="preload">` em index.html
- `manualChunks` em vite.config.ts

### Mudanças que requerem teste amplo
- Remover dependências de `package.json`
- Alterar `rollupOptions` no vite.config.ts
- Modificar `scripts/prerender-seo.cjs`

---

## Workflow 6: Uso dos agentes especializados

### Quando chamar cada agente

| Tarefa | Agente | Prompt/Comando |
|--------|--------|---------------|
| Revisão completa | Core | `prompts/full-ecommerce-optimization.txt` |
| Meta tags, schema | SEO | `prompts/seo-optimization.txt` |
| Textos, CTAs | Marketing | `agents/marketing-agent.md` como contexto |
| Mobile, a11y | UX | `prompts/mobile-ux-optimization.txt` |
| Bundle, build | Dev | `prompts/performance-optimization.txt` |
| Priorização | PO | `agents/po-agent.md` como contexto |

### Instrução de uso no Cursor
1. Abra o chat do Cursor (Cmd+L)
2. Cole o conteúdo do arquivo de prompt como primeira mensagem
3. O agente já terá o contexto completo para trabalhar
