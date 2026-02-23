import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Not Authorized</div>;
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <p>Role: {session.user.role}</p>
    </div>
  );
}
