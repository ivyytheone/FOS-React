import { memo } from "react";
import FormContainer from "./FormContainer";
import SignUpWithOtherAccountsContain from "./SignUpWithOtherAccountsContain";

const SignUpRegisterScreen = memo(() => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between text-left text-14xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <img
        className="relative w-[960px] h-[1080px] overflow-hidden shrink-0 object-contain"
        alt=""
        src="/graphic-side@2x.png"
      />
      <div className="relative w-[960px] h-[1080px]">
        <div className="absolute top-[267px] left-[211px] w-[538px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative leading-[130%] font-medium">
                  Sign Up
                </div>
                <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
                  Create your Hope UI account
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-base text-a92a6-text-color-2">
                <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                  <FormContainer firstName="First Name" lastName="Last Name" />
                  <FormContainer firstName="Email" lastName="Phone No." />
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative leading-[175%]">Password</div>
                      <div className="rounded bg-ffffff-bg-1 box-border w-[250px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
                    </div>
                    <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative leading-[175%]">
                        Confirm password
                      </div>
                      <div className="rounded bg-ffffff-bg-1 box-border w-[250px] shrink-0 border-[1px] border-solid border-a57e8-primary" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
                      <div className="rounded-sm bg-ffffff-bg-1 shadow-[0px_2px_4px_rgba(59,_138,_255,_0.25)] shrink-0 hidden flex-row items-center justify-center border-[1px] border-solid border-a57e8-primary">
                        <img
                          className="relative w-4 h-4 object-cover"
                          alt=""
                          src="/tick@2x.png"
                        />
                      </div>
                      <div className="rounded-sm bg-ffffff-bg-1 shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-a92a6-text-color-2">
                        <img
                          className="relative w-4 h-4 object-cover"
                          alt=""
                          src="/tick1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="relative leading-[175%]">
                      I agree with the terms of use
                    </div>
                  </div>
                </div>
                <div className="rounded bg-a57e8-primary flex flex-row items-center justify-center py-2 px-6 text-center text-ffffff-bg-1">
                  <div className="relative leading-[175%] flex items-center justify-center w-[140px] shrink-0">
                    Sign up
                  </div>
                </div>
                <SignUpWithOtherAccountsContain
                  accountButtonText="or sign up with other accounts?"
                  accountButtonIcon="/gmail@2x.png"
                  accountIconUrl="/facebook@2x.png"
                  accountIconUrl2="/instagram@2x.png"
                  accountButtonImageUrl="/linkedin@2x.png"
                  accountText="Already have an Account"
                  signInButtonText=" Sign in"
                  propTextAlign="left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-13px] left-[307px] w-[346px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-col items-start justify-start p-2.5">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[274px] shrink-0 object-cover"
              alt=""
              src="/empirlogo@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SignUpRegisterScreen;
