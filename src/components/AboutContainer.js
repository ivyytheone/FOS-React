import { memo } from "react";
import Guides from "./Guides";

const AboutContainer = memo(() => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[40px] text-left text-4xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <div className="relative leading-[130%] font-medium">About</div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start text-base text-a92a6-text-color-2">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[175%] inline-block w-[317px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
              <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
                <div className="relative leading-[175%]">{`Email: `}</div>
                <div className="relative leading-[175%] text-b2-primary-dark">
                  nikjone@demoo.com
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
                <div className="relative leading-[175%]">Phone:</div>
                <div className="relative leading-[175%] text-b2-primary-dark">
                  001235125612
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
                <div className="relative leading-[175%]">LOcation:</div>
                <div className="relative leading-[175%] text-b2-primary-dark">
                  USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="relative leading-[130%] font-medium">Stories</div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[47px] text-lgi">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
            <div className="rounded-81xl shrink-0 flex flex-row items-start justify-start p-1 border-[1px] border-solid border-ffffff-bg-1">
              <div className="rounded-81xl bg-gainsboro-100 overflow-hidden flex flex-col items-start justify-start p-0.5">
                <img
                  className="relative w-[84px] h-[84px] object-cover"
                  alt=""
                  src="/ios@2x.png"
                />
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[175%] font-medium inline-block w-[197px]">
                Web Design
              </div>
              <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
                1 hour ago
              </div>
            </div>
          </div>
          <Guides
            imageId="/figma1@2x.png"
            guideDescription="GuideDescription"
            propBackgroundColor="#ecd4f7"
          />
          <Guides
            imageId="/vue@2x.png"
            guideDescription="Abstract Design"
            propBackgroundColor="#dae8f1"
          />
        </div>
      </div>
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[24px]">
        <div className="shrink-0 flex flex-col items-start justify-start">
          <div className="shrink-0 flex flex-row items-center justify-center">
            <div className="relative leading-[130%] font-medium">
              Suggestions
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[24px] text-base">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <div className="relative rounded-81xl box-border w-14 h-14 overflow-hidden shrink-0 border-[1px] border-solid border-a92a6-text-color-2">
                  <img
                    className="absolute top-[0px] left-[0px] w-14 h-14 object-cover"
                    alt=""
                    src="/html1@2x.png"
                  />
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Paul Molive
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <div className="relative rounded-81xl box-border w-14 h-14 overflow-hidden shrink-0 border-[1px] border-solid border-a92a6-text-color-2">
                  <img
                    className="absolute top-[0px] left-[0px] w-14 h-14 object-cover"
                    alt=""
                    src="/figma2@2x.png"
                  />
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Robert Fox
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-35522@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Jenny Wilson
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-355221@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Cody Fisher
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-355222@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Bessie Cooper
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-355223@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Wade Warren
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-355224@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Guy Hawkins
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[85px]">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                <img
                  className="relative rounded-81xl w-14 h-14 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-355225@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium inline-block w-28">
                    Floyd Miles
                  </div>
                  <div className="relative text-smi leading-[130%] text-a92a6-text-color-2">
                    4 mutual friends
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35550@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutContainer;
