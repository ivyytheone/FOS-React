import MaintenanceContainer1 from "../components/MaintenanceContainer1";

const Maintenance = () => {
  return (
    <div className="relative bg-styles-login-sign-in w-full h-[1064px] overflow-hidden">
      <MaintenanceContainer1 />
      <img
        className="absolute top-[154px] left-[625px] w-[670px] h-[556px] overflow-hidden object-cover"
        alt=""
        src="/frame-35080@2x.png"
      />
      <div className="absolute top-[-92px] left-[-132px] w-[400px] h-[400px] opacity-[0.05]">
        <img
          className="absolute h-[141.43%] w-[141.43%] top-[-20.7%] right-[-20%] bottom-[-20.73%] left-[-21.42%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/logo@2x.png"
        />
      </div>
    </div>
  );
};

export default Maintenance;
