import React, { useRef } from "react";
import {
  RiBold, RiItalic, RiUnderline, RiH1, RiH2,
  RiListUnordered, RiListOrdered, RiLink, RiImageLine
} from "react-icons/ri";
import { FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleFormat = (prefix: string, suffix: string = "") => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = value || "";

    const newText =
      text.substring(0, start) +
      prefix +
      text.substring(start, end) +
      suffix +
      text.substring(end);

    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const handleLink = () => {
    const url = prompt("Enter URL:");
    if (url) handleFormat("[", `](${url})`);
  };

  const handleImage = () => {
    const url = prompt("Enter Image URL:");
    if (url) handleFormat("![Alt Text](", `${url})`);
  };

  return (
    <div>
      <FormLabel className="text-slate-300">Main Body (Markdown) *</FormLabel>
      <div className="bg-slate-700 border border-slate-600 rounded-t-lg p-3 flex items-center gap-2 flex-wrap">
        <ToolbarButton icon={RiBold} onClick={() => handleFormat("**", "**")} />
        <ToolbarButton icon={RiItalic} onClick={() => handleFormat("*", "*")} />
        <ToolbarButton icon={RiUnderline} onClick={() => handleFormat("<u>", "</u>")} />
        <div className="w-px h-6 bg-slate-600 mx-1"></div>
        <ToolbarButton icon={RiH1} onClick={() => handleFormat("# ", "")} />
        <ToolbarButton icon={RiH2} onClick={() => handleFormat("## ", "")} />
        <div className="w-px h-6 bg-slate-600 mx-1"></div>
        <ToolbarButton icon={RiListUnordered} onClick={() => handleFormat("- ", "")} />
        <ToolbarButton icon={RiListOrdered} onClick={() => handleFormat("1. ", "")} />
        <div className="w-px h-6 bg-slate-600 mx-1"></div>
        <ToolbarButton icon={RiLink} onClick={handleLink} />
        <ToolbarButton icon={RiImageLine} onClick={handleImage} />
      </div>
      <FormControl>
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={12}
          className="w-full bg-slate-700 border border-slate-600 border-t-0 rounded-b-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono resize-none"
          placeholder="Write using Markdown..."
        />
      </FormControl>
      <FormMessage />
    </div>
  );
}

function ToolbarButton({ icon: Icon, onClick }: { icon: React.ElementType; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center bg-slate-600 hover:bg-slate-500 rounded text-slate-300 hover:text-white transition-colors"
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}