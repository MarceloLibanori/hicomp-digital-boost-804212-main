import type { TopicContent } from '../topicContents';

const content: TopicContent = {
  introduction: `<p>As <strong>válvulas hidráulicas</strong> são os elementos de controle fundamentais de qualquer sistema hidráulico industrial. Elas regulam a direção do fluxo, a pressão de operação e a vazão do fluido, determinando com precisão como, quando e com que força os atuadores irão se mover. Sem válvulas adequadamente especificadas e mantidas, nenhum sistema hidráulico funciona com segurança e eficiência.</p>
<p>A <strong>HiComp Hidráulica</strong>, com mais de 25 anos de expertise em São Paulo, é referência nacional no fornecimento, reparo e manutenção de válvulas hidráulicas industriais de todas as marcas e tecnologias. Neste guia completo você encontrará tudo sobre <strong>válvulas hidráulicas</strong>: classificação, princípio de funcionamento, critérios de seleção, diagnóstico de falhas e marcas líderes do mercado.</p>`,

  mainContent: [
    `<h2>O que são Válvulas Hidráulicas</h2>
<p>As <strong>válvulas hidráulicas</strong> são dispositivos de controle que modulam o comportamento do fluido em um circuito hidráulico. Diferentemente das bombas (que geram energia) e dos atuadores (que convertem energia em trabalho mecânico), as válvulas gerenciam a distribuição e as condições do fluido pressurizado para garantir a operação segura, eficiente e controlada de todo o sistema.</p>
<p>Uma válvula hidráulica é caracterizada por: <strong>número de vias</strong> (quantas conexões de fluido possui), <strong>número de posições</strong> (quantos estados de operação tem), <strong>tipo de acionamento</strong> (manual, mecânico, solenoide, pilotado, proporcional), <strong>pressão nominal</strong> (pressão máxima de operação contínua) e <strong>vazão nominal</strong> (vazão máxima com queda de pressão especificada).</p>
<p>Em circuitos hidráulicos modernos, as válvulas podem ser instaladas de forma discreta (na linha, em blocos manifold) ou integradas em blocos de válvulas usinados, que condensam múltiplas funções em um único elemento compacto, reduzindo as conexões e o risco de vazamentos.</p>`,

    `<h2>Tipos de Válvulas Hidráulicas</h2>
<p>As válvulas hidráulicas se classificam em três grandes categorias funcionais:</p>
<ul>
<li><strong>Válvulas Direcionais:</strong> Controlam o caminho que o fluido percorre no circuito. A designação segue o padrão <em>n vias / m posições</em> (ex: 4/3 = 4 vias, 3 posições). Na posição de trabalho, o fluido é direcionado para um ou outro lado do atuador. Na posição neutra, o fluxo pode ser bloqueado ou desviado para o tanque. Tipos: <strong>válvula solenoide</strong> (acionamento elétrico), <strong>válvula pilotada</strong> (piloto hidráulico para alta vazão), <strong>válvula manual/alavanca</strong>, <strong>válvula mecânica/rolete</strong>.</li>
<li><strong>Válvulas de Pressão:</strong> Limitam, regulam ou reduzem a pressão no sistema. Subdivisões: <em>Válvula de alívio/segurança</em> — protege o sistema contra sobrepressão abrindo para o tanque quando a pressão máxima é atingida; <em>Válvula limitadora de pressão</em> — versão mais precisa do alívio; <em>Válvula redutora de pressão</em> — limita a pressão em um ramal secundário do circuito; <em>Válvula de sequência</em> — abre quando a pressão primária atinge um valor ajustado, sequenciando operações; <em>Válvula de freio/contrapressão</em> — cria contrapressão para controlar a descida de cargas.</li>
<li><strong>Válvulas de Vazão:</strong> Controlam a quantidade de fluido que passa, determinando a velocidade dos atuadores. Tipos: <em>Válvula throttle simples</em> (restrição fixa), <em>Válvula compensada de pressão</em> (mantém vazão constante independente da pressão), <em>Válvula divisora de fluxo</em> (divide o fluxo em proporções fixas entre dois ramos).</li>
<li><strong>Válvulas de Retenção (Check Valves):</strong> Permitem o fluxo em apenas uma direção. Essenciais para prevenir refluxo, manter cargas suspensas e proteger bombas. Variações: retenção simples, retenção pilotada (pode ser aberta por piloto externo para permitir refluxo controlado).</li>
<li><strong>Válvulas Proporcionais e Servo-Válvulas:</strong> Permitem controle contínuo e proporcional de direção, pressão ou vazão mediante sinal elétrico analógico ou digital. Utilizadas em aplicações de alta precisão, automação e eletro-hidráulica.</li>
</ul>`,

    `<h2>Como Funcionam as Válvulas Hidráulicas</h2>
<p>O princípio de operação varia conforme o tipo de válvula. Nas <strong>válvulas direcionais de carretel (spool)</strong> — as mais comuns —, um carretel cilíndrico desliza dentro de um alojamento, abrindo e fechando passagens de fluido conforme sua posição. Os solenoides eletromagnéticos empurram o carretel contra molas de retorno, garantindo o retorno à posição neutra quando desativados.</p>
<p>Nas <strong>válvulas de alívio</strong>, uma esfera ou cone é mantida fechada por uma mola pré-tensionada. Quando a pressão do fluido supera a força da mola (ajustável externamente), a válvula abre e desvia o fluxo para o tanque. O ajuste preciso da mola define a pressão de abertura (set point).</p>
<p>Nas <strong>válvulas proporcionais</strong>, um solenoide proporcional (LVDT) gera uma força proporcional à corrente elétrica aplicada. Essa força posiciona o carretel de forma contínua e proporcional ao sinal de controle (0-10V ou 4-20mA), permitindo controle suave e preciso sem choques de pressão. Válvulas proporcionais modernas incluem sensor de posição do carretel (LVDT integrado) e amplificadores com controle em malha fechada, aproximando-se da precisão das servo-válvulas.</p>
<p>As <strong>servo-válvulas</strong> utilizam torque motor de precisão (motor de torque) e controle em dois estágios (piloto + estágio principal) para atingir respostas de frequência de até 100 Hz com histerese inferior a 1%. São utilizadas em aplicações de alta precisão como simuladores de voo, ensaios dinâmicos e máquinas de injeção de alta performance.</p>`,

    `<h2>Aplicações Industriais das Válvulas Hidráulicas</h2>
<p>As válvulas hidráulicas estão presentes em todo sistema de controle de fluido pressurizado:</p>
<ul>
<li><strong>Prensas e estampagem:</strong> Válvulas direcionais pilotadas de alta vazão para controle de avanço e retorno. Válvulas de alívio duplo para proteção de prensa e ferramenta. Válvulas de contrapressão para controle de retorno suave.</li>
<li><strong>Injetoras de plástico:</strong> Válvulas proporcionais para controle de injeção, dosagem e extração. Servo-válvulas em máquinas de alta precisão para controle de perfil de velocidade e pressão de injeção.</li>
<li><strong>Equipamentos de construção civil:</strong> Válvulas de controle direcional manual (alavanca) ou eletro-hidráulico para lança, braço, giro e translação de escavadeiras. Válvulas de freio de rotor para controle de descida controlada.</li>
<li><strong>Sistemas de levantamento:</strong> Válvulas de retenção pilotada para manutenção de cargas suspensas com segurança. Válvulas de freio para descida controlada de guinchos e plataformas.</li>
<li><strong>Máquinas-ferramenta:</strong> Válvulas de sequência para garantir a ordem de operações (fixação antes do avanço da ferramenta). Válvulas de vazão compensada para velocidade constante de avanço independente da pressão de corte.</li>
<li><strong>Agrícola:</strong> Válvulas de alívio e direcionais para controle de implementos, levante traseiro e tração auxiliar em tratores.</li>
<li><strong>Naval e offshore:</strong> Válvulas de alta especificação para sistemas de guindaste, âncora, leme e sistemas de mergulho.</li>
<li><strong>Automação industrial:</strong> Blocos de válvulas proporcionais integrados para controle de robôs, prensas isostáticas e sistemas de conformação.</li>
</ul>`,

    `<h2>Como Escolher uma Válvula Hidráulica</h2>
<p>A seleção de válvulas hidráulicas deve considerar os seguintes parâmetros técnicos:</p>
<ul>
<li><strong>Função requerida:</strong> Definir claramente se a válvula deve controlar direção, pressão ou vazão. Em muitos casos, uma única válvula pode combinar múltiplas funções (ex: válvula direcional com check integrado).</li>
<li><strong>Pressão nominal do sistema:</strong> A pressão máxima de operação deve estar dentro dos limites da válvula (ex: 350 bar para válvulas CETOP padrão). Considere sempre picos de pressão transitórios.</li>
<li><strong>Vazão nominal:</strong> A queda de pressão pela válvula (∆P) deve ser mínima para evitar perdas de energia e aquecimento. Para válvulas direcionais, ∆P nominal é geralmente especificado a 5, 10 ou 35 L/min.</li>
<li><strong>Padrão de montagem:</strong> CETOP 3, CETOP 5, CETOP 7, SAE, ISO 4401. A padronização facilita a substituição entre marcas diferentes.</li>
<li><strong>Tipo de acionamento:</strong> Solenoide DC (12 ou 24V) ou AC (110 ou 220V), proporcional (0-10V), manual (alavanca), mecânico (rolete/came).</li>
<li><strong>Fluido hidráulico:</strong> Verificar compatibilidade de materiais (vedações, molas, carretel) com o tipo de fluido (mineral, HF, biodegradável).</li>
<li><strong>Temperatura de operação:</strong> Fluidos quentes reduzem a viscosidade e afetam o desempenho das vedações. Verifique a faixa de temperatura admitida.</li>
<li><strong>Classe de proteção:</strong> Para ambientes severos, use solenoides com proteção IP65 ou IP67. Para ambientes explosivos, solenoides ATEX.</li>
</ul>`,

    `<h2>Problemas Comuns e Diagnóstico em Válvulas Hidráulicas</h2>
<p>O diagnóstico correto de falhas em válvulas reduz significativamente o tempo de parada produtiva:</p>
<ul>
<li><strong>Válvula não comuta:</strong> O carretel não muda de posição quando acionado. Causas: solenoide queimado ou sem tensão, carretel travado por contaminação (partículas no fluido), mola de retorno quebrada, pressão de piloto insuficiente (em válvulas pilotadas). Diagnóstico: verificar tensão nos solenoides com multímetro, testar acionamento manual (botão de override), inspecionar o carretel.</li>
<li><strong>Vazamento interno excessivo:</strong> O atuador move-se lentamente mesmo com a válvula na posição neutra, ou não mantém posição. Causas: carretel desgastado (folga excessiva no alojamento), vedações do carretel danificadas, contaminação abrasiva. Solução: substituição do carretel ou da válvula completa.</li>
<li><strong>Válvula de alívio oscilando (hunting):</strong> Pressão do sistema oscila rapidamente em torno do set point. Causas: mola fraca ou danificada, piloto interno obstruído, solenoide de alívio elétrico com sinal instável. Solução: limpeza do piloto interno, substituição da mola, verificação do sinal de controle.</li>
<li><strong>Resposta lenta (válvula proporcional):</strong> O atuador responde com atraso ao sinal de controle. Causas: ganho do amplificador mal ajustado, carretel com atrito excessivo por contaminação, sinal de referência com interferência elétrica (ruído). Solução: ajuste do amplificador, limpeza do carretel, blindagem de cabos de sinal.</li>
<li><strong>Ruído de fluxo (chiado):</strong> Som agudo nas válvulas de alívio ou throttle. Causas: set point muito próximo da pressão de trabalho, válvula subdimensionada (∆P excessivo), cavitação na passagem de fluido. Solução: ajuste do set point (mínimo 15 bar acima da pressão máxima de trabalho), substituição por válvula de maior capacidade.</li>
<li><strong>Aquecimento excessivo:</strong> Válvula muito quente ao toque. Causas: válvula de alívio descarregando continuamente (set point abaixo da pressão de trabalho), throttle muito fechado gerando perda de carga excessiva. Essa condição degrada o fluido e danifica as vedações rapidamente.</li>
</ul>`,

    `<h2>Manutenção Preventiva de Válvulas Hidráulicas</h2>
<p>A manutenção adequada de válvulas hidráulicas é essencial para a confiabilidade e segurança do sistema:</p>
<ul>
<li><strong>Limpeza e filtragem do fluido:</strong> A principal causa de falhas em válvulas é a contaminação do fluido. Manter o nível de limpeza do óleo em ISO 16/14/11 ou melhor previne o travamento de carretéis e a erosão de assentos. Troque os filtros conforme o indicador de colmatagem ou calendário preventivo.</li>
<li><strong>Verificação dos solenoides:</strong> Meça a resistência dos solenoides (compare com o valor nominal do fabricante) a cada manutenção programada. Solenoides com resistência fora da especificação indicam bobina danificada ou em início de falha.</li>
<li><strong>Verificação do set point de alívio:</strong> Use manômetro calibrado para verificar a pressão de abertura das válvulas de alívio. O set point não deve mudar entre manutenções; se mudar, indica desgaste da mola ou do assento.</li>
<li><strong>Limpeza dos filtros de piloto:</strong> Válvulas pilotadas possuem filtros internos de piloto que podem obstruir com o tempo. A limpeza periódica evita falhas de comutação.</li>
<li><strong>Inspeção visual:</strong> Verificar vazamentos externos nas conexões, condição dos solenoides (proteção contra umidade), estado dos conectores elétricos e ausência de danos mecânicos na válvula.</li>
<li><strong>Calibração de válvulas proporcionais:</strong> Válvulas proporcionais devem ser calibradas periodicamente (offset, ganho e histerese) para garantir a precisão de controle especificada.</li>
</ul>
<p>A <strong>HiComp Hidráulica</strong> oferece serviço de reparo, calibração e recondicionamento de válvulas hidráulicas de todas as marcas. Consulte nossa página de <a href="/valvulas-hidraulicas">serviços de válvulas</a> ou solicite <a href="/contato">orçamento</a>.</p>`,

    `<h2>Marcas Líderes no Mercado de Válvulas Hidráulicas</h2>
<p>O mercado de válvulas hidráulicas industriais é dominado por fabricantes com décadas de tradição:</p>
<ul>
<li><strong>Parker Hannifin:</strong> Linha D1VW, D3W, D41VW (direcionais), série BD (alívio), CVP (válvulas de pressão). Excelente padronização CETOP. Amplamente disponíveis no Brasil com suporte técnico completo.</li>
<li><strong>Bosch Rexroth:</strong> Série 4WE6, 4WE10 (direcionais CETOP 3 e 5), DBDS (alívio de pistão), DR (redutoras). Alta precisão e durabilidade, muito utilizadas em equipamentos alemães e máquinas importadas.</li>
<li><strong>Vickers/Eaton:</strong> DG4V-3, DG4V-5 (direcionais), RCT (alívio), CT (retenção). Forte presença no parque industrial brasileiro, especialmente em equipamentos americanos.</li>
<li><strong>Bosch:</strong> Válvulas para transmissões e aplicações automotivas/industriais. Linha NG6 e NG10 para aplicações industriais.</li>
<li><strong>Sun Hydraulics:</strong> Válvulas de cartucho (cartridge valves) para blocos manifold customizados. Padrão de qualidade elevado, muito utilizadas em projetos de engenharia especial.</li>
<li><strong>Hydraforce:</strong> Especialista em válvulas de cartucho para equipamentos móveis. Alta integração em blocos manifold compactos.</li>
<li><strong>Dofluid:</strong> Fabricante chinês com ampla presença no Brasil para aplicações de médio nível técnico. Boa relação custo-benefício para substituição de emergência.</li>
</ul>`,

    `<h2>Por que Escolher a HiComp Hidráulica para Válvulas</h2>
<p>A <strong>HiComp Hidráulica</strong> é especialista em válvulas hidráulicas industriais. Nossa expertise cobre toda a cadeia de valor:</p>
<ul>
<li><strong>Estoque diversificado:</strong> Válvulas direcionais, de pressão, de vazão e retenção das principais marcas em pronta entrega em São Paulo.</li>
<li><strong>Reparo e recondicionamento:</strong> Limpeza ultrassônica de carretéis, substituição de vedações, calibração de amplificadores proporcionais, teste de performance em bancada com laudo técnico.</li>
<li><strong>Equivalência entre marcas:</strong> Nossa equipe técnica identifica equivalências entre modelos descontinuados ou de difícil obtenção, reduzindo o tempo de parada.</li>
<li><strong>Projetos de blocos manifold:</strong> Projetamos e fabricamos blocos manifold customizados integrando múltiplas funções de válvulas, reduzindo conexões e espaço ocupado.</li>
<li><strong>Assistência técnica:</strong> Equipe de campo para diagnóstico e substituição de válvulas na sua planta industrial.</li>
</ul>
<p>Solicite <a href="/contato">orçamento gratuito</a> ou acesse nossa página de <a href="/hidraulica-industrial">hidráulica industrial</a> para conhecer todos os nossos serviços.</p>`,

    `<h2>Perguntas Frequentes sobre Válvulas Hidráulicas</h2>
<p><strong>Qual a diferença entre válvula de alívio e válvula limitadora de pressão?</strong><br/>Funcionalmente são similares — ambas abrem quando a pressão atinge o set point. A diferença é de precisão e estabilidade. Válvulas de alívio simples (de esfera ou poppet) têm maior variação de pressão entre abertura e fechamento (histerese). Válvulas limitadoras de alta precisão (de piloto interno e estágio principal) mantêm a pressão de abertura muito mais estável, com histerese inferior a 2%. Para proteção básica, o alívio simples é suficiente; para controle preciso de pressão, use a versão de piloto.</p>
<p><strong>Posso substituir uma válvula Parker por uma Rexroth de mesmo padrão CETOP?</strong><br/>Sim, desde que o padrão de montagem (CETOP 3 ou 5), o número de vias/posições, o tipo de carretel (centro aberto, fechado, tandem etc.), a pressão nominal e a vazão nominal sejam compatíveis. O perfil de spool interno pode diferir levemente entre marcas — em aplicações críticas, recomendamos teste funcional antes da troca definitiva. A HiComp pode orientar sobre equivalências.</p>
<p><strong>Por que minha válvula proporcional não responde linearmente ao sinal?</strong><br/>A não-linearidade pode ter várias causas: amplificador com ganho incorreto, curva de calibração fora do ajuste, histerese mecânica do carretel (atrito por contaminação), desgaste do solenoide proporcional ou problemas na fonte de sinal de referência. A calibração e o ajuste correto do amplificador resolvem a maioria dos casos.</p>
<p><strong>Qual o custo de reparo de uma válvula proporcional Parker?</strong><br/>O custo varia conforme o modelo e o nível de dano. Em geral, o reparo de uma válvula proporcional custa entre 40-60% do preço de uma nova. A HiComp realiza diagnóstico técnico gratuito e emite orçamento antes de qualquer intervenção.</p>`,
  ],

  technicalSpecs: `Válvulas CETOP 3 (NG6): Pressão até 350 bar | Vazão até 60 L/min | Válvulas CETOP 5 (NG10): Pressão até 350 bar | Vazão até 120 L/min | Válvulas CETOP 7 (NG16): Pressão até 350 bar | Vazão até 250 L/min | Solenoides: 12 ou 24 VDC / 110 ou 220 VAC | Temperatura: -20°C a +70°C | Fluidos: minerais ISO VG 32-68, HF, biodegradáveis`,

  applications: [
    "Prensas hidráulicas de estampagem e forjamento",
    "Injetoras de plástico e borracha",
    "Máquinas-ferramenta CNC e centros de usinagem",
    "Escavadeiras, guinchos e equipamentos de levantamento",
    "Sistemas de freio e controle de velocidade",
    "Automação de linhas de produção industrial",
    "Equipamentos agrícolas (tratores, implementos)",
    "Offshore, naval e plataformas de petróleo",
    "Blocos manifold para circuitos integrados",
    "Servo-sistemas de alta precisão e testes dinâmicos",
  ],

  brands: ["Parker", "Bosch Rexroth", "Vickers/Eaton", "Bosch", "Sun Hydraulics", "Hydraforce", "Dofluid"],

  maintenance: `A manutenção de válvulas hidráulicas começa pela qualidade do fluido: manter o óleo limpo (ISO 16/14/11 ou melhor) é o fator mais importante para a longevidade das válvulas. Adicionalmente: verificar periodicamente a resistência dos solenoides, calibrar o set point das válvulas de alívio com manômetro calibrado, limpar filtros de piloto interno, inspecionar vedações externas e conectores elétricos. Válvulas proporcionais devem ser calibradas anualmente. A HiComp realiza serviço completo de inspeção, limpeza ultrassônica, substituição de vedações e calibração em bancada para todos os modelos.`,

  faq: [
    {
      question: "Como escolher entre válvula direcional de acionamento direto e pilotada?",
      answer: "Válvulas de acionamento direto (solenoide move o carretel diretamente) são ideais para vazões até 60-80 L/min. Para vazões maiores, o solenoide não tem força suficiente para mover um carretel grande contra a pressão do fluido — nesse caso, usa-se a válvula pilotada, onde o solenoide aciona um pequeno piloto que usa a pressão do sistema para mover o carretel principal. Válvulas pilotadas exigem pressão mínima de piloto (geralmente 8-12 bar) para comutar corretamente.",
    },
    {
      question: "O que é o 'spool center' de uma válvula direcional e como escolher?",
      answer: "O 'spool center' define o comportamento da válvula na posição neutra (solenoides desenergizados). Os tipos principais são: Centro Aberto (P→T livres, A e B bloqueados) — bomba descarrega em vazio, atuador bloqueado; Centro Fechado (todas as vias bloqueadas) — sistema pressurizado em neutro, usado com bombas de pressão compensada; Centro Tandem (P→T e A→B livres) — bomba descarrega e atuador flutua; Centro Regenerativo (P+A→B, T bloqueado) — aumenta velocidade de avanço. A escolha incorreta pode causar problemas sérios de pressão e controle.",
    },
    {
      question: "Posso regular a pressão de um sistema hidráulico pela válvula de alívio?",
      answer: "A válvula de alívio deve ser configurada como proteção (pressão máxima de segurança), não como regulador de trabalho. Para regulagem precisa da pressão de operação em circuitos secundários, use válvulas redutoras de pressão. Operar o sistema continuamente com a válvula de alívio descarregando causa superaquecimento do fluido e desperdício de energia.",
    },
    {
      question: "Qual a vida útil de uma válvula hidráulica?",
      answer: "Válvulas hidráulicas de qualidade, em aplicações dentro dos limites de pressão e vazão, com fluido limpo e temperatura controlada, podem durar décadas sem intervenção. O fator limitante mais comum é a contaminação do fluido, que desgasta os carretéis e assenta. Válvulas de alívio com mola sujeita a ciclos constantes podem ter a mola fadiga após milhões de ciclos. A HiComp recomenda inspeção preventiva a cada 2 anos ou 8.000 horas.",
    },
    {
      question: "Como testar se uma válvula de alívio está funcionando corretamente?",
      answer: "Com o sistema em funcionamento, aumente gradualmente a pressão observando o manômetro. A válvula deve abrir exatamente no set point ajustado (tolerância típica ±5%). Se a pressão ultrapassar o set point sem abrir, a válvula está travada (perigo de sobrepressão). Se abrir antes do set point, a mola está fraca ou o assento está danificado. Use sempre um manômetro calibrado para este teste e nunca exceda a pressão máxima do sistema.",
    },
  ],

  images: [
    "/src/assets/valvula-hidraulica-parker/valvula-hidraulica-parker-01.webp",
    "/src/assets/valvula-hidraulica-rexroth/valvula-hidraulica-rexroth-01.webp",
    "/src/assets/valvula-hidraulica-vickers/valvula-hidraulica-vickers-01.webp",
    "/src/assets/valvulas-proporcionais-hidraulicas/valvulas-proporcionais-hidraulicas-01.webp",
    "/src/assets/valvula-direcional-parker/valvula-direcional-parker-01.webp",
    "/src/assets/valvula-direcional-bosch-rexroth/valvula-direcional-bosch-rexroth-01.webp",
    "/src/assets/valvula-reguladora-de-pressao-vickers/valvula-reguladora-pressao-vickers-01.webp",
  ],
};

export default content;
