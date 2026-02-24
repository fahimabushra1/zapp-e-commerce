import { getUser } from "@/app/lib/dal";
import LogoutButton from "@/_components/ui/LogOutButton";

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    return <div>Not Authorized</div>;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
