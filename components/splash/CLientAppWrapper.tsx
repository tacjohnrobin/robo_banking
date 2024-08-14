"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/splash/SplashScreen";

const ClientAppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <SplashScreen /> : children}</>;
};

export default ClientAppWrapper;
