import useTitle from "../../../Hooks/useTitle";
import Banner from "../../Banner/Banner";
import FeaturedItems from "../../FeaturedItems/FeaturedItems";
import Gallery from "../../Gallery/Gallery";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Testimonial from "../../Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <FeaturedItems></FeaturedItems>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
