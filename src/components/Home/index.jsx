import CardInfo from "./Card-Info";
import Search from "./Search";

const Home = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <CardInfo title="Norris" />
      <Search title="Norris" />
    </>
  );
};

export default Home;