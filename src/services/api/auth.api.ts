// src/services/api/auth.api.ts
import { AuthResponse, LoginData, RegisterData } from "../../interfaces/auth";
import apiClient from "../interceptors/apiClient";

export const authAPI = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout");
  },
};
