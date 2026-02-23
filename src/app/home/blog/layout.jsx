import SideBar from "@/_components/sidebars/BlogSidebar";


export default function BlogLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
