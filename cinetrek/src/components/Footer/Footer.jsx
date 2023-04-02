import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">Cinetrek</div>
      <div className="socials">
        <a href="https://twitter.com/AbhayaShankar2">
          <TwitterIcon
            className="icon"
            color="disabled"
            sx={{ color: "#ffffff99 ", "&:hover": { color: "#1d9bf0" } }}
          />
        </a>
        <a href="https://github.com/AbhayaShankar">
          <GitHubIcon
            className="icon"
            color="disabled"
            sx={{ color: "#ffffff99 ", "&:hover": { color: "#000000" } }}
          />
        </a>
        <a href="https://www.linkedin.com/in/abhayashankar/">
          <LinkedInIcon
            className="icon"
            color="disabled"
            sx={{ color: "#ffffff99 ", "&:hover": { color: "#0a66c2" } }}
          />
        </a>
        <a href="https://www.instagram.com/abhaya_shankar05/">
          <InstagramIcon
            className="icon"
            color="disabled"
            sx={{ color: "#ffffff99 ", "&:hover": { color: "#bb2c6f" } }}
          />
        </a>
      </div>
      <div className="footer__author">Abhaya Shankar</div>
    </div>
  );
}

export default Footer;
