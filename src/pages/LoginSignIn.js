import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import SignUpWithOtherAccountsContain from "../components/SignUpWithOtherAccountsContain";

const LoginSignIn = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1080px] overflow-hidden text-left text-14xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[0px] left-[177px] w-[1743px] h-[1080px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[1743px] h-[1080px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <Footer />
        <div className="absolute top-[254px] left-[0px] w-[521px] overflow-hidden flex flex-col items-end justify-center">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                <div className="flex flex-col items-center justify-center gap-[16px]">
                  <div className="relative leading-[130%] font-semibold">
                    Sign In
                  </div>
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
                  <SignUpWithOtherAccountsContain
                    accountButtonText="or sign in with other accounts?"
                    accountButtonIcon="/gmail@2x.png"
                    accountIconUrl="/facebook@2x.png"
                    accountIconUrl2="/instagram@2x.png"
                    accountButtonImageUrl="/linkedin@2x.png"
                    accountText="Don’t have an account? "
                    signInButtonText="Click here to sign up."
                    propTextAlign="center"
                    propAlignSelf="stretch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-8px] left-[177px] w-[465px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[324px] flex flex-col items-start justify-start p-2.5 box-border relative">
          <img
            className="self-stretch absolute my-0 mx-[!important] top-[10px] left-[-30px] max-w-full overflow-hidden h-[252px] shrink-0 object-cover z-[0]"
            alt=""
            src="/empir-logo@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSignIn;
