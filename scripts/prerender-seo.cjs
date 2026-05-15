const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.hicomp.com.br";
const DIST_DIR = path.resolve(__dirname, "..", "dist");
const PUBLIC_SITEMAP = path.resolve(__dirname, "..", "public", "sitemap.xml");
const TODAY = new Date().toISOString().slice(0, 10);

const coreRoutes = {
  "/": {
    title: "Hicomp | Hidráulica Industrial em São Paulo | Manutenção e Reparo",
    description:
      "Hicomp é especialista em hidráulica industrial em São Paulo. Manutenção de bombas, cilindros e válvulas hidráulicas. Atendimento técnico especializado.",
    headline: "Hidráulica industrial, manutenção e peças técnicas em São Paulo",
    intro:
      "A HiComp atua com manutenção de bombas hidráulicas, cilindros hidráulicos, válvulas, unidades hidráulicas e peças pneumáticas para indústrias em São Paulo e em todo o Brasil.",
    body: [
      "O site reúne soluções para manutenção corretiva e preventiva, fabricação sob medida, venda de componentes hidráulicos e suporte técnico para parada de linha.",
      "Atendemos demandas com foco em Parker, Rexroth, Vickers, Denison, HDA e outras marcas presentes em sistemas óleo-hidráulicos industriais.",
    ],
  },
  "/informacoes": {
    title: "Produtos e Serviços Hidráulicos | Bombas, Cilindros, Válvulas SP",
    description:
      "Catálogo completo de bombas hidráulicas, cilindros hidráulicos e válvulas. Marcas Parker, Rexroth, Vickers, Denison. Manutenção especializada em São Paulo.",
    headline: "Enciclopédia de Hidráulica Industrial — HiComp",
    intro:
      "Central completa de conhecimento técnico em hidráulica industrial: bombas, cilindros, válvulas, motores, filtros, unidades hidráulicas e manutenção. A HiComp é referência nacional em componentes e serviços hidráulicos para indústrias de todos os segmentos.",
    body: [
      "Cada tópico foi organizado para responder buscas específicas de compra, reparo, aplicação técnica e comparação de componentes hidráulicos industriais das marcas Parker, Rexroth, Vickers, Denison, Eaton e Sauer Danfoss.",
      "Esse hub semântico ajuda o Google a entender a cobertura temática completa do domínio e facilita a navegação interna do usuário entre categorias, marcas e serviços hidráulicos.",
    ],
  },
  "/informacoes/hub-bombas-hidraulicas": {
    title: "Guia Completo de Bombas Hidráulicas | HiComp",
    description: "Tudo sobre bombas hidráulicas: tipos, marcas, aplicações, manutenção e problemas comuns. Parker, Rexroth, Vickers, Denison. Especialistas em São Paulo.",
    headline: "Guia Completo de Bombas Hidráulicas Industriais",
    intro: "Hub de conhecimento técnico sobre bombas hidráulicas industriais: pistão axial, engrenagem, palhetas, alta pressão. Marcas Parker, Rexroth, Vickers, Denison, Eaton e Sauer Danfoss. Manutenção, reparo e fornecimento em São Paulo.",
    body: [
      "Bombas hidráulicas são o coração de qualquer sistema hidráulico industrial. A escolha correta entre bomba de pistão axial, engrenagem ou palhetas define a eficiência e durabilidade do sistema.",
      "A HiComp realiza manutenção, reparo e fornecimento de bombas hidráulicas de todas as marcas líderes para indústrias em São Paulo e todo o Brasil.",
    ],
  },
  "/informacoes/hub-valvulas-hidraulicas": {
    title: "Guia Completo de Válvulas Hidráulicas | HiComp",
    description: "Tudo sobre válvulas hidráulicas: direcionais, proporcionais, pressão, retenção. Parker, Rexroth, Vickers. Especialistas em São Paulo.",
    headline: "Guia Completo de Válvulas Hidráulicas Industriais",
    intro: "Hub técnico sobre válvulas hidráulicas: direcionais, proporcionais, limitadoras de pressão, redutoras e de retenção. Marcas Parker, Rexroth, Vickers, Bosch. Fornecimento, manutenção e suporte técnico em São Paulo.",
    body: [
      "Válvulas hidráulicas controlam o fluxo, a direção e a pressão em sistemas hidráulicos industriais. A escolha correta garante segurança, eficiência e longa vida útil.",
      "A HiComp fornece e mantém válvulas hidráulicas das principais marcas para indústrias de todos os segmentos em São Paulo e todo o Brasil.",
    ],
  },
  "/informacoes/hub-cilindros-hidraulicos": {
    title: "Guia Completo de Cilindros Hidráulicos | HiComp",
    description: "Tudo sobre cilindros hidráulicos: dupla ação, simples efeito, telescópico, inox, flangeado. Fabricação, reparo e manutenção em São Paulo.",
    headline: "Guia Completo de Cilindros Hidráulicos Industriais",
    intro: "Hub técnico sobre cilindros hidráulicos industriais: dupla ação, simples efeito, telescópico, inox e flangeado. Aplicações em prensas, tratores, escavadeiras e sistemas industriais. Fabricação sob medida, reparo e manutenção pela HiComp em São Paulo.",
    body: [
      "Cilindros hidráulicos são atuadores lineares que convertem energia hidráulica em força mecânica. A HiComp fabrica, reforma e mantém cilindros para todas as aplicações industriais.",
      "Do diagnóstico à fabricação sob medida, a HiComp oferece solução completa em cilindros hidráulicos para paradas de linha e projetos novos.",
    ],
  },
  "/informacoes/hub-atuadores-hidraulicos": {
    title: "Guia Completo de Atuadores Hidráulicos | HiComp",
    description: "Tudo sobre atuadores hidráulicos: lineares, rotativos, motores hidráulicos. Parker, Rexroth, Sauer Danfoss. Especialistas em São Paulo.",
    headline: "Guia Completo de Atuadores Hidráulicos Industriais",
    intro: "Hub técnico sobre atuadores hidráulicos: lineares (cilindros), rotativos (motores hidráulicos) e oscilantes. Marcas Parker, Rexroth, Vickers, Sauer Danfoss. Fornecimento, manutenção e suporte técnico em São Paulo.",
    body: [
      "Atuadores hidráulicos transformam energia hidráulica em movimento mecânico. São componentes críticos em prensas, injetoras, máquinas agrícolas e equipamentos de construção.",
      "A HiComp oferece diagnóstico, reparo e fornecimento de atuadores hidráulicos das principais marcas para manter sua linha produtiva funcionando.",
    ],
  },
  "/informacoes/hub-filtros-hidraulicos": {
    title: "Guia Completo de Filtros Hidráulicos | HiComp",
    description: "Tudo sobre filtros hidráulicos: pressão, retorno, sucção, duplos. HDA, Newtec. Distribuidor autorizado em São Paulo.",
    headline: "Guia Completo de Filtros Hidráulicos Industriais",
    intro: "Hub técnico sobre filtros hidráulicos industriais: filtros de pressão, retorno, sucção e duplos. Marcas HDA e Newtec. Distribuidor autorizado com estoque pronto e suporte técnico para manutenção preventiva em São Paulo.",
    body: [
      "A contaminação do óleo hidráulico é a principal causa de falhas em sistemas hidráulicos. Filtros de alta qualidade são fundamentais para proteger bombas, válvulas e cilindros.",
      "A HiComp é distribuidora de filtros HDA e Newtec, com estoque pronto e orientação técnica para especificação e troca de elementos filtrantes.",
    ],
  },
  "/informacoes/hub-unidades-hidraulicas": {
    title: "Guia Completo de Unidades Hidráulicas | HiComp",
    description: "Tudo sobre unidades hidráulicas: centrais compactas, industriais, retrofit, projeto customizado. Manutenção e fabricação em São Paulo.",
    headline: "Guia Completo de Unidades Hidráulicas Industriais",
    intro: "Hub técnico sobre unidades hidráulicas: centrais compactas, industriais de grande porte, retrofit e projetos customizados. Fabricação, manutenção, reparo e diagnóstico pela HiComp em São Paulo.",
    body: [
      "A unidade hidráulica é o sistema central que alimenta todos os componentes de um circuito hidráulico. A HiComp projeta, fabrica e mantém centrais hidráulicas para todos os segmentos industriais.",
      "Do diagnóstico ao retrofit completo, a HiComp oferece solução integrada para otimizar a eficiência e confiabilidade dos sistemas hidráulicos industriais.",
    ],
  },
  "/empresa": {
    title: "Empresa de Hidráulica Industrial em São Paulo | HiComp",
    description:
      "Conheça a HiComp, empresa de hidráulica industrial em São Paulo com atuação em peças, manutenção e suporte técnico especializado.",
    headline: "Sobre a HiComp Hidráulica",
    intro:
      "A HiComp é uma empresa especializada em comércio, fabricação e manutenção de componentes hidráulicos e pneumáticos.",
    body: [
      "A operação atende indústrias que buscam suporte técnico, fabricação sob medida e recuperação de equipamentos hidráulicos.",
      "A página institucional reforça experiência de mercado, localização e capacidade técnica, fatores importantes para confiança e SEO local.",
    ],
  },
  "/contato": {
    title: "Contato e Orçamento de Peças Hidráulicas | HiComp",
    description:
      "Solicite orçamento de bombas, cilindros, válvulas e serviços de manutenção hidráulica com a HiComp em São Paulo.",
    headline: "Solicite orçamento técnico com a HiComp",
    intro:
      "Entre em contato para orçamento de manutenção hidráulica, fabricação de cilindros, venda de peças e assistência técnica industrial.",
    body: [
      "Atendimento por telefone, WhatsApp e e-mail para empresas que precisam de resposta rápida para compra, reparo ou avaliação técnica.",
      "Esta é uma das páginas mais relevantes para intenção comercial e conversão no funil orgânico.",
    ],
  },
  "/faq": {
    title: "FAQ de Hidráulica Industrial | HiComp",
    description:
      "Veja respostas sobre cilindros hidráulicos, bombas, válvulas, manutenção preventiva e compra de peças industriais com a HiComp.",
    headline: "Perguntas frequentes sobre hidráulica industrial",
    intro:
      "A área de perguntas frequentes reúne dúvidas comuns de compra, manutenção, prazos, marcas e aplicações hidráulicas.",
    body: [
      "Esse formato ajuda a capturar buscas informacionais e melhorar snippets enriquecidos em pesquisas do Google.",
      "Também reduz fricção comercial ao responder objeções comuns antes do contato.",
    ],
  },
  "/manutencao-bombas-hidraulicas": {
    title: "Manutenção de Bombas Hidráulicas em São Paulo | HiComp",
    description:
      "Serviço de manutenção de bombas hidráulicas Parker, Rexroth, Vickers e outras marcas com suporte técnico em São Paulo.",
    headline: "Manutenção de bombas hidráulicas industriais",
    intro:
      "A HiComp realiza diagnóstico, reparo, troca de componentes e testes em bombas hidráulicas usadas em linhas industriais e máquinas pesadas.",
    body: [
      "A página atende buscas com forte intenção comercial como conserto, reforma, manutenção preventiva e assistência técnica de bombas hidráulicas.",
      "O conteúdo também ajuda a associar o serviço à localização em São Paulo, importante para SEO local.",
    ],
  },
  "/cilindros-hidraulicos": {
    title: "Cilindros Hidráulicos Industriais em São Paulo | HiComp",
    description:
      "Fabricação, venda e manutenção de cilindros hidráulicos industriais em São Paulo. Atendimento técnico especializado.",
    headline: "Cilindros hidráulicos para indústria e manutenção técnica",
    intro:
      "A HiComp fabrica, recupera e comercializa cilindros hidráulicos industriais para diferentes aplicações e regimes de pressão.",
    body: [
      "A página cobre demandas de compra, manutenção, reforma e desenvolvimento sob medida de cilindros hidráulicos.",
      "Também reforça relevância para termos regionais e consultas de intenção comercial.",
    ],
  },
  "/valvulas-hidraulicas": {
    title: "Válvulas Hidráulicas Industriais em São Paulo | HiComp",
    description:
      "Venda e manutenção de válvulas hidráulicas direcionais, proporcionais e de pressão com suporte técnico em São Paulo.",
    headline: "Válvulas hidráulicas para controle e automação industrial",
    intro:
      "A HiComp trabalha com válvulas hidráulicas de diversas aplicações, incluindo modelos direcionais, proporcionais e de controle de pressão.",
    body: [
      "O conteúdo atende buscas de compra, especificação técnica e reparo em válvulas utilizadas em sistemas hidráulicos industriais.",
      "A página ajuda a consolidar relevância em categorias estratégicas do setor.",
    ],
  },
  "/assistencia-tecnica-industrial": {
    title: "Assistência Técnica Industrial em São Paulo | HiComp",
    description:
      "Assistência técnica industrial para sistemas hidráulicos, bombas, cilindros e válvulas com atendimento em São Paulo.",
    headline: "Assistência técnica industrial para sistemas hidráulicos",
    intro:
      "A HiComp oferece suporte técnico para diagnóstico, reparo e manutenção de componentes hidráulicos industriais.",
    body: [
      "Essa rota dialoga com buscas mais amplas de assistência técnica e reforça autoridade do domínio em serviços industriais.",
      "Também atua como página de apoio para linkagem interna entre categorias e marcas.",
    ],
  },
  "/hidraulica-industrial": {
    title: "Hidráulica Industrial em São Paulo | HiComp",
    description:
      "Soluções em hidráulica industrial em São Paulo com peças, manutenção, cilindros, bombas e válvulas para diversos segmentos.",
    headline: "Soluções em hidráulica industrial para manutenção e fornecimento",
    intro:
      "A HiComp atende empresas que precisam de peças, reparos e suporte técnico para sistemas óleo-hidráulicos industriais.",
    body: [
      "A página busca consolidar posicionamento de marca para a busca ampla de hidráulica industrial associada a São Paulo.",
      "Esse tipo de rota costuma ser importante para autoridade topical e SEO local.",
    ],
  },
  "/unidade-hidraulica-industrial": {
    title: "Unidade Hidráulica Industrial em São Paulo | HiComp",
    description:
      "Fabricação, manutenção e reparo de unidades hidráulicas industriais em São Paulo. Centrais hidráulicas sob medida, retrofit e suporte técnico especializado.",
    headline: "Unidade hidráulica industrial — fabricação e manutenção",
    intro:
      "A HiComp projeta, fabrica e mantém unidades hidráulicas industriais completas: reservatório, bomba, motor elétrico, válvulas, filtros e painel de controle sob medida para qualquer aplicação.",
    body: [
      "A página atende buscas por central hidráulica, unidade de potência hidráulica, manutenção de unidade hidráulica e retrofit de sistemas existentes.",
      "Esse serviço representa um dos tickets mais altos da operação e é fundamental para consolidar autoridade técnica no setor.",
    ],
  },
  "/mangueiras-hidraulicas": {
    title: "Mangueiras Hidráulicas de Alta Pressão em São Paulo | HiComp",
    description:
      "Fornecimento e montagem de mangueiras hidráulicas de alta pressão em São Paulo. Conexões, adaptadores e serviço de pronta entrega para indústria.",
    headline: "Mangueiras hidráulicas industriais — fornecimento e montagem",
    intro:
      "A HiComp fornece mangueiras hidráulicas de alta pressão e suas conexões para sistemas industriais, com montagem, certificação e pronta entrega em São Paulo.",
    body: [
      "A página cobre buscas por mangueira hidráulica, mangueira de alta pressão, conexões hidráulicas e serviços de montagem para manutenção industrial.",
      "A cobertura desse segmento é importante para ampliar a cauda longa do domínio e atender buscas de reposição urgente.",
    ],
  },
  "/bomba-de-pistao-hidraulica": {
    title: "Bomba de Pistão Hidráulica em São Paulo | HiComp",
    description:
      "Venda, manutenção e reparo de bombas de pistão hidráulica em São Paulo. Parker PV, Rexroth A10VSO, Vickers PVB. Diagnóstico técnico gratuito.",
    headline: "Bomba de pistão hidráulica — venda e manutenção industrial",
    intro:
      "A HiComp é especialista em bombas de pistão hidráulica para aplicações industriais de alta pressão: Parker PV, Rexroth A10VSO/A4VSO, Vickers PVB e outras marcas. Diagnóstico técnico gratuito, peças originais e garantia de 1 ano.",
    body: [
      "A página atende buscas por bomba de pistão axial, bomba de pistão variável, reparo de bomba Parker PV e conserto de bomba Rexroth A10VSO.",
      "Esse tipo de bomba representa o ticket mais alto do portfólio de componentes e é fundamental para a estratégia de SEO industrial de alto valor.",
    ],
  },
};

