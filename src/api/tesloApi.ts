import { create } from 'axios';

export const tesloApi = create({
  baseURL: import.meta.env.VITE_API_URL,
});

// TODO: interceptores
