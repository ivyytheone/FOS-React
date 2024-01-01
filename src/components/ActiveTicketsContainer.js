import { memo, useMemo } from "react";

const ActiveTicketsContainer = memo(
  ({ imageId, dataLabel, ticketCount, propWidth }) => {
    const activeTicketsStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] shrink-0 flex flex-row items-center justify-center p-6 gap-[25px] text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
        <img
          className="relative w-[68px] h-[68px] object-cover"
          alt=""
          src={imageId}
        />
        <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div
            className="relative leading-[175%] inline-block w-[113px]"
            style={activeTicketsStyle}
          >
            {dataLabel}
          </div>
          <div className="relative text-lgi leading-[175%] font-medium text-styles-todo-list">
            {ticketCount}
          </div>
        </div>
      </div>
    );
  }
);

export default ActiveTicketsContainer;
