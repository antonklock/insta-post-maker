import { create } from "zustand";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface PreviewState {
  text: string;
  setText: (text: string) => void;
}

export const usePreviewStore = create<PreviewState>()((set) => ({
  text: "Preview Text",
  setText: (text) => set((state) => ({ text: text })),
}));
