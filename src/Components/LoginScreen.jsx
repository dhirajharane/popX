import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/auth";

const LoginScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
        authenticateUser(); 
      setFadeOut(true);
      setTimeout(() => {
        navigate("/profile");
      }, 300); 
    } else {
      e.target.reportValidity();
    }
  };
  return (
    <div
      className={`transition-opacity duration-300 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col gap-1 py-4 px-4">
        <h1 className="font-medium w-[188px] h-[69px] text-[28px] mb-5">
          Signin to your PopX account
        </h1>
        <p
          className="text-left font-normal text-[18px] leading-[26px] text-[#1D2226] w-[232px] h-[48px] opacity-60 mb-8"
          style={{ fontFamily: "Rubik" }}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter email address"
            />
          </div>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter password"
            />
          </div>
          <button className="w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px]" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginScreen;
