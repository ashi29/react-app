import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import aboutImage from "./../../Images/LandingImages/AboutImages/aboutImage.png";
import cardImage1 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage1.png";
import cardImage2 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage2.png";
import cardImage3 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage3.png";
import CardComponentImage from "../../MuiComponents/MuiCards/CardComponentImage";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import CenteredTextSection from "../../Components/CenteredTextSection/Index";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aboutImage2 from "./../../Images/LandingImages/AboutImages/aboutImage2.png";
import aboutImage3 from "./../../Images/LandingImages/AboutImages/aboutImage3.png";
import aboutImage4 from "./../../Images/LandingImages/AboutImages/aboutImage4.png";
import CheckBoxWithText from "../../MuiComponents/MuiCards/CheckBoxWithText";
import MuiTab from "../../MuiComponents/MuiTab/Index";
import CheckIcon from "@mui/icons-material/Check";
// import FairPricing from "../../Images/LandingImages/AboutImages/CardImage/fairPricing.png";
// import accuracy from "../../Images/LandingImages/AboutImages/CardImage/accuracy.png";
// import commitment from "../../Images/LandingImages/AboutImages/CardImage/commitment.png";
// import comprehensiveSupport from "../../Images/LandingImages/AboutImages/CardImage/comprehensiveSupport.png";
// import expertInsights from "../../Images/LandingImages/AboutImages/CardImage/expertInsights.png";
// import tailoredSolution from "../../Images/LandingImages/AboutImages/CardImage/tailoredSolution.png";
import "./Style.css";
import WhyChooseUsCard from "../../Components/WhyChooseUsCard/Index";

