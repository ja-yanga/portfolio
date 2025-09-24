import { connectDB } from "../../../../lib/mongodb";
import Content from "../../../../models/Content";

//get
export async function GET() {
  await connectDB();
  const content = await Content.find();
  return Response.json(content);
}

export async function POST(req) {
  await connectDB();

  const { info, amount } = await req.json();

  const newContent = await Content.create({ info, amount });
  return Response.json(newContent);
}
