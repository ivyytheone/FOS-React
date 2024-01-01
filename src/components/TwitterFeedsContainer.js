import { memo } from "react";

const TwitterFeedsContainer = memo(({ figma, figmaCommunity, figma20 }) => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[24px] text-left text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative rounded-31xl w-16 h-16 object-cover"
              alt=""
              src={figma}
            />
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[175%] font-medium">
                {figmaCommunity}
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-a92a6-text-color-2">
                <div className="relative leading-[175%]">{figma20}</div>
                <img
                  className="relative rounded-81xl w-3 h-3 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/orion-checkmark-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="relative leading-[175%] text-a92a6-text-color-2 inline-block w-[317px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet
          </div>
        </div>
        <div className="relative leading-[175%] text-b2-primary-dark">
          #Html #Bootstrp
        </div>
        <div className="relative leading-[175%] text-a92a6-text-color-2">
          07 Jan 2020
        </div>
      </div>
      <div className="relative bg-e9ecef-bg-2 w-[317px] h-px" />
    </div>
  );
});

export default TwitterFeedsContainer;
