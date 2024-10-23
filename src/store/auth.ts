// src/store/auth.ts
import { defineStore } from "pinia";
import { AuthState, User } from "../interfaces/auth";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: localStorage.getItem("auth_user_data") ? JSON.parse(localStorage.getItem("auth_user_data") as string) : null,
    token: localStorage.getItem("access_token") || null,
  }),
  actions: {
    login(userData: User, token: string) {
      this.user = userData;
      this.token = token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("auth_user_data", JSON.stringify(userData));
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("auth_user_data");
    },
    isAuthenticated(): boolean {
      return !!this.token;
    },
  },
});
