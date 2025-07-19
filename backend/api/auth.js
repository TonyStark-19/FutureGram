import { register, login } from "../controllers/authController";

export default async function handler(req, res) {
    if (req.method === "POST" && req.url.includes("register")) {
        return register(req, res);
    }
    if (req.method === "POST" && req.url.includes("login")) {
        return login(req, res);
    }
    return res.status(405).json({ message: "Method Not Allowed" });
}
