import { create } from "zustand";

interface QuestionAnswer {
  question: string;
  answer: string;
}

interface RegisterState {
  email: string;
  password: string;
  questions: QuestionAnswer[]; 
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setQuestion: (index: number, question: string) => void;
  setAnswer: (index: number, answer: string) => void;
  resetRegister: () => void;
}

const useRegisterStore = create<RegisterState>((set) => ({
  email: "",
  password: "",
  questions: Array(6).fill(null).map(() => ({ question: "", answer: "" })),
  
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  
  setQuestion: (index, question) =>
    set((state) => {
      const updated = [...state.questions];
      updated[index] = { ...updated[index], question };
      return { questions: updated };
    }),

  setAnswer: (index, answer) =>
    set((state) => {
      const updated = [...state.questions];
      updated[index] = { ...updated[index], answer };
      return { questions: updated };
    }),

  resetRegister: () =>
    set({
      email: "",
      password: "",
      questions: Array(6).fill(null).map(() => ({ question: "", answer: "" })),
    }),
}));

export default useRegisterStore;
