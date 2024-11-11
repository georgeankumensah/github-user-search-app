import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: false,
  fetchUser: async (username: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      ).then((res) => res.json());
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("No results");
        }
        throw new Error(`request error! Status: ${response.status}`);
      }

      set({ loading: false, error: null, user: response.data });
      console.log("user", response.data);
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useUserStore;
