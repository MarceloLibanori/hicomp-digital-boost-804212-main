import { Link } from "react-router-dom";

// SEO-optimized deep content section — 800-1500 words targeting Brazilian industrial search intent
const KeywordRichContent = () => {
  return (
    <section className="py-16 bg-background" aria-label="Componentes hidráulicos, pneumáticos e automação industrial no Brasil">
      <div className="container mx-auto px-4">
        {/* Main H2 with primary keyword cluster */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Componentes Hidráulicos e Pneumáticos para Indústria
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Desde 1995, a HiComp é referência nacional em fornecimento de peças hidráulicas, pneumáticas e soluções de automação industrial para empresas em São Paulo e todo o Brasil.
        </p>

        {/* Deep educational content — Google E-E-A-T */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              O Que São Componentes Hidráulicos e Para Que Servem?
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong>Componentes hidráulicos</strong> são peças que compõem sistemas de transmissão de força por meio de fluidos pressurizados, geralmente óleo mineral. Esses sistemas são amplamente utilizados na <strong>indústria brasileira</strong> em máquinas como prensas, injetoras, escavadeiras, guindastes, tratores e linhas de produção automatizadas. A <strong>hidráulica industrial</strong> é essencial para operações que exigem alta força com controle preciso de velocidade e posição.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Na HiComp, comercializamos e fazemos <strong>manutenção de equipamentos hidráulicos</strong> das principais marcas globais — <Link to="/produtos/parker" className="text-primary hover:underline font-semibold">Parker Hannifin</Link>, <Link to="/produtos/rexroth" className="text-primary hover:underline font-semibold">Bosch Rexroth</Link>, <Link to="/produtos/vickers" className="text-primary hover:underline font-semibold">Eaton Vickers</Link> e <Link to="/produtos/denison" className="text-primary hover:underline font-semibold">Denison Hydraulics</Link>. Nosso estoque inclui cilindros, bombas, válvulas, mangueiras, vedações, conexões e unidades hidráulicas completas.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Diferença entre Cilindros, Bombas e Válvulas Hidráulicas
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Entender a função de cada componente é fundamental para escolher a peça certa e evitar paradas de produção:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <article className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  🔧 Cilindros Hidráulicos
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  O <strong>cilindro hidráulico</strong> é o atuador que converte a energia do fluido em movimento linear. É a peça que executa o trabalho mecânico — empurrar, puxar, levantar ou comprimir. Existem cilindros de simples ação, dupla ação, telescópicos e diferenciais.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Cilindro hidráulico para prensa</li>
                  <li>• Cilindro hidráulico para escavadeira</li>
                  <li>• Cilindro pneumático industrial</li>
                  <li>• Fabricação sob medida</li>
                </ul>
                <Link to="/informacoes/cilindro-hidraulico" className="inline-block mt-4 text-primary hover:underline font-medium text-sm">
                  Saiba mais sobre cilindros →
                </Link>
              </article>

              <article className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  ⚙️ Bombas Hidráulicas
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  A <strong>bomba hidráulica</strong> é o coração do sistema — gera o fluxo de óleo que movimenta todo o circuito. Os tipos mais comuns são: bomba de pistão axial, bomba de engrenagem e bomba de palhetas. A escolha depende da pressão, vazão e aplicação.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Bomba hidráulica Parker</li>
                  <li>• Bomba hidráulica Rexroth</li>
                  <li>• Bomba de engrenagem industrial</li>
                  <li>• Reparo com garantia de 1 ano</li>
                </ul>
                <Link to="/informacoes/bomba-hidraulica-parker" className="inline-block mt-4 text-primary hover:underline font-medium text-sm">
                  Saiba mais sobre bombas →
                </Link>
              </article>

              <article className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  🔩 Válvulas Hidráulicas
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  As <strong>válvulas hidráulicas</strong> controlam direção, pressão e vazão do fluido no sistema. Válvulas direcionais determinam o caminho do óleo; válvulas de pressão protegem o sistema contra sobrecarga; válvulas proporcionais permitem controle eletrônico preciso.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Válvula direcional Parker</li>
                  <li>• Válvula proporcional Rexroth</li>
                  <li>• Válvula de alívio de pressão</li>
                  <li>• Válvula pneumática industrial</li>
                </ul>
                <Link to="/informacoes/valvulas-direcionais" className="inline-block mt-4 text-primary hover:underline font-medium text-sm">
                  Saiba mais sobre válvulas →
                </Link>
              </article>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Aplicações Industriais da Hidráulica no Brasil
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              No Brasil, os <strong>sistemas hidráulicos</strong> são utilizados em praticamente todos os setores industriais. A demanda por <strong>peças hidráulicas de qualidade</strong> cresce constantemente, impulsionada pela expansão da indústria de mineração, agronegócio, construção civil e manufatura. Os principais setores atendidos pela HiComp incluem:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-foreground text-sm mb-1">Mineração</h4>
                <p className="text-xs text-muted-foreground">Cilindros e bombas para britadores, escavadeiras e caminhões fora-de-estrada em MG, PA e MT</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-foreground text-sm mb-1">Siderurgia</h4>
                <p className="text-xs text-muted-foreground">Sistemas hidráulicos para laminadores, pontes rolantes e lingotamento contínuo</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-foreground text-sm mb-1">Agronegócio</h4>
                <p className="text-xs text-muted-foreground">Cilindros para colheitadeiras, pulverizadores e implementos agrícolas em GO, MT e PR</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-foreground text-sm mb-1">Construção Civil</h4>
                <p className="text-xs text-muted-foreground">Hidráulica para retroescavadeiras, guindastes e plataformas elevatórias</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Pneumática e Automação Industrial
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Além da hidráulica, a HiComp fornece <strong>componentes pneumáticos</strong> e soluções de <strong>automação industrial</strong>. Sistemas pneumáticos utilizam ar comprimido para movimentar atuadores e são ideais para operações de alta velocidade e baixa carga. Fornecemos cilindros pneumáticos, válvulas direcionais pneumáticas, conexões rápidas, reguladores de pressão e filtros de ar das marcas <strong>Festo</strong>, <strong>SMC</strong> e <strong>Parker Pneumatic</strong>.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A <strong>automação industrial</strong> combina hidráulica e pneumática com controle eletrônico para otimizar processos produtivos. A HiComp oferece consultoria técnica, projeto de blocos manifold e integração de sistemas para linhas de produção automatizadas em fábricas de todo o Brasil.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Por Que a Manutenção Hidráulica é Essencial para Sua Indústria?
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A <strong>manutenção preventiva de sistemas hidráulicos</strong> reduz custos operacionais, evita paradas não programadas e prolonga a vida útil dos equipamentos. Sem manutenção adequada, vazamentos, superaquecimento e desgaste prematuro podem causar prejuízos de milhares de reais por hora de produção parada. Os principais benefícios incluem:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Redução de custos</strong> — manutenção preventiva custa até 70% menos que consertos de emergência</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Maior produtividade</strong> — equipamentos calibrados operam com eficiência máxima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Segurança operacional</strong> — sistemas inspecionados reduzem risco de acidentes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Vida útil prolongada</strong> — troca de vedações e óleo na hora certa preserva o equipamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Garantia de 1 ano</strong> — todo reparo na HiComp inclui garantia com nota fiscal</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Como Escolher os Componentes Hidráulicos Certos para Sua Aplicação?
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Selecionar <strong>componentes hidráulicos</strong> inadequados pode resultar em baixo desempenho, alto consumo energético e falhas prematuras. Os principais critérios técnicos a considerar incluem:
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-lg mb-3 text-foreground">Critérios de Seleção Técnica</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-2">Pressão de Trabalho</p>
                  <p className="text-muted-foreground">
                    Bombas de engrenagem: até 250 bar. Bombas de pistão: até 420 bar. Escolha baseada na pressão máxima do sistema mais margem de segurança de 20-30%.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Vazão Necessária</p>
                  <p className="text-muted-foreground">
                    Calcule a vazão (litros/min) multiplicando área do cilindro × velocidade desejada. Bombas de vazão variável oferecem economia energética em ciclos intermitentes.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Viscosidade do Fluido</p>
                  <p className="text-muted-foreground">
                    Óleo ISO VG 32 para baixas temperaturas, ISO VG 46 para uso geral, ISO VG 68 para altas temperaturas ou cargas pesadas. Viscosidade errada reduz eficiência em até 15%.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Ambiente de Operação</p>
                  <p className="text-muted-foreground">
                    Ambientes com poeira (mineração) exigem vedações duplas. Temperaturas extremas (&gt;70°C ou &lt;0°C) requerem materiais especiais e fluidos sintéticos.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Principais Falhas em Sistemas Hidráulicos e Como Preveni-las
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A maioria das falhas hidráulicas é causada por <strong>contaminação do óleo</strong>, <strong>vedações desgastadas</strong> ou <strong>manutenção inadequada</strong>. Identificar sintomas precoces evita paradas custosas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <article className="bg-card p-5 rounded-lg border border-border">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span> Vazamento de Óleo
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Sintoma:</strong> Poças de óleo sob cilindros, mangueiras ou bombas.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causa:</strong> Vedações desgastadas (O-rings, retentores), conexões soltas, hastes riscadas.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solução HiComp:</strong> Substituição de kits de vedação originais Parker/Rexroth, cromagem e retífica de hastes, aperto calibrado de conexões.
                </p>
              </article>

              <article className="bg-card p-5 rounded-lg border border-border">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span> Superaquecimento do Sistema
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Sintoma:</strong> Óleo acima de 70°C, odor de queimado, queda de eficiência.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causa:</strong> Óleo contaminado, válvula de alívio mal regulada, bomba desgastada, trocador de calor entupido.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solução HiComp:</strong> Análise de óleo, calibração de válvulas, limpeza/substituição de trocadores, reparo de bombas.
                </p>
              </article>

              <article className="bg-card p-5 rounded-lg border border-border">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span> Queda de Pressão
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Sintoma:</strong> Cilindros lentos, força insuficiente, manômetro abaixo do normal.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causa:</strong> Bomba desgastada (desgaste interno), vazamentos internos em cilindros, filtros entupidos.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solução HiComp:</strong> Teste de vazão em bancada, retrofit de bombas Parker/Rexroth, substituição de anéis de pistão.
                </p>
              </article>

              <article className="bg-card p-5 rounded-lg border border-border">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span> Ruído e Cavitação
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Sintoma:</strong> Barulho agudo, vibração excessiva, bolhas no reservatório.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Causa:</strong> Sucção de ar, filtro de sucção obstruído, viscosidade inadequada, nível baixo de óleo.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solução HiComp:</strong> Inspeção de linhas de sucção, troca de filtros, correção de nível, seleção correta de fluido ISO VG.
                </p>
              </article>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Manutenção Preventiva: Checklist Essencial para Sistemas Hidráulicos
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Um programa de <strong>manutenção preventiva hidráulica</strong> bem estruturado pode reduzir paradas não programadas em até 90%. A HiComp recomenda:
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border-l-4 border-primary mb-8">
              <h4 className="font-bold text-lg mb-4 text-foreground">Checklist Mensal</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Verificar nível e aparência do óleo hidráulico (cor, espuma, partículas)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Inspecionar mangueiras quanto a rachaduras, abrasão ou sinais de fadiga</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Verificar indicadores de saturação de filtros e substituir se necessário</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Testar temperatura de operação (máximo 65-70°C em regime contínuo)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Verificar aperto de conexões e eliminar pequenos vazamentos</span>
                </div>
              </div>

              <h4 className="font-bold text-lg mb-4 mt-6 text-foreground">Checklist Trimestral</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Análise laboratorial de óleo (viscosidade, ponto de fulgor, contaminação)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Calibração de manômetros e pressostatos</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Limpeza de trocadores de calor e reservatórios</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Inspeção de vedações de cilindros (buscar sinais de início de vazamento)</span>
                </div>
              </div>

              <h4 className="font-bold text-lg mb-4 mt-6 text-foreground">Checklist Anual</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Troca completa de óleo hidráulico e flushing do sistema</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Revisão completa de bombas (teste de vazão e pressão em bancada)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Substituição preventiva de mangueiras com mais de 5 anos</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-muted-foreground">Retrofit de válvulas e atualização de componentes obsoletos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* E-E-A-T trust signals */}
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-bold mb-6 text-foreground text-center">
            Por Que Empresas de Todo o Brasil Escolhem a HiComp?
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+29</div>
              <h4 className="font-semibold mb-1 text-foreground">Anos no Mercado</h4>
              <p className="text-muted-foreground">
                Desde 1995 fornecendo <strong>peças hidráulicas</strong> para a indústria brasileira.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1 Ano</div>
              <h4 className="font-semibold mb-1 text-foreground">De Garantia</h4>
              <p className="text-muted-foreground">
                Todo <strong>reparo de bomba</strong> e cilindro inclui garantia com nota fiscal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">27</div>
              <h4 className="font-semibold mb-1 text-foreground">Estados Atendidos</h4>
              <p className="text-muted-foreground">
                Enviamos peças para <strong>todos os estados</strong> do Brasil via transportadora.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <h4 className="font-semibold mb-1 text-foreground">Marcas Premium</h4>
              <p className="text-muted-foreground">
                <strong>Parker</strong>, <strong>Rexroth</strong>, <strong>Vickers</strong>, Denison, Festo e SMC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordRichContent;
