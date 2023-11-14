import CardCarousel from "../components/CardCarousel";
import Carousel from "../components/Carousel";
import Grid from "../components/Grid";

const Home = () => {
  return (
    <>
      <Carousel />
      <Grid />
      <div className="py-16 px-8 max-w-5xl m-auto flex flex-col ">
        <h3 className="text-2xl font-semibold">Browse By Category</h3>

        <div className="py-16">
          <CardCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
