import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("max-w-[80%] rounded-2xl px-4 py-3 shadow-sm", isUser ? "bg-chat-user text-chat-user-foreground rounded-br-md" : "bg-chat-bot text-chat-bot-foreground rounded-bl-md")}>
        <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
        <span className={cn("text-xs mt-1 block", isUser ? "text-chat-user-foreground/70" : "text-muted-foreground")}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
