import SignInForm from "../components/SignInForm";

const FormLoginScreen = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-center text-left text-14xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <div className="relative leading-[130%] font-semibold">Sign In</div>
            <div className="relative text-base leading-[175%] text-a92a6-text-color-2">
              Sign in to stay connected.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-center text-base">
            <SignInForm password="Password" />
            <div className="rounded bg-a57e8-primary flex flex-row items-center justify-center py-2 px-6">
              <div className="relative leading-[175%] flex items-center justify-center w-[140px] shrink-0">
                Sign in
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px] text-left text-d42-text-color-1">
              <div className="relative leading-[175%]">
                or sign in with other accounts?
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative rounded-45xl w-6 h-6 object-cover"
                  alt=""
                  src="/gmail@2x.png"
                />
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/facebook@2x.png"
                />
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/instagram@2x.png"
                />
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/linkedin@2x.png"
                />
              </div>
              <div className="self-stretch relative leading-[175%] text-center">
                <span>{`Don’t have an account? `}</span>
                <span className="text-a57e8-primary">
                  Click here to sign up.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLoginScreen;
