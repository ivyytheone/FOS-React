import { memo } from "react";

const Sidebar = memo(() => {
  return (
    <div className="h-[1953px] flex flex-row items-start justify-start text-left text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="relative bg-styles-visitor-customer shadow-[8px_0px_32px_rgba(0,_0,_6,_0.15)] w-[257px] h-[1953px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] shrink-0 flex flex-col items-start justify-start">
          <div className="w-[257px] h-[76px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-6 px-8 pb-4 box-border">
            <div className="relative w-[34px] h-[55px]">
              <img
                className="absolute top-[-10.5px] left-[-23px] w-[74px] h-20 object-contain"
                alt=""
                src="/empir-logo-streck@2x.png"
              />
            </div>
          </div>
          <div className="relative bg-styles-separator w-[257px] h-px" />
        </div>
        <div className="absolute top-[93px] left-[0px] shrink-0 flex flex-col items-center justify-center gap-[8px]">
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="shrink-0 flex flex-col items-center justify-center">
              <div className="rounded bg-a57e8-primary shadow-[0px_2px_4px_rgba(138,_146,_166,_0.3)] w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[57px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkcategory1@2x.png"
                    />
                    <div className="relative leading-[175%]">Dashboard</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border text-a92a6-text-color-2">
                <div className="flex flex-row items-center justify-start gap-[34px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkfilter1@2x.png"
                    />
                    <div className="relative leading-[175%]">Menu Style</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
              <div className="relative bg-e9ecef-bg-2 box-border w-[206px] h-px border-t-[1px] border-solid border-darkslategray-100" />
            </div>
          </div>
          <div className="w-[257px] flex flex-col items-center justify-center text-a92a6-text-color-2">
            <div className="w-[257px] flex flex-row items-center justify-start py-2 pr-4 pl-8 box-border text-lgi text-lightslategray font-small-text-13px-poppins">
              <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                <div className="shrink-0 hidden flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-[23px] h-6 object-cover"
                    alt=""
                    src="/home@2x.png"
                  />
                  <div className="relative font-medium hidden">MAIN</div>
                </div>
                <div className="relative text-base leading-[175%] font-semibold font-h6-16px-regular-inter text-adb5bd-text-color-3">
                  Pages
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">News</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">Oncall</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">Scripts</div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">Guides</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">Contacts</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">News</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">News</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">News</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none w-[233px] flex flex-col items-start justify-center py-2 px-6 box-border">
                <div className="flex flex-row items-center justify-start gap-[55px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-6 h-6 object-cover"
                      alt=""
                      src="/iconlybulkgame@2x.png"
                    />
                    <div className="relative leading-[175%]">News</div>
                  </div>
                  <div className="rounded-13xl bg-tomato overflow-hidden hidden flex-row items-center justify-center p-1 text-smi text-ffffff-bg-1 font-small-text-13px-poppins">
                    <div className="relative w-4 h-4">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)]">
                        3
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-2xl w-6 h-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/dropdown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-e9ecef-bg-2 box-border w-[206px] h-px border-t-[1px] border-solid border-darkslategray-100" />
          </div>
        </div>
        <div className="absolute top-[1058px] left-[-309px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[543px] h-[543px] opacity-[0.25]" />
      </div>
      <img
        className="w-[30px] h-[30px] object-contain"
        alt=""
        src="/drag-in--out@2x.png"
      />
    </div>
  );
});

export default Sidebar;
