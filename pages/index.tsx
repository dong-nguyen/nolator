import type { NextPage } from "next";
import MainLayout from "layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1>Authentication example</h1>
      <h2>iron-session + Twilio</h2>
      <style jsx>{`
        h1,
        h2 {
          text-align: center;
        }

        h1 {
          margin-top: 50px;
        }

        h2 {
          color: gray;
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;
