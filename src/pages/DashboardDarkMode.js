import FormContainer1 from "../components/FormContainer1";
import WelcomeContainer from "../components/WelcomeContainer";
import MainHeader from "../components/MainHeader";
import CardContainer from "../components/CardContainer";
import SummaryCardContainer from "../components/SummaryCardContainer";
import ProgressTodoListPersonalContai from "../components/ProgressTodoListPersonalContai";
import Guides1 from "../components/Guides1";

const DashboardDarkMode = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-lgi text-styles-todo-list font-h6-16px-regular-inter">
      <div className="absolute top-[-4px] left-[0px] w-[1920px] h-[1953px] overflow-hidden">
        <FormContainer1 />
        <WelcomeContainer />
      </div>
      <div className="absolute top-[-4px] left-[257px] w-[1663px] h-[1810px] overflow-hidden">
        <MainHeader />
        <div className="absolute top-[0px] left-[40px] w-[1064px] h-[1228px] overflow-hidden">
          <div className="absolute top-[885px] left-[0px] w-[1064px] flex flex-row items-start justify-start gap-[40px]">
            <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] shrink-0 flex flex-col items-start justify-center p-8 gap-[40px]">
              <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
                <div className="relative leading-[175%] font-medium inline-block w-[239px] shrink-0">
                  Contribruted guides
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center gap-[8px] text-base text-styles-total-tickets">
                  <div className="relative leading-[175%]">This Week</div>
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt=""
                    src="/iconlylightarrow--down-2@2x.png"
                  />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[37px] text-base text-styles-total-tickets">
                <img
                  className="relative w-[206px] h-[206px] object-cover"
                  alt=""
                  src="/group-389@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[48px]">
                  <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                    <div className="relative rounded-[50%] bg-a57e8-primary w-[13px] h-[13px]" />
                    <div className="shrink-0 flex flex-col items-start justify-start">
                      <div className="relative leading-[175%]">
                        Created Team
                      </div>
                      <div className="relative leading-[175%] font-medium text-a92a6-text-color-2">
                        251K
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center gap-[24px]">
                    <div className="relative rounded-[50%] bg-a7f7fb-light-information w-[13px] h-[13px]" />
                    <div className="shrink-0 flex flex-col items-start justify-start">
                      <div className="relative leading-[175%]">
                        Created mine
                      </div>
                      <div className="relative leading-[175%] font-medium text-a92a6-text-color-2">
                        176K
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] w-[570px] flex flex-col items-start justify-start p-6 box-border gap-[24px]">
              <div className="w-[515px] flex flex-row items-start justify-start relative gap-[315px]">
                <div className="relative leading-[175%] font-medium z-[0]">
                  Tickets
                </div>
                <div className="my-0 mx-[!important] absolute top-[0px] left-[401px] shrink-0 flex flex-row items-center justify-center gap-[8px] z-[1] text-base text-styles-total-tickets">
                  <div className="relative leading-[175%]">This Week</div>
                  <img
                    className="relative w-6 h-6 object-cover"
                    alt=""
                    src="/iconlylightarrow--down-2@2x.png"
                  />
                </div>
              </div>
              <div className="relative w-[539px] h-[238px] text-smi text-a92a6-text-color-2">
                <div className="absolute top-[0px] left-[0px] w-[539px] h-[213px]">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[32px]">
                    <div className="relative leading-[130%]">160</div>
                    <div className="relative leading-[130%]">120</div>
                    <div className="relative leading-[130%]">80</div>
                    <div className="relative leading-[130%]">40</div>
                    <div className="relative leading-[130%]">0</div>
                  </div>
                  <div className="absolute top-[21px] left-[31px] w-[508px] h-48">
                    <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-end gap-[48px]">
                      <div className="relative box-border w-[509px] h-px border-t-[1px] border-solid border-styles-total-tickets" />
                      <div className="relative box-border w-[509px] h-px border-t-[1px] border-solid border-styles-total-tickets" />
                      <div className="relative box-border w-[509px] h-px border-t-[1px] border-solid border-styles-total-tickets" />
                      <div className="relative box-border w-[509px] h-px border-t-[1px] border-solid border-styles-total-tickets" />
                      <div className="relative box-border w-[509px] h-px border-t-[1px] border-solid border-styles-total-tickets" />
                    </div>
                    <div className="absolute top-[26px] left-[24px] flex flex-row items-end justify-center gap-[40px]">
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[79px]">
                        <div className="absolute top-[36.8px] left-[0px] bg-a57e8-primary w-2.5 h-[42.2px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[137px]">
                        <div className="absolute top-[63.8px] left-[0px] bg-a57e8-primary w-2.5 h-[73.2px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[106px]">
                        <div className="absolute top-[49.4px] left-[0px] bg-a57e8-primary w-2.5 h-[56.6px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[146px]">
                        <div className="absolute top-[68px] left-[0px] bg-a57e8-primary w-2.5 h-[78px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[106px]">
                        <div className="absolute top-[49.4px] left-[0px] bg-a57e8-primary w-2.5 h-[56.6px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[166px]">
                        <div className="absolute top-[77.3px] left-[0px] bg-a57e8-primary w-2.5 h-[88.7px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[106px]">
                        <div className="absolute top-[49.4px] left-[0px] bg-a57e8-primary w-2.5 h-[56.6px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[79px]">
                        <div className="absolute top-[36.8px] left-[0px] bg-a57e8-primary w-2.5 h-[42.2px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[116px]">
                        <div className="absolute top-[54px] left-[0px] bg-a57e8-primary w-2.5 h-[62px]" />
                      </div>
                      <div className="relative rounded-t-lg rounded-b-none bg-a7f7fb-light-information w-2.5 h-[106px]">
                        <div className="absolute top-[49.4px] left-[0px] bg-a57e8-primary w-2.5 h-[56.6px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[221px] left-[55px] flex flex-row items-start justify-start gap-[40px]">
                  <div className="relative leading-[130%]">S</div>
                  <div className="relative leading-[130%]">M</div>
                  <div className="relative leading-[130%]">T</div>
                  <div className="relative leading-[130%]">W</div>
                  <div className="relative leading-[130%]">T</div>
                  <div className="relative leading-[130%]">F</div>
                  <div className="relative leading-[130%]">S</div>
                  <div className="relative leading-[130%]">M</div>
                  <div className="relative leading-[130%]">T</div>
                  <div className="relative leading-[130%]">W</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[40px] w-[1064px] h-[1810px] overflow-hidden">
          <div className="absolute top-[1268px] left-[0px] rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] flex flex-col items-start justify-start">
            <div className="box-border w-[1064px] shrink-0 flex flex-row items-center justify-center p-6 gap-[712px] border-[1px] border-solid border-black">
              <div className="shrink-0 flex flex-row items-start justify-start">
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[175%] font-medium">
                    Active users
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center gap-[18px] text-base text-a92a6-text-color-2">
                    <img
                      className="relative w-[13px] h-2 object-cover"
                      alt=""
                      src="/stroke-3@2x.png"
                    />
                    <div className="relative leading-[175%]">
                      You and 15 others are active
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/iconlylightarrow--down-21@2x.png"
              />
            </div>
            <div className="rounded-3xl shrink-0 flex flex-col items-start justify-start text-base text-a92a6-text-color-2">
              <div className="shrink-0 flex flex-col items-start justify-start">
                <div className="bg-styles-login-sign-in w-[1064px] flex flex-col items-start justify-center p-2 box-border">
                  <div className="flex flex-row items-center justify-center gap-[126px]">
                    <div className="relative leading-[175%] font-medium inline-block w-[241px] shrink-0">
                      Users
                    </div>
                    <div className="relative leading-[175%] font-medium inline-block w-[132px] shrink-0">
                      onCall
                    </div>
                    <div className="relative leading-[175%] font-medium inline-block w-[100px] shrink-0">
                      Phone
                    </div>
                    <div className="relative leading-[175%] font-medium inline-block w-[109px] shrink-0">
                      Working until
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start text-styles-todo-list">
                  <div className="shrink-0 flex flex-row items-center justify-center p-4 gap-[122px]">
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
                      <img
                        className="relative w-[45px] h-[45px] object-cover"
                        alt=""
                        src="/frame-35291@2x.png"
                      />
                      <div className="relative leading-[175%] inline-block w-[175px] shrink-0">
                        Jamie Bech
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-center gap-[118px] text-a57e8-primary">
                      <div className="relative w-[141px] h-[45px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[11px] leading-[175%] font-medium">
                            SP
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[32px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[12px] leading-[175%] font-medium">
                            PP
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[64px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[8px] leading-[175%] font-medium">
                            MM
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-center gap-[147px] text-styles-todo-list">
                        <div className="relative leading-[175%] inline-block w-20 shrink-0">
                          $14,000
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start text-a92a6-text-color-2">
                          <div className="relative leading-[175%] inline-block w-[188px]">
                            60%
                          </div>
                          <img
                            className="relative w-[188px] h-2.5 object-cover"
                            alt=""
                            src="/slider-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-styles-separator w-[1064px] h-px" />
                  <CardContainer
                    carDimensions="/frame-35292@2x.png"
                    personName="Moncef "
                    onCall="No"
                    backupOnCall="JB"
                    phoneNo="0739888873"
                    percentageMemberTasks="25%"
                    imageDimensions="/slider-11@2x.png"
                    propBackgroundColor="#252b3b"
                    propLeft="8px"
                  />
                  <div className="relative bg-styles-separator w-[1064px] h-px" />
                  <CardContainer
                    carDimensions="/frame-35293@2x.png"
                    personName="Daniel"
                    onCall="PP"
                    backupOnCall="TP"
                    phoneNo="$8,500"
                    percentageMemberTasks="100%"
                    imageDimensions="/slider-12@2x.png"
                    propBackgroundColor="unset"
                    propLeft="12px"
                  />
                  <div className="relative bg-styles-separator w-[1064px] h-px" />
                  <div className="bg-darkslategray-200 shrink-0 flex flex-row items-center justify-center p-4 gap-[122px]">
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
                      <img
                        className="relative w-[45px] h-[45px] object-cover"
                        alt=""
                        src="/frame-35294@2x.png"
                      />
                      <div className="relative leading-[175%] inline-block w-[175px] shrink-0">
                        Fredrik
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[118px] text-a57e8-primary">
                      <div className="relative w-[141px] h-[45px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[11px] leading-[175%] font-medium">
                            SP
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[32px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[12px] leading-[175%] font-medium">
                            PP
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[64px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[8px] leading-[175%] font-medium">
                            MM
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[96px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[12px] leading-[175%] font-medium">
                            TP
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-center gap-[147px] text-styles-todo-list">
                        <div className="relative leading-[175%] inline-block w-20 shrink-0">
                          $20,500
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start text-a92a6-text-color-2">
                          <div className="relative leading-[175%]">100%</div>
                          <img
                            className="relative w-[188px] h-2.5 object-cover"
                            alt=""
                            src="/slider-12@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-styles-separator w-[1064px] h-px" />
                  <div className="shrink-0 flex flex-row items-center justify-center p-4 gap-[122px]">
                    <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
                      <img
                        className="relative w-[45px] h-[45px] object-cover"
                        alt=""
                        src="/frame-35295@2x.png"
                      />
                      <div className="relative leading-[175%] inline-block w-[175px] h-7 shrink-0">
                        Maher
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[118px] text-a57e8-primary">
                      <div className="relative w-[141px] h-[45px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] rounded-14xl bg-f4d-primary-very-dark box-border w-[45px] h-[45px] overflow-hidden border-[2px] border-solid border-a57e8-primary">
                          <div className="absolute top-[8px] left-[8px] leading-[175%] font-medium">
                            MM
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-start justify-start gap-[147px] text-styles-todo-list">
                        <div className="relative leading-[175%] inline-block w-20 shrink-0">
                          $9,800
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start text-a92a6-text-color-2">
                          <div className="relative leading-[175%]">75%</div>
                          <img
                            className="relative w-[188px] h-2.5 object-cover"
                            alt=""
                            src="/slider-13@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[40px] w-[1064px] h-[845px] overflow-hidden text-base text-styles-total-tickets">
          <div className="absolute top-[398px] left-[0px] rounded-lg bg-styles-visitor-customer shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1064px] flex flex-col items-start justify-start p-6 box-border gap-[24px]">
            <div className="flex flex-row items-center justify-center relative gap-[337px]">
              <div className="shrink-0 flex flex-col items-start justify-start z-[0] text-lgi text-styles-todo-list">
                <div className="relative leading-[175%] font-medium">SLA</div>
                <div className="relative text-base leading-[175%] text-styles-total-tickets">
                  Holding rates last 6 months
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[16.5px] left-[918px] shrink-0 flex flex-row items-center justify-center gap-[8px] z-[1]">
                <div className="relative leading-[175%]">This Week</div>
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/iconlylightarrow--down-22@2x.png"
                />
              </div>
              <div className="my-0 mx-[!important] absolute top-[16.5px] left-[425px] shrink-0 flex flex-row items-start justify-start gap-[24px] z-[2]">
                <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative rounded-[50%] bg-styles-total-tickets w-[13px] h-[13px]" />
                  <div className="relative leading-[175%]">Our SLA</div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative rounded-[50%] bg-success-dark w-[13px] h-[13px]" />
                  <div className="relative leading-[175%]">Want SLA</div>
                </div>
              </div>
            </div>
            <div className="relative w-[1014px] h-[314px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative leading-[175%]">99</div>
                <div className="relative leading-[175%]">90</div>
                <div className="relative leading-[175%]">81</div>
                <div className="relative leading-[175%]">72</div>
                <div className="relative leading-[175%]">63</div>
                <div className="relative leading-[175%]">54</div>
              </div>
              <div className="absolute top-[279px] left-[29px] flex flex-col items-center justify-center">
                <img
                  className="relative w-[949px] h-[7px] object-cover"
                  alt=""
                  src="/group-33593@2x.png"
                />
                <div className="shrink-0 flex flex-row items-start justify-start gap-[132px]">
                  <div className="relative leading-[175%]">Jan</div>
                  <div className="relative leading-[175%]">Feb</div>
                  <div className="relative leading-[175%]">Mar</div>
                  <div className="relative leading-[175%]">Apr</div>
                  <div className="relative leading-[175%]">Jun</div>
                  <div className="relative leading-[175%]">Jul</div>
                  <div className="relative leading-[175%]">Aug</div>
                </div>
              </div>
              <img
                className="absolute top-[12px] left-[47px] w-[949px] h-[251.5px] object-cover"
                alt=""
                src="/group-33598@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[130px] w-[1392px] h-[358px] overflow-hidden">
          <SummaryCardContainer />
        </div>
        <div className="absolute top-[0px] left-[1144px] w-[479px] h-[1810px] overflow-hidden text-4xl">
          <div className="absolute top-[1217px] left-[0px] rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] flex flex-col items-start justify-start p-6 gap-[24px]">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[130%] font-medium">
                Todo list
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[7px] text-base text-styles-total-tickets">
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/iconlylightarrow--up@2x.png"
                />
                <div className="relative leading-[175%]">15% progress</div>
              </div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-[21px] h-[455px] object-cover"
                alt=""
                src="/group-390@2x.png"
              />
              <div className="shrink-0 flex flex-col items-start justify-start gap-[32px]">
                <ProgressTodoListPersonalContai propWidth="394px" />
                <ProgressTodoListPersonalContai
                  propWidth="unset"
                  propFlexShrink="0"
                />
                <ProgressTodoListPersonalContai
                  propWidth="unset"
                  propFlexShrink="0"
                />
                <ProgressTodoListPersonalContai
                  propWidth="unset"
                  propFlexShrink="0"
                />
                <ProgressTodoListPersonalContai
                  propWidth="unset"
                  propFlexShrink="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1144px] w-[479px] h-[860px] overflow-hidden text-9xl text-red">
          <div className="absolute top-[398px] left-[0px] rounded-lg bg-styles-visitor-customer shadow-[0px_10px_30px_rgba(0,_0,_6,_0.15)] overflow-hidden flex flex-col items-start justify-start">
            <div className="relative [background:radial-gradient(50%_50%_at_50%_50%,_#668ec9,_#0048b3)] w-[479px] h-[378px] overflow-hidden shrink-0 [transform:_rotate(180deg)]">
              <img
                className="absolute top-[-713.9px] left-[-1224px] w-[1546px] h-[1514.9px] object-contain [transform:_rotate(-180deg)] hidden"
                alt=""
                src="/big-circles2@2x.png"
              />
              <div className="absolute top-[428px] left-[620px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#08328c,_#0d1624)] w-[385px] h-[385px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <div className="absolute top-[309px] left-[242px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd463,_#262622)] w-[373px] h-[373px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <div className="absolute h-[84.13%] w-[93.11%] top-[92.06%] right-[-89.77%] bottom-[-76.19%] left-[96.66%] rounded-3xl bg-gray-200 [backdrop-filter:blur(64px)] box-border overflow-hidden flex flex-col items-start justify-start p-6 [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-100">
                <div className="shrink-0 flex flex-col items-start justify-start gap-[48px]">
                  <div className="w-[398px] shrink-0 flex flex-row items-start justify-start gap-[100px] text-center">
                    <div className="h-[58px] shrink-0 flex flex-col items-start justify-start">
                      <b className="relative leading-[130%] flex items-center justify-center w-[147px] h-[58px] shrink-0">
                        ACTIVE P1
                      </b>
                    </div>
                    <img
                      className="relative w-[153px] h-[58px] object-cover [transform:_rotate(-180deg)]"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                  <div className="shrink-0 flex flex-row items-end justify-center gap-[28px] text-4xl">
                    <div className="relative leading-[130%] font-medium">
                      INC
                    </div>
                    <div className="relative leading-[130%] font-medium">
                      31245125125125
                    </div>
                    <div className="relative leading-[130%] font-medium text-ffffff-bg-1 hidden">
                      2847
                    </div>
                  </div>
                  <div className="w-[398px] shrink-0 flex flex-row items-start justify-start gap-[152px] text-2xs text-ffffff-bg-1">
                    <div className="w-[131px] flex flex-col items-start justify-start gap-[7px]">
                      <div className="relative">TICKET CREATOR</div>
                      <div className="relative text-lgi leading-[175%] font-medium inline-block w-[97px]">
                        <p className="m-0">Firstname</p>
                        <p className="m-0">Lastname</p>
                      </div>
                    </div>
                    <div className="w-[115px] h-[86px] flex flex-col items-start justify-start gap-[7px]">
                      <div className="relative">Create date</div>
                      <div className="relative text-lgi leading-[175%] font-medium inline-block w-[115px] h-[26px] shrink-0">
                        2023/12/24
                      </div>
                      <div className="relative">Create time</div>
                      <div className="relative text-lgi leading-[175%] font-medium inline-block w-[115px] h-[26px] shrink-0">
                        02:05:47
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-styles-visitor-customer w-[479px] flex flex-col items-center justify-end p-6 box-border text-center text-base text-ffffff-bg-1">
              <div className="flex flex-row items-start justify-start gap-[54px]">
                <div className="rounded [background:linear-gradient(180deg,_rgba(0,_176,_92,_0.53),_rgba(0,_176,_0,_0))] w-[58px] h-8 flex flex-row items-center justify-center py-2 px-6 box-border">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/carboncheckmarkfilled1@2x.png"
                  />
                </div>
                <div className="rounded [background:linear-gradient(180deg,_#b26b41,_rgba(207,_89,_89,_0))] shrink-0 flex flex-row items-center justify-center py-2 px-6">
                  <div className="relative inline-block w-[130px] h-5 shrink-0">
                    View ticket
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1619px] w-11 h-[398px] overflow-hidden">
          <div className="absolute top-[calc(50%_+_155px)] left-[calc(50%_-_22px)] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-chocolate flex flex-row items-start justify-start p-2">
            <img
              className="relative w-7 h-7 object-cover"
              alt=""
              src="/iconlylightsetting1@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[1147px] w-[472px] h-[1177px] overflow-hidden">
          <Guides1 />
        </div>
      </div>
      <div className="absolute top-[20.5px] left-[94px] text-14xl leading-[130%] font-medium text-styles-empir-text-gul inline-block w-40">
        EMPIR
      </div>
    </div>
  );
};

export default DashboardDarkMode;
