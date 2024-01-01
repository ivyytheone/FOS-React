import { memo } from "react";

const FormContainer3 = memo(({ imageDimensions }) => {
  return (
    <div className="absolute top-[1px] left-[257px] w-[1663px] h-[276px] text-center text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(38,_109,_213,_0.5),_rgba(0,_72,_179,_0.5))] w-[1663px] h-[276px] overflow-hidden">
        <img
          className="absolute top-[-233px] left-[-194px] w-[2156px] h-[2112.6px] object-contain"
          alt=""
          src={imageDimensions}
        />
        <div className="absolute top-[93px] left-[39px] w-[1587px] flex flex-row items-start justify-start gap-[463px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px] z-[0] text-21xl">
            <b className="relative">Welcome (currentUser)</b>
            <div className="relative text-4xl leading-[130%] font-medium">
              <p className="m-0">
                This is a working progress of a new application which it soul
                purpose exists
              </p>
              <p className="m-0">
                of making FoS members work easier, and easier shareable.
              </p>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[0px] left-[1158px] rounded bg-gray-300 shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[205px] shrink-0 flex flex-row items-center justify-center py-2 px-6 box-border gap-[8px] z-[1]">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/iconlybulkvoice-3@2x.png"
            />
            <div className="relative inline-block w-[130px] h-5 shrink-0">
              News
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[0px] left-[1382px] rounded bg-gray-300 shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[205px] shrink-0 flex flex-row items-center justify-center py-2 px-6 box-border gap-[8px] z-[2]">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/iconlybulkvoice-3@2x.png"
            />
            <div className="relative inline-block w-[130px] h-5 shrink-0">
              Announcments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormContainer3;