const productRoutes = {
  "/produtos/parker": {
    title: "Componentes Hidraulicos Parker em Sao Paulo | HiComp",
    description:
      "Bombas, valvulas, filtros e componentes Parker em Sao Paulo com suporte tecnico, manutencao e fornecimento industrial.",
    headline: "Componentes hidraulicos Parker em Sao Paulo",
    intro:
      "A HiComp atende industrias que procuram componentes Parker para manutencao, reposicao de pecas e especificacao tecnica de sistemas hidraulicos.",
    body: [
      "A pagina concentra termos de busca ligados a bomba hidraulica Parker, valvula direcional Parker e filtros industriais com apoio comercial.",
      "Tambem reforca a associacao da marca a servicos tecnicos e atendimento local em Sao Paulo, o que melhora a chance de ranqueamento para buscas comerciais.",
    ],
  },
  "/produtos/rexroth": {
    title: "Componentes Hidraulicos Rexroth em Sao Paulo | HiComp",
    description:
      "Bombas, valvulas e cilindros Rexroth em Sao Paulo com suporte tecnico, manutencao e fornecimento para industria.",
    headline: "Componentes hidraulicos Rexroth em Sao Paulo",
    intro:
      "A HiComp apoia industrias na selecao, manutencao e reposicao de componentes Rexroth para sistemas hidraulicos de alto desempenho.",
    body: [
      "A rota cobre buscas por bomba hidraulica Rexroth, valvula hidraulica Rexroth e cilindros para aplicacoes industriais e manutencao.",
      "Isso fortalece a cobertura de marca com intencao comercial e melhora a qualidade do HTML estatico entregue ao Google.",
    ],
  },
  "/produtos/vickers": {
    title: "Componentes Hidraulicos Vickers em Sao Paulo | HiComp",
    description:
      "Bombas, valvulas e componentes hidraulicos Vickers em Sao Paulo com suporte tecnico, manutencao e fornecimento industrial.",
    headline: "Componentes hidraulicos Vickers em Sao Paulo",
    intro:
      "A HiComp atende linhas Vickers com foco em manutencao industrial, substituicao de pecas e suporte tecnico para maquinas e sistemas hidraulicos.",
    body: [
      "A pagina ajuda a capturar buscas por bomba hidraulica Vickers, valvula hidraulica Vickers e componentes de reposicao.",
      "O conteudo prerenderizado tambem melhora a leitura da rota por mecanismos de busca e reforca o contexto comercial do dominio.",
    ],
  },
  "/produtos/eaton": {
    title: "Componentes Hidraulicos Eaton em Sao Paulo | HiComp",
    description:
      "Bombas, motores e valvulas Eaton em Sao Paulo com suporte tecnico para manutencao hidraulica industrial.",
    headline: "Componentes hidraulicos Eaton em Sao Paulo",
    intro:
      "A linha Eaton atende aplicacoes industriais e moveis que exigem confiabilidade, com apoio da HiComp para manutencao e selecao de componentes.",
    body: [
      "A rota trabalha buscas por motor hidraulico Eaton, bombas Eaton e valvulas de controle para sistemas hidraulicos.",
      "Essa pagina tambem conecta a marca a servicos de assistencia tecnica, favorecendo a jornada de busca com intencao de orcamento.",
    ],
  },
  "/produtos/hda": {
    title: "Componentes Hidraulicos HDA em Sao Paulo | HiComp",
    description:
      "Componentes HDA em Sao Paulo com suporte tecnico para bombas de engrenagem, valvulas e manutencao industrial.",
    headline: "Componentes hidraulicos HDA em Sao Paulo",
    intro:
      "A HiComp atende industrias que precisam de componentes HDA para manutencao, reposicao e melhoria de desempenho em circuitos hidraulicos.",
    body: [
      "A pagina reforca termos como filtro HDA, bombas HDA e valvulas HDA para buscas de reposicao e suporte tecnico.",
      "Esse tipo de rota ajuda o site a competir melhor em cauda longa, especialmente em pesquisas por marca e aplicacao.",
    ],
  },
  "/produtos/denison": {
    title: "Componentes Hidraulicos Denison em Sao Paulo | HiComp",
    description:
      "Componentes Denison em Sao Paulo para sistemas hidraulicos industriais, com apoio tecnico e manutencao especializada.",
    headline: "Componentes hidraulicos Denison em Sao Paulo",
    intro:
      "A HiComp apoia o fornecimento e a manutencao de bombas e cartuchos Denison usados em sistemas industriais de alto desempenho.",
    body: [
      "A pagina trabalha buscas por bomba Denison, cartucho Denison e manutencao de componentes hidraulicos da marca.",
      "Com HTML estatico e links internos mais fortes, a rota fica mais preparada para disputar visibilidade organica.",
    ],
  },
  "/produtos/sauer-danfoss": {
    title: "Componentes Hidraulicos Sauer Danfoss em Sao Paulo | HiComp",
    description:
      "Bombas, motores, valvulas e transmissoes Sauer Danfoss em Sao Paulo com manutencao, reposicao e suporte tecnico.",
    headline: "Componentes hidraulicos Sauer Danfoss em Sao Paulo",
    intro:
      "A HiComp atende demandas por componentes Sauer Danfoss em aplicacoes industriais e moveis, com orientacao tecnica para selecao e manutencao.",
    body: [
      "A rota cobre buscas por bombas, motores e valvulas Sauer Danfoss com foco em intencao comercial e suporte tecnico.",
      "Esse ajuste amplia a cobertura de marcas relevantes para o setor e melhora a distribuicao de autoridade interna.",
    ],
  },
};

