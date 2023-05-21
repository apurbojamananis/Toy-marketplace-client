import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable react/prop-types */
const GalleryCard = ({ gallery }) => {
  const { name, image, price, subcategory } = gallery;
  const aosContainerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
      <div className="card bg-base-100 shadow-xl" data-aos="fade-up-right">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl min-h-[320px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <h3>Category: {subcategory}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
