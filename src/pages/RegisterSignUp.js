import SignUpRegisterScreen from "../components/SignUpRegisterScreen";

const RegisterSignUp = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full overflow-hidden flex flex-col items-center justify-end text-center text-base text-a92a6-text-color-2 font-h6-16px-regular-inter">
      <SignUpRegisterScreen />
      <div className="self-stretch bg-styles-visitor-customer flex flex-row items-center justify-center py-4 px-6 relative gap-[1150px] mt-[-51px]">
        <div className="flex-1 relative z-[0]">
          <span>
            <span>©</span>
          </span>
          <span>
            <span> 2024 FoS Plattform, Made by</span>
            <span className="text-black">{` `}</span>
            <span className="text-a57e8-primary">Jamie Bech.</span>
          </span>
        </div>
        <div className="flex-1 my-0 mx-[!important] absolute top-[18px] left-[11px] shrink-0 flex flex-row items-start justify-start gap-[24px] z-[1] text-left text-xs">
          <div className="relative">Privacy Policy</div>
          <div className="relative">Terms of Use</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSignUp;
