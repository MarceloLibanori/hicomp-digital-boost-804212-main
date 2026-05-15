import { Building2, Clock3, MapPin, ShieldCheck } from "lucide-react";

const TestimonialsSection = () => {
  const trustSignals = [
    {
      icon: Clock3,
      title: "Experiência de mercado",
      text: "Atuação desde 1995 com foco em componentes hidráulicos, manutenção industrial e suporte técnico para operações que exigem agilidade.",
    },
    {
      icon: MapPin,
      title: "Base local em São Paulo",
      text: "Endereço físico na Vila Maria Alta, atendimento regional para Grande São Paulo e envio de componentes e equipamentos para todo o Brasil.",
    },
    {
      icon: Building2,
      title: "Foco em indústria",
      text: "Atendimento a demandas de manutenção de bombas, cilindros, válvulas e unidades hidráulicas para linhas de produção e máquinas industriais.",
    },
    {
      icon: ShieldCheck,
      title: "Marcas e suporte técnico",
      text: "Trabalho com linhas Parker, Rexroth, Vickers, Denison, HDA e outras marcas relevantes, com diagnóstico e orientação técnica para cada aplicação.",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          Sinais de Confiança da HiComp
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
          Para competir melhor no Google e gerar mais contato comercial, a empresa precisa transmitir confiança com sinais claros de experiência, localização, especialização e capacidade técnica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {signal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {signal.text}
              </p>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
