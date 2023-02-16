import axios from "axios";

export const api = axios.create({
  baseURL: 'nlw-setup-deploy-api.vercel.app'
})