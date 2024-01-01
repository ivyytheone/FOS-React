import { memo } from "react";
import EventContainer from "./EventContainer";

const ContainerComponent29 = memo(() => {
  return (
    <div className="absolute top-[0px] left-[440px] shrink-0 flex flex-col items-start justify-start text-center text-lgi text-a92a6-text-color-2 font-small-text-13px-poppins">
      <div className="shrink-0 flex flex-row items-start justify-start p-2 text-base">
        <div className="relative inline-block w-[204px] shrink-0">Tue</div>
      </div>
      <div className="relative box-border w-[221px] h-px border-t-[1px] border-solid border-gainsboro-200" />
      <div className="relative bg-e9ecef-bg-2 w-[220px] h-[220px] overflow-hidden shrink-0 opacity-[0.5]">
        <div className="absolute top-[0px] left-[180px] flex flex-col items-end justify-start p-2">
          <div className="relative inline-block w-6 h-6 shrink-0">29</div>
        </div>
        <div className="absolute top-[36px] left-[0px] rounded bg-c4ccf8-primary-light flex flex-row items-center justify-center py-1 px-2 text-left text-base text-a57e8-primary border-[1px] border-solid border-a57e8-primary">
          <div className="relative inline-block w-[200px] shrink-0">
            5:30a Click for Google
          </div>
        </div>
      </div>
      <div className="relative box-border w-[221px] h-px border-t-[1px] border-solid border-gainsboro-200" />
      <div className="relative w-[220px] h-[220px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[180px] flex flex-col items-end justify-start p-2">
          <div className="relative inline-block w-6 h-6 shrink-0">6</div>
        </div>
        <div className="absolute top-[84px] left-[1px] rounded bg-c4ccf8-primary-light flex flex-row items-center justify-center py-1 px-2 text-left text-base text-a57e8-primary border-[1px] border-solid border-a57e8-primary">
          <div className="relative inline-block w-[199px] shrink-0">
            5:30a Repeating Event
          </div>
        </div>
      </div>
      <div className="relative box-border w-[221px] h-px border-t-[1px] border-solid border-gainsboro-200" />
      <div className="relative w-[220px] h-[220px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[180px] flex flex-col items-end justify-start p-2">
          <div className="relative inline-block w-6 h-6 shrink-0">13</div>
        </div>
        <div className="absolute top-[45px] left-[2px] rounded bg-d3ffb3-success-light flex flex-row items-center justify-center py-1 px-2 text-left text-base text-aa053-success">
          <div className="relative inline-block w-[200px] shrink-0">
            5:30a Meeting
          </div>
        </div>
      </div>
      <div className="relative box-border w-[221px] h-0.5 border-t-[1px] border-solid border-gainsboro-200" />
      <EventContainer eventDate="20" eventTitle="5:30a All day Event" />
      <div className="relative box-border w-[221px] h-0.5 border-t-[1px] border-solid border-gainsboro-200" />
      <EventContainer eventDate="27" eventTitle="5:30a Repeating Event" />
      <div className="relative box-border w-[221px] h-0.5 border-t-[1px] border-solid border-gainsboro-200" />
      <div className="relative bg-e9ecef-bg-2 w-[220px] h-[219px] overflow-hidden shrink-0 opacity-[0.5]">
        <div className="absolute top-[0px] left-[192px] flex flex-col items-end justify-start p-2">
          <div className="relative">3</div>
        </div>
      </div>
    </div>
  );
});

export default ContainerComponent29;
