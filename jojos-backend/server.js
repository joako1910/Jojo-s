import http from "http";
import { parse } from "url";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY})
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) =>{
    const {pathname} = parse(req.url, true);
})

if (pathanme === "/api/motivos"){
    try {
        const 
    }
}