const serviceRoutes = {
  "/servicos/manutencao-preventiva": {
    title: "Manutencao Preventiva Hidraulica em Sao Paulo | HiComp",
    description:
      "Manutencao preventiva hidraulica em Sao Paulo para bombas, cilindros e valvulas com foco em reduzir falhas e paradas.",
    headline: "Manutencao preventiva hidraulica em Sao Paulo",
    intro:
      "A HiComp realiza manutencao preventiva em sistemas hidraulicos industriais para ampliar a vida util dos equipamentos e reduzir custos operacionais.",
    body: [
      "A pagina atende buscas por manutencao programada de bombas, cilindros, valvulas e unidades hidraulicas em ambiente industrial.",
      "Esse tipo de servico apoia a estrategia de SEO para termos comerciais e de pos-venda no setor de hidraulica industrial.",
    ],
  },
  "/servicos/manutencao-corretiva": {
    title: "Manutencao Corretiva Hidraulica em Sao Paulo | HiComp",
    description:
      "Manutencao corretiva hidraulica em Sao Paulo com reparo rapido de bombas, cilindros e valvulas para industria.",
    headline: "Manutencao corretiva hidraulica em Sao Paulo",
    intro:
      "A HiComp atende falhas em sistemas hidraulicos com diagnostico tecnico, reposicao de componentes e reparo especializado.",
    body: [
      "A rota foi otimizada para buscas de emergencia, reparo hidraulico industrial e assistencia tecnica para equipamentos parados.",
      "Essa cobertura melhora a presenca organica em pesquisas com alta intencao de contratacao.",
    ],
  },
  "/servicos/analise-oleo": {
    title: "Analise de Oleo Hidraulico em Sao Paulo | HiComp",
    description:
      "Analise de oleo hidraulico em Sao Paulo para identificar contaminacao, desgaste e falhas antes da parada do equipamento.",
    headline: "Analise de oleo hidraulico em Sao Paulo",
    intro:
      "A HiComp apoia programas de manutencao preditiva com analise de oleo para detectar contaminação e desgaste em sistemas hidraulicos.",
    body: [
      "A pagina fortalece buscas ligadas a manutencao preditiva, analise de fluido hidraulico e monitoramento de condicao.",
      "Esse conteudo complementa bem as paginas de servico mais comerciais e amplia a autoridade tecnica do dominio.",
    ],
  },
  "/servicos/retrofit": {
    title: "Retrofit de Sistemas Hidraulicos em Sao Paulo | HiComp",
    description:
      "Retrofit de sistemas hidraulicos em Sao Paulo para modernizar maquinas, melhorar eficiencia energetica e aumentar produtividade.",
    headline: "Retrofit de sistemas hidraulicos em Sao Paulo",
    intro:
      "A HiComp moderniza sistemas hidraulicos antigos com substituicao de componentes, adequacao tecnica e ganhos de eficiencia.",
    body: [
      "A pagina dialoga com buscas por modernizacao de maquinas, retrofit hidraulico e atualizacao de sistemas industriais.",
      "Essa rota ajuda a capturar demandas de ticket mais alto e reforca percepcao de capacidade tecnica da empresa.",
    ],
  },
  "/servicos/consultoria": {
    title: "Consultoria Tecnica em Hidraulica Industrial | HiComp",
    description:
      "Consultoria tecnica em hidraulica industrial para projeto, especificacao de componentes e otimizacao de sistemas em Sao Paulo.",
    headline: "Consultoria tecnica em hidraulica industrial",
    intro:
      "A HiComp oferece consultoria tecnica para projeto, troubleshooting e especificacao de componentes em sistemas hidraulicos industriais.",
    body: [
      "A pagina cobre buscas consultivas, especialmente para empresas que procuram apoio especializado antes da compra ou do reparo.",
      "Esse conteudo reforca a autoridade do dominio e ajuda a diferenciar a marca de concorrentes com paginas mais superficiais.",
    ],
  },
  "/servicos/treinamentos": {
    title: "Treinamentos Tecnicos em Hidraulica Industrial | HiComp",
    description:
      "Treinamentos tecnicos em hidraulica industrial para operadores e manutencao, com capacitacao pratica e teorica para equipes.",
    headline: "Treinamentos tecnicos em hidraulica industrial",
    intro:
      "A HiComp capacita equipes de operacao e manutencao com treinamentos focados em sistemas hidraulicos, seguranca e boas praticas industriais.",
    body: [
      "Essa pagina amplia a cobertura de palavras-chave em torno de treinamento, capacitacao e conhecimento tecnico no setor.",
      "Tambem cria mais profundidade tematica para o dominio, algo importante para competir com sites antigos do nicho.",
    ],
  },
};

