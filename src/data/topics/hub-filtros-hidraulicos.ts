import type { TopicContent } from '../topicContents';

const content: TopicContent = {
  introduction:
    "Os <strong>filtros hidráulicos</strong> são componentes críticos de qualquer sistema hidráulico industrial. A contaminação do óleo hidráulico é responsável por mais de 70% das falhas em sistemas hidráulicos — bombas desgastadas prematuramente, válvulas travadas, cilindros riscados. A HiComp Hidráulica, com mais de 25 anos de experiência em São Paulo, é distribuidora autorizada de filtros <strong>HDA</strong> e <strong>Newtec</strong>, com estoque pronto e suporte técnico especializado para especificação, troca e manutenção preventiva de elementos filtrantes industriais.",
  images: [
    "/src/assets/filtro-hda/filtro-hda-01.webp",
    "/src/assets/filtro-pressao-hda/filtro-pressao-hda-01.webp",
    "/src/assets/filtro-duplo-hda/filtro-duplo-hda-01.webp",
    "/src/assets/filtros-newtec/filtros-newtec-01.webp",
  ],
  mainContent: [
    "<h2>O que são Filtros Hidráulicos?</h2>",
    "<p>Os <strong>filtros hidráulicos</strong> são dispositivos projetados para remover partículas sólidas, contaminantes e impurezas do fluido hidráulico em circulação. Em sistemas industriais, o óleo hidráulico percorre continuamente bombas, válvulas, cilindros e tubulações, carreando consigo partículas de desgaste, poeira, água e outros contaminantes que degradam progressivamente os componentes do sistema.</p>",
    "<p>Segundo a norma ISO 4406, o nível de contaminação do óleo hidráulico é classificado por código de limpeza (ex: 16/14/11), onde cada número representa a quantidade de partículas por mililitro em três faixas de tamanho. Sistemas com bombas de pistão de alta pressão exigem óleos na classe ISO 16/14/11 ou mais limpos — um nível que só é mantido com filtragem eficiente e troca periódica dos elementos filtrantes.</p>",

    "<h2>Tipos de Filtros Hidráulicos Industriais</h2>",
    "<p>Existem quatro posicionamentos principais para filtros em um circuito hidráulico industrial, cada um com função e requisitos específicos:</p>",
    "<ul><li><strong>Filtro de Sucção (Strainer):</strong> Instalado antes da bomba, na linha de sucção do reservatório. Protege a bomba contra grandes partículas. Malha grossa (100-250 µm). NÃO substitui os demais filtros — é apenas proteção grosseira. Deve ser inspecionado regularmente para evitar cavitação por entupimento.</li><li><strong>Filtro de Pressão (Alta Pressão):</strong> Instalado após a bomba, na linha de alta pressão antes dos atuadores. Filtragem fina (3-25 µm absoluto). Retém partículas geradas pela própria bomba e protege as válvulas e cilindros. É o filtro mais crítico do sistema — o coração da filtragem hidráulica. A HDA fabrica filtros de pressão para operação até 420 bar.</li><li><strong>Filtro de Retorno:</strong> Instalado na linha de retorno ao reservatório, antes do fluido entrar no tanque. Captura partículas geradas pelos atuadores (hastes, vedações, pistões). Filtragem de 3-25 µm. Opera em baixa pressão (retorno).</li><li><strong>Filtro de Ventilação (Breather):</strong> Instalado na tampa do reservatório. Filtra o ar que entra no tanque para compensar variações de nível. Malha fina para impedir entrada de poeira e umidade.</li></ul>",

    "<h2>Filtros HDA — Distribuidor Autorizado HiComp</h2>",
    "<p>A <strong>HDA (Hidráulica e Automação)</strong> é uma das principais fabricantes nacionais de filtros hidráulicos de alta qualidade para aplicações industriais. Seus filtros são amplamente utilizados na indústria metalúrgica, automobilística, plástica e de papel e celulose em todo o Brasil. A HiComp é distribuidora autorizada HDA com estoque em São Paulo.</p>",
    "<p>Principais linhas HDA disponíveis na HiComp:</p>",
    "<ul><li><strong>Filtro de Pressão HDA:</strong> Carcaça de aço, pressão até 350 bar, elemento filtrante substituível de 3, 6, 10 ou 25 µm absoluto. Disponível em versão simples e com indicador de colmatagem (diferencial de pressão). Modelos: FP, FPS, FPSD.</li><li><strong>Filtro Duplo HDA:</strong> Sistema duplex com válvula de comutação manual ou automática — permite troca do elemento sem parar o sistema. Fundamental para plantas de produção contínua onde paradas não são toleradas. Pressão até 350 bar.</li><li><strong>Filtro de Retorno HDA:</strong> Para linhas de baixa pressão (até 20 bar), com elemento filtrante de 3-25 µm. Disponível com indicador de colmatagem visual e elétrico.</li><li><strong>Distribuidor de Filtros HDA:</strong> Blocos manifold para instalação de múltiplos filtros em circuitos complexos, reduzindo conexões e pontos de vazamento.</li></ul>",

    "<h2>Filtros Newtec — Alta Performance Industrial</h2>",
    "<p>A <strong>Newtec</strong> fabrica filtros hidráulicos de alta eficiência para aplicações industriais exigentes. Seus elementos filtrantes utilizam tecnologia de fibra de borosilicato com manta de suporte, atingindo eficiências de até β10(c) ≥ 1000 (99,9% de retenção de partículas acima de 10 µm). A HiComp fornece filtros e elementos Newtec para substituição e manutenção.</p>",

    "<h2>Como Funciona o Elemento Filtrante</h2>",
    "<p>O elemento filtrante é o coração do filtro hidráulico. É construído em camadas de fibra sintética ou de borosilicato dispostas em formato de acordeão (plissado) para maximizar a área filtrante. O fluido contaminado passa de fora para dentro (ou vice-versa, dependendo do projeto) através dessas camadas, que retêm as partículas sólidas.</p>",
    "<p>Com o tempo, as partículas retidas aumentam a resistência ao fluxo, elevando o diferencial de pressão entre a entrada e saída do filtro — fenômeno chamado de <strong>colmatagem</strong>. Quando o diferencial de pressão atinge o valor de alarme (geralmente 2-3 bar para filtros de retorno, 3-5 bar para filtros de pressão), o elemento deve ser trocado. Sistemas equipados com indicadores de colmatagem (visual ou elétrico) permitem monitoramento em tempo real.</p>",

    "<h2>Problemas Mais Comuns em Sistemas de Filtragem</h2>",
    "<ul><li><strong>Elemento colmatado sem troca:</strong> O bypass se abre automaticamente para proteger a bomba, mas o fluido circula sem filtragem — acelerando o desgaste de todos os componentes. Sintomas: temperatura elevada, queda de pressão, vazamentos aumentando.</li><li><strong>Elemento filtrante errado:</strong> Usar beta rating inadequado (muito grosso ou muito fino para a aplicação) compromete a proteção. Filtros muito finos em sistemas com partículas grossas entopem rapidamente.</li><li><strong>Entupimento do filtro de sucção:</strong> Causa cavitação na bomba (som de 'golfada', vibração, pressão de saída oscilante). Deve ser inspecionado a cada 1.000 horas.</li><li><strong>Falta de indicador de colmatagem:</strong> Sem monitoramento, o operador não sabe quando trocar o elemento. A HiComp recomenda instalar indicadores em todos os filtros críticos.</li><li><strong>Vazamento na carcaça:</strong> Juntas e o-rings deteriorados por temperatura ou incompatibilidade com o fluido. Troca de vedações resolve o problema.</li></ul>",

    "<h2>Manutenção Preventiva de Filtros Hidráulicos</h2>",
    "<p>A manutenção dos filtros hidráulicos é simples mas exige periodicidade rigorosa. A HiComp recomenda o seguinte programa de manutenção preventiva:</p>",
    "<ul><li><strong>A cada 250-500 horas:</strong> Inspeção visual do indicador de colmatagem, verificação de vazamentos na carcaça, análise visual do estado externo do filtro.</li><li><strong>A cada 1.000-2.000 horas (ou conforme indicação de colmatagem):</strong> Troca do elemento filtrante, limpeza da carcaça, inspeção e troca das vedações (o-rings). Análise laboratorial do óleo hidráulico para verificar nível de contaminação (código ISO 4406).</li><li><strong>A cada 4.000 horas ou anualmente:</strong> Revisão completa dos filtros com troca de todas as vedações, inspeção da válvula de bypass, verificação do funcionamento do indicador de colmatagem elétrico/visual.</li></ul>",

    "<h2>Especificação Técnica: Como Escolher o Filtro Correto</h2>",
    "<p>A especificação correta do filtro hidráulico exige análise de vários parâmetros:</p>",
    "<ul><li><strong>Pressão máxima de trabalho:</strong> O filtro deve suportar a pressão da linha onde será instalado com fator de segurança de 1,5x.</li><li><strong>Vazão nominal:</strong> O filtro deve ser dimensionado para a vazão máxima do sistema sem exceder o diferencial de pressão máximo especificado (geralmente 2-3 bar em operação normal).</li><li><strong>Beta rating (β) e μm absoluto:</strong> Definidos pela sensibilidade dos componentes a proteger. Bombas de pistão exigem β10 ≥ 200; válvulas servocontroladas exigem β5 ≥ 1000.</li><li><strong>Viscosidade do fluido:</strong> Afeta a eficiência de filtragem e a queda de pressão no elemento.</li><li><strong>Temperatura:</strong> Influencia a escolha das vedações e do material do elemento filtrante.</li></ul>",
    "<p>A equipe técnica da HiComp está disponível para especificar o filtro correto para sua aplicação, baseando-se nos dados do sistema hidráulico e nas marcas dos componentes presentes.</p>",

    "<h2>Marcas de Filtros Hidráulicos que a HiComp Trabalha</h2>",
    "<p>Além das linhas HDA e Newtec, a HiComp fornece elementos filtrantes e filtros completos das seguintes marcas: <strong>Parker Hannifin</strong> (linha Parker Racor e Parker Hydraulics), <strong>Donaldson</strong>, <strong>Bosch Rexroth</strong> (filtros originais para sistemas Rexroth), <strong>Pall Corporation</strong>, <strong>Hydac</strong>. Para elementos de reposição de qualquer marca, consulte nossa equipe de vendas — mantemos estoque dos itens mais solicitados pela indústria paulista.</p>",

    "<h2>Por que Escolher a HiComp para seus Filtros Hidráulicos?</h2>",
    "<p>A HiComp é distribuidora autorizada de filtros HDA e Newtec em São Paulo, com mais de 25 anos atendendo as principais indústrias do Estado. Nossa vantagem: <strong>estoque pronto</strong> dos elementos mais usados, <strong>equipe técnica especializada</strong> para especificação e solução de problemas, <strong>entrega rápida</strong> para São Paulo e região metropolitana, e <strong>suporte pós-venda</strong> com laudos técnicos e recomendações de manutenção preventiva.</p>",
    "<p>Para solicitar orçamento de filtros hidráulicos, elementos filtrantes ou kit completo de manutenção, entre em contato via <a href='/contato'>formulário de contato</a> ou WhatsApp (11) 99246-5636. Também realizamos visita técnica para levantamento das necessidades de filtragem do seu sistema hidráulico.</p>",
    "<p>Veja também: <a href='/manutencao-bombas-hidraulicas'>Manutenção de Bombas Hidráulicas</a> | <a href='/hidraulica-industrial'>Hidráulica Industrial SP</a> | <a href='/informacoes/hub-unidades-hidraulicas'>Guia de Unidades Hidráulicas</a></p>",
  ],
  technicalSpecs:
    "Filtros HDA Pressão: até 350 bar | Filtragem: 3, 6, 10, 25 µm absoluto | Vazão: 10-400 L/min | Beta rating: β3 ≥ 1000 a β25 ≥ 200 | Temperatura: -10°C a +120°C | Vedações: NBR, FKM | Fluidos: óleos minerais, HF-C",
  applications: [
    "Centrais hidráulicas industriais",
    "Prensas hidráulicas e estampagem",
    "Injetoras de plástico e borracha",
    "Sistemas de laminação e trefilação",
    "Máquinas-ferramenta CNC",
    "Equipamentos da indústria do papel",
    "Sistemas de elevação e movimentação",
    "Plantas siderúrgicas e de fundição",
  ],
  brands: [
    "HDA", "Newtec", "Parker", "Bosch Rexroth", "Donaldson", "Hydac", "Pall"
  ],
  maintenance:
    "A troca do elemento filtrante deve seguir o indicador de colmatagem ou o programa de horas — o que ocorrer primeiro. Use sempre elementos originais ou de qualidade equivalente certificada. A HiComp fornece elementos filtrantes com certificado de qualidade e relatório de eficiência para cada fornecimento. Guarde os elementos usados para análise de contaminação quando necessário.",
  faq: [
    {
      question: "Com que frequência devo trocar o elemento filtrante do filtro hidráulico?",
      answer: "O intervalo ideal depende das condições de operação e do nível de contaminação do sistema. Em geral, troque quando o indicador de colmatagem atingir o ponto de alarme, ou preventivamente a cada 1.000-2.000 horas de operação. Para sistemas recém-montados ou após reparos maiores, troque o elemento após as primeiras 100-200 horas de operação (período de rodagem gera mais partículas)."
    },
    {
      question: "Qual a diferença entre filtragem absoluta e nominal?",
      answer: "A filtragem nominal (ex: 10 µm nominal) indica o tamanho de partícula que o filtro retém na maioria das vezes, mas não garante 100% de retenção — pode deixar passar partículas menores. A filtragem absoluta (ex: β10 ≥ 1000) garante que 99,9% das partículas acima de 10 µm são retidas, medido pelo teste multipass ISO 16889. Para proteção de componentes de precisão (válvulas proporcionais, servo-válvulas), exija sempre elementos com especificação absoluta."
    },
    {
      question: "O que é colmatagem e como afeta o sistema hidráulico?",
      answer: "Colmatagem é o progressivo entupimento do elemento filtrante pelas partículas retidas. À medida que o elemento colmata, a resistência ao fluxo aumenta, elevando o diferencial de pressão entre entrada e saída do filtro. Quando esse diferencial supera o ajuste da válvula de bypass, o filtro se abre e o fluido circula sem filtragem — acelerando o desgaste de todos os componentes. O indicador de colmatagem (visual ou elétrico) alerta quando o elemento precisa ser trocado."
    },
    {
      question: "Posso lavar e reutilizar o elemento filtrante?",
      answer: "Em geral, não. Elementos de papel ou fibra sintética não devem ser lavados — o processo destrói a estrutura filtrante e compromete a eficiência de filtração. Elementos de malha metálica (strainers de sucção) podem ser lavados com solvente adequado e ar comprimido, mas devem ser descartados se apresentarem danos ou deformações na malha. Consulte sempre o fabricante antes de tentar reutilizar um elemento."
    },
    {
      question: "Como identificar se o filtro hidráulico está causando cavitação na bomba?",
      answer: "Os sintomas de cavitação causada por filtro de sucção entupido incluem: ruído de 'golfada' ou estalo na bomba, vibração anormal no conjunto motor-bomba, queda na pressão de saída, temperatura elevada do óleo e, em casos graves, danos nos pistões e placa de distribuição da bomba. A solução imediata é inspecionar e limpar (ou trocar) o filtro de sucção. A HiComp realiza diagnóstico técnico gratuito."
    },
  ],
};

export default content;
