import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/auth";

const SignupScreen = () => {
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
      className={`flex flex-col justify-between min-h-screen py-4 px-4 transition-opacity duration-300 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-medium w-[188px] h-[69px] text-[28px] mb-8">
          Create your PopX account
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter full name"
            />
          </div>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter Phone number"
            />
          </div>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Email Address<span className="text-red-500">*</span>
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
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter password"
            />
          </div>
          <div className="relative w-[335px]">
            <label className="absolute -top-2 left-2 bg-[#F9F9F9] px-1 text-[13px] text-[#6C25FF]">
              Company name
            </label>
            <input
              type="text"
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 focus:outline-none focus:border-[#6C25FF]"
              placeholder="Enter company name"
            />
          </div>
          <label className="w-[126px] h-[15px] text-left text-[13px] leading-[17px] font-normal">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6 -mt-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                required
                defaultChecked
                name="agency"
                value="yes"
                className="accent-[#6C25FF] w-[12px] h-[12px]"
              />
              <span className="text-[14px] font-normal text-[#1D2226]">
                Yes
              </span>
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                className="accent-[#6C25FF] w-[12px] h-[12px]"
              />
              <span className="text-[14px] font-normal text-[#1D2226]">No</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-violet-600 text-white text-center w-[335px] h-[46px] font-medium rounded-lg sm:mt-52 mt-28"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupScreen;
