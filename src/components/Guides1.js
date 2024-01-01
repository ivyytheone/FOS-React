import { memo } from "react";

const Guides1 = memo(() => {
  return (
    <div className="absolute top-[1065px] left-[0px] rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[472px] flex flex-row items-center justify-center p-6 box-border gap-[107px] text-left text-9xl text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-col items-center justify-center">
        <div className="relative leading-[130%] font-medium">357</div>
        <div className="relative text-base leading-[175%] text-styles-total-tickets text-center">
          Total Guides
        </div>
      </div>
      <div className="relative box-border w-px h-[61px] border-r-[1px] border-solid border-darkslategray-100" />
      <div className="shrink-0 flex flex-col items-center justify-center">
        <div className="relative leading-[130%] font-medium">7,500</div>
        <div className="relative text-base leading-[175%] text-styles-total-tickets text-center">
          Total Tickets
        </div>
      </div>
    </div>
  );
});

export default Guides1;
