const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white h-[68px] shadow-sm flex items-center px-4">
        <h2 className="w-[146px] h-[22px] text-left text-[18px] leading-[21px] font-normal text-[#1D2226] capitalize">
          Account Setting
        </h2>
      </div>

      <div className="bg-[#F7F8F9] flex flex-col gap-6  py-4 flex-1">
        <div className="flex flex-row gap-4 px-4">
          <div className="relative ">
            <img
              src="profilephoto.png"
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full mt-4"
            />
            <img
              src="camera.svg"
              alt="camera"
              className=" absolute bottom-0 right-0 w-[21px] h-[23px]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="w-[73px] h-[18px] text-left text-[15px] leading-[19px] font-medium text-[#1D2226] capitalize">
              Marry Doe
            </h2>
            <p className="w-[118px] h-[17px] text-left text-[14px] leading-[19px] font-normal text-[#1D2226] capitalize">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="w-[337px] h-[63px] text-left text-[12.5px] leading-[22px] font-normal text-[#1D2226] capitalize px-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="w-full border-t border-dashed border-[#CBCBCB]"></div>
        
      </div>
      
      <div className="w-full border-b border-dashed border-[#CBCBCB]"></div>
    </div>
  );
};
export default Profile;
