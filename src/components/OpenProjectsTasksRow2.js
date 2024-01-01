import { memo } from "react";
import OpenProjectsTasksRow1 from "./OpenProjectsTasksRow1";

const OpenProjectsTasksRow2 = memo(() => {
  return (
    <div className="shrink-0 flex flex-row items-start justify-start gap-[446px]">
      <div className="shrink-0 flex flex-row items-start justify-start gap-[40px]">
        <OpenProjectsTasksRow1 taskTitle="General Improvement in Landing pages" />
        <OpenProjectsTasksRow1 taskTitle="Admin Panel Customization" />
      </div>
      <OpenProjectsTasksRow1 taskTitle="Helpdesk in Dashboard Themes" />
    </div>
  );
});

export default OpenProjectsTasksRow2;
