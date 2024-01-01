import { memo } from "react";

const FormContainer2 = memo(({ imageDimensions, commentName, imageCode }) => {
  return (
    <div className="shrink-0 flex flex-row items-start justify-start p-6 text-left text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
        <div className="relative rounded-81xl box-border w-14 h-14 overflow-hidden shrink-0 border-[1px] border-solid border-a92a6-text-color-2">
          <img
            className="absolute top-[1px] left-[1px] w-[54px] h-[54px] object-cover"
            alt=""
            src={imageDimensions}
          />
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start">
          <div className="relative text-lgi leading-[175%] font-medium inline-block w-[111px]">
            {commentName}
          </div>
          <div className="relative leading-[175%] text-a92a6-text-color-2">
            Lorem ipsum dolor sit amet, consectetur elit.
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[16px] text-b2-primary-dark">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-355151@2x.png"
            />
            <div className="relative leading-[175%]">Like</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-contain"
              alt=""
              src={imageCode}
            />
            <div className="relative leading-[175%]">Reply</div>
            <div className="relative leading-[175%]">Translate</div>
            <div className="relative leading-[175%] text-a92a6-text-color-2">
              5 min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormContainer2;
