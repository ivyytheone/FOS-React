import { memo } from "react";
import TwitterFeedsContainer from "./TwitterFeedsContainer";

const NewsCard1 = memo(() => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[40px] text-left text-4xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="relative leading-[130%] font-medium">News</div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[16px] text-base text-a92a6-text-color-2">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35515@2x.png"
            />
            <div className="relative leading-[175%] inline-block w-[261px] shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35515@2x.png"
            />
            <div className="relative leading-[175%] inline-block w-[261px] shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="shrink-0 flex flex-col items-start justify-start">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[176px]">
            <div className="relative leading-[130%] font-medium">Gallery</div>
            <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
              132 pics
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[32px]">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[32px]">
            <div className="relative rounded-lg bg-azure w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/flutter@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-lavender w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/cubemin@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-aliceblue-100 w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/wordpress@2x.png"
              />
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[32px]">
            <div className="relative rounded-lg bg-lavender w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/icospheremin@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-linen w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/blender@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-lavender w-[84px] h-[84px]">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/torusmin@2x.png"
              />
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[32px]">
            <div className="relative rounded-lg bg-mistyrose w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/html@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-lavender w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/cylindermin@2x.png"
              />
            </div>
            <div className="relative rounded-lg bg-lightgoldenrodyellow w-[84px] h-[84px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
                alt=""
                src="/android@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="relative leading-[130%] font-medium">Twitter Feeds</div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[24px] text-base">
          <TwitterFeedsContainer
            figma="/figma@2x.png"
            figmaCommunity="Figma Community"
            figma20="@figma20"
          />
          <TwitterFeedsContainer
            figma="/flutter1@2x.png"
            figmaCommunity="Flutter"
            figma20="@jane59"
          />
          <div className="shrink-0 flex flex-col items-start justify-start">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
                <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
                  <img
                    className="relative rounded-31xl w-16 h-16 object-cover"
                    alt=""
                    src="/blender1@2x.png"
                  />
                  <div className="shrink-0 flex flex-col items-start justify-start">
                    <div className="relative leading-[175%] font-medium">
                      Blender
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-a92a6-text-color-2">
                      <div className="relative leading-[175%]">@blender59</div>
                      <img
                        className="relative rounded-81xl w-3 h-3 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/orion-checkmark-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative leading-[175%] text-a92a6-text-color-2 inline-block w-[317px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet
                </div>
              </div>
              <div className="relative leading-[175%] text-b2-primary-dark">
                #Html #Bootstrp
              </div>
              <div className="relative leading-[175%] text-a92a6-text-color-2">
                07 Jan 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsCard1;
