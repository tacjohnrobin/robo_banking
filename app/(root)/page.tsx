import QuickTransfer from "@/components/sidebar/QuickTransfer";
import RightSideBar from "@/components/sidebar/RightSideBar";
import HeaderBox from "@/components/ui/HeaderBox";
import InfoBox from "@/components/ui/InfoBox";
import MoneyFlow from "@/components/ui/MoneyFlow";

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
      <div className="font-manrope home-content">
        <header className="homeheader pt-3">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Gain Insights and Track Your Transactions Over Time"
          />
        </header>
        <div className="">
          <InfoBox />
        </div>
        <div className="">
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={13586.69}
          />
        </div>
        <MoneyFlow />
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
