import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

export default function AllFAQs({header, troviFAQs}) {

    const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="flex flex-col lg:flex-row lg:p-4 gap-6 lg:gap-12">
                        <div className="mt-6 lg:mt-12 text-green text-[25px] font-bold w-full text-center md:text-left lg:w-[180px]">{header}</div>
                        <div className="w-full">
                            {troviFAQs.map((faq, index) => {
                                return (
                                    <Accordion disableGutters sx={{ boxShadow:  "none" }} className="py-4 md:py-8 bg-lightgreenbg before:bg-white text-green" expanded={expanded === index.toString()} onChange={handleChange(index.toString())} key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="text-green" />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className='text-[18px] md:text-[20px]'>
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='mr-6 lg:mr-40 text-[14px] md:text-[16px]'>
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </div>
                    </section>
    );
}