import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

console.log("api url = " + process.env.NEXT_PUBLIC_API_URL);

export const getBlogEntries = () => api.get("/blog/entries");
export const getBlogEntry = (slug: string) => api.get(`/blog/entry/${slug}`);
export const runGreenIdeas = () => api.get("/greenideas/sentence");
export const runTwaddle = (sentence: string) =>
  api.get(`/twaddle/run`, { params: { sentence: sentence } });
