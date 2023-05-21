import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../index.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const aosContainerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease",
      once: false,
      mirror: true,
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const refreshAOS = () => {
    if (aosContainerRef.current) {
      AOS.refresh();
    }
  };
  return (
    <div ref={aosContainerRef}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("./banner1.jpg")`,
              backgroundSize: "cover",
            }}
            className="min-h-screen"
          >
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] min-h-screen">
              <div
                className="container mx-auto  text-white "
                data-aos="fade-up-left"
              >
                <div className="w--full px-3 md:w-6/12 md:px-5">
                  <div className="flex flex-col pt-32 md:pt-56 ">
                    <h1 className="text-7xl font-bold leading-tight">
                      Ignite Curiosity and Learning with Science Kits
                    </h1>
                    <p className="mt-4 leading-normal">
                      Spark a passion for scientific exploration with our
                      captivating range of science kits. From chemistry sets to
                      astronomy tools, our science kits are designed to engage
                      young minds and foster a love for discovery. Let your
                      child conduct fascinating experiments, observe the wonders
                      of the natural world, and unravel the mysteries of
                      science. Explore our collection today and unlock a world
                      of scientific knowledge and hands-on learning.
                    </p>
                    <div className="mt-5">
                      <button className="btn btn-success text-neutral">
                        Explore Science Kits
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("./banner2.jpg")`,
              backgroundSize: "cover",
            }}
            className="min-h-screen"
          >
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] min-h-screen">
              <div
                className="container mx-auto  text-white "
                data-aos="fade-up-left"
              >
                <div className="w--full px-3 md:w-6/12 md:px-5">
                  <div className="flex flex-col pt-32 md:pt-56  ">
                    <h1 className="text-7xl font-bold leading-tight">
                      Unleash the Power of Math with Learning Toys
                    </h1>
                    <p className="mt-4 leading-normal">
                      Make math exciting and enjoyable with our diverse
                      selection of learning toys. Whether it&apos;s number
                      puzzles, counting games, or problem-solving activities,
                      our math learning toys are designed to enhance numerical
                      skills and critical thinking. Through interactive play,
                      your child can develop a strong foundation in math while
                      having fun. Discover our range of math learning toys and
                      empower your child to excel in this fundamental subject.
                    </p>
                    <div className="mt-5">
                      <button className="btn btn-success text-neutral">
                        Discover Math Learning Toys
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("./banner3.jpg")`,
              backgroundSize: "cover",
            }}
            className="min-h-screen"
          >
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] min-h-screen">
              <div
                className="container mx-auto  text-white "
                data-aos="fade-up-left"
              >
                <div className="w--full px-3 md:w-6/12 md:px-5">
                  <div className="flex flex-col pt-32 md:pt-56 ">
                    <h1 className="text-7xl font-bold leading-tight">
                      Build and Innovate with Engineering Kits
                    </h1>
                    <p className="mt-4 leading-normal">
                      Nurture your child&apos;s creativity and problem-solving
                      abilities with our impressive array of engineering kits
                      and tools. From building sets to robotic kits, our
                      collection offers hands-on experiences that encourage
                      innovation and critical reasoning. Watch as your child
                      designs, constructs, and brings their ideas to life. Our
                      engineering kits and tools provide a gateway to the
                      exciting world of engineering, igniting a passion for
                      design and technology. Browse our selection and unleash
                      your child&apos;s engineering potential.
                    </p>
                    <div className="mt-5">
                      <button className="btn btn-success text-neutral">
                        Shop Engineering Kits
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
