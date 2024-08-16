import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonialItem = [
    {
        image: "https://res.cloudinary.com/dcyojno0c/image/upload/v1718440130/assets/img_photo3_l5ml36.png",
        text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod”`,
        name: "John Dee 32, Bromo",
    },
    {
        image: "https://res.cloudinary.com/dcyojno0c/image/upload/v1718440133/assets/img_photo_olebvg.png",
        text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod”`,
        name: "John Dee 32, Bromo",
    },
    {
        image: "https://res.cloudinary.com/dcyojno0c/image/upload/v1718440128/assets/img_photo2_cuztwb.png",
        text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod”`,
        name: "John Dee 32, Bromo",
    },
];

const TestimonialCarousel: React.FC = () => {
    const options = {
        loop: true,
        center: true,
        margin: 60,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            600: {
                items: 1,
                stagePadding: 0,
            },
            1000: {
                items: 1,
                stagePadding: 464,
            },
        },
    };

    return (
        <section id="testimonial">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h2 className="heading-bold-24">Testimonial</h2>
                <p className="body-light-14">Berbagai review positif dari para pelanggan kami</p>
            </div>
            <OwlCarousel className="carousel-wrapper owl-theme" {...options}>
                {testimonialItem.map((testimonial, index) => (
                    <div className="testimonial-card item" key={index}>
                        <div className="testimonial-image">
                            <img src={testimonial.image} alt="Testimonial" />
                        </div>
                        <div className="testimonial-details">
                            <div className="testimonial-rate">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440118/assets/Rate-5_dqexuw.png" alt="Rating" />
                            </div>
                            <div className="testimonial-text">{testimonial.text}</div>
                            <div className="testimonial-name">{testimonial.name}</div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
};

export default TestimonialCarousel;
