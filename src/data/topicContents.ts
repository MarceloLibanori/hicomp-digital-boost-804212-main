export interface TopicContent {
  introduction: string;
  mainContent: string[];
  technicalSpecs?: string;
  applications?: string[];
  brands?: string[];
  maintenance?: string;
  faq?: { question: string; answer: string }[];
  images?: string[];
}

export const topicContents: Record<string, TopicContent> = {
  "atuadores-hidraulicos": {
    introduction: "Se você está procurando por <strong>Atuadores hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>Atuadores hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/atuadores-01.jpg",
      "/src/assets/atuadores-02.jpg",
      "/src/assets/atuadores-03.jpg",
      "/src/assets/atuadores-04.jpg"
    ],
    mainContent: [
      "<p>Como parte protagonista de máquinas injetoras, prensas, sopradoras, tratores e escavadeiras, os <strong>atuadores hidráulicos</strong> têm a função de aplicar energia mecânica, fazendo-o funcionar. No entanto, atuam na transformação da energia de trabalho em energia mecânica.</p>",

      "<p>Os <strong>atuadores hidráulicos</strong> são equipamentos que utilizam pressão de fluidos em sua operação e, por isso, se distinguem dos demais motores, que trabalham com eletricidade como fonte de trabalho.</p>",

      "<h2>CLASSIFICAÇÃO DOS ATUADORES HIDRÁULICOS</h2>",

      "<p>Os <strong>atuadores hidráulicos</strong> tem suas funções determinadas a partir do tipo de fluido que manterá sob pressão para geração de força mecânica, podendo ser:</p>",

      "<ul class=\"list\">\n<li>• pneumáticos: quando atua com pressão de ar comprimido;</li>\n<li>• hidráulico: quando utiliza óleo para gerar a força mecânica.</li>\n<li>• Ainda, dependendo da forma como se comportam em relação ao movimento, podem ser classificados como atuadores hidráulicos, lineares ou rotativos:</li>\n<li>• Os lineares praticam movimento de translação e contínuo;</li>\n<li>• Os rotativos produzem performance de movimento rotativo.</li>\n</ul>",

      "<p>Os atuadores caracterizados como rotativos, podem, por sua vez, serem descritos como angulares, quando giram apenas em um determinado ângulo em toda a operação; ou contínuos, podendo realizar um número maior de giros.</p>",

      "<h2>DEFINIÇÃO DO PRODUTO - ATUADORES HIDRÁULICOS</h2>",

      "<p>Diferentes dos <strong>atuadores hidráulicos</strong>, os motores elétricos também são considerados atuadores, mas que utilizam outro tipo de alimentação para a operação mecânica, a energia elétrica. E não atua com pressão.</p>",

      "<p>Esses atuadores lineares são comumente conhecidos como cilindros ou pistão, que com a injeção e posteriormente pressão do fluido, desloca-se em vários sentidos, em movimentos repetitivos. Estes são aplicados em uma grande gama de máquinas utilizadas no setor industrial, como as operadas pela construção civil, guindastes, basculantes de caminhões, entre outros.</p>",

      "<p>Já os <strong>atuadores hidráulicos</strong> rotativos são amplamente conhecidos como cilindros rotativos, acionados por cremalheira ou alerta rotativa no acionamento do eixo e engrenagens. Podem ser encontrados em guindastes, esteiras rolantes, equipamentos agrícolas, bobinas, demais aplicações no setor industrial em geral.</p>",

      "<p>Os <strong>atuadores hidráulicos</strong> são flexíveis quanto à montagem e ao tamanho, com diâmetros de 1\" a 14\" e comprimento entre 10mm e 1.000mm. Eles possibilitam que os equipamentos operem com muita força e alta velocidade.</p>",

      "<p>A Hicomp é referência em comércio e manutenção de peças hidráulicas para equipamentos industriais, bombas, válvulas e muitos outros produtos, disponíveis para todo o Brasil. Os <strong>atuadores hidráulicos</strong> da Hicomp são produzidos conforme as recomendações do cliente e possuem, assim como os serviços de manutenção, garantia de 1 ano, com pagamento faturado até 60DDL, entre outras facilidades.</p>",

      "<p>Para solicitar um orçamento, consulte o atendimento da Empresa.</p>"
    ],
    /*applications: [
      "Prensas hidráulicas industriais",
      "Máquinas injetoras de plástico",
      "Equipamentos de sopro",
      "Tratores e máquinas agrícolas",
      "Escavadeiras e equipamentos de construção",
      "Sistemas de elevação industrial",
      "Máquinas ferramentas CNC"
    ],*/
    brands: ["Parker", "Rexroth", "Vickers", "Denison", "Eaton"],
    maintenance: "A HiComp oferece serviços especializados de manutenção preventiva e corretiva para atuadores hidráulicos, incluindo: inspeção de vedações, análise de vazamentos, substituição de componentes desgastados, testes de pressão e calibração. Nossos atuadores possuem garantia de 1 ano.",
    faq: [
      {
        question: "Qual a diferença entre atuador hidráulico e pneumático?",
        answer: "Atuadores hidráulicos utilizam óleo sob pressão e oferecem maior força e precisão, ideais para aplicações pesadas. Atuadores pneumáticos usam ar comprimido, sendo mais adequados para aplicações leves e rápidas."
      },
      {
        question: "Quanto tempo dura um atuador hidráulico?",
        answer: "Com manutenção adequada, um atuador hidráulico pode durar de 10 a 15 anos. A vida útil depende das condições de operação, qualidade do fluido e frequência de manutenção."
      },
      {
        question: "Como identificar problemas em atuadores hidráulicos?",
        answer: "Os principais sinais são: vazamentos de óleo, movimentos irregulares, perda de força, ruídos anormais e superaquecimento. Recomendamos inspeção regular para prevenir falhas."
      }
    ]
  },
  "bomba-hidraulica-parker": {
    introduction:
      "Se você está procurando por <strong>bomba hidráulica parker</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica parker</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-01.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-02.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-03.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-04.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-05.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-06.jpg",
      "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-07.jpg",
    ],
    mainContent: [
      "A <strong>bomba hidráulica parker</strong> é uma das melhores bombas existentes no mercado. Essas bombas podem ser de outros tipos, além de hidráulicas, sendo usadas em diversas aplicações, como combustível, óleo, lubrificação, transferência de fluidos, e em usos aeroespaciais, tanto para sistemas de circuito aberto quanto para sistemas de circuito fechado. Seguem mais informações a respeito de uma <strong>bomba hidráulica parker</strong>.",
      "<h2 style=\"color:#0070f3; font-weight:bold; text-align:center; margin:2rem 0 1rem 0; text-transform:uppercase;\">INFORMAÇÕES A RESPEITO DE UMA BOMBA HIDRÁULICA PARKER</h2>",
      "Uma <strong>bomba hidráulica parker</strong> é um dispositivo que adiciona energia a líquidos, recebendo, através de um eixo, uma haste ou algum outro fluido, energia mecânica. Algumas das formas de transmissão de energia podem ser feitas via aumento de velocidade, pressão ou elevação, bem como qualquer combinação entre essas formas de energia. Assim, a movimentação do líquido é facilitada.",
      "Nem sempre máquinas destinadas a adicionar energia nas formas de gases e vapor são chamadas de bombas. Uma <strong>bomba hidráulica parker</strong> é utilizada para fins hidráulicos, enquanto equipamentos utilizados para manuseio de ar, vapores ou gases são chamados de outros nomes, como ventilados ou compressores.",
      "A <strong>bomba hidráulica parker</strong> está disponível em diversos formatos, e para as mais diversas aplicações. Essas bombas podem ser bombas hidráulicas industriais, móveis ou em miniatura, de acordo com as necessidades e especificações do cliente. Certamente, com uma descrição adequada de uso, será mais fácil encontrar uma <strong>bomba hidráulica parker</strong> adequada, evitando qualquer arrependimento de ter escolhido um equipamento de qualidade superior que, também, oferece um ótimo custo-benefício aos seus clientes. Para comprar uma <strong>bomba hidráulica parker</strong>, conte com a Hicomp Hidráulica.",
      "<h2 style=\"color:#0070f3; font-weight:bold; text-align:center; margin:2rem 0 1rem 0; text-transform:uppercase;\">HICOMP HIDRÁULICA - ADQUIRA SUA BOMBA HIDRÁULICA PARKER CONOSCO</h2>",
      "A Hicomp Hidráulica é uma distribuidora que atua com comércio e manutenção de peças hidráulicas para máquinas e equipamentos. Atendendo em todo o território nacional, a Hicomp Hidráulica tem como público-alvo revendas, empresas de manutenção, indústrias e empresas de construção civil. Todos os seus produtos e serviços possuem garantia de 1 ano, e o pagamento pode ser faturado em até 60 dias DDL. Os engenheiros e técnicos da Hicomp Hidráulica possuem experiência de mais de 15 anos, e estão prontos para ajudá-lo. Entre em contato com a Hicomp Hidráulica para solicitar um orçamento."
    ],
    technicalSpecs:
      "Vazões de 1 a 1.000 litros/minuto | Pressões até 500 bar | Eficiência volumétrica >95% | Rotação 500-3.000 RPM | Fluidos ISO VG 32-68",
    applications: [
      "Centrais hidráulicas industriais",
      "Injetoras de plástico",
      "Prensas de estampagem",
      "Máquinas de usinagem CNC",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de teste hidráulico",
      "Laminadores e trefiladoras"
    ],
    brands: [
      "Parker", "Rexroth", "Vickers", "Denison", "Eaton", "Sauer Danfoss"
    ],
    maintenance:
      "Manutenção preventiva de bombas inclui análise do óleo, verificação de vazamentos, medição de pressão e vazão, troca de filtros, análise de ruído e vibração. A HiComp oferece serviço completo de manutenção e recondicionamento de bombas.",
    faq: [
      {
        question: "Como escolher a bomba hidráulica correta?",
        answer:
          "Considere: vazão necessária (L/min), pressão de trabalho (bar), tipo de aplicação, espaço disponível e orçamento. Nossa equipe técnica pode auxiliar no dimensionamento correto."
      },
      {
        question: "Por que a bomba hidráulica faz barulho?",
        answer:
          "Ruídos podem indicar cavitação, desgaste interno, contaminação do óleo ou pressão excessiva. Recomendamos inspeção técnica para corrigir problemas."
      },
      {
        question: "Qual a vida útil de uma bomba hidráulica?",
        answer:
          "Com manutenção adequada, uma bomba de qualidade pode durar de 20.000 a 50.000 horas. Fatores como limpeza do óleo, temperatura e ciclo de trabalho influenciam a durabilidade."
      },
    ],
  },
  "bomba-hidraulica-rexroth": {
    introduction:
      "Se você está procurando por <strong>bomba hidráulica rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-01.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-02.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-03.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-04.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-05.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-06.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-07.jpg",
      "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-08.jpg",
    ],
    mainContent: [
      "<h2>CONHEÇA BOMBA HIDRÁULICA REXROTH</h2>",

      "<p>A <strong>bomba hidráulica rexroth</strong> é uma peça considerada de alto rendimento e essencial para manter o correto funcionamento de máquinas industriais ou agrícolas. Ela pode ser utilizada em injetoras, escavadeiras, tratores, prensas, entre outros.</p>",

      "<p>A linha completa de <strong>bomba hidráulica rexroth</strong> inclui variados itens com velocidades e pressões diferentes. Há peças em que a rotação do sistema hidráulico pode ser feita tanto em sentido horário como anti-horário.</p>",

      "<p>As especificações da <strong>bomba hidráulica rexroth</strong> são definidas por tipo, deslocamento, pressão e velocidade máxima, velocidade mínima e dimensões (tamanho nominal) de cada <strong>bomba hidráulica rexroth</strong>.</p>",

      "<p>Na linha de produtos de <strong>bomba hidráulica rexroth</strong> existem variadas bombas e motores que por serem hidráulicos se aplicam a diversas necessidades, e por isso possuem características e funções diferentes.</p>",

      "<p>Entre esses produtos estão: bombas de engrenamento interno ou externo, bombas de palhetas constante, bombas de pistões radiais, bombas manuais, bombas variáveis, bombas de palhetas diretamente operadas, entre outros.</p>",

      "<p>Antes de utilizar uma <strong>bomba hidráulica rexroth</strong> o fluído hidráulico deverá ser escolhido, para que então características como mecanização do eixo, rendimento, potência do acionamento sejam analisadas.</p>",

      "<p>Outra característica da <strong>bomba hidráulica rexroth</strong> é que ela possui baixo nível de ruído operacional, pouca pulsação de vazão, alto grau de eficiência, vida longa útil e excelente comportamento de sucção.</p>",

      "<p>É importante destacar que ao optar pelas bombas hidráulicas da Rexroth, a negociação deve ser feita em uma empresa que seja especialista nestes dispositivos e ofereça serviços de qualidade na venda e orientação quanto à utilização das peças.</p>",

      "<h2>HICOMP – SOLUÇÕES EM BOMBA HIDRÁULICA REXROTH</h2>",

      "<p>A Hicomp é uma empresa especialista em comércio e manutenção de produtos óleo-hidráulicos e possui anos de experiência em serviços com a <strong>bomba hidráulica rexroth</strong>. Se você está procurando por peças confiáveis e qualidade garantida, a Hicomp é a empresa ideal para disponibilizar os melhores serviços.</p>",

      "<p>Atuando no Brasil inteiro a Hicomp oferece um ano de garantia em todos os produtos e serviços fornecidos e formas de pagamento que cabem no seu bolso. A equipe de engenheiros e técnicos da Hicomp possui reconhecimento e experiência capazes de atender a qualquer necessidade. Para mais informações sobre preços basta entrar em contato.</p>"
    ],
    technicalSpecs:
      "Vazões de 1 a 1.000 litros/minuto | Pressões até 500 bar | Eficiência volumétrica >95% | Rotação 500-3.000 RPM | Fluidos ISO VG 32-68",
    applications: [
      "Centrais hidráulicas industriais",
      "Injetoras de plástico",
      "Prensas de estampagem",
      "Máquinas de usinagem CNC",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de teste hidráulico",
      "Laminadores e trefiladoras"
    ],
    brands: [
      "Parker", "Rexroth", "Vickers", "Denison", "Eaton", "Sauer Danfoss"
    ],
    maintenance:
      "Manutenção preventiva de bombas inclui análise do óleo, verificação de vazamentos, medição de pressão e vazão, troca de filtros, análise de ruído e vibração. A HiComp oferece serviço completo de manutenção e recondicionamento de bombas.",
    faq: [
      {
        question: "Como escolher a bomba hidráulica correta?",
        answer:
          "Considere: vazão necessária (L/min), pressão de trabalho (bar), tipo de aplicação, espaço disponível e orçamento. Nossa equipe técnica pode auxiliar no dimensionamento correto."
      },
      {
        question: "Por que a bomba hidráulica faz barulho?",
        answer:
          "Ruídos podem indicar cavitação, desgaste interno, contaminação do óleo ou pressão excessiva. Recomendamos inspeção técnica para corrigir problemas."
      },
      {
        question: "Qual a vida útil de uma bomba hidráulica?",
        answer:
          "Com manutenção adequada, uma bomba de qualidade pode durar de 20.000 a 50.000 horas. Fatores como limpeza do óleo, temperatura e ciclo de trabalho influenciam a durabilidade."
      },
    ],
  },
  "bomba-hidraulica-vickers": {
    introduction:
      "Se você está procurando por <strong>bomba hidráulica vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-01.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-02.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-03.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-04.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-05.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-06.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-07.jpg",
      "/src/assets/bomba_vickers/bomba-hidraulica-vickers-08.jpg",
    ],
    mainContent: [
      "<h2>CONHEÇA BOMBA HIDRÁULICA VICKERS</h2>",

      "<p>Amplamente utilizadas no setor industrial, as bombas hidráulicas são equipamentos que, em conjunto com outros componentes, utilizam a energia potencial recebida para gerar movimento, conferindo força e velocidade à máquina que compõe. O tipo <strong>bomba hidráulica vickers</strong> é o modelo mais tradicional, silencioso e durável de bomba hidráulica no mercado.</p>",

      "<p>Além de apresentar tantos benefícios, a <strong>bomba hidráulica vickers</strong> é econômica e trabalha com componentes com alto padrão de qualidade, de modo a promover maior controle energético.</p>",

      "<h2>BOMBA HIDRÁULICA VICKERS – VARIEDADES</h2>",

      "<p>A <strong>bomba hidráulica vickers</strong> possui uma ampla variedade de modelos, mas alguns deles são mais utilizados na indústria.</p>",

      "<ul class=\"list\">\n<li>• engrenagem: as bombas operam com duas engrenagens, em movimento rotatório. São modelos de alta eficiência, construídos com corpo de alumínio e apresentam diversas possibilidades de montagem.</li>\n<li>• palhetas: as bombas são compostas por um conjunto de palhetas ajustáveis a um eixo, mantendo as extremidades em contato com a superfície. Esse tipo de bomba hidráulica apresenta maior eficiência que as bombas operadas por engrenagens. As bombas de palhetas mais presentes no mercado industrial são as do tipo V, VMQ, VQ e VVS. Além de eficiência, apresentam maior vida útil, configuração flexível e fácil manutenção.</li>\n<li>• parafuso: apresenta engrenagens em formato espiral, acondicionadas em um cilindro.</li>\n<li>• Além desses modelos, a bomba hidráulica Vickers pode ser do tipo geradora, de pistão radial ou pistão axial, utilizados no setor industrial e móbil.</li>\n</ul>",

      "<h2>VANTAGENS DA BOMBA HIDRÁULICA VICKERS</h2>",

      "<p>A <strong><a href=\"https://www.hicomp.com.br/filtro-hda\" title=\"filtro hda\">bomba hidráulica vickers</a></strong> possui vazão variável e fixa, além de apresentar alto rendimento e resistência, e atendem às mais diversas aplicações da indústria de construção civil, setor agrícola e tantos outros.</p>",

      "<p>Além desses benefícios, atende a circuitos hidráulicos fechados e abertos, com muita eficiência e baixo consumo de potência.</p>",

      "<p>A Hicomp Hidráulica atua em todo o território nacional, com o comércio e manutenção de peças hidráulicas com diversas aplicações no setor industrial e alto padrão de qualidade. A Empresa conta com técnicos e engenheiros com expertise no segmento e dispõe de equipamentos Vickers, Parker, Rexroth e Denison, com facilidades para pagamento, inclusive, faturado em até 60 DDL e 1 ano de garantia para todas as peças e serviços.</p>",

      "<p>Para conhecer as formas de pagamento, entre em contato com o atendimento.</p>"
    ],
    technicalSpecs:
      "Vazões de 1 a 1.000 litros/minuto | Pressões até 500 bar | Eficiência volumétrica >95% | Rotação 500-3.000 RPM | Fluidos ISO VG 32-68",
    applications: [
      "Centrais hidráulicas industriais",
      "Injetoras de plástico",
      "Prensas de estampagem",
      "Máquinas de usinagem CNC",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de teste hidráulico",
      "Laminadores e trefiladoras"
    ],
    brands: [
      "Parker", "Rexroth", "Vickers", "Denison", "Eaton", "Sauer Danfoss"
    ],
    maintenance:
      "Manutenção preventiva de bombas inclui análise do óleo, verificação de vazamentos, medição de pressão e vazão, troca de filtros, análise de ruído e vibração. A HiComp oferece serviço completo de manutenção e recondicionamento de bombas.",
    faq: [
      {
        question: "Como escolher a bomba hidráulica correta?",
        answer:
          "Considere: vazão necessária (L/min), pressão de trabalho (bar), tipo de aplicação, espaço disponível e orçamento. Nossa equipe técnica pode auxiliar no dimensionamento correto."
      },
      {
        question: "Por que a bomba hidráulica faz barulho?",
        answer:
          "Ruídos podem indicar cavitação, desgaste interno, contaminação do óleo ou pressão excessiva. Recomendamos inspeção técnica para corrigir problemas."
      },
      {
        question: "Qual a vida útil de uma bomba hidráulica?",
        answer:
          "Com manutenção adequada, uma bomba de qualidade pode durar de 20.000 a 50.000 horas. Fatores como limpeza do óleo, temperatura e ciclo de trabalho influenciam a durabilidade."
      },
    ],
  },


  "cilindro-hidraulico": {
    introduction: "Cilindros hidráulicos convertem energia hidráulica em movimento linear. São amplamente utilizados em máquinas industriais, equipamentos móveis e sistemas de automação para realizar tarefas de elevação, empurrão e tração.",
    images: [
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-01.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-02.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-03.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-04.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-05.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-06.webp"
    ],

    mainContent: [
      "<p>As diversas funcionalidades do <strong>cilindro hidráulico</strong> se dão por conta da desenvoltura que ele proporciona aos equipamentos. Ele é responsável por produzir movimento, ou seja, é um atuador mecânico de extrema importância em variados locais, como veículos de engenharia, por exemplo.</p>",

      "<p>Além da utilização do <strong>cilindro hidráulico</strong> em veículos de engenharia – como tratores e escavadeiras – ele também faz parte do mecanismo de prensas, injetoras e sopradoras, sendo uma peça que preza por qualidade para que o funcionamento dos maquinários seja excepcional.</p>",

      "<p>Na lista dos tipos de cilindros hidráulicos disponíveis no mercado, podemos citar alguns que são mais comumente procurados: cilindros de ação simples, cilindros com retorno com mola de simples ação e cilindro de dupla ação. Cada um deles tem uma aplicabilidade ideal para determinados equipamentos.</p>",

      "<h2>VANTAGENS E QUALIDADE DO CILINDRO HIDRÁULICO</h2>",

      "<p>O <strong>cilindro hidráulico</strong> conta com diversas vantagens que vão além da sua aplicabilidade nos equipamentos. A sua força e a sua alta velocidade são exemplos de excelentes benefícios dessa peça. Além disso, o <strong>cilindro hidráulico</strong> tem flexibilidade de montagem e de tamanho, o que auxilia o encaixe perfeito em todo tipo de aplicação.</p>",

      "<p>Claro que, para isso, a empresa contratada responsável pela a aplicação das peças deve atentar-se à qualidade do produto oferecido para os clientes. Ainda, é importante que a empresa ofereça serviço de personalização, assim o cliente pode solicitar o <strong>cilindro hidráulico</strong> de acordo com a sua necessidade.</p>",

      "<p>Esses detalhes fazem com que a desenvoltura do equipamento seja excelente, tendo como consequência eficácia em todos os processos, além de ter a vida útil do <strong>cilindro hidráulico</strong> e do maquinário prolongados.</p>",

      "<h2>HICOMP: EQUIPE EXPERIENTE E PERSONALIZAÇÃO</h2>",

      "<p>Quando o assunto é <strong>cilindro hidráulico</strong>, a empresa Hicomp destaca-se no mercado. A equipe, formada por engenheiros e técnicos com experiência, oferece soluções ideais para cada caso. Ainda, a Hicomp proporciona fabricação de <strong>cilindro hidráulico</strong> conforme a necessidade do cliente, garantindo personalização.</p>",

      "<p>A Hicomp utiliza peças dos melhores fabricantes do mercado – Vickers, Rexroth, Parker, Denison e HDA – sendo o foco da empresa a qualidade constante em tudo o que é oferecido. Entre em contato com a equipe, solicite um orçamento e conte com uma empresa que oferece qualidade e ótimo resultado final.</p>"
    ],
    applications: [
      "Máquinas industriais (prensas, injetoras)",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de elevação e guindastes",
      "Automação de processos industriais",
      "Equipamentos agrícolas",
      "Sistemas de transporte e movimentação"
    ],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison"],
  },
  "cilindro-hidraulico-para-pensa": {
    introduction: "Se você está procurando por <strong>cilindro hidráulico para prensa</strong>, você veio ao lugar certo! A HiComp é especializada em cilindro hidráulico para prensa e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-01.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-02.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-03.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-04.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-05.webp",
      "/src/assets/cilindro_hidraulico/cilindro-hidraulico-06.webp"
    ],

    mainContent: [
      "<p>Se você está procurando por <strong>cilindro hidráulico para prensa</strong>, você veio ao lugar certo! A HiComp é especializada em cilindro hidráulico para prensa e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<p>O <strong>cilindro hidráulico para prensa</strong> é um acessório extremamente versátil que pode ser produzido de acordo com a prensa na qual irá atuar. Ele apresenta uma alta flexibilidade em sua montagem e tamanho, sendo essa uma de suas principais vantagens.</p>",

      "<p>O <strong>cilindro hidráulico para prensa</strong> é um acessório que aumenta a força e a velocidade das prensas. Ele também pode ser aplicado em outros equipamentos como injetoras, sopradoras, tratores e escavadeiras; sempre se adaptando a eles.</p>",

      "<p>O <strong>cilindro hidráulico para prensa</strong> pode variar em diâmetro -- de 1'' a 14'' -- e em comprimento -- de 10mm a 10000mm -- , o que mostra sua capacidade de customização e individualização para sempre satisfazer as necessidades da prensa em que será aplicado.</p>",

      "<h2>CARACTERÍSTICAS DE UM CILINDRO HIDRÁULICO PARA PRENSA DE QUALIDADE</h2>",

      "<p>Para que um <strong>cilindro hidráulico para prensa</strong> apresente características de qualidade, ele precisará ser fabricado com matérias-primas certificadas de alto padrão, em conjunto com maquinários de última geração e tecnologia de ponta; além de uma mão-de-obra altamente especializada. Esses fatores vão determinar um produto de alto rigor de excelência e maior eficiência, resistência e durabilidade.</p>",

      "<p>Para que um <strong>cilindro hidráulico para prensa</strong> apresente características de qualidade, ele precisará atender todas as normas e regulamentações técnicas de segurança e qualidade de seu segmento.</p>",

      "<h2>HICOMP: DISTRIBUINDO CILINDRO HIDRÁULICO PARA PRENSA</h2>",

      "<p>A Hicomp é uma empresa brasileira distribuidora de <strong>cilindro hidráulico para prensa</strong> para todo o território nacional. Ela também distribui outros tipos de produtos do segmento hidráulico e oferece diversos serviços de manutenção desses produtos.</p>",

      "<p>Todo cilindro hidráulico para prensa oferecido pela empresa apresenta garantia de um ano. Além desse diferencial, a Hicomp só trabalha com os melhores fabricantes do segmento hidráulico, entre eles: Vickers, Rexroth, Parker, Denison e HDA; e apresenta um vasto estoque para garantir sempre pronta entrega e um conserto rápido. A Hicomp possui uma equipe técnica composta por engenheiros com mais de 15 anos de experiência, todos prontos para atuar com perfeição.</p>",

      "<p>Esses fatores fazem da Hicomp uma empresa referencial em seu segmento e com o comprometimento de satisfazer todos os seus clientes. Se você busca pelo melhor <strong>cilindro hidráulico para prensa</strong>, entre em contato e peça um orçamento. A Hicomp aceita diversas formas de pagamento; entre elas o pagamento faturado em até 60DDL.</p>"
    ],
    applications: [
      "Máquinas industriais (prensas, injetoras)",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de elevação e guindastes",
      "Automação de processos industriais",
      "Equipamentos agrícolas",
      "Sistemas de transporte e movimentação"
    ],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison"],
  },
  "cilindro-hidraulico-rexroth": {
    introduction: "<p>Se você está procurando por <strong>cilindros hidráulicos rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindros hidráulicos rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [
      "/src/assets/cilindro_hidraulico_rexroth/cilindros-hidraulicos-rexroth-01.webp",
      "/src/assets/cilindro_hidraulico_rexroth/cilindros-hidraulicos-rexroth-02.webp",
      "/src/assets/cilindro_hidraulico_rexroth/cilindros-hidraulicos-rexroth-03.webp",
    ],
    mainContent: [
      "<p>Um cilindro hidráulico é uma peça mecânica utilizada para aplicar força através de um percurso linear. Ele também é conhecido como motor hidráulico linear. Entre os diferentes tipos de cilindros no mercado, os <strong>cilindros hidráulicos rexroth</strong> são a melhor opção, oferecendo um ótimo custo-benefício aliado à qualidade superior. Seguem informações sobre a forma de operação dos <strong>cilindros hidráulicos rexroth</strong>.</p>",

      "<h2>FORMA DE OPERAÇÃO DOS CILINDROS HIDRÁULICOS REXROTH</h2>",

      "<p>Os <strong>cilindros hidráulicos rexroth</strong> obtêm a energia por meio de um fluido hidráulico pressurizado que é, na maioria das vezes, algum tipo de óleo. Basicamente, existem duas peças que constituem os <strong>cilindros hidráulicos rexroth</strong>. São elas: um cilindro e um pistão, sendo este móvel e conectado a uma haste. O cilindro de contenção é totalmente fechado em ambos os lados, sendo que em um desses lados está o fundo e no outro lado, o local por onde se introduz o pistão, que é perfurado. Esse pistão, contido nos <strong>cilindros hidráulicos rexroth</strong>, divide a parte interna do cilindro em duas partes, que são a câmara inferior e a câmara da haste. Dentro dela existe uma pressão hidráulica, que age no pistão para produzir o movimento linear.</p>",

      "<p>Basicamente, todos os cilindros hidráulicos têm essa forma de funcionamento. Porém, o que varia entre as diversas marcas fabricantes é sua qualidade. Os <strong>cilindros hidráulicos rexroth</strong> são muito bons, e devem ser a escolha feita para qualquer projeto. Se você deseja adquirir <strong>cilindros hidráulicos rexroth</strong>, conte com a Hicomp Hidráulica, que é uma ótima empresa, responsável e com profissionais muito experientes.</p>",

      "<h2>HICOMP HIDRÁULICA - CILINDROS HIDRÁULICOS REXROTH</h2>",

      "<p>A Hicomp Hidráulica é uma empresa atuante no segmento de comércio e manutenção de peças hidráulicas para máquinas e equipamentos, possuindo abrangência nacional para seus produtos e serviços. Seu público-alvo são revendedores, empresas de manutenção, indústrias e empresas de construção civil. Os produtos e serviços oferecidos pela Hicomp Hidráulica possuem garantia de 1 ano, e o pagamento pode ser feito por meio de faturamento, para até 60 dias DDL. A equipe técnica da Hicomp Hidráulica é muito competente, tendo experiência de mais de 15 anos. Entre em contato com a Hicomp Hidráulica para conhecer suas peças.</p>"
    ],
    applications: [
      "Máquinas industriais (prensas, injetoras)",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de elevação e guindastes",
      "Automação de processos industriais",
      "Equipamentos agrícolas",
      "Sistemas de transporte e movimentação"
    ],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison"],
  },
  "cilindros-hidraulicos-vickers": {
    introduction:
      "Se você está procurando por <strong>cilindros hidráulicos vickers</strong>, você veio ao lugar certo! A HiComp é especializada em cilindros hidráulicos vickers e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/cilindro_hidraulico_vickers/cilindros-hidraulicos-vickers-01.webp",
      "/src/assets/cilindro_hidraulico_vickers/cilindros-hidraulicos-vickers-02.webp",
      "/src/assets/cilindro_hidraulico_vickers/cilindros-hidraulicos-vickers-03.webp",
    ],
    mainContent: [
      "<p>O cilindro hidráulico é uma ferramenta utilizada para transformar energia hidráulica em energia mecânica. São comumente utilizados em indústrias de diversos segmentos, principalmente como componente de sistemas articulados de maquinários.<br /></p>",

      "<p>Os <strong>cilindros hidráulicos vickers</strong> estão dentre os mais renomados do mercado e são altamente conhecidos por sua qualidade, eficiência e durabilidade.<br /></p>",

      "<p>A empresa é líder mundial na fabricação de componentes hidráulicos, o que faz dos <strong>cilindros hidráulicos vickers</strong> a melhor opção para equipamentos industriais.</p>",

      "<h2>COMO FUNCIONAM OS CILINDROS HIDRÁULICOS VICKERS</h2>",

      "<p>A energia promovida pelo cilindro é gerada pelo movimento de entrada e saída do óleo hidráulico de dentro do tubo. Este óleo é pressurizado por meio de uma bomba elétrica.<br /></p>",

      "<p>Nos <strong>cilindros hidráulicos vickers</strong> há um pistão fixo a uma haste. O movimento desta haste, promovido por meio de acionamento, é quem causa a pressão no óleo, efetivando o movimento.<br /></p>",

      "<p>Durante seu funcionamento, a força exercida pelos <strong>cilindros hidráulicos vickers</strong> é linear, ou seja, a intensidade é a mesma do início ao fim do movimento.<br /></p>",

      "<p>A velocidade do movimento vai depender do êmbolo e do caudal de fluido. Os cilindros podem exercer forças de compressão ou tração.</p>",

      "<h2>HICOMP HIDRÁULICA – A MELHOR SOLUÇÃO EM CILINDROS HIDRÁULICOS</h2>",

      "<p>Com um portfólio completo que abrange as melhores marcas e uma equipe altamente qualificada, composta por engenheiros e técnicos com mais de quinze anos de experiência, a Hicomp Hidráulica se tornou referência na distribuição e manutenção de componentes hidráulicos no país. Os <strong>cilindros hidráulicos vickers</strong> fazem parte da extensa gama de produtos de alta qualidade oferecidos pela Hicomp e possuem flexibilidade de tamanho, o que atende diferentes demandas industriais.<br /></p>",

      "<p>A empresa oferece a seus clientes a possibilidade de pagamento faturado em até 60 DDL, e todos os produtos e serviços acompanham garantia de um ano.<br /></p>",

      "<p>Os serviços de manutenção de peças são realizados na própria Hicomp ou em campo, de acordo com a demanda do cliente.<br /></p>",

      "<p>Antes de adquirir peças e componentes hidráulicos, consulte a Hicomp Hidráulica. Na Hicomp você encontra produtos das marcas mais renomadas do mundo, com o melhor preço e a qualidade Hicomp assegurando a satisfação de seus clientes. Entre em contato e solicite um orçamento de <strong>cilindros hidráulicos vickers</strong>.</p>",
    ],
    applications: [
      "Máquinas industriais (prensas, injetoras)",
      "Equipamentos móveis (tratores, escavadeiras)",
      "Sistemas de elevação e guindastes",
      "Automação de processos industriais",
      "Equipamentos agrícolas",
      "Sistemas de transporte e movimentação",
    ],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison"],
  },
  "fabrica-de-bombas-hidraulicas": {
    introduction:
      "Se você está procurando por <strong>fábrica de bombas hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>fábrica de bombas hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-01.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-02.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-03.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-04.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-05.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-06.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-07.webp",
      "/src/assets/fabrica_de_bomba_hidraulica/fabrica-bombas-hidraulicas-08.webp",

    ],
    mainContent: [
      "<p>Com a automatização e crescimento do setor industrial, os equipamentos e maquinários motorizados estão presentes em aplicações de diversos setores. Contando com uma <strong>fábrica de bombas hidráulicas</strong>, a indústria de construção civil, agroindustrial, móbil e muitas outras podem adquirir bombas hidráulicas com garantia de qualidade e sob medida para cada aplicação.<br /></p>",

      "<p>A <strong>fábrica de bombas hidráulicas</strong> segue padrões de segurança, boas práticas de fabricação e conta com pessoal técnico e de engenharia com expertise para desenvolver bombas hidráulicas de alto padrão e eficiência. </p>",

      "<h2>VANTAGENS DE ADQUIRIR EQUIPAMENTOS COM UMA FÁBRICA DE BOMBAS HIDRÁULICAS</h2>",

      "<p>Como as bombas hidráulicas apresentam muita versatilidade, por estarem presentes em muitos segmentos do setor industrial, com uma <strong>fábrica de bombas hidráulicas</strong> é possível obter os melhores esclarecimentos técnicos e orientação sobre o tipo de equipamento utilizar em cada aplicação, assim como adquirir uma bomba hidráulica com ótimo custo-benefício,com máquinas mais eficientes e que poupem energia.<br /></p>",

      "<p>Além desses benefícios, com o auxílio da <strong>fábrica de bombas hidráulicas</strong>, o cliente conta com a manutenção adequada e a certificação de qualidade e peças autênticas em estoque. </p>",

      "<h2>PRODUTOS OFERECIDOS PELA FÁBRICA DE BOMBAS HIDRÁULICAS</h2>",

      "<p>Além de fornecer bombas hidráulicas nos mais diversos tipos para a aplicação desejada, como as bombas com engrenagem, de parafuso, de palhetas, pistão radial e de pistão axial e bombas geradoras, que apresentam eficiência, fácil manutenção e adequação a diversas aplicações industriais, uma <strong>fábrica de bombas hidráulicas</strong> também atua no segmento de válvulas, cilindros e motores hidráulicos, para complementar a montagem dos equipamentos, com garantia de qualidade e rendimento.<br /></p>",

      "<p>Ainda, a <strong>fábrica de bombas hidráulicas</strong> comercializa e presta serviços de manutenção de bombas hidráulicas para máquinas agrícolas e industriais, como injetoras, prensas, tratores e escavadeiras. <br /></p>",

      "<p>A Hicomp Hidráulica atua no comércio e manutenção de peças hidráulicas em todo o País, e dispõe de técnicos e engenheiros com mais de 15 anos de experiência no segmento, prestando serviços de qualidade e de acordo com as especificações do cliente, para cada aplicação. A Empresa dispõe de equipamentos Vickers, Parker, Rexroth, Denison e outros importados, com 1 ano de garantia, pagamento faturado de até 60 DDL e outras facilidades.<br /></p>",

      "<p>Para solicitar um orçamento, consulte o atendimento da Hicomp Hidráulica.</p>",
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],
  },
  "fabrica-de-cilindros-hidraulicos": {
    introduction:
      "Se você está procurando por <strong>fábrica de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>fábrica de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-01.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-02.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-03.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-04.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-05.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-06.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-07.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-08.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-09.webp",
      "/src/assets/fabrica_cilindros_hidraulicos/fabrica-cilindros-hidraulicos-10.webp",

    ],
    mainContent: [
      "<p>Se você está procurando por <strong>fábrica de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>fábrica de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>HICOMP - ONDE ENCONTRAR FÁBRICA DE CILINDROS HIDRÁULICOS</h2>",

      "<p>Um Cilindro hidráulico é produzido para gerar energia mecânica a partir da transformação da energia hidráulica. Com isso, sua utilidade na indústria é primordial e indispensável, visto  que esse produto faz parte do sistema de articulação de muitos maquinários. Tendo em vista as diversas demandas da indústria, a <strong>fábrica de cilindros hidráulicos</strong> realiza sua produção  com flexibilidade de montagem e tamanho, para que o cilindro se adapte perfeitamente à necessidade do cliente. </p>",

      "<p>A <strong>fábrica de cilindros hidráulicos</strong> fornece os produtos pensando em suas diferentes aplicações,   por exemplo, na integração de grandes mecanismos como a retroescavadeira, no qual o cilindro é responsável pela movimentação dos braços e pás da máquina. O produto também é utilizado em áreas que necessitam de sua aplicação por meio de força, como na agricultura.<br /></p>",

      "<p>Uma <strong>fábrica de cilindros hidráulicos</strong> também leva em conta os diferentes modelos do produto que são necessários para aplicação em empilhadeira e injeções de prensa, além de braçadeiras, guindastes e equipamentos de construção. <br /></p>",

      "<p>Desta forma, na aquisição do cilindro hidráulico, levam-se em conta as características que melhor se adaptem ao serviço que será realizado. A <strong>fábrica de cilindros hidráulicos</strong> disponibiliza no momento da produção a opção de fabricação  com diâmetros que podem variar de 1' a 14' e comprimentos de 10mm a 10000mm. </p>",

      "<h2>FÁBRICA DE CILINDROS HIDRÁULICOS PRODUZ COM FORNECEDORES DE QUALIDADE</h2>",

      "<p>É necessário encontrar uma  <strong>fábrica de cilindros hidráulicos</strong> que preze pela excelência na produção conta com fornecedores de qualidade, como a Eaton, empresa líder mundial em fornecimento de sistemas e componentes hidráulicos, que conta com marcas renomadas, como a Vickers, que atende a diversos mercados fornecendo produtos para aplicação na indústria.  <br /></p>",

      "<p>Uma <strong>fábrica de cilindros hidráulicos</strong> que reconhece a  importância dos fornecedores e que se esforça para  atender de forma precisa as necessidades do cliente é a HiComp. Há anos no mercado, a empresa é composta por engenheiros e técnicos com mais de 15 anos de experiência. <br /></p>",

      "<p>Além disso, a HiComp valoriza a confiança dos clientes e por isso oferece um ano de garantia em todos os serviços e produtos. A empresa, ainda, concede a forma de pagamento faturado em até 60DDL. Entre em contato com a empresa para solicitar um orçamento e conhecer os demais produtos e vantagens de adquirir produtos com fabricantes de excelência.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],
  },

  "loja-de-bombas-hidraulicas": {
    introduction:
      "Se você está procurando por <strong>Loja de bombas hidráulicas</strong>, você veio ao lugar certo! A Hicomp Hidráulica é especializada em <strong>loja de bombas hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/loja_bombas_hidraulicas/loja-bombas-hidraulicas-01.webp",
      "/src/assets/loja_bombas_hidraulicas/loja-bombas-hidraulicas-02.webp",
      "/src/assets/loja_bombas_hidraulicas/loja-bombas-hidraulicas-03.webp",
      "/src/assets/loja_bombas_hidraulicas/loja-bombas-hidraulicas-04.webp",
      "/src/assets/loja_bombas_hidraulicas/loja-bombas-hidraulicas-05.webp",


    ],
    mainContent: [
      "<p>Se você está procurando por <strong>Loja de bombas hidráulicas</strong>, você veio ao lugar certo! A Hicomp Hidráulica é especializada em <strong>loja de bombas hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Uma <strong>Loja de bombas hidráulicas</strong> deve ser  muito cautelosa , devido à versatilidade que as bombas possuem. Porém, entre tantas lojas diferentes, é difícil saber qual delas é a mais adequada. Existem algumas características que diferem uma boa <strong>loja de bombas hidráulicas</strong> de uma ruim, e é muito importante que sejam analisadas  quais são essas características, para, assim, fazer uma boa escolha. Seguem informações sobre  quais são as características que tornam uma <strong>loja de bombas hidráulicas</strong>  uma boa opção.</p>",


      "<h2>CARACTERÍSTICAS QUE TORNAM UMA LOJA DE BOMBAS HIDRÁULICAS EM UMA BOA OPÇÃO</h2>",


      "<p>A primeira coisa a ser observada em uma <strong>loja de bombas hidráulicas</strong> é a forma com a qual ela atende seus clientes . Seus clientes devem ser tratados com muito carinho e atenção, e os funcionários devem estar  dispostos a ajudá-lo com o que for necessário, e responder as suas dúvidas, na medida do possível. Para isso,  é importante que haja uma equipe técnica capacitada e experiente, para propor boas soluções a seus clientes.<br /></p>",

      "<p>Outra característica muito importante em uma <strong>loja de bombas hidráulicas</strong> é saber se seus  produtos são de qualidade. Os equipamentos  vendidos por uma <strong>loja de bombas hidráulicas</strong> devem possuir qualidade superior, possibilitando  que seus clientes sintam-se satisfeitos com isso. Além da qualidade dos materiais, caso a <strong>loja de bombas hidráulicas</strong> também ofereça outros serviços, como assistência técnica, eles devem ser prestados com o maior cuidado possível.<br /></p>",

      "<p>Há um fator determinante na escolha de uma <strong>loja de bombas hidráulicas</strong> e, mesmo que ela possua todas as qualidades citadas acima, se essa não for respeitada, muitos clientes não desejarão escolhê-la. Seus produtos e serviços devem possuir um ótimo custo-benefício, pois, caso contrário, muitos  clientes ficarão  mais interessados em negociar com outras empresas.<br /></p>",

      "<p>Se você não consegue pensar em nenhuma <strong>loja de bombas hidráulicas</strong> que possua todas essas características, opte pela  Hicomp Hidráulica, e tenha a certeza de ter escolhido uma ótima empresa.</p>",


      "<h2>HICOMP HIDRÁULICA</h2>",


      "<p>A Hicomp Hidráulica é uma empresa de qualidade, que atua nonagenário de comércio e manutenção de peças hidráulicas para máquinas e equipamentos. Seu foco é atender a revendedores, empresas de manutenção e construção civil e indústrias em geral, com qualidade superior às outras empresas do mercado. Com uma equipe técnica com experiência de mais de 15 anos, certamente seus produtos e serviços serão ótimos, e você ficará satisfeito. A garantia dos produtos e serviços da Hicomp Hidráulica possui garantia de 1 ano, e o pagamento pode ser feito em até 60 dias DDL, por meio de faturamento. Parasolicitar um orçamento, entre em contato com a Hicomp Hidráulica.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "manutencao-de-bloco-manifold": {
    introduction:
      "Se você está procurando por <strong>manutenção de bloco manifold</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>manutenção de bloco manifold</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/manutencao_de_bloco_manifold/manutencao-bloco-manifold-01.webp",
      "/src/assets/manutencao_de_bloco_manifold/manutencao-bloco-manifold-02.webp",
      "/src/assets/manutencao_de_bloco_manifold/manutencao-bloco-manifold-03.webp",
      "/src/assets/manutencao_de_bloco_manifold/manutencao-bloco-manifold-04.webp",
      "/src/assets/manutencao_de_bloco_manifold/manutencao-bloco-manifold-05.webp",


    ],
    mainContent: [
      "<p>As válvulas são componentes de extrema importância na montagem de equipamentos hidráulicos, como os motores, os pistões, cilindros e todo o sistema mecânico de aplicações industriais. As válvulas têm a função de reduzir, aumentar, manter ou fechar a o fluxo de pressão em determinados focos de peças hidráulicas. O conjunto de válvulas que compõem um sistema hidráulico é denominado bloco Manifold. E após ciclos de funcionamento e desgaste de algumas válvulas é necessário realizar a <strong>manutenção de bloco manifold</strong>.<br /></p>",

      "<p>O bloco Manifold é construído com o auxílio de máquina modernas CNC e podem ser forjados em alumínio, aço usinado ou ferro fundido nodular. </p>",


      "<h2>TIPOS DE EQUIPAMENTOS PARA OS QUAIS RECOMENDA-SE A MANUTENÇÃO DE BLOCO MANIFOLD</h2>",


      "<p>A <strong>manutenção de bloco manifold</strong> visa reparar anomalias da adequação operacional de válvulas dos sistemas hidráulicos. Os blocos Manifold podem, ainda, ser maiores ou menores, de modo a facilitar a <strong>manutenção de bloco manifold</strong>.<br /></p>",

      "<p>O reparo é recomendado para os seguintes equipamentos: <br /></p>",

      "<ul class=\"list\">",

      "<li>\n•    bloco Manifold com válvulas: interligam as válvulas através dos fios internos e podem, até mesmo, substituir os chassis. Esse equipamento apresenta menor probabilidade de vazamentos de óleo em mangueiras e tubos.<br /></li>",


      "<li>\n•    bloco Manifold com válvulas para prensa: é específico para equipamentos que operam com mecanismo de prensa e é responsável por distribuir o fluido ao sistema hidráulico.</li>",

      "</ul>",


      "<h2>GARANTIA DE QUALIDADE NA MANUTENÇÃO DE BLOCO MANIFOLD</h2>",


      "<p>Todas as vezes que é necessário realizar a <strong>manutenção de bloco manifold</strong>, várias medidas de segurança são tomadas. A NR-12 é a norma padrão que estabelece os parâmetros de instalação e <strong>manutenção de bloco manifold</strong>.<br /></p>",

      "<p>Engenheiros altamente capacitados analisam o equipamento após a manutenção e são seguidas todas as exigências para que o equipamento atenda com eficiência à determinada aplicação.<br /></p>",

      "<p>Para <strong>manutenção de bloco manifold</strong>, assim como possíveis adequações do sistema hidráulico é necessário expedir uma Anotação de Responsabilidade Técnica (ART), uma vez que tanto a manutenção como a adequação das válvulas e do bloco está relacionada ao bom funcionamento e segurança de outros componentes. <br /></p>",

      "<p>A Hicomp Hidráulica é especializada em comércio e manutenção de peças hidráulicas para aplicação em diversos segmentos industriais. Com expertise de mais de 15 anos, conta com equipamentos modernos e equipe capacitada para prestação dos serviços. A Empresa atende em todo o Brasil e oferece 1 ano de garantia de equipamentos e serviços e facilidades de pagamento, como faturamento em até 60 DDL.<br /></p>",

      "<p>Para solicitar um orçamento, contate o atendimento da Hicomp Hidráulica.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "manutencao-de-cilindros-hidraulicos": {
    introduction:
      "Se você está procurando por <strong>manutenção de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>manutenção de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!",
    images: [
      "/src/assets/manutencao_de_cilindro_hidraulicos/manutencao-cilindros-hidraulicos-01.webp",
      "/src/assets/manutencao_de_cilindro_hidraulicos/manutencao-cilindros-hidraulicos-02.webp",
      "/src/assets/manutencao_de_cilindro_hidraulicos/manutencao-cilindros-hidraulicos-03.webp",
      "/src/assets/manutencao_de_cilindro_hidraulicos/manutencao-cilindros-hidraulicos-04.webp",


    ],
    mainContent: [
      "<p>Se você está procurando por <strong>manutenção de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>manutenção de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Os cilindros hidráulicos são peças responsáveis por transformar energia hidráulica em energia mecânica, sendo muito utilizados em máquinas industriais.<br /></p>",

      "<p>Também conhecido como motor hidráulico linear, o cilindro hidráulico funciona por meio de um pistão, e a energia é gerada conforme o óleo entra e sai do cilindro.<br /></p>",

      "<p>Muitas pessoas acabam adquirindo equipamentos seminovos para suas indústrias, o que pode acabar gerando alguns prejuízos, pois uma vez que peças já utilizadas não acompanham garantia, as empresas precisam recorrer à <strong>manutenção de cilindros hidráulicos</strong> quando eles apresentam eventuais anomalias.<br /></p>",

      "<p>A <strong>manutenção de cilindros hidráulicos</strong> pode resolver o problema em curto prazo; porém, o ideal é que se adquiram cilindros hidráulicos novos de uma empresa reconhecida no mercado que utilize materiais de alta qualidade na produção, visando a vida útil da mercadoria.<br /></p>",

      "<p>Antes de adquirir um produto já utilizado ou de qualidades inferiores e que necessitem da <strong>manutenção de cilindros hidráulicos</strong>, avalie os melhores fornecedores do país e compare o custo-benefício.</p>",



      "<h2>COMO FUNCIONAM OS CILINDROS HIDRÁULICOS </h2>",


      "<p>A pressão exercida dentro do cilindro se dá graças ao motor elétrico junto à bomba. Quando acionado o comando, a haste conectada ao pistão se desloca exercendo pressão sobre o óleo.<br /></p>",

      "<p>A força exercida pelo cilindro é chamada linear pois segue estável durante todo o processo. <br /></p>",

      "<p>As medidas do cilindro e do pistão se alteram de acordo com a força que deverá ser exercida. Quanto maior o diâmetro, maior a força.<br /></p>",

      "<p>Os cilindros são de alta durabilidade e a <strong>manutenção de cilindros hidráulicos</strong> não costuma ser constante.</p>",


      "<h2>MANUTENÇÃO DE CILINDROS HIDRÁULICOS- MELHOR CUSTO-BENEFÍCIO DO MERCADO</h2>",


      "<p>Os cilindros hidráulicos produzidos pela Hicomp Hidráulica possuem montagem e tamanhos flexíveis, podendo atender à diferentes demandas industriais.<br /></p>",

      "<p>Os equipamentos fabricados pela Hicomp Hidráulica atendem aos mais altos padrões de qualidade; além de acompanharem garantia de um ano. </p>",


      "<h2>MANUTENÇÃO DE CILINDROS HIDRÁULICOS - HICOMP</h2>",


      "<p>A Hicomp Hidráulica atende clientes em todo o território nacional e conta com um amplo portfólio, além de uma equipe altamente qualificada composta por engenheiros e técnicos com mais de quinze anos de experiência.<br /></p>",

      "<p>Antes de recorrer à peças de baixa qualidade que necessitem de <strong>manutenção de cilindros hidráulicos</strong>, contate a Hicomp e consulte valores, formas de pagamento e peças à disposição de sua empresa.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "motor-hidraulico-parker–hicomp-hidraulica": {
    introduction:
      "<p>Se você está procurando por <strong>motor hidráulico parker</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico parker</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-01.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-02.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-03.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-04.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-05.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-06.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-07.webp",
      "/src/assets/motor-hidraulico-parker–hicomp-hidraulica/motor-hidraulico-parker-08.webp",
    ],
    mainContent: [
      "<p>Se você está procurando por <strong>motor hidráulico parker</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico parker</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>A função principal do motor hidráulico é transformar a energia da água ou de outros fluidos em energia mecânica. Na indústria, é comum o uso de óleos para promover esta transformação de energia.<br /></p>",

      "<p>O <strong>motor hidráulico parker</strong> está dentre os mais utilizados em atividades industriais, devido à sua alta qualidade, durabilidade e seu reconhecimento no mercado.<br /></p>",

      "<p>O funcionamento do motor se dá pela movimentação do fluido que, por meio de tubos e canalizadores, chega pressurizado até o motor, promovendo o movimento. A movimentação do líquido faz com que o <strong>motor hidráulico parker</strong> gire, ativando seu funcionamento.<br /></p>",

      "<p>O <strong>motor hidráulico parker</strong> é composto com um conjunto de bomba, válvulas e tubos.<br /></p>",

      "<p>Pode ser utilizado em máquinas, plataformas, guinchos e veículos industriais.<br /></p>",

      "<p>Os motores hidráulicos podem ser de engrenagem, que promovem a rotação contínua, de aleta, indicado para equipamentos que necessitem de forças menores, ou de pistão, o mais comum, que aguentam altas pressões e baixas velocidades, sendo indicado para todo tipo de aplicação.</p>",


      "<h2>AS MELHORES CONDIÇÕES DE COMPRA DE MOTOR HIDRÁULICO PARKER ESTÃO NA HICOMP</h2>",


      "<p>Referência no segmento de distribuição e manutenção de componentes hidráulicos, a Hicomp Hidráulica atua com as melhores peças e marcas do país. O <strong>motor hidráulico parker</strong> faz parte do amplo portfólio da Hicomp, junto a cilindros, bombas e válvulas que oferecem as melhores soluções em hidráulica para sua indústria.<br /></p>",

      "<p>A Hicomp Hidráulica atua em todo o território nacional e os serviços prestados podem ser realizados no local em que o cliente solicitar. A empresa conta com uma equipe altamente treinada, composta por engenheiros e técnicos com mais de uma década de experiência de mercado, o que garante a seus clientes qualidade de serviço, segurança e eficácia.<br /></p>",

      "<p>Oferecemos um ano de garantia no <strong>motor hidráulico parker</strong>, bem como nas demais peças registradas, além de condições de pagamento facilitadas, podendo faturar o pagamento para até 60 DDL após a compra.<br /></p>",

      "<p>O atendimento prestado pela Hicomp é customizado de acordo com as necessidades de cada cliente. Antes de comprar o <strong>motor hidráulico parker</strong> e demais peças hidráulicas, não deixe de consultar a Hicomp Hidráulica e assegure à sua empresa o melhor custo x benefício em peças e serviços de hidráulica do mercado.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "motor-hidraulico-rexroth": {
    introduction:
      "<p>Se você está procurando por <strong>motor hidráulico rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-01.webp",
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-02.webp",
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-03.webp",
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-04.webp",
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-05.webp",
      "/src/assets/motor_hidraulico_rexroth/motor-hidraulico-rexroth-06.webp",

    ],
    mainContent: [
      "<p>Se você está procurando por <strong>motor hidráulico rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Produzido com a mais alta tecnologia, o <strong>motor hidráulico rexroth</strong> é desenvolvido  com alto desempenho. Com isso, sua função de transformar energia líquida, através do uso de  água ou óleo, em energia mecânica, é realizada com  excelência.  <br /></p>",

      "<p>A agilidade é um dos requisitos importantes na indústria para que essa fique cada vez mais competitiva no mercado. Desta forma, os mecanismos de atuação devem ser da melhor qualidade . Existem  diversas fabricantes de peças para indústria. No entanto, é preciso estar atento à qualidade. <br /></p>",

      "<p>O <strong>motor hidráulico rexroth</strong> encaixa-se  perfeitamente na necessidade de agilidade e qualidade, pois seu alto desempenho decorre  de sua velocidade, limite de pressão máxima e volume de absorção. </p>",


      "<h2>MODELOS DE MOTOR HIDRÁULICO REXROTH</h2>",


      "<p>O <strong>motor hidráulico rexroth</strong> atende a diferentes atividades da indústria nas quais sua  utilização pode ser requisitada. Por isso, ele é produzido em vários modelos. Há modelos com o motor pistão, que é recomendado para altas pressões e baixas velocidades. <br /></p>",

      "<p>Outro modelo é o motor de engrenagem, que possui duas engrenagens, sendo  mais simples e possuindo  maior resistência à sujeira. Existe,  também, o motor de palhetas, que é especialmente resistente, pois o motor  fica  ligado a um objeto de resistência. <br /></p>",

      "<p>Por último, o <strong>motor hidráulico rexroth</strong> também pode ser orbital, sendo  aplicado em muitas atividades com trabalhos em baixa rotação e alta potência de torque, possuindo  tamanho compacto. Todos os modelos de <strong>motor hidráulico rexroth</strong> possuem opções de controles, sensores, válvulas integradas e flexibilidade de montagem e fixação. </p>",


      "<h2>HICOMP FORNECEDORA DE MOTOR HIDRÁULICO REXROTH</h2>",


      "<p>Com atendimento personalizado, preços especiais e produtos a pronta entrega, a HiComp fornece todos os modelos de <strong>motor hidráulico rexroth</strong>. A empresa atua no mercado há anos com o comércio e manutenção de produtos de óleo e hidráulicos. <br /></p>",

      "<p>A HiComp conta com um estoque de  produtos de fabricantes de ponta, como Rexroth, Vickers, Parker, Denison e HDA. Além disso, a empresa é formada por engenheiros e técnicos qualificados. Todos os produtos e serviços são oferecidos com um ano de garantia. A empresa ainda oferece ao cliente a forma de pagamento faturada em até 60DDL. Conheça mais sobre a HiComp e seus produtos e serviços! Entre em contato para solicitar um orçamento.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "motor-hidraulico-sauer-danfoss": {
    introduction:
      " <p>Se você está procurando por <strong>motor hidráulico sauer danfoss</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico sauer danfoss</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-01.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-02.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-03.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-04.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-05.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-06.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-07.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-08.webp",
      "/src/assets/motor_hidraulico_sauer_danfoss/motor-hidraulico-sauer-danfoss-09.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Existem diversos motores hidráulicos disponíveis no  mercado e, devido a essa grande variedade, pode ser  uma tarefa difícil encontrar qual deles  é o melhor. Uma ótima escolha é o <strong>motor hidráulico sauer danfoss</strong>, por ser um equipamento de qualidade internacionalmente reconhecida. Seguem  algumas informações sobre o funcionamento de um <strong>motor hidráulico sauer danfoss</strong>, além das  qualidades deste produto.</p>",



      "<h2>FUNCIONAMENTO DE UM MOTOR HIDRÁULICO SAUER DANFOSS</h2>",



      "<p>O funcionamento de um <strong>motor hidráulico sauer danfoss</strong> é, teoricamente, simples. Sua função é transformar energia hidráulica em energia mecânica, motivo este pelo qual esse equipamento é chamado de <strong>motor hidráulico sauer danfoss</strong>. Existem duas formas de energia que podem enquadrar um <strong>motor hidráulico sauer danfoss</strong>: motores de gravidade ou nível e motores de pressão. Motores de gravidade, ou nível, convertem em trabalho útil energia de nível H, enquanto os motores de pressão convertem energia cinética V2/2G em trabalho útil.<br /></p>",

      "<p>Existe, também, o <strong>motor hidráulico sauer danfoss</strong> de gravidade, que também é conhecido como roda de alcatruzes. Esse tipo de motor possui a função de  conduzir a água por um canal até a parte de cima da roda, enchendo os alcatruzes que, com o peso da água, produzem movimento. A diferença entre os níveis da água é chamada de altura motriz.<br /></p>",

      "<p>Essa é a forma de funcionamento de alguns diferentes tipos de <strong>motor hidráulico sauer danfoss</strong>. Independentemente do tipo escolhido, certifique-se  de estar contando com um motor de qualidade superior. Para adquirir seu <strong>motor hidráulico sauer danfoss</strong>, conte com a Hicomp Hidráulica.</p>",



      "<h2>HICOMP HIDRÁULICA - A MELHOR EMPRESA DO RAMO HIDRÁULICO</h2>",



      "<p>Se você deseja adquirir um <strong>motor hidráulico sauer danfoss</strong>, conte com a Hicomp Hidráulica, que é uma empresa atuante no segmento de peças hidráulicas para máquinas e equipamentos. Atendendo em todo o território nacional, a Hicomp Hidráulica deseja atender a revendedores, empresas de manutenção e construção civil e indústrias em geral. Os produtos e serviços da Hicomp Hidráulica possuem garantia de 1 ano, e o pagamento pode ser feito por meio de faturamento, para até 60 dias DDL. Com uma equipe técnica com experiência de mais de 15 anos, a Hicomp Hidráulica é uma empresa capacitada para atendê-lo. Entre em contato para solicitar um orçamento.</p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "motor-hidraulico-vickers": {
    introduction:
      " <p>Se você está procurando por <strong>motor hidráulico vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-01.webp",
      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-02.webp",
      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-03.webp",
      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-04.webp",
      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-05.webp",
      "/src/assets/motor-hidraulico-vickers/motor-hidraulico-vickers-06.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>O <strong>motor hidráulico vickers</strong> é uma peça reconhecida por possuir alto desempenho na aplicação de variadas operações da indústria, pois é essencial para garantir o funcionamento de diversas máquinas e equipamentos. <br /></p>",

      "<p>Ele tem como principal função obter energia mecânica através da transformação da energia da água ou também de outros fluídos como o óleo, por exemplo. O <strong>motor hidráulico vickers</strong> é de origem chinesa e pode ser aplicado em sistemas hidráulicos que fazem toda parte de movimentação rotacional em máquinas agrícolas, misturadores hidráulicos, entre outros.</p>",



      "<h2>CARACTERÍSTICAS DO MOTOR HIDRÁULICO VICKERS</h2>",



      "<p>Existem diversos números de modelos de <strong>motor hidráulico vickers</strong>, como o 20V, 25M, 35M, 45M, 50M ou também os Vickers V10 e V20 que  escolhem a bomba da aleta hidráulica para o pedágio da máquina. <br /></p>",

      "<p>A utilização de cada tipo de <strong>motor hidráulico vickers</strong> dependerá da necessidade de aplicação e funcionará de acordo com as características de cada um como deslocamento, pressão máxima medida em Mpa ou em RPM, que poderão variar conforme a aplicação dos líquidos sejam eles óleo, glicol da água ou emulsões de água em óleo.<br /></p>",

      "<p>A bomba hidráulica atua em conjunto com o <strong>motor hidráulico vickers</strong>, pois  recebe os fluídos através de tubos pressurizados por ela. Em seguida o líquido é armazenado em um reservatório e o motor de combustão é acionado, para que assim a bomba da unidade do fluído seja direcionada até o motor hidráulico.<br /></p>",

      "<p>O <strong>motor hidráulico vickers</strong> tem boa qualidade e a marca oferece outros produtos como válvulas direcionais, de pressão, modulares, de fluxo ou de retenção, bombas de pistões ou de palhetas, conjuntos rotativos, e diversas peças que podem ser encontradas de acordo com as necessidades de manutenção.<br /></p>",

      "<p>Devido a essas características específicas do <strong>motor hidráulico vickers</strong> é importante  contratar uma empresa especialista e que disponibilize peças com garantia, tanto para o comércio como conserto e manutenção das peças hidráulicas.<br /></p>",

      "<p>A Hicomp  é indicada para oferecer os melhores serviços, pois possui amplo estoque de peças Vickers, além de outros fabricantes, oferece um ano de garantia e atende em todo o Brasil. ",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "reparo-de-bloco-manifold": {
    introduction:
      " <p>Se você está procurando por <strong>reparo de bloco manifold</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>reparo de bloco manifold</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/reparo-de-bloco-manifold/reparo-bloco-manifold-01.webp",
      "/src/assets/reparo-de-bloco-manifold/reparo-bloco-manifold-02.webp",
      "/src/assets/reparo-de-bloco-manifold/reparo-bloco-manifold-03.webp",
      "/src/assets/reparo-de-bloco-manifold/reparo-bloco-manifold-04.webp",





    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Existem variados tipos de bloco Manifold, o sistema da peça inclusive permite a montagem de diversas válvulas em um único conjunto, dessa forma será possível utilizar o bloco de forma eficiente.<br /></p>",

      "<p>A peça é constituída pela tampa superior, com furacão para manômetro, válvula limitadora de pressão, fatias intermediárias, tirantes de fixação e a base do bloco Manifold. <br /></p>",

      "<p>O bloco Manifold pode ser aplicado em diversas operações e controles em sistema óleo-hidráulicos, ele também possui variadas capacidades de vazão, controle e pressão.</p>",



      "<h2>COMO É FEITO O REPARO DE BLOCO MANIFOLD</h2>",



      "<p>O <strong>reparo de bloco manifold</strong> é iniciado com a remoção do bloco e de todos os seus componentes. O profissional responsável fará a análise das peças e verificará principalmente os anéis ‘O’ e as vedações. Em seguida, o bloco é montado e instalado novamente na máquina.<br /></p>",

      "<p>O <strong>reparo de bloco manifold</strong> deverá ser feito de acordo com as necessidades de cada proprietário. É importante destacar que o reparo ocorrerá por equipes técnicas especializadas para que riscos como o funcionamento incorreto dos equipamentos ou aquecimento da peça sejam evitados.<br /></p>",

      "<p>Ao fazer o <strong>reparo de bloco manifold</strong>, a reposição da peça será imediata e benefícios como facilidade de manuseio, otimização dos espaços, rapidez em eventuais trocas de válvulas serão possíveis.</p>",



      "<h2>ONDE ENCONTRAR</h2>",



      "<p>Existem diversos estabelecimentos que possuem serviços de manutenção e <strong>reparo de bloco manifold</strong>. Mas é importante contratar uma empresa que ofereça trabalhos de qualidade nos reparos das peças. A Hicomp Hidráulica atua há anos no mercado com experiência e reconhecimento em fabricação e reformas de unidades hidráulicas, entre elas o <strong>reparo de bloco manifold</strong>.<br /></p>",

      "<p>A Hicomp Hidráulica atende clientes no Brasil inteiro com uma equipe de engenheiros e técnicos experientes, que atenderão a qualquer necessidade desejada. Para mais informações sobre valores e formas de pagamento do <strong>reparo de bloco manifold</strong> entre em contato com a Hicomp e garanta os melhores serviços.</p>",




      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "reparo-de-cilindros-hidraulicos": {
    introduction:
      " <p>Se você está procurando por <strong>reparo de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>reparo de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-01.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-03.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-04.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-05.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-06.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-07.webp",
      "/src/assets/reparo-de-cilindros-hidraulicos/reparo-cilindros-hidraulicos-08.webp",





    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>O cilindro hidráulico é um tipo de atuador mecânico, que tem a função de atuar pelo mecanismo de pressão, utilizando a energia de fluidos nesse processo, geralmente óleo, em movimento linear. Esse equipamento é composto por um cilindro, um pistão e outros componentes de vedação, que podem apresentar desgaste pelo uso ou contato com poeira, sendo necessário realizar o <strong>reparo de cilindros hidráulicos</strong>.<br /></p>",

      "<p>De modo a evitar <strong>reparo de cilindros hidráulicos</strong> com frequência, é possível contar com a manutenção preventiva das peças e do sistema de vedação, atentando-se a alguns cuidados que contribuem para uma maior vida útil da peça. </p>",



      "<h2>CUIDADOS A SEREM TOMADOS NO REPARO DE CILINDROS HIDRÁULICOS</h2>",



      "<p>Ao realizar a manutenção em cilindros hidráulicos, é necessário seguir algumas medidas, para que o equipamento funcione com eficiência. O principal fator de importância para realizar <strong>reparo de cilindros hidráulicos</strong> é procurar por uma oficina própria, que possua as ferramentas adequadas para a manutenção, painel de testes e técnicos qualificados. Alguns outros fatores relevantes são:<br /></p>",

      "<ul class=\"list\">",

      "<li> realizar a substituição das peças de vedação, que deverá ser feita em todo o cilindro;<br /></li>",



      "<li> proteger as peças com roscas e superfícies com alto grau de acabamento;<br /></li>",



      "<li> evitar danos em peças de borracha, de modo a conter os vazamentos;<br /></li>",



      "<li> realizar a devida limpeza e lubrificação das peças antes da montagem do cilindro;<br /></li>",



      "<li> montar adequadamente o sistema de amortecimento; entre outras medidas. </li>",

      "</ul>",



      "<h2>MANUTENÇÃO PREVENTIVA PARA MAIOR ESPAÇAMENTO DE REPARO DE CILINDROS HIDRÁULICOS</h2>",



      "<p>Ao realizar inspeções constantes nos cilindros hidráulicos, é possível espaçar os intervalos de <strong>reparo de cilindros hidráulicos</strong>.<br /></p>",

      "<p>Fatores como a exposição à poeira, agentes corrosivos e tempo de trabalhos do equipamento são decisivos para a determinação de quando realizar as manutenções preventivas ou o <strong>reparo de cilindros hidráulicos</strong>, conforme o desgaste das peças, mau funcionamento ou vazamentos aparentes. <br /></p>",

      "<p>Muitas vezes, o mau funcionamento ou diminuição da eficiência de trabalho do cilindro hidráulico pode ser solucionado apenas com a limpeza das peças e não requer necessidade de desmontagem.<br /></p>",

      "<p>A Hicomp Hidráulica oferece excelência no comércio e manutenção de peças hidráulicas para equipamentos em todo o País, conforme as necessidades do cliente e oferece 1 ano de garantia, com facilidades de pagamento.<br /></p>",

      "<p>Para conhecer as formas de pagamento, entre em contato com a Hicomp Hidráulica.</p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "reparo-de-unidades-hidraulicas": {
    introduction:
      "<p>Se você está procurando por <strong>reparo de unidades hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>reparo de unidades hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/reparo-de-unidades-hidraulicas/reparo-unidades-hidraulicas-01.webp",
      "/src/assets/reparo-de-unidades-hidraulicas/reparo-unidades-hidraulicas-02.webp",
      "/src/assets/reparo-de-unidades-hidraulicas/reparo-unidades-hidraulicas-03.webp",
      "/src/assets/reparo-de-unidades-hidraulicas/reparo-unidades-hidraulicas-04.webp",




    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Em uma atividade industrial , toda  peça  deve ser usada de maneira precisa. Um funcionamento comprometido  ou uma peça quebrada pode colocar em risco todo o processo de execução de uma atividade. Nas unidades hidráulicas isso é algo muito real, pois cada componente realiza um papal minucioso e de destaque. Diante disso, o <strong>reparo de unidades hidráulicas</strong> torna-se  algo indispensável e de extrema importância. <br /></p>",

      "<p>É de responsabilidade  das unidades hidráulicas o controle dos movimentos de direções, forças e o controle de passagens e fluídos. Assim, para que essas atividades continuem a ser realizadas de forma eficiente, é necessário fazer, periodicamente, seja para aumentar seu  tempo de uso ou só  por precaução, o <strong>reparo de unidades hidráulicas</strong>. <br /></p>",

      "<p>Além de gerar maior eficiência, o <strong>reparo de unidades hidráulicas</strong> acaba  tornando-se um meio que oferece economia financeira ao cliente. No reparo, há um controle rigoroso das peças.  Assim, caso alguma peça não esteja funcionando de forma exata, pode ser realizado o conserto, não sendo necessária  a compra de um novo componente. </p>",



      "<h2>COMO FUNCIONA O REPARO DE UNIDADES HIDRÁULICAS?</h2>",



      "<p>Técnicos com vasta experiências irão analisar minuciosamente  as unidades hidráulicas em busca de falhas nos componentes. Caso seja identificada  alguma situação que coloque em risco o funcionamento perfeito das atividades, é realizado o <strong>reparo de unidades hidráulicas</strong>. <br /></p>",

      "<p>O trabalho conta com trocas de componentes, verificação de peças soltas e limpeza quando há fluidos acumulados. A eficácia do <strong>reparo de unidades hidráulicas</strong> depende, além de profissionais capacitados, da situação que se encontra a unidade. Por isso, a manutenção preventiva também é um fator de grande importância. </p>",



      "<h2>QUAL EMPRESA É QUALIFICADA PARA FAZER REPARO?</h2>",



      "<p>A HiComp possui todas as exigências necessárias para realizar com excelência o <strong>reparo de unidades hidráulicas</strong>. A empresa conta com engenheiros e técnicos com mais de 15 anos de experiências. A HiComp também comercializa produtos hidráulicos de excelentes fornecedores. Isso facilita caso o cliente tenha que trocar alguma peça no processo de reparo. Outra vantagem da empresa é que, ciente da qualidade dos seus produtos e serviços, há o fornecimento de um ano de garantia ao cliente. Além disso, há a opção de pagamento faturado em até 60DDL. Para solicitar um orçamento,  entre em contato!</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-bosch-rexroth": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional bosch rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional bosch rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-01.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-02.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-03.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-04.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-05.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-06.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-08.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-09.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-10.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-11.webp",
      "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-12.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Um componente fundamental na montagem de circuitos hidráulicos, a <strong>válvula direcional bosch rexroth</strong> é  especificamente produzida com a finalidade de estabelecer o controle de sistemas hidráulicos, reduzindo, tornando constante, aumentando ou limitando a pressão em alguns pontos do equipamento. <br /></p>",

      "<p>A <strong>válvula direcional bosch rexroth</strong> opera com uma pressão determinada para cada aplicação e, no ato da instalação, deve ser considerada para estabelecer o limite máximo de pressão com o qual a válvula vai operar e controlar o circuito hidráulico.</p>",

      "<h2>CARACTERÍSTICAS DA VÁLVULA DIRECIONAL BOSCH REXROTH</h2>",

      "<p>A <strong>válvula direcional bosch rexroth</strong> é, basicamente, um mecanismo controlador de pressão do sistema hidráulico, que se apresenta como uma solução muito versátil e serve a diversas aplicações. Conforme a sua finalidade, Serpa sua classificação . Dessa forma, a <strong>válvula direcional bosch rexroth</strong> pode ser de segurança, de frenagem, redutora do fluxo de pressão, de sequência, descarga, entre outras aplicações. </p>",



      "<h2>VANTAGENS DA VÁLVULA DIRECIONAL BOSCH REXROTH</h2>",



      "<p>A partir do limite de pressão estabelecido para que o equipamento  comporte a válvula e opere com eficiência em cada aplicação, é possível determinar qual será o nível máximo de pressão que a válvula funcionará, assim como o índice de pressão que será mantido durante todo o funcionamento do sistema hidráulico. <br /></p>",

      "<p>A <strong>válvula direcional bosch rexroth</strong> pode compor blocos de Manifold, em formas maiores, a depender do equipamento, ou em formas maiores, que contribui diretamente para a redução da necessidade de manutenção.<br /></p>",

      "<p>Como um componente versátil, a <strong>válvula direcional bosch rexroth</strong> pode ser adaptada para cada tipo de aplicação, atrelada a outros componentes e com garantia de originalidade, segurança e conforme a NR-12 – norma que rege a instalação e adaptação de peças hidráulicas para uso em equipamentos industriais. <br /></p>",

      "<p>A <strong>válvula direcional bosch rexroth</strong> (válvulas direcionais) são largamente utilizadas em diversos sistemas hidráulicos, como máquinas injetoras e equipamentos agrícolas. Com ela, é possível que o circuito todo opere com eficiência e precisão, além do direcionamento dos avanços e retornos dos cilindros, conjuntamente com a performance rotativa do motor.<br /></p>",

      "<p>A Hicomp Hidráulica possui excelência em venda e manutenção de peças hidráulicas e, atendendo em todo o País, oferece além de serviços de qualidade, atendimento personalizado, garantia de 1 ano, preços especiais e dispõe de produtos para pronta entrega. <br /></p>",

      "<p>Para conhecer as formas de pagamento, consulte o atendimento da Empresa.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-parker": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional parker</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional parker</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-direcional-parker/valvula-direcional-parker-01.webp",
      "/src/assets/valvula-direcional-parker/valvula-direcional-parker-02.webp",
      "/src/assets/valvula-direcional-parker/valvula-direcional-parker-03.webp",
      "/src/assets/valvula-direcional-parker/valvula-direcional-parker-04.webp",
      "/src/assets/valvula-direcional-parker/valvula-direcional-parker-05.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>A função da <strong>válvula direcional parker</strong> é direcionar o sentido do fluxo do ar de um circuito de acordo com a demanda do mesmo. Além disso, as válvulas direcionais também são responsáveis por controlar a pressão e a vazão do circuito.<br /></p>",

      "<p>As válvulas podem variar de acordo com a quantidade de posições, suas junções e posição de repouso.<br /></p>",

      "<p>A <strong>válvula direcional parker</strong> pode possuir uma ou duas posições e seu acionamento costuma ser manual ou elétrico.<br /></p>",

      "<p>As válvulas direcionais também são as responsáveis pelo estabelecimento de bloqueios no circuito hidráulico.</p>",


      "<h2>VANTAGENS DA VÁLVULA DIRECIONAL PARKER</h2>",



      "<p>Dentre as vantagens da <strong>válvula direcional parker</strong> estão a ausência de travamentos durante os circuitos e sua alta durabilidade e resistência à corrosão.<br /></p>",

      " <p> Além disso, a vida útil do equipamento dispensa a necessidade de lubrificação e as peças são facilmente instaladas.<br/> </p>",

      " <p> A <strong> válvula direcional parker</strong> é um componente hidráulico de alto desempenho, o que a torna ideal para indústrias de diversos segmentos.Sua alta qualidade e durabilidade fazem da válvula direcional uma peça econômica, versátil e prática; capaz de otimizar a produção e trazer mais segurança às empresas.</p>",



      "<h2>ENCONTRE VÁLVULA DIRECIONAL PARKER E DEMAIS PRODUTOS HIDRÁULICOS NA HICOMP</h2>",



      "  <p>A maior variedade e qualidade em válvulas direcionais está na Hicomp Hidráulica, atuante honoris causa da distribuição e manutenção de peças hidráulicas.<br/></p >",

      "<p>Dentre o amplo portfólio da Hicomp Hidráulica está a <strong> válvula direcional parker </strong> e mais uma extensa gama de produtos e serviços de manutenção que podem ser efetuados na própria empresa ou em campo -- tudo de acordo com a demanda do cliente.<br/> </p>",

      "<p> Todos os produtos e serviços oferecidos pela Hicomp contam com um ano de garantia e as formas de pagamento são facilitadas para que se adequem sempre à situação de seus clientes, podendo existir faturamento para até 60 DDL.<br/> </p>",

      " <p> Além da <strong> válvula direcional parker </strong>¸ a Hicomp atua com produtos à pronta-entrega.<br/> </p>",

      " <p> Ao comprar ou consertar produtos hidráulicos, não deixe de consultar as condições e os preços especiais da Hicomp Hidráulica.A empresa atua em todo o território nacional e conta com uma equipe de técnicos e engenheiros com mais de quinze anos de experiência de mercado, todos prontos para oferecer soluções personalizadas para o seu negócio.Peça já a sua cotação! </p>",




      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "valvula-direcional-vickers": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-01.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-02.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-03.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-04.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-05.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-06.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-07.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-08.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-09.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-10.webp",
      "/src/assets/valvula-direcional-vickers/valvula-direcional-vickers-11.webp",




    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Assim como todos os outros modelos, a <strong>válvula direcional vickers</strong> oferece a opção de montagem em linhas ou blocos. Essa  opção é uma vantagem afrente das outras, visto que  garante uma execução  segura em todas as aplicações do produto, mesmo aquelas com as mais difíceis condições de uso . <br /></p>",

      "<p>A utilidade primordial da <strong>válvula direcional vickers</strong> é direcionar um determinado fluxo no sistema hidráulico. E isso ocorre porque  a válvula é montada em uma placa base  e, com isso, realiza uma  conexão com as portas da montagem. O componente realiza funções precisas ao direcionar os avanços e retornos de cilindros e, também, a  rotação dos motores. Sua aplicação pode ocorrer em áreas como alta geração de energia, moldagem, mineração, indústria de transformação, automotivo e máquinas.  </p>",



      "<h2>CARACTERÍSTICAS DA VÁLVULA DIRECIONAL VICKERS</h2>",



      "<p>A <strong>válvula direcional vickers</strong> é composta por uma linha completa pensada e produzida em diferentes características que atendam a  diversas aplicações diferentes. As principais características da <strong>válvula direcional vickers</strong> são: sua máxima pressão é de até 250 bar, dependendo do fluído, e máxima vazão é de até 95 l/min, dependendo do carretel. A válvula é operadora por duas ou quatro vias de controle de direção e possui 60 designs diferentes. <br /></p>",

      "<p>A maior  vantagem em  adquirir <strong>válvula direcional vickers</strong> é a certeza de estar fazendo negócio com um fornecedor de qualidade, que tem compromisso em produzir componentes seguros. A Vickers é uma marca da Eaton, que é uma empresa líder global no mercado de gerenciamento de energia. A Vickers produz componentes para o controle energético, como válvulas, produtos eletro-hidráulicos, cilindros. <br /></p>",

      "<p>A melhor opção para adquirir <strong>válvula direcional vickers</strong> no mercado brasileiro é através da HiComp. A empresa atua há muitos anos no mercado com comercialização e manutenção de componentes de óleo-hidráulico e fornece <strong>válvula direcional vickers</strong> por meio de atendimento personalizado com preços especiais e produtos a pronta entrega. <br /></p>",

      "<p>A HiComp conta com fornecedores de ponta e profissionais como engenheiros e técnicos com mais de 10  anos de experiência. Com a confiança de sua excelência, a empresa oferece ao cliente um ano de garantia em todos os produtos e serviços. Há, também, facilidades na forma de pagamento, que pode ser feito faturado em até 60DDL. Entre em contato com a empresa para solicitar um orçamento. </p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-hidraulica-parker": {
    introduction:
      "<p>Se você está procurando por <strong>válvula hidráulica parker</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula hidráulica parker</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-01.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-02.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-03.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-04.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-05.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-06.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-07.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-08.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-09.webp",
      "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-10.webp",





    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>A válvula hidráulica parker é um importante componente utilizado em máquinas móveis ou industriais, que tem como objetivo melhorar o desempenho desses equipamentos. a parker é uma marca que possui ampla linha de sistemas hidráulicos, além de oferecer variados componentes em sua linha de produtos.</p>",

      "<p>Pode ser aplicada para melhorar a tecnologia em energia fluída dos equipamentos, desde funções de controle simples até as mais complexas operações em ambientes de automação.</p>",



      "<h2>TIPOS DE VÁLVULA HIDRÁULICA PARKER</h2>",



      "<p>Existem variados tipos de <strong>válvula hidráulica parker</strong>, como, por exemplo, as válvulas de instrumentação, refrigeração, pneumática ou aeroespacial. Elas podem ser aplicadas em diversos ramos da indústria sejam eles dos setores de mineração, agrícola, transporte, energia, siderúrgica, papel e celulose, construção civil, entre outros. <br /></p>",

      "<p>A linha de <strong>válvula hidráulica parker</strong> inclui válvulas de esfera, de controles direcionais, de retenção, de cartucho, de agulha, servoválvulas, de controle de fluxo ou de pressão, válvulas móveis, proporcionais, tipo carretel, de sequência ou lançadeiras.<br /></p>",

      "<p>Todas essas válvulas possuem sistema hidráulico e podem ser aplicadas em semicondutores, para instrumentação, equipamentos de empresas de alimentos e bebidas, refrigeração, ou também em serviços marítimos. <br/></p>",

      "<p>Durante o seu funcionamento, a <strong>válvula hidráulica parker</strong> pode ser manual. Ela é operada por solenoide ou acionada pelo motor, nessa válvula as configurações de montagem podem ser tanto de sub-base como manifold ou em linha. <br /></p>",

      "<p>A <strong>válvula hidráulica parker</strong> dos tipos de controle direcional, pressão e de fluído são usadas em aplicações com a medida dos tamanhos feitas em polegadas e métricos. A utilização varia de acordo com o tipo de aplicação, equipamentos e materiais que podem ser de aço inoxidável, latão, aço, plástico ou também em materiais personalizados como o PTFE, por exemplo.</p>",

      "<h2>ONDE ENCONTRAR</h2>",

      "<p>Para que bons resultados nas operações sejam garantidos, é importante encontrar uma empresa que ofereça a <strong>válvula hidráulica parker</strong> e que possua uma equipe altamente qualificada e capacitada.<br /></p>",

      "<p>A Hicomp é uma empresa que possui ampla experiência no mercado de comércio e manutenção de peças e garante os melhores serviços, oferece um ano de garantia e atende todo o Brasil.Sobre valores e formas de pagamento da <strong>válvula hidráulica parker</strong> entre em contato e solicite um orçamento.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "valvula-hidraulica-rexroth": {
    introduction:
      "<p>Se você está procurando por <strong>válvula hidráulica rexroth</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula hidráulica rexroth</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-01.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-02.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-03.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-04.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-05.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-06.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-07.webp",
      "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-08.webp",




    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>A <strong>válvula hidráulica rexroth</strong> é um componente que determina e controla o fluxo e a pressão hidráulica a serem exercidos dentro de um circuito. Ela funciona por meio de dois mecanismos: o de abertura, que permite a passagem de ar, e o de fechamento, que bloqueia qualquer passagem em seu interior.<br /></p>",

      "<p>Muito utilizada na indústria, a <strong>válvula hidráulica rexroth</strong> costuma ser aplicada em maquinários de indústrias que vão desde a têxtil e a alimentícia até às indústrias automobilística e naval.</p>",



      "<h2>VÁLVULA HIDRÁULICA REXROTH - APLICAÇÃO</h2>",



      "<p>A função da <strong>válvula hidráulica rexroth</strong> é proteger o sistema hidráulico da exposição a altas pressões, evitando que estas ultrapassem o limite de pressão especificado, podendo assim danificar os equipamentos.<br /></p>",

      "<p>As válvulas hidráulicas podem ser direcionais, de pressão, de bloqueio, de fluxo ou auxiliares.<br /></p>",

      "<p>A <strong>válvula hidráulica rexroth</strong> é de alta qualidade e possui excelente durabilidade. Não exige constante manutenção e sua instalação é feita de forma rápida e prática.<br /></p>",

      "<p>Sua alta variedade de modelos faz com que atendam diferentes demandas industriais, variando de acordo com a pressão a ser exercida, o equipamento onde será utilizada, a sua vazão e o movimento de retorno.<br /></p>",

      "<p>A Rexroth pertence ao grupo Bosch e está dentre as melhores fabricantes de peças hidráulicas do mundo.</p>",



      "<h2>HICOMP HIDRÁULICA – VÁLVULA HIDRÁULICA REXROTH</h2>",



      "<p>Com uma gama completa de produtos e serviços ofertados e uma equipe altamente qualificada e que conta com mais de uma década de experiência de mercado -- dentre os quais estão engenheiros e técnicos -- a Hicomp Hidráulica oferece soluções customizadas a seus clientes visando suas demandas, necessidades e adequações.<br /></p>",

      "<p>A empresa oferece formas de pagamento facilitadas, permitindo que o valor seja faturado para até 60 DDL. A Hicomp oferece ainda garantia de um ano em todos os seus produtos e serviços, assegurando confiança e tranquilidade aos seus clientes.<br /></p>",

      "<p>O portfólio da Hicomp Hidráulica possui uma grande variedade de produtos que vão desde bombas até cilindros e <strong>válvula hidráulica rexroth</strong>. <br /></p>",

      "<p>Atendendo em todo o território nacional, a Hicomp atua sob o princípio do atendimento customizado, visando atender às necessidades de cada cliente de forma ética e eficaz. <br /></p>",

      "<p>Solicite já seu orçamento e assegure a compra e manutenção de <strong>válvula hidráulica rexroth</strong> com o melhor custo-benefício do país.</p>",
      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-hidraulica-vickers": {
    introduction:
      "<p>Se você está procurando por <strong>válvula hidráulica vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula hidráulica vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-01.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-02.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-03.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-04.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-05.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-06.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-07.webp",
      "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Para estabelecer o controle da pressão de fluido dos equipamentos, a válvula é um importante componente que atua reduzindo, aumentando, estabilizando ou restringindo o fluxo de pressão. Assim, a <strong>válvula hidráulica vickers</strong> é responsável pelo equilíbrio e perfeito funcionamento do sistema hidráulico industrial, evitando discrepâncias em todo o mecanismo.<br /></p>",

      "<p>A <strong>válvula hidráulica vickers</strong> possui diversos modelos, que são correspondentes às funções do equipamento nas aplicações.</p>",



      "<h2>CLASSIFICAÇÃO DA VÁLVULA HIDRÁULICA VICKERS</h2>",



      "<p>A <strong>válvula hidráulica vickers</strong> conta com várias funções, e assim tem sua nomenclatura determinada. São elas: de descarga, segurança, redução de pressão, frenagem entre outras para cada aplicação específica. <br /></p>",

      "<p>Para cada uso, a <strong>válvula hidráulica vickers</strong> deverá precisar um nível de pressão para a instalação e, a partir desse coeficiente de pressão definido é possível conhecer o limite máximo de operação do equipamento para trabalho.<br /></p>",

      "<p>Podendo ser ajustada de diversas formas, a válvula pode ser instalada completamente aberta, completamente fechada ou com tolerâncias intermediárias, de modo a suportar a pressão do ponto de instalação. </p>",



      "<h2>VANTAGENS DE OPTAR POR UMA VÁLVULA HIDRÁULICA VICKERS</h2>",



      "<p>A <strong>válvula hidráulica vickers</strong> é um produto fabricado com rigorosos testes de qualidade e apresenta-se como uma solução que atende a muitas aplicações. Além disso, desenvolvida com tecnologia e expertise em engenharia, apresenta-se como ótimo custo benefício, pois reduz vazamentos recorrentes e previnem possíveis rupturas no sistema hidráulico, evitando reparos e manutenções frequentes. <br /></p>",

      "<p>Com a <strong>válvula hidráulica vickers</strong> controla-se com máxima segurança toda a força de operação de circuitos hidráulicos, além de garantir que o equipamento atuará com força máxima, eficiência e precisão em cada aplicação.<br /></p>",

      "<p>É possível adquirir <strong>válvula hidráulica vickers</strong> a preço acessível, com características que melhor atendam às necessidades do cliente e que podem contar com peças originais em estoque quando precisarem passar por manutenção preventiva ou corretiva.<br /></p>",

      "<p>A Hicomp Hidráulica oferece o que há de melhor no mercado quando se trata de comércio e manutenção de peças hidráulicas para equipamentos em todo o Brasil, com atendimento personalizado. Oferece uma linha completa de válvulas direcionais, para as mais diversas aplicações, com disponibilidade de pronta entrega, 1 ano de garantia, facilidade de pagamento e faturamento em até 60DDL.<br /></p>",

      "<p>Para conhecer a linha de válvulas hidráulicas líder no mercado e valores, consulte o atendimento.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-reguladora-de-pressao-vickers": {
    introduction:
      " <p>Se você está procurando por <strong>válvula reguladora de pressão vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula reguladora de pressão vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-01.webp",
      "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-02.webp",
      "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-03.webp",
      "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-04.webp",
      "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-05.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Muitas válvulas reguladoras estão disponíveis no mercado atualmente, contudo a <strong>válvula reguladora de pressão vickers</strong>  destaca-se entre as outras por conta de seu excelente desempenho e de sua alta durabilidade, ganhando, assim, mais espaço no mercado.<br /></p>",

      "<p>A marca Vickers conquistou a credibilidade dos clientes justamente por desenvolver componentes de real qualidade. Além disso, não é apenas a <strong>válvula reguladora de pressão vickers</strong> que recebeu essa conquista, sendo que a empresa também é responsável pela fabricação de:<br /></p>",

      "<ul class=\"list\">",

      "<li> controle energético;<br /></li>",



      "<li> cilindros; <br /></li>",



      "<li> produtos eletro-hidráulicos para uso em aplicações industriais;<br /></li>",



      "<li> outras válvulas.<br /></li>",

      "</ul>",
      "<p>Com esse extenso portfólio, a Vickers cativou diversos clientes e revendedoras que buscam por variedade e componentes com alto potencial e qualidade.</p>",



      "<h2>VÁLVULA REGULADORA DE PRESSÃO VICKERS: DESENVOLTURA E QUALIDADE</h2>",



      "<p>A <strong>válvula reguladora de pressão vickers</strong> executa o papel de segurança na máquina, na qual a força pode ser determinada no equipamento.  Em outras palavras, com essa válvula, é possível controlar a pressão no sistema hidráulico, pré-definindo essa pressão de acordo com a necessidade do momento.<br /></p>",

      "<p>Esse controle é extensamente utilizado em sistemas hidráulicos, pois é necessário obter máxima precisão da força que será empregada no maquinário. Com isso, a desenvoltura da máquina por meio da <strong>válvula reguladora de pressão vickers</strong> ganha alta qualidade e acionamento de resposta com extrema rapidez.<br /></p>",

      "<p>Contudo, é essencial enfatizar que esse excelente desempenho só é conquistado por conta da qualidade da <strong>válvula reguladora de pressão vickers</strong>. Sua fabricação é totalmente focada na qualidade e na excelência do produto final, o que garante peças de alto padrão e qualificadas para desempenhar seu papel.</p>",



      "<h2>VÁLVULA REGULADORA DE PRESSÃO VICKERS ESTÁ NA HICOMP</h2>",



      "<p>A Hicomp conta com peças de qualidade alto padrão. Uma prova disso é a oferta de <strong>válvula reguladora de pressão vickers</strong>. Entretanto, é importante aliar a qualidade da peça ao conhecimento técnico para obter máxima vantagem no desempenho.<br /></p>",

      "<p>A equipe da Hicomp é formada por engenheiros e técnicos com mais de 15 anos de experiência, e estão sempre à disposição dos seus clientes para ajudá-los e aconselhá-los, ainda, oferece um ano de garantia e atende todo o Brasil. Entre em contato com a equipe, solicite um orçamento da <strong>válvula reguladora de pressão vickers</strong> e garanta um negócio próspero.</p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvulas-proporcionais-hidraulicas": {
    introduction:
      " <p>Se você está procurando por <strong>válvulas proporcionais hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvulas proporcionais hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-01.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-02.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-03.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-04.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-05.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-06.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-07.webp",
      "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Para controlar o fluxo de fluído e, também, a pressão num sistema hidráulico, são usadas as chamadas <strong>válvulas proporcionais hidráulicas</strong>. Elas são capazes de proporcionar controle preciso dos atuadores, o que garante melhor execução da máquina e, claro, uma perfeita precisão.<br /></p>",

      "<p>Esse controle preciso das <strong>válvulas proporcionais hidráulicas</strong> garante que o fluxo de saída e de entrada aconteça de maneira proporcional. Sendo assim, a entrada e a saída de fluídos não serão os mesmos, já que ocorrerá o equilíbrio ideal – proporcional – entre as forças exercidas conforme a necessidade do sistema hidráulico.<br /></p>",

      "<p>As <strong>válvulas proporcionais hidráulicas</strong>  destacam-se – quando comparadas a outros modelos – pela possibilidade de controlar proporcionalmente a pressão num sistema hidráulico por meio eletrônico, usando a tecnologia a seu favor. <br /></p>",

      "<p>Graças à tecnologia envolvida, os níveis de segurança e os de desempenho aumentam e assegura o excelente funcionamento das peças no equipamento em questão. </p>",



      "<h2>VÁLVULAS PROPORCIONAIS HIDRÁULICAS: UTILIZAÇÃO E QUALIDADE</h2>",



      "<p>As <strong>válvulas proporcionais hidráulicas</strong> são comumente utilizadas no controle de fluídos em veículos, na indústria aeroespacial, nas indústrias transformadoras e na construção civil, sendo uma peça versátil e vastamente usada em meios industriais como um todo. Elas são, também, eficientes nos comandos mais abstrusos.<br /></p>",

      "<p>Para que a desenvoltura das <strong>válvulas proporcionais hidráulicas</strong> satisfaça o cliente e tenha desempenho de alto padrão, é fundamental que a escolha da empresa seja levada em consideração. Além disso, a inserção da peça no equipamento deve ser executada por uma equipe qualificada que realmente entenda do processo como um todo.<br /></p>",

      "<p>Com esses pequenos cuidados, as <strong>válvulas proporcionais hidráulicas</strong> terão maior durabilidade e o processo será mais facilmente executado. Assim, com esses benefícios, a satisfação será plena e garantida.</p>",



      "<h2>HICOMP: EQUIPE ESPECIALIZADA, EXPERIENTE E FOCADA</h2>",



      "<p>Focada num produto final de alto padrão, com excelente qualidade e na segurança, a Hicomp tem notoriedade nesse segmento, e não é para menos: a equipe é formada por engenheiros e técnicos com mais de 15 anos de experiência; oferecem um ano de garantia em todos os produtos e serviços fornecidos e ainda propiciam atendimento personalizado com preços especiais.<br /></p>",

      "<p>Contate a Hicomp e solicite um orçamento detalhado e gratuito das <strong>válvulas proporcionais hidráulicas</strong>. Garanta excelência em atendimento e ótima qualidade nos serviços oferecidos.</p>",





      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "venda-de-bombas-hidraulicas": {
    introduction:
      " <p>Se você está procurando por <strong>venda de bombas hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>venda de bombas hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-01.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-02.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-03.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-04.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-05.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-06.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-07.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-08.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-09.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-10.webp",
      "/src/assets/venda-de-bombas-hidraulicas/venda-bombas-hidraulicas-11.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>As bombas hidráulicas são peças importantes que contribuem de forma significativa para o funcionamento de máquinas e equipamentos em comércios e indústrias em geral. A <strong>venda de bombas hidráulicas</strong> é bastante comum em diversas empresas especializadas que oferecem peças e conserto desses dispositivos.<br /></p>",

      "<p>Encontrar uma empresa que trabalhe com <strong>venda de bombas hidráulicas</strong> é simples, mas é importante que se obtenha essa peça em lugares que garantam qualidade. Dessa forma não ocorrerão prejuízos ou riscos de peças inferiores serem utilizadas nos equipamentos.<br /></p>",

      "<p>As bombas hidráulicas são compostas por ferro fundido e possuem alta resistência com mancais de rolamento, além de obterem capacidade elevada de carga dinâmica. Na <strong>venda de bombas hidráulicas</strong> elas podem ser disponibilizadas como unidades simples ou múltiplas.<br /></p>",

      "<p>Essas unidades são definidas através de requisitos de consumo de potência e de torque dos eixos de acionamentos. O eixo motriz é o responsável por alimentar toda potência consumida, por isso ela é limitada no eixo de entrada pela resistência mecânica. <br /></p>",

      "<p>Essa limitação de potência é definida através de uma tabela que contém o código, descrição e torque permissível de cada sessão de unidade.  <br /></p>",

      "<p>A utilização de bombas hidráulicas de unidade múltipla é mais indicada, pois requer menos espaço, possibilita uma montagem de duas ou mais bombas em um único eixo motriz, além de reduzir o custo de instalação oferecido pelas empresas com <strong>venda de bombas hidráulicas</strong>.<br /></p>",

      "<p>Ainda, é importante destacar que cada especificidade de marcas e funções das peças deverá ser esclarecida pela empresa especializada em <strong>venda de bombas hidráulicas</strong>.</p>",



      "<h2>HICOMP HIDRÁULICA – SOLUÇÕES EM VENDA DE BOMBAS HIDRÁULICAS</h2>",



      "<p>A Hicomp Hidráulica é uma empresa com anos de experiência no mercado de comércio e manutenção de produtos óleo hidráulicos e trabalha com <strong>venda de bombas hidráulicas</strong> possuindo amplo estoque de peças de variados fabricantes. Com engenheiros e técnicos qualificados, a Hicomp oferece um ano de garantia em todos os produtos e serviços fornecidos com alta qualidade e eficiência nos resultados.<br /></p>",

      "<p>Procurando por uma empresa que trabalhe com a <strong>venda de bombas hidráulicas</strong> a Hicomp é a empresa ideal. Para mais informações sobre os valores e os serviços oferecidos entre em contato com a Hicomp e solicite um orçamento.</p>",






      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvulas-direcionais": {
    introduction:
      "  <p>Se você está procurando por <strong>válvulas direcionais</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvulas direcionais</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvulas-direcionais/valvulas-direcionais-01.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-02.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-03.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-04.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-05.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-06.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-07.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-08.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-09.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-10.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-11.webp",
      "/src/assets/valvulas-direcionais/valvulas-direcionais-12.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>As <strong>válvulas direcionais</strong> hidráulicas atuam no direcionamento do fluxo de ar que o equipamento em que se anexam deve seguir -- além de regularem a pressão que será exercida no circuito e sua vazão. Os bloqueios do circuito também são definidos por meio das <strong>válvulas direcionais</strong>.<br /></p>",

      "<p> Essas válvulas são aplicadas em indústrias de diversos segmentos que vão da alimentícia à naval e podem variar em fatores como a quantidade de conexões que podem estabelecer, quantidade de movimentos, posição de repouso, forma de acionamento e pressão exercida.</p>",



      "<h2>VÁLVULAS DIRECIONAIS – APLICAÇÃO</h2>",



      "<p>As <strong>válvulas direcionais</strong> mais comuns são acionadas eletricamente por meio de comandos digitais ou manualmente por meio de alavancas, pedais e botões.<br /></p>",

      "<p>As válvulas costumam exercer um excelente desempenho na indústria. São equipamentos de alta durabilidade que não exigem constante manutenção, o que faz delas peças econômicas e eficientes. <br /></p>",

      "<p>Por serem altamente eficazes durante seu desempenho, as <strong>válvulas direcionais</strong> são praticamente livres de travamentos e dispensam lubrificação.<br /></p>",

      "<p>As <strong>válvulas direcionais</strong> são facilmente instaladas e sua vida útil é extremamente longa, o que traz às empresas um ótimo custo-benefício.</p>",



      "<h2>HICOMP HIDRÁULICA – A MELHOR OPÇÃO EM VÁLVULAS DIRECIONAIS</h2>",



      "<p>Referência no mercado de distribuição e manutenção de peças óleo-hidráulicas, a Hicomp Hidráulica oferece aos seus clientes uma gama completa de produtos e serviços hidráulicos voltados para a indústria.<br /></p>",

      "<p>Sua equipe é altamente qualificada e conta com engenheiros e técnicos com mais de quinze anos de atuação; todos prontos para atender a sua empresa com técnica, confiança, ética e qualidade.<br /></p>",

      "<p>A Hicomp atende seus clientes sob o princípio do atendimento individualizado e personalizado, visando suprir as necessidades de cada um deles e adaptando seus serviços de acordo com a demanda. O pagamento pode ser faturado para até 60 DDL e todos os produtos e serviços acompanham um ano de garantia.<br /></p>",

      "<p>Além de <strong>válvulas direcionais</strong>, a Hicomp oferece cilindros, bombas e atuadores hidráulicos, estando apta a oferecer para cada cliente soluções industriais customizadas.<br /></p>",

      "<p>Consulte a Hicomp Hidráulica, solicite já a sua cotação e assegure à sua empresa o que há de mais inovador e tecnológico em <strong>válvulas direcionais</strong>, produtos hidráulicos e manutenção de peças óleo-hidráulicas do Brasil.</p>",





      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "cilindro-hidraulico-preco": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/cilindro-hidraulico-preco/cilindro-hidraulico-preco-01.webp",
      "/src/assets/cilindro-hidraulico-preco/cilindro-hidraulico-preco-02.webp",
      "/src/assets/cilindro-hidraulico-preco/cilindro-hidraulico-preco-03.webp",
      "/src/assets/cilindro-hidraulico-preco/cilindro-hidraulico-preco-04.webp",
      "/src/assets/cilindro-hidraulico-preco/cilindro-hidraulico-preco-05.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>O <strong>cilindro hidráulico preço</strong> acessível é um equipamento muito versátil e econômico, o que o torna um investimento vantajoso e favorável.  Esse cilindro hidráulico apresenta flexibilidade em sua montagem e tamanho e por conta disso pode ser aplicado em diversos segmentos. <br /></p>",

      "<p>O <strong>cilindro hidráulico preço</strong> acessível pode ser aplicado em máquinas diversas, por conta da sua excelente força e velocidade. </p>",
      "<h2>QUALIDADE DE UM CILINDRO HIDRÁULICO PREÇO ACESSÍVEL</h2>",
      "<p>A qualidade de um <strong>cilindro hidráulico preço</strong> acessível vem de sua forma de fabricação através da utilização de excelentes matérias-primas, garantindo maior resistência. Maquinários de última geração garantem a durabilidade e a inovação da mercadoria e uma mão-de-obra altamente especializada garante qualidade durante todo o processo. <br /></p>",
      "<p>O <strong>cilindro hidráulico preço</strong> acessível tem sua garantida de qualidade fornecida quando o equipamento estiver dentro das normas e regulamentações técnicas de segurança e qualidade de seu segmento.<br /></p>",
      "<p>Investir em um <strong>cilindro hidráulico preço</strong> acessível sem perda de qualidade é o essencial; por isso procure por uma empresa referência no segmento, como a Hicomp. O cilindro hidráulico por ser fabricado conforme as necessidades e especificações dos clientes, podendo variar em diâmetro de 1'' a 14'' e em comprimento de 10mm a 10000mm para sempre satisfazer as necessidades do equipamento em que será aplicado. </p>",
      "<h2>HICOMP: AONDE VOCÊ ENCONTRA CILINDRO HIDRÁULICO PREÇO ACESSÍVEL</h2>",
      "<p>A Hicomp é uma empresa distribuidora que atende diversas industrias de segmentos variados em todo o território nacional. A empresa fornece um <strong>cilindro hidráulico preço</strong> acessível e mais tantos outros produtos do segmento; além de disponibilizar serviços de manutenção excepcionais.<br /></p>",
      "<p> A Hicomp oferece garantia de um ano para todos os produtos e serviços fornecidos, incluindo para o seu <strong>cilindro hidráulico preço</strong> acessível. Ela também apresenta um vasto estoque para garantir sempre pronta entrega e um conserto rápido. <br /></p>",
      "<p>A Hicomp trabalha com os melhores fabricantes do segmento hidráulico, entre eles: Vickers, Rexroth, Parker, Denison e HDA.<br /></p>",
      "<p>A Hicomp apresenta grandes diferencias em seu segmento, tais como uma equipe técnica composta por engenheiros com mais de 15 anos de experiência.<br /></p>",
      "<p>A Hicomp aceita diversas formas de pagamento, entre elas o pagamento faturado em até 60DDL. Entre em contato e peça um orçamento do <strong>cilindro hidráulico preço</strong> acessível. </p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "conserto-cilindros-hidraulicos": {
    introduction:
      "<p>Se você está procurando por <strong>conserto de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>conserto de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/conserto-cilindros-hidraulicos/conserto-cilindros-hidraulicos-01.webp",
      "/src/assets/conserto-cilindros-hidraulicos/conserto-cilindros-hidraulicos-02.webp",
      "/src/assets/conserto-cilindros-hidraulicos/conserto-cilindros-hidraulicos-03.webp",
      "/src/assets/conserto-cilindros-hidraulicos/conserto-cilindros-hidraulicos-04.webp",
      "/src/assets/conserto-cilindros-hidraulicos/conserto-cilindros-hidraulicos-05.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>CONSERTO DE CILINDROS HIDRÁULICOS IDEAL PARA MANTER O DESEMPENHO DO EQUIPAMENTO</h2>",
      "<p>Com longos ciclos de operação, acarretando o desgaste, principalmente das peças de vedação, assim como a exposição a ambientes extremos que acabam por comprometer a eficiência do funcionamento dos equipamentos, é necessário realizar o <strong>conserto de cilindros hidráulicos</strong>.<br /></p>",
      "<p>O <strong>conserto de cilindros hidráulicos</strong> visa reparar peças que já não podem ter o uso prolongado com as manutenções preventivas e que apresentam desgaste ou deteriorações, como por exemplo, ranhuras nas peças de vedação.</p>",
      "<h2>QUANDO REALIZAR O CONSERTO DE CILINDROS HIDRÁULICOS</h2>",
      "<p> O <strong>conserto de cilindros hidráulicos</strong> é recomendado:</p>",
      "<ul class=\"list\">",
      "<li>Quando o cilindro hidráulico apresenta vazamentos aparentes;</li>",
      "<li>Comprometimento no funcionamento;</li>",
      "<li>Necessária sua remoção do equipamento para manutenção corretiva. <br /></li>",
      "</ul>",
      "<p>Ao realizar o <strong>conserto de cilindros hidráulicos</strong>, todo o cilindro deve ser desmontado com cautela, assim como as peças devem ser limpas. <br /></p>",
      "<p>Existe um kit específico para reposição dos componentes de vedação, que deve substituir todas as peças existentes no cilindro, independente de apresentarem menor ou maior desgaste. A troca incompleta acarretará reparos reincidentes em um menor intervalo, gerando gastos adicionais.</p>",
      "<h2>OUTROS PROBLEMAS QUE PODEM SER APONTADOS DURANTE O CONSERTO DE CILINDROS HIDRÁULICOS</h2>",
      "<p>É importante observar a dimensão dos desgastes nas peças de vedação e se ocorrem de forma descompensada. Se durante o <strong>conserto de cilindros hidráulicos</strong> forem constatadas ranhuras ou cortes, é possível que haja problemas de risco na camisa ou no eixo. O desgaste descompensado no êmbolo, no mancal ou na camisa indica desalinhamento na operação do cilindro, sendo necessária a substituição de todas as peças por outras originais e inspecionadas conforme o padrão vigente de segurança. <br /></p>",
      "<p>Após o <strong>conserto de cilindros hidráulicos</strong> é recomendado realizar testes para certificação de inexistência dos defeitos inicialmente apresentados. <br /></p>",
      "<p>O <strong>conserto de cilindros hidráulicos</strong> garante o perfeito funcionamento, assim como a eficiência de equipamentos e maquinários industriais como prensas, máquinas injetoras, sopradoras, escavadeiras e tratores para aplicações no setor agroindustrial.<br /></p>",
      "<p>A Hicomp possui expertise em comércio e manutenção de peças hidráulicas para equipamentos nas mais diversas aplicações industriais. A Empresa realiza concerto de cilindros, com troca do sistema de vedações, brunimento de camisa e cromo de haste, fazendo que os produtos funcionem perfeitamente como novos, com peças de reposição originais, 1 ano de garantia e possibilidade de faturamento em até 60 DDL.<br /></p>",
      "<p>Para contratar os serviços e consultar formas de pagamento, contate o atendimento.</p>",



      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "empresa-de-bombas-hidraulicas": {
    introduction:
      "<p>Se você está procurando por <strong>empresa de bombas hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>empresa de bombas hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-01.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-02.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-03.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-04.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-05.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-06.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-07.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-08.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-09.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-10.webp",
      "/src/assets/empresa-de-bombas-hidraulicas/empresa-bombas-hidraulicas-11.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Uma <strong>empresa de bombas hidráulicas</strong> deve garantir a qualidade dessas peças, que são importantes para o funcionamento adequado do equipamento, pois elas são responsáveis pelo bombeamento do líquido hidráulico. <br /></p>",

      "<p>Então, sendo a bomba uma das partes mais importantes do maquinário, é essencial que a <strong>empresa de bombas hidráulicas</strong> garanta que ela tenha excelente desenvoltura no dia a dia.<br /></p>",

      "<p>Com a versatilidade que a <strong>empresa de bombas hidráulicas</strong> tem a oferecer, podemos perceber as vantagens que essa peça proporciona aos clientes. Essa adequação em diversos sistemas e a sua alta desenvoltura fazem com que a qualidade dessas bombas seja cada vez mais exigida.</p>",

      "<h2>AS OFERTAS DA EMPRESA DE BOMBAS HIDRÁULICAS</h2>",

      "<p>Atualmente, uma <strong>empresa de bombas hidráulicas</strong> trabalha com muitos tipos de bombas, porém, algumas ganham mais destaque, justamente por conta da procura por essas peças determinadas, onde podemos citar as três principais:<br /></p>",

      "<ul class=\"list\">",

      "<li>• Bombas hidráulicas de engrenagem: geralmente, mais econômicas e flexíveis quanto à aplicação, pois podem ser usadas em diversos equipamentos com pressão média.<br /></li>",

      "<li>Bombas hidráulicas de palhetas: mais sofisticadas e mais eficientes quando comparadas às bombas de engrenagem, as bombas de palhetas ganham destaque, também, pois são mais duráveis e silenciosas.<br /></li>",

      "<li>Bombas hidráulicas de pistões: têm alto rendimento e podem operar com pressões elevadas, ideais para equipamentos específicos.<br /></li>",

      "<li>Elas podem ser aplicadas em máquinas de usinagem, injetora de plástico, em tratores e escavadeiras, irrigação e em muitos outros maquinários. <br /></li>",

      "</ul>",

      "<p>É importante salientar que, para garantir pleno funcionamento do equipamento, a <strong>empresa de bombas hidráulicas</strong> auxiliará o cliente a selecionar a que melhor se adequa às exigências da máquina, já que a escolha deve ser feita de acordo com diversos aspectos, como com a pressão, a potência, a velocidade de rotação entre outros detalhes.</p>",

      "<h2>HICOMP – EMPRESA REFERÊNCIA EM BOMBAS HIDRÁULICAS </h2>",

      "<p>A <strong>empresa de bombas hidráulicas</strong> Hicomp oferece bombas de palhetas, de engrenagens e pistões, trabalhando com os melhores fornecedores como Vickers, Parker, Rexroth e Denison. Ainda, a Hicomp proporciona atendimento personalizado, auxílio da equipe de engenheiros e técnicos especializados e valores especiais.<br /></p>",

      "<p>Não deixe de entrar em contato com a <strong>empresa de bombas hidráulicas</strong> Hicomp. Solicite um orçamento e peça ajuda à equipe para escolher a bomba que solucionará seus problemas. </p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "empresa-de-manutencao-de-unidades-hidraulicas": {
    introduction:
      "<p>Se você está procurando por <strong>empresa de manutenção de unidades hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>empresa de manutenção de unidades hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/empresa-de-manutencao-de-unidades-hidraulicas/empresa-manutencao-unidades-hidraulicas-01.webp",
      "/src/assets/empresa-de-manutencao-de-unidades-hidraulicas/empresa-manutencao-unidades-hidraulicas-02.webp",
      "/src/assets/empresa-de-manutencao-de-unidades-hidraulicas/empresa-manutencao-unidades-hidraulicas-03.webp",
      "/src/assets/empresa-de-manutencao-de-unidades-hidraulicas/empresa-manutencao-unidades-hidraulicas-04.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>A qualidade, a durabilidade e as boas condições de uso de peças hidráulicas são fatores fundamentais para assegurar o bom funcionamento de equipamentos e maquinários industriais, além do fato de que garantem a segurança de seus operadores. Por isso, ao acionar a manutenção de uma peça óleo-hidráulica, é imprescindível que se escolha uma <strong>empresa de manutenção de unidades hidráulicas</strong> confiável e ética.</p>",

      "<h2>COMO ENCONTRAR UMA EMPRESA DE MANUTENÇÃO DE UNIDADES HIDRÁULICAS CONFIÁVEL</h2>",

      "<p>As empresas que desempenham este tipo de serviço precisam assegurar a qualidade do trabalho executado e atuarem com uma equipe profissional altamente qualificada, visando oferecer um serviço de alta qualidade e garantir a satisfação do cliente.<br /></p>",

      "<p>É essencial que a <strong>empresa de manutenção de unidades hidráulicas</strong> utilize os melhores e mais modernos equipamentos para a manutenção das peças e ofereçam junto aos serviços, a garantia, passando mais confiança e tranquilidade a seus clientes.<br /></p>",

      "<p>A maioria das <strong>empresa de manutenção de unidades hidráulicas</strong> costuma, além de consertar e reformar peças, fabricá-las, oferecendo uma gama completa de serviços a seus clientes.</p>",

      "<h2>HICOMP HIDRÁULICA – A MELHOR EMPRESA DE MANUTENÇÃO DE UNIDADES HIDRÁULICAS</h2>",

      "<p>Com uma equipe com mais de quinze anos de experiência e materiais de última geração, a Hicomp Hidráulica se tornou referência como <strong>empresa de manutenção de unidades hidráulicas</strong> no país. <br /></p>",

      "<p>Seus serviços são executados por engenheiros e técnicos altamente qualificados e todos os serviços executados acompanham garantia de um ano.<br /></p>",

      "<p>As formas de pagamento também são adequadas à cada cliente, podendo ser faturadas em até 60 DDL.<br /></p>",

      "<p>A Hicomp atua em todo o país e a manutenção de peças pode ser feita na empresa ou em campo -- tudo de acordo com a demanda de seus clientes.<br /></p>",

      "<p>A Hicomp visa atender seus clientes de forma customizada, analisando a necessidade da empresa e oferecendo soluções personalizadas que se adequem perfeitamente à cada situação. São diferenciais como estes que fazem da Hicomp Hidráulica a melhor <strong>empresa de manutenção de unidades hidráulicas</strong> do país, fidelizando clientes e tornando-se referência em seu setor de atuação.<br /></p>",

      "<p>Solicite já a sua cotação à Hicomp Hidráulica e assegure à sua empresa o que há de melhor e mais moderno em peças hidráulicas e manutenção de peças.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "fabricantes-de-cilindros-hidraulicos": {
    introduction:
      "<p>Se você está procurando por <strong>fabricantes de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>fabricantes de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/fabricantes-de-cilindros-hidraulicos/fabricantes-cilindros-hidraulicos-01.webp",
      "/src/assets/fabricantes-de-cilindros-hidraulicos/fabricantes-cilindros-hidraulicos-02.webp",
      "/src/assets/fabricantes-de-cilindros-hidraulicos/fabricantes-cilindros-hidraulicos-03.webp",
      "/src/assets/fabricantes-de-cilindros-hidraulicos/fabricantes-cilindros-hidraulicos-04.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Uma das mais notáveis qualidades que eficientes <strong>fabricantes de cilindros hidráulicos</strong> possuem são as técnicas corretas para uma produção flexível em termos de  montagem e tamanho, podendo atingir qualquer  tipo de aplicação.<br /></p>",

      "<p>Os cilindros hidráulicos são usados para garantir a  força e alta velocidade de um percurso linear. Os <strong>fabricantes de cilindros hidráulicos</strong> utilizam dessa  tecnologia exatamente para dar apoio a máquinas muito maiores, como prensas, injetoras, escavadeiras e tratores. </p>",

      "<h2>A IMPORTÂNCIA, O FUNCIONAMENTO E COMO SÃO OS CILINDROS HIDRÁULICOS </h2>",

      "<p>Ao olhar para a maioria  das máquinas, nota-se que possuem cilindros hidráulicos. De alguma forma, quem possui caminhões, guindastes ou mesmo grandes equipamentos que realizam funções de puxar, empurrar, levantar, abaixar ou escavar recorreu a <strong>fabricantes de cilindros hidráulicos</strong>.<br /></p>",

      "<p>A função básica acontece em volta do  diâmetro do cilindro, sendo que quanto maior ele for, mais ele se levantará. <strong>fabricantes de cilindros hidráulicos</strong> partem do princípio mecânico envolvendo a  pressão exercida sobre a área de superfície do pistão. <br /></p>",

      "<p>Os cilindros ficam posicionados em ângulo reto com a tubulação, que é preenchida com um fluido pressurizado, normalmente  utilizado o óleo. Esse preenchimento acontece até que os cilindros fiquem parcialmente cheios. Uma extremidade do pistão fica ligada à máquina que é responsável pelo movimento. A haste se desloca para fora e para dentro conforme o comando. <br /></p>",

      "<p>Por mais simples que possam parecer esses dispositivos feitos por <strong>fabricantes de cilindros hidráulicos</strong>, eles demandam  uma enorme quantidade de trabalho.  Não é possível  imaginar o nosso cotidiano sem o serviço realizado pelos cilindros. </p>",

      "<h2>FABRICANTES DE CILINDROS HIDRÁULICOS PERSONALIZAM AS NECESSIDADES DOS CLIENTES</h2>",

      "<p>A força produzida por cilindros hidráulicos realmente tem evoluído ao longo das últimas décadas. Grande parte do progresso  da indústria vêm de estudiosos, produtores e <strong>fabricantes de cilindros hidráulicos</strong>. <br /></p>",

      "<p>Faça a diferença com um dos mais confiantes <strong>fabricantes de cilindros hidráulicos</strong> do mercado. A Hicomp Hidráulica é uma empresa que atua no mercado de comércio e manutenção de produtos óleo-hidráulico.  A empresa oferece  1 ano de garantia em todos os produtos e serviços fornecidos.<br /></p>",

      "<p>A empresa trabalha  com a melhor tecnologia produzida por uma equipe de engenheiros e técnicos experientes que desenvolvem atividades personalizadas, atendendo sempre as necessidades de seus  clientes. Entre em contato para solicitar um orçamento </p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "manutencao-cilindros-hidraulicos-preco": {
    introduction:
      "<p>Se você está procurando por <strong>manutenção de cilindros hidráulicos preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>manutenção de cilindros hidráulicos preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/manutencao-cilindros-hidraulicos-preco/manutencao-cilindros-hidraulicos-preco-01.webp",
      "/src/assets/manutencao-cilindros-hidraulicos-preco/manutencao-cilindros-hidraulicos-preco-02.webp",
      "/src/assets/manutencao-cilindros-hidraulicos-preco/manutencao-cilindros-hidraulicos-preco-03.webp",
      "/src/assets/manutencao-cilindros-hidraulicos-preco/manutencao-cilindros-hidraulicos-preco-04.webp",
      "/src/assets/manutencao-cilindros-hidraulicos-preco/manutencao-cilindros-hidraulicos-preco-05.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>IMPORTÂNCIA DA MANUTENÇÃO DE CILINDROS HIDRÁULICOS PREÇOS ACESSÍVEIS</h2>",

      "<p>O cilindro hidráulico é uma peça utilizada em diversos tipos de aplicações e equipamentos, e tem como função transformar a energia hidráulica, potência ou força em energia mecânica através de um percurso linear. Esse mecanismo é essencial e de grande utilidade na indústria.<br /></p>",

      "<p>Devido a esses fatores, a <strong>manutenção de cilindros hidráulicos preço</strong> baixo ou mais acessível  tornou-se amplamente procurada por indústrias ou empresas que trabalham com equipamentos e máquinas móveis. <br /></p>",

      "<p>Fazer a <strong>manutenção de cilindros hidráulicos preço</strong> mais acessível é indicada, pois:</p>",

      "<ul class=\"list\">",

      "<li> Conseguir maior economia no bolso;</li>",

      "<li> O funcionamento dos equipamentos ocorra frequentemente da forma correta e obtenha-se bons resultados  garantindo que o cilindro sempre esteja em bom estado.<br /></li>",

      "</ul>",

      "<p>Mas ao encontrar uma empresa que faça a <strong>manutenção de cilindros hidráulicos preço</strong> muito abaixo do normal encontrado no mercado, deve-se ficar muito atento, pois a manutenção pode ser feita da maneira incorreta. <br /></p>",

      "<p>Por isso é sempre importante pesquisar empresas diferentes e quais são os tipos de revisão e <strong>manutenção de cilindros hidráulicos preço</strong> melhor que cada uma delas oferecem. Dessa forma será possível ter uma ideia da média de preços existentes no mercado de manutenção de peças. Outra dica importante é a verificação de opiniões e resultados dos clientes anteriores.<br /></p>",

      "<p>A <strong>manutenção de cilindros hidráulicos preço</strong> melhor pode ser encontrada com similaridade em variadas empresas, mas além do preço, a qualidade do serviço também é importante, para que assim o custo-benefício seja adquirido de forma vantajosa. </p>",

      "<h2>HICOMP – SOLUÇÕES EM MANUTENÇÃO DE CILÍNDROS HIDRÁULICOS PREÇO MELHOR</h2>",

      "<p>Procurando por uma <strong>manutenção de cilindros hidráulicos preço</strong> melhor, a Hicomp é a empresa ideal para esse serviço, pois garante qualidade e rapidez no resultados. Além da manutenção, a Hicomp também fabrica e reforma variados tipos de unidades hidráulicas como blocos manifolds, cilindros hidráulicos e pneumáticos entre outros.<br /></p>",

      "<p>Com uma equipe de engenheiros e técnicos com mais de quinze anos de experiência no mercado e altamente qualificada, a Hicomp atende a clientes no Brasil inteiro e, por isso,  tornou-se amplamente reconhecida. Buscando por mais informações sobre os valores e formas de pagamento da <strong>manutenção de cilindros hidráulicos preço</strong> melhor, entre em contato com a Hicomp e solicite um orçamento sem compromisso.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "manutencao-de-unidades-hidraulicas": {
    introduction:
      "<p>Se você está procurando por <strong>manutenção de unidades hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>manutenção de unidades hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/manutencao-de-unidades-hidraulicas/manutencao-unidades-hidraulicas-01.webp",
      "/src/assets/manutencao-de-unidades-hidraulicas/manutencao-unidades-hidraulicas-02.webp",
      "/src/assets/manutencao-de-unidades-hidraulicas/manutencao-unidades-hidraulicas-03.webp",
      "/src/assets/manutencao-de-unidades-hidraulicas/manutencao-unidades-hidraulicas-04.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>Os equipamentos hidráulicos são responsáveis pela efetivação de força, direção, passagem e bloqueio de fluidos em máquinas ou veículos industriais. Para assegurar seu bom desempenho, é necessário que a <strong>manutenção de unidades hidráulicas</strong> da empresa esteja sempre em dia.<br /></p>",

      "<p>Só a revisão é capaz de se antecipar as possíveis falhas, detectar erros e identificar a necessidade de troca de peças gastas. A <strong>manutenção de unidades hidráulicas</strong> é um procedimento de extrema importância dentro da indústria.<br /></p>",

      "<p>As peças hidráulicas costumam ser altamente duráveis e resistentes, entretanto, funcionam como um conjunto, por isso, há necessidade de se inspecionar o bom funcionamento de cada uma, a fim de evitar que todo o sistema fique comprometido devido a alguma falha.<br /></p>",

      "<p>Outra vantagem da <strong>manutenção de unidades hidráulicas</strong> é a antecipação, prevendo possíveis erros antes mesmo que eles aconteçam.<br /></p>",

      "<p>A manutenção das peças é altamente econômica, pois além de evitar que a máquina precise ser encostada para reparos, aumenta significativamente a vida útil das peças hidráulicas, minimizando trocas por estragos.<br /></p>",

      "<p>É imprescindível que se escolha com segurança a empresa responsável pela <strong>manutenção de unidades hidráulicas</strong>, pois deve ser uma instituição ética e altamente preparada para lidar com componentes hidráulicos. A equipe responsável deve deter conhecimento técnico e estar devidamente treinada para executar este tipo de trabalho.<br /></p>",

      "<p>A escolha de uma empresa séria e bem preparada faz toda a diferença na manutenção, assegurando qualidade do serviço e maior durabilidade das unidades.</p>",

      "<h2>HICOMP – SOLUÇÕES EM MANUTENÇÃO DE UNIDADES HIDRÁULICAS</h2>",

      "<p>Com diferenciais exclusivos para seus clientes e uma equipe que possui mais de quinze anos de experiência no setor, a Hicomp Hidráulica está preparada para oferecer à sua empresa o que há de mais moderno e tecnológico em <strong>manutenção de unidades hidráulicas</strong>. Seus engenheiros e técnicos são altamente qualificados e contam com todo o know-how necessário para revisar peças e componentes hidráulicos, estendendo sua vida útil e prevendo possíveis problemas, o que gera economia e praticidade às indústrias.<br /></p>",

      "<p>A Hicomp atua em todo o Brasil com manutenção e distribuição das melhores marcas em hidráulica e oferece a seus clientes a garantia de um ano em todos os produtos e serviços prestados, o que transmite segurança e confiabilidade a cada um deles.<br /></p>",

      "<p>Contate a Hicomp e assegure a maior qualidade de serviço em <strong>manutenção de unidades hidráulicas</strong> do país.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "motor-hidraulico-preco": {
    introduction:
      " <p>Se você está procurando por <strong>motor hidráulico preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>motor hidráulico preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/motor-hidraulico-preco/motor-hidraulico-preco-01.webp",
      "/src/assets/motor-hidraulico-preco/motor-hidraulico-preco-02.webp",
      "/src/assets/motor-hidraulico-preco/motor-hidraulico-preco-03.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>O motor é o componente básico e consideravelmente o de maior importância na operação de sistemas hidráulicos, nas mais diversas aplicações do setor industrial. O motor hidráulico possui aplicações distintas; e para alcançar maior eficiência no funcionamento dos equipamentos, com melhor custo-benefício, as empresas buscam por <strong>motor hidráulico preço</strong> baixo, visando obter as mesmas vantagens proporcionadas por um equipamento de custo mais elevado.<br /></p>",

      "<p>É possível encontrar no mercado <strong>motor hidráulico preço</strong> mais em conta, mas para isso é necessário atentar-se aos fatores que conferem qualidade ao produto e certificação de que se trata de um equipamento autêntico, pois pode influenciar diretamente no bom funcionamento de outras peças e acarretar gastos ainda maiores. </p>",

      "<h2>COMO ADQUIRIR UM MOTOR HIDRÁULICO PREÇO BAIXO COM SEGURANÇA</h2>",

      "<p>Ao fazer solicitação direto com o fabricante ou distribuidores autorizados, é possível adquirir um <strong>motor hidráulico preço</strong> baixo, original e ainda com garantia de fábrica, a melhor solução em assistência técnica e reposição de peças originais. <br /></p>",

      "<p>Alguns fabricantes reconhecidos internacionalmente pela qualidade de produtos como as peças Vickers, Parkers e Rexroth, além de possibilitarem a compra de <strong>motor hidráulico preço</strong> mais econômico com relação aos demais fornecedores desse segmento, possuem Certificação de garantia, trabalham conforme as normas de segurança, como DIN e ISO e ainda oferecem manutenção preventiva, proporcionando maior intervalo e menor incidência de reparos.</p>",

      "<h2>RISCOS DE COMPRAR MOTOR HIDRÁULICO PREÇO MENOR COM VENDEDOR NÃO AUTORIZADO</h2>",

      "<p>É muito comum se deparar com ofertas de peças e equipamentos hidráulicos, inclusive <strong>motor hidráulico preço</strong> menor que o oferecido pelos fabricantes, que possuem nenhum ou curto período de garantia. Esses produtos podem ser reincidentes de assistência técnica que não voltaram a circular no mercado, podem ser peças descontinuadas e até mesmo, apresentar defeitos que vão comprometer o funcionamento de todo o sistema hidráulico e gerar gastos astronomicamente superiores com manutenção, em comparação com um <strong>motor hidráulico preço</strong> pouco mais elevado, no entanto acessível, se fosse adquirido direto pelo fabricante ou revendas autorizadas. <br /></p>",

      "<p>A Hicomp Hidráulica oferece segurança e o melhor padrão de qualidade do mercado para compra de <strong>motor hidráulico preço</strong> acessível, com ótimo custo benefício e 1 ano de garantia, para as mais diversas aplicações. Ainda, atua em todo o Brasil no comércio e manutenção de peças, em constante inovação pra melhor atender às necessidades do cliente, com facilidade de pagamento e faturamento em até 60DDL.<br /></p>",

      "<p>Para consultar valores e solicitar os serviços da Hicomp, contate o atendimento.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvulas-direcionais-hidraulicas": {
    introduction:
      "<p>Se você está procurando por <strong>válvulas direcionais hidráulicas</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvulas direcionais hidráulicas</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-01.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-02.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-03.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-04.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-05.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-06.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-07.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-08.webp",
      "/src/assets/valvulas-direcionais-hidraulicas/valvulas-direcionais-hidraulicas-09.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<p>As <strong>válvulas direcionais hidráulicas</strong> são equipamentos que servem para controlar a pressão, direção ou volume de um fluído em um sistema hidráulico. Sua principal função é orientar a direção que o fluxo deve seguir, comandando partida, parada e sentido da vazão.<br /></p>",

      "<p>Basicamente as <strong>válvulas direcionais hidráulicas</strong> possuem um corpo (carcaça) com passagens internas (cilindros de atuação hidráulica), êmbolo de comando e uma ou duas molas de retorno. As <strong>válvulas direcionais hidráulicas</strong> são comumente utilizadas em sistemas de transporte de água ou gás. Antes da montagem do sistema e a escolha das válvulas a serem utilizadas, é feito um circuito hidráulico onde essas válvulas são representadas por retângulos.<br /></p>",

      "<p>O desenho demonstrativo do esquema hidráulico é importante porque define quantas <strong>válvulas direcionais hidráulicas</strong> serão utilizadas no projeto, levando em consideração seu número de posições, número de vias, posição de repouso, tipo de comando utilizado para acionamento e tipo de retorno.<br /></p>",

      "<p>Para que as <strong>válvulas direcionais hidráulicas</strong> trabalhem entre as várias posições existentes, ou seja, alteração da posição do fluxo, é necessário que elas sejam acionadas por um tipo de comando que pode ser direto ou indireto. </p>",

      "<h2>TIPOS DE VÁLVULAS DIRECIONAIS HIDRÁULICAS </h2>",

      "<p>As <strong>válvulas direcionais hidráulicas</strong> podem ser de 2, 3, 4 ou mais vias. As válvulas de 2 vias consiste em 2 passagens que são conectadas e desconectadas, em uma posição extrema da válvula, o curso do fluxo é aberto, enquanto na outra extremidade, não há curso do fluído, basicamente executa a função “liga e desliga”. As <strong>válvulas direcionais hidráulicas</strong> de 3 vias possuem via de tanque, via de pressão e via de utilização, sua função é pressurizar e esvaziar alternadamente um orifício. Já a válvula de 4 vias é utilizada para causar reversão.<br /></p>",

      "<p>Para saber qual a válvula mais indicada para cada projeto é importante consultar um profissional ou empresa especializado em hidráulica.<br /></p>",

      "<p>Pronta para atender a demanda do mercado, a Hicomp hidráulica é uma empresa atuante no comércio e manutenção de produtos óleo-hidráulicos. A empresa comercializa produtos dos principais fabricantes do segmento. A Hicomp possui uma equipe altamente qualificada formada por engenheiros e técnicos que possuem mais de 10 anos de experiência.<br /></p>",

      "<p>Entre em contato com a Hicomp e encontre tudo o que deseja em produtos hidráulicos.  </p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "atuador-hidraulico-industrial": {
    introduction:
      "<p>Se você está procurando por <strong>atuador hidráulico industrial</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>atuador hidráulico industrial</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-01.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-02.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-03.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-04.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-05.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-06.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-07.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-08.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-09.webp",
      "/src/assets/atuador-hidraulico-industrial/atuador-hidraulico-industrial-10.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>ATUADOR HIDRÁULICO INDUSTRIAL - SINÔNIMO DE EFICIÊNCIA PARA MAQUINÁRIOS PESADOS</h2>",

      "<p>O <strong>atuador hidráulico industrial</strong> é um equipamento que por meio de fluidos é capaz de gerar uma grande energia, o que o torna indispensável para maquinários da construção civil e  industrial pesados, como é caso de:</p>",

      "<ul class=\"list\">",

      "<li>Sopradoras;</li>",

      "<li>Escavadeiras;</li>",

      "<li>Tratores;</li>",

      "<li>Prensas;</li>",

      "<li>Injetoras.</li>",

      "</ul>",

      "<p>Basicamente, o <strong>atuador hidráulico industrial</strong> realiza transformação da energia do tipo hidráulica para a mecânica, o que faz dele uma máquina que suporta um peso expressivo, possibilitando que os equipamento possa exercer as funções com qualidade e eficácia como o levantando de cargas.</p>",

      "<h2>CONFIRA MAIS QUALIDADES ATRIBUÍDAS AO ATUADOR HIDRÁULICO INDUSTRIAL</h2>",

      "<p>O <strong>atuador hidráulico industrial</strong> é formado fundamentalmente por fluido, pistão, linha de retorno e cilindro, que juntos oferecem aos maquinários hidráulicos potência não apenas para operações de levantamento, como também de empurrar, entre outras atividades comuns de maquinários fabris.</p>",

      "<p>Por gerar uma força extrema, o <strong>atuador hidráulico industrial</strong> é certamente um equipamento que faz toda a diferença para os processos produtivos tanto fabris como de empresas ligadas ao ramo construtivo, que frequentemente utilizam máquinas robustas para deslocamento de entulhos, entre outras atividades pesadas, pois por meio dele há mais segurança e eficácia dos processos.</p>",

      "<p>Além disso, a aplicação do <strong>atuador hidráulico industrial</strong> confere mais velocidade aos processos, pois irá garantir a potência necessária para os maquinários, que também trabalharam como mais precisão, tendo a força adequada.</p>",

      "<p>Outro aspecto relevante da utilização de atuadores hidráulicos é que eles auxiliam a proteger os maquinários de exercer grandes esforços, preservando a vida útil dos equipamentos e diminuindo a necessidade de intervenções de manutenção.</p>",

      "<p>O atuador hidráulico é equipamento de simples operação, pois é formulado com mecanismos de acionamento fácil. Ele também possui um formato compacto, que possibilita efetuar o transporte e armazenamento com facilidade.</p>",

      "<p>Este tipo de equipamento também é altamente seguro de utilizar, pois conta com elementos protetivos contra superaquecimento, entre outros, o que evita danos ao maquinário e riscos de faíscas.</p>",

      "<h2>BUSCANDO UMA EMPRESA ESPECIALIZADA EM ATUADOR HIDRÁULICO INDUSTRIAL?</h2>",

      "<p>A Hicomp Hidráulica possui larga experiência em atuadores hidráulicos, bombas, válvulas direcionais, entre outros produtos das mais consagradas marcas do mercado para garantir a máxima qualidade.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-alta-pressao": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica alta pressão</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica alta pressão</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-01.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-02.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-03.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-04.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-05.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-06.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-07.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-08.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-09.webp",
      "/src/assets/bomba-hidraulica-alta-pressao/bomba-hidraulica-alta-pressao-10.webp",



    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>O USO DA BOMBA HIDRÁULICA ALTA PRESSÃO</h2>",

      "<p>A <strong>bomba hidráulica alta pressão</strong> é um equipamento amplamente utilizado em diversos segmentos industriais e faz parte de um todo maior que são os circuitos hidráulicos, estruturas acionadas por motores e que transmitem energia através do fluido hidráulico.</p>",

      "<p>A <strong>bomba hidráulica alta pressão</strong> funciona assim: ao ser acionada, podendo ter motores movidos tanto por combustão quanto por eletricidade, a bomba movimenta os fluídos que fazem parte do sistema hidráulico e isso, ao fim, gera energia.</p>",

      "<p>A <strong>bomba hidráulica alta pressão</strong> pode ser empregada em:</p>",

      "<ul class=\"list\">",
      "<li>Grandes complexos industriais;</li>",
      "<li>Setor agrícola;</li>",
      "<li>Setor naval;</li>",
      "<li>Construção civil, dentre outros.</li>",
      "</ul>",

      "<p>São vários os modelos de <strong>bomba hidráulica alta pressão</strong> disponíveis no mercado pela Hicomp Hidráulica, a depender da aplicabilidade de cada uma delas:</p>",

      "<ul class=\"list\">",
      "<li>A bomba de pistão pode ter pistão axial ou radial;</li>",
      "<li>A hidráulica de palhetas ajustáveis fica dentro de um compartimento interno específico e ao passar pelo local, o fluido força a saída através da área de descarga do equipamento;</li>",
      "<li>A bomba de engrenagem possui, como o nome sugere, engrenagens e atua bombeando o óleo.</li>",
      "</ul>",

      "<p>A <strong>bomba hidráulica alta pressão</strong> pode ser usada em locais diversos, como variadas funções: em equipamentos de irrigação, movimentando guinchos em embarcações marítimas, etc.</p>",

      "<h2>HICOMP HIDRÁULICA ATUA FORNECENDO BOMBA HIDRÁULICA ALTA PRESSÃO </h2>",

      "<p>A Hicomp é uma empresa que em pouco tempo conquistou o respeito e admiração do mercado ao fornecer produtos de extrema qualidade. A atuação da empresa cobre toda a área do Mercosul.</p>",

      "<p>A empresa Hicomp Hidráulica destaca-se no mercado por sua atuação de excelência, e isso se reflete na lista de clientes da empresa, com outras também renomadas em seus segmentos e que acreditam na Hicomp pela qualidade do serviço que oferece:</p>",

      "<ul class=\"list\">",
      "<li>Tupy S.A.;</li>",
      "<li>Mangels Industrial S.A.;</li>",
      "<li>RFR Comercio e Reciclagem de Resíduos Ltda;</li>",
      "<li>Comércio de Ferro Arevalo e Júnior Eireli;</li>",
      "<li>Cogumelo Indústria e Comércio S.A.;</li>",
      "<li>Lorenzetti S.A..</li>",
      "</ul>",

      "<p>Selecionar uma empresa responsável e compromissada como fornecedora dá a garantia de se comprar um produto que tenha qualidade, boa procedência, bom preço e que seja durável, de forma a assegurar ao cliente que ele não precisará comprar um novo produto em um curto intervalo de tempo por conta de defeito no que foi comprado.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-axial": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica axial</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica axial</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-01.webp",
      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-02.webp",
      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-03.webp",
      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-04.webp",
      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-05.webp",
      "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-06.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>O QUE É UMA BOMBA HIDRÁULICA AXIAL?</h2>",

      "<p>A <strong>bomba hidráulica axial</strong> é uma bomba de pistão que tem como função principal fazer o bombeamento de fluido. Os pistões se alternam dentro de um tambor em formato cilíndrico e com esse movimento o pistão é empurrado para fora do cilindro por uma mola, o tambor se enche de fluido e este será, em seguida pressurizado. É a <strong>bomba hidráulica axial</strong> um dos equipamentos mais utilizados para fazer essa transformação de energia mecânica em energia hidráulica.</p>",

      "<p>O funcionamento da <strong>bomba hidráulica axial</strong> depende de alguns fatores, como a distância durante a ação de puxar e empurrar os pistões dentro do tambor de cilindro. Isso porque dentro da estrutura da <strong>bomba hidráulica axial</strong> há uma placa de deslizamento. Se preciso for, basta controlar a distância entre os pistões deslizando a placa, o que altera o ângulo e muda o curso do pistão e, consequentemente, o volume da bomba. Um grande benefício de se fazer uso da <strong>bomba hidráulica axial</strong> é que esse modelo de bomba é resistente a altas pressões e possui, em geral, um baixo nível de ruídos.</p>",

      "<p>Dentre os vários aspectos que fazem da <strong>bomba hidráulica axial</strong> tão requisitada é por ela apresentar grande eficiência aliada a um custo benefício que vale a pena. Há uma otimização de tempo e dinheiro.</p>",

      "<h2>HICOMP HIDRÁULICA FORNECE BOMBA HIDRÁULICA AXIAL</h2>",

      "<p>A Hicomp Hidráulica atua fornecendo <strong>bomba hidráulica axial</strong> para os diversos segmentos do mercado. A empresa se destaca por fornecer esse equipamento com uma qualidade acima da média e os melhores preços do mercado. É importante destacar que obter a <strong>bomba hidráulica axial</strong> de fornecedor de qualidade assegura a boa procedência do produto, e isso gera economia, uma vez que um equipamento de primeira linha dá a garantia de que não será necessário fazer a substituição do equipamento em um curto intervalo de tempo.</p>",

      "<p>A Hicomp Hidráulica é uma referência no mercado. Os produtos fornecidos pela Hicomp destinam-se a empresas com:</p>",

      "<ul class=\"list\">",
      "<li>Máquinas movidas por óleo hidráulico;</li>",
      "<li>Prensas;</li>",
      "<li>Sopradoras;</li>",
      "<li>Injetoras.</li>",
      "</ul>",

      "<p>A Hicomp Hidráulica também atua fornecendo produtos para pessoas que possuam, por exemplo, maquinário em chácaras, pessoas ou empresas com betoneiras, escavadeiras, pá-carregadeiras, rolo compactador.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-colheitadeira": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica colheitadeira</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica colheitadeira</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-01.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-02.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-03.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-04.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-05.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-06.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-07.webp",
      "/src/assets/bomba-hidraulica-colheitadeira/bomba-hidraulica-colheitadeira-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>SAIBA MAIS SOBRE BOMBA HIDRÁULICA COLHEITADEIRA</h2>",

      "<p>A <strong>bomba hidráulica colheitadeira</strong> faz parte de um equipamento agrícola destinado à colheita de lavouras, tais como de cana-de-açúcar e algodão e grãos como trigo, arroz, café, soja e milho.</p>",

      "<p>Presente na máquina agrícola que é indispensável para o agricultor, a <strong>bomba hidráulica colheitadeira</strong> é responsável pelo bombeamento do fluido hidráulico, fazendo com que os pistões movimentem-se dentro do cilindro hidráulico.</p>",

      "<p>O mecanismo de bombeamento de uma <strong>bomba hidráulica colheitadeira</strong> é basicamente constituído por um tambor de cilindro, pistões com sapatas, placa de deslizamento, molas e placa de orifício.</p>",

      "<p>A aplicação do sistema hidráulico em colheitadeiras teve início com o surgimento do sistema de três pontos, sendo utilizada inicialmente para levantar implementos, uma utilização muito simples, dado que o equipamento retorna ao solo pela força da gravidade.</p>",

      "<p>Com o passar do tempo e avanço da tecnologia, os comandos hidráulicos foram aperfeiçoados, permitindo controles de profundidade, sensibilidade e vazão, tudo isso com maior rapidez nas respostas dos equipamentos e melhor funcionamento da <strong>bomba hidráulica colheitadeira</strong>.</p>",

      "<p>Atualmente, o mercado oferece recursos opcionais para o maquinário agrícola, sendo que para ter acesso a todos é necessário que o equipamento possua uma <strong>bomba hidráulica colheitadeira</strong> de alta qualidade para que possa apresentar uma performance satisfatória.</p>",

      "<p>A aquisição de uma <strong>bomba hidráulica colheitadeira</strong> deve ser feita em uma empresa com boa reputação em seu ramo de atuação, pois desta forma será possível prevenir danos e garantir a aquisição de uma peça que cause um impacto altamente positivo na rotina de uma plantação.</p>",

      "<h2>ONDE ENCONTRAR A MELHOR SOLUÇÃO PARA BOMBA HIDRÁULICA COLHEITADEIRA?</h2>",

      "<p>Na Hicomp Hidráulica está presente um grande estoque de soluções, sendo a <strong>bomba hidráulica colheitadeira</strong> uma das que mais se destacam, pois apresenta grande desempenho e durabilidade, duas características muito desejáveis ao fazer a aquisição de um equipamento de uso frequente.</p>",

      "<p>Fundada em 1995, a Hicomp Hidráulica iniciou suas atividades com o objetivo de fornecer o que há de melhor para cada um de seus clientes e projetos.</p>",

      "<p>Com capacidade para atendimento em todo o Mercosul, a Hicomp Hidráulica leva para todos estes países as seguintes vantagens:</p>",

      "<ul class=\"list\">",
      "<li>Pronta entrega para todos os produtos;</li>",
      "<li>Forma de pagamento flexíveis;</li>",
      "<li>Garantia de 1 ano.</li>",
      "</ul>",

      "<p>Para garantir a total eficiência em cada um dos produtos e serviços ofertados, a Hicomp Hidráulica conta com uma equipe de profissionais especializados e com vasta experiência no mercado.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-engrenagem": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica engrenagem</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica engrrenagem</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-01.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-02.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-03.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-04.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-05.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-06.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-07.webp",
      "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>O QUE É BOMBA HIDRÁULICA ENGRENAGEM?</h2>",

      "<p>A <strong>bomba hidráulica engrenagem</strong> é uma bomba de deslocamento positivo utilizada em circuitos hidráulicos. Ela é responsável por converter energia mecânica em energia hidráulica. Isso acontece através do bombardeamento de líquidos, no qual é direcionado, devido ao movimento das engrenagens, para o portal de saída. É utilizada em diversos setores industriais, pois trabalha em conjunto com outros equipamentos.</p>",

      "<h2>QUEM PODE ADQUIRIR UMA BOMBA HIDRÁULICA ENGRENAGEM?</h2>",

      "<p>Empresas com máquinas movida por óleo hidráulico como:</p>",

      "<ul class=\"list\">",
      "<li>Prensas;</li>",
      "<li>Sopradoras;</li>",
      "<li>Injetoras.</li>",
      "<li>Ou pessoas com maquinário para suas chácaras e qualquer serviço com:</li>",
      "<li>Betoneiras;</li>",
      "<li>Escavadeiras;</li>",
      "<li>Pá-carregadeira;</li>",
      "</ul>",

      "<p>Rolos compactados.</p>",

      "<h2>VANTAGENS DA BOMBA HIDRÁULICA ENGRENAGEM</h2>",

      "<p>A <strong>bomba hidráulica engrenagem</strong> é econômica e pode ser utilizada em diversos tipos de aplicações. É eficiente em operações de alta pressão e muito resistente em operações com baixa temperatura. Vale ressaltar a extrema importância de contar com uma empresa especializada nesse segmento e renomada. A Hicomp Hidráulica oferece as melhores soluções e diversificação em seus produtos, por isso a empresa é líder no mercado, pois tem como objetivo oferecer resultados assertivos para todos os seus clientes.</p>",

      "<h2>QUAIS APLICAÇÕES INDUSTRIAIS AS BOMBAS HIDRÁULICAS ENGRENAGEM ESTÃO MAIS PRESENTES?</h2>",

      "<ul class=\"list\">",
      "<li>Indústria química;</li>",
      "<li>Indústria petroquímica;</li>",
      "<li>Indústria farmacêuticas;</li>",
      "<li>Indústria siderúrgica;</li>",
      "<li>Indústria têxtil;</li>",
      "<li>Indústria alimentícia.</li>",
      "</ul>",

      "<p>Esses são exemplos de segmentos em que é utilizada a <strong>bomba hidráulica engrenagem</strong>, mas além deles, esse tipo de bomba é comum nas indústrias madeireira, naval, automobilística, gráfica e diversas outras.</p>",

      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo a melhor <strong>bomba hidráulica engrenagem</strong> para o mercado, como atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários dos serviços e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto de confiança.</p>",

      "<p>A Hicomp Hidráulica se compromete a satisfazer todas as necessidades de seus clientes da melhor forma possível. A empresa honra sua tradição de ser uma das melhores empresas no mercado em que atua. A Hicomp Hidráulica trabalha sempre com muita seriedade e profissionalismo para agradar seus clientes.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "bomba-hidraulica-escavadeira": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica escavadeira</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica escavadeira</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",




    images: [

      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-01.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-02.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-03.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-04.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-05.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-06.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-07.webp",
      "/src/assets/bomba-hidraulica-escavadeira/bomba-hidraulica-escavadeira-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>BOMBA HIDRÁULICA ESCAVADEIRA - EQUIPAMENTO ESSENCIAL PARA A QUALIDADE DE FUNCIONAMENTO</h2>",

      "<p>De forma resumida, a <strong>bomba hidráulica escavadeira</strong> é uma máquina que tem como função fornecer a força de energia mecânica adequada para a escavadeira, que irá ter a potência necessária para as operações pesadas, facilitando assim os processos produtivos.</p>",

      "<p>A <strong>bomba hidráulica escavadeira</strong> é projetada com diversos elementos, que em conjunto conferem alta potência, entre eles:</p>",

      "<ul class=\"list\">",
      "<li>Engrenagens;</li>",
      "<li>Mancal;</li>",
      "<li>Retentor;</li>",
      "<li>Pino guia.</li>",
      "</ul>",

      "<h2>VEJA MAIS DIFERENCIAIS DA BOMBA HIDRÁULICA ESCAVADEIRA</h2>",

      "<p>Por ter dimensões reduzidas, a <strong>bomba hidráulica escavadeira</strong> é um equipamento que permite efetuar o deslocamento de maneira rápida e fácil, otimizando assim o tempo das operações com escavadeiras. O seu tamanho também facilita guardá-la mesmo em espaço menores, evitando assim a construção de áreas mais extensas para o seu devido acondicionamento.</p>",

      "<p>Além de compacta, a <strong>bomba hidráulica escavadeira</strong> é fácil de manusear por ter elementos simples de acionar, controlar e desligar, não requerendo desta forma conhecimentos específicos para a sua devida operação.</p>",

      "<p>Ademais, a <strong><a href=\"https://www.hicomp.com.br/cilindro-hidraulico-prensa\" title=\"cilindro hidraulico prensa\">bomba hidráulica escavadeira</a></strong> é um maquinário que tem com principal característica a elevada pressão, que pode chegar a aproximadamente 700 bar, o que a torna um equipamento que fornece uma potência alta para as escavadeira, permitindo desta forma uma operação mais precisa e produtiva.</p>",

      "<p>Outro destaque da bomba hidráulica é a sua capacidade de efetuar movimentos tanto suaves como ágeis, devido ao fato de ela ser um equipamento de reduzida inércia.</p>",

      "<p>A bomba hidráulica ainda possibilita a realização do controle de velocidade de maneira precisa, conferindo assim flexibilidade de uso, sendo, portanto, um maquinário versátil, que atende diversas necessidades.</p>",

      "<p>Esta modalidade de bomba hidráulica também é prática e econômica, já que não necessita de lubrificação, pois é desenvolvida com sistema autolubrificante. Ela também gera movimentos tanto lineares como rotativos.</p>",

      "<p>Confeccionada com sistema de proteção contra sobrecargas, a bomba hidráulica desliga automaticamente em casos de sobrecarregamento, o que faz dele um equipamento altamente confiável de aplicar em escavadeiras dos mais variados modelos e tipos.</p>",

      "<h2>ADQUIRA BOMBA HIDRÁULICA ESCAVADEIRA COM QUEM ENTENDE DO ASSUNTO</h2>",

      "<p>A Hicomp Hidráulica conquistou prestígio no mercado por oferecer o que há de mais eficiente e modernos em bombas hidráulicas, entre outros diversos produtos.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-industrial": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica industrial</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica industrial</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-01.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-02.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-03.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-04.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-05.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-06.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-07.webp",
      "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>CONHEÇA AS PRINCIPAIS MODALIDADES DE BOMBA HIDRÁULICA INDUSTRIAL</h2>",

      "<p>A <strong>bomba hidráulica industrial</strong> é certamente um equipamento necessário para empresas fabris que atuam com máquinas hidráulicas, pois ela é responsável por conferir a energia apropriada para o seu pleno desempenho.</p>",

      "<p>Há diferentes modelos de bomba hidráulica, que se diferenciam pela faixa de pressão que atua, entre outros atributos. As versões mais comuns utilizadas são:</p>",

      "<ul class=\"list\">",
      "<li>Bombas hidráulicas de pistão axial;</li>",
      "<li>Bombas hidráulicas com bomba do tipo gerotor;</li>",
      "<li>Bombas hidráulicas de palhetas;</li>",
      "<li>Bombas hidráulicas de engrenagens.</li>",
      "</ul>",

      "<h2>CONFIRA ALGUMAS APLICABILIDADES DA BOMBA HIDRÁULICA INDUSTRIAL</h2>",

      "<p>A <strong>bomba hidráulica industrial</strong> é um equipamento de elevada importância não apenas para setores industriais, mas também para outros campos do mercado, como o agrícola, por exemplo, no qual ela é empregada em maquinários robustos, como colheitadeiras, tratores, entre outros.</p>",

      "<p>Já na segmento da construção civil, a <strong>bomba hidráulica industrial</strong> é aplicada em máquina, tais como escavadeiras, carregadeiras, entre outros. No setor fabril e empresas de transporte, ela é comumente usada em equipamento de transporte, como empilhadeiras, basculantes, guindastes, sistema hidráulicos industriais, entre outros.</p>",

      "<p>A <strong>bomba hidráulica industrial</strong> possui um elevado rendimento, que proporciona força mecânica de modo econômico. Além disso, ela é bastante segura de operar, pois em situações de sobrecarga ela paralisa a sua operação de forma automatizada.</p>",

      "<p>Além do alto rendimento, a <strong>bomba hidráulica industrial</strong> atua em elevada velocidade, conferindo um tempo de resposta ágil, o que resulta na otimização do tempo do uso de maquinários hidráulicos pesados.</p>",

      "<p>Ademais, a bomba hidráulica conta com mecanismos que possibilitam realizar o ajustamento da velocidade, o que gera mais precisão aos procedimentos. A inversão de movimentos é conferido pela sua característica de inércia baixa.</p>",

      "<p>O sistema autolubrificante aplicado na confecção da bomba hidráulica dispensa a realização de operações de lubrificação, garantindo assim mais economia. Outro aspecto importante do equipamento é sua longa vida útil, que a torna não apenas um dispositivo necessário, mas também vantajoso em termos financeiros.</p>",

      "<p>A manutenção da bomba hidráulica é realizada de maneira simples, pois os seus componentes são encontrados facilmente, o que permite efetuar trocas em caso de necessidade de maneira bastante ágil.</p>",

      "<h2>GARANTA A MÁXIMA QUALIDADE EM BOMBA HIDRÁULICA INDUSTRIAL</h2>",

      "<p>A Hicomp Hidráulica disponibiliza bombas hidráulicas do mais diversos modelos, todos de fabricantes conceituados no mercado para assegurar eficiência ímpar de operação.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-preco": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-01.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-02.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-03.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-04.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-05.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-06.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-07.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-08.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-09.webp",
      "/src/assets/bomba-hidraulica-preco/bomba-hidraulica-preco-10.webp"
    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>PARA QUE SERVE UMA BOMBA HIDRÁULICA PREÇO? </h2>",

      "<p>Uma bomba hidráulica é utilizada principalmente no setor industrial e compõe um sistema muito maior do que somente o visível. Uma parte da bomba hidráulica, inclusive, trabalha em conjunto com outras peças para poder seguir funcionando. </p>",

      "<p>Dentre todas as definições disponíveis para explicar o que é uma bomba hidráulica, a que mais se encaixa é que ela é uma máquina capaz de receber energia potencial e transformar parte dela em energia cinética (equivalente a energia de movimento) e também energia de força (equivalente a energia de pressão). </p>",

      "<p>As duas energias, após passadas pela <strong>bomba hidráulica preço</strong>, acabam sendo enviadas a um fluído bombeado já dentro do sistema no qual a <strong>bomba hidráulica preço</strong> foi instalada. A transmissão em si pode acontecer por alguns fatores:</p>",

      "<ul class=\"list\">",
      "<li>Aumento de velocidade;</li>",
      "<li>Aumento de pressão;</li>",
      "<li>Aumento de elevação;</li>",
      "<li>Combinação entre as diferentes formas de energia.</li>",
      "</ul>",

      "<p>Em uma linguagem mais clara e objetiva, a <strong>bomba hidráulica preço</strong> é responsável por bombear líquidos hidráulicos que, em sua maioria, são algum tipo de óleo. </p>",

      "<h2>COM A HICOMP HIDRÁULICA É POSSÍVEL ENCONTRAR A BOMBA HIDRÁULICA PREÇO MAIS ACESSÍVEL DO MERCADO </h2>",

      "<p>A Hicomp Hidráulica é uma empresa especializada em <strong>bomba hidráulica preço</strong> baixo e, além disso, atua no mercado de comércio e manutenção de produtos óleo-hidráulicos. A ampla gama de fabricantes de <strong>bomba hidráulica preço</strong> baixo da Hicomp Hidráulica faz com que seus produtos sejam de confiança, uma vez que a empresa só trabalha com marcas que confia, tais como Vickers, Rexroth, Parker e HDA. </p>",

      "<p>Os serviços de manutenção disponibilizados pela Hicomp Hidráulica podem ser realizados diretamente na própria empresa ou em campo. Toda a solicitação é feita por meio de contato telefônico. </p>",

      "<p>A equipe da Hicomp Hidráulica é formada por engenheiros e técnicos, todos com mais de dez anos de experiência no mercado de <strong>bomba hidráulica preço</strong> acessível. Todas as atividades desenvolvidas pela Hicomp Hidráulica são baseadas no princípio do atendimento personalizado e totalmente adequado às necessidades que seus clientes apresentarem. Sempre seguindo as demandas que aparecem, sem um atendimento padrão, mas sim tornando cada atendimento especial e cada cliente único como tem de ser. Vale ressaltar que todo o estoque da Hicomp Hidráulica é para pronta entrega.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-a-venda": {
    introduction:
      " <p>Se você está procurando por <strong>cilindro hidráulico à venda</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico à venda</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-01.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-02.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-03.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-04.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-05.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-06.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-07.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-08.webp",
      "/src/assets/cilindro-hidraulico-a-venda/cilindro-hidraulico-venda-09.webp",
    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>RAZÕES PARA ADQUIRIR CILINDRO HIDRÁULICO À VENDA</h2>",

      "<p>A procura por <strong>cilindro hidráulico à venda</strong> é comum, pois trata-se de um item que possui como função básica a de gerar força, potência ou energia mecânica. Por esta razão, é muito utilizado na indústria, podendo ser aplicado a finalidades diversas. <br /></p>",

      "<p>O <strong>cilindro hidráulico à venda</strong> em um distribuidor de qualidade também é popularmente conhecido como motor hidráulico linear, é parte integrante de uma grande variedade de equipamentos, em especial os sistemas de articulação de máquinas.<br /></p>",

      "<p>Para que o <strong>cilindro hidráulico à venda</strong> funcione, possui em seu interior um pistão e o seu movimento é determinado pela entrada e saída do fluído hidráulico do equipamento. Este fluído é, na maior parte das vezes, um óleo, cuja presença é fundamental para o pleno funcionamento do maquinário. <br /></p>",

      "<p>Ao adentrar o equipamento, o óleo recebe pressão gerada por um composto de bomba-motor e em seguida o movimento é gerado pelo pistão que encontra-se dentro do <strong>cilindro hidráulico à venda</strong> em estabelecimentos de qualidade. <br /></p>",

      "<p>Com o objetivo de atender as necessidades das diferentes demandas encontradas na indústria, é possível encontrar <strong>cilindro hidráulico à venda</strong> de diferentes tipos e, para determinar qual é o mais adequado para cada situação, é importante que o cliente tenha em mãos as especificações sobre o tipo de produção. </p>",

      "<h2>CILINDRO HIDRÁULICO À VENDA PELO MELHOR PREÇO</h2>",

      "<p>A Hicomp Hidráulica é a empresa que oferece o <strong>cilindro hidráulico à venda</strong> pelo melhor preço do mercado e é o único estabelecimento capaz de unir qualidade por um valor acessível que se encaixa no orçamento de qualquer cliente. <br /></p>",

      "<p>Além de contar com bom preço e qualidade, a Hicomp Hidráulica também oferece aos seus consumidores os seguintes benefícios: </p>",

      "<ul class=\"list\">",
      "<li>Garantia de 1 ano;</li>",
      "<li>Profissionais qualificados e experientes;</li>",
      "<li>Produtos disponíveis para pronta entrega.</li>",
      "</ul>",

      "<p>A Hicomp Hidráulica oferece um longo período de garantia para permitir que os compradores usufruam de suas aquisições com tranquilidade e não precisem se preocupar com a contratação de suporte. <br /></p>",

      "<p>Os profissionais que atuam pela empresa são todos especializados na área e possuem mais de uma década de experiência na área, portanto estão devidamente capacitados para superar os mais diversos desafios. <br /></p>",

      "<p>Através da disponibilização de produtos a pronta entrega, a Hicomp Hidráulica garante que os prazos prometidos serão cumpridos. </p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-alta-pressao": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico alta pressão</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico alta pressão</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-01.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-02.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-03.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-04.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-05.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-06.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-07.webp",
      "/src/assets/cilindro-hidraulico-alta-pressao/cilindro-hidraulico-alta-pressao-08.webp",
    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>ONDE PODEMOS UTILIZAR O CILINDRO HIDRÁULICO ALTA PRESSÃO?</h2>",

      "<p>O <strong>cilindro hidráulico alta pressão</strong> é utilizado numa variedade de aplicações industriais e aeroespaciais, devido à conversão de energia hidráulica em um movimento linear. A proporção da energia é determinada pela pressão hidráulica na câmara do cilindro sobre o pistão e/ou a área da coroa.</p>",

      "<h2>QUAIS SÃO AS APLICAÇÕES DO CILINDRO HIDRÁULICO ALTA PRESSÃO?</h2>",

      "<p>Cilindros de trabalho leve: cilindros de trabalho leve tipicamente operam em pressões de até 2,320 psi. Geralmente são utilizados em:</p>",

      "<ul class=\"list\">",
      "<li>Cilindros de alimentação;</li>",
      "<li>Prensas leves;</li>",
      "<li>Empilhadeiras.</li>",
      "</ul>",

      "<p>Cilindros de trabalho médio: estes tipos de cilindros tipicamente operam entre 2,320 psi e 3,625 psi. Geralmente são capazes de atuar na presença de carga adicional. São utilizados em:</p>",

      "<ul class=\"list\">",
      "<li>Braçadeiras;</li>",
      "<li>Medidores;</li>",
      "<li>Cilindro de injeção.</li>",
      "</ul>",

      "<p>Cilindros de trabalho pesado: são utilizados em ambientes que requerem solução de vedação completa, capaz de lidar com alta pressão e carga adicional. Geralmente são utilizados em:</p>",

      "<ul class=\"list\">",
      "<li>Prensas pesadas;</li>",
      "<li>Escavadeiras;</li>",
      "<li>Dors.</li>",
      "</ul>",

      "<p>Cilindros telescópicos: são utilizados em aplicações de trabalho pesado nas indústrias de fluido de forças móveis e carga extra.</p>",

      "<ul class=\"list\">",
      "<li>Plataformas de levantamentos;</li>",
      "<li>Empilhadeiras com caminhões montados.</li>",
      "</ul>",

      "<p>Esses são exemplos de segmentos em que é utilizado o <strong>cilindro hidráulico alta pressão</strong>.</p>",

      "<p>A inspeção do <strong>cilindro hidráulico alta pressão</strong> deve ocorrer anualmente, para que ele permaneça em perfeitas condições.</p>",

      "<p>A Hicomp Hidráulica comércio atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>cilindro hidráulico alta pressão</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários dos serviços e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como, Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto de confiança.</p>",

      "<p>A Hicomp Hidráulica se compromete a satisfazer todas as necessidades de seus clientes da melhor forma possível. A empresa honra sua tradição de ser uma das melhores empresas no mercado em que atua com <strong>cilindro hidráulico alta pressão</strong>. A Hicomp Hidráulica trabalha sempre com muita seriedade e profissionalismo para agradar seus clientes.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "amortecedores-hidraulicos-industriais": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico amortecedor</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico amortecedor</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-01.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-02.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-03.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-04.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-05.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-06.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-07.webp",
      "/src/assets/amortecedores-hidraulicos-industriais/cilindro-hidraulico-amortecedor-08.webp",
    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>O QUE É CILINDRO HIDRÁULICO BAIXA PRESSÃO?</h2>",

      "<h2>CILINDRO HIDRÁULICO AMORTECEDOR - CONFERE MAIS SEGURANÇA MAIS SEGURANÇA AOS MAQUINÁRIOS</h2>",

      "<p>O <strong>cilindro hidráulico amortecedor</strong> tem como atribuição diminuir a velocidade dos equipamento, eliminando desta forma choques, que podem causar danos às máquinas, o que faz dele um dispositivo de elevada importância para a preservação dos maquinários.</p>",

      "<p>Por realizar essa função, o <strong>cilindro hidráulico amortecedor</strong> exclui diferentes agressões, que podem culminar na degradação precoce dos componentes dos equipamentos, entre eles:</p>",

      "<ul class=\"list\">",
      "<li>Vibrações;</li>",
      "<li>Ruídos;</li>",
      "<li>Atritos.</li>",
      "</ul>",

      "<h2>CONHEÇA MAIS VANTAGENS DA UTILIZAÇÃO DO CILINDRO HIDRÁULICO AMORTECEDOR</h2>",

      "<p>O <strong>cilindro hidráulico amortecedor</strong> atende as mais diversas necessidades de indústrias dos mais variados segmentos do mercado, bem como do setor construtivo, por ser um equipamento adequado para emprego em maquinários de construção, sistema de elevação, veículos, entre outros.</p>",

      "<p>Além da versatilidade de aplicação, empresas que investem no <strong>cilindro hidráulico amortecedor</strong> ampliam a vida útil dos equipamentos, pois, como citado anteriormente, ele elimina diversos fatores que trazem danos aos maquinários.</p>",

      "<p>Por evitar variados problemas decorrentes de movimentos, o <strong>cilindro hidráulico amortecedor</strong> também diminui a necessidade de intervenções de manutenção, o que, somado a extensão da durabilidade dos equipamento, faz dele um grande aliado para o aumento da economia dos gastos operacionais.</p>",

      "<p>Outra vantagem do uso deste tipo de cilindro hidráulico é o aumento da capacidade de produtividade, uma vez que ele reduz consideravelmente paralisações de funcionamento abruptas, intercorrência, que reconhecidamente provoca sérios prejuízos à produção.</p>",

      "<p>O emprego desta modalidade de cilindro hidráulico também ajuda na elevação da produção, pois permite que os maquinários possam atuar em velocidade acentuadas, devido ao fato de ele ser responsável por efetuar o controle dos movimentos, que são suavizados para evitar riscos de danificações.</p>",

      "<p>Por eliminar ruídos, esta categoria de cilindro não somente é benéfico para o desempenho qualificado dos equipamentos, mas também contribui eficazmente para evitar o excesso de poluição sonora no ambiente de trabalho, questão fundamental para a saúde dos operadores.</p>",

      "<p>Há também mais segurança na operação dos maquinários, pois este tipo de cilindro possibilita uma ação de desaceleração totalmente controlável.</p>",

      "<h2>ASSEGURE A MÁXIMA EFICIÊNCIA EM CILINDRO HIDRÁULICO AMORTECEDOR</h2>",

      "<p>A Hicomp Hidráulica é reconhecida no mercado pela qualidade superior de seus cilindros hidráulicos, entre outros produtos, todos advindos de marcas de renome no segmento.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-baixa-pressao": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico baixa pressão</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico baixa pressão</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-baixa-pressao/cilindro-hidraulico-baixa-pressao-01.webp",
      "/src/assets/cilindro-hidraulico-baixa-pressao/cilindro-hidraulico-baixa-pressao-02.webp",
      "/src/assets/cilindro-hidraulico-baixa-pressao/cilindro-hidraulico-baixa-pressao-03.webp",
      "/src/assets/cilindro-hidraulico-baixa-pressao/cilindro-hidraulico-baixa-pressao-04.webp",
      "/src/assets/cilindro-hidraulico-baixa-pressao/cilindro-hidraulico-baixa-pressao-05.webp",

    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>O QUE É CILINDRO HIDRÁULICO BAIXA PRESSÃO?</h2>",

      "<p>O <strong>cilindro hidráulico baixa pressão</strong> é utilizado numa variedade de aplicações industriais e aeroespaciais, devido à conversão de energia hidráulica em um movimento linear. A proporção da energia é determinada pela pressão hidráulica na câmara do cilindro sobre o pistão e/ou a área da coroa. Nele, fica inserido o pistão, sendo que seu fluxo é determinado conforme a entrada e saída de óleo no cilindro.</p>",

      "<h2>ONDE PODEMOS UTILIZAR O CILINDRO HIDRÁULICO BAIXA PRESSÃO?</h2>",

      "<ul class=\"list\">",
      "<li>Empresas de manutenção;</li>",
      "<li>Sistemas de articulação de máquinas;</li>",
      "<li>Área da agricultura;</li>",
      "<li>Setor rodoviário;</li>",
      "<li>Ferramentarias.</li>",
      "</ul>",

      "<h2>A INSPEÇÃO DO CILINDRO HIDRÁULICO BAIXA PRESSÃO DEVE OCORRER ANUALMENTE, PARA QUE ELE PERMANEÇA EM PERFEITAS CONDIÇÕES</h2>",

      "<p>As quatro funções do <strong>cilindro hidráulico baixa pressão</strong> são:</p>",

      "<ul class=\"list\">",
      "<li>Transmissão de energia;</li>",
      "<li>Lubrificação das partes móveis internas;</li>",
      "<li>Transferência de calor;</li>",
      "<li>Vedação de folgas entre partes móveis.</li>",
      "</ul>",

      "<p>O <strong>cilindro hidráulico baixa pressão</strong> tem a função completa de soluções de vedação que fornece desempenhos superiores e uma vida longa de serviço. Esses cilindros de trabalho tipicamente operam em pressões de até 2,320 psi. As execuções incluem cilindros de alimentação, prensas leves, plataformas móveis, tais como empilhadeiras ou cilindros de levantamento.</p>",

      "<p>Seguramente, a maior dificuldade com a contaminação em um sistema hidráulico é que ela interfere na lubrificação. A falta de lubrificação causa desgaste excessivo, resposta lenta, operações não sequenciadas, queima da bobina do solenoide e falha prematura do componente.</p>",

      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>cilindro hidráulico baixa pressão</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários dos serviços e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como, Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto com qualidade e confiança. A empresa honra sua tradição de ser uma das melhores empresas no mercado em que atua.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-basculante": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico basculante</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico basculante</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-01.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-02.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-03.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-04.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-05.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-06.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-07.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-08.webp",
      "/src/assets/cilindro-hidraulico-basculante/cilindro-hidraulico-basculante-09.webp",

    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>CILINDRO HIDRÁULICO BASCULANTE EXERCE FUNÇÕES DE GRANDE IMPORTÂNCIA </h2>",

      "<p>O <strong>cilindro hidráulico basculante</strong> é uma estrutura que tem por função transformar a força, a potência ou mesmo a energia hidráulica em força, potência ou energia do tipo mecânica. Na prática, isso quer dizer que o cilindro aproveita a força de um fluido para gerar força capaz de fazer um trabalho, de certa forma.  </p>",

      "<p>Uma função muito importante do <strong>cilindro hidráulico basculante</strong> é que ele integra diferentes equipamentos como no caso dos sistemas de articulação de máquinas. É nesse cilindro que fica o pistão, cujo funcionamento depende da entrada e saída de óleo.</p>",

      "<p>Importante destacar que o <strong>cilindro hidráulico basculante</strong> tem esse nome justamente por ser utilizado em basculante acionado por bomba hidráulica de engrenagem. A fixação desse equipamento se dá com um sistema de trava interna e porca, além de possuir uma válvula no centro do cilindro. </p>",

      "<h2>COMO É O FUNCIONAMENTO DO CILINDRO HIDRÁULICO BASCULANTE</h2>",

      "<p>No <strong>cilindro hidráulico basculante</strong> o óleo é pressurizado pela ação da bomba-motor que geralmente tem funcionamento elétrico. Assim, durante o seu funcionamento, o tubo fica fixado e a haste se desloca hora para fora hora para dentro. Para que o funcionamento do equipamento seja preciso e eficiente, é crucial obter o <strong>cilindro hidráulico basculante</strong> de fornecedor competente, que seja reconhecido pelo bom trabalho exercido.</p>",

      "<p>A empresa Hicomp Hidráulica possui experiência na área de fornecimento de <strong>cilindro hidráulico basculante</strong>, além de possuir um catálogo com diversos outros produtos. A empresa conta ainda com uma equipe de funcionários altamente treinada para fornecer um atendimento diferenciado, com foco na atenção às demandas dos clientes. Dentre os vários benefícios de se comprar na Hicomp Hidráulica estão:</p>",

      "<ul class=\"list\">",
      "<li>A qualidade dos produtos é acima da média do mercado, com garantia quanto a procedência de cada material;</li>",
      "<li>A empresa trabalha com estoque tendo, por isso, prazo de entrega imediato por possuir grande quantidade de produtos;</li>",
      "<li>A Hicomp Hidráulica conta com uma equipe de vendas com amplo poder de negociação de valores;</li>",
      "<li>Todos os consertos de máquinas e equipamentos são filmados nas bancadas, por segurança, e os produtos tem garantia de 1 ano.</li>",
      "</ul>",

      "<p>Por todos esses motivos, a empresa é o local ideal para a compra de <strong>cilindro hidráulico basculante</strong>.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-simples-efeito": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico de simples efeito</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico de simples efeito</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-01.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-02.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-03.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-04.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-05.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-06.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-07.webp",
      "/src/assets/cilindro-hidraulico-simples-efeito/cilindro-hidraulico-simples-efeito-08.webp",


    ],
    mainContent: [
      "<div class=\"mpi-content\" style=\"display: none;\">",
      "<h2>AS FUNÇÕES DO CILINDRO HIDRÁULICO DE SIMPLES EFEITO </h2>",
      "<p>O <strong>cilindro hidráulico de simples efeito</strong> é um atuador mecânico usado para proporcionar força unidirecional e, principalmente na engenharia, pode ser utilizado para finalidades diversas.</p>",
      "<p>A aplicação do <strong>cilindro hidráulico de simples efeito</strong> pode ser feita em muitos equipamentos, mas o que todos possuem em comum é o fato de serem responsáveis pela execução de tarefas que são impossíveis para o homem sem a utilização de peças e equipamentos desenvolvidos especialmente para elas.</p>",
      "<p>Entre as muitas aplicações possíveis para o <strong>cilindro hidráulico de simples efeito</strong>, ele é utilizado para a realização de tarefas pesadas, tais como o levantamento de itens de pesos muito elevados, escavações e diversas outras atividades que exigem um equipamento resistente.</p>",
      "<p>Por se tratar de uma peça fundamental para a realização de tarefas complexas, o <strong>cilindro hidráulico de simples efeito</strong> deve ser de alta qualidade e resistente, para que possa proporcionar ao seu comprador todos os benefícios dos quais tem capacidade. </p>",
      "<p>Seja qual for a finalidade para qual o <strong>cilindro hidráulico de simples efeito</strong> será aplicado, é necessário que sua aquisição seja feita em um fornecedor que se destaca no mercado pelo fornecimento de produtos e serviços de qualidade. </p>",
      "<h2>A MELHOR FORNECEDORA DE CILINDRO HIDRÁULICO DE SIMPLES EFEITO </h2>",
      "<p>A Hicomp Hidráulica iniciou suas atividades em 1995 e, desde então, fornece serviços de manutenção e comercialização de peças para o setor de equipamentos hidráulicos, sendo um deles o <strong>cilindro hidráulico de simples efeito</strong>.</p>",
      "<p>Por oferecer produtos e serviços de alta qualidade, a Hicomp Hidráulica é a escolha preferida de empresas que atuam no Mercosul, onde possui capacidade para atender. Entre as principais clientes, estão: </p>",
      "<ul class=\"list\">",
      "    <li>Tupy S.A.;</li>",
      "    <li>Mangels Industrial S.A.;</li>",
      "    <li>Lorenzetti S.A.</li>",
      "</ul>",
      "<p>Para maior comodidade do cliente, a Hicomp Hidráulica dispõe de um vasto estoque, onde as peças fornecidas são disponibilizadas para pronta entrega, algo que é essencial para o cumprimento de prazos. </p>",
      "<p>A qualidade dos produtos e serviços é garantida através da equipe de profissionais que atuam pela Hicomp Hidráulica, pois todos são especializados na área e possuem longa experiência no mercado. </p>",
      "<p>Além de os serviços serem realizados por profissionais da área, a Hicomp Hidráulica ainda oferece garantia de 12 meses para que seus clientes possam usufruir de suas aquisições sem qualquer tipo de preocupação com suporte.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-dupla-acao": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico dupla ação</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico dupla ação</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-01.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-02.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-03.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-04.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-05.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-06.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-07.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao/cilindro-hidraulico-dupla-acao-08.webp",



    ],
    mainContent: [
      "<h2>PARA QUE SERVE O CILINDRO HIDRÁULICO DUPLA AÇÃO?</h2>",
      "<p>O <strong>cilindro hidráulico dupla ação</strong> transforma a energia hidráulica em energia mecânica, e tem muita utilidade na indústria em geral. Esse equipamento é empregado nos sistemas de articulação de inúmeras máquinas. Sua aplicabilidade é eficiente e proporciona resultados primorosos, e isso só é possível devido às suas características técnicas essenciais. O <strong>cilindro hidráulico dupla ação</strong> conta com dimensões que seguem rigorosamente à norma de montagem NFPA e a ANSI B93-15-1981.</p>",
      "<p>Além do mais, o <strong>cilindro hidráulico dupla ação</strong> é fornecido com inúmeros diâmetros e possui ainda 14 tipos de montagens. Seus sistemas de amortecimento são opcionais em qualquer ponta, ou até mesmo em ambas, e seu fluido é óleo hidráulico mineral.</p>",
      "<p>Os modelos de <strong>cilindro hidráulico dupla ação</strong> foram desenvolvidos essencialmente para operações pesadas, como:</p>",
      "<ul class=\"list\">",
      "<li>Elevação de carga;</li>",
      "<li>Prensagem;</li>",
      "<li>Compressão;</li>",
      "<li>Deslocamento.</li>",
      "</ul>",
      "<h2>TODOS OS MODELOS UTILIZAM UMA VÁLVULA DE SEGURANÇA EXTERNA PARA PREVENIR EXCESSO DE PRESSÃO ACIDENTAL.</h2>",
      "<p>Por meio de um controle de qualidade extremamente rigoroso, o <strong>cilindro hidráulico dupla ação</strong> conta com camisas em ótimo padrão de alinhamento e aperfeiçoamento do acabamento da superfície. O ótimo acabamento faz com que haja menos atrito interno e, com isso, a vida útil das vedações é prolongada.</p>",
      "<p>O <strong>cilindro hidráulico dupla ação</strong> conta com haste de aço de alta fortaleza, cromado e polido, que tem como objetivo garantir uma superfície lisa e com resistência a risco de sulcos. Tudo isso garante uma boa vedação.</p>",
      "<p>A Hicomp Hidráulica comércio atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>cilindro hidráulico dupla ação</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários dos serviços e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto com qualidade e confiança. A Hicomp Hidráulica trabalha sempre com muita seriedade e profissionalismo para manter seus clientes satisfeitos.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-dupla-acao_preco": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico dupla ação preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico dupla ação preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-01.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-02.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-03.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-04.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-05.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-06.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-07.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-08.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-09.webp",
      "/src/assets/cilindro-hidraulico-dupla-acao_preco/cilindro-hidraulico-dupla-acao-preco-10.webp",



    ],
    mainContent: [
      "<h2>CILINDRO HIDRÁULICO DUPLA AÇÃO PREÇO. INDISPENSÁVEL PARA DIFERENTES MAQUINÁRIOS</h2>",
      "<p>O <strong>cilindro hidráulico dupla ação preço</strong> tem como principal responsabilidade converter a força hidráulica em mecânica, o que permite mais desempenho de equipamentos industriais e da construção civil, entre eles:</p>",
      "<ul class=\"list\">",
      "<li>Retroescavadeiras;</li>",
      "<li>Prensas;</li>",
      "<li>Veículos de transporte;</li>",
      "<li>Mecanismos de elevação.</li>",
      "</ul>",
      "<p>Por ter a atribuição de conferir mais potência ao equipamento, o <strong>cilindro hidráulico dupla ação preço</strong> é considerado um dispositivo primordial para empresas que almejam atingir a máxima qualidade de eficiência dos seus maquinários.</p>",
      "<h2>CONFIRA MAIS ESPECIFICIDADES DO CILINDRO HIDRÁULICO DUPLA AÇÃO PREÇO</h2>",
      "<p>O <strong>cilindro hidráulico dupla ação preço</strong> por favorecer a performance dos equipamentos é um produto que certamente traz impactos positivos no que se refere à produção, que é incrementada por ele por elevar a potência dos maquinários.</p>",
      "<p>Além disso, o <strong>cilindro hidráulico dupla ação preço</strong> atua em alta velocidade, possibilitando desta maneira mais agilidade de desenvolvimento operacionais dos equipamentos, gerando assim elevação da produtividade e ganho de tempo.</p>",
      "<p>Outra característica importante do <strong>cilindro hidráulico dupla ação preço</strong> é a sua fácil aplicação, por ser um dispositivo de dimensão reduzida, que permite uma inserção rápida e correto. Ademais, ele conta com diversas opções de tamanho, o que assegura uma aplicação perfeita de acordo com as necessidades de cada tipo de maquinário.</p>",
      "<p>O cilindro hidráulico dupla ação conta com uma excepcional qualidade em termos de vedação, o que evita perda de fluidos e danos. O dispositivo também possui elementos que conferem um ótimo alinhamento, fator que proporciona uma elevada desempenho.</p>",
      "<p>Esta modalidade de cilindro hidráulico conta com autolubrificação, atributo que diminui a necessidade de manutenção. A alta resistência desta categoria de cilindro é outra vantagem, que permite que ele seja aplicado em ambiente agressivos como o industrial sem que haja danos em sua estrutura.</p>",
      "<p>Este tipo de cilindro por ser mecanismo de lubrificação eficiente também evita danificações precoces de seus componentes, o que faz dele um produto de vasta durabilidade.</p>",
      "<p>O cilindro hidráulico dupla ação, além de ter uma inserção facilitada também permite a remoção de modo simples, o que traz mais qualidade e rapidez aos processos produtivos das empresas.</p>",
      "<h2>BUSCANDO UMA EMPRESA DE RENOME EM CILINDRO HIDRÁULICO DUPLA AÇÃO PREÇO?</h2>",
      "<p>A Hicomp Hidráulica angariou destaque no mercado pela excelência de seus cilindros hidráulicos, bombas, atuadores, entre outros produtos.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-empilhadeira": {
    introduction:
      "  <p>Se você está procurando por <strong>cilindro hidráulico empilhadeira</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico empilhadeira</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-01.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-02.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-03.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-04.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-05.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-06.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-07.webp",
      "/src/assets/cilindro-hidraulico-empilhadeira/cilindro-hidraulico-empilhadeira-08.webp",



    ],
    mainContent: [
      "<h2>ONDE ENCONTRAR UM CILINDRO HIDRÁULICO EMPILHADEIRA?</h2>",
      "<p>A Hicomp Hidráulica é uma empresa especializada em <strong>cilindro hidráulico empilhadeira</strong> e atua no mercado de comércio e manutenção de produtos óleo-hidráulicos. </p>",
      "<p>Os fabricantes com os quais a Hicomp Hidráulica trabalham são de altíssima confiança e fazem com que os produtos adquiridos pelos clientes sejam os melhores do mercado. A empresa trabalha somente com marcas renomadas e conhecidas no mercado de <strong>cilindro hidráulico empilhadeira</strong>, tais como:</p>",
      "<ul class=\"list\">",
      "<li>Vickers;</li>",
      "<li>Rexroth;</li>",
      "<li>Parker;</li>",
      "<li>HDA.</li>",
      "</ul>",
      "<p>Os serviços de manutenção no <strong>cilindro hidráulico empilhadeira</strong> disponibilizados pela Hicomp Hidráulica podem ser realizados diretamente na própria empresa ou em campo. Toda a solicitação é feita por meio de contato telefônico. </p>",
      "<p>Um dos muitos benefícios de se contar com o <strong>cilindro hidráulico empilhadeira</strong> da Hicomp Hidráulica é que a empresa é formada por engenheiros e técnicos, todos com mais de dez anos de experiência no mercado de <strong>cilindro hidráulico empilhadeira</strong>. </p>",
      "<p>Todas as atividades desenvolvidas pela Hicomp Hidráulica são baseadas no princípio do atendimento personalizado e totalmente adequado às necessidades que seus clientes apresentarem. Sempre seguindo as demandas que aparecem, sem um atendimento padrão, mas sim tornando cada atendimento especial e cada cliente único como tem de ser. Outra vantagem encontrada pelos clientes ao adquirirem equipamentos com a Hicomp Hidráulica é que todo o estoque da empresa é a pronta entrega, ou seja, os clientes não precisarão ficar esperando muito tempo para ter seus pedidos em mãos. </p>",
      "<h2>O QUE É UM CILINDRO HIDRÁULICO EMPILHADEIRA?</h2>",
      "<p>As empilhadeiras são utilizadas para realizar o transporte, carga e descarga de mercadorias. Fundamental principalmente em galpões, distribuidoras, comércios e outros, a empilhadeira pode ser encontrada no mercado em três diferentes tipos: elétrica, manual ou a combustão. </p>",
      "<p>Diante disso, uma peça essencial para que a empilhadeira possa funcionar corretamente é o cilindro hidráulico. Conhecido também como motor hidráulico, o <strong>cilindro hidráulico empilhadeira</strong> é localizado no pistão da empilhadeira e desempenha um papel extremamente fundamental para todo o sistema de articulação do equipamento.</p>",
      "<p>Para garantir o perfeito funcionamento do <strong>cilindro hidráulico empilhadeira</strong>, é ideal que haja uma manutenção preventiva do cilindro para poder checar todo o fluido e o óleo que são fornecidos ao cilindro. A Hicomp Hidráulica é uma empresa especializada no assunto e, com toda a equipe extremamente capacitada que possui, não decepciona. </p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-flangeado": {
    introduction:
      "  <p>Se você está procurando por <strong>cilindro hidráulico flangeado</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico flangeado</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-01.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-02.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-03.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-04.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-05.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-06.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-07.webp",
      "/src/assets/cilindro-hidraulico-flangeado/cilindro-hidraulico-flangeado-08.webp",



    ],
    mainContent: [
      "<h2>OS DIFERENCIAIS DO CILINDRO HIDRÁULICO FLANGEADO</h2>",
      "<p>Os cilindros hidráulicos são peças presentes nos mais variados tipos de equipamentos utilizados por diversos ramos da indústria e são fundamentais para seu pleno funcionamento. Por serem amplamente utilizados, podem ser encontrados cilindros de vários tipos, sendo o <strong>cilindro hidráulico flangeado</strong> um deles. </p>",
      "<p>A principal função que o <strong>cilindro hidráulico flangeado</strong> e demais tipos de cilindro possuem é a de gerar movimento, força ou energia mecânica, algo que é possível graças à presença de um pistão no interior do item, que é movimentado de acordo com a entrada e saída de fluídos hidráulicos. </p>",
      "<p>O <strong>cilindro hidráulico flangeado</strong> é um dos tipos de cilindros hidráulicos que podem ser encontrados no mercado e se destacam por oferecer diferenciais que não são encontrados nos demais cilindros encontrados à venda. </p>",
      "<p>Entre os diferenciais possuídos pelo <strong>cilindro hidráulico flangeado</strong>, um dos que mais se destaca é a sua alta capacidade de resistência, pois trata-se de um produto robusto e que pode ser aplicado para a execução de atividades mais pesadas que exigem mais de um equipamento. </p>",
      "<p>Através da compra e utilização de um <strong>cilindro hidráulico flangeado</strong>, o comprador tem à sua disposição um equipamento muito resistente, durável e versátil. Todas estas características fazem com que seja indispensável para os processos de produção de diversos negócios. </p>",
      "<h2>ONDE FAZER A AQUISIÇÃO DE CILINDRO HIDRÁULICO FLANGEADO?</h2>",
      "<p>Para que seja possível extrair o maior número de benefícios da compra e utilização de um <strong>cilindro hidráulico flangeado</strong>, é indispensável que a aquisição seja feita na Hicomp Hidráulica, empresa que é referência no mercado. </p>",
      "<p>Presente no mercado desde 1995, a Hicomp Hidráulica leva para o Brasil e todo o Mercosul diversas vantagens que não são encontradas em qualquer outro estabelecimento do ramo. São elas: </p>",
      "<ul class=\"list\">",
      "<li>Vasto estoque;</li>",
      "<li>Marcas conceituadas;</li>",
      "<li>Bancada de testes.</li>",
      "</ul>",
      "<p>As condições de pagamento oferecidas pela empresa são negociáveis e flexíveis, para que assim seja possível que cada cliente faça o melhor negócio de acordo com seu orçamento, sem que para isto seja preciso abrir mão da qualidade.</p>",
      "<p>Todos os elementos presentes na Hicomp Hidráulica foram pensados e inseridos com o objetivo de proporcionar aos seus consumidores uma experiência completa e proveitosa, que possibilite a melhora do seu cotidiano. </p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "cilindro-hidraulico-industrial": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico industrial</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico industrial</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-01.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-02.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-03.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-04.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-05.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-06.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-07.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-08.webp",
      "/src/assets/cilindro-hidraulico-industrial/cilindro-hidraulico-industrial-09.webp",

    ],
    mainContent: [
      "<h2>AS VANTAGENS DO CILINDRO HIDRÁULICO INDUSTRIAL</h2>",
      "<p>O <strong>cilindro hidráulico industrial</strong> trata-se de um equipamento altamente resistente que pode ser confeccionado em aço comum ou aço cromado, oferecendo ao seu comprador maior versatilidade e possibilidade de adequação a finalidades específicas.</p>",
      "<p>Muito popular no mercado, o <strong>cilindro hidráulico industrial</strong> pode ser utilizado em vários ramos distintos da indústria e no comércio para a realização de diferentes trabalhos que normalmente não são possíveis sem o auxílio de máquinas. </p>",
      "<p>Formado por componentes diferentes que são fundamentais para que possa ser resistente e eficiente, o <strong>cilindro hidráulico industrial</strong> é projetado para ser forte o suficiente para levantar grandes pesos e aguentar longas jornadas de trabalho.</p>",
      "<p>Em sua composição, o <strong>cilindro hidráulico industrial</strong> conta com um par de guias, vedações, êmbolo, anel raspador, tomada de óleo, flange dianteiro, conexões e câmaras da haste e pode ser encontrado no mercado em formas e modelos diversos, tais como o cilindro telescópio, dupla ação e haste passante.</p>",
      "<p>Independentemente da finalidade para qual o <strong>cilindro hidráulico industrial</strong> será adquirido, sua compra deve ser feita em um fornecedor de qualidade, para que assim o comprador possa usufruir de um produto eficiente.</p>",
      "<h2>ONDE ENCONTRAR CILINDRO HIDRÁULICO INDUSTRIAL? </h2>",
      "<p>A Hicomp Hidráulica está atuando no mercado de <strong>cilindro hidráulico industrial</strong> desde 1995, e dentro de seus anos de atuação na área tem trabalhado para entregar os melhores resultados, para que seus clientes de todo o Mercosul possam usufruir de produtos e serviços eficientes.</p>",
      "<p>Para garantir prazos de entrega que suprem as necessidades de seus clientes, a Hicomp Hidráulica conta com um vasto e completo estoque composto por peças dos melhores fabricantes do mercado.</p>",
      "<p>Por oferecer condições de pagamento flexíveis, a Hicomp Hidráulica permite que seus clientes negociem e optem pela forma que mais se encaixa em seus planos.</p>",
      "<p>O fornecimento dos melhores produtos e serviços é assegurado, pois a Hicomp Hidráulica trabalha com as seguintes marcas: </p>",
      "<ul class=\"list\">",
      "<li>Vickers;</li>",
      "<li>Eaton Corporation;</li>",
      "<li>Parker Hannifin.</li>",
      "</ul>",
      "<p>Todos os funcionários que atuam pela Hicomp Hidráulica são altamente competentes, pois são especializados na área, recebem treinamentos periodicamente e possuem mais de 10 anos de experiência no exercício de suas funções. </p>",
      "<p>As melhores características e condições de pagamento são encontradas na Hicomp Hidráulica, a empresa que reúne as soluções mais eficientes para a execução de projetos das mais variadas áreas.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-retroescavadeira": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico para retroescavadeira</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico para retroescavadeira</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-01.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-02.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-03.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-04.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-05.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-06.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-07.webp",
      "/src/assets/cilindro-hidraulico-retroescavadeira/cilindro-hidraulico-retroescavadeira-08.webp",
    ],
    mainContent: [
      "<h2>O QUE É CILINDRO HIDRÁULICO PARA RETROESCAVADEIRA?</h2>",
      "<p>Os cilindros são equipamentos manuseados principalmente para aprimorar a qualidade da produção dos produtos, ampliando assim o rendimento de suas máquinas. Dessa forma, além de o serviço ficar mais ágil, é possível alcançar maior qualidade nos resultados finais e ampliAR a quantidade de resultados obtidos. A função básica de um cilindro hidráulico é modificar a força, potência ou energia hidráulica em força, potência ou energia mecânica.</p>",
      "<p>Os cilindros são utilizados em inúmeros tipos de setores industriais, e na construção civil é possível se deparar com o <strong>cilindro hidráulico para retroescavadeira</strong>.</p>",
      "<p>A inspeção do <strong>cilindro hidráulico para retroescavadeira</strong> deve ocorrer anualmente, para que ele permaneça em perfeitas condições e, desse modo, as atividades desenvolvidas podem alcançar melhor os níveis de qualidade do produto. </p>",
      "<h2>ONDE PODEMOS UTILIZAR O CILINDRO HIDRÁULICO PARA RETROESCAVADEIRA?</h2>",
      "<p>O <strong>cilindro hidráulico para retroescavadeira</strong> provoca uma força através de pressurização de certos tipos de líquido, como por exemplo o óleo e o fluído hidráulico que é pressurizado (recebe pressão) por um conjunto bomba-motor elétrico. Este equipamento é fácil de ser instalado e pode causar movimentos de forma precisa, e esse é um dos motivos do aumento da busca pelos cilindros hidráulicos para retroescavadeira. Eles são aplicados em diversos setores industriais, por exemplo:</p>",
      "<ul class=\"list\">",
      "<li>Siderúrgicas;</li>",
      "<li>Metalúrgicas</li>",
      "<li>Mecânicas;</li>",
      "<li>Construção civil.</li>",
      "</ul>",
      "<h2>ESTE TIPO DE EQUIPAMENTO DEVE SER FABRICADO COM MATÉRIA-PRIMA DE QUALIDADE E CONTENDO TODAS AS NORMAS E ESPECIFICAÇÕES DO MERCADO, GARANTINDO A QUALIDADE DO CILINDRO HIDRÁULICO PARA RETROESCAVADEIRA</h2>",
      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>cilindro hidráulico para retroescavadeira</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários dos serviços e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto com qualidade e confiança.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-para-tratores": {
    introduction:
      " <p>Se você está procurando por <strong>cilindro hidráulico para tratores</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico para tratores</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-01.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-02.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-03.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-04.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-05.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-06.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-07.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-08.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-09.webp",
      "/src/assets/cilindro-hidraulico-para-tratores/cilindro-hidraulico-tratores-10.webp",
    ],
    mainContent: [
      "<h2>CILINDRO HIDRÁULICO PARA TRATORES - PRIMORDIAL PARA UM FUNCIONAMENTO EFICIENTE</h2>",
      "<p>O <strong>cilindro hidráulico para tratores</strong> é um dispositivo de alta relevância para a performance do veículo, pois é por meio dele que ele ganha a potência e a força necessária, o que possibilita que o maquinários operem em sua plena capacidade, fator determinante para a qualidade das atividades produtivas.</p>",
      "<p>Por ser responsável pelo alto desempenho, o <strong>cilindro hidráulico para tratores</strong> é um produto que não pode faltar em empresas dos mais diversos campos do mercado que atuam como veículo, como é caso de:</p>",
      "<ul class=\"list\">",
      "<li>Empresas da construção civil;</li>",
      "<li>Mineradoras;</li>",
      "<li>Agroindustriais.</li>",
      "</ul>",
      "<h2>CONFIRA MAIS CARACTERÍSTICAS IMPORTANTES DO CILINDRO HIDRÁULICO PARA TRATORES</h2>",
      "<p>O <strong>cilindro hidráulico para tratores</strong> pode ser aplicado no modelo simples e de dupla ação. Ambos são altamente eficientes para a operação do veículo, pois trabalham em altas velocidade, atributo que confere uma resposta rápida dos maquinários, o que culmina no ganho de produtividade, fator que gera economia e eficiência aos processos de produção de indústrias, empresas do campo construtivo, organizações agrícolas, entre outras.</p>",
      "<p>Ademais, o <strong>cilindro hidráulico para tratores</strong> possui design compacto e excelente acabamento, que torna a sua utilização bastante prática, bem como a sua remoção, facilitando assim o dia a dia das empresas.</p>",
      "<p>O <strong>cilindro hidráulico para tratores</strong> conta com elevada resistência a impactos, altas temperaturas, entre outros fatores agressivos, o que o torna um dispositivo de longevidade acentuada, sendo, portanto, um equipamento que é sinônimo de economia.</p>",
      "<p>Além disso, esta categoria de cilindro tem uma manutenção simples, qualidade decorrente principalmente por ele não exigir lubrificação, pois ele possui um sistema automatizado, que além de garantir um perfeito funcionamento também ajuda a proteger com eficiência as peças e componente internos, que terão menos ocorrência de atritos, o que evita danos prematuros.</p>",
      "<p>Outra qualidade do cilindro hidráulico é que ele pode operar por um tempo prolongado, pois é altamente resistente à fadiga, o que faz dele um produto de elevada qualidade de performance.</p>",
      "<h2>COMPRE CILINDRO HIDRÁULICO PARA TRATORES DE ALTO PADRÃO DE QUALIDADE</h2>",
      "<p>A Hicomp Hidráulica é reconhecida no segmento por oferecer o que há de mais sofisticado e eficiente em cilindros hidráulicos, atuadores, bombas, entre outros produtos.</p>",
      "<p>Com um portfólio diversificado e de alta qualidade, a Hicomp Hidráulica se destaca como uma das principais fornecedoras do mercado, atendendo às necessidades específicas de cada cliente.</p>",
      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "cilindro-hidraulico-valor": {
    introduction:
      "<p>Se você está procurando por <strong>cilindro hidráulico valor</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindro hidráulico valor</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-01.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-02.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-03.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-04.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-05.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-06.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-07.webp",
      "/src/assets/cilindro-hidraulico-valor/cilindro-hidraulico-valor-08.webp",

    ],
    mainContent: [
      "<h2>NA COMPRA DE CILINDRO HIDRÁULICO VALOR DA HICOMP SE DESTACA NO MERCADO</h2>",
      "<p>O cilindro hidráulico é um equipamento usado para transformar força hidráulica em mecânica. Basicamente ele funciona assim: em sua estrutura interna está localizado um pistão que é movimentado pela entrada e saída de óleo. Por ser um equipamento de uso frequente em determinados segmentos da indústria, na hora de comprar um <strong>cilindro hidráulico valor</strong> precisa caber no bolso do cliente.</p>",
      "<p>Importante destacar que na compra de <strong>cilindro hidráulico valor</strong> precisa ser justo mas a qualidade do produto precisa ser de excelência. Por esse motivo, comprar na Hicomp Hidráulica é a melhor opção, já que a empresa conta com os melhores preços do mercado e fornece serviços de extrema qualidade e eficiência, sempre com respeito aos prazos de entrega e prestando toda a assistência tanto no atendimento pré quanto pós compra. A Hicomp Hidráulica atua não só no Brasil, mas em diversos países da América Latina.</p>",
      "<h2>QUEM COMPRA CILINDRO HIDRÁULICO VALOR JUSTO DA HICOMP HIDRÁULICA LEVA DIVERSAS VANTAGENS</h2>",
      "<p>A Hicomp Hidráulica atua com excelência e eficiência há anos. A empresa tem uma estrutura de excelência e ótimos funcionários:</p>",
      "<ul class=\"list\">",
      "<li>Sua sede possui bancadas de testes, de 30 a 100 cavalos, com estrutura moderna, de ponta;</li>",
      "<li>A equipe da Hicomp Hidráulica é formada por engenheiros e técnicos especializados, com mais de dez anos de experiência na área;</li>",
      "<li>A empresa possui produtos em estoque e dá garantia de 1 anos em todos os serviços e produtos.</li>",
      "</ul>",
      "<p>No caso da compra de <strong>cilindro hidráulico valor</strong> da Hicomp Hidráulica é ótimo, mas a empresa também conta com a vantagem de oferecer um produto que supre com maestria o que o cliente deseja. No caso do cilindro hidráulico, o equipamento é formado por diversas partes como haste, guia da haste, êmbolo, anel raspador, conexão, flange dianteiro, o cilindro, dentre outras partes.</p>",
      "<p>Ao comprar o <strong>cilindro hidráulico valor</strong> justo que a Hicomp Hidráulica fornece, o cliente tem a certeza da procedência do equipamento e isso dá a garantia de que a estrutura vai funcionar com excelência, que todas as partes unidas funcionam de forma coesa, sem que a peça apresente problemas e precise ser substituída em um curto intervalo de tempo, o que faz valer a pena comprar o <strong>cilindro hidráulico valor</strong> justo da Hicomp Hidráulica.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "cilindros-hidraulicos-catalogo": {
    introduction:
      " <p>Se você está procurando por <strong>cilindros hidráulicos catálogo</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>cilindros hidráulicos catalogo</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-01.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-02.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-03.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-04.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-05.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-06.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-07.webp",
      "/src/assets/cilindros-hidraulicos-catalogo/cilindros-hidraulicos-catalogo-08.webp",

    ],
    mainContent: [
      "<h2>POR QUE INVESTIR EM CILINDROS HIDRÁULICOS CATÁLOGO É ALGO QUE VALE A PENA?</h2>",
      "<p>Um cilindro hidráulico é uma solução extremamente comum utilizada por indústrias de diferentes segmentos. Estes equipamentos são conhecidos principalmente por facilitar todos os processos que envolvem força mecânica por meio de sistemas que utilizam toda a energia que vem da pressão dos fluidos.</p>",
      "<p>Os <strong>cilindros hidráulicos catálogo</strong> são produtos que geralmente demandam um uso constante em indústrias e, por essa razão, acabam sendo extremamente requisitados.</p>",
      "<p>Fora os fatores citados, os <strong>cilindros hidráulicos catálogo</strong> ainda são responsáveis por realizar todo o processo que envolve o funcionamento da alta pressão e, sendo assim, o usuário pode se deparar com grandes riscos caso ele não se atente a uma manutenção adequada e dentro de um período específico.</p>",
      "<p>Os <strong>cilindros hidráulicos catálogo</strong> são fabricados e pensados para trabalhar em situações extremas, porém, com o passar do tempo e depois de muito uso, a vida útil das peças pode ser um pouco prejudicada. Isso faz com que os <strong>cilindros hidráulicos catálogo</strong> passem a precisar de serviços de manutenção. Com a Hicomp Hidráulica eles terão o serviço completo.</p>",
      "<h2>ENCONTRAR CILINDROS HIDRÁULICOS CATÁLOGO É NA HICOMP HIDRÁULICA</h2>",
      "<p>A Hicomp Hidráulica é uma empresa especializada em <strong>cilindros hidráulicos catálogo</strong> que está no mercado desde 1995 atendendo a toda a região do Mercosul.</p>",
      "<p>Com um estoque de <strong>cilindros hidráulicos catálogo</strong> a pronta entrega, a Hicomp Hidráulica é uma empresa que busca cumprir com seus prazos para poder manter a satisfação de seus clientes extremamente elevada, como sempre foi.</p>",
      "<p>A equipe de vendas da Hicomp Hidráulica conta com total poder de negociação de valores, logo, caso os preços dos cilindros hidráulicos não couberem no orçamento das empresas contratantes, a Hicomp Hidráulica consegue facilitar as formas de pagamento para que nenhum cliente deixe de ter acesso a produtos tão excelentes como os <strong>cilindros hidráulicos catálogo</strong>.</p>",
      "<p>Os serviços de conserto de <strong>cilindros hidráulicos catálogo</strong> e de manutenção são todos testados e filmados na bancada de testes da empresa e, como todos os produtos novos, também possuem um ano de garantia. Deste modo, os clientes saberão que poderão contar com a Hicomp Hidráulica sempre que precisarem, após o processo de venda.</p>",
      "<p>Entre os principais clientes da Hicomp Hidráulica, estão:</p>",
      "<ul class=\"list\">",
      "<li>Tupy S.A;</li>",
      "<li>Mangels Industrial S.A;</li>",
      "<li>Comércio de Ferro Arevalo & Junior Eireli.</li>",
      "</ul>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "reforma-de-cilindros-hidraulicos": {
    introduction:
      "<p>Se você está procurando por <strong>reforma de cilindros hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>reforma de cilindros hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-01.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-02.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-03.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-04.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-05.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-06.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-07.webp",
      "/src/assets/reforma-de-cilindros-hidraulicos/reforma-cilindros-hidraulicos-08.webp",

    ],
    mainContent: [
      "<h2>AS VANTAGENS DOS SERVIÇOS DE REFORMA DE CILINDROS HIDRÁULICOS</h2>",
      "<p>A contratação de serviços voltados para a <strong>reforma de cilindros hidráulicos</strong> é uma ação altamente recomendada, pois permite que o usuário continue usufruindo de uma parte essencial de um equipamento que pode ser utilizado em diversos ramos da indústria.</p>",
      "<p>Através da <strong>reforma de cilindros hidráulicos</strong> será possível continuar a usufruir dos benefícios do equipamento e ainda assim economizar dinheiro, pois o preço de reforma é consideravelmente mais em conta que o de substituição.</p>",
      "<p>Além de representar uma grande economia, a <strong>reforma de cilindros hidráulicos</strong> também garante que os processos de produção não sofrerão interrupções, portanto não ocorrerá qualquer tipo de alteração negativa na rotina já estabelecida.</p>",
      "<p>Por se tratar de um equipamento responsável por gerar força e movimento, a execução de manutenções periódicas, tais como a <strong>reforma de cilindros hidráulicos</strong>, é essencial para que o maquinário atinja todo o seu potencial e ofereça o maior número de benefícios possível.</p>",
      "<p>No momento de efetuar a <strong>reforma de cilindros hidráulicos</strong> é importante optar por uma empresa que seja referência na execução deste tipo de serviço, pois uma contratação competente garantirá os melhores resultados ao mesmo tempo que evitará a ocorrência de problemas.</p>",
      "<h2>ONDE CONTRATAR SERVIÇOS DE REFORMA DE CILINDROS HIDRÁULICOS?</h2>",
      "<p>A aquisição de serviços de <strong>reforma de cilindros hidráulicos</strong> de alta qualidade é possível apenas na Hicomp Hidráulica, uma empresa que está presente no mercado desde 1995 e se tornou referência neste tipo de serviço.</p>",
      "<p>Os serviços da Hicomp Hidráulica são destaque no mercado, pois contam com:</p>",
      "<ul class=\"list\">",
      "<li>Profissionais com mais de 10 anos de experiência;</li>",
      "<li>Bancada de testes;</li>",
      "<li>Garantia de 12 meses.</li>",
      "</ul>",
      "<p>Por disponibilizar todos estes benefícios, a Hicomp Hidráulica é capaz de atender não só o Brasil, como também toda a região do Mercosul e levar para todos estes lugares os melhores e mais eficientes resultados.</p>",
      "<p>A equipe de vendas que atua pela Hicomp Hidráulica é treinada para oferecer as soluções mais completas de maneira ágil e com as condições de pagamento mais flexíveis, para que assim seja possível se adequar aos mais diversos orçamentos.</p>",
      "<p>Os prazos são tratados como prioridade para a empresa, e para cumpri-los a Hicomp Hidráulica dispõe de um vasto estoque e disponibiliza peças para pronta entrega.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-controle-direcional": {
    introduction:
      "<p>Se você está procurando por <strong>válvula controle direcional</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula controle direcional</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-01.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-02.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-03.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-04.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-05.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-06.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-07.webp",
      "/src/assets/valvula-controle-direcional/valvula-controle-direcional-08.webp",

    ],
    mainContent: [
      "<h2>O QUE É UMA VÁLVULA CONTROLE DIRECIONAL?</h2>",
      "<p>A <strong>válvula controle direcional</strong> consiste num corpo com passagens internas que são conectados e desconectados por uma parte móvel. Na <strong>válvula controle direcional</strong> e na grande maioria das válvulas hidráulicas industriais, a parte móvel é o carretel. Esses são os tipos mais comuns das válvulas direcionais usados em hidráulica industrial. A posição normal de uma <strong>válvula controle direcional</strong> é a posição em que se encontram os elementos internos, ou seja, quando a mesma não foi acionada. Esta posição geralmente é mantida pela força de uma mola.</p>",
      "<h2>IDENTIFICAÇÃO DA VÁLVULA CONTROLE DIRECIONAL</h2>",
      "<p>A <strong>válvula controle direcional</strong> é representada nos circuitos hidráulicos através de símbolos gráficos. Para a identificação da simbologia devemos considerar:</p>",
      "<ul class=\"list\">",
      "<li>Número de posições;</li>",
      "<li>Número de vias;</li>",
      "<li>Posição normal;</li>",
      "<li>Tipo de acionamento;</li>",
      "</ul>",
      "<h2>TIPO DE ACIONAMENTO DA VÁLVULA CONTROLE DIRECIONAL</h2>",
      "<p>O tipo de acionamento de uma válvula de controle define a sua aplicação no circuito, estes acionamentos podem ocorrer por força muscular, mecânica, pneumática, hidráulica ou elétrica. As válvulas direcionais operadas por solenoide têm certas limitações. Quando um sistema hidráulico é utilizado num ambiente úmido ou explosivo, não se deve usar solenoides comuns. Quando a vida de uma válvula direcional deve ser extremamente longa, geralmente a válvula de solenoide controlada eletricamente é inadequada.</p>",
      "<h2>A VÁLVULA DE CONTROLE DIRECIONAL DEVE SER FABRICADA COM MATÉRIA-PRIMA DE QUALIDADE E CONTENDO TODAS AS NORMAS E ESPECIFICAÇÕES DO MERCADO, GARANTINDO ASSIM SUA QUALIDADE</h2>",
      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo a melhor <strong>válvula controle direcional</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto com qualidade e confiança. A Hicomp Hidráulica trabalha sempre com muita seriedade e profissionalismo para agradar seus clientes.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-centro-aberto": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional centro aberto</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional centro aberto</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-01.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-02.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-03.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-04.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-05.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-06.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-07.webp",
      "/src/assets/valvula-direcional-centro-aberto/valvula-direcional-centro-aberto-08.webp",

    ],
    mainContent: [
      "<h2>CONHEÇA MAIS SOBRE A VÁLVULA DIRECIONAL CENTRO ABERTO</h2>",
      "<p>A <strong>válvula direcional centro aberto</strong> é um dispositivo aplicado em diversos equipamentos e sistemas de condução de produtos em lindas de produção, sendo responsável por controlar as operações e assim conferir mais segurança aos processos de produção fabril.</p>",
      "<p>A <strong>válvula direcional centro aberto</strong> é principalmente conhecida por conter diversas passagens interligadas, tais como:</p>",
      "<ul class=\"list\">",
      "<li>T;</li>",
      "<li>P;</li>",
      "<li>B;</li>",
      "<li>A.</li>",
      "</ul>",
      "<h2>CONFIRA MAIS ATRIBUTOS IMPORTANTES DA VÁLVULA DIRECIONAL CENTRO ABERTO</h2>",
      "<p>Como mencionado anteriormente, a <strong>válvula direcional centro aberto</strong> tem uma elevada importância para indústrias dos mais diferentes setore do mercado, pois é por meio dela que há um controle efetivo do fluxo, preponderante para a qualidade e segurança dos processos produtivos de maquinários e mecanismos de condução de gás, ar, produtos químicos, entre outros.</p>",
      "<p>Basicamente, a <strong>válvula direcional centro aberto</strong> tem a atribuição de efetuar diversas operações, tais como alteração de condução, partida, regulagem e paralisação, o que faz dela um dispositivo capaz de oferece o máximo de controle e precisão das operações de transporte de fluídos.</p>",
      "<p>Projetada com tecnologia arroja, a <strong>válvula direcional centro aberto</strong> possui alta eficiência em termos de performance, permitindo altas vazões com velocidade, o que impacta diretamente no aumento da produção.</p>",
      "<p>Outro atributo que corrobora a eficácia desta modalidade de válvula direcional é sua reduzida perda de carga, o que permite uma atuação em alto desempenho constante.</p>",
      "<p>Ademais, este tipo de válvula direciona trabalha com pressão elevada que pode chega a cerca de 315 bar. A excelente vedação confere elevada segurança de uso, pois evita drasticamente a ocorrência de vazamentos, impedindo assim danos aos sistemas.</p>",
      "<p>Esta categoria de válvula direcional em situações emergenciais pode ser operada por meio meio manual. A elevada capacidade de performance desta versão válvula confere aos maquinários e sistemas alta qualidade de desempenho, questão fundamental para obtenção da excelência em procedimentos produção industrial.</p>",
      "<p>Outro diferencial desta modalidade de válvula é que ela pode ser instalada de maneira individual em sub placas bem como mecanismos da categoria manifold.</p>",
      "<h2>ADQUIRA VÁLVULA DIRECIONAL CENTRO ABERTO EM UMA EMPRESA CONCEITUADA</h2>",
      "<p>A Hicomp Hidráulica conta com o que há de mais qualificado em válvulas direcionais, atuadores, bombas hidráulicas, cilindros, entre outros, todos de fabricante renomados.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-centro-fechado": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional centro fechado</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional centro fechado</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-01.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-02.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-03.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-04.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-05.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-06.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-07.webp",
      "/src/assets/valvula-direcional-centro-fechado/valvula-direcional-centro-fechado-08.webp",

    ],
    mainContent: [
      "<h2>O QUE É UMA VÁLVULA DIRECIONAL CENTRO FECHADO?</h2>",
      "<p>A <strong>válvula direcional centro fechado</strong> consiste em um equipamento com estruturas internas que se conectam e desconectam por uma parte móvel. A válvula direcional do tipo carretel é o modelo mais comum usado em hidráulica industrial mas, nesse caso, usado em corpo fechado.</p>",
      "<p>As válvulas direcionais são identificadas em circuitos hidráulicos por símbolos que identificam desde o número de posições a vias e tipo de acionamento. A <strong>válvula direcional centro fechado</strong> é mantida em posição por conta da ação de uma mola e o seu tipo de acionamento define a sua aplicação no circuito. Isso porque a <strong>válvula direcional centro fechado</strong> pode ser acionada tanto por força muscular, braçal, quanto por ação mecânica, pneumática, hidráulica ou mesmo elétrica.</p>",
      "<p>As válvulas direcionais podem ser normalmente abertas ou fechadas. Assim, quando o atuador não está energizado, o fluxo pode ou não passar através da válvula. Mas no caso das válvulas de três vias, por sempre haver uma passagem aberta através da válvula que normalmente está fechada, uma das passagens fica bloqueada quando o acionados não é energizado.</p>",
      "<p>Já a <strong>válvula direcional centro fechado</strong> tem suas vias P, T, A e B bloqueadas na posição central. Em caso de <strong>válvula direcional centro fechado</strong> o atuador para seu movimento. Isso permite, porém, que cada atuador atue individualmente no sistema, mesmo sem suprimento de força.</p>",
      "<h2>VANTAGENS E DESVANTAGENS DA VÁLVULA DIRECIONAL CENTRO FECHADO</h2>",
      "<p>Uma desvantagem do uso da <strong>válvula direcional centro fechado</strong> é que nela o fluxo de bomba não pode ser descarregado para o tanque através de válvula direcional enquanto o atuador estiver inativo.</p>",
      "<p>Também é preciso observar que sua eficiência carece de que a <strong>válvula direcional centro fechado</strong> seja obtida de fornecedor como a Hicomp Hidráulica, que assegura a qualidade de seus produtos.</p>",
      "<p>Um grande destaque do atendimento da empresa é a sua agilidade, sendo conhecida por trabalhar com extrema eficiência. Além disso:</p>",
      "<ul class=\"list\">",
      "<li>Oferece produtos de excelência com um preço justo;</li>",
      "<li>Disponibiliza aos seus vendedores a autonomia de negociação de preços, permitindo que o cliente tenha as melhores condições de pagamento;</li>",
      "<li>Possui um atendimento personalizado, ágil, de forma a atender com urgência cada solicitação dos clientes.</li>",
      "</ul>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "valvula-direcional-com-alavanca": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional com alavanca</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional com alavanca</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-01.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-02.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-03.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-04.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-05.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-06.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-07.webp",
      "/src/assets/valvula-direcional-com-alavanca/valvula-direcional-alavanca-08.webp",

    ],
    mainContent: [
      "<h2>O QUE É UMA VÁLVULA DIRECIONAL COM ALAVANCA?</h2>",
      "<p>Uma válvula direcional atua diretamente no direcionamento do fluxo de ar que os equipamentos precisam seguir. Além disso, uma válvula direcional também é responsável por regular toda a pressão que será exercida durante o circuito e também sua vazão.</p>",
      "<p>Todos os bloqueios do circuito também são previamente definidos por meio de válvulas direcionais.</p>",
      "<p>As válvulas direcionais são diretamente aplicadas em indústrias de distintos segmentos (desde a alimentícia a até a naval), mas não são padronizadas. Uma válvula direcional varia em fatores, como por exemplo:</p>",
      "<ul class=\"list\">",
      "<li>A quantidade de conexões que podem estabelecer;</li>",
      "<li>Quantidade de movimentos;</li>",
      "<li>Posição de repouso;</li>",
      "<li>Forma de acionamento;</li>",
      "<li>Pressão exercida.</li>",
      "</ul>",
      "<p>Estas válvulas direcionais são costumeiramente acionadas de maneira elétrica, por meio de comandos digitais, ou por meio de alavancas, pedais e botões.</p>",
      "<h2>CARACTERÍSTICAS DE UMA VÁLVULA DIRECIONAL COM ALAVANCA</h2>",
      "<p>Uma <strong>válvula direcional com alavanca</strong> é uma válvula direcional que contém uma alimentação, seja na sua base ou na lateral, com um acionamento por alavanca. Além de obter um efeito de trava ao acionar a alavanca, uma <strong>válvula direcional com alavanca</strong> ainda permite o controle de abertura da válvula direcional. Esta válvula permite atingir altíssimas vazões, fazendo assim com que empresas dos mais diversos segmentos e portes consigam ter seus trabalhos totalmente otimizados com uma <strong>válvula direcional com alavanca</strong>.</p>",
      "<p>Para adquirir a melhor <strong>válvula direcional com alavanca</strong> do mercado, é recomendado contar com uma empresa de confiança, que já esteja há algum tempo atuando na área e seja capaz de atender a todas as solicitações que seus clientes apresentarem no momento da aquisição.</p>",
      "<p>A Hicomp Hidráulica é uma empresa especializada em <strong>válvula direcional com alavanca</strong> e, além disso, atua no mercado de comércio e manutenção de produtos óleo-hidráulicos. A ampla gama de fabricantes da <strong>válvula direcional com alavanca</strong> faz com que seus produtos sejam de ainda mais confiança, uma vez que a empresa só trabalha com marcas que são referência no mercado de <strong>válvula direcional com alavanca</strong>. A equipe da Hicomp Hidráulica é totalmente formada por engenheiros e técnicos, todos com mais de dez anos de experiência no mercado de <strong>válvula direcional com alavanca</strong>, sempre prontos para atender a qualquer solicitação que surgir.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "valvula-direcional-eletrica": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional elétrica</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional elétrica</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-01.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-02.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-03.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-04.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-05.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-06.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-07.webp",
      "/src/assets/valvula-direcional-eletrica/valvula-direcional-eletrica-08.webp",

    ],
    mainContent: [
      "<h2>O QUE É UMA VÁLVULA DIRECIONAL ELÉTRICA?</h2>",
      "<p>Uma <strong>válvula direcional elétrica</strong> é um equipamento que compõe sistemas hidráulicos ou dependendo do modelo sistemas pneumáticos. Sendo assim, o equipamento se torna fundamental para uma série de atividades e segmentos da indústria.</p>",
      "<p>Entre as funções atribuídas a uma <strong>válvula direcional elétrica</strong> destacam-se:</p>",
      "<ul class='list'>",
      "<li>Proporcionar a vazão de fluídos sob pressões variadas;</li>",
      "<li>Responsável pela movimentação do cilindro hidráulico;</li>",
      "<li>Acionar e movimentar demais componentes que integram seu corpo como o êmbolo.</li>",
      "</ul>",
      "<p>Todos os componentes de uma <strong>válvula direcional elétrica</strong> devem estar em perfeito estado para proporcionar seu excelente desempenho, boa parte do seu corpo é confeccionada em material resistente e de durabilidade com o alumínio, ou até mesmo o aço.</p>",
      "<p>Para a aquisição da <strong>válvula direcional elétrica</strong> é preciso pesquisar por empresas especializadas na comercialização de equipamentos deste segmento, tendo total garantia da qualidade e segurança da peça, aproveitando ao máximo de seu potencial.</p>",
      "<h2>HICOMP HIDRÁULICA ESPECIALIZADA NA COMERCIALIZAÇÃO DE VÁLVULA DIRECIONAL ELÉTRICA E DEMAIS MODELOS</h2>",
      "<p>Desde 1995 atuando no ramo de comércio e manutenção de equipamentos como a <strong>válvula direcional elétrica</strong>, a HICOMP HIDRÁULICA conta com um amplo estoque de itens das mais importantes marcas e fabricantes do setor de óleo-hidráulico.</p>",
      "<p>Os serviços prestados pela empresa como a manutenção de <strong>válvula direcional elétrica</strong> e em outros equipamentos, são executados pela sua equipe dentro da própria empresa ou no local solicitado pelo contratante.</p>",
      "<p>Destaca-se por dispor de um estoque diversificado disponibilizando produtos a pronta entrega. Conta com o auxílio de uma equipe de vendas que atua na negociação de valores. Fornece a garantia de seus serviços e consertos prestados, todos os procedimentos são testados e filmados em suas bancadas de testes, com a garantia de um ano.</p>",
      "<p>Além disso, dispõe de uma equipe composta por engenheiros formados e técnicos experientes dedicados ao desenvolvimento de suas atividades estando de acordo com seus princípios para oferecer um atendimento personalizado, atendendo adequadamente às necessidades de prestação de serviços e produtos de acordo com cada cliente.</p>",
      "<p>A hicomp hidráulica está localizada em são paulo, mas atende em todo o mercosul. oferecendo as melhores soluções em <strong>válvula direcional elétrica</strong> e demais equipamentos de óleo-hidráulico para suprir a urgência de seus clientes.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-hidraulica-pilotada": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional hidráulica pilotada</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional hidráulica pilotada</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-01.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-02.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-03.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-04.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-05.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-06.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-07.webp",
      "/src/assets/valvula-direcional-hidraulica-pilotada/valvula-direcional-hidraulica-pilotada-08.webp",

    ],
    mainContent: [
      "<h2>VÁLVULA DIRECIONAL HIDRÁULICA PILOTADA, QUAL A SUA FUNÇÃO?</h2>",
      "<p>A <strong>válvula direcional hidráulica pilotada</strong> é composta por um conjunto de passagens internas que podem ser interligadas ou não a uma parte móvel, sendo que na maioria dos modelos de válvulas esta parte é denominada de carretel.</p>",
      "<p>Uma <strong>válvula direcional hidráulica pilotada</strong> é um dos modelos mais utilizados de válvulas pela indústria, oferecendo importantes funcionalidades que visam facilitar uma série de atividades, com total aproveitamento de seu desempenho.</p>",
      "<p>São partes que compõem uma válvula hidráulica pilotada :</p>",
      "<ul class='list'>",
      "<li>Carretéis;</li>",
      "<li>Duas sapatas laterais;</li>",
      "<li>Piloto.</li>",
      "</ul>",
      "<p>Os carretéis exerce uma função importante na <strong>válvula direcional hidráulica pilotada</strong>, responsáveis pela movimentação da pressão de líquidos hidráulicos. O piloto por sua vez faz pressão nas sapatas laterais do carretel, podendo ainda ser interligada a uma sapata ou um pistão.</p>",
      "<p>Recomenda-se a aquisição da <strong>válvula direcional hidráulica pilotada</strong> em empresas que comercializam as melhores fabricantes de válvulas, oferecendo a garantia de qualidade do equipamento e assistência técnica.</p>",
      "<h2>HIPCOMP HIDRÁULICA A MELHOR SOLUÇÃO EM VÁLVULA DIRECIONAL HIDRÁULICA PILOTADA</h2>",
      "<p>Quem necessita adquirir a válvula direcional  hidráulica pilotada não pode deixar de conferir as opções oferecidas pela HICOMP HIDRÁULICA, uma empresa que atua desde 1995 no mercado.</p>",
      "<p>Especializada em soluções e produtos de óleo-hidráulico, além da comercialização de <strong>válvula direcional hidráulica pilotada</strong>, também dispõe de manutenção.</p>",
      "<p>A manutenção e  os todos serviços são executados pela HICOMP HIDRÁULICA são desempenhados na própria empresa, ou caso for solicitado pelo contratante podem ser realizados em campo.</p>",
      "<p>Apresenta um vasto estoque com produtos variados, proporcionando a oportunidade da pronta entrega. Além disso, prioriza o atendimento personalizado e  oferece ótimas condições de pagamentos, que podem ser negociadas com seu departamento de vendas.</p>",
      "<p>Seus serviços de consertos são avaliados, testados e filmados em suas bancadas de testes, oferecendo a garantia dos procedimentos em cada tipo de equipamento.</p>",
      "<p>Seus engenheiros são formados e os técnicos com anos de experiência de atuação no mercado, capacitados para executar com perfeição todos os serviços pela empresa oferecidos.</p>",
      "<p>Com atendimento de alta qualidade, a empresa tem uma sede em São Paulo, fazendo-se presente no Mercosul, sempre com as melhores soluções em equipamentos e produtos de óleo-hidráulico, sem esquecer de mencionar a qualidade da prestação de serviços.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-hidraulica-preco": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional hidráulica preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional hidráulica preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-01.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-02.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-03.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-04.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-05.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-06.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-07.webp",
      "/src/assets/valvula-direcional-hidraulica-preco/valvula-direcional-hidraulica-preco-08.webp",

    ],

    mainContent: [
      "<h2>CONFIRA ALGUMAS DAS PRINCIPAIS MODALIDADES DE VÁLVULA DIRECIONAL HIDRÁULICA PREÇO</h2>",
      "<p>A <strong>válvula direcional hidráulica preço</strong> é um dispositivo que tem com responsabilidade efetuar o controle da direção do fluxo de fluidos, tais como ar comprimido, gases, água, entre outros, comuns em diversos campos industriais, com química, petroquímicas, farmacêuticas, etc.</p>",
      "<p>Há variadas versões de <strong>válvula direcional hidráulica preço</strong>, entre elas:</p>",
      "<ul class='list'>",
      "<li>Válvulas direcionais hidráulicas de dupla via;</li>",
      "<li>Válvulas direcionais hidráulicas de três vias;</li>",
      "<li>Válvulas direcionais hidráulicas de quatro vias;</li>",
      "<li>Válvulas hidráulicas de retenção.</li>",
      "</ul>",
      "<h2>ENTENDA MAIS SOBRE A VÁLVULA DIRECIONAL HIDRÁULICA PREÇO</h2>",
      "<p>A <strong>válvula direcional hidráulica preço</strong> é formada por componentes como molas, corpo, êmbolo, acionadores, alavancas, entre outros. Construída com matérias-primas como aço, ferro e alumínio, esta modalidade de válvula possui uma elevada capacidade de resistência, o que a torna eficiente para ambientes operacionais fabris.</p>",
      "<p>Ademais, a <strong>válvula direcional hidráulica preço</strong> contribui muito para o pleno desenvolvimento dos mecanismos de transporte, pois é um elemento que atua no controle de vazão, pressão, alternância de direção, paradas, entre outros, que tornam os sistema seguros e eficientes.</p>",
      "<p>Com excepcional qualidade em vedação, a <strong>válvula direcional hidráulica preço</strong> é muito confiável. Além disso, ele é projetada segundo padrões rigorosos de normas técnicas, que atestam a sua segurança de aplicação.</p>",
      "<p>De design eficiente, a válvula direcional hidráulica é um equipamento de simples aplicação e remoção quando há necessidade. Por ter uma resistência ímpar contra abrasão, impactos, corrosão, entre outros fatores, este tipo de dispositivo de controle de fluxo possui uma vida útil extensa, evitando assim trocas constantes, gerando uma excelente economia.</p>",
      "<p>Outro aspecto relevante desta modalidade de válvula e sua velocidade, que possibilita uma vazão acentuada do fluidos, resultando assim em uma maior eficiência de produção de maquinários que possuem cilindros hidráulicos, que terão mais capacidade de rendimento, culminando desta forma na elevação da produtividade.</p>",
      "<p>Por realizar diversas ações, a válvula direcional hidráulica tem um papel relevante não apenas para o controle do fluxo, mas também para a segurança da condução, evitando problemas como direcção errada, perda de vazão, entre outras intercorrências que afetam a eficácia da produção fabril.</p>",
      "<h2>ADQUIRA VÁLVULA DIRECIONAL HIDRÁULICA PREÇO COM O MELHOR CUSTO-BENEFÍCIO</h2>",
      "<p>A Hicomp Hidráulica é referência no mercado por atuar com as melhores marcas de válvulas direcionais dos mais diversos modelos, entre outras categorias.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "valvula-direcional-proporcional": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional proporcional</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional proporcional</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-01.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-02.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-03.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-04.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-05.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-06.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-07.webp",
      "/src/assets/valvula-direcional-proporcional/valvula-direcional-proporcional-08.webp",
    ],

    mainContent: [
      "<h2>QUAL O DIFERENCIAL DA VÁLVULA DIRECIONAL PROPORCIONAL?</h2>",
      "<p>A <strong>válvula direcional proporcional</strong> é um equipamento cuja função é controlar diversas aplicações. Diferencia-se dos demais modelos por apresentar configurações específicas, sempre mantendo seu ótimo funcionamento, podendo ressaltar a sua qualidade e resistência.</p>",
      "<p>São diversas as aplicações atribuídas a <strong>válvula direcional proporcional</strong> ideal para estabilizar a pressão e a vazão de fluídos, como:</p>",
      "<ul class='list'>",
      "<li>Equipamentos de uso industrial;</li>",
      "<li>Máquinas injetoras;</li>",
      "<li>Máquinas sopradoras;</li>",
      "<li>Máquinas extrusoras;</li>",
      "<li>Prensas, entre outros.</li>",
      "</ul>",
      "<p>Ao utilizar a <strong>válvula direcional proporcional</strong> é possível controlar adequadamente funções específicas como a força, aceleração, velocidade e frenagem de uma série de ferramentas e máquinas industriais.</p>",
      "<p>Além disso, a <strong>válvula direcional proporcional</strong> conta com um sistema de modulação capaz de realizar ajustes no solenóide quanto ao tempo, sendo este um componente essencial para o ajuste da vazão ou pressão da válvula.</p>",
      "<p>Para aquisição da <strong>válvula direcional proporcional</strong> é imprescindível optar por uma empresa de renome e tradição que trabalhe em parcerias com as melhores fabricantes do ramo, como a HICOMP HIDRÁULICA.</p>",
      "<h2>HICOMP HIDRÁULICA REFERÊNCIA EM VÁLVULA DIRECIONAL PROPORCIONAL </h2>",
      "<p>A hicomp hidráulica é tradicional na comercialização e manutenção de equipamentos óleo-hidráulico, como a válvula direcional proporcional.</p>",
      "<p>Em atividade desde 1995, aposta como seu diferencial ter um vasto estoque com vários itens, das maiores fabricantes do mercado.</p>",
      "<p>No que diz respeito a prestação de serviços, a empresa dedica-se a execução de manutenções em suas próprias instalações, ou caso seja necessário e solicitado pelo cliente a prestação é realizada em campo.</p>",
      "<p>Além de um estoque de produtos para a pronta entrega, a empresa trabalha com excelentes condições de pagamento, que podem ser negociadas com sua equipe de vendas. </p>",
      "<p>Oferece a garantia de seus serviços e consertos, todos os procedimentos são testados e filmados em suas bancadas de testes, com a garantia de um ano pelos equipamentos.</p>",
      "<p>Tem a colaboração de uma equipe formada por engenheiros habilitados e técnicos experientes atuantes no desenvolvimento de suas atividades sempre estando em conformidade com seus princípios visando oferecer um atendimento personalizado.</p>",
      "<p>a hicomp hidráulica tem sua sede em são paulo, mas atua em todo o mercosul. disponibilizando as melhores soluções em válvula direcional proporcional e demais equipamentos de óleo-hidráulico de acordo com as necessidades de cada usuário.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-solenoide": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional solenoide</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional solenoide</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-01.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-02.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-03.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-04.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-05.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-06.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-07.webp",
      "/src/assets/valvula-direcional-solenoide/valvula-direcional-solenoide-08.webp",
    ],

    mainContent: [
      "<h2>O QUE É E COMO FUNCIONA UMA VÁLVULA DIRECIONAL SOLENÓIDE</h2>",
      "<p>A <strong>válvula direcional solenoide</strong> é um produto bastante procurado por ter uma aplicação vasta em importantes segmentos industriais. A <strong>válvula direcional solenoide</strong> tem por uma das funções fazer o comando de atuadores e o direcionamento de circuitos fluídicos. A sua estrutura consiste basicamente de passagens internas conectadas, interligadas e desconectadas pela parte móvel que na maioria dos modelos de <strong>válvula direcional solenoide</strong> é o carretel essa parte móvel.</p>",
      "<h2>CARACTERÍSTICAS DA VÁLVULA DIRECIONAL SOLENÓIDE</h2>",
      "<p>A <strong>válvula direcional solenoide</strong> é um dos vários tipos de válvulas disponíveis no mercado e essa diferenciação entre elas se dá de acordo com o número de posições, vias, acionamento, sua vazão ou mesmo o tipo de retorno ou a posição de repouso.</p>",
      "<p>Dentre as características principais da <strong>válvula direcional solenoide</strong> estão:</p>",
      "<ul class='list'>",
      "<li>A performance elevada em relação a outros modelos, sendo elas operadas da seguinte forma: 4 para 2 vias ou 4 para 3 vias;</li>",
      "<li>O modelo <strong>válvula direcional solenoide</strong> é operado em sub-bases individual ou em sistemas próprios, e são válvulas ideais para circuitos que requerem uma eficiência alta;</li>",
      "<li>Elas são feitas de materiais de primeira, que conferem a estrutura uma qualidade acima da média, possuindo um acabamento primoroso;</li>",
      "<li>Pode ter tipos de êmbolos variados, de acordo com a aplicação a que se destina, e que proporciona a <strong>válvula direcional solenoide</strong> características próprias de uso.</li>",
      "</ul>",
      "<h2>A HICOMP HIDRÁULICA E A VÁLVULA DIRECIONAL SOLENOIDE  </h2>",
      "<p> A Hicomp Hidráulica é uma empresa que possui forte atuação no mercado de fornecimento de <strong>válvula direcional solenoide</strong>, possuindo décadas de experiência fornecendo essa estrutura para todas as partes do Brasil, sempre com eficiência, respeito aos prazos e compromisso com a qualidade do produto fornecido.</p>",
      "<p>Dentre as características que fazem essa ser uma empresa de destaque no mercado está o fato de possuir uma estrutura moderna para fabricação e fornecimento de produtos de marcas renomadas, além de contar como uma equipe de profissionais conhecidos por terem treinamento constante para prestar um atendimento eficaz, que atenda com precisão as demandas dos clientes. </p>",
      "<p>A empresa Hicomp Hidráulica se destaca ainda por fornecer material com preço justo e ótimas condições e formas de se fazer o pagamento.</p>",
      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "valvula-e-atuadores-hidraulicos": {
    introduction:
      "<p>Se você está procurando por <strong>válvulas e atuadores hidráulicos</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvulas e atuadores hidráulicos</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-01.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-02.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-03.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-04.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-05.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-06.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-07.webp",
      "/src/assets/valvula-e-atuadores-hidraulicos/valvulas-atuadores-hidraulicos-08.webp",
    ],

    mainContent: [
      "<h2>MOTIVOS PARA ADQUIRIR VÁLVULAS E ATUADORES HIDRÁULICOS</h2>",
      "<p><strong>Válvulas e atuadores hidráulicos</strong> marcam presença nos mais variados tipos de negócios, tais como indústrias que tratam de água e óleo, assim como em usinas elétricas. Trata-se de um equipamento fundamental para que atividades cotidianas sejam desempenhadas de maneira completa.</p>",
      "<p>A utilização de <strong>válvulas e atuadores hidráulicos</strong> permite a automatização de itens que antes disso eram manuais. Após a instalação de atuadores para válvulas, a operação poderá ser feita automaticamente, ou seja, à distância e sem a necessidade de acionamento direto por um operador. </p>",
      "<p>A automatização de processos que é permitida através do uso de <strong>válvulas e atuadores hidráulicos</strong> é altamente benéfica, pois aumenta a segurança dos procedimentos, já que não será necessário ter um operador para acionar comandos, e ainda eleva a precisão e garante a rapidez dos procedimentos. </p>",
      "<p>É possível fazer a aquisição de <strong>válvulas e atuadores hidráulicos</strong> de diversos tipos, e o que determinará qual é o mais adequado é a finalidade para a qual serão utilizados. Por este motivo, é importante que no momento de fazer a aquisição destes produtos o consumidor tenha em mãos as especificações técnicas dos equipamentos dos quais faz uso diariamente. </p>",
      "<h2>ONDE ENCONTRAR VÁLVULAS E ATUADORES HIDRÁULICOS DE ALTA QUALIDADE?</h2>",
      "<p>Independentemente de qual será a finalidade dada às <strong>válvulas e atuadores hidráulicos</strong>, é importante que sejam adquiridos na Hicomp Hidráulica, empresa que é referência no mercado por fornecer soluções de alta qualidade que impactam positivamente no cotidiano de seus clientes. </p>",
      "<p>A Hicomp Hidráulica foi fundada em 1995 e atualmente oferece atendimento aos países que integram o Mercosul. Para atender toda esta demanda, a empresa conta com: </p>",
      "<ul class='list'>",
      "<li>Vasto estoque;</li>",
      "<li>Produtos e serviços diversos;</li>",
      "<li>Profissionais qualificados.</li>",
      "</ul>",
      "<p>Por manter um estoque completo e diverso, a Hicomp Hidráulica consegue disponibilizar para pronta entrega todo e qualquer material adquirido. Sendo assim, ao negociar com a empresa, o cliente tem plena certeza de que seu projeto terá todos os meios necessários para ser bem-sucedido. </p>",
      "<p>Ao oferecer produtos e serviços variados, a fornecedora garante que pode atender a maior quantidade possível de pessoas e levar a todas elas as características que lhe concederam posição de destaque no mercado. </p>",
      "<p>Todos os profissionais que trabalham para Hicomp Hidráulica são altamente qualificados e especializados na área, além de contar com tempo de experiência superior a 10 anos.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "filtro-hda": {
    introduction:
      "<p>Se você está procurando por <strong>filtro hda</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>filtro hda</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",
    images: [

      "/src/assets/filtro-hda/filtro-hda-01.webp",
      "/src/assets/filtro-hda/filtro-hda-02.webp",
      "/src/assets/filtro-hda/filtro-hda-03.webp",
      "/src/assets/filtro-hda/filtro-hda-04.webp",
      "/src/assets/filtro-hda/filtro-hda-05.webp",
      "/src/assets/filtro-hda/filtro-hda-06.webp",
      "/src/assets/filtro-hda/filtro-hda-07.webp",
      "/src/assets/filtro-hda/filtro-hda-08.webp",
    ],

    mainContent: [
      "<h2>[translate:O QUE É FILTRO HDA?]</h2>",
      "<p>O <strong>[translate:filtro hda]</strong> é utilizado para impedir que as partículas geradas pelo sistema e as que entram pelas vedações dos cilindros possa atingir o reservatório e entrem novamente em circulação. Verifique a pressão máxima do trabalho sempre. Os filtros são utilizados com a função de proteger componentes do sistema hidráulico de níveis de descontaminação superiores aos níveis recomendados de limpeza.</p>",
      "<h2>[translate:ONDE PODE SER APLICADO O FILTRO HDA?]</h2>",
      "<p>Pode ser aplicado em:</p>",
      "<ul class='list'>",
      "<li>[translate:Sistema de recirculação];</li>",
      "<li>[translate:Linhas de baixa pressão de sistemas de lubrificação];</li>",
      "<li>[translate:Rolamentos];</li>",
      "<li>[translate:Redutores].</li>",
      "</ul>",
      "<p>A Hicomp Hidráulica é uma empresa especializada em fornecimento e manutenção em toda a linha de filtros de sucção, pressão, retorno, <strong>[translate:filtro hda]</strong>, unidades de filtragem, entre outros.</p>",
      "<h2> [translate:FILTRO HDA É UM COMPONENTE ESSENCIAL PARA A PROTEÇÃO E DURABILIDADE DE SEUS EQUIPAMENTOS]</h2>",
      "<p>A principal causa de defeitos em sistemas hidráulicos, causando danos nos componentes internos e fazendo com que a durabilidade do equipamento seja reduzida e gerando prejuízos para as empresas, é a contaminação do fluido hidráulico, causada por impurezas no óleo. É importante manter o <strong>[translate:filtro hda]</strong> em boas condições, garantindo que seus equipamentos tenham maior durabilidade e reduzindo seus custos com reparos. </p>",
      "<h2>[translate:APLICAÇÕES DE FILTRO HDA]</h2>",
      "<ul class='list'>",
      "<li>[translate:Filtro de pressão];</li>",
      "<li>[translate:Filtro de sucção];</li>",
      "<li>[translate:Filtro de linha/retorno];</li>",
      "<li>[translate:Filtro de ar].</li>",
      "</ul>",
      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>[translate:filtro hda]</strong> para o mercado, com atendimento rápido e personalizado, rigorosos testes de bancada, garantindo o bom funcionamento e o aumento de sua durabilidade. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades de seus usuários e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto de confiança.</p>",
      "<h2>[translate:IMPORTANTE]</h2>",
      "<p>Os <strong>[translate:filtro hda]</strong> precisam ter seu interior trocado periodicamente, para que seja mantida a efetividade da filtragem.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "filtros-newtec": {
    introduction:
      "<p>Se você está procurando por <strong>filtros newtec</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>filtros newtec</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/filtros-newtec/filtros-newtec-01.webp",
      "/src/assets/filtros-newtec/filtros-newtec-02.webp",
      "/src/assets/filtros-newtec/filtros-newtec-03.webp",
      "/src/assets/filtros-newtec/filtros-newtec-04.webp",
      "/src/assets/filtros-newtec/filtros-newtec-05.webp",
      "/src/assets/filtros-newtec/filtros-newtec-06.webp",
      "/src/assets/filtros-newtec/filtros-newtec-07.webp",
      "/src/assets/filtros-newtec/filtros-newtec-08.webp",
    ],

    mainContent: [
      "<h2>FILTROS NEWTEC - CONHEÇA OS ALGUNS TIPOS DISPONÍVEIS</h2>",
      "<p>Os <strong>filtros newtec</strong> são reconhecidos no mercado pela elevada qualidade e eficiência, pois são fabricados com tecnologia de ponta, que garante uma elevada capacidade de performance, fator preponderante para a desempenho de equipamento e sistemas diversos.</p>",
      "<p>A linha de <strong>filtros newtec</strong> é ampla, suprindo assim a necessidade de cada tipo de aplicação. Entre os modelos oferecidos pela marca, estão:</p>",
      "<ul class='list'>",
      "<li>Filtros de ar;</li>",
      "<li>Filtros de retorno;</li>",
      "<li>Filtros blindados;</li>",
      "<li>Filtros de sucção.</li>",
      "</ul>",
      "<h2>SAIBA MAIS DETALHES SOBRE OS FILTROS NEWTEC</h2>",
      "<p>Os <strong>filtros newtec</strong> são desenvolvidos para serem práticos de empregar em maquinários e mecanismos hidráulicos, o que torna os processos operacionais mais dinâmicos, contribuindo desta forma com a otimização do tempo.</p>",
      "<p>De maneira resumida, os <strong>filtros newtec</strong> são responsáveis por evitar a contaminação originada por elementos sólidos presentes em sistemas e máquinas hidráulicas, o que reduz potencialmente as chances de danos, diminuindo desta maneira a realização de manutenção e reduzindo bastante intercorrências com paralisações inesperadas de operação.</p>",
      "<p>Por proporcionar mais segurança aos mecanismos e maquinários hidráulicos, os <strong>filtros newtec</strong> promovem mais confiabilidade às operações em indústrias, auxiliando a manter o padrão de funcionamento adequado.</p>",
      "<p>Os filtros da marca Newtec, como citado anteriormente, possuem um elevado desempenho para a contenção de contaminação, o que faz deles produtos fundamentais para o alcance de uma produtividade eficiente.</p>",
      "<p>Além disso, os filtros são produtos que geram uma importante economia, já que atuam na proteção das peças de equipamentos e sistemas, como atuadores, bombas, cilindros, válvulas, entre outros, prolongando a sua vida útil.</p>",
      "<p>Os filtros da marca Newtec contam com uma durabilidade expressiva, o que também traz economia para as organizações fabris. Outro aspecto importante é eles também influenciam na durabilidade dos fluidos hidráulicos, que terão a sua limpeza controlada.</p>",
      "<p>Por exercerem uma função importante para a proteção dos componentes de máquinas e sistemas, eles colaboram para que as empresas possam reduzir a mão de obra de manutenção bem como a compra de novas peças.</p>",
      "<h2>PROCURANDO UMA EMPRESA ESPECIALISTA EM FILTROS NEWTEC?</h2>",
      "<p>A Hicomp Hidráulica atua com as mais conceituadas marcas de filtros, como a Newtec, para oferecer sempre o máximo de qualidade. A empresa também atua com atuadores, bombas, entre outros produtos.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-hidraulica-denison": {
    introduction:
      "<p>Se você está procurando por <strong>bomba hidráulica denison</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>bomba hidráulica denison</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-01.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-02.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-03.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-04.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-05.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-06.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-07.webp",
      "/src/assets/bomba-hidraulica-denison/bomba-hidraulica-denison-08.webp",
    ],

    mainContent: [
      "<h2>QUALIDADE E EFICIÊNCIA É COM BOMBA HIDRÁULICA DENISON</h2>",
      "<p>A <strong>bomba hidráulica denison</strong> trata-se de um produto fornecido pela Denison Hydraulics, um grupo que faz parte da Hydraulics Pump da Parker Hannifin. A Denison surgiu no ano de 2004 e possui fábricas em todo o mundo, projetando e fabricando produtos com foco em suprir a necessidade de diversos segmentos industriais, sempre acompanhando novidades do mercado, a evolução dos processos de trabalho para apresentar soluções novas e eficazes. </p>",
      "<p>Para desenvolver uma <strong>bomba hidráulica denison</strong> de excelência, a Denison, enquanto fabricante, possui uma equipe altamente especializada em fornecer aos clientes produtos que seguem requisitos básicos de aplicações hidráulicas, seguindo as normas mais seguras e precisas de fabricação.</p>",
      "<h2>HICOMP HIDRÁULICA FORNECE BOMBA HIDRÁULICA DENISON</h2>",
      "<p>É importante frisar como a empresa contribui para o fornecimento de diversos produtos e equipamentos de ponta para empresas de segmentos dos mais diversos da indústria. A Hicomp possui um compromisso com a excelência, sempre trabalhando com marcas de renome como a Denison e a <strong>bomba hidráulica denison</strong>. </p>",
      "<p>A <strong>bomba hidráulica denison</strong> faz parte de um catálogo variado de produtos da Hicomp que conta com diversos benefícios na hora de fornecer esses produtos:</p>",
      "<p>A empresa possui sede moderna e profissionais de excelência trabalhando. Assim, fornece produtos como a <strong>bomba hidráulica denison</strong> de qualidade acima da média, com o compromisso de atender todas as necessidades de seus clientes, sejam as empresas da área que for;</p>",
      "<p>Os produtos da Hicomp Hidráulica possuem preço justo, que cabem no bolso dos clientes e ainda oferece diversas opções para a realização dos pagamentos. O objetivo, ao fim, é oferecer produtos de qualidade com condições que atendam as demandas dos clientes;</p>",
      "<p>A empresa atende em todo o território nacional, permitindo que empresas de todos os estados tenham acesso a produtos de qualidade Hicomp.</p>",
      "<p>Importante frisar que no caso da <strong>bomba hidráulica denison</strong> a Hicomp Hidráulica mostra o seu compromisso em, mesmo quando fornecedora de outras marcas, atuar apenas com aquelas que tenham a mesma visão de qualidade e eficiência que ela, para que o cliente receba sempre os melhores produtos. Isso contribui para que o investimento valha a pena, com a aquisição de equipamentos que não vão estragar em um curto intervalo de tempo e que funcionem com eficiência.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "filtro-pressao-hda": {
    introduction:
      "<p>Se você está procurando por <strong>filtro pressão hda</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>filtro pressão hda</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-01.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-02.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-03.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-04.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-05.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-06.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-07.webp",
      "/src/assets/filtro-pressao-hda/filtro-pressao-hda-08.webp",
    ],

    mainContent: [
      "<h2>PARA QUE SERVE O FILTRO PRESSÃO HDA?</h2>",
      "<p>A finalidade essencial do <strong>filtro pressão hda</strong> é proteger sistemas complexos ou componentes críticos de partículas que possam causar panes ou mal funcionamento de válvulas ou motores hidráulicos, e também o sistema de contaminação gerada pela bomba. São utilizados também no conjunto de recirculação, nas linhas de menos pressão dos sistemas de lubrificação e até mesmo nos redutores. Com o <strong>filtro pressão hda</strong> é provável que se controle os níveis de contaminação dos sistemas hidráulicos.</p>",
      "<h2>O FILTRO PRESSÃO HDA É REGULARMENTE INSTALADO EM ZONAS CRÍTICAS DO SISTEMA, ONDE A PRESSÃO COSTUMA SER ALTEROSA</h2>",
      "<p>O <strong>filtro pressão hda</strong> é posicionado após a bomba. É feito para proteger o sistema de pressão dimensionado para uma faixa própria de fluxo na linha de pressão. Esses filtros são adequados principalmente para proteger os componentes sensíveis do lado filtrado do filtro, como por exemplo, o servo válvulas.</p>",
      "<h2>VANTAGENS DO FILTRO PRESSÃO HDA</h2>",
      "<ul class='list'>",
      "<li>Proteção específica dos componentes;</li>",
      "<li>Fácil manutenção;</li>",
      "<li>Mais higiene;</li>",
      "<li>Melhor custo-benefício;</li>",
      "<li>Pode ser utilizado elementos de filtro de alta eficiência e filtragem fina.</li>",
      "</ul>",
      "<h2>O FILTRO PRESSÃO HDA PRECISA TER SEU INTERIOR TROCADO PERIODICAMENTE PARA MANTER A EFETIVIDADE DA FILTRAGEM E MAXIMIZAR SUA VIDA ÚTIL</h2>",
      "<p>O filtro de pressão HDA precisa sempre atender as normas e exigências ISO 4572/4406 e da NAS 1632. Sendo assim, ele costuma reduzir e muito o nível do consumo de óleo pelo prolongamento da vida útil ou então se aproveita da reutilização de fluidos que estão contaminados.</p>",
      "<p>A Hicomp Hidráulica atua em São Paulo, situada na Rua Zalina Rolim, 647- Vila Maria Alta, e está desde 1995 fazendo o melhor <strong>filtro pressão hda</strong> para o mercado, com atendimento rápido e personalizado. Possui uma equipe formada por engenheiros e técnicos com mais de dez anos de experiência, desenvolvendo suas atividades baseadas nos princípios do atendimento personalizado e adequado às necessidades dos usuários e produtos que a empresa oferece. Uma empresa confiável com certeza oferecerá garantia de seus produtos, equipamentos adequados, com qualidade e com grandes parcerias, como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar e HDA, suprindo as necessidades de seus clientes e garantindo um produto de confiança.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "distribuidor-filtros-hda": {
    introduction:
      "<p>Se você está procurando por <strong>distribuidor filtros hda</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>distribuidor filtros hda</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",

    images: [

      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-01.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-02.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-03.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-04.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-05.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-06.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-07.webp",
      "/src/assets/distribuidor-filtros-hda/distribuidor-filtros-hda-08.webp",
    ],

    mainContent: [
      "<h2>HICOMP HIDRÁULICA É DESDE 1995 O MELHOR DISTRIBUIDOR FILTROS HDA DO PAÍS</h2>",
      "<p>A Hicomp Hidráulica é uma empresa que está no mercado de produtos hidráulicos há alguns anos e, desde então, vem se tornado uma das empresas de maior referência no setor. </p>",
      "<p>A empresa atua em toda a região do Mercosul como <strong>distribuidor filtros hda</strong>, visando sempre oferecer aos seus clientes as melhores soluções disponíveis no mercado. </p>",
      "<p>Como um <strong>distribuidor filtros hda</strong>, a Hicomp Hidráulica dispõe de elementos filtrantes HDA confeccionados por um processo de fabricação totalmente inovador e tecnológico. Nele o produto distribuído segue todas as normas e padrões exigidos por órgãos competentes. </p>",
      "<p>Por ser um <strong>distribuidor filtros hda</strong>, o sucesso da Hicomp Hidráulica se encontra em sua versatilidade. A empresa atua em diversos segmentos industriais como distribuidor filtro HDA e busca sempre atender a todas as solicitações de seus clientes, de modo que todos possam sair dos atendimentos satisfeitos. </p>",
      "<p>Um filtro HDA do <strong>distribuidor filtros hda</strong> Hicomp Hidráulica possui a função de impedir que partículas que são geradas pelo sistema e também as que costumam entrar por vedações consigam atingir os reservatórios e, consequentemente, entrem novamente em circulação. </p>",
      "<p>Os filtros HDA também podem ser aplicados totalmente em sistemas denominados de 'recirculação', em linhas de baixa pressão. </p>",
      "<h2>SOBRE O DISTRIBUIDOR FILTROS HDA HICOMP HIDRÁULICA</h2>",
      "<p>A equipe de vendas da Hicomp Hidráulica conta com total poder de negociação de valores, logo, caso os preços do distribuidor de filtros HDA não couberem no orçamento das empresas contratantes, a Hicomp Hidráulica consegue facilitar as formas de pagamento para que nenhum cliente deixe de ter acesso a produtos tão excelentes como:</p>",
      "<ul class='list'>",
      "<li>Bomba hidráulica;</li>",
      "<li>Filtros HDA;</li>",
      "<li>Cilindro hidráulico;</li>",
      "<li>Válvula direcional.</li>",
      "</ul>",
      "<p>A Hicomp Hidráulica é um <strong>distribuidor filtros hda</strong> que está no mercado desde 1995 atendendo a toda a região do Mercosul. </p>",
      "<p>Com um estoque de todos os seus produtos a pronta entrega, a Hicomp Hidráulica é uma empresa que busca cumprir com seus prazos para poder manter a satisfação de seus clientes extremamente elevada, como sempre foi. Quem contar com a Hicomp Hidráulica para qualquer solicitação não se arrependerá, uma vez que a empresa possui uma equipe excelente, altamente treinada e produtos e equipamentos de qualidade. </p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "unidade-hidraulica-vickers": {
    introduction:
      "<p>Se você está procurando por <strong>unidade hidráulica vickers</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>unidade hidráulica vickers</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",


    images: [

      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-01.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-02.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-03.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-04.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-05.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-06.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-07.webp",
      "/src/assets/unidade-hidraulica-vickers/unidade-hidraulica-vickers-08.webp",
    ],

    mainContent: [
      "<h2>QUALIDADE DE UMA UNIDADE HIDRÁULICA VICKERS</h2>",
      "<p>A utilização de <strong>unidade hidráulica vickers</strong> é feita para gerar força aos equipamentos e maquinários presentes na linha de produção industrial de negócios dos mais variados ramos.</p>",
      "<p>A <strong>unidade hidráulica vickers</strong> é composta por um conjunto de componentes hidráulicos cujo objetivo é proporcionar movimentação e força a um equipamento. Pode ser usada em várias situações, como por exemplo como uma extrusora ou até mesmo prensa de papel. </p>",
      "<p>Uma <strong>unidade hidráulica vickers</strong> oferece maior durabilidade que qualquer outra unidade produzida por outras marcas, pois conta com a elevada qualidade Eaton, que é reconhecida em todo o Brasil por oferecer soluções hidráulicas que apresentam alto desempenho e grande eficiência.</p>",
      "<p>Para atender demandas variadas, a fabricante oferece uma vasta gama de opções de produtos. Sendo assim, cada cliente pode optar pela aquisição da <strong>unidade hidráulica vickers</strong> que mais se adequa ao seu cotidiano e melhor atende suas necessidades.</p>",
      "<p>Encontrar um bom fornecedor de <strong>unidade hidráulica vickers</strong> é o primeiro passo para encontrar a unidade hidráulica que melhor atende as necessidades de cada projeto e prevenirá a ocorrência de transtornos no cotidiano. </p>",
      "<p>Após a boa seleção de local onde comprar a <strong>unidade hidráulica vickers</strong> ideal para cada negócio, o cliente poderá usufruir de um bom e eficiente equipamento que impulsionará os processos de produção.</p>",
      "<h2>ONDE COMPRAR UNIDADE HIDRÁULICA VICKERS E OUTROS EQUIPAMENTOS?</h2>",
      "<p>A Hicomp Hidráulica está no mercado desde o ano de 1995 e trabalha atendendo todos os países do Mercosul, incluindo:</p>",
      "<ul class='list'>",
      "<li>Brasil;</li>",
      "<li>Argentina;</li>",
      "<li>Paraguai.</li>",
      "</ul>",
      "<p>A empresa dispõe de um estoque que conta com milhares de peças, para assim oferecer o serviço de pronta entrega para qualquer aquisição. </p>",
      "<p>Para maior conforto do cliente e melhores negociações, a Hicomp Hidráulica conta com uma equipe de vendas treinada e capacitada para atender o cliente de modo a oferecer as melhores opções em produtos e serviços e condições de pagamento flexíveis</p>",
      "<p>Além da equipe de vendas preparada, a Hicomp Hidráulica também conta com técnicos e engenheiros altamente experientes, treinados e qualificados para o exercício de suas funções, para que desta maneira cada cliente possa usufruir de produtos e serviços da mais alta qualidade. </p>",
      "<p>As soluções que farão diferença no cotidiano industrial são encontradas na Hicomp Hidráulica.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "filtro-duplo-hda": {
    introduction:
      "<p>Se você está procurando por <strong>filtro duplo hda</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>filtro duplo hda</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",



    images: [

      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-01.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-02.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-03.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-04.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-05.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-06.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-07.webp",
      "/src/assets/filtro-duplo-hda/filtro-duplo-hda-08.webp",
    ],

    mainContent: [
      "<h2>COMO É O FUNCIONAMENTO DO FILTRO DUPLO HDA?</h2>",
"<p>O <strong>filtro duplo hda</strong> consiste em um equipamento que trabalha atuando em conjunto com todo um sistema hidráulico, tendo a função, como o nome sugere, de fazer a filtragem de substâncias em processos hidráulicos gerais. </p>",
"<p>Os filtros agem em diversos processos durante o funcionamento de um sistema hidráulico:</p>",
"<ul class='list'>",
"<li>Age na pressão;</li>",
"<li>Sucção;</li>",
"<li>Acoplamentos, etc.</li>",
"</ul>",
"<p>A Hicomp Hidráulica atua em todos os estados do Brasil fornecendo equipamentos diversos para sistemas hidráulicos, atuando de forma eficiente e ágil atendendo empresas de setores diversos, sempre com o compromisso do bom preço e da qualidade dos equipamentos.</p>",
"<p>No caso do <strong>filtro duplo hda</strong>, ele é utilizado na hora do retorno, impedindo que qualquer partícula gerada pelo sistema ou mesmo aquelas que entram por vedações nos cilindros cheguem até o reservatório e acabem, por esse motivo, entrando novamente em circulação.</p>",
"<p>O <strong>filtro duplo hda</strong> tem uma função primordial, atuando em consequência também na preservação da vida útil dos equipamentos e na eficiência dos serviços e processos. </p>",
"<p>O uso do <strong>filtro duplo hda</strong> pode ser em variados sistemas:</p>",
"<ul class='list'>",
"<li>Sistemas de recirculação;</li>",
"<li>Rolamentos;</li>",
"<li>Sistemas de lubrificação, dentre diversos outros.</li>",
"</ul>",
"<p>O<strong>filtro duplo hda</strong> age na unidade HDA de filtragem, que pode ser móvel ou fixa e atua na transferência ou recirculação de fluidos, sendo eles de utilização fácil e de manutenção simples. </p>",
"<p>Sendo o <strong>filtro duplo hda</strong> um produto bastante requisitado é importante obter o produto em fornecedor renomado, que preze pela qualidade do que fornece. Dessa forma, os clientes têm a garantia de comprar em um local que lhes dá a segurança de que o produto vai durar, funcionar de forma eficiente e precisa, motivos pelos quais faz valer a pena o investimento, ou seja, comprar na Hicomp vale o custo-benefício.</p>",
"<h2>A HICOMP E O FILTRO DUPLO HDA</h2>",
"<p>O <strong>filtro duplo hda</strong> tem a qualidade da empresa, a marca do preço justo e da eficiência no funcionamento. Para isso a empresa conta não só com ótimos profissionais e com matéria-prima de ponta na fabricação dos produtos, como conta ainda com a sede da empresa, que é grande, equipada, preparada para atender a demanda de um mercado exigente por qualidade.</p>",


      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "atuador-hidraulico-preco": {
    introduction:
      "<p>Se você está procurando por <strong>atuador hidraulico preço</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>atuador hidraulico preço</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",




    images: [

      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-01.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-02.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-03.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-04.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-05.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-06.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-07.webp",
      "/src/assets/atuador-hidraulico-preco/atuador-hidraulico-preco-08.webp",
    ],

    mainContent: [
      "<h2>ATUADOR HIDRÁULICO PREÇO - EQUIPAMENTO QUALIFICADO PARA ORGANIZAÇÕES DE VARIADOS SETORES</h2>",
"<p>O <strong>atuador hidráulico preço</strong> é um produto de alta eficiência para equipamentos, tais como tratores, escavadeiras, mecanismos de elevação, serras, perfuradoras, injetoras, sopradoras, prensa, entre outros, que por meio da sua aplicação terão a força correspondente à sua operação.</p>",
"<p>Por ter esta funcionalidade, o <strong>atuador hidráulico preço</strong> é um maquinário amplamente buscado por diferentes ramos do mercado, entre eles:</p>",
"<ul class='list'>",
"<li>Agroindústrias;</li>",
"<li>Mineradoras;</li>",
"<li>Automobilísticas;</li>",
"<li>Empresas da construção civil;</li>",
"<li>Alimentícias.</li>",
"</ul>",
"<h2>CONFIRA MAIS CARACTERÍSTICAS DO ATUADOR HIDRÁULICO PREÇO</h2>",
"<p>O <strong>atuador hidráulico preço</strong> é disponibilizado no mercado nas versões de funcionamento rotativo e linear, que são comercializados em diferentes modelos, o que favorece uma aplicação assertiva para cada tipo de maquinário.</p>",
"<p>Uma das mais importantes característica do <strong>atuador hidráulico preço</strong> é sua alta eficiência para transformar uma força reduzida em uma potência expressiva, qualidade que permite a obtenção de alta performance em equipamento que atua com operações de retirada de detritos, como é o caso de tratores, maquinário de elevação como guindastes, entre outros, que atuam com movimentos variados.</p>",
"<p>Além disso, por ter funcionamento mecânico, o <strong>atuador hidráulico preço</strong> gera mais segurança ao ambiente e aos equipamentos, pois são eliminadas ocorrências de problemas elétricos, que podem causar danos nos maquinários e acidente aos operadores.</p>",
"<p>O acionamento ágil é outro diferencial importante do atuador hidráulico, fator que eleva a produção, por tornar os maquinários mais rápidos.</p>",
"<p>Outra vantagem atribuída ao atuador hidráulico é que ele não requer outros dispositivos para elevar a energia a potência, o que faz dele um produto econômico, prático e altamente eficaz, especialmente para equipamentos que lidam com cargas pesadas.</p>",
"<p>O atuador hidráulico é fabricado com matérias-primas de elevada qualidade e resistência, que conferem a ele tolerância para suportar impactos, abrasão, entre outros, assegurando desta forma uma durabilidade considerável.</p>",
"<p>Em suma, o <strong>atuador hidráulico preço</strong> é certamente um dispositivo que faz toda a diferença para o bom funcionamento, aumento da velocidade e desempenho de variados tipos de maquinários.</p>",
"<h2>ADQUIRA ATUADOR HIDRÁULICO PREÇO DE ELEVADA PERFORMANCE</h2>",
"<p>A Hicomp Hidráulica angariou reconhecimento no mercado por trabalhar com os mais importantes fabricantes tanto de atuadores hidráulicos como bombas, válvulas, entre outros produtos.</p>",

      "</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direcional-hidraulica-manual": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional hidráulica manual</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional hidráulica manual</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",




    images: [

      "/src/assets/valvula-direcional-hidraulica-manual/valvula-direcional-hidraulica-manual-01.webp",
      "/src/assets/valvula-direcional-hidraulica-manual/valvula-direcional-hidraulica-manual-02.webp",
      "/src/assets/valvula-direcional-hidraulica-manual/valvula-direcional-hidraulica-manual-03.webp",
      "/src/assets/valvula-direcional-hidraulica-manual/valvula-direcional-hidraulica-manual-04.webp",
      "/src/assets/valvula-direcional-hidraulica-manual/valvula-direcional-hidraulica-manual-05.webp",
    ],

    mainContent: [
      "<h2>PARA QUE SERVE A VÁLVULA DIRECIONAL HIDRÁULICA MANUAL?</h2>",
"<p>Projetada com um design sofisticado e robusto a <strong>válvula direcional hidráulica manual</strong> é ideal para atividades que necessitam de maior precisão para efetivar o controle de pressão, saber escolher o melhor modelo faz toda a diferença para direcionar o fluxo de equipamentos de óleo-hidráulico.</p>",
"<p>A <strong>válvula direcional hidráulica manual</strong> supre adequadamente demandas:</p>",
"<ul class='list'>",
"<li>Controle de pressão;</li>",
"<li>Controle de direção;</li>",
"<li>Controle de volume de fluídos;</li>",
"<li>E demais atividades referentes ao sistema hidráulico.</li>",
"</ul>",
"<p>Considerada o único modelo capaz de atender com eficiência diferentes tipos de atividade, a <strong>válvula direcional hidráulica manual</strong> atua perfeitamente sem a ocorrência de interferências ou até mesmo falhas técnicas.</p>",
"<p>Existem muitas opções de <strong>válvula direcional hidráulica manual</strong> é importante que o cliente tenha em mente qual o modelo atende melhor cada tipo de aplicação, o ideal é que possa adquirir o equipamento em uma empresa que ofereça todo o suporte de atendimento para orientá-lo na sua escolha.</p>",
"<p>Com anos de tradição e comprometimento a HICOMP HIDRÁULICA atua em todo o país oferecendo a <strong>válvula direcional hidráulica manual</strong> e uma ampla linha de equipamentos.</p>",
"<h2>VÁLVULA DIRECIONAL HIDRÁULICA MANUAL DE QUALIDADE ENCONTRA NA HICOMP HIDRÁULICA</h2>",
"<p>Quando se trata de <strong>válvula direcional hidráulica manual</strong> a HICOMP HIDRÁULICA é especialista no assunto, atua desde 1995 no setor oferecendo soluções em produtos de óleo-hidráulico.</p>",
"<p>Além da comercialização de <strong>válvula direcional hidráulica manual</strong>, dedica-se também a manutenção de equipamentos, todos os serviços são desempenhados na empresa, ou caso for solicitado pelo contratante podem ser realizados em campo.</p>",
"<p>Investe num vasto estoque com produtos variados, proporcionando a oportunidade da pronta entrega. Oferece ótimas condições de pagamentos, negociáveis com seu departamento de vendas.</p>",
"<p>Seus serviços e consertos são testados e filmados nas bancadas de testes, oferecendo a garantia dos procedimentos de cada equipamento.</p>",
"<p>Seus engenheiros são formados e os técnicos com anos de experiência de atuação no mercado, capacitados para executar com perfeição todos os serviços pela empresa oferecidos.</p>",
"<p>Com atendimento personalizado, a empresa tem uma sede em São Paulo, fazendo-se presente no Mercosul, sempre com as melhores soluções em equipamentos e produtos.</p>",
      

"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "reforma-de-cilindros": {
    introduction:
      "<p>Se você está procurando por <strong>reforma de cilindros</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>reforma de cilindros</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",





    images: [

      "/src/assets/reforma-de-cilindros/reforma-cilindros-01.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-02.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-03.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-04.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-05.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-06.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-07.webp",
      "/src/assets/reforma-de-cilindros/reforma-cilindros-08.webp",
    ],

    mainContent: [
   "<h2>VANTAGENS E BENEFÍCIOS PROPORCIONADOS PELA REFORMA DE CILINDROS</h2>",
"<p>A contratação de serviços de <strong>reforma de cilindros</strong> é fundamental para a manutenção de cilindros hidráulicos, que, por sua vez, constituem uma parte essencial de equipamentos utilizados no cotidiano de indústrias dos mais variados segmentos. </p>",
"<p>A <strong>reforma de cilindros</strong> pode ser feita nos vários modelos de cilindros hidráulicos existentes. Desta maneira, diferentes demandas podem ser atendidas e diversos projetos podem se beneficiar com este serviço. </p>",
"<p>A realização de <strong>reforma de cilindros</strong> é consideravelmente mais barata que a compra e substituição do equipamento existente. Portanto, trata-se de uma medida que também possui o potencial de contribuir para o controle do orçamento da empresa. </p>",
"<p>A aquisição de serviços de <strong>reforma de cilindros</strong> é muito vantajosa, pois ao mesmo tempo que mantém os gastos sob controle, o faz sem que seja necessário abrir mão do funcionamento do equipamento e proporciona qualidade por um preço mais acessível. </p>",
"<p>Devido a todos os benefícios que a <strong>reforma de cilindros</strong> é capaz de promover no cotidiano de uma empresa, a contratação deste serviço é a melhor maneira de combater o desgaste natural de equipamentos, sem que para isto seja preciso desembolsar quantias elevadas e ainda assim manter a qualidade do serviço. </p>",
"<h2>DESTAQUE EM REFORMA DE CILINDROS</h2>",
"<p>A Hicomp Hidráulica é a empresa que mais se destaca no ramo de <strong>reforma de cilindros</strong>, pois, desde 1995, quando suas atividades foram iniciadas, a empresa oferece ao consumidor soluções verdadeiramente eficientes e que causarão impacto positivo em seus negócios. </p>",
"<p>Para assegurar a total eficácia dos produtos e serviços fornecidos, a Hicomp Hidráulica conta com: </p>",
"<ul class='list'>",
"<li>Garantia de 1 ano;</li>",
"<li>Profissionais especializados e experientes;</li>",
"<li>Produtos e serviços rigorosamente testados.</li>",
"</ul>",
"<p>Através destes diferenciais, a Hicomp Hidráulica é capaz de atender toda a demanda presente no Brasil e no restante do Mercosul e satisfazer seus clientes nacionais e internacionais. </p>",
"<p>A empresa conta também com as melhores marcas, assegurando assim a total qualidade, durabilidade e resistência de cada um dos serviços prestados. </p>",
"<p>Para maior conforto do consumidor, a contratação da Hicomp Hidráulica pode ser feita através de pagamento cujas condições são flexíveis e podem ser negociadas e adequadas ao orçamento e disponibilidade de cada um. </p>",


"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "valvula-direcional-mecanica": {
    introduction:
      "<p>Se você está procurando por <strong>válvula direcional mecânica</strong>, você veio ao lugar certo! A HiComp é especializada em <strong>válvula direcional mecânica</strong> e oferece uma ampla gama de serviços para atender às suas necessidades. Nossa equipe de profissionais altamente capacitados está sempre pronta para ajudá-lo(a) a encontrar as melhores soluções para o seu negócio. Conheça mais sobre nossos serviços e entre em contato conosco para saber como podemos ajudar a impulsionar a sua empresa!</p>",




    images: [

      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-01.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-02.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-03.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-04.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-05.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-06.webp",
      "/src/assets/valvula-direcional-mecanica/valvula-direcional-mecanica-07.webp",
      
    ],

    mainContent: [
"<h2>PARA QUE SERVE A VÁLVULA DIRECIONAL MECÂNICA?</h2>",
"<p>A <strong>válvula direcional mecânica</strong> é o tipo mais simples de válvula em sistemas hidráulicos. Ela controla o fluxo de fluido, permitindo ou bloqueando sua passagem em diferentes direções, comumente funcionando como válvula de não-retorno. Sua operação baseia-se na variação da pressão, que determina o volume de fluxo que passa pelo regulador de pressão.</p>",
"<p>Ela pode ser utilizada em funções como válvulas de pré-preenchimento, válvulas de passagem secundária, pré-tensionamento e proteção de componentes hidráulicos contra surtos de pressão.</p>",
"<p>Disponível em diversos tamanhos para atender diferentes capacidades de fluxo, pode ser fixada em oleodutos, conexões de cartuchos ou placas, combinando com válvulas de checagem para controlar a velocidade do fluxo em uma direção.</p>",
"<h2>A VÁLVULA DIRECIONAL MECÂNICA NA HICOMP HIDRÁULICA</h2>",
"<p>A Hicomp Hidráulica, com mais de 19 anos no setor, oferece válvulas direcionais mecânicas de alta qualidade, contando com uma equipe técnica especializada para garantir atendimento individualizado e produtos confiáveis. A empresa mantém parcerias com marcas renomadas como Vickers, Rexroth, Parker, Denison Hydraulics, Caterpillar, e HDA.</p>",
"<p>Com uma estrutura moderna e comprometida, a Hicomp garante soluções eficientes para atender às necessidades específicas de seus clientes, aplicando rigorosos controles de qualidade e prazos cumpridos.</p>",

"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-de-palhetas": {
    introduction:
      "<p>Se você busca <strong>bomba de palhetas</strong>, ache aqui na Hicomp. Realize uma cotação hoje mesmo e ache uma equipe comprometida em te ajudar.</p>",




    images: [

      "/src/assets/bomba-de-palhetas/bomba-palhetas-01.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-02.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-03.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-04.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-05.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-06.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-07.webp",
      "/src/assets/bomba-de-palhetas/bomba-palhetas-08.webp",
    ],

    mainContent: [
"<h2>NÃO PERCA TEMPO E SAIBA ONDE ENCONTRAR BOMBA DE PALHETAS</h2>",
"<p>Quem busca por <strong>bomba de palhetas</strong>, encontra na Hicomp. Aqui você encontra bomba rexroth e bomba vickers, focando no que gera resultado para seus clientes.</p>",
"<p>Focando na qualidade sobre <strong>bomba de palhetas</strong>, é importante buscar um local que ofereça ótima qualidade e excelente custo-benefício, pontos importantes que ficam de fora no planejamento de organizações que não trabalham com seriedade e profissionalismo.</p>",
"<p>Então, não deixe essa oportunidade passar, faça uma cotação agora mesmo com nossa equipe para um atendimento personalizado sobre <strong>bomba de palhetas</strong>. Nosso quadro de funcionários é formado por colaboradores que recebem treinamentos constantes, estamos aguardando a sua ligação para melhor atendê-lo.</p>",
"<h2>HICOMP, A LÍDER QUANDO PRECISAR DE BOMBA DE PALHETAS</h2>",
"<p>Veja boas razões por que a Hicomp é a melhor escolha quando precisar de <strong>bomba de palhetas</strong>:</p>",
"<ul class='list'>",
"<li>líder no mercado</li>",
"<li>idônea</li>",
"<li>altamente qualificada</li>",
"<li>precursora no ramo</li>",
"<li>referência no segmento</li>",
"</ul>",
"<h2>OUTRAS INFORMAÇÕES SOBRE A HICOMP</h2>",
"<p>Na Hicomp tem a solução ideal para <strong>bomba de palhetas</strong>. Prezando o que há de mais moderno, traz inovações e variedades em bomba denison e conjunto rotativo vickers.</p>",
"<p>Conhecida por ser líder no mercado e idônea, padrões alcançados pela empresa possuir máquinas de última geração e equipamentos de qualidade, ainda mais, unido a um time com profissionais certificados de acordo com os melhores cursos do mercado e funcionários especialistas com mais de dez anos de experiência, garantem o sucesso de seus usuários de ponta a ponta.</p>",

"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  

  "bomba-de-palhetas-vickers": {
    introduction:
      "<p>Se você busca <strong>bomba de palhetas vickers</strong>, descubra a empresa indicada para o seu negócio. Realize uma cotação hoje mesmo e ache uma equipe comprometida em te ajudar.</p>",





    images: [

      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-01.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-02.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-03.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-04.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-05.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-06.webp",
      "/src/assets/bomba-de-palhetas-vickers/bomba-palhetas-vickers-07.webp",
      
    ],

    mainContent: [
"<p>É exatamente isso! Quando o tema é sobre <strong>bomba de palhetas vickers</strong> aqui com os especialistas da Hicomp você irá encontrar excelente custo-benefício com estoque vasto de itens.</p>",
"<h2>NÃO PERCA TEMPO E SAIBA ONDE ENCONTRAR BOMBA DE PALHETAS VICKERS</h2>",
"<p>A Hicomp objetiva seus reforços em oferecer a seus clientes uma estrutura com máquinas de última geração e equipamentos de qualidade, tudo isso para garantir que se tenha <strong>bomba de palhetas vickers</strong> com ótima qualidade.</p>",
"<p>Ainda tratando-se de <strong>bomba de palhetas vickers</strong>, priorize empresas que tenham ótima qualidade e tecnologia própria, características simples mas que mostram o comprometimento da organização com seus clientes.</p>",
"<p>É por tudo isso que a Hicomp é líder no mercado quanto se trata de empresas do segmento de hidráulica. Aqui nos empenhamos em garantir tudo que há de mais atual para obter a qualidade final para seus contratantes.</p>",
"<p>Então, não perca mais tempo, aproveite essa oportunidade e entre em contato agora mesmo para um atendimento diferenciado sobre <strong>bomba de palhetas vickers</strong>. Temos uma equipe com funcionários especialistas com mais de dez anos de experiência, não perca a oportunidade de entrar em contato com o nosso time de atendimento.</p>",
"<h2>ENTENDA UM POUCO MAIS SOBRE A HICOMP</h2>",
"<p>Aqui na Hicomp as melhores opções sempre estão à sua espera quando precisar de soluções para hidráulica. Aqui os clientes encontram itens como bomba rexroth e bomba vickers com ótima qualidade e tecnologia própria.</p>",
"<p>Não fique de fora, vem ser mais um cliente da Hicomp, empresa que tem feito a diferença no mercado pela seriedade e qualidade que fecha todo o ciclo de entrega com excelência para seus parceiros.</p>",
"<p>Se gostou do material desta página, separamos mais alguns conteúdos que podem ser do interesse para aquilo que esteja precisando. Veja ainda:</p>",
"<ul class='list'>",
"<li>bomba de palhetas</li>",
"<li>bomba rexroth</li>",
"<li>bomba vickers</li>",
"<li>conjunto rotativo</li>",
"<li>bomba denison</li>",
"</ul>",
"<p>Características técnicas da bomba de palhetas Vickers incluem sistema com carcaça, rotor descentralizado e palhetas com molas. São bombas robustas e eficientes, capazes de operar com pressões de pico até aproximadamente 310 bar (4500 psi) e fluxo ajustado conforme aplicação, garantindo alta performance e durabilidade para usos industriais variados.</p>",
"<p>Modelos como as séries V 25V, 45V e VMQ são amplamente utilizados, com especificações técnicas que garantem a confiabilidade e resistência necessárias para diferentes ambientes e exigências industriais.</p>",
"<p>Para adquirir bombas de palhetas Vickers com confiança, a Hicomp Hidráulica oferece pontos fortes como equipe especializada, estoque amplo, e comprometimento com qualidade e inovação.</p>",


"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "bomba-denison": {
    introduction:
      "<p>Se você busca <strong>bomba denison</strong>, ache aqui na Hicomp. Realize uma cotação hoje mesmo e ache uma equipe comprometida em te ajudar.</p>",





    images: [

      "/src/assets/bomba-denison/bomba-denison-01.webp",
      "/src/assets/bomba-denison/bomba-denison-02.webp",
      "/src/assets/bomba-denison/bomba-denison-03.webp",
      "/src/assets/bomba-denison/bomba-denison-04.webp",
      "/src/assets/bomba-denison/bomba-denison-05.webp",
      
      
    ],

    mainContent: [
"<h2>VENHA SABER MAIS SOBRE UMA EMPRESA DE BOMBA DENISON</h2>",
"<p>Quem busca por <strong>bomba denison</strong>, encontra na Hicomp. Aqui você encontra bomba rexroth e bomba vickers, focando no que gera resultado para seus clientes.</p>",
"<p>Ainda tratando-se de <strong>bomba denison</strong>, mais do que apenas entregar, o estabelecimento busca oferecer ótima qualidade e personalização para cada necessidade, pontos importantes que ficam de fora no planejamento de organizações que não trabalham com seriedade e profissionalismo.</p>",
"<p>Então, não deixe essa oportunidade passar, solicite seu orçamento agora mesmo com nossa equipe através de nossos canais para um atendimento personalizado sobre <strong>bomba denison</strong>. Aqui você encontra uma equipe com engenheiros e técnicos, estamos aguardando a sua ligação para melhor atendê-lo.</p>",
"<h2>HICOMP, A REFERÊNCIA NO MERCADO PARA BOMBA DENISON</h2>",
"<p>Veja boas razões por que a Hicomp é a melhor escolha quando precisar de <strong>bomba denison</strong>:</p>",
"<ul class='list'>",
"<li>líder no mercado</li>",
"<li>idônea</li>",
"<li>altamente qualificada</li>",
"<li>precursora no ramo</li>",
"<li>referência no segmento</li>",
"</ul>",
"<h2>MAIS INFORMAÇÕES INTERESSANTES SOBRE A HICOMP</h2>",
"<p>Aqui na Hicomp você acha o que há de melhor em <strong>bomba denison</strong>. São diversas opções de itens oferecidos, como <strong>bomba denison</strong> e conjunto rotativo vickers.</p>",
"<p>Conhecida por ser líder no mercado e idônea, padrões alcançados pela empresa possuir máquinas de última geração e equipamentos de qualidade, ainda mais, unido a um time com profissionais certificados de acordo com os melhores cursos do mercado e funcionários especialistas com mais de dez anos de experiência, garantem o sucesso de seus usuários de ponta a ponta.</p>",

"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-rexroth": {
    introduction:
      "<p>Se você busca <strong>bomba rexroth</strong>, ache aqui na Hicomp. Cote agora mesmo e conheça uma equipe de profissionais muito capacitada.</p>",






    images: [

      "/src/assets/bomba-rexroth/bomba-rexroth-01.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-02.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-03.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-04.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-05.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-06.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-07.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-08.webp",
      "/src/assets/bomba-rexroth/bomba-rexroth-09.webp",
      
      
    ],

    mainContent: [
"<p>Sim, é isso mesmo! Quando a questão é <strong>bomba rexroth</strong> aqui com os profissionais da Hicomp você poderá contar com excelente custo-benefício com serviços de manutenção podem ser realizados em nossa empresa ou em campo.</p>",
"<h2>NÃO PERCA TEMPO E SAIBA ONDE ENCONTRAR BOMBA REXROTH</h2>",
"<p>A Hicomp foca sua energia em oferecer a seus clientes uma estrutura com máquinas de última geração e equipamentos de qualidade, tudo para oferecer <strong>bomba rexroth</strong> com tecnologia própria.</p>",
"<p>Sem perder o foco em <strong>bomba rexroth</strong>, é importante buscar um local que ofereça ótima qualidade e alta durabilidade, detalhes que passam despercebidos e podem gerar prejuízos futuros para os clientes.</p>",
"<p>É por tudo isso que a Hicomp é líder no mercado quanto se trata de empresas do segmento de hidráulica. Aqui nos empenhamos em garantir tudo que há de mais atual para obter a qualidade final para seus contratantes.</p>",
"<p>Não perca mais tempo, entre em contato agora mesmo para um atendimento diferenciado sobre <strong>bomba rexroth</strong>. Nosso time dispõe de engenheiros e técnicos, não perca tempo e entre em contato conosco.</p>",
"<h2>MAIS INFORMAÇÕES INTERESSANTES SOBRE A HICOMP</h2>",
"<p>Saiba que na Hicomp existe variedade e qualidade quando o assunto for hidráulica. A empresa oferece opções como <strong>bomba rexroth</strong> e conjunto rotativo vickers com ótima qualidade e tecnologia própria.</p>",
"<p>Não fique de fora, vem ser mais um parceiro da Hicomp, empresa que tem feito a diferença no mercado pela seriedade e qualidade que garante o sucesso de seus parceiros de ponta a ponta.</p>",
"<p>Se gostou do nosso conteúdo, aproveite para ver mais conteúdos específicos para aquilo que precisa. Veja aqui:</p>",
"<ul class='list'>",
"<li>bomba de palhetas</li>",
"<li>bomba rexroth</li>",
"<li>bomba vickers</li>",
"<li>conjunto rotativo</li>",
"<li>bomba denison</li>",
"</ul>",


"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  

  "bomba-vickers": {
    introduction:
      "<p>Se você busca <strong>bomba vickers</strong>, ache aqui na Hicomp. Realize uma cotação hoje mesmo e ache uma equipe comprometida em te ajudar.</p>",







    images: [

      "/src/assets/bomba-vickers1/bomba-vickers-01.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-02.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-03.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-04.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-05.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-06.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-07.webp",
      "/src/assets/bomba-vickers1/bomba-vickers-08.webp",
      
      
    ],

    mainContent: [
"<h2>OBTENHA MAIS INFORMAÇÕES SOBRE A EMPRESA CAPACITADA EM BOMBA VICKERS</h2>",
"<p>Se alguém pesquisar <strong>bomba vickers</strong>, consegue encontrar o site da Hicomp. Disponibilizando para seus clientes bomba rexroth e conjunto rotativo vickers, disponibilizando o que há de mais atual para obter a qualidade final para seus clientes.</p>",
"<p>Ainda tratando-se de <strong>bomba vickers</strong>, na essência da companhia a mesma deve prezar por ótima qualidade e excelente custo-benefício, pequenos detalhes mas de grande importância para saber a procedência e seriedade da organização.</p>",
"<p>Então, aproveite este momento, solicite seu orçamento agora mesmo com nossa equipe através de nossos canais para um atendimento personalizado sobre <strong>bomba vickers</strong>. Temos um time com colaboradores que recebem treinamentos constantes, aguardamos ansiosos o seu contato.</p>",
"<h2>HICOMP, A REFERÊNCIA NO MERCADO PARA BOMBA VICKERS</h2>",
"<p>Saiba porque a Hicomp é sua melhor opção sempre que precisar de <strong>bomba vickers</strong>:</p>",
"<ul class='list'>",
"<li>profissionais certificados de acordo com os melhores cursos do mercado</li>",
"<li>engenheiros e técnicos</li>",
"<li>colaboradores que recebem treinamentos constantes</li>",
"<li>máquinas de última geração</li>",
"<li>equipamentos de qualidade</li>",
"<li>alta tecnologia</li>",
"</ul>",
"<h2>ENTENDA MELHOR OS DETALHES SOBRE A HICOMP</h2>",
"<p>Aqui na Hicomp existe variedade e qualidade quando o assunto for <strong>bomba vickers</strong>. Você pode achar variedades no portfólio como bomba rexroth e conjunto rotativo vickers.</p>",
"<p>Isso se deve ao fato da empresa ser líder no mercado e idônea, qualificações construídas pela empresa focar suas ações no resultado final tendo máquinas de última geração e equipamentos de qualidade, ainda mais, unido a um time com profissionais certificados de acordo com os melhores cursos do mercado e colaboradores que recebem treinamentos constantes, comprova seu profissionalismo ao trazer o melhor para seus usuários.</p>",



"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "conjunto-rotativo": {
    introduction:
      "<p>Se você busca <strong>conjunto rotativo</strong>, descubra a empresa indicada para o seu negócio. Cote agora mesmo e conheça uma equipe de profissionais muito capacitada.</p>",








    images: [

      "/src/assets/conjunto-rotativo/conjunto-rotativo-01.webp",
      "/src/assets/conjunto-rotativo/conjunto-rotativo-02.webp",
      "/src/assets/conjunto-rotativo/conjunto-rotativo-03.webp",
      "/src/assets/conjunto-rotativo/conjunto-rotativo-04.webp",
      "/src/assets/conjunto-rotativo/conjunto-rotativo-05.webp",
      "/src/assets/conjunto-rotativo/conjunto-rotativo-06.webp",
      
      
      
    ],

    mainContent: [
"<p>É isto mesmo! Quando a busca é por <strong>conjunto rotativo</strong> aqui na Hicomp você receberá personalização para cada necessidade com custo-benefício.</p>",
"<h2>VEJA MAIS INFORMAÇÕES RELEVANTES SOBRE A COMPANHIA REFERÊNCIA EM CONJUNTO ROTATIVO</h2>",
"<p>A Hicomp objetiva sua energia em proporcionar a seus parceiros uma estrutura com máquinas de última geração e alta tecnologia, tudo para certificar que se tenha <strong>conjunto rotativo</strong> com alta durabilidade.</p>",
"<p>Focando na qualidade sobre <strong>conjunto rotativo</strong>, priorize empresas que tenham ótima qualidade e tecnologia própria, pequenos detalhes mas de grande importância para saber a procedência e seriedade da organização.</p>",
"<p>É por tudo isso que a Hicomp é referência no segmento quando falamos de empresas de hidráulica. Aqui visamos entregar o que existe de melhor do mercado para obter o sucesso dos nossos parceiros.</p>",
"<p>Então, aproveite este momento, entre em contato agora mesmo com nossa equipe para um atendimento personalizado sobre <strong>conjunto rotativo</strong>. Temos mão de obra realizada por profissionais certificados de acordo com os melhores cursos do mercado, aguardamos a oportunidade para tirar suas dúvidas.</p>",
"<h2>ENTENDA UM POUCO MAIS SOBRE A HICOMP</h2>",
"<p>Saiba que na Hicomp você pode ter tudo que precisa quando o assunto for hidráulica. Líder em qualidade, a empresa oferece uma variedade de itens como bomba rexroth e bomba vickers com ótima qualidade e excelente custo-benefício.</p>",
"<p>Não fique de fora, vem ser mais um parceiro da Hicomp, empresa que tem feito a diferença no mercado pela idoneidade em tudo que faz onde fecha todo o ciclo de entrega com excelência para seus parceiros.</p>",
"<p>Se este conteúdo te ajudou, aproveite para ver mais materiais específicos para aquilo que precisa. Veja logo abaixo:</p>",
"<ul class='list'>",
"<li>bomba de palhetas</li>",
"<li>bomba rexroth</li>",
"<li>bomba vickers</li>",
"<li>conjunto rotativo</li>",
"<li>bomba denison</li>",
"</ul>",



"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },
  "conserto-de-valvulas-hidraulicas": {
    introduction:
      "<p>Se você busca <strong>conserto de válvulas hidráulicas</strong>, ache aqui na Hicomp. Cote agora mesmo e conheça uma equipe de profissionais muito capacitada.</p>",




    images: [

      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-01.webp",
      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-02.webp",
      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-03.webp",
      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-04.webp",
      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-05.webp",
      "/src/assets/conserto-de-valvulas-hidraulicas/conserto-valvulas-hidraulicas-06.webp",
      
      
    
    ],

    mainContent: [
"<p>É isto! Quando o assunto é <strong>conserto de válvulas hidráulicas</strong> aqui com os especialistas da Hicomp você irá encontrar alta durabilidade com serviços de manutenção podem ser realizados em nossa empresa ou em campo.</p>",
"<h2>VENHA SABER MAIS SOBRE UMA EMPRESA DE CONSERTO DE VÁLVULAS HIDRÁULICAS</h2>",
"<p>A Hicomp foca sua energia em criar para seus parceiros uma estrutura com máquinas de última geração e equipamentos de qualidade, tudo para certificar que se tenha <strong>conserto de válvulas hidráulicas</strong> com excelente custo-benefício.</p>",
"<p>Sem perder o foco em <strong>conserto de válvulas hidráulicas</strong>, é importante buscar um local que ofereça ótima qualidade e alta durabilidade, detalhes que passam despercebidos e podem gerar prejuízos futuros para os clientes.</p>",
"<p>É por tudo isso que a Hicomp é referência no segmento quando falamos de empresas de hidráulica. Aqui visamos entregar o que existe de melhor do mercado para obter o sucesso dos nossos parceiros.</p>",
"<p>Não perca mais tempo, solicite seu orçamento agora mesmo com nossa equipe através de nossos canais para um atendimento personalizado sobre <strong>conserto de válvulas hidráulicas</strong>. Nosso time tem funcionários especialistas com mais de dez anos de experiência, esperamos o seu contato para tirar todas as dúvidas.</p>",
"<h2>MAIS INFORMAÇÕES INTERESSANTES SOBRE A HICOMP</h2>",
"<p>Saiba que na Hicomp existe variedade e qualidade quando o assunto for hidráulica. A empresa oferece opções como bomba rexroth e conjunto rotativo vickers com ótima qualidade e tecnologia própria.</p>",
"<p>Faça como os muitos parceiros da Hicomp, empresa que tem sido apontada de forma positiva no mercado pela idoneidade em tudo que faz onde garante uma entrega de excelência de ponta a ponta.</p>",
"<p>Se curtiu nosso conteúdo, separamos mais alguns conteúdos que vão agregar ainda mais informações para o que está procurando. Veja abaixo:</p>",
"<ul class='list'>",
"<li>bomba de palhetas</li>",
"<li>bomba rexroth</li>",
"<li>bomba vickers</li>",
"<li>conjunto rotativo</li>",
"<li>bomba denison</li>",
"</ul>",




"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "valvula-direccional-dofluid": {
    introduction:
      "<p>Se você busca <strong>válvula direccional dofluid</strong>, ache aqui na Hicomp. Realize uma cotação hoje mesmo e ache uma equipe comprometida em te ajudar.</p>",





    images: [

      "/src/assets/valvula-direccional-dofluid/valvula-direccional-dofluid-01.webp",
      "/src/assets/valvula-direccional-dofluid/valvula-direccional-dofluid-02.webp",
      "/src/assets/valvula-direccional-dofluid/valvula-direccional-dofluid-03.webp",
      "/src/assets/valvula-direccional-dofluid/valvula-direccional-dofluid-04.webp",
      "/src/assets/valvula-direccional-dofluid/valvula-direccional-dofluid-05.webp",
     
      
    
    ],

    mainContent: [
"<h2>VENHA SABER MAIS SOBRE UMA EMPRESA DE VÁLVULA DIRECCIONAL DOFLUID</h2>",
"<p>Quem busca por <strong>válvula direccional dofluid</strong>, consegue encontrar o site da Hicomp. A empresa trabalha com bomba rexroth e bomba vickers, oferecendo o que há de melhor em tecnologia para seus clientes.</p>",
"<p>Ainda tratando-se de <strong>válvula direccional dofluid</strong>, mais do que apenas entregar, o estabelecimento busca oferecer ótima qualidade e personalização para cada necessidade, pontos importantes que ficam de fora no planejamento de organizações que não trabalham com seriedade e profissionalismo.</p>",
"<p>Não perca mais tempo, entre em contato agora mesmo para um atendimento diferenciado sobre <strong>válvula direccional dofluid</strong>. Nosso time dispõe de funcionários especialistas com mais de dez anos de experiência, não perca tempo e entre em contato conosco.</p>",
"<h2>HICOMP, REFERÊNCIA PARA VÁLVULA DIRECCIONAL DOFLUID</h2>",
"<p>Veja boas razões por que a Hicomp é líder quando buscar por <strong>válvula direccional dofluid</strong>:</p>",
"<ul class='list'>",
"<li>líder no mercado</li>",
"<li>idônea</li>",
"<li>altamente qualificada</li>",
"<li>precursora no ramo</li>",
"<li>referência no segmento</li>",
"</ul>",
"<h2>CONHEÇA MAIS DETALHES INTERESSANTES SOBRE A HICOMP</h2>",
"<p>Saiba que na Hicomp existem as melhores condições para você achar o que precisa para <strong>válvula direccional dofluid</strong>. Aqui os clientes encontram itens como bomba denison e bomba vickers.</p>",
"<p>Isso se deve ao fato da empresa ser líder no mercado e referência no segmento, padrões alcançados pela empresa possuir máquinas de última geração e alta tecnologia onde, agregando a uma equipe com profissionais certificados de acordo com os melhores cursos do mercado e colaboradores que recebem treinamentos constantes, garantem o sucesso de seus usuários de ponta a ponta.</p>",





"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },


  "valvula-proporcional-hidraulica-vickers": {
    introduction:
      "<p>Se você busca <strong>válvula proporcional hidráulica vickers</strong>, descubra a empresa indicada para o seu negócio. Cote agora mesmo e conheça uma equipe de profissionais muito capacitada.</p>",

    images: [

      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-01.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-02.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-03.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-04.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-05.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-06.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-07.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-08.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-09.webp",
      "/src/assets/valvula-proporcional-hidraulica-vickers/valvula-proporcional-hidraulica-vickers-10.webp",
     
      
    
    ],

    mainContent: [
"<h2>VENHA SABER MAIS SOBRE UMA EMPRESA DE VÁLVULA DIRECCIONAL DOFLUID</h2>",
"<p>Quem busca por <strong>válvula direccional dofluid</strong>, consegue encontrar o site da Hicomp. A empresa trabalha com bomba rexroth e bomba vickers, oferecendo o que há de melhor em tecnologia para seus clientes.</p>",
"<p>Ainda tratando-se de <strong>válvula direccional dofluid</strong>, mais do que apenas entregar, o estabelecimento busca oferecer ótima qualidade e personalização para cada necessidade, pontos importantes que ficam de fora no planejamento de organizações que não trabalham com seriedade e profissionalismo.</p>",
"<p>Não perca mais tempo, entre em contato agora mesmo para um atendimento diferenciado sobre <strong>válvula direccional dofluid</strong>. Nosso time dispõe de funcionários especialistas com mais de dez anos de experiência, não perca tempo e entre em contato conosco.</p>",
"<h2>HICOMP, REFERÊNCIA PARA VÁLVULA DIRECCIONAL DOFLUID</h2>",
"<p>Veja boas razões por que a Hicomp é líder quando buscar por <strong>válvula direccional dofluid</strong>:</p>",
"<ul class='list'>",
"<li>líder no mercado</li>",
"<li>idônea</li>",
"<li>altamente qualificada</li>",
"<li>precursora no ramo</li>",
"<li>referência no segmento</li>",
"</ul>",
"<h2>CONHEÇA MAIS DETALHES INTERESSANTES SOBRE A HICOMP</h2>",
"<p>Saiba que na Hicomp existem as melhores condições para você achar o que precisa para <strong>válvula direccional dofluid</strong>. Aqui os clientes encontram itens como bomba denison e bomba vickers.</p>",
"<p>Isso se deve ao fato da empresa ser líder no mercado e referência no segmento, padrões alcançados pela empresa possuir máquinas de última geração e alta tecnologia onde, agregando a uma equipe com profissionais certificados de acordo com os melhores cursos do mercado e colaboradores que recebem treinamentos constantes, garantem o sucesso de seus usuários de ponta a ponta.</p>",





"</div>"
    ],
    brands: ["Vickers", "Parker", "Rexroth", "Denison"],

  },

  "bomba-de-pistao-hidraulica": {
    introduction: "A <strong>bomba de pistão hidráulica</strong> é o componente de maior pressão e precisão em sistemas óleo-hidráulicos industriais. A HiComp é especializada em manutenção, reparo e fornecimento de bombas de pistão das principais marcas do mercado, atendendo indústrias em São Paulo e Grande SP.",
    mainContent: [
      "<p>A <strong>bomba de pistão hidráulica</strong> é o tipo de bomba mais utilizado em aplicações que exigem alta pressão e controle preciso de vazão. Ao contrário das bombas de engrenagem ou palhetas, a bomba de pistão permite variação de cilindrada, tornando-a ideal para sistemas de alta eficiência energética.</p>",
      "<h2>TIPOS DE BOMBA DE PISTÃO HIDRÁULICA</h2>",
      "<p>As bombas de pistão se dividem em dois grupos principais:</p>",
      "<ul class=\"list\">\n<li>• <strong>Bomba de pistão axial:</strong> pistões dispostos paralelamente ao eixo, alta eficiência volumétrica, pressões até 420 bar;</li>\n<li>• <strong>Bomba de pistão radial:</strong> pistões dispostos radialmente, ideal para altíssimas pressões e baixas rotações.</li>\n</ul>",
      "<h2>VANTAGENS DA BOMBA DE PISTÃO</h2>",
      "<p>Entre as vantagens da <strong>bomba de pistão hidráulica</strong> destacam-se: alta eficiência volumétrica (acima de 95%), capacidade de trabalhar com pressões superiores a 350 bar, controle de cilindrada variável e longa vida útil com manutenção adequada.</p>",
      "<p>A HiComp realiza reparo completo de <strong>bombas de pistão hidráulicas</strong>, incluindo substituição de conjunto rotativo, retentores, rolamentos e placa de distribuição. Atendemos marcas Parker, Rexroth, Eaton, Sauer Danfoss e Denison.</p>"
    ],
    technicalSpecs: "Pressão máxima: até 420 bar | Cilindrada: 18 a 500 cc/rot | Rotação: 500 a 3600 rpm | Eficiência volumétrica: > 95%",
    applications: ["Prensas hidráulicas", "Injetoras de plástico", "Máquinas-ferramenta CNC", "Centrais hidráulicas industriais", "Equipamentos de construção pesada"],
    brands: ["Parker", "Rexroth", "Eaton", "Sauer Danfoss", "Denison"],
    maintenance: "A manutenção da bomba de pistão inclui: análise de vazamento interno, substituição de conjunto rotativo, troca de retentores e rolamentos, limpeza de placa de distribuição e teste de pressão. A HiComp oferece garantia de 6 meses em todos os reparos.",
    faq: [
      { question: "Qual a diferença entre bomba de pistão axial e radial?", answer: "A bomba axial tem pistões paralelos ao eixo e é mais comum em aplicações industriais e móveis. A radial tem pistões perpendiculares ao eixo, sendo utilizada em pressões extremamente altas (acima de 400 bar)." },
      { question: "Quanto tempo leva o reparo de uma bomba de pistão?", answer: "O prazo médio de reparo é de 3 a 7 dias úteis, dependendo da disponibilidade de peças e do nível de desgaste encontrado na avaliação técnica." }
    ]
  },

  "bomba-hidraulica-eaton": {
    introduction: "A HiComp é especializada em <strong>bomba hidráulica Eaton</strong> (antiga Vickers), oferecendo reparo, manutenção e fornecimento de componentes para toda a linha Eaton em São Paulo e Grande SP. Atendemos com rapidez e garantia técnica.",
    mainContent: [
      "<p>A <strong>bomba hidráulica Eaton</strong> é amplamente reconhecida pela sua robustez e confiabilidade em aplicações industriais. A Eaton adquiriu a linha Vickers e manteve a tradição de excelência em componentes hidráulicos de alta performance.</p>",
      "<h2>PRINCIPAIS MODELOS DE BOMBA HIDRÁULICA EATON</h2>",
      "<ul class=\"list\">\n<li>• <strong>Eaton PVH:</strong> bomba de pistão axial de alta pressão, cilindrada variável;</li>\n<li>• <strong>Eaton PVQ:</strong> bomba de pistão de pressão compensada, até 250 bar;</li>\n<li>• <strong>Eaton PVE:</strong> série de alta eficiência para centrais hidráulicas;</li>\n<li>• <strong>Eaton V10/V20:</strong> bombas de palhetas Vickers, aplicação industrial clássica.</li>\n</ul>",
      "<h2>REPARO DE BOMBA HIDRÁULICA EATON EM SÃO PAULO</h2>",
      "<p>A HiComp realiza o reparo completo de <strong>bombas hidráulicas Eaton</strong> com peças originais ou de reposição de alta qualidade. Nossa equipe é treinada nos produtos Eaton/Vickers e oferece diagnóstico rápido e orçamento sem compromisso.</p>"
    ],
    technicalSpecs: "Pressão: até 350 bar | Cilindrada: 6 a 250 cc/rot | Rotação: 900 a 3000 rpm | Fluido: óleo mineral ISO VG 46/68",
    applications: ["Prensas industriais", "Injetoras de plástico", "Centrais hidráulicas", "Máquinas-ferramenta", "Equipamentos de fundição"],
    brands: ["Eaton", "Vickers", "Parker", "Rexroth"],
    maintenance: "Serviços disponíveis: diagnóstico de falhas, substituição de kit de vedação, troca de conjunto rotativo, análise de desgaste interno e teste de pressão final. Garantia de 6 meses.",
    faq: [
      { question: "A Eaton substituiu completamente a Vickers?", answer: "Sim, a Eaton adquiriu a Vickers e todos os modelos Vickers passaram a ser comercializados sob a marca Eaton. Os componentes são intercambiáveis e a HiComp atende ambas as linhas." },
      { question: "Vocês têm peças para bomba Eaton PVH?", answer: "Sim, trabalhamos com kits de vedação, conjuntos rotativos e componentes internos para a linha PVH. Entre em contato para verificar disponibilidade de estoque." }
    ]
  },

  "bomba-hidraulica-sauer-danfoss": {
    introduction: "A HiComp atende demandas por <strong>bomba hidráulica Sauer Danfoss</strong> em São Paulo e Grande SP. Realizamos reparo, manutenção e fornecimento de componentes para toda a linha Sauer Danfoss com equipe técnica especializada.",
    mainContent: [
      "<p>A <strong>bomba hidráulica Sauer Danfoss</strong> é referência em aplicações industriais e móveis, sendo amplamente utilizada em máquinas agrícolas, colheitadeiras, escavadeiras e sistemas de transmissão hidrostática.</p>",
      "<h2>PRINCIPAIS SÉRIES SAUER DANFOSS</h2>",
      "<ul class=\"list\">\n<li>• <strong>Série 20/22:</strong> bomba de pistão axial para transmissões hidrostáticas leves;</li>\n<li>• <strong>Série 40/42:</strong> alta eficiência para aplicações industriais e móveis;</li>\n<li>• <strong>Série 51/90:</strong> transmissões de alta potência para equipamentos pesados;</li>\n<li>• <strong>Série H1:</strong> tecnologia de controle avançado para colheitadeiras e tratores.</li>\n</ul>",
      "<p>A HiComp possui experiência técnica em toda a linha <strong>Sauer Danfoss</strong>, realizando reparo com peças de reposição de alta qualidade e garantia de serviço. Atendemos clientes em São Paulo, Grande SP e interior.</p>"
    ],
    technicalSpecs: "Pressão: até 480 bar (pico) | Cilindrada: 18 a 250 cc/rot | Rotação: 500 a 4000 rpm | Aplicação: industrial e móvel",
    applications: ["Colheitadeiras agrícolas", "Tratores de alta potência", "Escavadeiras", "Equipamentos de construção", "Transmissões hidrostáticas"],
    brands: ["Sauer Danfoss", "Danfoss", "Parker", "Rexroth"],
    maintenance: "Reparo especializado: substituição de bloco de cilindros, sapatas, placa de distribuição, retentores e rolamentos. Diagnóstico por análise de vibração e teste de eficiência volumétrica.",
    faq: [
      { question: "Qual a diferença entre Sauer Danfoss e Danfoss Hydraulics?", answer: "A Danfoss adquiriu a Sauer-Danfoss e renomeou a divisão hidráulica para Danfoss Power Solutions. Os produtos mantêm a mesma qualidade e compatibilidade." },
      { question: "Vocês reparam a série 90 Sauer Danfoss?", answer: "Sim, realizamos reparo completo da série 90, incluindo substituição de conjunto rotativo, servo pistão, válvula de carga e all kits de vedação." }
    ]
  },

  "bomba-hidraulica-parker-preco": {
    introduction: "Quer saber o <strong>preço de bomba hidráulica Parker</strong>? A HiComp oferece orçamento rápido para bombas Parker novas, recondicionadas e reparo de bombas usadas. Atendemos São Paulo, Grande SP e todo o Brasil com entrega ágil.",
    mainContent: [
      "<p>O <strong>preço da bomba hidráulica Parker</strong> varia conforme o modelo, cilindrada e condição (nova, recondicionada ou reparo). A HiComp oferece a melhor relação custo-benefício, com opções para todos os orçamentos.</p>",
      "<h2>FATORES QUE INFLUENCIAM O PREÇO DA BOMBA PARKER</h2>",
      "<ul class=\"list\">\n<li>• <strong>Tipo de bomba:</strong> engrenagem (mais acessível), palhetas (intermediário), pistão (maior investimento);</li>\n<li>• <strong>Cilindrada:</strong> bombas de maior deslocamento têm custo proporcional mais alto;</li>\n<li>• <strong>Condição:</strong> nova, recondicionada ou reparo — a HiComp oferece todas as opções;</li>\n<li>• <strong>Urgência:</strong> para paradas de produção, trabalhamos com prioridade de atendimento.</li>\n</ul>",
      "<h2>COMO SOLICITAR ORÇAMENTO DE BOMBA PARKER</h2>",
      "<p>Para obter o melhor <strong>preço de bomba hidráulica Parker</strong>, envie o número de série ou modelo da bomba via WhatsApp. Nossa equipe responde em até 2 horas com orçamento detalhado e prazo de entrega.</p>"
    ],
    technicalSpecs: "Modelos Parker: PV, PVP, T6, P2, F11, F12 | Cilindradas: 6 a 500 cc/rot | Pressão: até 420 bar",
    applications: ["Prensas industriais", "Injetoras", "Máquinas-ferramenta", "Centrais hidráulicas", "Equipamentos móveis"],
    brands: ["Parker", "Rexroth", "Eaton", "Vickers"],
    maintenance: "Oferecemos reparo de bomba Parker com garantia de 6 meses, prazo de 3 a 7 dias úteis e laudo técnico incluso. Solicite orçamento sem compromisso.",
    faq: [
      { question: "Qual o preço médio de uma bomba hidráulica Parker nova?", answer: "Bombas Parker de engrenagem começam em torno de R$ 800. Bombas de pistão variável podem variar de R$ 5.000 a R$ 25.000 dependendo da cilindrada. Entre em contato para orçamento exato." },
      { question: "Vale mais a pena reparar ou comprar uma bomba Parker nova?", answer: "Em geral, o reparo custa 30 a 60% do preço de uma bomba nova e tem garantia equivalente. Para bombas com desgaste severo, a compra de uma recondicionada pode ser mais econômica." }
    ]
  },

  "bomba-hidraulica-sao-paulo": {
    introduction: "Precisa de <strong>bomba hidráulica em São Paulo</strong>? A HiComp está localizada em São Paulo e atende toda a Grande SP com estoque de bombas hidráulicas, reparo rápido e entrega no mesmo dia para paradas de produção.",
    mainContent: [
      "<p>A HiComp é referência em <strong>bomba hidráulica em São Paulo</strong>, com estoque de bombas das principais marcas e equipe técnica pronta para atender emergências industriais com agilidade.</p>",
      "<h2>POR QUE ESCOLHER A HICOMP PARA BOMBA HIDRÁULICA EM SÃO PAULO</h2>",
      "<ul class=\"list\">\n<li>• Estoque local em São Paulo — entrega no mesmo dia;</li>\n<li>• Equipe técnica com mais de 20 anos de experiência;</li>\n<li>• Reparo expresso para paradas de produção — prazo de 24h;</li>\n<li>• Bombas novas, recondicionadas e reparo — todas as opções;</li>\n<li>• Atendemos toda a Grande SP e interior.</li>\n</ul>",
      "<h2>MARCAS DE BOMBA HIDRÁULICA DISPONÍVEIS EM SÃO PAULO</h2>",
      "<p>Trabalhamos com as principais marcas de <strong>bombas hidráulicas em São Paulo</strong>: Parker, Rexroth, Vickers, Eaton, Denison, Sauer Danfoss e HDA. Consulte estoque e obtenha orçamento via WhatsApp.</p>"
    ],
    technicalSpecs: "Estoque: São Paulo (SP) | Entrega: mesma região São Paulo em 24h | Tipos: engrenagem, palhetas, pistão axial e radial",
    applications: ["Indústria automotiva SP", "Metalurgia e fundição", "Prensas e estampagem", "Injetoras de plástico", "Equipamentos de construção"],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison", "Sauer Danfoss"],
    maintenance: "Reparo de emergência disponível com prazo de 24 a 48h para paradas críticas de produção. Entre em contato pelo WhatsApp para atendimento imediato.",
    faq: [
      { question: "Vocês têm bomba hidráulica em estoque em São Paulo?", answer: "Sim, mantemos estoque de bombas das principais marcas em nossa unidade em São Paulo. Para verificar disponibilidade, entre em contato via WhatsApp com o modelo desejado." },
      { question: "Vocês atendem emergências no mesmo dia?", answer: "Sim, para paradas de produção trabalhamos com atendimento prioritário. Entre em contato pelo WhatsApp informando a urgência e o modelo da bomba." }
    ]
  },

  "reparo-de-bomba-hidraulica": {
    introduction: "A HiComp é especializada em <strong>reparo de bomba hidráulica</strong> em São Paulo, realizando diagnóstico preciso, substituição de componentes desgastados e testes de pressão com garantia de serviço. Atendemos todas as marcas e tipos de bombas.",
    mainContent: [
      "<p>O <strong>reparo de bomba hidráulica</strong> é uma alternativa econômica e eficiente à compra de uma bomba nova. Com diagnóstico especializado e peças de qualidade, uma bomba reparada pela HiComp tem desempenho equivalente ao original.</p>",
      "<h2>ETAPAS DO REPARO DE BOMBA HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• <strong>Recepção e diagnóstico:</strong> análise completa com laudo técnico;</li>\n<li>• <strong>Desmontagem:</strong> inspeção de todos os componentes internos;</li>\n<li>• <strong>Substituição:</strong> troca de peças desgastadas — retentores, rolamentos, conjunto rotativo;</li>\n<li>• <strong>Montagem e teste:</strong> montagem em bancada e teste de pressão e vazão;</li>\n<li>• <strong>Garantia:</strong> 6 meses de garantia em todos os reparos.</li>\n</ul>",
      "<h2>MARCAS ATENDIDAS NO REPARO DE BOMBA HIDRÁULICA</h2>",
      "<p>A HiComp realiza <strong>reparo de bomba hidráulica</strong> das marcas Parker, Rexroth, Vickers, Eaton, Denison, Sauer Danfoss e HDA. Prazo médio de 3 a 7 dias úteis, com atendimento expresso para urgências.</p>"
    ],
    technicalSpecs: "Prazo: 3 a 7 dias úteis | Garantia: 6 meses | Tipos: engrenagem, palhetas, pistão axial e radial | Laudo técnico incluso",
    applications: ["Bombas de pistão axial", "Bombas de palhetas", "Bombas de engrenagem", "Bombas tandem", "Bombas de alta pressão"],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison", "Sauer Danfoss"],
    maintenance: "Todo reparo inclui limpeza ultrassônica dos componentes, substituição de kits de vedação, teste em bancada com medição de eficiência volumétrica e laudo técnico completo.",
    faq: [
      { question: "Como saber se minha bomba precisa de reparo ou substituição?", answer: "Sinais de reparo: ruído excessivo, queda de pressão, aquecimento anormal e vazamento externo. A HiComp faz diagnóstico gratuito e indica a solução mais econômica." },
      { question: "Qual o custo médio do reparo de bomba hidráulica?", answer: "O reparo geralmente custa 30 a 60% do valor de uma bomba nova. O orçamento exato depende do diagnóstico. Entre em contato para avaliação sem compromisso." }
    ]
  },

  "conserto-de-bomba-hidraulica": {
    introduction: "Precisa de <strong>conserto de bomba hidráulica</strong>? A HiComp realiza o conserto de bombas hidráulicas de todas as marcas com diagnóstico rápido, peças de qualidade e garantia de 6 meses. Estamos em São Paulo, atendendo toda a Grande SP.",
    mainContent: [
      "<p>O <strong>conserto de bomba hidráulica</strong> na HiComp começa com um diagnóstico detalhado sem custo. Identificamos a causa do problema e apresentamos o orçamento antes de iniciar qualquer reparo.</p>",
      "<h2>QUANDO REALIZAR O CONSERTO DA BOMBA HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• Ruído excessivo ou cavitação na bomba;</li>\n<li>• Queda de pressão no sistema hidráulico;</li>\n<li>• Aquecimento anormal do fluido hidráulico;</li>\n<li>• Vazamento de óleo pela flange ou eixo;</li>\n<li>• Vibração excessiva durante operação.</li>\n</ul>",
      "<p>A HiComp realiza o <strong>conserto de bomba hidráulica</strong> com equipe própria qualificada, sem terceirização. Isso garante qualidade no serviço e agilidade no atendimento. Para emergências, oferecemos prazo de 24h.</p>"
    ],
    technicalSpecs: "Diagnóstico: gratuito | Prazo: 24h (urgência) a 7 dias úteis | Garantia: 6 meses | Atendimento: São Paulo e Grande SP",
    applications: ["Conserto de bomba Parker", "Conserto de bomba Rexroth", "Conserto de bomba Vickers", "Conserto de bomba Eaton", "Conserto de bomba Denison"],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Denison"],
    maintenance: "O conserto inclui limpeza, substituição de peças desgastadas, remontagem em ambiente controlado e teste final em bancada com pressão nominal.",
    faq: [
      { question: "Vocês buscam a bomba para conserto?", answer: "Sim, para clientes na Grande SP oferecemos serviço de coleta e entrega. Entre em contato pelo WhatsApp para agendar a retirada." },
      { question: "O conserto tem garantia?", answer: "Sim, todos os consertos realizados pela HiComp têm garantia de 6 meses, cobrindo defeitos de mão de obra e das peças substituídas." }
    ]
  },

  "cilindro-telescopico": {
    introduction: "A HiComp fabrica e repara <strong>cilindros telescópicos</strong> para caçambas basculantes, guindastes e equipamentos agrícolas. Atendemos São Paulo e Grande SP com fabricação sob medida, reparo e fornecimento de peças.",
    mainContent: [
      "<p>O <strong>cilindro telescópico</strong> é um tipo especial de cilindro hidráulico composto por múltiplos estágios concêntricos que se estendem sequencialmente, proporcionando grande curso de trabalho em um comprimento retracted reduzido.</p>",
      "<h2>APLICAÇÕES DO CILINDRO TELESCÓPICO</h2>",
      "<ul class=\"list\">\n<li>• Caçambas basculantes de caminhões;</li>\n<li>• Plataformas elevatórias e guindastes;</li>\n<li>• Tratores e máquinas agrícolas;</li>\n<li>• Equipamentos de terraplanagem;</li>\n<li>• Sistemas de içamento industrial.</li>\n</ul>",
      "<h2>FABRICAÇÃO DE CILINDRO TELESCÓPICO SOB MEDIDA</h2>",
      "<p>A HiComp fabrica <strong>cilindros telescópicos</strong> de 2 a 5 estágios, com diâmetros de 50 a 300mm e pressão de trabalho até 250 bar. Também realizamos reparo de cilindros telescópicos com substituição de vedações, cromagem de hastes e recondicionamento de estojos.</p>"
    ],
    technicalSpecs: "Estágios: 2 a 5 | Diâmetro: 50 a 300mm | Pressão: até 250 bar | Curso total: até 10.000mm | Material: aço carbono ou inox",
    applications: ["Caçambas basculantes", "Guindastes hidráulicos", "Plataformas elevatórias", "Tratores agrícolas", "Compactadores de lixo"],
    brands: ["HiComp (fabricação própria)", "Parker", "Rexroth", "Bosch"],
    maintenance: "Manutenção de cilindro telescópico: substituição de kits de vedação por estágio, cromagem de hastes desgastadas, verificação de alinhamento e teste hidrostático completo.",
    faq: [
      { question: "Qual a diferença entre cilindro telescópico simples e duplo efeito?", answer: "O simples efeito estende por pressão hidráulica e retrai por gravidade ou mola. O duplo efeito usa pressão hidráulica nos dois sentidos, sendo ideal para aplicações que exigem controle preciso da retração." },
      { question: "Vocês fazem cilindro telescópico sob medida?", answer: "Sim, fabricamos cilindros telescópicos de acordo com as especificações do cliente, incluindo dimensionamento hidráulico, seleção de material e acabamento superficial." }
    ]
  },

  "cilindro-hidraulico-inox": {
    introduction: "A HiComp fabrica <strong>cilindros hidráulicos em inox</strong> (aço inoxidável) para aplicações em indústrias alimentícias, farmacêuticas e ambientes corrosivos. Fabricação sob medida com certificação de materiais e garantia de qualidade.",
    mainContent: [
      "<p>O <strong>cilindro hidráulico de inox</strong> é especificado para ambientes onde a resistência à corrosão é fundamental, como processamento de alimentos, indústria farmacêutica, química e marinha.</p>",
      "<h2>QUANDO USAR CILINDRO HIDRÁULICO EM INOX</h2>",
      "<ul class=\"list\">\n<li>• Indústrias alimentícias sujeitas a lavagem CIP/SIP;</li>\n<li>• Ambientes com produtos químicos agressivos;</li>\n<li>• Aplicações offshore e marítimas;</li>\n<li>• Indústria farmacêutica com requisitos de higiene;</li>\n<li>• Equipamentos expostos a agentes oxidantes.</li>\n</ul>",
      "<h2>ESPECIFICAÇÕES DO CILINDRO HIDRÁULICO INOX</h2>",
      "<p>A HiComp utiliza aço inoxidável AISI 304 ou AISI 316L na fabricação de <strong>cilindros hidráulicos em inox</strong>, com vedações de PTFE ou NBR grau alimentício e acabamento superpolido conforme normas higiênicas. Fabricamos sob medida com prazo de 7 a 15 dias úteis.</p>"
    ],
    technicalSpecs: "Material: AISI 304 ou AISI 316L | Pressão: até 250 bar | Diâmetro: 25 a 320mm | Acabamento: superpolido RA < 0.4µm | Vedação: PTFE, NBR grau alimentício",
    applications: ["Processamento de alimentos", "Indústria farmacêutica", "Química e petroquímica", "Ambiente offshore", "Máquinas de limpeza industrial"],
    brands: ["HiComp (fabricação própria)", "Parker", "Rexroth"],
    maintenance: "Manutenção preventiva inclui substituição de vedações grau alimentício, inspeção visual de superfícies, verificação de acabamento e teste hidrostático conforme norma.",
    faq: [
      { question: "Qual inox é recomendado para indústria alimentícia?", answer: "O AISI 316L é o mais indicado para contato com alimentos e produtos de limpeza, pois contém molibdênio que aumenta a resistência à corrosão por cloretos." },
      { question: "O cilindro inox tem o mesmo desempenho que o de aço carbono?", answer: "Sim, o desempenho hidráulico é idêntico. A diferença está apenas na resistência à corrosão e no custo, que é aproximadamente 2x maior que o cilindro em aço carbono." }
    ]
  },

  "cilindro-hidraulico-parker": {
    introduction: "A HiComp é revendedor e especialista em reparo de <strong>cilindro hidráulico Parker</strong> em São Paulo. Trabalhamos com toda a linha Parker de cilindros industriais, com estoque de peças e kits de vedação para atendimento rápido.",
    mainContent: [
      "<p>O <strong>cilindro hidráulico Parker</strong> é reconhecido pela qualidade de fabricação, durabilidade e ampla disponibilidade de peças de reposição no mercado brasileiro. A HiComp atende desde peças avulsas até o reparo completo de cilindros Parker.</p>",
      "<h2>LINHA DE CILINDROS HIDRÁULICOS PARKER</h2>",
      "<ul class=\"list\">\n<li>• <strong>Parker Série 2H:</strong> cilindro industrial padrão NFPA, alta resistência;</li>\n<li>• <strong>Parker Série 3H:</strong> cilindro compacto para espaços reduzidos;</li>\n<li>• <strong>Parker Série CD70:</strong> ISO 6020/6022, aplicação industrial leve;</li>\n<li>• <strong>Parker Série CB2:</strong> cilindro compacto de alta pressão até 350 bar.</li>\n</ul>",
      "<p>A HiComp mantém estoque de kits de vedação Parker para as principais séries, permitindo reparo rápido com redução do prazo de parada. Entre em contato com o número de série para verificação de peças.</p>"
    ],
    technicalSpecs: "Séries: 2H, 3H, CD70, CB2, HMI | Pressão: 70 a 350 bar | Diâmetro haste: 16 a 200mm | Diâmetro cilindro: 25 a 500mm",
    applications: ["Prensas hidráulicas", "Máquinas-ferramenta", "Injetoras de plástico", "Manipuladores industriais", "Equipamentos de testes"],
    brands: ["Parker", "Rexroth", "HiComp (fabricação sob medida)"],
    maintenance: "Reparo de cilindro Parker: substituição de kit de vedação, cromagem de haste, polimento de camisa, substituição de juntas e teste hidrostático. Garantia de 6 meses.",
    faq: [
      { question: "Vocês têm kit de vedação para cilindro Parker série 2H?", answer: "Sim, mantemos estoque de kits de vedação Parker série 2H nas bitolas mais comuns. Para bitolas especiais, prazo de 2 a 5 dias para importação." },
      { question: "Como identificar o modelo do cilindro Parker?", answer: "O modelo está na plaqueta ou gravado no corpo do cilindro. Geralmente começa com números seguidos de letras (ex: 2HB1214). Envie uma foto via WhatsApp para identificação." }
    ]
  },

  "motor-hidraulico-eaton": {
    introduction: "A HiComp realiza reparo e fornece componentes para <strong>motor hidráulico Eaton</strong> (ex-Vickers) em São Paulo. Atendemos toda a linha de motores Eaton com diagnóstico rápido e garantia de serviço.",
    mainContent: [
      "<p>O <strong>motor hidráulico Eaton</strong> é amplamente utilizado em aplicações industriais que exigem torque elevado e operação contínua. Após a aquisição da Vickers pela Eaton, os motores mantiveram a mesma qualidade e confiabilidade.</p>",
      "<h2>PRINCIPAIS MODELOS DE MOTOR HIDRÁULICO EATON</h2>",
      "<ul class=\"list\">\n<li>• <strong>Eaton Char-Lynn (série 2K, 4K, 6K):</strong> motores orbitais para aplicações agrícolas e construção;</li>\n<li>• <strong>Eaton MFE/MFB:</strong> motores de pistão axial, alta potência e eficiência;</li>\n<li>• <strong>Eaton M4/M7:</strong> motores de palhetas, baixo ruído, aplicações industriais.</li>\n</ul>",
      "<p>A HiComp possui equipe treinada para o reparo de <strong>motores hidráulicos Eaton</strong>, com peças de reposição disponíveis e prazo de atendimento de 3 a 7 dias úteis para a maioria dos modelos.</p>"
    ],
    technicalSpecs: "Cilindrada: 25 a 1000 cc/rot | Pressão: até 350 bar | Torque: até 5000 Nm | Rotação: 10 a 3000 rpm",
    applications: ["Máquinas agrícolas", "Equipamentos de construção", "Accionamentos de esteiras", "Guindastes e manipuladores", "Drives hidrostáticos"],
    brands: ["Eaton", "Vickers", "Parker", "Rexroth"],
    maintenance: "Reparo de motor Eaton: substituição de conjunto rotativo, sapatas, placa de válvula, retentores e rolamentos. Teste de eficiência volumétrica incluso. Garantia de 6 meses.",
    faq: [
      { question: "Os motores Eaton são compatíveis com motores Vickers originais?", answer: "Sim, os motores Eaton substituem diretamente os modelos Vickers equivalentes, pois mantêm as mesmas dimensões de flange, eixo e conexões hidráulicas." },
      { question: "Qual a diferença entre motor orbital Eaton e motor de pistão?", answer: "O motor orbital (Char-Lynn) é mais compacto e adequado para baixas rotações e alto torque. O motor de pistão oferece maior eficiência em altas pressões e velocidades variáveis." }
    ]
  },

  "motor-hidraulico-orbital": {
    introduction: "A HiComp fornece e repara <strong>motores hidráulicos orbitais</strong> (gerotores) para aplicações agrícolas, florestais e industriais. Trabalhamos com as marcas Danfoss, Eaton Char-Lynn, Parker e White.",
    mainContent: [
      "<p>O <strong>motor hidráulico orbital</strong> (ou gerotor) é um tipo de motor de baixa velocidade e alto torque, amplamente utilizado em aplicações móveis como tratores, colheitadeiras e equipamentos florestais.</p>",
      "<h2>CARACTERÍSTICAS DO MOTOR HIDRÁULICO ORBITAL</h2>",
      "<ul class=\"list\">\n<li>• Baixa velocidade: 10 a 1000 rpm tipicamente;</li>\n<li>• Alto torque: ideal para tracionamento direto sem caixa de redução;</li>\n<li>• Compacto e leve: fácil instalação em espaços reduzidos;</li>\n<li>• Simples e robusto: poucas peças móveis, alta confiabilidade.</li>\n</ul>",
      "<h2>REPARO DE MOTOR ORBITAL</h2>",
      "<p>O reparo do <strong>motor hidráulico orbital</strong> consiste principalmente na substituição do conjunto gerotor (engrenagens internas), vedações e rolamentos. A HiComp realiza diagnóstico, reparo e teste em bancada com garantia de 6 meses.</p>"
    ],
    technicalSpecs: "Rotação: 10 a 1000 rpm | Torque: 50 a 5000 Nm | Pressão: até 250 bar | Cilindrada: 80 a 1000 cc/rot",
    applications: ["Motores de roda de tratores", "Tração de plataformas agrícolas", "Acionamento de esteiras", "Equipamentos florestais", "Moinho e misturadores industriais"],
    brands: ["Danfoss (OMM, OMP, OMR, OMT)", "Eaton Char-Lynn", "Parker TG, TF", "White Drive Products"],
    maintenance: "Reparo inclui: desmontagem e limpeza, substituição de conjunto gerotor, retentores, rolamentos e eixo cardânico se necessário. Teste de eficiência em bancada.",
    faq: [
      { question: "Qual a diferença entre motor orbital e motor de pistão?", answer: "O motor orbital é mais econômico, compacto e adequado para baixas rotações. O motor de pistão oferece maior eficiência, velocidade e pressão, sendo usado em aplicações de alta performance." },
      { question: "Vocês têm peças para motor Danfoss OMP?", answer: "Sim, trabalhamos com kits de reparo para toda a linha Danfoss OM (OMM, OMP, OMR, OMT, OMV). Entre em contato com a cilindrada para verificar estoque." }
    ]
  },

  "revisao-de-unidade-hidraulica": {
    introduction: "A HiComp realiza <strong>revisão completa de unidade hidráulica</strong> industrial, incluindo análise de fluido, inspeção de componentes, limpeza de reservatório e calibração de pressões. Atendemos São Paulo e Grande SP com garantia de serviço.",
    mainContent: [
      "<p>A <strong>revisão de unidade hidráulica</strong> é um serviço preventivo essencial para garantir a vida útil dos componentes e evitar paradas não planejadas. A HiComp recomenda revisão anual ou a cada 2.000 horas de operação.</p>",
      "<h2>O QUE INCLUI A REVISÃO DE UNIDADE HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• Análise laboratorial do óleo hidráulico (viscosidade, contaminação, acidez);</li>\n<li>• Inspeção e troca dos filtros de retorno, pressão e ventilação;</li>\n<li>• Verificação e ajuste de todas as válvulas de alívio e pressão;</li>\n<li>• Inspeção de bomba hidráulica, motor e acoplamentos;</li>\n<li>• Limpeza interna do reservatório e purga do sistema;</li>\n<li>• Verificação de mangueiras, conexões e vazamentos.</li>\n</ul>",
      "<p>Após a <strong>revisão da unidade hidráulica</strong>, a HiComp emite relatório técnico completo com histórico de anomalias encontradas e recomendações para próximas manutenções.</p>"
    ],
    technicalSpecs: "Incluso: análise de óleo, troca de filtros, ajuste de válvulas, inspeção de bomba | Prazo: 1 a 3 dias | Relatório técnico incluso",
    applications: ["Centrais hidráulicas industriais", "Prensas e guilhotinas", "Injetoras de plástico", "Máquinas-ferramenta", "Linhas de produção automatizadas"],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "Bosch"],
    maintenance: "Revisão preventiva anual recomendada. Para sistemas críticos, recomenda-se semestral. Inclui relatório com indicadores de desgaste e previsão de substituições futuras.",
    faq: [
      { question: "Com que frequência devo revisar minha unidade hidráulica?", answer: "Recomendamos revisão anual para uso normal ou a cada 2.000 horas de operação. Para sistemas críticos ou em ambientes severos, revisão semestral é mais adequada." },
      { question: "A revisão preventiva inclui troca de óleo?", answer: "A análise de óleo é inclusa. A troca de óleo é recomendada quando a análise detectar oxidação, contaminação excessiva ou degradação das propriedades. O custo do óleo é separado." }
    ]
  },

  "limpeza-de-sistema-hidraulico": {
    introduction: "A HiComp realiza <strong>limpeza de sistema hidráulico</strong> (flushing) para remoção de contaminantes, cavaco metálico e verniz interno. Garantimos o nível de limpeza exigido pela ISO 4406 para proteção dos componentes.",
    mainContent: [
      "<p>A <strong>limpeza do sistema hidráulico</strong> (flushing) é fundamental após montagem de sistemas novos, substituição de bomba/motor ou detecção de contaminação. Contaminantes sólidos são a principal causa de falha em componentes hidráulicos.</p>",
      "<h2>QUANDO REALIZAR A LIMPEZA DO SISTEMA HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• Após montagem de sistema hidráulico novo;</li>\n<li>• Após falha catastrófica de bomba ou motor (cavaco metálico);</li>\n<li>• Quando a análise de óleo indica partículas acima do limite;</li>\n<li>• Após reparo de componentes internos;</li>\n<li>• Preventivamente a cada 2 a 3 anos em sistemas críticos.</li>\n</ul>",
      "<h2>PROCESSO DE LIMPEZA DE SISTEMA HIDRÁULICO</h2>",
      "<p>O processo de <strong>flushing de sistema hidráulico</strong> da HiComp utiliza equipamento de alta vazão com filtragem em 3 estágios (25µm, 10µm, 3µm), garantindo nível de limpeza ISO 16/14/11 ou melhor conforme especificação do cliente.</p>"
    ],
    technicalSpecs: "Nível de limpeza: ISO 4406 até 16/14/11 | Filtragem: 25µm, 10µm, 3µm | Temperatura de flush: 50 a 60°C | Análise de partículas antes e depois",
    applications: ["Sistemas hidráulicos de alta precisão", "Servo-válvulas e válvulas proporcionais", "Circuitos de presses e prensas", "Sistemas de controle de turbinas", "Equipamentos críticos de produção"],
    brands: ["Qualquer marca de sistema hidráulico"],
    maintenance: "O serviço inclui: coleta de amostra inicial, flushing com fluido limpo, monitoramento de partículas em tempo real e laudo de conclusão com nível de limpeza atingido.",
    faq: [
      { question: "Quanto tempo dura o processo de flushing hidráulico?", answer: "Depende do volume e complexidade do circuito. Sistemas simples podem ser limpos em 4 a 8 horas. Sistemas grandes e complexos podem exigir 1 a 3 dias." },
      { question: "Qual nível de limpeza é necessário para servo-válvulas?", answer: "Servo-válvulas exigem nível ISO 4406 de 16/14/11 ou melhor. Válvulas proporcionais aceitam 18/16/13. Válvulas on-off trabalham com 20/18/15." }
    ]
  },

  "diagnostico-hidraulico": {
    introduction: "A HiComp oferece <strong>diagnóstico hidráulico</strong> especializado para identificação de falhas, perda de desempenho e causas de paradas não planejadas em sistemas hidráulicos industriais. Atendemos em São Paulo e Grande SP.",
    mainContent: [
      "<p>O <strong>diagnóstico hidráulico</strong> é o primeiro passo para resolver problemas em sistemas hidráulicos com eficiência. A HiComp utiliza equipamentos de medição eletrônicos para análise precisa de pressão, vazão, temperatura e contaminação.</p>",
      "<h2>PROBLEMAS COMUNS DETECTADOS NO DIAGNÓSTICO HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• Bomba hidráulica com desgaste interno e perda de eficiência;</li>\n<li>• Válvulas de alívio com ajuste incorreto ou desgaste de assento;</li>\n<li>• Contaminação do óleo acima do nível ISO recomendado;</li>\n<li>• Cylinder bypass — vedações internas desgastadas em cilindros;</li>\n<li>• Cavitação na linha de sucção da bomba;</li>\n<li>• Superaquecimento por dissipador inadequado ou vazamentos internos.</li>\n</ul>",
      "<p>Após o <strong>diagnóstico hidráulico</strong>, a HiComp emite relatório técnico com causas identificadas, soluções recomendadas e orçamento detalhado, permitindo ao cliente tomar a decisão mais adequada.</p>"
    ],
    technicalSpecs: "Equipamentos: medidor de pressão digital, fluxômetro, termômetro infravermelho, analisador de partículas | Relatório técnico incluso",
    applications: ["Diagnóstico de perda de força em prensas", "Identificação de superaquecimento", "Análise de queda de pressão", "Investigação de paradas frequentes", "Auditoria de sistema hidráulico"],
    brands: ["Qualquer sistema hidráulico"],
    maintenance: "O diagnóstico pode ser realizado in-loco na planta do cliente ou na HiComp. Inclui análise de óleo, medição de pressões e vazão, e inspeção visual completa.",
    faq: [
      { question: "O diagnóstico é cobrado separado do reparo?", answer: "O diagnóstico tem custo de serviço técnico. Se o reparo for realizado pela HiComp, o valor do diagnóstico é descontado do orçamento final." },
      { question: "Vocês fazem diagnóstico na planta do cliente?", answer: "Sim, realizamos diagnóstico in-loco em indústrias da Grande SP. Para localidades mais distantes, consulte disponibilidade e custo de deslocamento." }
    ]
  },

  "troca-de-oleo-hidraulico": {
    introduction: "A HiComp realiza o serviço de <strong>troca de óleo hidráulico</strong> com descarte correto do óleo usado, limpeza de reservatório e fornecimento do fluido adequado para cada aplicação. Atendemos em São Paulo e Grande SP.",
    mainContent: [
      "<p>A <strong>troca de óleo hidráulico</strong> é uma das manutenções mais importantes para prolongar a vida dos componentes hidráulicos. O óleo degradado perde suas propriedades lubrificantes e passa a agredir vedações e superfícies metálicas.</p>",
      "<h2>QUANDO FAZER A TROCA DE ÓLEO HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• A cada 2.000 horas de operação ou anualmente (o que ocorrer primeiro);</li>\n<li>• Quando a análise indicar TAN (acidez) acima de 2,0 mg KOH/g;</li>\n<li>• Quando a viscosidade variar mais de 10% do valor nominal;</li>\n<li>• Após contaminação com água ou outros fluidos;</li>\n<li>• Após falha catastrófica de componente com contaminação metálica.</li>\n</ul>",
      "<p>A HiComp utiliza óleos hidráulicos minerais certificados das marcas Petrobras Lubrax, Shell Tellus, Mobil DTE e Castrol Hyspin, selecionando a viscosidade correta (ISO VG 32, 46 ou 68) para cada aplicação.</p>"
    ],
    technicalSpecs: "Viscosidades disponíveis: ISO VG 32, 46, 68, 100 | Marcas: Petrobras Lubrax, Shell Tellus, Mobil DTE | Descarte: certificado ambiental incluso",
    applications: ["Centrais hidráulicas industriais", "Prensas e guilhotinas", "Injetoras de plástico", "Máquinas-ferramenta CNC", "Equipamentos móveis"],
    brands: ["Petrobras Lubrax", "Shell Tellus", "Mobil DTE", "Castrol Hyspin"],
    maintenance: "O serviço completo inclui: drenagem do óleo usado, limpeza do reservatório, substituição do filtro de retorno, preenchimento com óleo novo e descarte ambiental certificado.",
    faq: [
      { question: "Qual óleo hidráulico usar na minha central?", answer: "O mais comum é ISO VG 46 para sistemas industriais operando entre 20°C e 50°C. Em ambientes frios use VG 32; em sistemas de alta temperatura use VG 68. Consulte o fabricante do equipamento." },
      { question: "Posso misturar óleos hidráulicos de marcas diferentes?", answer: "Não é recomendado, pois os aditivos podem ser incompatíveis. Se necessário, faça a troca completa com limpeza do reservatório antes de adicionar o novo óleo." }
    ]
  },

  "oleo-hidraulico": {
    introduction: "A HiComp fornece <strong>óleo hidráulico</strong> das principais marcas para sistemas industriais, com orientação técnica sobre viscosidade e especificação correta para cada aplicação. Entregamos em São Paulo e Grande SP.",
    mainContent: [
      "<p>O <strong>óleo hidráulico</strong> é o fluido de trabalho do sistema hidráulico, responsável por transmitir energia, lubrificar componentes e dissipar calor. A escolha correta do óleo é fundamental para o desempenho e vida útil dos componentes.</p>",
      "<h2>TIPOS DE ÓLEO HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• <strong>Mineral ISO VG 32:</strong> uso em baixas temperaturas e sistemas de alta velocidade;</li>\n<li>• <strong>Mineral ISO VG 46:</strong> viscosidade padrão para sistemas industriais (o mais utilizado);</li>\n<li>• <strong>Mineral ISO VG 68:</strong> sistemas de alta temperatura ou bombas de engrenagem de alta pressão;</li>\n<li>• <strong>Sintético HF-E:</strong> fluido resistente ao fogo para fundições e siderurgia.</li>\n</ul>",
      "<h2>COMO ESCOLHER O ÓLEO HIDRÁULICO CORRETO</h2>",
      "<p>A seleção do <strong>óleo hidráulico</strong> depende da temperatura de operação, tipo de bomba, pressão do sistema e especificação do fabricante. A HiComp oferece consultoria técnica gratuita para seleção do fluido mais adequado.</p>"
    ],
    technicalSpecs: "Viscosidade: ISO VG 32, 46, 68, 100 | Normas: DIN 51524, ISO 11158, Denison HF-0, HF-1, HF-2 | Embalagens: 20L, 200L",
    applications: ["Sistemas hidráulicos industriais", "Sistemas de prensas", "Máquinas-ferramenta", "Equipamentos móveis", "Sistemas de controle"],
    brands: ["Petrobras Lubrax AW", "Shell Tellus S2", "Mobil DTE 20 Series", "Castrol Hyspin AWS"],
    maintenance: "Monitoramento de óleo em uso recomendado a cada 500 horas para detecção precoce de degradação, contaminação ou aumento de acidez.",
    faq: [
      { question: "Qual a diferença entre óleo AW e HV?", answer: "O óleo AW (Anti-Wear) é para sistemas convencionais. O óleo HV tem índice de viscosidade elevado, mantendo boa fluidez em variações de temperatura — ideal para equipamentos móveis expostos a temperaturas extremas." },
      { question: "Com que frequência devo trocar o óleo hidráulico?", answer: "Recomenda-se trocar a cada 2.000 horas de operação ou anualmente. A análise laboratorial periódica é a melhor forma de determinar o momento exato da troca." }
    ]
  },

  "valvula-de-alivio-hidraulica": {
    introduction: "A HiComp fornece e realiza reparo de <strong>válvulas de alívio hidráulicas</strong> das principais marcas. Trabalhamos com válvulas de alívio diretas e pilotadas para proteção de sistemas hidráulicos industriais.",
    mainContent: [
      "<p>A <strong>válvula de alívio hidráulica</strong> é o dispositivo de segurança essencial em qualquer sistema hidráulico, impedindo que a pressão ultrapasse o valor máximo de projeto e protegendo bomba, cilindros e demais componentes.</p>",
      "<h2>TIPOS DE VÁLVULA DE ALÍVIO HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• <strong>Válvula de alívio direta (tipo cartucho):</strong> simples, econômica, para pressões até 350 bar;</li>\n<li>• <strong>Válvula de alívio pilotada:</strong> ajuste preciso, menor queda de pressão, ideal para sistemas sensíveis;</li>\n<li>• <strong>Válvula de alívio proporcional:</strong> controle eletrônico de pressão, sistemas servo-hidráulicos.</li>\n</ul>",
      "<h2>PRINCIPAIS MARCAS DE VÁLVULA DE ALÍVIO</h2>",
      "<p>A HiComp trabalha com válvulas de alívio Parker, Rexroth (Bosch), Vickers (Eaton), Hydraforce e Sun Hydraulics. Também realizamos reparo de válvulas com substituição de assento, carretel e mola.</p>"
    ],
    technicalSpecs: "Pressão ajustável: 10 a 420 bar | Vazão: 5 a 600 L/min | Conexões: BSP, SAE, NPT, ISO | Temperatura: -20°C a +80°C",
    applications: ["Proteção de bombas hidráulicas", "Circuitos de prensas", "Cilindros de alta pressão", "Sistemas de controle", "Unidades hidráulicas industriais"],
    brands: ["Parker", "Rexroth / Bosch", "Vickers / Eaton", "Hydraforce", "Sun Hydraulics"],
    maintenance: "Reparo de válvula de alívio: limpeza e inspeção do carretel, substituição de assento e mola, ajuste de pressão em bancada, teste de estanqueidade.",
    faq: [
      { question: "Como ajustar a pressão de uma válvula de alívio hidráulica?", answer: "O ajuste é feito girando o parafuso de regulagem com o sistema pressurizado e monitorando com manômetro. Nunca ajuste acima da pressão máxima dos componentes do sistema." },
      { question: "Por que minha válvula de alívio está abrindo com pressão abaixo do ajuste?", answer: "Causas comuns: desgaste do assento da válvula, ressalto de pressão acima do ajuste, ou mola fraturada. A HiComp realiza diagnóstico e reparo com garantia." }
    ]
  },

  "valvula-limitadora-de-pressao": {
    introduction: "A <strong>válvula limitadora de pressão</strong> é um componente essencial de segurança em sistemas hidráulicos. A HiComp fornece, calibra e repara válvulas limitadoras para todas as aplicações industriais em São Paulo.",
    mainContent: [
      "<p>A <strong>válvula limitadora de pressão</strong> funciona como proteção primária do sistema hidráulico, abrindo um by-pass quando a pressão atinge o valor máximo ajustado, evitando danos à bomba e demais componentes.</p>",
      "<h2>DIFERENÇA ENTRE VÁLVULA LIMITADORA E REGULADORA</h2>",
      "<p>A <strong>válvula limitadora de pressão</strong> (ou válvula de segurança) limita a pressão máxima do sistema. A válvula reguladora/redutora de pressão cria uma pressão menor em um ramal secundário. São funções distintas e complementares em circuitos hidráulicos complexos.</p>",
      "<p>A HiComp oferece orientação técnica para seleção, instalação e ajuste correto de <strong>válvulas limitadoras de pressão</strong>, garantindo a proteção adequada de todo o sistema hidráulico.</p>"
    ],
    technicalSpecs: "Faixa de ajuste: 5 a 420 bar | Vazão nominal: 10 a 400 L/min | Histerese: < 5% do ajuste | Conexões: G1/4\" a G2\"",
    applications: ["Proteção de circuito principal", "By-pass de sobrepressão", "Proteção de atuadores", "Limitação de força em prensas", "Segurança de sistemas servo"],
    brands: ["Parker", "Rexroth", "Vickers", "Bosch", "Hydraforce"],
    maintenance: "Calibração e ajuste de válvulas limitadoras inclui teste com manômetro digital certificado, ajuste do valor de abertura e verificação de estanqueidade no valor nominal.",
    faq: [
      { question: "Como saber se a válvula limitadora está com defeito?", answer: "Sinais de defeito: sistema não atinge pressão de trabalho (válvula abrindo cedo), temperatura excessiva do óleo (válvula abrindo continuamente) ou pressão ultrapassando o limite ajustado." },
      { question: "Vocês calibram válvulas limitadoras de pressão?", answer: "Sim, realizamos calibração com manômetro digital certificado e emitimos laudo de calibração. Entre em contato para orçamento." }
    ]
  },

  "valvula-de-retencao-hidraulica": {
    introduction: "A HiComp fornece e repara <strong>válvulas de retenção hidráulicas</strong> (check valves) de todas as marcas e tamanhos. Trabalhamos com válvulas de retenção simples, pilotadas e de bloqueio para aplicações industriais.",
    mainContent: [
      "<p>A <strong>válvula de retenção hidráulica</strong> (check valve ou válvula anti-retorno) permite o fluxo em apenas uma direção, impedindo o retorno do fluido. É um componente fundamental na maioria dos circuitos hidráulicos.</p>",
      "<h2>TIPOS DE VÁLVULA DE RETENÇÃO HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• <strong>Retenção simples:</strong> bloqueia fluxo reverso, abertura por pressão diferencial;</li>\n<li>• <strong>Retenção pilotada:</strong> pode ser desbloqueada externamente — usada em circuitos de sustentação de cargas;</li>\n<li>• <strong>Válvula de bloqueio dupla:</strong> bloqueia o cilindro nas duas câmaras, usado em prensas e guindastes.</li>\n</ul>",
      "<p>A HiComp mantém estoque de <strong>válvulas de retenção hidráulicas</strong> em conexões BSP e SAE, nas principais marcas Parker, Rexroth e Sun Hydraulics, com pronta entrega na Grande SP.</p>"
    ],
    technicalSpecs: "Pressão: até 420 bar | Vazão: 5 a 400 L/min | Pressão de abertura: 0.3 a 3 bar | Conexões: G1/4\" a G2\", SAE 4 a SAE 32",
    applications: ["Circuitos de carga e descarga", "Prevenção de retorno em bombas paralelas", "Sustentação de cilindros verticais", "Circuitos de freio hidrostático", "Redes de alta pressão"],
    brands: ["Parker", "Rexroth / Bosch", "Sun Hydraulics", "Hydraforce", "Vickers"],
    maintenance: "Reparo de válvula de retenção: substituição de assento, esfera ou carretel, mola e vedações. Teste de estanqueidade antes da entrega.",
    faq: [
      { question: "O que é válvula de retenção pilotada?", answer: "É uma válvula de retenção que pode ser aberta (desbloqueada) por sinal de pressão piloto externo, permitindo o fluxo nos dois sentidos quando necessário. Muito usada em circuitos de travamento de cilindros com carga suspensa." },
      { question: "Como identificar falha em válvula de retenção?", answer: "Uma válvula de retenção com defeito permite que o cilindro desça lentamente com carga aplicada (bypass interno). Diagnóstico confirma com medição de pressão diferencial." }
    ]
  },

  "valvula-redutora-de-pressao": {
    introduction: "A HiComp fornece <strong>válvulas redutoras de pressão</strong> para criação de circuitos secundários em sistemas hidráulicos industriais. Trabalhamos com as marcas Parker, Rexroth e Vickers, com pronta entrega na Grande SP.",
    mainContent: [
      "<p>A <strong>válvula redutora de pressão</strong> (pressure reducing valve) mantém uma pressão constante e reduzida em um ramal secundário, independente da pressão no circuito principal. Diferente da válvula de alívio, que limita a pressão máxima do sistema principal.</p>",
      "<h2>APLICAÇÕES DA VÁLVULA REDUTORA DE PRESSÃO</h2>",
      "<ul class=\"list\">\n<li>• Alimentação de cilindros de fixação com pressão controlada;</li>\n<li>• Circuitos de freio com pressão independente do sistema principal;</li>\n<li>• Proteção de componentes sensíveis a alta pressão;</li>\n<li>• Sistemas de aperto e prensagem com força controlada.</li>\n</ul>",
      "<p>A HiComp oferece <strong>válvulas redutoras de pressão</strong> direta e pilotada, com faixa de ajuste de 3 a 350 bar e conexões em BSP, SAE e manifold. Consulte disponibilidade de estoque via WhatsApp.</p>"
    ],
    technicalSpecs: "Faixa de ajuste: 3 a 350 bar | Vazão: 5 a 300 L/min | Conexões: G1/4\" a G1½\", SAE e manifold | Histerese: < 5%",
    applications: ["Circuitos de fixação", "Sistemas de freio", "Pilotagem de válvulas", "Proteção de atuadores secundários", "Circuitos de clamping"],
    brands: ["Parker", "Rexroth / Bosch", "Vickers / Eaton", "Hydraforce"],
    maintenance: "Válvulas redutoras têm baixa necessidade de manutenção. Limpeza periódica e verificação de estanqueidade são suficientes na maioria dos casos.",
    faq: [
      { question: "Qual a diferença entre válvula redutora e válvula de alívio?", answer: "A válvula de alívio protege o sistema principal, abrindo quando a pressão sobe. A válvula redutora cria uma pressão menor num ramal secundário, limitando a pressão máxima naquele ramal." },
      { question: "A válvula redutora regula a pressão de saída ou de entrada?", answer: "Ela regula a pressão de saída (downstream), mantendo-a constante no valor ajustado, independente de variações na pressão de entrada." }
    ]
  },

  "unidade-hidraulica-industrial": {
    introduction: "A HiComp projeta, fabrica e realiza manutenção de <strong>unidades hidráulicas industriais</strong> sob medida para São Paulo e todo o Brasil. Atendemos desde grupos hidráulicos simples até centrais de alta potência com controle proporcional.",
    mainContent: [
      "<p>A <strong>unidade hidráulica industrial</strong> (ou central hidráulica) é o coração do sistema hidráulico, reunindo reservatório, bomba, motor elétrico, filtros, válvulas e painel de controle em um conjunto integrado e compacto.</p>",
      "<h2>COMPONENTES DA UNIDADE HIDRÁULICA INDUSTRIAL</h2>",
      "<ul class=\"list\">\n<li>• <strong>Reservatório:</strong> aço carbono ou inox, com tampa removível para limpeza;</li>\n<li>• <strong>Conjunto moto-bomba:</strong> motor elétrico trifásico + bomba hidráulica acoplada;</li>\n<li>• <strong>Bloco de válvulas:</strong> manifold com válvulas de alívio, direcionais e controle;</li>\n<li>• <strong>Filtros:</strong> sucção, retorno e ventilação com indicadores visuais;</li>\n<li>• <strong>Painel elétrico:</strong> controle de partida, temperatura e nível.</li>\n</ul>",
      "<h2>FABRICAÇÃO DE UNIDADE HIDRÁULICA SOB MEDIDA</h2>",
      "<p>A HiComp fabrica <strong>unidades hidráulicas industriais</strong> de acordo com a especificação do cliente, com pressão de 50 a 350 bar, vazão de 5 a 500 L/min e potência de 1 a 200 kW. Entregamos com comissionamento e treinamento de operadores.</p>"
    ],
    technicalSpecs: "Pressão: 50 a 350 bar | Vazão: 5 a 500 L/min | Potência: 1 a 200 kW | Reservatório: 20 a 2.000L | Material: aço carbono ou inox",
    applications: ["Prensas hidráulicas", "Guilhotinas e dobradeiras", "Injetoras de plástico", "Máquinas de fundição", "Sistemas de elevação industrial"],
    brands: ["Parker", "Rexroth", "Vickers", "Eaton", "WEG (motores elétricos)"],
    maintenance: "Manutenção preventiva inclui: análise de óleo, troca de filtros, verificação de bomba e motor, ajuste de válvulas e inspeção elétrica. Contrato de manutenção disponível.",
    faq: [
      { question: "Qual o prazo para fabricação de uma unidade hidráulica industrial?", answer: "Depende da complexidade. Unidades simples (até 30 kW) podem ser entregues em 10 a 20 dias. Unidades complexas com automação podem levar 30 a 60 dias." },
      { question: "Vocês fazem comissionamento da unidade hidráulica na planta?", answer: "Sim, todo projeto inclui instalação supervisionada, ajuste de pressões e vazões, treinamento de operadores e documentação técnica completa." }
    ]
  },

  "central-hidraulica": {
    introduction: "A HiComp projeta e fabrica <strong>centrais hidráulicas</strong> para aplicações industriais de qualquer porte. Também realizamos manutenção e modernização de centrais existentes. Atendemos São Paulo e Grande SP.",
    mainContent: [
      "<p>A <strong>central hidráulica</strong> é responsável por gerar, controlar e distribuir a potência hidráulica para todos os atuadores do sistema (cilindros, motores e válvulas). Uma central bem dimensionada garante eficiência energética e longa vida útil dos componentes.</p>",
      "<h2>TIPOS DE CENTRAL HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• <strong>Central monopompa:</strong> uma bomba atende todos os circuitos — simples e econômica;</li>\n<li>• <strong>Central multipompa:</strong> bombas independentes por função — maior disponibilidade;</li>\n<li>• <strong>Central com acumulador:</strong> armazena energia hidráulica para picos de demanda;</li>\n<li>• <strong>Central servo-variável:</strong> bomba de cilindrada variável com controle de pressão e vazão — alta eficiência energética.</li>\n</ul>",
      "<p>A HiComp oferece projeto completo de <strong>central hidráulica</strong>, incluindo cálculo hidráulico, especificação de componentes, fabricação, montagem e testes. Também modernizamos centrais existentes com upgrade de eficiência energética.</p>"
    ],
    technicalSpecs: "Pressão: até 350 bar | Vazão: 5 a 1000 L/min | Potência: 1 a 500 kW | Automação: CLP Siemens/Allen-Bradley integrado",
    applications: ["Linhas de produção automatizadas", "Prensas e estampagem", "Fundições", "Siderurgia", "Equipamentos de testes hidráulicos"],
    brands: ["Parker", "Rexroth", "Bosch", "WEG", "Siemens"],
    maintenance: "Contrato de manutenção preventiva mensal, trimestral ou semestral. Inclui relatório técnico, análise de óleo e recomendações de melhorias.",
    faq: [
      { question: "Qual a eficiência energética de uma central servo-variável?", answer: "Centrais com bomba servo-variável podem reduzir o consumo de energia elétrica em 30 a 60% em relação às centrais convencionais de cilindrada fixa, dependendo do perfil de carga do sistema." },
      { question: "Vocês fazem retrofit de centrais hidráulicas antigas?", answer: "Sim, realizamos modernização de centrais com substituição de componentes obsoletos, upgrade de automação, melhoria de filtração e retrofit energético com bombas servo-variáveis." }
    ]
  },

  "sistema-hidraulico-industrial": {
    introduction: "A HiComp é especializada em <strong>sistemas hidráulicos industriais</strong>, oferecendo projeto, fabricação, manutenção e reparo de todos os componentes. Atendemos indústrias de São Paulo e Grande SP com equipe técnica própria.",
    mainContent: [
      "<p>O <strong>sistema hidráulico industrial</strong> é composto por central hidráulica, tubulações, válvulas de controle, atuadores (cilindros e motores) e instrumentação. A integração correta de todos esses componentes determina o desempenho e a confiabilidade do sistema.</p>",
      "<h2>SERVIÇOS PARA SISTEMA HIDRÁULICO INDUSTRIAL</h2>",
      "<ul class=\"list\">\n<li>• Projeto de novos sistemas hidráulicos industriais;</li>\n<li>• Reparo e manutenção de sistemas existentes;</li>\n<li>• Diagnóstico e solução de problemas (troubleshooting);</li>\n<li>• Modernização e upgrade energético;</li>\n<li>• Treinamento de equipe de manutenção.</li>\n</ul>",
      "<p>A HiComp oferece suporte completo para <strong>sistemas hidráulicos industriais</strong>, desde o dimensionamento inicial até o contrato de manutenção preventiva, garantindo máxima disponibilidade e eficiência operacional.</p>"
    ],
    technicalSpecs: "Projetos: até 500 kW | Pressão: até 420 bar | Fluidos: mineral, HF-E, HFC | Normas: ISO 4406, DIN 51524, NBR NM 213",
    applications: ["Indústria automotiva", "Siderurgia e fundição", "Celulose e papel", "Máquinas-ferramenta", "Plataformas offshore"],
    brands: ["Parker", "Rexroth / Bosch", "Vickers / Eaton", "Denison", "Sauer Danfoss"],
    maintenance: "Contratos de manutenção preventiva com SLA de disponibilidade garantido. Atendimento de emergência em até 4 horas na Grande SP.",
    faq: [
      { question: "Vocês atendem emergências em sistema hidráulico industrial?", answer: "Sim, oferecemos atendimento de emergência com SLA de 4 horas para a Grande SP. Para indústrias com contrato, o atendimento tem prioridade máxima." },
      { question: "Vocês fazem projeto de sistema hidráulico industrial novo?", answer: "Sim, desenvolvemos o projeto completo: dimensionamento hidráulico, especificação de componentes, detalhamento de tubulações, painel elétrico e documentação técnica." }
    ]
  },

  "unidade-hidraulica-compacta": {
    introduction: "A HiComp fabrica <strong>unidades hidráulicas compactas</strong> para aplicações onde espaço é limitado. Fornecemos grupos hidráulicos compactos de 0,5 a 30 kW com projeto personalizado para cada aplicação.",
    mainContent: [
      "<p>A <strong>unidade hidráulica compacta</strong> é indicada para máquinas onde o espaço para instalação é reduzido, como máquinas-ferramenta, dispositivos de fixação, bancadas de testes e equipamentos automatizados.</p>",
      "<h2>CARACTERÍSTICAS DA UNIDADE HIDRÁULICA COMPACTA</h2>",
      "<ul class=\"list\">\n<li>• Reservatório de 2 a 80 litros integrado ao grupo moto-bomba;</li>\n<li>• Motor elétrico monofásico 127/220V ou trifásico 220/380V;</li>\n<li>• Bomba de engrenagem ou palhetas de baixo ruído;</li>\n<li>• Bloco de válvulas integrado sem tubulações externas;</li>\n<li>• Instalação em qualquer posição (horizontal ou vertical).</li>\n</ul>",
      "<p>A HiComp oferece <strong>unidades hidráulicas compactas</strong> prontas e fabricadas sob medida. Para unidades prontas, prazo de 3 a 5 dias. Para projetos especiais, prazo de 10 a 20 dias. Entregamos em toda a Grande SP.</p>"
    ],
    technicalSpecs: "Potência: 0.5 a 30 kW | Reservatório: 2 a 80L | Pressão: 50 a 250 bar | Vazão: 1 a 60 L/min | Ruído: < 65 dB",
    applications: ["Dispositivos de fixação", "Bancadas de teste hidráulico", "Máquinas-ferramenta compactas", "Equipamentos de laboratório", "Automação industrial"],
    brands: ["HiComp (fabricação própria)", "Parker", "Bosch Rexroth"],
    maintenance: "Manutenção simplificada: troca de filtro de retorno a cada 500h, análise de óleo anual, verificação de nível semanalmente.",
    faq: [
      { question: "Qual a menor unidade hidráulica compacta disponível?", answer: "Fabricamos unidades a partir de 0,5 kW com reservatório de 2 litros. Para aplicações muito pequenas, também trabalhamos com bombas 12/24V para sistemas embarcados." },
      { question: "Vocês entregam unidade hidráulica compacta pronta para uso?", answer: "Sim, entregamos a unidade completa, testada, com óleo, filtros, mangueiras de conexão e manual técnico. Basta conectar à rede elétrica e ao atuador hidráulico." }
    ]
  },

  "acumulador-hidraulico": {
    introduction: "A HiComp fornece e repara <strong>acumuladores hidráulicos</strong> para sistemas industriais. Trabalhamos com acumuladores de bexiga, pistão e diafragma das principais marcas, com recarregamento de nitrogênio e certificação NR-13.",
    mainContent: [
      "<p>O <strong>acumulador hidráulico</strong> é um dispositivo que armazena energia hidráulica sob pressão, liberando-a quando necessário. É fundamental em sistemas com picos de demanda, manutenção de pressão em caso de falta de energia e amortecimento de pulsações.</p>",
      "<h2>TIPOS DE ACUMULADOR HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• <strong>Acumulador de bexiga:</strong> o mais comum, separação por bexiga de borracha, resposta rápida;</li>\n<li>• <strong>Acumulador de pistão:</strong> grandes volumes, alta pressão, para armazenamento de energia;</li>\n<li>• <strong>Acumulador de diafragma:</strong> compacto, baixo volume, amortecimento de pulsações.</li>\n</ul>",
      "<h2>SERVIÇOS PARA ACUMULADOR HIDRÁULICO</h2>",
      "<p>A HiComp oferece: fornecimento de acumuladores novos, recarga de nitrogênio, substituição de bexiga ou diafragma, inspeção conforme NR-13 e laudo de inspeção periódica exigido pela norma de vasos sob pressão.</p>"
    ],
    technicalSpecs: "Volume: 0.1 a 200 litros | Pressão: 50 a 450 bar | Gás: nitrogênio N2 | Certificação: NR-13 (vasos sob pressão)",
    applications: ["Compensação de picos de demanda", "Circuitos de frenagem de emergência", "Manutenção de pressão em queda de energia", "Amortecimento de pulsações de bomba", "Sistemas de clamp e fixação"],
    brands: ["Parker", "Hydac", "Bosch Rexroth", "Accumulator Inc."],
    maintenance: "Manutenção obrigatória por NR-13: inspeção periódica a cada 2 anos para acumuladores com volume > 100L. Recarga de N2 recomendada anualmente.",
    faq: [
      { question: "Por que usar nitrogênio e não ar comprimido no acumulador?", answer: "O nitrogênio é um gás inerte e seco, evitando oxidação interna e risco de explosão. O ar comprimido contém umidade e oxigênio que deterioram a bexiga e podem criar mistura explosiva com o óleo hidráulico." },
      { question: "Com que frequência devo verificar a pré-carga do acumulador?", answer: "Recomenda-se verificar a pressão de pré-carga de N2 a cada 6 meses, sempre com o sistema hidráulico despressurizado. A pressão de N2 típica é 60 a 70% da pressão mínima de trabalho." }
    ]
  },

  "bloco-manifold-hidraulico": {
    introduction: "A HiComp fabrica e repara <strong>blocos manifold hidráulicos</strong> sob medida. Substituímos tubulações complexas por blocos usinados compactos, reduzindo pontos de vazamento e simplificando a instalação.",
    mainContent: [
      "<p>O <strong>bloco manifold hidráulico</strong> (ou bloco distribuidor) é um componente usinado em alumínio ou aço que integra válvulas, conexões e passagens internas, eliminando tubulações externas e reduzindo drasticamente o número de conexões.</p>",
      "<h2>VANTAGENS DO BLOCO MANIFOLD HIDRÁULICO</h2>",
      "<ul class=\"list\">\n<li>• Elimina tubulações externas — menos pontos de vazamento;</li>\n<li>• Compacto — reduz espaço em até 60%;</li>\n<li>• Válvulas cartucho integradas — fácil manutenção sem desmontagem do circuito;</li>\n<li>• Reduz perda de carga — passagens internas otimizadas;</li>\n<li>• Confiabilidade superior — sem juntas, abraçadeiras e tubos.</li>\n</ul>",
      "<h2>FABRICAÇÃO DE BLOCO MANIFOLD HIDRÁULICO SOB MEDIDA</h2>",
      "<p>A HiComp fabrica <strong>blocos manifold hidráulicos</strong> em alumínio 6061 ou aço 1020 conforme a pressão de trabalho. O projeto é desenvolvido com base no esquema hidráulico do cliente, com simulação de passagens e cálculo de perdas de carga.</p>"
    ],
    technicalSpecs: "Material: alumínio 6061 (até 350 bar) ou aço 1020 (até 420 bar) | Acabamento: anodizado ou zincado | Válvulas: cavidades D03, D05, cetop 3, cetop 5 | Prazo: 7 a 20 dias",
    applications: ["Centralização de válvulas em prensas", "Blocos de controle em máquinas CNC", "Unidades hidráulicas compactas", "Sistemas com múltiplos atuadores", "Substituição de painéis de válvulas com tubulações"],
    brands: ["HiComp (fabricação própria)", "Parker", "Sun Hydraulics", "Hydraforce"],
    maintenance: "Manutenção de bloco manifold: limpeza periódica dos filtros de entrada, verificação de estanqueidade nas tampas de inspeção e teste de pressão a cada overhaul.",
    faq: [
      { question: "Qual o prazo para fabricar um bloco manifold?", answer: "O prazo depende da complexidade. Blocos simples (até 5 válvulas) levam de 7 a 10 dias. Blocos complexos com múltiplos andares podem levar de 15 a 30 dias." },
      { question: "Vocês fazem engenharia reversa de bloco manifold?", answer: "Sim, realizamos engenharia reversa de blocos existentes, incluindo mapeamento de passagens internas, identificação de cavidades de válvulas e recriação do projeto 3D." }
    ]
  },

  "retentores-hidraulicos": {
    introduction: "A HiComp fornece <strong>retentores hidráulicos</strong> para cilindros, bombas, motores e eixos rotativos. Trabalhamos com retentores NBR, FKM (Viton), PTFE e poliuretano para todas as aplicações industriais.",
    mainContent: [
      "<p>O <strong>retentor hidráulico</strong> é o componente de vedação responsável por impedir o vazamento de fluido pelo eixo de saída de bombas, motores e cilindros rotativos. A escolha correta do material e dimensionamento adequado são essenciais para a vida útil.</p>",
      "<h2>MATERIAIS DE RETENTORES HIDRÁULICOS</h2>",
      "<ul class=\"list\">\n<li>• <strong>NBR (Nitrílico):</strong> uso geral, compatível com óleos minerais, -40°C a +100°C;</li>\n<li>• <strong>FKM/Viton:</strong> alta temperatura e resistência química, -20°C a +200°C;</li>\n<li>• <strong>PTFE:</strong> baixíssimo atrito, compatível com quase todos os fluidos;</li>\n<li>• <strong>Poliuretano (PU):</strong> alta resistência a extrusão, usinas de papel e açúcar.</li>\n</ul>",
      "<p>A HiComp mantém estoque de <strong>retentores hidráulicos</strong> nas bitolas mais comuns (10mm a 300mm) para pronta entrega. Para bitolas especiais, prazo de 2 a 5 dias úteis.</p>"
    ],
    technicalSpecs: "Bitolas: 10 a 300mm (diâmetro de eixo) | Materiais: NBR, FKM, PTFE, PU | Tipos: radial, axial, lábio simples/duplo | Norma: DIN 3760",
    applications: ["Eixo de bomba hidráulica", "Eixo de motor hidráulico", "Haste de cilindro hidráulico", "Redutor hidrostático", "Virabrequim de motor diesel"],
    brands: ["SKF", "Parker Seal Group", "Freudenberg (Simrit)", "Saint-Gobain (Busak+Shamban)"],
    maintenance: "Retentores devem ser substituídos quando houver vazamento visível pelo eixo. Nunca reutilize um retentor desmontado. Verifique estado da superfície do eixo antes da montagem.",
    faq: [
      { question: "Como evitar danos ao retentor durante a montagem?", answer: "Use um mandril de montagem do diâmetro exato do eixo. Nunca bata diretamente no retentor. Lubrifique levemente com o fluido de serviço antes de montar. Verifique se o eixo está sem rebarbas." },
      { question: "Meu retentor vaza mas o eixo parece bom — o que pode ser?", answer: "Causas comuns: lábio de vedação endurecido por temperatura excessiva (use FKM), pressão interna acima do limite do retentor (use retentor de pressão com lábio interno) ou runout de eixo excessivo." }
    ]
  },

  "vedacoes-hidraulicas": {
    introduction: "A HiComp é distribuidora de <strong>vedações hidráulicas</strong> para cilindros, bombas, motores e válvulas. Fornecemos kits de vedação completos ou peças avulsas para todas as marcas e modelos de equipamentos hidráulicos.",
    mainContent: [
      "<p>As <strong>vedações hidráulicas</strong> são o conjunto de anéis, gaxetas e retentores responsáveis pela estanqueidade dos componentes hidráulicos. A falha de vedação é a causa mais comum de perda de desempenho e vazamento em sistemas hidráulicos.</p>",
      "<h2>TIPOS DE VEDAÇÕES HIDRÁULICAS</h2>",
      "<ul class=\"list\">\n<li>• <strong>O-ring:</strong> vedação estática ou dinâmica, disponível em NBR, FKM, EPDM e Silicone;</li>\n<li>• <strong>Retentores de haste:</strong> vedação de haste de cilindro, tipo U-cup ou wiper;</li>\n<li>• <strong>Vedação de êmbolo:</strong> vedação interna de cilindro, tipo piston seal;</li>\n<li>• <strong>Guias de haste e êmbolo:</strong> poliacetal, bronze ou PTFE, suportam carga lateral.</li>\n</ul>",
      "<p>A HiComp fornece <strong>kits de vedação hidráulica</strong> completos para cilindros industriais das marcas Parker, Rexroth, Vickers, Bosch e outros. Também fornecemos vedações avulsas de metragem para produção de kits personalizados.</p>"
    ],
    technicalSpecs: "Materiais: NBR, FKM, PTFE, PU, PEEK | Temperatura: -40°C a +200°C | Pressão: até 700 bar (dependendo do tipo) | Normas: ISO 3320, DIN 3760",
    applications: ["Kits de reparo de cilindros hidráulicos", "Vedação de bombas e motores", "Válvulas hidráulicas de alta pressão", "Cilindros de prensas e injetoras", "Sistemas offshore e marítimos"],
    brands: ["Parker Seal Group", "SKF", "Freudenberg (Simrit)", "Trelleborg", "Busak+Shamban"],
    maintenance: "Vedações devem ser substituídas preventivamente a cada 5.000 horas ou quando apresentarem sinais de vazamento, endurecimento ou extrusion.",
    faq: [
      { question: "Vocês fornecem kit de vedação para qualquer cilindro?", answer: "Fornecemos kits para a maioria das marcas conhecidas. Para cilindros sem documentação, podemos identificar as vedações por amostra física — envie as peças usadas para análise." },
      { question: "Qual a diferença entre NBR e FKM (Viton) para vedações hidráulicas?", answer: "NBR atende a maioria das aplicações com óleo mineral até 100°C. FKM/Viton é indicado para altas temperaturas (até 200°C) e fluidos agressivos como HF-E, HFC e fosfato éster." }
    ]
  },

  "mangueira-hidraulica": {
    introduction: "A HiComp fornece e monta <strong>mangueiras hidráulicas</strong> para sistemas industriais e equipamentos móveis. Trabalhamos com mangueiras de 1 a 4 tramas de alta pressão com terminais prensados ou swageados.",
    mainContent: [
      "<p>A <strong>mangueira hidráulica</strong> é o componente flexível de ligação entre componentes fixos e móveis de sistemas hidráulicos. A escolha correta do tipo, pressão nominal e conexões é fundamental para segurança e durabilidade.</p>",
      "<h2>TIPOS DE MANGUEIRA HIDRÁULICA</h2>",
      "<ul class=\"list\">\n<li>• <strong>1 trama (1SN/R1):</strong> baixa pressão, flexível, aplicações gerais até 180 bar;</li>\n<li>• <strong>2 tramas (2SN/R2):</strong> média pressão até 400 bar, mais robusto;</li>\n<li>• <strong>4 tramas (4SP/R9/R12):</strong> alta pressão até 700 bar, menor flexibilidade;</li>\n<li>• <strong>Espiral (R13/R15):</strong> altíssima pressão 700-1000 bar, equipamentos pesados.</li>\n</ul>",
      "<p>A HiComp monta <strong>mangueiras hidráulicas</strong> sob medida com terminais BSP, JIC, ORFS, SAE flangeado e outros. Atendemos em São Paulo com pronta entrega para paradas de emergência.</p>"
    ],
    technicalSpecs: "Diâmetros: 3/16\" a 2\" | Pressão: 50 a 1000 bar | Temperatura: -40°C a +120°C | Normas: ISO 1436, SAE J517 | Conexões: BSP, JIC, ORFS, SAE",
    applications: ["Linhas de pressão e retorno", "Drenos de bombas e motores", "Circuitos de pilotagem", "Equipamentos móveis", "Conexão de cilindros"],
    brands: ["Parker", "Gates", "Eaton", "Alfagomma"],
    maintenance: "Inspecione visualmente as mangueiras a cada 250 horas. Substitua preventivamente a cada 3 a 5 anos ou ao menor sinal de abaulamento, vazamento ou armação danificada.",
    faq: [
      { question: "Como identificar o tamanho da mangueira hidráulica?", answer: "O tamanho é indicado em fração de polegada do diâmetro interno (ex: -6 = 3/8\"). A numeração está marcada na trançagem externa da mangueira ou nas especificações da máquina." },
      { question: "Vocês montam mangueiras hidráulicas com urgência?", answer: "Sim, mantemos estoque de mangueiras e terminais para montagem no mesmo dia. Para paradas de produção, atendemos em caráter de urgência — ligue ou envie WhatsApp." }
    ]
  },

  "mangueira-hidraulica-alta-pressao": {
    introduction: "A HiComp fornece e monta <strong>mangueiras hidráulicas de alta pressão</strong> para aplicações que exigem pressões acima de 350 bar. Trabalhamos com mangueiras 4SP, R9, R12 e R13 com prensagem e certificação de pressão.",
    mainContent: [
      "<p>As <strong>mangueiras hidráulicas de alta pressão</strong> são fabricadas com múltiplas camadas de armação de aço, sendo classificadas pela norma SAE J517 como R9, R12, R13 e R15 conforme o nível de pressão suportado.</p>",
      "<h2>CLASSIFICAÇÃO DAS MANGUEIRAS DE ALTA PRESSÃO</h2>",
      "<ul class=\"list\">\n<li>• <strong>4SP (R9):</strong> 4 tramas de aço, pressão até 400-500 bar;</li>\n<li>• <strong>4SH (R12):</strong> espiral de aço, pressão até 500-700 bar;</li>\n<li>• <strong>R13:</strong> espiral dupla, pressão até 700-1000 bar;</li>\n<li>• <strong>R15:</strong> espiral quádrupla, pressão até 1000-1300 bar — para britagem e equipamentos especiais.</li>\n</ul>",
      "<p>A HiComp utiliza prensas calibradas e terminais certificados para garantir a integridade do conjunto. Fornecemos certificado de pressão de teste para cada mangueira montada, documentando segurança conforme NR-12.</p>"
    ],
    technicalSpecs: "Pressão: 350 a 1300 bar | Diâmetros: 3/16\" a 1½\" | Norma: SAE J517, EN 857/856 | Teste: 1.5x pressão nominal | Certificado: incluso",
    applications: ["Britadores e mineração", "Prensas de alta tonelagem", "Equipamentos de perfuração", "Simuladores e bancadas de teste", "Prensas isostáticas"],
    brands: ["Parker 797", "Gates MXT", "Eaton HX-8", "Alfagomma 4SP"],
    maintenance: "Inspeção rigorosa a cada 250 horas ou 3 meses. Qualquer deformação, bolsa ou dano externo exige substituição imediata. Nunca emende mangueiras de alta pressão.",
    faq: [
      { question: "Como saber qual mangueira de alta pressão usar?", answer: "Verifique a pressão máxima de trabalho do sistema e aplique fator de segurança 4:1 (pressão de ruptura = 4x trabalho). A HiComp dimensiona gratuitamente mediante informação da pressão e vazão." },
      { question: "Vocês fornecem certificado de teste para mangueiras de alta pressão?", answer: "Sim, todas as mangueiras de alta pressão entregues pela HiComp acompanham certificado de teste hidrostático a 1,5x a pressão nominal, conforme exigência da NR-12." }
    ]
  },

  "conexoes-hidraulicas": {
    introduction: "A HiComp fornece <strong>conexões hidráulicas</strong> de todos os tipos — BSP, JIC, SAE, ORFS, NPT e flangeadas — para sistemas industriais e equipamentos móveis. Estoque amplo em São Paulo para pronta entrega.",
    mainContent: [
      "<p>As <strong>conexões hidráulicas</strong> são os itens que integram tubulações, mangueiras e componentes do sistema hidráulico. A escolha incorreta de conexão é uma das principais causas de vazamento e falha prematura em sistemas hidráulicos.</p>",
      "<h2>TIPOS DE CONEXÕES HIDRÁULICAS</h2>",
      "<ul class=\"list\">\n<li>• <strong>BSP/BSPP:</strong> rosca paralela britânica com anel de vedação — padrão europeu;</li>\n<li>• <strong>JIC/AN (37°):</strong> rosca imperial com cone 37° — padrão americano para alta pressão;</li>\n<li>• <strong>ORFS:</strong> face plana com O-ring — ideal para alta pressão sem vazamento;</li>\n<li>• <strong>SAE flangeado (código 61/62):</strong> para grandes diâmetros e altíssima pressão;</li>\n<li>• <strong>NPT:</strong> rosca cônica americana — selagem por deformação da rosca + veda-rosca.</li>\n</ul>",
      "<p>A HiComp mantém estoque de <strong>conexões hidráulicas</strong> em aço carbono zincado, aço inox e latão, nos padrões BSP, JIC, ORFS e SAE, de 1/8\" a 2\". Para bitolas especiais, consulte disponibilidade.</p>"
    ],
    technicalSpecs: "Bitolas: 1/8\" a 2\" BSP/JIC, DN6 a DN50 SAE | Material: aço carbono, inox AISI 316, latão | Pressão: até 700 bar (ORFS, SAE C62) | Acabamento: zincado ou fosfatizado",
    applications: ["Montagem de linhas hidráulicas", "Adaptadores entre padrões", "Conexão de mangueiras a blocos", "Tubulações de aço sem costura", "Conexões de instrumentos"],
    brands: ["Parker Hannifin", "Eaton Aeroquip", "Alfagomma", "Bompres"],
    maintenance: "Inspecione conexões a cada revisão do sistema. Troque conexões com sinais de corrosão, deformação de rosca ou assentamento danificado.",
    faq: [
      { question: "Qual conexão hidráulica tem menor risco de vazamento?", answer: "A conexão ORFS (O-Ring Face Seal) é a mais segura, com vedação por O-ring na face plana, independente do aperto da rosca. É indicada para aplicações críticas e ambientes externos." },
      { question: "Posso adaptar rosca BSP para JIC?", answer: "Sim, fornecemos adaptadores BSP-JIC em todas as bitolas. O importante é respeitar a pressão máxima do adaptador e usar o tipo correto de vedação em cada lado." }
    ]
  },

  "conjunto-rotativo-vickers": {
    introduction: "A HiComp fornece e instala <strong>conjuntos rotativos Vickers</strong> para reparo de bombas e motores hidráulicos. Trabalhamos com conjuntos originais e similares de alta qualidade para as principais linhas Vickers.",
    mainContent: [
      "<p>O <strong>conjunto rotativo Vickers</strong> é o coração da bomba ou motor hidráulico, composto pelos elementos de bombeamento (pistões, bloco de cilindros, placa de distribuição, sapatas e prato oscilante). É o componente mais sujeito ao desgaste pelo trabalho contínuo em alta pressão.</p>",
      "<h2>LINHAS VICKERS COM CONJUNTO ROTATIVO DISPONÍVEL</h2>",
      "<ul class=\"list\">\n<li>• <strong>Vickers PVB/PVQ:</strong> bomba de pistão axial variável — conjunto completo ou peças avulsas;</li>\n<li>• <strong>Vickers V10/V20/V21:</strong> bomba de palhetas — cartucho completo com palhetas e anel;</li>\n<li>• <strong>Vickers MFE/MFB:</strong> motor de pistão axial — conjunto pistão e bloco;</li>\n<li>• <strong>Vickers M4/M7:</strong> motor de palhetas — cartucho rotativo.</li>\n</ul>",
      "<p>A HiComp realiza o reparo completo de <strong>bombas e motores Vickers</strong> com substituição do conjunto rotativo, garantindo desempenho equivalente ao original. Garantia de 6 meses em todos os reparos.</p>"
    ],
    technicalSpecs: "Bombas: PVB5, PVB10, PVB15, PVB20, PVB29, PVB45, PVQ13, PVQ20, V10, V20 | Motores: MFE19, MFE28, MFB20, M4, M7",
    applications: ["Reparo de bomba Vickers PVB", "Reparo de motor Vickers MFE", "Substituição de cartucho V10/V20", "Overhaul de sistema hidráulico Vickers"],
    brands: ["Vickers", "Eaton (sucessora Vickers)", "Parker"],
    maintenance: "O conjunto rotativo deve ser substituído quando a eficiência volumétrica da bomba cair abaixo de 85%. A HiComp mede a eficiência antes e depois do reparo.",
    faq: [
      { question: "Qual a diferença entre cartucho Vickers original e similar?", answer: "O cartucho original Eaton/Vickers tem tolerâncias certificadas. O similar de boa procedência (SKF, Bosch) tem desempenho equivalente a menor custo. A HiComp informa a procedência antes do reparo." },
      { question: "Vale a pena fazer overhaul em bomba Vickers antiga?", answer: "Sim, desde que o corpo da bomba esteja em boas condições. O custo do overhaul com conjunto rotativo é 30 a 50% do preço de uma bomba nova." }
    ]
  },

};

