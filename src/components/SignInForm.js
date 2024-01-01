import { memo } from "react";
import EmailSignIn from "./EmailSignIn";

const SignInForm = memo(({ password }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <EmailSignIn />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[175%]">{password}</div>
        <div className="self-stretch rounded bg-ffffff-bg-1 border-[1px] border-solid border-a57e8-primary" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-sm bg-ffffff-bg-1 shadow-[0px_2px_4px_rgba(59,_138,_255,_0.25)] shrink-0 hidden flex-row items-center justify-center border-[1px] border-solid border-a57e8-primary">
              <img
                className="relative w-4 h-4 object-cover"
                alt=""
                src="/tick@2x.png"
              />
            </div>
            <div className="rounded-sm bg-ffffff-bg-1 shadow-[0px_4px_8px_rgba(0,_16,_41,_0.1)] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-a92a6-text-color-2">
              <img
                className="relative w-4 h-4 object-cover"
                alt=""
                src="/tick3@2x.png"
              />
            </div>
          </div>
          <div className="relative leading-[175%]">Remember me?</div>
        </div>
        <div className="relative leading-[175%] text-a57e8-primary">
          Forgot Password
        </div>
      </div>
    </div>
  );
});

export default SignInForm;
