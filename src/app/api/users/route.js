import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";

//Get All Users

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}

//Add User

export async function POST(req) {
  await connectDB();
  const { name, email } = await req.json();

  const newUser = await User.create({ name, email });
  return Response.json(newUser);
}
