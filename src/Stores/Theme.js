import { create } from "zustand";

export const useTheme = create((set) => {
  return {
    theme: "light",
    toggleTheme: () => {
      set((state) => {
        return { theme: state.theme === "light" ? "dark" : "light" };
      });
    },
    setTheme: (theme) => {
      if (theme !== "light" && theme !== "dark") {
        console.error("invalied theme .");
        return;
      }
      set({ theme });
    },
  };
});
