import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: false,
  fetchUser: async (username: string) => {
    set({ loading: true, error: null });
    try {
      console.log("run fetch function on user...", username);
      const response = await fetch(
        `https://api.github.com/users/${username}`
      ).then((res) => res.json());

      // console.log("RESPONSE...", response);
      if (!response.ok && response.status !== 200) {
        if (response.status === 404) {
          throw new Error("No results");
        }
        throw new Error(`request error!`)
      }

      set({ loading: false, error: null, user: response });
      // console.log("user data .. ", response);
    } catch (error) {
      set({ error: (error as Error).message, loading: false, user: null });
      // console.log("error..", error);
    }
  },
}));

export default useUserStore;
