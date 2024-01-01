import { memo } from "react";
import Header from "./Header";

const MainHeader = memo(() => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1663px] h-20 overflow-hidden">
      <Header propTop="4px" propLeft="0px" />
    </div>
  );
});

export default MainHeader;
