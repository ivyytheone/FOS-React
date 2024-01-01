import { memo } from "react";

const EventContainer = memo(({ eventDate, eventTitle }) => {
  return (
    <div className="relative w-[220px] h-[219px] overflow-hidden shrink-0 text-center text-lgi text-a92a6-text-color-2 font-small-text-13px-poppins">
      <div className="absolute top-[0px] left-[181px] flex flex-col items-end justify-start p-2">
        <div className="relative">{eventDate}</div>
      </div>
      <div className="absolute top-[38px] left-[3px] rounded bg-c4ccf8-primary-light flex flex-row items-center justify-center py-1 px-2 text-left text-base text-a57e8-primary border-[1px] border-solid border-a57e8-primary">
        <div className="relative inline-block w-[199px] shrink-0">
          {eventTitle}
        </div>
      </div>
    </div>
  );
});

export default EventContainer;
