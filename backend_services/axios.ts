import axios from "axios";
const envVariable = "production" as string;
const $http = axios.create({
  baseURL:
    envVariable === "production"
      ? "https://med-ai-api-peach.vercel.app/"
      : "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

export { $http };
