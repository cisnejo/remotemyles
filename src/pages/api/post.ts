import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, body } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      body: body,
    },
  });
  console.log(result);
  res.json(result);
}
