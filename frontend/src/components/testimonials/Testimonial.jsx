// import React from "react";
// import '../testimonials/test imonial.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link, useNavigate } from "react-router-dom";

// const Testimonials = () => {
//   const navigate = useNavigate();
//   const testimonials = [
//     {
//       text: "Nepal Tech Innovations exceeded our expectations with the website they developed for Om Shree Food . Not only is it visually stunning, but it's also user-friendly and functional. Our customers love the interface, and it has significantly improved our online presence. Thank you, Nepal Tech, for your exceptional work.",
//       user: "User Business Name",
//       rating: "/img/rating.png",
//       image: "/image/b1.jpg"
//     },
//     {
//       text: "Working with NepalTech was a game-changer for my business. They not only built us a powerful custom application but also provided exceptional support throughout. Their dedication and professionalism exceeded our expectations.",
//       user: "User Business Name",
//       rating: "./img/rating.png",
//       image: "/image/b2.jpg"
//     },
//     {
//       text: "NepalTech has been an invaluable partner for our business. From designing captivating graphics to executing effective digital marketing strategies, they've helped us achieve remarkable growth.",
//       user: "User Business Name",
//       rating: "./img/rating.png",
//       image: "/image/b3.jpg"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000, // Transition speed (1 second)
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000 // Autoplay speed (3 seconds)
//   };

//   return (
//     <div className="container">
//       <div className="testimonials">
//         <div className="left_testimonial">
//           <img src="./img/testimonials.png" alt="" />
//         </div>
//         <div className="right_testimonial">
//           <p className="title">Testimonials</p>
//           <h3 className="secondryHeading">
//             We Appreciate Your Feedbacks Very Much
//           </h3>

//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="testimonialsCard">
//                <div className="testimonials_usersDetails">
//                 <img className="testimonial_User" src={testimonial.image} alt="" />
//                <h2>{testimonial.user}</h2>
//                 <Link to={'#'} target="_blank"><p>{testimonial.website}</p></Link>
//                 <img className="rating" src={testimonial.rating} alt="" />
//                </div>
//                 <p>{testimonial.text}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;






import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import '../testimonials/testimonial.css'

const Testimonials = () => {
    const navigate = useNavigate();
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam qui quasi eligendi fuga atque eaque natus minus dignissimos, nemo error, maxime.",
            user: "User Business Name",
            rating: "/img/rating.png",
            image: "/image/b1.jpg"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam qui quasi eligendi fuga atque eaque natus minus dignissimos, nemo error, maxime.",
            user: "User Business Name",
            rating: "./img/rating.png",
            image: "/image/b2.jpg"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam qui quasi eligendi fuga atque eaque natus minus dignissimos, nemo error, maxime.",
            user: "User Business Name",
            rating: "./img/rating.png",
            image: "/image/b3.jpg"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Transition speed (1 second)
        slidesToShow: 3, // Display three cards in one row
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 // Autoplay speed (3 seconds)
    };

    return (
        <div className="container">
            <div className="testimonials">
                <div className="left_testimonial">
                    <img src="./img/testimonials.png" alt="" />
                </div>
                <div className="right_testimonial">
                    <p className="title">Testimonials</p>
                    <h3 className="secondryHeading">
                        We Appreciate Your Feedbacks Very Much
                    </h3>


                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonialsCard">
                                <div className="testimonials_usersDetails">
                                    <img className="testimonial_User" src={testimonial.image} alt="" />
                                    <div>
                                        <h2>{testimonial.user}</h2>
                                        {/* Assuming you want to link to a website, but the website field is missing in the testimonial object */}
                                        <Link to={'#'} target="_blank"><p>{testimonial.website}</p></Link>
                                    </div>
                                    <img className="rating" src={testimonial.rating} alt="" />
                                </div>
                                <p>{testimonial.text}</p>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
