import { useEffect, useState } from "react";

const MobileFrame = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, 
  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#F7F8F9] flex justify-start">
        <div className="w-full h-[812px]">{children}</div>
      </div>
    );
  }

  // On desktop, show the mobile frame
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] px-4">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden border border-gray-300 shadow-lg flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;