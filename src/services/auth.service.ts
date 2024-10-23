// src/services/auth.service.ts
import { authAPI } from "./api/auth.api";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

export const authService = {
  async login(email: string, password: string) {
    try {
      const { token, user } = await authAPI.login({ email, password });
      authStore.login(user, token);
      return true; // Return success
    } catch (error) {
      console.error("Login failed:", error);
      return false; // Return failure
    }
  },

  async register(name: string, email: string, password: string) {
    try {
      const { token, user } = await authAPI.register({ name, email, password });
      authStore.login(user, token);
      return true; // Return success
    } catch (error) {
      console.error("Registration failed:", error);
      return false; // Return failure
    }
  },

  logout() {
    authAPI.logout(); // Call API to log out
    authStore.logout(); // Clear local data
  },
};
