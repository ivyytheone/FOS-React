import { memo, useMemo } from "react";

const OpenProjectsContainer = memo(
  ({
    projectStatusCount,
    propColor,
    propWidth,
    propFlexShrink,
    propHeight,
  }) => {
    const openProjects05Style = useMemo(() => {
      return {
        color: propColor,
        width: propWidth,
        flexShrink: propFlexShrink,
        height: propHeight,
      };
    }, [propColor, propWidth, propFlexShrink, propHeight]);

    return (
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-row items-start justify-start p-6 gap-[158px] text-left text-base text-text-border font-h6-16px-regular-inter">
        <div
          className="relative whitespace-pre-wrap"
          style={openProjects05Style}
        >
          {projectStatusCount}
        </div>
        <div className="relative w-6 h-6 shrink-0">
          <div className="absolute top-[10px] left-[1px] shrink-0 flex flex-row items-start justify-start gap-[5px]">
            <div className="relative rounded-[50%] bg-styles-visitor-customer w-1 h-1" />
            <div className="relative rounded-[50%] bg-styles-visitor-customer w-1 h-1" />
            <div className="relative rounded-[50%] bg-styles-visitor-customer w-1 h-1" />
          </div>
        </div>
      </div>
    );
  }
);

export default OpenProjectsContainer;