const About = () => {
  const featuresTextArray = [
    "Survey Panel Recruitment",
    "Survey Creation",
    "Data Collection and Management",
    "Survey Analytics and Reporting",
    "Multi-Language & Country Support",
    "Multi-Device Compatibility",
    "Multi-Device Compatibility",
    "Survey Security and Compliance",
    "Survey Integrations & Personalization",
    "Survey Scoring and Grading",
  ];

  const tabs = [
    {
      label: "WHAT WE OFFER",
      content: (
        <Grid container className="tab-content-container">
          <Grid item>
            <Typography gutterBottom className="tab-text">
              At Scrutiny Global, excellence is not just a goal; it's our
              commitment. Through our top-tier services, we provide you with a
              lens into various industries, equipping you with the knowledge
              needed to make informed and impactful decisions.
            </Typography>
          </Grid>
          <Grid item justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">
                Multiple Target Platforms
              </Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              Scrutiny Global seamlessly navigates both Business-to-Business
              (B2B) and Business-to-Consumer (B2C) terrains. Our versatility
              ensures that clients effortlessly tap into their desired
              demographic, whether it's childcare professionals, caregivers,
              skilled tradespeople like plumbers and electricians, or any other
              target group..
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">
                Unlocking the Power of Insights: Join Scrutiny Global
              </Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              Scrutiny Global stands as your catalyst for informed decisions,
              your conduit to dynamic insights, and your navigator through the
              evolving landscape of business challenges. Our commitment to
              professionalism, precision, and rapidity sets us apart. Embrace a
              partnership that transcends data and delves into actionable truths
              – join Scrutiny Global today.
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      label: "TOP SERVICES SECTORS",
      content: (
        <Grid container className="tab-content-container">
          <Grid item>
            <Typography gutterBottom className="tab-text">
              Scrutiny Global offers a wide range of market research services to
              businesses of all sizes, in a variety of industries. Our top
              services include:
            </Typography>
          </Grid>
          <Grid item justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">
                Healthcare/Medical/Dental
              </Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              At the intersection of healthcare, medical, and dental domains, we
              provide a vital service. Our platform acquires pivotal therapeutic
              insights and evidentiary support, enabling you to shape crucial
              medical and clinical business decisions. By harnessing these
              insights, you can not only improve patient well-being outcomes but
              also drive advancements within your respective field.
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">
                Media/Advertising/Marketing
              </Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              At Scrutiny Global, we sculpt decisions in the realms of media,
              advertising, and marketing with insight. We enhance the efficacy
              of your creative endeavors, optimizing your interactions across
              owned, paid, and earned media channels at every juncture. Our
              expertise amplifies the impact of your communication strategies,
              fostering enhanced engagement and conversion rates.
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      label: "OTHER SECTORS...",
      content: (
        <Grid container className="tab-content-container">
          <Grid item justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">Software/Technology</Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              Acknowledging insights shared by various IT Decision Makers
              (ITDMs), we immerse ourselves in the intricacies of the software
              and technology realm. Our deep understanding of industry dynamics
              empowers us to deliver nuanced perspectives, ensuring you're
              equipped to make strategic decisions in a rapidly evolving
              landscape.
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">
                Financial Services/Insurance
              </Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              In a world where customer expectations undergo rapid
              transformation, and the banking sector remains fiercely
              competitive, we step in as your guides. Our expertise offers you
              an unparalleled view into these challenges, drawing from the
              insights of financial experts. With our support, you can navigate
              this terrain with clarity, ensuring your offerings align with
              customer demands.
            </Typography>
          </Grid>
          <Grid item justifyContent="center" alignItems="center">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className="tab-point"
            >
              <CheckIcon fontSize="large" />

              <Typography className="tab-point">Retail</Typography>
            </Stack>
            <Typography gutterBottom className="tab-text">
              Crafting an efficient and impactful retail strategy requires an
              in-depth understanding of consumer behavior. Our approach goes
              beyond the surface. We delve deep into customer insights, enabling
              you to leverage emerging retail channels effectively. Through our
              partnership, you'll be primed to create strategies that resonate
              with customers and capitalize on evolving market trends.
            </Typography>
          </Grid>
        </Grid>
      ),
    },
  ];

  const whyChooseUstextArray = [
    {
      title: "Fair Pricing:",
      description:
        "Our transparent pricing ensures you receive exceptional value without compromising quality.",
      // image: { FairPricing },
    },
    {
      title: "Expert Insights:",
      description:
        "Backed by industry experts, we provide insightful perspectives that drive informed decisions.",
      // image: { expertInsights },
    },
    {
      title: "Tailored Solutions:",
      description:
        "Our services are customized to your needs, offering targeted solutions for optimal results.",
      // image: { tailoredSolution },
    },
    {
      title: "Accuracy:",
      description:
        "We use the latest tools and techniques to ensure that our data is accurate and reliable.",
      // image: { accuracy },
    },
    {
      title: "Comprehensive Support:",
      description:
        "From survey design to data analysis, our end-to-end solutions offer comprehensive support for your research journey.",
      // image: { comprehensiveSupport },
    },
    {
      title: "Commitment:",
      description:
        "We are committed to providing you with the highest quality of service.",
      // image: { commitment },
    },
  ];

  return (
    <Grid container id="about" className="about-grid ">
      <Grid
        item
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className="aboutSection1"
      >
        <Grid item md={6} className="aboutSectionText1">
          <Typography className="about-section-heading1" gutterBottom>
            Something About Us
          </Typography>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Typography className="about-section-scrutinyGlobal" gutterBottom>
                Scrutiny Global:{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="about-section-heading2" gutterBottom>
                Your Partner in Market Research
              </Typography>
            </Grid>
          </Grid>
          <Typography className="about-section1-paragraph">
            Scrutiny Global is a market research firm that provides businesses
            with the insights they need to make informed decisions. We offer a
            wide range of services, including quantitative and qualitative
            research, online surveys, public opinion polling, data collection,
            and media research.
          </Typography>
          <Typography className="about-section1-paragraph">
            Our team of experienced researchers is committed to providing our
            clients with accurate, reliable, and actionable data. We understand
            that the success of your business depends on your ability to make
            sound decisions based on the latest market intelligence. That's why
            we work with you every step of the way to ensure that your research
            project is a success.
          </Typography>

          <MuiContainedButton
            buttonText={"Read More"}
            type={"button"}
            endIcon={<ArrowForwardIcon />}
          />
        </Grid>
        <Grid item md={6}>
          <img src={aboutImage} alt="About" className="aboutImage1" />
        </Grid>
      </Grid>
      <Grid item>
        <CenteredTextSection
          title={
            <>
              WHY{" "}
              <Typography
                component="span"
                className="about-section-scrutinyGlobal2"
              >
                SCRUTINY GLOBAL
              </Typography>
              ?
            </>
          }
          subtitle="We recognize the importance of expediency and thus, operate with swiftness and efficacy to ensure the punctual delivery of your outcomes, as delineated by the following aspects."
          image={aboutImage}
        />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <CardComponentImage
            image={cardImage1}
            title="Diversity in Departments"
            text="Our prowess is multi-faceted. We excel in Quantitative and Qualitative research, conduct Online Surveys, gauge Public Opinion, curate meticulous Data Collections, dissect Media intricacies, and unravel profound Covid-19 Insights. This versatility tailors our platform for clients in pursuit of diverse viewpoints or specific market niches."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardComponentImage
            image={cardImage2}
            title="Global Reach"
            text="Seizing opportunities on a global scale, we empower our clients to connect with respondents spanning the farthest reaches. We specialize in procuring top-tier responses from the most elusive participants – be it IT professionals, HR experts, Finance wizards, Sales mavens, or even esteemed C-Level executives and department heads."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardComponentImage
            image={cardImage3}
            title="Multiple Target Platforms"
            text="Scrutiny Global seamlessly navigates both Business-to-Business (B2B) and Business-to-Consumer (B2C) terrains. Our versatility ensures that clients effortlessly tap into their desired demographic, whether it's childcare professionals, caregivers, skilled tradespeople like plumbers and electricians, or any other target group."
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <CenteredTextSection
          image={aboutImage}
          title={"Our Features"}
          subtitle={
            "We offers the powerful survey features for any research need"
          }
        />
      </Grid>

      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className="aboutSection2"
      >
        <Grid item xs={12} sm={12} md={6} spacing={2}>
          <img src={aboutImage2} alt="features" className="aboutImage2" />
        </Grid>

        <Grid item container spacing={2} xs={12} sm={12} md={6}>
          {featuresTextArray.map((text, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <CheckBoxWithText text={text} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className="aboutSection3"
      >
        <Grid item xs={12} md={6}>
          <Typography className="aboutSection3-heading">
            Quality you can Trust
          </Typography>
          <MuiTab tabs={tabs} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={aboutImage3} alt="features" className="aboutImage2" />
        </Grid>
      </Grid>
      <Grid item className="contact-us-grid">
        <Typography className="contact-us">Why choose us?</Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="flex-and-center ">
          <img src={aboutImage4} alt="features" />
        </Grid>
        <Grid item container xs={12} md={6}>
          {whyChooseUstextArray.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <WhyChooseUsCard
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
