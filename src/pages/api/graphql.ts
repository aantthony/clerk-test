import { NextApiHandler } from "next";

const handler: NextApiHandler = function fn(req, res) {
  res.json({ ok: true });
};

export default handler;