const relatedLinks = [
  { href: "/informacoes", label: "Centro de recursos hidráulicos" },
  { href: "/manutencao-bombas-hidraulicas", label: "Manutenção de bombas hidráulicas" },
  { href: "/cilindros-hidraulicos", label: "Cilindros hidráulicos industriais" },
  { href: "/valvulas-hidraulicas", label: "Válvulas hidráulicas" },
  { href: "/contato", label: "Solicitar orçamento" },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function normalizeUrl(url) {
  return url.replace(/^https:\/\/(?:www\.)?hicomp\.com\.br/i, SITE_URL);
}

const SLUG_CORRECTIONS = {
  hidraulica: "Hidráulica",
  hidraulico: "Hidráulico",
  hidraulicos: "Hidráulicos",
  pneumatica: "Pneumática",
  pneumatico: "Pneumático",
  pneumaticos: "Pneumáticos",
  manutencao: "Manutenção",
  valvula: "Válvula",
  valvulas: "Válvulas",
  atuadores: "Atuadores",
  atuador: "Atuador",
  cilindros: "Cilindros",
  cilindro: "Cilindro",
  bombas: "Bombas",
  bomba: "Bomba",
  automatizacao: "Automatização",
  automacao: "Automação",
  assistencia: "Assistência",
  tecnica: "Técnica",
  tecnico: "Técnico",
  fabricacao: "Fabricação",
  especificacao: "Especificação",
  sao: "São",
  paulo: "Paulo",
};

function slugToTitle(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      const lower = word.toLowerCase();
      if (SLUG_CORRECTIONS[lower]) return SLUG_CORRECTIONS[lower];
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function buildGenericMeta(routePath) {
  const slug = routePath.split("/").filter(Boolean).pop() || "hicomp";
  const humanTitle = slugToTitle(slug);
  const title = `${humanTitle} | HiComp - Soluções em Hidráulica`;
  const description = `Saiba mais sobre ${humanTitle.toLowerCase()} com a HiComp. Atendimento em São Paulo, venda de peças e manutenção hidráulica industrial.`;
  const headline = humanTitle;
  const intro = `Conteúdo técnico e comercial sobre ${humanTitle.toLowerCase()} para aplicações industriais, manutenção e fornecimento de componentes hidráulicos.`;
  const body = [
    `A página foi preparada para responder buscas relacionadas a ${humanTitle.toLowerCase()}, com contexto sobre aplicações, marcas e suporte técnico especializado.`,
    "Para detalhes completos, especificações e solicitação de orçamento, a navegação principal e o conteúdo interativo permanecem disponíveis após o carregamento do site.",
  ];

  return { title, description, headline, intro, body };
}

function getMetaForRoute(routePath) {
  if (coreRoutes[routePath]) {
    return coreRoutes[routePath];
  }

  if (productRoutes[routePath]) {
    return productRoutes[routePath];
  }

  if (serviceRoutes[routePath]) {
    return serviceRoutes[routePath];
  }

  if (routePath.startsWith("/informacoes/")) {
    const base = buildGenericMeta(routePath);
    return {
      ...base,
      description: `Informações sobre ${base.headline.toLowerCase()}, manutenção, fornecimento e aplicações industriais com a HiComp em São Paulo.`,
      body: [
        `Este conteúdo apoia buscas específicas por ${base.headline.toLowerCase()}, incluindo compra, reparo, manutenção e comparação de soluções hidráulicas.`,
        "A HiComp atende empresas que precisam de suporte técnico, peças e fabricação sob medida para sistemas hidráulicos industriais.",
      ],
    };
  }

  if (routePath.startsWith("/produtos/")) {
    const base = buildGenericMeta(routePath);
    return {
      ...base,
      description: `Linha de produtos ${base.headline.toLowerCase()} com suporte técnico, venda e aplicação industrial pela HiComp.`,
      body: [
        `A rota reúne informações sobre a marca ou linha ${base.headline.toLowerCase()} dentro do portfólio da HiComp.`,
        "Ela ajuda a capturar buscas por fabricante e intenção de compra com apoio de navegação interna para serviços e orçamento.",
      ],
    };
  }

  if (routePath.startsWith("/servicos/")) {
    const base = buildGenericMeta(routePath);
    return {
      ...base,
      description: `Serviço de ${base.headline.toLowerCase()} com atendimento técnico especializado pela HiComp em São Paulo.`,
      body: [
        `A página aborda o serviço de ${base.headline.toLowerCase()} com foco em desempenho, manutenção e disponibilidade operacional.`,
        "Também fortalece a cobertura temática da marca em torno de serviços técnicos industriais.",
      ],
    };
  }

  return buildGenericMeta(routePath);
}

// ─── Structured Data (JSON-LD) injected into every prerendered page ─────────
// Bots that do not execute JS (e.g. lightweight crawlers, some LLMs) will see
// these schemas in the static HTML, closing the biggest SEO gap of a SPA.

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  "name": "HiComp Hidráulica",
  "alternateName": ["HiComp", "HiComp SP"],
  "description": "Comércio de peças e equipamentos hidráulicos, pneumáticos e automação industrial. Cilindros, bombas, válvulas das marcas Parker, Rexroth, Vickers, Denison. Desde 1995 em São Paulo.",
  "url": SITE_URL,
  "foundingDate": "1995",
  "telephone": ["+55-11-2619-5457", "+55-11-2619-5482", "+55-11-99246-5636"],
  "email": "contato@hicomp.com.br",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Zalina Rolim, 647",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02127-000",
    "addressCountry": "BR",
    "addressNeighborhood": "Vila Maria Alta"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.4942869,
    "longitude": -46.5955974
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "12:00" }
  ],
  "sameAs": ["https://www.instagram.com/hicomphidraulica/", "https://www.facebook.com/hicomphidraulica/"],
  "knowsAbout": ["Cilindros Hidráulicos","Bombas Hidráulicas","Válvulas Hidráulicas","Componentes Pneumáticos","Automação Industrial","Parker Hannifin","Bosch Rexroth","Eaton Vickers","Denison Hydraulics"]
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "HiComp Hidráulica",
  "description": "Comércio de peças hidráulicas, pneumáticas e automação industrial",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "pt-BR"
};

