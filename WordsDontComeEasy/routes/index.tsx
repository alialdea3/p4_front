import Start from "../islands/StartComp.tsx";

export type Tpokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

const Home = () => {
  return <Start />;
};

export default Home;
