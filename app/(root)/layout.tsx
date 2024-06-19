import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";

interface RootLayoutProps {
  children: React.ReactNode; // Define the type of the `children` prop
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const loggedIn = { firstname: "Robo", lastname: "Okumu" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="Menu logo" // Use descriptive alt text for accessibility
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
