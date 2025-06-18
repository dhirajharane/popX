import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(path);
    }, 300); 
  };

  return (
    <div
      className={`flex flex-col sm:justify-end justify-end-safe mb-6 sm:mb-0  min-h-screen pb-4 transition-opacity duration-300 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col py-4 px-4 gap-1 ">
        <h1 className="font-medium text-[28px] leading-[17px] font-[Rubik] text-left w-[231px] h-[33px] text-[#1D2226]">
          Welcome to PopX
        </h1>
        <p
          className="text-left font-normal text-[18px] leading-[26px] text-[#1D2226] w-[232px] h-[48px] opacity-60 mb-8"
          style={{ fontFamily: "Rubik" }}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
          <button 
          onClick={() => handleNavigation("/signup")}
          className="bg-violet-600 text-white text-center mb-2 w-[335px] h-[46px] font-medium rounded-lg">
            Create Account
          </button>
        
        
          <button
          onClick={() => handleNavigation("/login")}
           className="bg-violet-300 text-black text-center  w-[335px] h-[46px] font-medium rounded-lg">
            Already Registered? Login
          </button>
        
      </div>
    </div>
  );
};
export default LandingScreen;
