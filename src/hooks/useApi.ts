import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {user:{id:3, name: 'José', emial: 'josé@vaitomarnocu.com'}}
    const response = await api.post("/validate", { token });
  },
  signin: async (email: string, password: string) => { 
    return {user:{id:3, name: 'José', emial: 'josé@vaitomarnocu.com'},token:'123'}
    const response = await api.post("/login", { email, password });
    return response.data;
  },
  logout: async () => {
    return {status:true}
    const response = await api.post("/logout");
    return response.data;
  },
});
