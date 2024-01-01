import { memo } from "react";
import Sidebar1 from "./Sidebar1";

const FormContainer1 = memo(() => {
  return (
    <div className="absolute top-[-4px] left-[0px] flex flex-row items-start justify-start text-left text-14xl text-styles-empir-text-gul font-h6-16px-regular-inter">
      <Sidebar1 />
      <img
        className="w-[30px] h-[30px] shrink-0 object-contain"
        alt=""
        src="/drag-in--out@2x.png"
      />
    </div>
  );
});

export default FormContainer1;
