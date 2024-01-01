const LockScreen = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1080px] overflow-hidden text-left text-14xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <img
        className="absolute top-[0px] left-[697px] w-[1223px] h-[1074px] overflow-hidden object-cover"
        alt=""
        src="/graphicslockscreen@2x.png"
      />
      <div className="absolute top-[329px] left-[153px] flex flex-col items-start justify-start">
        <div className="shrink-0 flex flex-col items-center justify-center gap-[32px]">
          <div className="shrink-0 flex flex-col items-center justify-center gap-[24px]">
            <div className="shrink-0 flex flex-col items-center justify-center gap-[8px]">
              <img
                className="relative rounded-31xl w-[100px] h-[100px] object-cover"
                alt=""
                src="/beared-guy02min-1@2x.png"
              />
              <div className="shrink-0 flex flex-col items-center justify-center gap-[8px]">
                <div className="relative leading-[130%] font-medium">
                  Hello Jamie!
                </div>
                <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
                  Enter your password to acess the admin.
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] text-base text-a92a6-text-color-2">
              <div className="relative leading-[175%] inline-block w-[111px]">
                Password
              </div>
              <div className="w-[391px] shrink-0 flex flex-row items-start justify-start">
                <div className="rounded bg-ffffff-bg-1 box-border w-[391px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
              </div>
            </div>
          </div>
          <div className="rounded bg-a57e8-primary shadow-[0px_2px_4px_rgba(58,_87,_232,_0.3)] shrink-0 flex flex-row items-center justify-center py-2 px-6 text-center text-base">
            <div className="relative leading-[175%] inline-block w-[140px] shrink-0">
              Login
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-13px] left-[187px] flex flex-col items-start justify-start p-2.5">
        <img
          className="relative w-[304px] h-[274px] object-cover"
          alt=""
          src="/empirlogo2@2x.png"
        />
      </div>
      <div className="absolute top-[1029px] left-[177px] w-[1567px] h-[51px] text-base text-a92a6-text-color-2">
        <div className="absolute top-[0px] left-[0px] bg-styles-visitor-customer w-[1567px] flex flex-row items-center justify-center py-4 px-6 box-border gap-[1150px]">
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

export default LockScreen;
