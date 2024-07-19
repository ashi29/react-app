import { Grid, Typography } from "@mui/material";
import React from "react";
import CenteredTextSection from "../../Components/CenteredTextSection/Index";
import SurveyCard from "../../Components/SurveyCard/Index";
import aboutImage from "../../Images/LandingImages/AboutImages/aboutImage.png";
import MuiAccordion from "./../../MuiComponents/MuiAccordion/Index";
import "./Style.css";

const Services = () => {
  const cardArray = [
    {
      title1: "Survey Sampling:",
      title2: "Quantitative Research",
      color: "primary",
      number: "1",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            1. Web Interviewing (CAWI): Engage respondents through accessible
            and user-friendly web surveys. Our CAWI method ensures efficient
            data collection without compromising participant convenience.
          </Typography>
          <Typography className="surveyContent-text">
            2. Phone Interviewing (CATI): Harness CATI for profound phone
            interviews. Our skilled interviewers navigate conversations adeptly,
            ensuring accurate responses.
          </Typography>
          <Typography className="surveyContent-text">
            3. Face To Face Interviewing (CAPI): Forge personal connections
            through face-to-face interviews. Particularly effective for complex
            topics, CAPI builds rapport for comprehensive insights.
          </Typography>
          <Typography className="surveyContent-text">
            4. Complex (Mixed) Mode Interviewing: Recognizing respondent
            preferences, our complex mode approach combines web, phone, and
            face-to-face methods for comprehensive data collection.
          </Typography>
        </Grid>
      ),
    },
    {
      title1: "Survey Sampling:",
      title2: "Quantitative Research",
      color: "warning",
      number: "1",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            1. Focus Groups: Dive into group dynamics through focus group
            discussions. Our facilitators create an open environment for
            meaningful insights.
          </Typography>
          <Typography className="surveyContent-text">
            2. In-depth Interviews: Explore individual perspectives with
            deep-dive interviews. Skilled interviewers unveil nuanced insights
            for holistic audience understanding.
          </Typography>
          <Typography className="surveyContent-text">
            3. Consumer Immersion/Ethnography: Immerse in customer worlds with
            ethnographic research. Observe behavior in natural settings for
            authentic insights.
          </Typography>
          <Typography className="surveyContent-text">
            4. In-home Usage Tests (IHUTs): Test products in real-life settings.
            IHUTs offer hands-on feedback on usability and user experience.
          </Typography>
          <Typography className="surveyContent-text">
            5. Diary Journal Studies: Capture real-time experiences with diary
            journals. Track evolving attitudes and behaviors over time.
          </Typography>
        </Grid>
      ),
    },
    {
      title1: "Charting and Visualization:",
      title2: "Transforming Data into Impactful Narratives",
      color: "secondary",
      number: "1",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            1. Interactive Visualizations: Transform complex data into
            interactive visuals for insightful exploration.
          </Typography>
          <Typography className="surveyContent-text">
            2. Meaningful Storytelling: Unearth narratives within data, crafting
            compelling stories for data-driven decisions.
          </Typography>
          <Typography className="surveyContent-text">
            3. Real-time Dashboards: Agile decision-making thrives on real-time
            insights. Our dashboards offer dynamic, timely snapshots of key
            metrics.
          </Typography>
        </Grid>
      ),
    },
    {
      title1: "Survey Designing & Survey Programming",
      title2: "",
      color: "success",
      number: "2",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            Our survey design uses platforms like Confirmit and Decipher to
            create engaging surveys. Expertly structured surveys yield
            actionable insights. Survey programming ensures seamless data
            collection across platforms and devices.
          </Typography>
        </Grid>
      ),
    },
    {
      title1: "Data Processing:",
      title2: "Meticulous Refinement",
      color: "error",
      number: "2",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            Our skilled team transforms raw data into analysis-ready formats.
            Utilizing SPSS, SAS, and Python, we refine data, conduct advanced
            statistical analysis, and formulate actionable insights.
          </Typography>
        </Grid>
      ),
    },
    {
      title1: "At Scrutiny Global",
      title2: "",
      color: "info",
      number: "2",
      content: (
        <Grid>
          <Typography className="surveyContent-text">
            Our services aren't just offerings - they're pathways to knowledge,
            empowerment, and actionable insights. Join us on this journey of
            exploration, understanding, and growth.
          </Typography>
        </Grid>
      ),
    },
  ];

  const accordionArray = [
    {
      title:
        "1. What experience does your company have with providing online samples for market research?",
      content: (
        <Grid>
          <Typography>
            Our panel team is dedicated to working for our clients, providing
            them with samples for various geographical locations for B2C, B2B
            and Healthcare. We have supported many clients as a sample vendor
            where we have provided them with the best quality and reasonable
            price as per unique specifications.
          </Typography>
          <Typography>
            We combine our extensive experience in the field of online market
            research with advanced technologies to conduct online field surveys
            for a large number of market research bureaus and agencies.
          </Typography>
          <Typography>
            We will continue to invest in evolving and further developing our
            online panels. We differ from other panels because we would rather
            invest in having large panels in fewer countries than in having many
            tiny panels in several countries.
          </Typography>
        </Grid>
      ),
    },
    {
      title:
        "2. If you use a router: Please describe the allocation process within your router. How do you decide which surveys might be considered for a respondent? On what priority basis are respondents allocated to surveys?",
      content: (
        <Grid>
          <Typography>
            Every respondent gets a direct email invitation for a study. If the
            respondent does not qualify for the intended survey (screened-out,
            quota full), the platform will attempt to match the respondent to
            another open study by matching the stored profile of the respondent.
            If there is a match, there are no qualifying questions asked. If
            there is a partial match, the panelist will be asked the remaining
            qualifying questions. The respondent can opt-out at any time during
            this process. Survey allocation is randomized although the match
            rate between respondent and open studies is considered.
          </Typography>
        </Grid>
      ),
    },
    {
      title:
        "3. What steps do you take to achieve a representative sample of the target population?",
      content: (
        <Grid>
          <Typography>
            Our initial sample selection is inclusive, based on profiling
            specifications as confirmed by the client. We then exclude
            respondents based on frequency of participation, total number of
            surveys completed in a time period, etc.
          </Typography>
          <Typography>
            The controlling factor is the actual panel manager, who both selects
            and excludes potential respondents based on client requirements and
            his or her professional judgment on what is required to meet the
            client's needs.
          </Typography>
        </Grid>
      ),
    },
    {
      title:
        "4. Please describe the incentives that respondents are offered for taking part in your surveys. How does this differ by sample source, by interview length, by respondent characteristics?",
      content: (
        <Grid>
          <Typography>
            It is important for a respondent to be duly incentivized for taking
            out time to share his/her opinion. We incentivize each respondent
            who participates in our survey and completes it. The number of
            points awarded is driven by the length of interview (LOI). On
            reaching a redemption level set by us, panelists can redeem their
            rewards in cash sent to their bank accounts(e.g. via PayPal)
          </Typography>
          <Typography>
            The number of rewards points awarded depends on the type and
            complexity of the survey. The exact number of reward points may vary
            depending on the survey and is clearly stated at the beginning of
            each survey.
          </Typography>
        </Grid>
      ),
    },
    {
      title:
        "5. Do you measure respondent satisfaction? Is this information made available to clients?",
      content: (
        <Grid>
          <Typography>
            Yes, we do. Respondents are asked a few questions on their survey
            participation experience in terms of survey length, logic, language
            and are also able to give feedback in an open text box. We then
            compile all this information on our system and analyze it in
            aggregate as well as individual cases.
          </Typography>
        </Grid>
      ),
    },
    {
      title:
        "6. Do you maintain individual level data such as recent participation history, date of entry, source, etc., on your survey respondents? Are you able to supply your client with a project analysis of such individual level data?",
      content: (
        <Grid>
          <Typography>
            We save detailed panelist participation data which includes:
            panelist join date, last participation date, transaction history on
            all surveys, redemptions, reward points transactions, etc.
          </Typography>
          <Typography>
            We have the capability of bringing this information in an individual
            level to our client, if required. The information is deleted once
            the panelist terminates his or her account.
          </Typography>
        </Grid>
      ),
    },
  ];

  return (
    <Grid container id="services" className="about-grid ">
      <Grid item>
        <CenteredTextSection
          image={aboutImage}
          title={"SERVICES"}
          subtitle={
            "Our Comprehensive Services: Unlocking Insights with Precision"
          }
        />
      </Grid>
      <Grid container spacing={4}>
        {cardArray.map((item, index) => (
          <Grid item md={4} key={index}>
            <SurveyCard
              title1={item.title1}
              title2={item.title2}
              content={item.content}
              color={item.color}
              number={item.number}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item container className="contact-us-grid">
        <Grid item md={12}>
          <Typography className="contact-us" gutterBottom>
            F.A.Q
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography className="contact-us" gutterBottom>
            Frequently Asked Questions
          </Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item xs={12}>
          <MuiAccordion content={accordionArray} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
