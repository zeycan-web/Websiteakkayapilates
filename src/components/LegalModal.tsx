import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[calc(80vh-80px)]">
          <div className="text-gray-700 whitespace-pre-line leading-relaxed">
            {content}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
