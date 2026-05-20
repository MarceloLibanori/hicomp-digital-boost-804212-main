import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/5511992465636"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover-lift"
      aria-label="Abrir conversa no WhatsApp"
    >
      <div
        role="img"
        aria-hidden="true"
        className="rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 flex items-center justify-center"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </div>
    </a>
  );
};

export default WhatsAppFloatingButton;
