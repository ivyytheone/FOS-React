const Error404 = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1064px] overflow-hidden [transform:_rotate(180deg)] [transform-origin:0_0] text-left text-21xl text-ffffff-bg-1 font-small-text-13px-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px] overflow-hidden object-cover [transform:_rotate(-180deg)]"
        alt=""
        src="/graphic-side2@2x.png"
      />
      <div className="absolute top-[766px] left-[656px] flex flex-col items-center justify-center gap-[16px]">
        <b className="relative [transform:_rotate(180deg)]">
          Oops! This Page is Not Found.
        </b>
        <div className="relative text-lgi [transform:_rotate(180deg)]">
          The requested page dose not exist
        </div>
        <div className="rounded bg-e9ecef-bg-2 shadow-[0px_8px_32px_rgba(0,_16,_41,_0.05)] shrink-0 flex flex-row items-center justify-center py-2 px-6 [transform:_rotate(180deg)] text-base text-d42-text-color-1 font-h6-16px-regular-inter">
          <div className="relative leading-[175%]">Back to Home</div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
