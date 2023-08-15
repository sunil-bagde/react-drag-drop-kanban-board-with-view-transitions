import { create } from "zustand";

type BoardStore = {
	draggingCard: string;
	setDraggingCard: (cardId: string) => void;
};
export const useBoardStore = create<BoardStore>((set) => ({
	draggingCard: "",
	setDraggingCard: (cardId: string) => set({ draggingCard: cardId }),
}));
