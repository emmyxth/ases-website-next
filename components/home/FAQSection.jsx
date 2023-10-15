import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQ from "./FAQComponent"
import faqData from "@/public/textContent/homeFAQData.json";


export default function FAQSection() {
  return (
    <div className="flex flex-col justify-center items-center px-90" style={{backgroundColor: "white", paddingTop: "96px", paddingBottom:"96px", borderTop: "1px solid black", background: "#FCFAFF"}}>
      <h1 style={{marginBottom: "64px", fontWeight: "500", fontSize: "54px"}}>FAQ</h1>
      <div className="App flex flex-col justify-content-center align-items-center gap-3 ">
        {faqData.map((d) => {
          return <FAQ question={d.question} answer={d.answer} />;
        })}
      </div>
    </div>
  );
};
