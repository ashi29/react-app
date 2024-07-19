import {
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import logo from "../../logo_sg.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import "./Style.css";
import { Link } from "react-scroll";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    recaptcha: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const usefulLinks = [
    { text: "Home", link: "home" },
    { text: "About Us", link: "about" },
    { text: "Services", link: "services" },
    { text: "Terms of Service", link: "" },
    { text: "Privacy Policy", link: "" },
  ];

  return (
    <Grid container id="contact" className="about-grid">
      <Grid item className="contact-us-grid">
        <Typography className="contact-us">Contact us</Typography>
      </Grid>
      <Grid
        item
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        className="contactus-form-grid"
      >
        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            <Grid item className="contactUs1-smallbox">
              <EmailOutlinedIcon color="primary" fontSize="large" />
              <Typography gutterBottom className="smallBox-heading">
                Email us
              </Typography>
              <Typography gutterBottom className="smallBox-text">
                info@scrutinyglobal.com
              </Typography>
              <Typography gutterBottom className="smallBox-text">
                business@scrutinyglobal.com
              </Typography>
            </Grid>
            <Grid item className="contactUs1-smallbox">
              <AccessTimeOutlinedIcon color="primary" fontSize="large" />
              <Typography gutterBottom className="smallBox-heading">
                Open Hours
              </Typography>
              <Typography gutterBottom className="smallBox-text">
                Sunday-Saturday
              </Typography>
              <Typography gutterBottom className="smallBox-text">
                9:00AM -05:00PM
              </Typography>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={8}
          display="flex"
          justifyContent="space-around"
          className="contactUs1-form"
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item container xs={12} md={11} spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={11}>
                <TextField
                  fullWidth
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={11}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12} md={11}>
                <FormControlLabel
                  className="captcha-box"
                  control={
                    <Checkbox
                      name="recaptcha"
                      checked={formData.recaptcha}
                      onChange={handleChange}
                    />
                  }
                  label="I am not a robot"
                /> 
              </Grid>*/}
              <Grid item xs={12} md={11} display="flex" justifyContent="center">
                <MuiContainedButton type="submit" buttonText="Send Message" />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={12} className="contactUs2">
        <Grid item xs={12} md={5}>
          <Grid item container alignItems="center">
            <img src={logo} alt="logo" className="companyLogo" />
            <Typography className="contactUs2-heading" gutterBottom>
              Scrutiny Global
            </Typography>
          </Grid>

          <Typography className="contactUs2-text" gutterBottom>
            Navigate marketplace with us Scrutiny Global
          </Typography>
          <Grid item container spacing={1}>
            <Grid item>
              <TwitterIcon className="icon" />
            </Grid>
            <Grid item>
              <FacebookOutlinedIcon className="icon" />
            </Grid>
            <Grid item>
              <InstagramIcon className="icon" />
            </Grid>
            <Grid item>
              <LinkedInIcon className="icon" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <Typography className="contactUs2-heading">USEFUL LINKS</Typography>
          <List>
            {usefulLinks.map((item) => (
              <ListItem key={item.text}>
                <ListItemIcon>
                  <ArrowForwardIosIcon fontSize="small" color="disabled" />
                </ListItemIcon>
                {item.link ? (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={item.link}
                    offset={-25}
                  >
                    <ListItemText
                      className="contactUs2-text"
                      primary={item.text}
                    />
                  </Link>
                ) : (
                  <ListItemText
                    className="contactUs2-text"
                    primary={item.text}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={3} alignItems="center" justifyContent="center">
          <Typography className="contactUs2-heading" gutterBottom>
            Contact US
          </Typography>
          <Typography className="contactUs2-text">
            <b>Email</b>
          </Typography>
          <Typography className="contactUs2-text">
            info@scrutinyglobal.com
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} textAlign="center" className="footerSection">
        <Typography variant="body1" component="p" className="footerText1">
          © Copyright @ 2022 <b>SCRUTINY GLOBAL</b>. All Rights Reserved
        </Typography>
        <Typography className="footerText2">PRASHANT SHARMA</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
