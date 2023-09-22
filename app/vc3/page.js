import Footer from "@/components/general/Footer";
import TopBar from "@/components/general/Topbar";

export default function VC3() {
  return (
    <>
      <TopBar />
      <div
        className="flex justify-center items-center bg-white py-24 h-screen"
        style={{
          fontSize: "calc(24px + 4vmin)",
          fontWeight: "normal",
          fontFamily: "Space Grotesk",
          color: "black",
          fontWeight: "500",
          maxWidth: "100%",
          borderTop: "1px solid black",
        }}
      >
        <h1>Under construction: Coming soon!</h1>
      </div>
      <Footer />
    </>
  );
}
