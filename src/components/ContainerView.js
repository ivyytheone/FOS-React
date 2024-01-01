import { memo, useMemo } from "react";

const ContainerView = memo(({ propBackgroundColor, propGap }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className="relative bg-ffffff-bg-1 w-[725px] h-[60px] overflow-hidden shrink-0 text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter"
      style={frameDiv2Style}
    >
      <div
        className="absolute top-[14px] left-[21px] flex flex-row items-start justify-start gap-[427px]"
        style={frameDiv3Style}
      >
        <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-35516@2x.png"
            />
            <div className="relative leading-[175%]">Like</div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-355161@2x.png"
            />
            <div className="relative leading-[175%]">140</div>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-b2-primary-dark">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-33861@2x.png"
          />
          <div className="relative leading-[175%]">99 Share</div>
        </div>
      </div>
    </div>
  );
});

export default ContainerView;
