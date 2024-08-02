import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

export const Home = () => {
  const loggedIn = { firstName: "Robo" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="homeheader"> 
          <HeaderBox
            type="greeting"
            title="Welcome "
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={13586.69}
          />
        </header>
      </div>
    </section>
  );
};
