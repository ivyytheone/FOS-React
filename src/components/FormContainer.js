import { memo } from "react";

const FormContainer = memo(({ firstName, lastName }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[175%]">{firstName}</div>
        <div className="shrink-0 flex flex-col items-start justify-center">
          <div className="rounded bg-ffffff-bg-1 box-border w-[250px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[175%]">{lastName}</div>
        <div className="rounded bg-ffffff-bg-1 box-border w-[250px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
      </div>
    </div>
  );
});

export default FormContainer;
