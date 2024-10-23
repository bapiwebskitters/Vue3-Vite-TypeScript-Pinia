// src/services/interceptors/apiClient.ts
import axios from "axios";
import { useAuthStore } from "../../store/auth";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: (import.meta as any).env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();

    // Add Authorization header with token if available
    if (authStore.token) {
      config.headers["Authorization"] = `Bearer ${authStore.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle token expiration or API errors globally
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout(); // Auto-logout if token is invalid
      window.location.href = "/login"; // Redirect to login
    }

    return Promise.reject(error);
  }
);

export default apiClient;
