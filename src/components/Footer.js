import { memo } from "react";

const Footer = memo(() => {
  return (
    <div className="absolute top-[1029px] left-[0px] bg-styles-visitor-customer w-[1567px] flex flex-row items-center justify-between py-4 px-6 box-border text-left text-xs text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="w-[901.5px] shrink-0 flex flex-row items-start justify-start gap-[466px]">
        <div className="flex-1 h-[15px] flex flex-row items-center justify-start gap-[24px]">
          <div className="relative">Privacy Policy</div>
          <div className="relative">Terms of Use</div>
        </div>
        <div className="flex-1 shrink-0 flex flex-row items-center justify-between text-base">
          <div className="relative">
            <span>
              <span>©</span>
            </span>
            <span>
              <span> 2024 FoS Plattform, Made by</span>
              <span className="text-black">{` `}</span>
              <span className="text-a57e8-primary">Jamie Bech.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
