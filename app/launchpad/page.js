import Footer from "@/components/general/Footer";
import TopBar from "@/components/general/Topbar";

export default function Launchpad() {
  return (
    <>
      <TopBar />
      <div
        className="flex justify-center items-center bg-white py-24 h-full"
        style={{
          fontSize: "calc(24px + 4vmin)",
          fontWeight: "normal",
          fontFamily: "Space Grotesk",
          color: "black",
          fontWeight: "500",
          maxWidth: "100%",
          borderTop: "1px solid black",
          //   height: "100%",
        }}
      >
        <h1>Under construction: Coming soon!</h1>
      </div>
      <Footer />
    </>
  );
}