function buildServiceSchema(name, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${SITE_URL}${url}`,
    "provider": { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization` },
    "areaServed": [{ "@type": "Country", "name": "Brasil" }, { "@type": "State", "name": "São Paulo" }],
    "serviceType": "Manutenção e Comércio de Equipamentos Hidráulicos e Pneumáticos"
  };
}

function buildWebPageSchema(title, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${url}#webpage`,
    "url": `${SITE_URL}${url}`,
    "name": title,
    "description": description,
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#organization` },
    "lastReviewed": TODAY,
    "inLanguage": "pt-BR"
  };
}

function buildBreadcrumbSchema(routePath) {
  const segments = routePath.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", "position": 1, "name": "Início", "item": SITE_URL }];
  let accumulated = "";
  segments.forEach((seg, i) => {
    accumulated += "/" + seg;
    items.push({
      "@type": "ListItem",
      "position": i + 2,
      "name": slugToTitle(seg),
      "item": `${SITE_URL}${accumulated}`
    });
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items };
}

const SERVICE_SCHEMAS = {
  "/manutencao-bombas-hidraulicas": buildServiceSchema("Manutenção de Bombas Hidráulicas", "Manutenção preventiva e corretiva de bombas hidráulicas industriais em São Paulo. Parker, Rexroth, Vickers, Denison.", "/manutencao-bombas-hidraulicas"),
  "/cilindros-hidraulicos": buildServiceSchema("Cilindros Hidráulicos Industriais", "Fornecimento, fabricação e manutenção de cilindros hidráulicos para indústrias em São Paulo e todo o Brasil.", "/cilindros-hidraulicos"),
  "/valvulas-hidraulicas": buildServiceSchema("Válvulas Hidráulicas Industriais", "Venda e manutenção de válvulas hidráulicas direcionais, proporcionais e de pressão. Parker, Rexroth, Vickers.", "/valvulas-hidraulicas"),
  "/assistencia-tecnica-industrial": buildServiceSchema("Assistência Técnica Industrial em Hidráulica", "Diagnóstico, reparo e manutenção de sistemas hidráulicos industriais em São Paulo.", "/assistencia-tecnica-industrial"),
  "/hidraulica-industrial": buildServiceSchema("Hidráulica Industrial em São Paulo", "Soluções completas em hidráulica industrial. Manutenção, reparo e fornecimento de componentes hidráulicos.", "/hidraulica-industrial"),
  "/unidade-hidraulica-industrial": buildServiceSchema("Unidade Hidráulica Industrial", "Fabricação, manutenção e reparo de unidades hidráulicas industriais em São Paulo. Centrais hidráulicas sob medida.", "/unidade-hidraulica-industrial"),
  "/mangueiras-hidraulicas": buildServiceSchema("Mangueiras Hidráulicas Industriais", "Fornecimento e montagem de mangueiras hidráulicas de alta pressão em São Paulo.", "/mangueiras-hidraulicas"),
  "/bomba-de-pistao-hidraulica": buildServiceSchema("Bomba de Pistão Hidráulica", "Venda, manutenção e reparo de bombas de pistão hidráulica. Parker PV, Rexroth A10VSO, Vickers PVB em São Paulo.", "/bomba-de-pistao-hidraulica"),
};

function getStructuredDataForRoute(routePath, meta) {
  const webpage = buildWebPageSchema(meta.title, meta.description, routePath);
  const breadcrumb = routePath !== "/" ? buildBreadcrumbSchema(routePath) : null;
  const base = [LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA, webpage];
  if (breadcrumb) base.push(breadcrumb);

  if (SERVICE_SCHEMAS[routePath]) base.push(SERVICE_SCHEMAS[routePath]);

  if (routePath.startsWith("/servicos/")) {
    base.push(buildServiceSchema(meta.headline, meta.description, routePath));
  }
  if (routePath.startsWith("/produtos/")) {
    const brand = slugToTitle(routePath.replace("/produtos/", ""));
    base.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `Componentes Hidráulicos ${brand}`,
      "description": meta.description,
      "brand": { "@type": "Brand", "name": brand },
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "BRL", "seller": { "@type": "Organization", "name": "HiComp Hidráulica" } }
    });
  }

  return { "@context": "https://schema.org", "@graph": base.map(item => {
    if (item && "@context" in item) {
      const { "@context": _ctx, ...rest } = item;
      return rest;
    }
    return item;
  }) };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPrerenderMarkup(routePath, meta) {
  const canonical = `${SITE_URL}${routePath}`;
  const linksMarkup = relatedLinks
    .map(
      (link) =>
        `<li><a href="${link.href}">${escapeHtml(link.label)}</a></li>`
    )
    .join("");

  const bodyMarkup = meta.body
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  return `
    <main data-prerendered="true" class="seo-prerender" style="font-family:Montserrat,Arial,sans-serif;max-width:1120px;margin:0 auto;padding:32px 16px 48px;color:#0f172a;background:#fff;">
      <header style="margin-bottom:24px;">
        <p style="margin:0 0 12px;color:#14532d;font-weight:700;letter-spacing:.04em;text-transform:uppercase;">HiComp Hidráulica</p>
        <h1 style="margin:0 0 16px;font-size:clamp(2rem,4vw,3.2rem);line-height:1.1;">${escapeHtml(meta.headline)}</h1>
        <p style="margin:0;font-size:1.05rem;line-height:1.7;max-width:850px;">${escapeHtml(meta.intro)}</p>
      </header>
      <section style="display:grid;gap:14px;margin-bottom:28px;">
        ${bodyMarkup}
      </section>
      <section style="display:grid;gap:10px;margin-bottom:28px;padding:20px;border:1px solid #d1d5db;border-radius:16px;background:#f8fafc;">
        <h2 style="margin:0;font-size:1.35rem;">Atendimento técnico e orçamento</h2>
        <p style="margin:0;line-height:1.7;">Fale com a HiComp para manutenção de bombas hidráulicas, cilindros, válvulas e componentes pneumáticos. Telefone: <a href="tel:+551126195457">(11) 2619-5457</a>. WhatsApp: <a href="https://wa.me/5511992465636">(11) 99246-5636</a>.</p>
        <p style="margin:0;line-height:1.7;">Endereço: Rua Zalina Rolim, 647, Vila Maria Alta, São Paulo - SP.</p>
      </section>
      <nav aria-label="Links internos" style="display:grid;gap:10px;">
        <h2 style="margin:0;font-size:1.2rem;">Links úteis</h2>
        <ul style="margin:0;padding-left:20px;display:grid;gap:8px;">
          ${linksMarkup}
        </ul>
      </nav>
      <p style="margin-top:28px;font-size:.95rem;color:#475569;">URL canônica: <a href="${canonical}">${canonical}</a></p>
    </main>
  `.trim();
}

