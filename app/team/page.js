// import Apply from "@/components/team/Apply.jsx";
import Footer from "@/components/general/Footer";
import Header from "@/components/team/Header.jsx";
import TeamProfiles from "@/components/team/TeamProfiles.jsx";
import TopBar from "@/components/general/Topbar";
import Box from "@mui/material/Box";

export default function Team() {
  return (
    <Box>
      <TopBar />
      <Header />
      <TeamProfiles />
      {/* <Apply /> */}
      <Footer />
    </Box>
  );
}
