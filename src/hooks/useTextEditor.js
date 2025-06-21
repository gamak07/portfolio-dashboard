// hooks/useTiptapEditor.js
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

export const useTextEditor = (content = "", onContentChange) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onContentChange?.(html)
    },
    editorProps: {
      attributes: {
        class:
          "prose max-w-none dark:prose-invert min-h-[150px] p-4 border border-gray-200 rounded-md focus:outline-none",
      },
    },
  });

  return { editor };
};
