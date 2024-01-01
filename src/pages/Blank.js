import FormContainer3 from "../components/FormContainer3";
import Header from "../components/Header";
import FormContainer1 from "../components/FormContainer1";

const Blank = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-14xl text-styles-empir-text-gul font-h6-16px-regular-inter">
      <FormContainer3 imageDimensions="/big-circles1@2x.png" />
      <Header propTop="0px" propLeft="257px" />
      <div className="absolute top-[calc(50%_-_598.5px)] left-[calc(50%_+_916px)] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-chocolate flex flex-row items-start justify-start p-2">
        <img
          className="relative w-7 h-7 object-cover"
          alt=""
          src="/iconlylightsetting2@2x.png"
        />
      </div>
      <FormContainer1 />
      <div className="absolute top-[20.5px] left-[94px] leading-[130%] font-medium inline-block w-40">
        EMPIR
      </div>
      <div className="absolute top-[1829px] left-[305px] w-[1567px] h-[51px] text-base text-a92a6-text-color-2">
        <div className="absolute top-[0px] left-[0px] bg-styles-visitor-customer w-[1567px] flex flex-row items-center justify-center py-4 px-6 box-border gap-[1150px]">
          <div className="relative z-[0]">
            <span>
              <span>©</span>
            </span>
            <span>
              <span> 2024 FoS Plattform, Made by</span>
              <span className="text-black">{` `}</span>
              <span className="text-a57e8-primary">Jamie Bech.</span>
            </span>
          </div>
          <div className="my-0 mx-[!important] absolute top-[18px] left-[11px] shrink-0 flex flex-row items-start justify-start gap-[24px] z-[1] text-xs">
            <div className="relative">Privacy Policy</div>
            <div className="relative">Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blank;
