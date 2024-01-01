import FormContainer1 from "../components/FormContainer1";
import FormContainer3 from "../components/FormContainer3";
import FilterFormContainer1 from "../components/FilterFormContainer1";
import OpenProjectsContainer from "../components/OpenProjectsContainer";
import OpenProjectsTasksRow1 from "../components/OpenProjectsTasksRow1";
import OpenProjectsTasksRow2 from "../components/OpenProjectsTasksRow2";
import Header from "../components/Header";

const Kanban = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1897px] overflow-hidden text-left text-base text-ffffff-bg-1 font-h6-16px-regular-inter">
      <div className="absolute top-[calc(50%_-_456.5px)] left-[calc(50%_+_916px)] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-chocolate flex flex-row items-start justify-start p-2">
        <img
          className="relative w-7 h-7 object-cover"
          alt=""
          src="/iconlylightsetting@2x.png"
        />
      </div>
      <FormContainer1 />
      <FormContainer3 imageDimensions="/big-circles5@2x.png" />
      <div className="absolute top-[403px] left-[297px] bg-styles-login-sign-in flex flex-col items-start justify-start gap-[40px]">
        <FilterFormContainer1 />
        <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
          <OpenProjectsContainer
            projectStatusCount="Open Projects  05"
            propColor="#eee"
          />
          <OpenProjectsContainer
            projectStatusCount="In Progress  02"
            propColor="#ffd329"
            propWidth="136px"
            propFlexShrink="0"
            propHeight="unset"
          />
          <OpenProjectsContainer
            projectStatusCount="Reviews  01"
            propColor="#409900"
            propWidth="136px"
            propFlexShrink="0"
            propHeight="19px"
          />
          <OpenProjectsContainer
            projectStatusCount="Closed  03"
            propColor="#85f4fa"
            propWidth="136px"
            propFlexShrink="0"
            propHeight="unset"
          />
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
          <div className="rounded-lg shrink-0 flex flex-row items-start justify-start p-6 gap-[229px] border-[1px] border-dashed border-adb5bd-text-color-3">
            <div className="relative">New Task</div>
            <img
              className="relative w-3.5 h-3.5 object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
          <div className="rounded-lg shrink-0 flex flex-row items-start justify-start p-6 gap-[229px] border-[1px] border-dashed border-adb5bd-text-color-3">
            <div className="relative">New Task</div>
            <img
              className="relative w-3.5 h-3.5 object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
          <div className="rounded-lg shrink-0 flex flex-row items-start justify-start p-6 gap-[229px] border-[1px] border-dashed border-adb5bd-text-color-3">
            <div className="relative">New Task</div>
            <img
              className="relative w-3.5 h-3.5 object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
          <div className="rounded-lg shrink-0 flex flex-row items-start justify-start p-6 gap-[228px] border-[1px] border-dashed border-adb5bd-text-color-3">
            <div className="relative">New Task</div>
            <img
              className="relative w-3.5 h-3.5 object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
          <OpenProjectsTasksRow1 taskTitle="Create Sidebar in Dashboard" />
          <OpenProjectsTasksRow1 taskTitle="Notification Module Setting" />
          <OpenProjectsTasksRow1 taskTitle="Sidebar in Dashboard Themes" />
          <OpenProjectsTasksRow1 taskTitle="Login screen update in mobile app" />
        </div>
        <OpenProjectsTasksRow2 />
        <div className="rounded-lg bg-styles-visitor-customer shadow-[0px_10px_13px_rgba(17,_38,_146,_0.05)] shrink-0 flex flex-col items-start justify-start p-6 gap-[16px] text-xs">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[161px]">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-center gap-[2px]">
                <div className="relative">Dashboard plan</div>
                <img
                  className="relative w-5 h-5 shrink-0 object-cover"
                  alt=""
                  src="/frame-35600@2x.png"
                />
                <div className="relative font-public-sans">List</div>
              </div>
            </div>
            <img
              className="relative w-[22px] h-1 object-cover"
              alt=""
              src="/group-46@2x.png"
            />
          </div>
          <div className="relative text-base leading-[25px] font-public-sans">
            Product List view Changes
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative rounded w-8 h-8 shrink-0 object-cover"
              alt=""
              src="/frame-35604@2x.png"
            />
            <img
              className="relative rounded w-8 h-8 shrink-0 object-cover"
              alt=""
              src="/frame-35605@2x.png"
            />
            <img
              className="relative rounded w-8 h-8 shrink-0 object-cover"
              alt=""
              src="/frame-35606@2x.png"
            />
            <img
              className="relative rounded w-8 h-8 shrink-0 object-cover"
              alt=""
              src="/frame-35607@2x.png"
            />
          </div>
          <div className="relative w-[121px] h-10 text-sm text-slateblue">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 border-[2px] border-solid border-ffffff-bg-1">
              <div className="absolute top-[12px] left-[11px]">AT</div>
            </div>
            <div className="absolute top-[0px] left-[27px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 text-coral border-[2px] border-solid border-ffffff-bg-1">
              <div className="absolute top-[12px] left-[9px]">WE</div>
            </div>
            <div className="absolute top-[0px] left-[54px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 text-seagreen border-[2px] border-solid border-ffffff-bg-1">
              <div className="absolute top-[12px] left-[10px]">GK</div>
            </div>
            <div className="absolute top-[0px] left-[81px] rounded-lg bg-d42-text-color-1 box-border w-10 h-10 border-[2px] border-solid border-ffffff-bg-1">
              <div className="absolute top-[15px] left-[14px] w-[11px] h-[11px]">
                <div className="absolute top-[0px] left-[5px] bg-firebrick w-px h-[11px]" />
                <div className="absolute top-[5px] left-[0px] bg-firebrick w-[11px] h-px" />
              </div>
            </div>
          </div>
        </div>
        <OpenProjectsTasksRow1 taskTitle="Add Multiple theme options" />
      </div>
      <Header propTop="0px" propLeft="257px" />
      <div className="absolute top-[1829px] left-[305px] w-[1567px] h-[51px] text-a92a6-text-color-2">
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
      <div className="absolute top-[271px] left-[297px] rounded-lg bg-styles-visitor-customer w-[1584px] flex flex-row items-center justify-center p-6 box-border gap-[1339px] text-4xl font-small-text-13px-poppins">
        <div className="relative font-semibold">Kanban</div>
        <div className="rounded bg-a57e8-primary shrink-0 flex flex-row items-start justify-start py-2 px-6 text-base text-bg-color-2-fbfbfb">
          <div className="relative">Back</div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
