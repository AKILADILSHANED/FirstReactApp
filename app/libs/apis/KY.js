import ky from "ky";

export const API = ky.create({
    prefixUrl: process.env.NEXT_PUBLIC_API_URL,
    timeout: 60000,
    retry: 0
})