import MainNavbar from "@/_components/navbars/MainNavbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <MainNavbar />
      <main className="p-6">
        {children}
     
      </main>
    </div>
  );
}
