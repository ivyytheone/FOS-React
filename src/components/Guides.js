import { memo, useMemo } from "react";

const Guides = memo(({ imageId, guideDescription, propBackgroundColor }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="shrink-0 flex flex-row items-center justify-center gap-[24px] text-left text-lgi text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div
        className="relative rounded-81xl bg-thistle w-[84px] h-[84px] overflow-hidden shrink-0"
        style={frameDiv4Style}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[84px] h-[84px] object-cover"
          alt=""
          src={imageId}
        />
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start">
        <div className="relative leading-[175%] font-medium inline-block w-[197px]">
          {guideDescription}
        </div>
        <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
          1 hour ago
        </div>
      </div>
    </div>
  );
});

export default Guides;
