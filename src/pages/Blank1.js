const Blank1 = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="absolute top-[1842px] left-[0px] w-[1920px] h-[51px]">
        <div className="absolute top-[0px] left-[0px] bg-styles-visitor-customer w-[1920px] flex flex-row items-center justify-center py-4 px-6 box-border gap-[1150px]">
          <div className="relative z-[0]">
            <span>
              <span>©</span>
            </span>
            <span>
              <span> 2024 FoS Plattform, Made by</span>
              <span className="text-black">{` `}</span>
              <span className="text-a57e8-primary">Jamie Bech.</span>
            </span>
          </div>
          <div className="my-0 mx-[!important] absolute top-[18px] left-[11px] shrink-0 flex flex-row items-start justify-start gap-[24px] z-[1] text-xs">
            <div className="relative">Privacy Policy</div>
            <div className="relative">Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blank1;
