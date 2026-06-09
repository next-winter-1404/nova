import "../globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "../../components/footer/page";
import ScrollButton from "@/src/components/common/scrollButton/ScrollButton";
import ChatBotModal from "@/src/components/common/chatBot/ChatBotButton";

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
    <ScrollButton/>
    <ChatBotModal/>
    </div>
  );
}
