import Banner from "../../Banner/Banner";
import FeaturedItems from "../../FeaturedItems/FeaturedItems";
import Gallery from "../../Gallery/Gallery";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <FeaturedItems></FeaturedItems>
    </div>
  );
};

export default Home;
