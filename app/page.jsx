import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        possimus labore soluta est illo voluptate illum. Est cupiditate itaque
        sapiente.
      </p>

      {/* Feed */}

      <Feed />
    </section>
  );
};

export default Home;
