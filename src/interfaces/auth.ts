export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
