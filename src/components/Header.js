import { memo, useMemo } from "react";

const Header = memo(({ propTop, propLeft }) => {
  const headerStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[257px] bg-styles-visitor-customer [backdrop-filter:blur(64px)] w-[1663px] h-[76px] flex flex-col items-center justify-center py-4 px-8 box-border text-left text-base text-adb5bd-text-color-3 font-h6-16px-regular-inter"
      style={headerStyle}
    >
      <div className="w-[1632px] flex flex-row items-center justify-start gap-[959px]">
        <div className="rounded overflow-hidden flex flex-row items-center justify-start py-1 px-4 gap-[8px] border-[1px] border-solid border-styles-separator">
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src="/iconlylightsearch@2x.png"
          />
          <div className="relative leading-[175%] inline-block w-60 shrink-0">
            Search…
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-end gap-[16px] text-ffffff-bg-1">
          <img
            className="relative w-[31px] h-[31px] object-cover"
            alt=""
            src="/frame-36358@2x.png"
          />
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src="/iconlybulknotification@2x.png"
          />
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src="/iconlybulkmessage@2x.png"
          />
          <div className="w-[253px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative rounded-11xl w-[45px] h-[45px] object-cover"
              alt=""
              src="/beared-guy02min-11@2x.png"
            />
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[175%]">Jamie Bech</div>
              <div className="relative text-smi leading-[130%] text-gray-400 inline-block w-[141px]">
                Olofström
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
