import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/img/s1.webp";
import img2 from "../assets/img/s2.webp";
import img3 from "../assets/img/s3.webp";
import img4 from "../assets/img/s4.webp";
import img5 from "../assets/img/s5.webp";

import featured1 from "../assets/img/sashimi.webp";
import featured2 from "../assets/img/ramen.webp";
function Home() {
  return (
    <div className="home-container">

      {/* MENU PREVIEW */}
      <section className="menu-preview">
  <h2>Popular Dishes</h2>

  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={20}         // space between slides
    slidesPerView={3}         // how many slides are visible
    centeredSlides={true}     // center the slides
    loop={true}               // infinite loop
    autoplay={{
      delay: 2000,            // auto-scroll delay
      disableOnInteraction: false
    }}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{            // responsive settings
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
  >
    {[img1, img2, img3, img4, img5].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="food-card">
          <img src={img} alt={`food-${index}`} className="floating" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* HERO SECTION */}
      <header className="hero">
        <h1>Delicious Food, Delivered Fast</h1>
        <p>Order your favorite meals anytime, anywhere.</p>
        <Link to="/Food">
          <button className="order-btn">Order Now</button>
        </Link>
      </header>

      {/* FEATURED PRODUCTS */}
     <section className="featured-products-split">
  <div className="featured-container">
    <div className="featured-image left">
      <img src={featured1} alt="Featured 1" />
    </div>
    <div className="divider"></div>
    <div className="featured-image right">
      <img src={featured2} alt="Featured 3" />
    </div>
  </div>
</section>


      {/* BUSINESS STORY */}
      <section className="business-story">
        <h2>How We Started</h2>
        <p>
          Our journey began with a passion for bringing fresh, delicious meals
          straight to your door. From a small kitchen to a thriving food delivery
          service, we focus on quality, taste, and speed.
        </p>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p>"The food is always fresh and arrives hot. Highly recommend!"</p>
            <span>- Jane D.</span>
          </div>
          <div className="review-card">
            <p>"Excellent service and delicious meals every time."</p>
            <span>- Mark S.</span>
          </div>
          <div className="review-card">
            <p>"Fast delivery and tasty food. My family loves it!"</p>
            <span>- Angela P.</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
