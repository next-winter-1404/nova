import "../globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "../../components/footer/page";
import ScrollButton from "@/src/components/common/scrollButton/ScrollButton";
import ChatBotModal from "@/src/components/common/chatBot/ChatBotButton";
import ClickSpark from "@/src/components/animations/ClickSpark/ClickSpark";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="font-vazir">
        <Navbar />
        {children}
        <Footer />
        <ScrollButton />
        <ChatBotModal />
      </div>
    </ClickSpark>
  );
}
