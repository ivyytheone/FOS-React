const Email = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1080px] overflow-hidden text-left text-45xl text-b2-primary-dark font-h6-16px-regular-inter">
      <div className="absolute top-[1029px] left-[176px] w-[1568px] overflow-hidden" />
      <div className="absolute top-[-8px] left-[0px] w-[1920px] h-[1088px] overflow-hidden flex flex-col items-center justify-center">
        <div className="w-[325px] flex flex-col items-start justify-start p-2.5 box-border h-[272px] mr-[959px]">
          <img
            className="relative w-[304px] h-[252px] object-cover"
            alt=""
            src="/empirlogo1@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start mt-[-264px]">
          <div className="w-[960px] h-[1080px] flex flex-col items-center justify-start py-[310px] px-0 box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="overflow-hidden flex flex-col items-center justify-center gap-[32px]">
                <div className="shrink-0 flex flex-col items-center justify-center gap-[24px]">
                  <img
                    className="relative w-[86px] h-[91px] object-cover"
                    alt=""
                    src="/group-33604@2x.png"
                  />
                  <b className="relative">Success !</b>
                  <div className="relative text-base leading-[175%] text-d42-text-color-1 text-center inline-block w-[540px]">
                    A email has been send to your email@domain.com. Please check
                    for an email from company and click on the included link to
                    reset your password.
                  </div>
                </div>
                <div className="rounded bg-a57e8-primary shadow-[0px_8px_16px_rgba(59,_138,_255,_0.25)] shrink-0 flex flex-row items-center justify-center py-2 px-6 text-center text-base text-ffffff-bg-1">
                  <div className="relative leading-[175%] inline-block w-[140px] shrink-0">{`Back to home `}</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[960px] h-[1080px] overflow-hidden shrink-0 object-contain"
            alt=""
            src="/graphic-side1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[1029px] left-[176.5px] bg-styles-visitor-customer w-[1567px] flex flex-row items-center justify-center py-4 px-6 box-border gap-[1150px] text-base text-a92a6-text-color-2">
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
  );
};

export default Email;
