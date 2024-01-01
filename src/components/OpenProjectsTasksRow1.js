import { memo } from "react";

const OpenProjectsTasksRow1 = memo(({ taskTitle }) => {
  return (
    <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[16px] text-left text-xs text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-row items-center justify-center gap-[161px]">
        <div className="shrink-0 flex flex-col items-start justify-start">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[2px]">
            <div className="relative">Dashboard plan</div>
            <img
              className="relative w-5 h-5 shrink-0 object-cover"
              alt=""
              src="/frame-35600@2x.png"
            />
            <div className="relative font-public-sans">List</div>
          </div>
        </div>
        <img
          className="relative w-[22px] h-1 object-cover"
          alt=""
          src="/group-46@2x.png"
        />
      </div>
      <div className="relative text-base leading-[25px]">{taskTitle}</div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
        <img
          className="relative rounded w-8 h-8 shrink-0 object-cover"
          alt=""
          src="/frame-35604@2x.png"
        />
        <img
          className="relative rounded w-8 h-8 shrink-0 object-cover"
          alt=""
          src="/frame-35605@2x.png"
        />
        <img
          className="relative rounded w-8 h-8 shrink-0 object-cover"
          alt=""
          src="/frame-35606@2x.png"
        />
        <img
          className="relative rounded w-8 h-8 shrink-0 object-cover"
          alt=""
          src="/frame-35607@2x.png"
        />
      </div>
      <div className="relative w-[121px] h-10 text-sm text-slateblue">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 border-[2px] border-solid border-ffffff-bg-1">
          <div className="absolute top-[12px] left-[11px]">AT</div>
        </div>
        <div className="absolute top-[0px] left-[27px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 text-coral border-[2px] border-solid border-ffffff-bg-1">
          <div className="absolute top-[12px] left-[9px]">WE</div>
        </div>
        <div className="absolute top-[0px] left-[54px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 text-seagreen border-[2px] border-solid border-ffffff-bg-1">
          <div className="absolute top-[12px] left-[10px]">GK</div>
        </div>
        <div className="absolute top-[0px] left-[81px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 border-[2px] border-solid border-ffffff-bg-1">
          <div className="absolute top-[15px] left-[14px] w-[11px] h-[11px]">
            <div className="absolute top-[0px] left-[5px] bg-firebrick w-px h-[11px]" />
            <div className="absolute top-[5px] left-[0px] bg-firebrick w-[11px] h-px" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default OpenProjectsTasksRow1;
