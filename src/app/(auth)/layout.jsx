import AuthNavbar from "@/_components/navbars/AuthNavbar";

export default function AuthLayout({ children }) {
  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center items-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
