import { memo } from "react";

const WelcomeContainer = memo(() => {
  return (
    <div className="absolute top-[0px] left-[257px] w-[1663px] h-[281px] overflow-hidden text-center text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[5px] left-[0px] w-[1663px] h-[276px]">
        <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(38,_109,_213,_0.5),_rgba(0,_72,_179,_0.5))] w-[1663px] h-[276px] overflow-hidden">
          <img
            className="absolute top-[-233px] left-[-194px] w-[2156px] h-[2112.6px] object-contain"
            alt=""
            src="/big-circles1@2x.png"
          />
          <div className="absolute top-[93px] left-[39px] w-[1587px] flex flex-row items-start justify-start gap-[463px]">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] z-[0] text-21xl">
              <b className="relative">Welcome (currentUser)</b>
              <div className="relative text-4xl leading-[130%] font-medium">
                <p className="m-0">
                  This is a working progress of a new application which it soul
                  purpose exists
                </p>
                <p className="m-0">
                  of making FoS members work easier, and easier shareable.
                </p>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[0px] left-[1158px] rounded bg-gray-300 shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[205px] shrink-0 flex flex-row items-center justify-center py-2 px-6 box-border gap-[8px] z-[1]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/iconlybulkvoice-3@2x.png"
              />
              <div className="relative inline-block w-[130px] h-5 shrink-0">
                News
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[0px] left-[1382px] rounded bg-gray-300 shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[205px] shrink-0 flex flex-row items-center justify-center py-2 px-6 box-border gap-[8px] z-[2]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/iconlybulkvoice-3@2x.png"
              />
              <div className="relative inline-block w-[130px] h-5 shrink-0">
                Announcments
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1829px] left-[48px] bg-styles-visitor-customer w-[1567px] flex flex-row items-center justify-center py-4 px-6 box-border gap-[1150px] text-left text-a92a6-text-color-2">
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
});

export default WelcomeContainer;
