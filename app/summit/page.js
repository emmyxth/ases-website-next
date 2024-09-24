import TopBar from "@/components/general/Topbar";
import SummitHeader from "@/components/summit/SummitHeader";
import SummitSchedule from "@/components/summit/SummitSchedule";
import SummitAbout from "@/components/summit/SummitAbout";
import SummitValueProp from "@/components/summit/SummitValueProp";
import SummitDetails from "@/components/summit/SummitDetails";
import SummitSpeakers from "@/components/summit/SummitSpeakers";
import SummitActivities from "@/components/summit/SummitActivities";
import SummitTestimonials from "@/components/summit/SummitTestimonials";
import Footer from "@/components/general/Footer";

export default function Summit() {
  return (
    <>
      <TopBar />
      <SummitHeader />
      <SummitSchedule />
      <SummitAbout />
      <SummitValueProp />
      <SummitDetails />
      <SummitSpeakers />
      <SummitActivities />
      <SummitTestimonials />
      <Footer />
    </>
  );
}
