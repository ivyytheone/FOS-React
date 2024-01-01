import { memo } from "react";
import ActiveTicketsContainer from "./ActiveTicketsContainer";

const SummaryCardContainer = memo(() => {
  return (
    <div className="absolute top-[241px] left-[0px] flex flex-row items-start justify-start gap-[40px] text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="relative rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[230px] h-[117px] shrink-0">
        <img
          className="absolute top-[24.5px] left-[24px] w-[68px] h-[68px] object-cover"
          alt=""
          src="/group-386@2x.png"
        />
        <div className="absolute top-[24px] left-[116px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[175%] inline-block w-[141px]">
            Total Tickets
          </div>
          <div className="relative text-lgi leading-[175%] font-medium text-styles-todo-list">
            22,312
          </div>
        </div>
        <img
          className="absolute top-[46px] left-[0px] w-6 h-6 object-contain"
          alt=""
          src="/iconlylightarrow--down-23@2x.png"
        />
      </div>
      <ActiveTicketsContainer
        imageId="/group-386@2x.png"
        dataLabel="Active Tickets"
        ticketCount="CONNECT.DB"
        propWidth="113px"
      />
      <ActiveTicketsContainer
        imageId="/group-386@2x.png"
        dataLabel="Total Guides"
        ticketCount="CONNECT.DB"
        propWidth="113px"
      />
      <ActiveTicketsContainer
        imageId="/solvedmineprogress@2x.png"
        dataLabel="Solved mine"
        ticketCount="CONNECT.DB"
        propWidth="104px"
      />
      <ActiveTicketsContainer
        imageId="/solvedteamprogress@2x.png"
        dataLabel="Solved Team"
        ticketCount="$150K"
        propWidth="109px"
      />
    </div>
  );
});

export default SummaryCardContainer;
