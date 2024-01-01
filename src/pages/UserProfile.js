import FormContainer3 from "../components/FormContainer3";
import NewsCard1 from "../components/NewsCard1";
import ContainerView from "../components/ContainerView";
import FormContainer2 from "../components/FormContainer2";
import LovelyContainer from "../components/LovelyContainer";
import AboutContainer from "../components/AboutContainer";
import FormContainer1 from "../components/FormContainer1";
import Header from "../components/Header";

const UserProfile = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-9xl text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[289px] left-[297px] shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] w-[1582px] h-[124px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-styles-visitor-customer w-[1582px] flex flex-row items-center justify-end p-10 box-border gap-[682px]">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[130%] font-medium">
              Jamie Bech
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-base">
              <div className="relative bg-ffffff-bg-1 w-4 h-px" />
              <div className="relative leading-[175%]">
                Factory support @ Olofström
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start text-base">
            <div className="rounded-31xl bg-a57e8-primary shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative leading-[175%]">Feed</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative leading-[175%]">Activity</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative leading-[175%]">Freinds</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative leading-[175%]">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <FormContainer3 imageDimensions="/big-circles2@2x.png" />
      <div className="absolute top-[237px] left-[321px] rounded-81xl w-[122px] h-[122px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[1px] w-[121px] h-[121px] object-cover"
          alt=""
          src="/beared-guy02min-1@2x.png"
        />
      </div>
      <div className="absolute top-[453px] left-[297px] flex flex-row items-start justify-start gap-[40px] text-lgi">
        <NewsCard1 />
        <div className="shrink-0 flex flex-col items-start justify-start gap-[40px]">
          <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] h-[1148px] shrink-0 flex flex-col items-start justify-start p-6 box-border">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="shrink-0 flex flex-col items-start justify-start">
                    <div className="shrink-0 flex flex-row items-center justify-center p-6 gap-[362px]">
                      <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                        <div className="relative rounded-81xl box-border w-[76px] h-[76px] overflow-hidden shrink-0 border-[1px] border-solid border-b2-primary-dark">
                          <img
                            className="absolute top-[6px] left-[8px] w-16 h-16 object-cover"
                            alt=""
                            src="/cubemin1@2x.png"
                          />
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start">
                          <div className="relative leading-[175%] font-medium">
                            Wade Warren
                          </div>
                          <div className="relative text-smi leading-[130%] text-b2-primary-dark">
                            colleages
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-center gap-[24px] text-smi text-a92a6-text-color-2">
                        <div className="relative leading-[130%]">29 mins</div>
                        <img
                          className="relative w-4 h-2 object-contain"
                          alt=""
                          src="/polygon-5@2x.png"
                        />
                      </div>
                    </div>
                    <div className="relative w-[725px] h-[398px] overflow-hidden shrink-0">
                      <img
                        className="absolute top-[-3px] left-[0px] w-[721px] h-[405px] object-cover"
                        alt=""
                        src="/staged-scene02-1@2x.png"
                      />
                    </div>
                  </div>
                  <ContainerView propBackgroundColor="#fff" propGap="427px" />
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start text-base text-a92a6-text-color-2">
                  <div className="shrink-0 flex flex-col items-center justify-center">
                    <div className="shrink-0 flex flex-col items-center justify-center">
                      <div className="relative bg-e9ecef-bg-2 w-[725px] h-px" />
                      <div className="shrink-0 flex flex-row items-start justify-start p-6">
                        <div className="relative leading-[175%] inline-block w-[677px] shrink-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Id quam tortor nec arcu. Euismod neque ultricies
                          eget adipiscing condimentum.Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Id quam tortor nec
                          arcu. Euismod neque ultricies eget adipiscing
                          condimentum.
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-e9ecef-bg-2 w-[725px] h-px" />
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start">
                    <FormContainer2
                      imageDimensions="/torus-light@2x.png"
                      commentName="Paul Molive"
                      imageCode="/orion-share-1@2x.png"
                    />
                    <FormContainer2
                      imageDimensions="/spheremin@2x.png"
                      commentName="Robert Fox"
                      imageCode="/orion-share-11@2x.png"
                    />
                  </div>
                </div>
              </div>
              <LovelyContainer />
            </div>
          </div>
          <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
              <div className="shrink-0 flex flex-col items-start justify-start">
                <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
                  <div className="shrink-0 flex flex-row items-center justify-center gap-[406px]">
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                      <img
                        className="relative rounded-31xl w-20 h-20 object-cover"
                        alt=""
                        src="/wordpress1@2x.png"
                      />
                      <div className="shrink-0 flex flex-col items-start justify-start">
                        <div className="relative leading-[175%] font-medium">
                          Wade Warren
                        </div>
                        <div className="relative text-smi leading-[130%] text-b2-primary-dark">
                          colleages
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[24px] text-smi text-a92a6-text-color-2">
                      <div className="relative leading-[130%]">29 mins</div>
                      <img
                        className="relative w-4 h-2 object-contain"
                        alt=""
                        src="/polygon-5@2x.png"
                      />
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-center justify-center text-base text-a92a6-text-color-2">
                    <div className="relative leading-[175%] inline-block w-[725px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id quam tortor nec arcu. Euismod neque ultricies eget
                      adipiscing condimentum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Id quam tortor nec arcu.
                      Euismod neque ultricies eget adipiscing condimentum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-start">
                <div className="relative bg-e9ecef-bg-2 w-[725px] h-px" />
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <ContainerView propBackgroundColor="unset" propGap="438px" />
                  <LovelyContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutContainer />
      </div>
      <div className="absolute top-[2089px] left-[257px] bg-ffffff-bg-1 flex flex-row items-center justify-center py-4 px-6 gap-[1150px] text-xs text-black">
        <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
          <div className="relative">Privacy Policy</div>
          <div className="relative">Terms of Use</div>
        </div>
        <div className="relative text-base">
          <span>
            <span>©</span>
          </span>
          <span>
            <span>{` 2021 Hope UI, Made with ❤ by `}</span>
            <span className="text-a57e8-primary">IQONIC Design.</span>
          </span>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_647.5px)] left-[calc(50%_+_916px)] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-chocolate flex flex-row items-start justify-start p-2">
        <img
          className="relative w-7 h-7 object-cover"
          alt=""
          src="/iconlylightsetting@2x.png"
        />
      </div>
      <FormContainer1 />
      <Header propTop="0px" propLeft="257px" />
    </div>
  );
};

export default UserProfile;
