import "../globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "../../components/footer/page";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-vazir">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
