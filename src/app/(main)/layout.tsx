import "../globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "../../components/footer/page";




export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer/>
      </body>
    </html>
  );
}
