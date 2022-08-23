import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import pin from "../../assets/images/pin.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.png";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 140,
    paddingTop: 40,
    background: "#FCFCFC",
    // background: "#F0F0F0",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  icon_block: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0px",
    "& img": {
      marginRight: 20,
    },
  },

  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon_block_wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  content: {
    fontSize: "1rem !important",
  },
  footer_bottom: {
    display: "flex",
    borderTop: "1px solid #EEE",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: 130,

      flexDirection: "column-reverse",
      padding: "35px 10px",
    },
  },
  menu_item: {
    color: "#666 !important",
    padding: "0px 20px !important",
    textTransform: "capitalize !important  ",
    // display: "block !important",

    "&:hover": {
      color: "#00AA61 !important",
    },
  },
  bottom_menu: {
    flex: 1,
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
  },
  copyright: {
    fontSize: "0.9rem !important",
    color: "#666 !important",
    [theme.breakpoints.down("sm")]: {
      // textAlign: 'left !important'
    },
  },
}));
function Footer({ language }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" id="contact">
        <Grid container spacing={3}>
          <Grid item md={5}>
            <img src={logo} alt="" style={{ marginBottom: 30 }} />
            <Typography variant="body2" className={classes.content}>
              দেশী আপনাকে ডিজিটাল ফাইন্যান্স ইকোসিস্টেমে সংযুক্ত করবে। সকল ফাইন্যান্স আপনার মোবাইল অ্যাপে। দেশী  আপনার অর্থনৈতিক জীবনকে সমৃদ্ধশালী করবে। ইহা সুবিন্যস্ত অভিজ্ঞতার মাধ্যমে ভোক্তাদের অর্থপ্রদান, ঋণদান, ব্যাংকিং, ব্যক্তিগত/ব্যবসায়িক অর্থায়নে সহায়তা করে। আজই আপনার দেশি অ্যাকাউন্ট তৈরি করুন।
              <br />
              <br />
              আপনার দেশীর যে অ্যাকাউন্ট-ই থাকুক না কেন, আপনি কিছু চমকপ্রদ জিনিস করতে পারেন - আপনার ব্যাঙ্ক অ্যাকাউন্ট লিঙ্ক করুন – টাকা পেতে এবং টাকা পেমেন্ট করতে দেশি পেমেন্ট করুন। রিয়েল-টাইম নটিফিকেশনের মাধ্যমে তাৎক্ষনিক আপডেট পেয়ে যাবেন। স্বয়ংক্রিয়ভাবে ক্যাশব্যাক পাওয়ার মাধ্যমে মুদি, ফ্যাশন, ভ্রমণ এবং আরও অনেক কিছুতে দেশী দিয়ে পেমেন্টের মাধ্যমে অর্থ সাশ্রয় করুন।
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h6">Contact us</Typography>
            <div className={classes.icon_block}>
              <img src={phone} alt="" />
              <Typography variant="body2">
                +880 9617343434
              </Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={email} alt="" />
              <Typography variant="body2">support@deshipay.com</Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={pin} alt="" />
              <Typography variant="body2">
                5th Floor, Taneem Square <br />
                158/E, Kemal Ataturk Avenue, <br />
                Banani, Dhaka 1213, Bangladesh
              </Typography>
            </div>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">Get Social</Typography>
            <div className={classes.icon_block_wrapper}>
              <a
                className={classes.icon_block}
                href="https://www.facebook.com/PayWithDeshi"
                target="_blank"
              >
                <img src={facebook} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Facebook
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://twitter.com/PaywithDeshi"
                target="_blank"
              >
                <img src={twitter} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Twitter
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.linkedin.com/company/paywithdeshi"
                target="_blank"
              >
                <img src={linkedin} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Linkedin{" "}
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.instagram.com/paywithdeshi"
                target="_blank"
              >
                <img src={instagram} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Instagram
                </Typography>
              </a>
              {/* <div className={classes.icon_block}>
                <img src={youtube} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Youtube
                </Typography>
              </div> */}
            </div>
          </Grid>
        </Grid>
        <div
          className={classes.footer_bottom}
        // justifyContent="center"
        // alignContent="center"
        >
          <div>
            <Typography variant="body1" className={classes.copyright}>
              &copy; Copyright 2022. All Rights Reserved by Deshi a concern of
              <strong> Green & Red Technologies Ltd.</strong>
            </Typography>
          </div>
          <div className={classes.bottom_menu}>
            <Button variant="text" className={classes.menu_item}>
              <Link to="/terms-condition">
                <Typography variant="subtitle1">Terms & Condition</Typography>
              </Link>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Link to="/faq">
                <Typography variant="subtitle1">FAQ</Typography>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