function replaceOrInsert(html, pattern, replacement, fallback) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `${fallback}\n</head>`);
}

function buildHtml(template, routePath, meta) {
  const canonical = `${SITE_URL}${routePath}`;
  const prerenderMarkup = buildPrerenderMarkup(routePath, meta);
  const structuredData = getStructuredDataForRoute(routePath, meta);
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceOrInsert(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );
  html = replaceOrInsert(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = replaceOrInsert(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = replaceOrInsert(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = replaceOrInsert(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = replaceOrInsert(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = replaceOrInsert(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="pt-BR" href="[^"]*"\s*\/?>/i,
    `<link rel="alternate" hreflang="pt-BR" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/i,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`
  );
  html = html.replace(/<div id="root"><\/div>/i, `<div id="root">${prerenderMarkup}</div>`);

  // Remove any existing JSON-LD scripts injected by React (react-helmet-async)
  // to avoid duplicate schemas in prerendered HTML. The prerender version is
  // authoritative and crawler-optimized.
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

  // Inject route-specific JSON-LD before </head> so bots without JS see the schemas
  html = html.replace("</head>", `${jsonLdTag}\n</head>`);

  return html;
}

function writeRouteHtml(routePath, html) {
  if (routePath === "/") {
    fs.writeFileSync(path.join(DIST_DIR, "index.html"), html);
    return;
  }

  const routeDir = path.join(DIST_DIR, routePath.replace(/^\//, ""));
  ensureDir(routeDir);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
}

function buildNormalizedSitemap() {
  const raw = fs.readFileSync(PUBLIC_SITEMAP, "utf8");

  // Parse all <url> blocks preserving their metadata
  const urlBlocks = [...raw.matchAll(/<url>([\s\S]*?)<\/url>/g)];

  const seen = new Set();
  const entries = [];

  for (const block of urlBlocks) {
    const locMatch = block[1].match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) continue;
    const loc = normalizeUrl(locMatch[1]);
    if (seen.has(loc)) continue;
    seen.add(loc);

    const changefreqMatch = block[1].match(/<changefreq>([^<]+)<\/changefreq>/);
    const priorityMatch = block[1].match(/<priority>([^<]+)<\/priority>/);

    entries.push({
      loc,
      lastmod: TODAY,
      changefreq: changefreqMatch ? changefreqMatch[1] : "monthly",
      priority: priorityMatch ? priorityMatch[1] : "0.8",
    });
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((e) =>
      [
        "  <url>",
        `    <loc>${e.loc}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority}</priority>`,
        "  </url>",
      ].join("\n")
    ),
    "</urlset>",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), xml);
  return entries.map((e) => new URL(e.loc).pathname);
}

function main() {
  if (!fs.existsSync(path.join(DIST_DIR, "index.html"))) {
    throw new Error("Arquivo dist/index.html não encontrado. Rode o build antes do prerender.");
  }

  const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf8");
  const sitemapRoutes = buildNormalizedSitemap();
  const routes = [...new Set(["/", ...Object.keys(coreRoutes), ...sitemapRoutes])];

  for (const routePath of routes) {
    const meta = getMetaForRoute(routePath);
    const html = buildHtml(template, routePath, meta);
    writeRouteHtml(routePath, html);
  }

  console.log(`Prerender SEO concluído para ${routes.length} rotas.`);
}

main();
