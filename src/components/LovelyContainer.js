import { memo } from "react";

const LovelyContainer = memo(() => {
  return (
    <div className="rounded-2xl box-border h-[61px] flex flex-row items-center justify-center p-6 gap-[543px] text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter border-[1px] border-solid border-e9ecef-bg-2">
      <div className="relative leading-[175%]">Lovely!</div>
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-35623@2x.png"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-35624@2x.png"
        />
      </div>
    </div>
  );
});

export default LovelyContainer;
