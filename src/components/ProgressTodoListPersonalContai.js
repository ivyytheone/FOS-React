import { memo, useMemo } from "react";

const ProgressTodoListPersonalContai = memo(({ propWidth, propFlexShrink }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  return (
    <div
      className="w-[394px] flex flex-col items-start justify-start relative text-left text-lgi text-styles-todo-list font-h6-16px-regular-inter"
      style={frameDiv1Style}
    >
      <div className="relative leading-[175%] inline-block w-[220px] z-[0]">
        PR49152 toner change
      </div>
      <div className="relative text-base leading-[175%] text-styles-total-tickets inline-block w-[116px] z-[1]">
        11 JUL 8:10 PM
      </div>
      <div className="my-0 mx-[!important] absolute top-[31px] left-[216px] rounded [background:linear-gradient(180deg,_rgba(0,_176,_92,_0.53),_rgba(0,_176,_0,_0))] w-[58px] h-8 flex flex-row items-center justify-center py-2 px-6 box-border z-[2]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/carboncheckmarkfilled@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[31px] left-[277px] rounded [background:linear-gradient(180deg,_#b36b42,_rgba(241,_106,_27,_0))] w-[57px] h-8 flex flex-row items-center justify-center py-2 px-6 box-border z-[3]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/linemdedit@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[31px] left-[337px] rounded [background:linear-gradient(180deg,_#89433b,_rgba(192,_50,_33,_0))] w-[57px] h-8 flex flex-row items-center justify-center py-2 px-6 box-border z-[4]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/materialsymbolsdeleteoutline@2x.png"
        />
      </div>
    </div>
  );
});

export default ProgressTodoListPersonalContai;
