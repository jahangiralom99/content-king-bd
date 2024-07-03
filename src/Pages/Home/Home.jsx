import Banner from "./Banner";
import Communication from "./Communication";
import ContentCard from "./ContentCard";
import Testimonial from "./Testimonial";
import VideoCourse from "./VideoCourse";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContentCard />
      <VideoCourse />
      <Communication />
      <Testimonial/>
    </div>
  );
};

export default Home;
