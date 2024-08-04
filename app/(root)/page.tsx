import HeaderBox from "@/components/ui/HeaderBox";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "Johndoe@mail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="homeheader">
          <HeaderBox
            type="greeting"
            title="Welcome "
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={13586.69}
          />
        </header>
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1580.69 }, { currentBalance: 1580.69 }]}
      />
    </section>
  );
};

export default Home;
