const Error501 = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1064px] overflow-hidden [transform:_rotate(180deg)] [transform-origin:0_0] text-left text-21xl text-ffffff-bg-1 font-small-text-13px-poppins">
      <div className="absolute top-[0px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_#3b8aff,_#0048b3)] w-[1920px] h-[1080px] overflow-hidden">
        <img
          className="absolute top-[-389px] left-[-1909px] w-[1897px] h-[1859px] object-contain [transform:_rotate(-180deg)]"
          alt=""
          src="/big-circles4@2x.png"
        />
        <div className="absolute top-[740px] left-[1286px] flex flex-col items-center justify-center gap-[24px] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="shrink-0 flex flex-col items-center justify-center gap-[8px]">
            <div className="relative font-semibold">
              Oops! This Page is Not Working.
            </div>
            <div className="relative text-lgi">
              The requested is Internal Server Error.
            </div>
          </div>
          <div className="rounded bg-e9ecef-bg-2 shadow-[0px_8px_32px_rgba(0,_16,_41,_0.05)] shrink-0 flex flex-row items-center justify-center py-2 px-6 text-base text-d42-text-color-1 font-h6-16px-regular-inter">
            <div className="relative leading-[175%]">Back to Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error501;
