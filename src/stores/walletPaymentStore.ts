import { create } from "zustand";

type WalletState = {
  balance: number;
  chargeAmount: number;

  setChargeAmount: (amount: number) => void;
  addToBalance: (amount: number) => void;
  resetChargeAmount: () => void;
};

export const useWalletStore = create<WalletState>((set) => ({
  balance: 0,
  chargeAmount: 0,

  setChargeAmount: (amount) => set({ chargeAmount: amount }),

  addToBalance: (amount) =>
    set((state) => ({
      balance: state.balance + amount,
    })),

  resetChargeAmount: () => set({ chargeAmount: 0 }),
}));