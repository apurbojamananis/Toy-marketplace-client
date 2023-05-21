import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./FeaturedItems.css";

function FeaturedItems() {
  return (
    <div>
      <div className="container mx-auto pb-48">
        <hr />
        <div className=" pt-32 ">
          <h2 className="text-4xl text-center pb-16">Featured Items</h2>
        </div>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={3}
        >
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/81xOuozArzL._AC_SL1500_.jpg"
              alt="Slide 1"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://childhood101.com/wp-content/uploads/2017/11/Bristle-Bricks.jpg"
              alt="Slide 2"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/71n8JQ1PYSL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
              alt="Slide 3"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/81q71qYuRNL._AC_SL1500_.jpg"
              alt="Slide 4"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/618zT7fB7aL._SX522_.jpg"
              alt="Slide 5"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/719tmroGknL._AC_SL1500_.jpg"
              alt="Slide 6"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/71IsrlQSv-L._AC_SL1500_.jpg"
              alt="Slide 7"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/51Fs-UCvShL._AC_SL1000_.jpg"
              alt="Slide 8"
              className="sliderImg"
            />
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://m.media-amazon.com/images/I/81oTuyTGl5L._AC_SL1500_.jpg"
              alt="Slide 9"
              className="sliderImg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedItems;
