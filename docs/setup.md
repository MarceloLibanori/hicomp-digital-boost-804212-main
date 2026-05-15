# Setup — HiComp Optimization System

## Pré-requisitos

- Node.js >= 18
- pnpm >= 8 (`npm install -g pnpm`)
- Acesso ao repositório

## Instalação

```bash
# Clone ou extraia o projeto
cd hicomp-digital-boost-80421-main

# Instalar dependências (--no-frozen-lockfile necessário após mudanças no package.json)
pnpm install --no-frozen-lockfile

# Iniciar servidor de desenvolvimento
pnpm dev
# → http://localhost:8080
```

## Build de produção

```bash
# Build completo (Vite + prerender SEO)
pnpm build

# O build faz duas coisas:
# 1. vite build → gera dist/ com assets otimizados
# 2. node scripts/prerender-seo.cjs → injeta SEO em cada rota do dist/

# Verificar resultado
ls dist/
ls dist/servicos/
```

## Preview local do build

```bash
pnpm preview
# → http://localhost:4173
```

## Linting

```bash
pnpm lint
```

## Estrutura de pastas

```
hicomp-digital-boost-80421-main/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas (1 por rota)
│   ├── utils/          # Helpers, schema factories
│   └── App.tsx         # Router + lazy loading
├── public/             # Assets estáticos (sitemap, robots, llms.txt, imagens hero)
├── scripts/
│   └── prerender-seo.cjs  # Geração de HTML estático pós-build
├── agents/             # Agentes de otimização
├── prompts/            # Prompts reutilizáveis
├── commands/           # Comandos de revisão
├── docs/               # Documentação
├── reports/            # Relatórios gerados
├── vercel.json         # Config de deploy (cache, redirects, headers)
├── vite.config.ts      # Config de build
├── .cursorrules        # Regras para o Cursor
├── AGENTS.md           # Índice de agentes
└── PROJECT_CONTEXT.md  # Contexto do projeto
```

## Variáveis de ambiente

Não há variáveis de ambiente necessárias para o build. O site não tem backend.

## Deploy

O deploy é automático no Vercel via git push. O Vercel executa:
```
pnpm install --no-frozen-lockfile
pnpm build
```
(A flag `--no-frozen-lockfile` está em `vercel.json` → `installCommand`)

## Troubleshooting

### ERR_PNPM_OUTDATED_LOCKFILE
Ocorre quando `package.json` foi alterado mas `pnpm-lock.yaml` não foi atualizado.
```bash
pnpm install --no-frozen-lockfile
git add pnpm-lock.yaml
git commit -m "chore: update lockfile"
```

### Prerender com erro
Se `pnpm build` falha no step do prerender:
```bash
node scripts/prerender-seo.cjs 2>&1 | head -50
```
Verifique se `dist/index.html` existe (o prerender precisa do build do Vite primeiro).

### TypeScript errors com imagens
Se `@types/react` não estiver instalado (node_modules ausente), os erros de tipo desaparecem após `pnpm install`.
