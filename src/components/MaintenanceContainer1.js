import { memo } from "react";

const MaintenanceContainer1 = memo(() => {
  return (
    <div className="absolute top-[1079px] left-[1920px] [background:radial-gradient(50%_50%_at_50%_50%,_#3b8aff,_#0048b3)] w-[1920px] h-[359px] overflow-hidden [transform:_rotate(180deg)] [transform-origin:0_0] text-center text-21xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <img
        className="absolute top-[-1622px] left-[-1740px] w-[2214px] h-[2169px] object-contain [transform:_rotate(-180deg)]"
        alt=""
        src="/big-circles3@2x.png"
      />
      <div className="absolute top-[290px] left-[1314px] flex flex-col items-center justify-center gap-[24px] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="shrink-0 flex flex-col items-center justify-center gap-[16px]">
          <div className="shrink-0 flex flex-col items-center justify-center gap-[16px]">
            <b className="relative">Hang on! We are under maintenance</b>
            <div className="relative text-base leading-[175%] text-left">
              It will not take a long time till we get the error fiked. We wii
              live again in
            </div>
          </div>
          <b className="relative text-14xl leading-[130%] whitespace-pre-wrap text-left">
            00 : 04 : 13 : 39
          </b>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px] text-left text-base">
          <div className="rounded shrink-0 flex flex-row items-center justify-start py-2 px-4 border-[1px] border-solid border-ffffff-bg-1">
            <div className="relative leading-[175%] flex items-center w-[421px] shrink-0">
              Enter your mail
            </div>
          </div>
          <div className="rounded bg-ffffff-bg-1 shadow-[0px_2px_4px_rgba(75,_118,_249,_0.5)] shrink-0 flex flex-row items-center justify-center py-2 px-4 text-a57e8-primary">
            <div className="relative leading-[175%]">Notify Me</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MaintenanceContainer1;
