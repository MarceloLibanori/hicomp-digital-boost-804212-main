# HiComp — Multi-Agent Optimization System

Este repositório usa um sistema de agentes especializados para otimização contínua do site da HiComp Hidráulica. Cada agente tem um papel definido e opera dentro de limites claros para garantir qualidade sem regressões.

## Agentes disponíveis

| Agente | Arquivo | Responsabilidade |
|--------|---------|-----------------|
| Core | `agents/core-agent.md` | Coordenação geral, contexto do projeto, regras de segurança |
| SEO | `agents/seo-agent.md` | Schema.org, meta tags, sitemap, performance de indexação |
| Marketing | `agents/marketing-agent.md` | Copy, CTAs, posicionamento de marca, conteúdo |
| UX | `agents/ux-agent.md` | Acessibilidade, usabilidade, mobile, conversão |
| Dev | `agents/dev-agent.md` | Performance técnica, bundle, build, Core Web Vitals |
| PO | `agents/po-agent.md` | Priorização de melhorias, métricas de negócio |

## Como usar

### Revisão completa
```
/commands/full-review.txt
```

### Revisão focada
```
/commands/seo-review.txt
/commands/mobile-review.txt
/commands/conversion-review.txt
/commands/performance-review.txt
```

### Prompts de otimização
Os prompts em `/prompts/` são instruções completas para cada tipo de otimização. Copie o conteúdo do prompt e cole no início de uma sessão com o agente.

## Regras globais de segurança

1. **NUNCA** quebrar o layout em mobile ou desktop
2. **NUNCA** remover conteúdo de texto existente sem aprovação explícita
3. **NUNCA** alterar URLs de páginas já indexadas
4. **NUNCA** modificar `vercel.json` sem revisar impacto em cache e redirects
5. **SEMPRE** testar o build antes de considerar uma tarefa concluída
6. **SEMPRE** preservar todos os dados de schema.org existentes
7. **SEMPRE** manter compatibilidade com o prerender (`scripts/prerender-seo.cjs`)

## Stack

- React 18 + Vite (SWC) — SPA com prerender estático pós-build
- TypeScript + Tailwind CSS + shadcn/ui (Radix UI)
- pnpm — `pnpm install --no-frozen-lockfile` (ver `vercel.json`)
- Vercel — deploy automático via git push
- react-helmet-async — meta tags dinâmicas em runtime
- react-router-dom v6 — roteamento client-side

## Documentação

- [Setup](docs/setup.md) — instalação e configuração do ambiente
- [Workflows](docs/workflows.md) — fluxos de trabalho com agentes
- [Commands](docs/commands.md) — referência de todos os comandos
