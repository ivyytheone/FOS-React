import { memo, useMemo } from "react";

const CardContainer = memo(
  ({
    carDimensions,
    personName,
    onCall,
    backupOnCall,
    phoneNo,
    percentageMemberTasks,
    imageDimensions,
    propBackgroundColor,
    propLeft,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    const mMStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    return (
      <div
        className="bg-darkslategray-200 shrink-0 flex flex-row items-center justify-center p-4 gap-[122px] text-left text-base text-styles-todo-list font-h6-16px-regular-inter"
        style={frameDivStyle}
      >
        <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-[45px] h-[45px] object-cover"
            alt=""
            src={carDimensions}
          />
          <div className="relative leading-[175%] inline-block w-[175px] shrink-0">
            {personName}
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-center gap-[118px] text-a57e8-primary">
          <div className="relative w-[141px] h-[45px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
              <div className="absolute top-[8px] left-[11px] leading-[175%] font-medium">
                {onCall}
              </div>
            </div>
            <div className="absolute top-[0px] left-[32px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
              <div
                className="absolute top-[8px] left-[8px] leading-[175%] font-medium"
                style={mMStyle}
              >
                {backupOnCall}
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[147px] text-styles-todo-list">
            <div className="relative leading-[175%] inline-block w-20 shrink-0">
              {phoneNo}
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start text-a92a6-text-color-2">
              <div className="relative leading-[175%]">
                {percentageMemberTasks}
              </div>
              <img
                className="relative w-[188px] h-2.5 object-cover"
                alt=""
                src={imageDimensions}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CardContainer;
