import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

export default function MuiAccordion({ content }) {
  return (
    <Grid>
      {content.map((item, index) => (
        <Accordion key={index} elevation={0} className="accordion-container">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className="accordion-summary">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
