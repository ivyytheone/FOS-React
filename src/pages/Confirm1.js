const Confirm1 = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1080px] overflow-hidden text-left text-21xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[366px] left-[242px] flex flex-col items-start justify-start">
        <div className="shrink-0 flex flex-col items-center justify-center gap-[40px]">
          <div className="shrink-0 flex flex-col items-center justify-center gap-[16px]">
            <div className="shrink-0 flex flex-col items-center justify-center gap-[16px]">
              <div className="relative font-medium">Reset Password</div>
              <div className="relative text-base font-small-text-13px-poppins text-a92a6-text-color-2 text-center inline-block w-[466px]">
                Enter your email address and we’ll send you an email with
                instructions to reset your password
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] text-base text-a92a6-text-color-2">
              <div className="relative leading-[175%]">Email</div>
              <div className="shrink-0 flex flex-col items-start justify-start">
                <div className="rounded bg-ffffff-bg-1 box-border w-[476px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
              </div>
            </div>
          </div>
          <div className="rounded bg-a57e8-primary shadow-[0px_8px_16px_rgba(59,_138,_255,_0.25)] shrink-0 flex flex-row items-center justify-center py-2 px-6 text-center text-base">
            <div className="relative leading-[175%] inline-block w-[140px] shrink-0">
              Reset
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[960px] w-[960px] h-[1080px] overflow-hidden object-cover"
        alt=""
        src="/graphicsideconfirmscreen@2x.png"
      />
      <div className="absolute top-[-8px] left-[318px] flex flex-col items-start justify-start p-2.5">
        <img
          className="relative w-[304px] h-[252px] object-cover"
          alt=""
          src="/empirlogo1@2x.png"
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

export default Confirm1;
