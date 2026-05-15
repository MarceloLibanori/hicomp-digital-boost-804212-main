import type { TopicContent } from '../topicContents';

const content: TopicContent = {
  introduction: `<p>As <strong>bombas hidráulicas</strong> são o coração de qualquer sistema hidráulico industrial. Responsáveis por converter energia mecânica em energia hidráulica, elas pressurizam o fluido e garantem o fluxo necessário para movimentar atuadores, cilindros e motores em toda a cadeia produtiva. A <strong>HiComp Hidráulica</strong>, com mais de 25 anos de experiência em São Paulo, é referência nacional em fornecimento, reparo e manutenção de bombas hidráulicas de todas as marcas e tecnologias.</p>
<p>Neste guia enciclopédico, você encontrará tudo sobre <strong>bombas hidráulicas industriais</strong>: tipos, princípios de operação, critérios de seleção, diagnóstico de falhas, marcas líderes e boas práticas de manutenção preventiva. Se você busca a solução definitiva para o seu sistema hidráulico, a HiComp tem o componente certo e a expertise técnica para sua indústria.</p>`,

  mainContent: [
    `<h2>O que é uma Bomba Hidráulica</h2>
<p>Uma <strong>bomba hidráulica</strong> é um dispositivo mecânico que transforma a energia cinética fornecida por um motor elétrico ou motor de combustão interna em energia hidráulica — especificamente em vazão e pressão do fluido. Ao contrário do que muitos pensam, a bomba não cria pressão por si só: ela gera vazão e é a resistência ao fluxo no sistema (carga, válvulas, restrições) que determina a pressão de operação.</p>
<p>O princípio fundamental é a criação de zonas de expansão e compressão no interior da bomba. Quando o volume interno aumenta na entrada (sucção), o fluido é aspirado do reservatório. Quando o volume diminui na saída (descarga), o fluido é expulso a alta pressão para o circuito hidráulico. A eficiência volumétrica, que mede a proporção entre a vazão real e a teórica, é o principal indicador de desempenho de uma bomba hidráulica.</p>
<p>Parâmetros fundamentais das bombas hidráulicas incluem: <strong>cilindrada</strong> (volume deslocado por rotação, em cc/rev), <strong>pressão nominal</strong> (pressão máxima de operação contínua, em bar), <strong>pressão de pico</strong> (pressão máxima momentânea tolerada), <strong>vazão nominal</strong> (em litros por minuto, L/min) e <strong>eficiência total</strong> (produto da eficiência volumétrica pela mecânica).</p>`,

    `<h2>Tipos de Bombas Hidráulicas</h2>
<p>Existem três grandes famílias de bombas hidráulicas, cada uma com características técnicas e aplicações específicas:</p>
<ul>
<li><strong>Bombas de Pistão Axial:</strong> São as bombas de maior pressão e eficiência do mercado. Os pistões se movem paralelamente ao eixo de rotação. Disponíveis em versões de <em>cilindrada fixa</em> e <em>cilindrada variável</em> (com prato oscilante ajustável). Operam até 420-450 bar com eficiências volumétricas superiores a 97%. Modelos principais: Parker PV, Rexroth A10VSO, A4VSO, Vickers PVB, Sauer Danfoss Série 90.</li>
<li><strong>Bombas de Pistão Radial:</strong> Os pistões se dispõem radialmente em torno de um eixo excêntrico. Projetadas para altíssimas pressões (até 700 bar) e baixas velocidades. Utilizadas em prensas de estampagem de precisão, teste de material e aplicações especiais. Alta durabilidade e excelente eficiência volumétrica.</li>
<li><strong>Bombas de Engrenagem:</strong> As mais simples e robustas. Dois pares de engrenagens em contato movem o fluido ao redor do alojamento. Dividem-se em engrenagem externa (mais comum, até 250 bar) e engrenagem interna (Gerotor/Gerolor, mais silenciosa). São baratas, compactas e resistentes à contaminação. Modelos: Parker PGP/PGM, Rexroth AZPF, Bosch.</li>
<li><strong>Bombas de Palhetas:</strong> Um rotor excêntrico com palhetas deslizantes divide o fluido em câmaras de volume variável. Oferecem baixo ruído e boa eficiência em pressões médias (até 175-200 bar). Ideais para aplicações que exigem baixo nível de ruído. Modelos: Vickers V10/V20, Denison T6, Parker V.</li>
<li><strong>Bombas Peristálticas:</strong> Utilizadas em aplicações especiais onde o fluido não pode entrar em contato com componentes metálicos. O fluido é movimentado pelo esmagamento progressivo de uma mangueira flexível. Aplicações: dosagem química, bombagem de fluidos abrasivos e corrosivos.</li>
</ul>`,

    `<h2>Como Funciona uma Bomba Hidráulica</h2>
<p>O princípio de operação de uma bomba hidráulica de pistão axial, a mais utilizada na indústria, envolve os seguintes elementos: <strong>bloco de cilindros</strong> (giratório, com furos para os pistões), <strong>pistões</strong> (que deslizam dentro do bloco), <strong>prato oscilante</strong> (que define o curso de cada pistão), e <strong>placa de distribuição</strong> (que separa as zonas de sucção e descarga).</p>
<p>Quando o bloco gira, cada pistão é empurrado para dentro do bloco conforme passa pela zona de descarga (prato em ângulo máximo) e recuado pela zona de sucção. O curso do pistão determina o volume deslocado por rotação. Ao variar o ângulo do prato oscilante, muda-se a cilindrada da bomba — esse é o princípio das bombas de <strong>cilindrada variável</strong>, que permitem ajustar a vazão sem alterar a rotação do motor.</p>
<p>Nas bombas de palhetas, o rotor excêntrico faz com que as palhetas se retraiam e se expandam continuamente, criando câmaras de volume crescente (sucção) e decrescente (descarga). A pressão do fluido sob as palhetas as mantém em contato com o alojamento interno, garantindo a vedação.</p>
<p>Nas bombas de engrenagem, os dentes em contato no centro da bomba formam uma barreira entre as câmaras de sucção e descarga. O fluido é transportado nos espaços entre os dentes e a carcaça, sendo expulso quando os dentes entram em contato novamente.</p>`,

    `<h2>Aplicações Industriais das Bombas Hidráulicas</h2>
<p>As bombas hidráulicas são essenciais em praticamente todos os segmentos da indústria moderna. A escolha correta do tipo de bomba para cada aplicação é determinante para eficiência energética, durabilidade e custo de manutenção do sistema.</p>
<ul>
<li><strong>Prensas hidráulicas:</strong> Bombas de pistão axial de alta pressão com cilindrada variável permitem controle preciso da força e velocidade. Aplicações: estampagem, forjamento, conformação de chapas, moldagem de compostos.</li>
<li><strong>Injetoras de plástico e borracha:</strong> Exigem bombas de alta pressão com resposta rápida e controle de fluxo proporcional. A Parker PV e Rexroth A10VSO são amplamente utilizadas nessa aplicação.</li>
<li><strong>Máquinas-ferramenta CNC:</strong> Bombas de palhetas para acionamento de fixadores, plataformas giratórias e sistemas de refrigeração hidráulica. Baixo ruído é requisito crítico.</li>
<li><strong>Equipamentos de construção civil:</strong> Escavadeiras, retroescavadeiras e tratores utilizam bombas de pistão axial em tandem para acionamento de lança, braço e giro. Ambiente extremo com vibração, calor e poeira.</li>
<li><strong>Agronegócio:</strong> Colheitadeiras, plantadeiras e pulverizadores utilizam bombas de alta eficiência para acionamento de transmissões hidrostáticas, sistemas de direção e implementos.</li>
<li><strong>Siderurgia e metalurgia:</strong> Bombas de alta pressão para laminadores, trefiladoras e prensas de forjamento. Operação contínua 24/7 com demandas extremas de confiabilidade.</li>
<li><strong>Offshore e naval:</strong> Bombas certificadas para ambientes marítimos, com proteção contra corrosão e redundância de sistemas críticos.</li>
<li><strong>Indústria alimentícia e farmacêutica:</strong> Bombas de engrenagem interna em inox para fluidos viscosos, com certificação FDA quando necessário.</li>
</ul>`,

    `<h2>Como Escolher uma Bomba Hidráulica</h2>
<p>A seleção correta de uma bomba hidráulica deve considerar múltiplos parâmetros técnicos e operacionais. Um erro na especificação pode resultar em falha prematura, superdimensionamento com desperdício energético ou subdimensionamento com parada de produção.</p>
<p><strong>Parâmetros de seleção:</strong></p>
<ul>
<li><strong>Pressão de trabalho:</strong> Calcule a pressão máxima de operação do sistema, considerando perdas de carga nas válvulas, tubulações e atuadores. Selecione a bomba com pressão nominal pelo menos 20% acima da pressão de trabalho calculada.</li>
<li><strong>Vazão necessária:</strong> Determine a vazão mínima para atender a velocidade desejada dos atuadores. Considere o rendimento volumétrico (tipicamente 90-97% para bombas novas) para calcular a cilindrada necessária.</li>
<li><strong>Rotação do acionamento:</strong> A rotação do motor elétrico (1750 ou 3500 RPM em 60Hz) ou do motor diesel deve estar dentro da faixa de operação da bomba. Bombas de pistão axial geralmente operam entre 1000 e 2500 RPM.</li>
<li><strong>Tipo de fluido:</strong> Verifique a compatibilidade do fluido (mineral, sintético, vegetal, HF) com os materiais da bomba. Fluidos de difícil lubrificação podem exigir bombas especiais.</li>
<li><strong>Temperatura de operação:</strong> Fluidos mais viscosos em baixas temperaturas dificultam a sucção. Altas temperaturas reduzem a viscosidade e aumentam o desgaste. A faixa ideal é 40-60°C.</li>
<li><strong>Contaminação do fluido:</strong> Bombas de pistão axial são mais sensíveis à contaminação. Para sistemas com fluido de qualidade duvidosa, prefira bombas de engrenagem ou palhetas com maior tolerância.</li>
<li><strong>Ciclo de trabalho:</strong> Calcule a fração do tempo em que a bomba opera em alta pressão. Bombas de cilindrada variável são mais eficientes em ciclos intermitentes.</li>
</ul>`,

    `<h2>Problemas Comuns e Diagnóstico</h2>
<p>O diagnóstico correto de falhas em bombas hidráulicas economiza tempo e dinheiro. Os problemas mais frequentes e seus sintomas são:</p>
<ul>
<li><strong>Cavitação:</strong> Som característico de estalo ou golfada, acompanhado de vibração. Causas: filtro de sucção entupido, linha de sucção com restrição, nível de óleo baixo, temperatura do óleo baixa demais (alta viscosidade), altitude elevada. Consequências: erosão acelerada dos pistões, rolamentos e placa de distribuição. Solução: verificar e desobstruir a linha de sucção, limpar filtros, aguardar aquecimento do óleo.</li>
<li><strong>Aeração (Ar no Sistema):</strong> Similar à cavitação, mas o ar entra pela sucção em vez de o fluido evaporar. Causa: vazamento na linha de sucção, vedação do eixo desgastada. A presença de espuma no reservatório é indicativa de aeração.</li>
<li><strong>Desgaste de Pistões e Bloco:</strong> Queda gradual de pressão e vazão, aumento de temperatura do óleo. Causas: contaminação do fluido, operação fora dos limites de pressão e temperatura, lubrificação inadequada. Solução: análise de partículas no óleo, reconstrução ou substituição do conjunto rotativo.</li>
<li><strong>Vazamento Externo:</strong> Óleo visível na carcaça da bomba ou na flange de acoplamento. Causas: vedação do eixo desgastada, o-rings danificados, carcaça trincada. Risco ambiental e de segurança.</li>
<li><strong>Ruído Anormal:</strong> Ruídos de rolamento (ranger metálico) ou de engrenagem (batida rítmica). Causas: rolamento desgastado ou sem lubrificação, folga excessiva nos engrenamentos, desalinhamento do acoplamento.</li>
<li><strong>Queda de Pressão:</strong> Sistema não atinge a pressão especificada. Causas: válvula de alívio com ajuste incorreto, desgaste interno da bomba (aumento do slip), motor elétrico sem potência suficiente.</li>
<li><strong>Superaquecimento:</strong> Temperatura do óleo acima de 70°C. Causas: válvula de alívio descarregando continuamente, sistema sobredimensionado, trocador de calor ineficiente, bomba de cilindrada fixa em sistema de demanda variável.</li>
</ul>`,

    `<h2>Manutenção Preventiva de Bombas Hidráulicas</h2>
<p>A manutenção preventiva é o fator mais importante para a longevidade de uma bomba hidráulica. Uma bomba bem mantida pode operar por mais de 30.000 horas; sem manutenção adequada, pode falhar em menos de 5.000 horas.</p>
<p><strong>Programa de manutenção recomendado:</strong></p>
<ul>
<li><strong>Diariamente:</strong> Verificar nível de óleo no reservatório, temperatura de operação (display ou termômetro), ruídos anormais, pressão de trabalho no manômetro.</li>
<li><strong>Mensalmente:</strong> Inspeção visual de vazamentos externos, verificação da tensão das correias (se aplicável), limpeza externa da bomba e conjunto moto-bomba.</li>
<li><strong>A cada 500-1000 horas:</strong> Análise laboratorial do óleo hidráulico (viscosidade, acidez, contaminação por partículas e água), limpeza e inspeção do filtro de sucção, verificação do acoplamento entre bomba e motor.</li>
<li><strong>A cada 2000-4000 horas:</strong> Substituição do óleo hidráulico e dos filtros de retorno e pressão, inspeção interna da bomba (eficiência volumétrica), verificação de rolamentos, medição de pressão de standby e de corte do compensador.</li>
<li><strong>Recondicionar ou substituir:</strong> Quando a eficiência volumétrica cair abaixo de 85% da especificação original, a bomba deve ser recondicionada ou substituída para evitar superaquecimento e danos a outros componentes do sistema.</li>
</ul>
<p>A <strong>HiComp Hidráulica</strong> oferece serviços completos de manutenção preventiva com análise de óleo, medição de eficiência em bancada e emissão de laudo técnico. Acesse <a href="/manutencao-bombas-hidraulicas">nossa página de manutenção de bombas</a> ou entre em <a href="/contato">contato</a> para agendar uma visita técnica.</p>`,

    `<h2>Marcas Líderes no Mercado de Bombas Hidráulicas</h2>
<p>O mercado de bombas hidráulicas industriais é dominado por poucos grandes fabricantes globais, cada um com pontos fortes distintos:</p>
<ul>
<li><strong>Parker Hannifin (EUA):</strong> Líder mundial em movimento e controle. A série PV (pistão axial variável) é a mais vendida para aplicações industriais no Brasil. Excelente suporte técnico e disponibilidade de peças. Linha PGP/PGM para engrenagem e linha V para palhetas.</li>
<li><strong>Bosch Rexroth (Alemanha):</strong> Tecnologia alemã de precisão. Série A10VSO e A4VSO são referência em eficiência e controle. Amplamente utilizadas em equipamentos de construção e máquinas-ferramenta. Série AZPF para engrenagem.</li>
<li><strong>Vickers/Eaton (EUA):</strong> Tradição e robustez. A série PVB e PVQ (pistão) e as bombas de palhetas V10/V20 são muito presentes no parque industrial brasileiro. Excelente disponibilidade de peças de reposição.</li>
<li><strong>Denison (França/EUA):</strong> Especialista em bombas de palhetas (série T6) para aplicações de baixo ruído e média pressão. Muito utilizada em máquinas-ferramenta, ferramentarias e moldes.</li>
<li><strong>Sauer Danfoss/Danfoss Power Solutions (Dinamarca/EUA):</strong> Líder em transmissões hidrostáticas e bombas para equipamentos móveis. Série 90 e Série 42/45 para aplicações veiculares e agrícolas.</li>
<li><strong>Kawasaki (Japão):</strong> Forte em equipamentos de construção civil (Komatsu, Hitachi). Bombas de pistão axial com alta resistência a ambientes severos.</li>
</ul>
<p>A HiComp trabalha com todas essas marcas, tanto na venda de bombas novas quanto no reparo e fornecimento de peças de reposição originais.</p>`,

    `<h2>Por que Escolher a HiComp Hidráulica</h2>
<p>A <strong>HiComp Hidráulica</strong> é a referência em bombas hidráulicas industriais em São Paulo e em todo o Brasil. Com mais de 25 anos de experiência, nossa equipe de engenheiros e técnicos especializados oferece:</p>
<ul>
<li><strong>Diagnóstico técnico gratuito:</strong> Avaliação completa da sua bomba com medição de eficiência, análise de desgaste e laudo técnico sem custo.</li>
<li><strong>Reparo com garantia:</strong> Recondicionamento completo com peças originais e garantia de 6 meses no serviço.</li>
<li><strong>Estoque disponível:</strong> Amplo estoque de bombas novas e peças de reposição para as principais marcas, reduzindo seu tempo de parada.</li>
<li><strong>Assistência técnica em campo:</strong> Equipe técnica disponível para atendimento na sua planta industrial em São Paulo e Grande SP.</li>
<li><strong>Projetos customizados:</strong> Especificação e fornecimento de bombas para projetos novos ou retrofit de sistemas existentes.</li>
</ul>
<p>Acesse nossa página de <a href="/assistencia-tecnica-industrial">assistência técnica industrial</a> ou solicite um <a href="/contato">orçamento gratuito</a> agora mesmo. Nossa equipe responde em até 2 horas em dias úteis.</p>`,

    `<h2>Perguntas Frequentes sobre Bombas Hidráulicas</h2>
<p><strong>Qual a diferença entre bomba de cilindrada fixa e variável?</strong><br/>Na bomba de cilindrada fixa, o volume deslocado por rotação é constante. A única forma de variar a vazão é alterar a rotação do motor. Na bomba de cilindrada variável, um mecanismo (prato oscilante nas bombas de pistão) permite ajustar o volume deslocado de 0 a 100%, permitindo adaptar a vazão à demanda do sistema sem alterar a rotação. Bombas variáveis são mais eficientes energeticamente, especialmente em ciclos com demanda variável.</p>
<p><strong>Quanto tempo dura uma bomba hidráulica?</strong><br/>Com manutenção adequada e óleo limpo (ISO 16/14/11 ou melhor), uma bomba de pistão axial de qualidade pode durar de 20.000 a 40.000 horas. Sem cuidados adequados, a vida útil pode cair para menos de 5.000 horas. O fator mais crítico é a qualidade e a limpeza do fluido hidráulico.</p>
<p><strong>Posso usar qualquer óleo hidráulico na minha bomba?</strong><br/>Não. Cada bomba tem especificações de viscosidade (geralmente ISO VG 32, 46 ou 68) e aditivos permitidos. O uso de óleo com viscosidade errada pode causar cavitação (muito fino) ou dificuldade de sucção (muito grosso). Sempre consulte o manual do fabricante ou contate a HiComp para orientação.</p>
<p><strong>Minha bomba está fazendo barulho — o que pode ser?</strong><br/>Ruído em bombas hidráulicas pode indicar cavitação (filtro de sucção entupido), rolamento desgastado, desalinhamento do acoplamento, ar na linha de sucção ou pressão de trabalho acima do limite. Um diagnóstico técnico é necessário para identificar a causa correta e evitar danos maiores.</p>`,
  ],

  technicalSpecs: `Bombas de Pistão Axial: Pressão nominal até 420 bar | Cilindrada 7-500 cc/rev | Eficiência volumétrica >95% | Rotação 500-3500 RPM | Bombas de Palhetas: Pressão até 175 bar | Baixo ruído <65 dB | Bombas de Engrenagem: Pressão até 250 bar | Alta robustez e resistência à contaminação | Fluidos: ISO VG 32-68 | Temperatura operação: -20°C a +80°C`,

  applications: [
    "Prensas hidráulicas de estampagem e forjamento",
    "Injetoras de plástico e borracha",
    "Máquinas-ferramenta CNC e centros de usinagem",
    "Escavadeiras e retroescavadeiras",
    "Colheitadeiras e tratores agrícolas",
    "Laminadores e trefiladoras siderúrgicas",
    "Fundição sob pressão (HPDC)",
    "Plataformas elevatórias e empilhadeiras",
    "Sistemas de teste e bancadas hidráulicas",
    "Equipamentos offshore e navais",
  ],

  brands: ["Parker", "Bosch Rexroth", "Vickers/Eaton", "Denison", "Sauer Danfoss", "Kawasaki", "Yuken", "Bosch"],

  maintenance: `A manutenção preventiva de bombas hidráulicas inclui: análise laboratorial periódica do óleo (viscosidade, acidez, partículas metálicas e água), medição da eficiência volumétrica em bancada, inspeção e troca de vedações e rolamentos, limpeza do filtro de sucção, verificação do acoplamento e alinhamento moto-bomba, e ajuste dos compensadores de pressão e vazão. A HiComp recomenda inspeção completa a cada 2.000 horas de operação ou anualmente. Com programa de manutenção adequado, bombas de pistão axial de qualidade podem operar por mais de 30.000 horas com plena performance.`,

  faq: [
    {
      question: "Qual o tipo de bomba hidráulica mais indicado para prensas industriais?",
      answer: "Para prensas, as bombas de pistão axial de cilindrada variável (Parker PV, Rexroth A10VSO, Vickers PVB) são as mais indicadas. Elas permitem controle preciso de força e velocidade, economia de energia em ciclos intermitentes e alta pressão de trabalho (até 420 bar). Para prensas de menor porte ou aplicações de baixa pressão, bombas de palhetas podem ser uma opção econômica.",
    },
    {
      question: "Como identificar cavitação em uma bomba hidráulica?",
      answer: "A cavitação se manifesta como um ruído característico de estalo ou golfada (similar ao de pedriscos sendo chacoalhados), acompanhado de vibração anormal e, em casos severos, queda de pressão e eficiência. As causas mais comuns são: filtro de sucção entupido, linha de sucção com restrição ou vazamento de ar, nível de óleo baixo no reservatório e temperatura do óleo muito baixa (alta viscosidade). A cavitação causa erosão severa nos componentes internos da bomba.",
    },
    {
      question: "Com que frequência devo trocar o óleo hidráulico do sistema?",
      answer: "A troca do óleo hidráulico deve ser baseada em análise laboratorial, não apenas no tempo. Como regra geral, recomenda-se análise a cada 1.000-2.000 horas e troca quando os indicadores de viscosidade, acidez ou contaminação excederem os limites. Em sistemas com boa filtragem e temperatura controlada, o óleo pode durar 4.000-8.000 horas. Em ambientes severos, a troca pode ser necessária a cada 1.000 horas.",
    },
    {
      question: "Vale a pena reformar uma bomba hidráulica ou é melhor comprar nova?",
      answer: "Na maioria dos casos, a reforma é economicamente vantajosa. O custo do recondicionamento representa tipicamente 30-50% do custo de uma bomba nova, com garantia equivalente (6 meses a 1 ano). Exceção: bombas com danos estruturais na carcaça, desgaste excessivo em múltiplos componentes ou modelos descontinuados. A HiComp realiza diagnóstico gratuito para indicar a melhor decisão técnica e econômica.",
    },
    {
      question: "Quais os cuidados no start-up de uma bomba hidráulica nova ou recondicionada?",
      answer: "O start-up correto é crítico para a longevidade da bomba: (1) Encha a carcaça da bomba com óleo limpo antes da partida; (2) Opere em vazio (sem carga) por 5-10 minutos na primeira partida; (3) Aumente a pressão gradualmente, verificando temperatura, ruído e vazamentos; (4) Nunca opere acima de 50% da pressão nominal nas primeiras 2 horas; (5) Verifique a temperatura do óleo após 30 minutos de operação. Uma partida inadequada pode danificar irreparavelmente uma bomba nova em minutos.",
    },
  ],

  images: [
    "/src/assets/bomba_hidraulica/bomba-hidraulica-parker-01.jpg",
    "/src/assets/bomba-hidraulica-industrial/bomba-hidraulica-industrial-01.webp",
    "/src/assets/bomba_rexroth/bomba-hidraulica-rexroth-01.jpg",
    "/src/assets/bomba_vickers/bomba-hidraulica-vickers-01.jpg",
    "/src/assets/bomba-de-palhetas/bomba-palhetas-01.webp",
    "/src/assets/bomba-hidraulica-engrenagem/bomba-hidraulica-engrenagem-01.webp",
    "/src/assets/bomba-hidraulica-axial/bomba-hidraulica-axial-01.webp",
  ],
};

export default content;
