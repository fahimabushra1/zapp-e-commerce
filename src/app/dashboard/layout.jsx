import DashboardNavbar from "@/_components/navbars/DashboardNavbar";
export default function DashboardLayout({ children, analytics, orders }) {
  return (
    <div>
      <DashboardNavbar />
      {children}
      <div className="p-6">{analytics}</div>
      <div>{orders}</div>
    </div>
  );
}
