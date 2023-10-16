import { create } from "zustand";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface PreviewState {
  text: string;
  setText: (text: string) => void;
  bgUrl: string;
  setBgUrl: (url: string) => void;
}

export const usePreviewStore = create<PreviewState>()((set) => ({
  text: "Preview Text",
  setText: (text) => set((state) => ({ text: text })),
  bgUrl:
    "https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80",
  setBgUrl: (url) => set((state) => ({ bgUrl: url })),
}));
