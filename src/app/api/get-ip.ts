import { NextApiRequest, NextApiResponse } from 'next';

export default function getIpAddress(req: NextApiRequest, res: NextApiResponse) {
    console.log(req, res, "this i s req, response");
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  res.status(200).json({ ip });
}
