import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQ from "../../../components/FAQ"
import faqData from "../../../textContent/homeFAQData.json";


export default function FAQSection() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-90" style={{backgroundColor: "white", paddingTop: "96px", paddingBottom:"96px", borderTop: "1px solid black", background: "#FCFAFF"}}>
      <h1 style={{fontFamily: "Space Grotesk", marginBottom: "64px", fontSize: "54px"}}>FAQ</h1>
      <div className="App d-flex flex-column justify-content-center align-items-center gap-3">
        {faqData.map((d) => {
          return <FAQ question={d.question} answer={d.answer} />;
        })}
      </div>
    </div>
  );
};
