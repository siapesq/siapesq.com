import React from "react";
import insta from "../../imgs/insta.png";
import zap from "../../imgs/zap.png";
import email from "../../imgs/email.png";
import logo from "../../imgs/logo.svg"
import '../../style/phytobloom/footer.css';


export default function SectionFooter(){

    
    return(
        <>
       <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <a href="https://www.instagram.com/siapesq" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="" /> @siapesq
            </a>
            <a href="https://api.whatsapp.com/send?phone=5553999503671" target="_blank" rel="noreferrer noopener">
              <img src={zap} alt="" /> (53) 99950-3671
            </a>
            <a href="mailto:siapesq@gmail.com">
              <img src={email} alt="" /> siapesq@gmail.com
            </a>
          </div>

          <div className="footer-bottom">
            <img id="logo" src={logo} alt="SIAPESQ Logo" className="logo" />
          </div>
          
          <div id="copyphytoblom">
            <p>Copyright © 2024 SIAPESQ | Powered by SIAPESQ</p>
          </div>
        </div>
      </footer>
        </>
      )
    }