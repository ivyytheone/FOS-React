import { memo } from "react";

const FilterFormContainer1 = memo(() => {
  return (
    <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-row items-start justify-start p-6 gap-[959px] text-left text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
        <img
          className="relative w-6 h-6 shrink-0 object-cover"
          alt=""
          src="/frame-35580@2x.png"
        />
        <div className="relative">Filter by task name...</div>
      </div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[23px]">
        <div className="shrink-0 flex flex-row items-center justify-center">
          <div className="relative font-medium">Sort By :</div>
          <img
            className="relative w-5 h-5 shrink-0 object-cover"
            alt=""
            src="/frame-35584@2x.png"
          />
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <div className="relative font-medium">Group By :</div>
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div className="relative font-light">Status</div>
            <img
              className="relative w-5 h-5 shrink-0 object-cover"
              alt=""
              src="/frame-35584@2x.png"
            />
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-5 h-5 object-cover"
            alt=""
            src="/iconlylightsend@2x.png"
          />
          <div className="relative font-light">Share</div>
          <img
            className="relative w-5 h-5 shrink-0 object-cover"
            alt=""
            src="/frame-35584@2x.png"
          />
        </div>
      </div>
    </div>
  );
});

export default FilterFormContainer1;
