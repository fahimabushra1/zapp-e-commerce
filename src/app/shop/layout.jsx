import ShopNavbar from "@/_components/navbars/ShopNavbar";

export default function ShopLayout({ children, modal }) {
  return (
    <div>
      <ShopNavbar />
      <div className="p-6">{children}</div>
      {modal}
    </div>
  );
}
