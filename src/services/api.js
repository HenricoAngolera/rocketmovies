import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocket-movies-api-x4of.onrender.com'
})