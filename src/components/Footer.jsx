import React from 'react'
import "../styles/Footer.css"
import footerLogo from "../assets/logo-original.png"
export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-col-1">
                    <div className="footer-logo">
                        <img src={footerLogo} />
                    </div>
                    <div className="logo-discription">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Minima harum dolore id <br />eveniet animi consequuntur molestiae <br /> labore rerum.
                    </div>
                    <div className="footer-icons">
                        <div className="facebook-icon">
                            <i class="bi bi-facebook"></i>
                        </div>
                        <div className="instagram-icon">
                            <i class="bi bi-instagram"></i>
                        </div>
                        <div className="twitter-icon">
                            <i class="bi bi-twitter"></i>
                        </div>
                        <div className="linkedin-icon">
                            <i class="bi bi-linkedin"></i>
                        </div>
                    </div>
                    <div className="footer-text">
                        <p>Copy right 2024 .Apart</p>
                    </div>
                </div>

                <div className="footer-col-2">
                    <p>Take a tour</p>
                    <div className="links-in-footer-col-2">
                        <div className="link-set-2"><a href="#">Home</a></div>
                        <div className="link-set-2"><a href="#">Prices</a></div>
                        <div className="link-set-2"><a href="#">Models</a></div>
                        <div className="link-set-2"><a href="#">About</a></div>
                        <div className="link-set-2"><a href="#">Contact</a></div>
                    </div>
                </div>

                <div className="footer-col-3">
                    <p>Our Company</p>
                    <div className="links-in-footer-col-3">
                         <div className="link-set-3"><a href="#">Support</a></div>
                        <div className="link-set-3"><a href="#">Agent</a></div>
                        <div className="link-set-3"><a href="#">Blog</a></div>
                        <div className="link-set-3"><a href="#">Features</a></div>
                        <div className="link-set-3"><a href="#">Partners</a></div>
                    </div>
                </div>

                <div className="footer-col-4">
                    <p>Subscribe</p>
                    <div class="form-floating mb-3" className="input-text">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    </div>
                    <div className="subcribe-button">
                    <button type="button" class="btn btn-primary">Subcribe Now</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
