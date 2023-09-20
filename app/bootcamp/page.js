// import BootcampHeader from "./sections/BootcampHeader";
// import BootcampInfo from "./sections/BootcampInfo";
// import BootcampWhatYoullDo from "./sections/BootcampWhatYoullDo";
// import Footer from "../../components/Footer.js";
// import TopBar from "../../components/TopBar.js";
// import BootcampApply from "./sections/BootcampApply";
import LongButtonWArrowCustomized from "@/components/general/LongButtonWArrow";
import Footer from "@/components/general/Footer";
import Topbar from "@/components/general/Topbar";
import ProfileCard from "@/components/general/ProfileCard";
import profileData from "../../public/textContent/homeProfileCards.json";

export default function Bootcamp() {
  return (
    <>
      <Topbar />
      <h1 className="font-space">hello</h1>
      {profileData.map((m) => {
        return (
          <ProfileCard
            name={m.name}
            role={m.role}
            hoveredText={m.description}
            image={m.image}
          />
        );
      })}
      <LongButtonWArrowCustomized text="hello" />
      <Footer />
      {/* <TopBar />
      <BootcampHeader />
      <BootcampInfo />
      <BootcampWhatYoullDo />
      <BootcampApply />
      <Footer /> */}
    </>
  );
}
