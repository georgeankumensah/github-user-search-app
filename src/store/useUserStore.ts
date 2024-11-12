import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: false,

  fetchUser: async (username: string) => {
    set({ loading: true, error: null });
    try {
      console.log("run fetch function on user...", username);
      
      await fetch(`https://api.github.com/users/${username}`).then(
        (response) => {
          if (response.status === 404) {
            set({ loading: false, user: null });
            throw new Error("No results");
          }
          return response.json()
        }
      ).then(
        (data)=>{
          return set({ loading: false, error: null, user: data });
        }
      )

      
    } catch (error) {
      set({ error: (error as Error).message, loading: false, user: null });
      console.log("error..", error);
    }
  },
}));

export default useUserStore;
