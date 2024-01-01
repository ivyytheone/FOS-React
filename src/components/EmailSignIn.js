import { memo, useMemo } from "react";

const EmailSignIn = memo(({ emailInputBoxSizing }) => {
  const emailInputStyle = useMemo(() => {
    return {
      boxSizing: emailInputBoxSizing,
    };
  }, [emailInputBoxSizing]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <div className="relative leading-[175%]">Email</div>
      <div className="self-stretch flex flex-col items-start justify-center">
        <div
          className="self-stretch rounded bg-ffffff-bg-1 border-[1px] border-solid border-a57e8-primary"
          style={emailInputStyle}
        />
      </div>
    </div>
  );
});

export default EmailSignIn;
