import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="container d-flex footer-wrapper">
                    <div className="address d-flex flex-column gap-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="d-flex flex-column gap-3 navigation">
                        <a className="body-regular-14">Our services</a>
                        <a className="body-regular-14">Why Us</a>
                        <a className="body-regular-14">Testimonial</a>
                        <a className="body-regular-14">FAQ</a>
                    </div>
                    <div className="social-media d-flex flex-column gap-3">
                        <p>Connect with us</p>
                        <div className="social-media-wrapper d-flex gap-3">
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440123/assets/icon_facebook_vq6elg.png" alt="" />
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440125/assets/icon_instagram_qlltem.png" alt="" />
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440127/assets/icon_twitter_xtcv5y.png" alt="" />
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440127/assets/icon_mail_jgma2z.png" alt="" />
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440126/assets/icon_twitch_wmravl.png" alt="" />
                        </div>
                    </div>
                    <div className="copyright d-flex flex-column gap-3">
                        <p>Copyright Binar 2022</p>
                        <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440118/assets/logo_zdzs2w.png" alt="logo binarcarrental" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
