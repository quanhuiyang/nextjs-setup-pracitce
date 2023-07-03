import Feed from '@components/Feed';

const Home = () => {
  return (
    //.w-full{width: 100%}
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore ＆ Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt Share是一個開源工具，分享AI prompt，創造與發現更多prompt吧！
      </p>
      <Feed />
    </section>
  );
};

export default Home;
