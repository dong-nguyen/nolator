import type { NextPage } from "next";
import MainLayout from "layouts/MainLayout";
import useUser from "lib/useUser";

const Home: NextPage = () => {
  const { user } = useUser({
    redirectTo: "/login",
  });

  return (
    <MainLayout>
      <h1>Your Profile</h1>
      <h2>Your phone number: {user?.phone} </h2>
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
