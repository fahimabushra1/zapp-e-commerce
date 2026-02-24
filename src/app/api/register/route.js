import { createUser } from "@/app/lib/users";

export async function POST(req) {
  const { email, password, name } = await req.json();

  if (!email || !password) {
    return Response.json(
      { message: "Email and password are required" },
      { status: 400 },
    );
  }

  try {
    const user = await createUser({ email, password, name });
    return Response.json({ message: "User created", user }, { status: 201 });
  } catch (error) {
    if (error.message === "USER_EXISTS") {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
