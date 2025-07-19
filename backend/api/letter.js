import { createLetter } from "../../../controllers/letterController";

export default async function handler(req, res) {
    if (req.method === "POST") return createLetter(req, res);
    return res.status(405).json({ message: "Method Not Allowed" });
}
