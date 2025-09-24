import { connectDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/User";

//Get by ID user

export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ error: "User Not Found" }), {
        status: 404,
      });
    }
    return Response.json(user);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid ID Format" }), {
      status: 400,
    });
  }
}
