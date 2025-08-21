import { useState } from "react";
import Icon from "../components/ui/Icon";
import DateRangePicker from "../components/ui/DateRangePicker";
import person from "../assets/icons/photo.svg";
import as from "../assets/icons/Assignees.svg";
import user from "../assets/icons/photo1.svg";

interface WorkloadData {
  img_url: string;
  username: string;
  position: string;
  level: string;
}

interface userData {
  username: string;
  workload: any[];
}

const DashboardPage = ({ username, workload }: userData) => {
  console.log(workload);
  return (
    <section className="mr-[40px] mt-[50px]">
      <h3 className="text-[#7D8592] text-[16px] font-normal">
        Welcome back, {username}
      </h3>
      <div className="flex items-center justify-between mt-[10px]">
        <h1 className="text-[36px] font-bold text-[#0A1629]">Dashboard</h1>
        <DateRangePicker />
      </div>

      <div className="flex items-center justify-between mt-[28px]">
        <div className="bg-white rounded-[24px] py-[28px] px-[30px] h-[270px] w-[750px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] font-bold">Workload</h1>
            <a
              href="#"
              className="flex items-center gap-[2px] text-[#3F8CFF] text-[16px] font-semibold"
            >
              View all <Icon.right />
            </a>
          </div>
          <div className="cards mt-[20px] grid grid-cols-4 gap-4">
            {workload.map((member, index) => (
              <div
                key={index}
                className="card bg-[#F4F9FD] w-[155px] rounded-[24px] flex flex-col items-center py-[15px]"
              >
                <div className="h-[55px] w-[55px] border-[2px] border-[#3f8cff] rounded-[50%] px-[1px] py-[1px] flex items-center justify-center">
                  <img
                    src={member.img_url ? member.img_url : person}
                    alt={member.user.username}
                    className="w-[100%] h-[100%]"
                  />
                </div>
                <h3 className="mt-[10px] text-[16px] font-bold text-[#0A1629]">
                  {member.user.username}
                </h3>
                <h4 className="text-[14px] font-normal text-[#0A1629]">
                  {member.user.position}
                </h4>
                <p className="mt-[9px] text-[12px] text-[#7D8592] font-semibold border border-[#7D8592] rounded-[7px] p-[4px_4px]">
                  {member.user.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[339px] bg-white rounded-[24px] px-[20px] py-[24px] h-[270px]">
          <div className="flex items-center justify-between">
            <h1>Nearest Events</h1>
            <a
              href="#"
              className="flex items-center gap-[2px] text-[#3F8CFF] text-[16px] font-semibold"
            >
              View all <Icon.right />
            </a>
          </div>
          <div className="flex items-center mt-[24px] h-[74px] gap-4">
            <div className="bg-[#3F8CFF] w-[4px] rounded-[2px] h-[74px]"></div>
            <div className="flex flex-col justify-between w-[185px] h-[74px]">
              <h1 className="text-[16px] font-bold text-[#0A1629]">
                Presentation of the new department
              </h1>
              <p className="text-[14px] font-normal text-[#91929E]">
                Today | 5:00 PM
              </p>
            </div>
            <div className="flex flex-col justify-between h-[74px] items-end">
              <Icon.topOrange />
              <span className="bg-[#F4F9FD] rounded-[8px] flex items-center gap-1 py-[6px] px-[12px]">
                <Icon.clock /> 4h
              </span>
            </div>
          </div>
          <div className="flex items-center mt-[24px] h-[74px] gap-4">
            <div className="bg-[#DE92EB] w-[4px] rounded-[2px] h-[74px]"></div>
            <div className="flex flex-col justify-between w-[185px] h-[74px]">
              <h1 className="text-[16px] font-bold text-[#0A1629]">
                Anna's Birthday
              </h1>
              <p className="text-[14px] font-normal text-[#91929E]">
                Today | 6:00 PM
              </p>
            </div>
            <div className="flex flex-col justify-between h-[74px] items-end">
              <Icon.bottomGreen />
              <span className="bg-[#F4F9FD] rounded-[8px] flex items-center gap-1 py-[6px] px-[12px]">
                <Icon.clock /> 4h
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[52px]">
        <div className="left w-[750px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] font-bold">Projects</h1>
            <a
              href="#"
              className="flex items-center gap-[2px] text-[#3F8CFF] text-[16px] font-semibold"
            >
              View all <Icon.right />
            </a>
          </div>
          <div className="flex items-center h-[148px] bg-white rounded-[24px] py-[24px] w-[750px] mt-[20px]">
            <div className="flex flex-col justify-between h-[100%] w-[300px]">
              <div className="top flex items-center gap-[16px]">
                <div className="top-left ml-[24px]">
                  <Icon.project />
                </div>
                <div className="top-right flex flex-col justify-between">
                  <p className="text-[14px] font-normal text-[#91929E]">
                    PN0001265
                  </p>
                  <h3 className="text-[18px] font-bold text-[#0A1629]">
                    Medical App (iOS native)
                  </h3>
                </div>
              </div>
              <div className="bottom ml-[24px] flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-[14px] text-[#7D8592] font-semibold">
                  <Icon.calendar /> Created Sep 12, 2020
                </h1>
                <a href="#" className="text-[#FFBD21] flex items-center gap-1">
                  <Icon.topOrange /> Medium
                </a>
              </div>
            </div>
            <div className="bg-[#E4E6E8] w-[1px] h-[100%] ml-[44px] mr-[44px]"></div>
            <div className="w-[300px] flex flex-col justify-between h-[100%]">
              <h1 className="text-[16px] font-bold text-[#0A1629]">
                Project Data
              </h1>
              <div className="flex items-center justify-between w-[100%]">
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    All tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">34</h2>
                </div>
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    Active tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">13</h2>
                </div>
                <div>
                  <img src={as} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center h-[148px] bg-white rounded-[24px] py-[24px] w-[750px] mt-[20px]">
            <div className="flex flex-col justify-between h-[100%] w-[300px]">
              <div className="top flex items-center gap-[16px]">
                <div className="top-left ml-[24px]">
                  <Icon.project />
                </div>
                <div className="top-right flex flex-col justify-between">
                  <p className="text-[14px] font-normal text-[#91929E]">
                    PN0001221
                  </p>
                  <h3 className="text-[18px] font-bold text-[#0A1629]">
                    Food Delivery Service
                  </h3>
                </div>
              </div>
              <div className="bottom ml-[24px] flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-[14px] text-[#7D8592] font-semibold">
                  <Icon.calendar /> Created Sep 10, 2020
                </h1>
                <a href="#" className="text-[#FFBD21] flex items-center gap-1">
                  <Icon.topOrange /> Medium
                </a>
              </div>
            </div>
            <div className="bg-[#E4E6E8] w-[1px] h-[100%] ml-[44px] mr-[44px]"></div>
            <div className="w-[300px] flex flex-col justify-between h-[100%]">
              <h1 className="text-[16px] font-bold text-[#0A1629]">
                Project Data
              </h1>
              <div className="flex items-center justify-between w-[100%]">
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    All tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">50</h2>
                </div>
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    Active tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">24</h2>
                </div>
                <div>
                  <img src={as} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-[339px] bg-white rounded-[24px] py-[28px] px-[30px]">
          <h1 className="text-[22px] font-bold text-[#0A1629]">
            Activity Stream
          </h1>
          <div className="flex items-center gap-[18px] mt-[24px]">
            <img src={user} alt="" />
            <div className="flex flex-col justify-between">
              <h3 className="text-[16px] font-bold text-[#0A1629]">
                Oscar Holloway
              </h3>
              <h3 className="text-[14px] font-normal text-[#91929E]">
                UI/UX Designer
              </h3>
            </div>
          </div>
          <div className="flex items-start gap-4 py-[15px] bg-[#f4f9fd] mt-[18px] rounded-[24px]">
            <span className="ml-[20px]">
              <Icon.upload />
            </span>
            <h3 className="w-[221px] text-[16px] font-normal">
              Updated the status of Mind Map task to In Progress
            </h3>
          </div>
          <div className="flex items-start gap-4 py-[15px] bg-[#f4f9fd] mt-[18px] rounded-[18px]">
            <span className="ml-[20px]">
              <Icon.link />
            </span>
            <h3 className="w-[221px] text-[16px] font-normal">
              Attached files to the task
            </h3>
          </div>
          <div className="flex items-center w-[100%] justify-center">
            <a
              href="#"
              className="flex items-center text-[16px] font-semibold text-[#3F8CFF] gap-1 mt-[21px]"
            >
              View more
              <Icon.bottomIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
