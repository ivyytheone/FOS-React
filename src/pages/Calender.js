import Container27 from "../components/Container27";
import FormContainer5 from "../components/FormContainer5";
import ContainerComponent29 from "../components/ContainerComponent29";
import Container30 from "../components/Container30";
import ContainerWrapper from "../components/ContainerWrapper";
import ContainerFrame from "../components/ContainerFrame";
import ContainerBox from "../components/ContainerBox";
import FormContainer1 from "../components/FormContainer1";
import FormContainer3 from "../components/FormContainer3";
import Header from "../components/Header";

const Calender = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-base text-ffffff-bg-1 font-small-text-13px-poppins">
      <div className="absolute top-[399px] left-[297px] bg-styles-visitor-customer h-[1448px] flex flex-col items-start justify-start p-6 box-border gap-[24px]">
        <div className="shrink-0 flex flex-row items-center justify-center gap-[446px]">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
            <div className="rounded bg-a57e8-primary shrink-0 flex flex-row items-center justify-start">
              <img
                className="relative w-10 h-10 object-contain"
                alt=""
                src="/iconlylightarrow--down-square@2x.png"
              />
              <img
                className="relative w-10 h-10 object-contain"
                alt=""
                src="/iconlylightarrow--down-square1@2x.png"
              />
            </div>
            <div className="rounded bg-b2-primary-dark shrink-0 flex flex-row items-center justify-center py-2 px-6">
              <div className="relative">Today</div>
            </div>
          </div>
          <div className="relative text-9xl leading-[130%] font-semibold font-h6-16px-regular-inter">
            July 2021
          </div>
          <div className="rounded bg-a57e8-primary overflow-hidden flex flex-row items-center justify-center text-bg-color-2-fbfbfb">
            <div className="rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-b2-primary-dark shrink-0 flex flex-row items-center justify-center py-2 px-6">
              <div className="relative">Months</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center py-2 px-6 gap-[24px]">
              <div className="relative">Weeks</div>
              <div className="relative">Day</div>
              <div className="relative">List</div>
            </div>
          </div>
        </div>
        <div className="relative box-border w-[1535px] h-[1360px] shrink-0 text-aa053-success border-[1px] border-solid border-gainsboro-200">
          <Container27 />
          <div className="absolute top-[-0.5px] left-[219.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <FormContainer5 />
          <div className="absolute top-[-0.5px] left-[439.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <ContainerComponent29 />
          <div className="absolute top-[-0.5px] left-[659.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <Container30 />
          <div className="absolute top-[-0.5px] left-[879.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <ContainerWrapper />
          <div className="absolute top-[-0.5px] left-[1099.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <ContainerFrame />
          <div className="absolute top-[-0.5px] left-[1319.5px] box-border w-px h-[1361px] border-r-[1px] border-solid border-gainsboro-200" />
          <ContainerBox />
          <div className="absolute top-[308px] left-[6px] rounded bg-d3ffb3-success-light shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-aa053-success">
            <div className="relative inline-block w-[634px] shrink-0">
              Long Event
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1829px] left-[305px] w-[1567px] h-[51px] text-a92a6-text-color-2 font-h6-16px-regular-inter">
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
      <div className="absolute top-[calc(50%_-_577.5px)] left-[calc(50%_+_916px)] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-chocolate flex flex-row items-start justify-start p-2">
        <img
          className="relative w-7 h-7 object-cover"
          alt=""
          src="/iconlylightsetting2@2x.png"
        />
      </div>
      <FormContainer1 />
      <FormContainer3 imageDimensions="/big-circles6@2x.png" />
      <div className="absolute top-[271px] left-[297px] rounded-lg bg-styles-visitor-customer flex flex-row items-center justify-center p-6 gap-[1339px] text-4xl">
        <div className="relative font-semibold">Calender</div>
        <div className="rounded bg-a57e8-primary shrink-0 flex flex-row items-start justify-start py-2 px-6 text-base text-bg-color-2-fbfbfb">
          <div className="relative">Back</div>
        </div>
      </div>
      <Header propTop="0px" propLeft="257px" />
    </div>
  );
};

export default Calender;
