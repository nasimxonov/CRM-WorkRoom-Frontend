import Icon from "../components/ui/Icon";
import person from "../assets/icons/photo.svg";
import Input from "../components/ui/Input";
import as from "../assets/icons/Assignees.svg";
import { useEffect, useState } from "react";
import { useGetMe } from "../hooks/requests/useGetMe";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUpdateUserData } from "../hooks/requests/useUpdateUserData";
import { toast } from "react-toastify";

interface UserData {
  img_url?: string;
  email: string;
  username: string;
  position: string;
  level: string;
  company: string;
  phone_number: string;
}

interface UpdateUserData {
  email: string;
  username: string;
  position: string;
  level: string;
  company: string;
  phone_number: string;
}

const Profile = ({ data }: { data: UserData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UpdateUserData>();
  const { updateData, error, isError, isPending, isSuccess, mutateAsync } =
    useUpdateUserData();
  const onLogin: SubmitHandler<UpdateUserData> = ({
    email,
    company,
    level,
    phone_number,
    position,
  }) => {
    mutateAsync({ email, company, level, phone_number, position });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully updated");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);
  return (
    <section className="pr-[40px] mt-[50px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[36px] font-bold text-[#405069]">My Profile</h1>
        <div className="bg-white p-[14px_14px] rounded-[14px]">
          <Icon.settingIcon />
        </div>
      </div>
      <div className="flex items-start gap-[30px] mt-[14px]">
        <form
          onSubmit={handleSubmit(onLogin)}
          className="w-[265px] bg-white rounded-[24px]"
        >
          <div className="p-[24px_24px] w-[100%]">
            <div className="pr-top flex items-start justify-between">
              <div className="w-[64px] h-[64px] rounded-[50%] border-[2px] border-[#3F8CFF]">
                <img
                  src={data.img_url ? data.img_url : person}
                  alt=""
                  className="w-[100%] h-[100%]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#F4F9FD] rounded-[14px] p-[12px_12px]"
              >
                <Icon.editIcon />
              </button>
            </div>
            <h1 className="text-[22px] font-bold text-[#0A1629] mt-[8px]">
              {data.username}
            </h1>
            <h3 className="text-[#0A1629] text-[14px] font-normal">
              {data.position ? data.position : "UI/UX Designer"}
            </h3>
          </div>
          <div className="h-[1px] bg-[#E4E6E8] mt-[20px]"></div>
          <div className="p-[24px_24px] mt-[10px]">
            <h1 className="text-[18px] font-bold text-[#0A1629]">Main info</h1>
            <div className="flex flex-col gap-[8px]">
              <Input
                inputClassName="w-full"
                type="text"
                label="Position"
                placeholder={data.position ? data.position : "UI/UX Designer"}
                {...register("position")}
              />
              <Input
                inputClassName="w-full"
                type="text"
                label="Company"
                placeholder={data.position ? data.company : "Cadabra"}
                {...register("company")}
              />
              <Input
                inputClassName="w-full"
                type="text"
                label="Level"
                placeholder={data.level ? data.level : "Middle"}
                {...register("level")}
              />
              <h1 className="text-[18px] font-bold text-[#0A1629] mt-[33px]">
                Contact Info
              </h1>
              <Input
                inputClassName="w-full"
                type="email"
                label="Email"
                placeholder={data.email ? data.email : "evanyates@gmail.com"}
                {...register("email")}
              />
              <Input
                inputClassName="w-full"
                type="tel"
                label="Mobile Number"
                placeholder={
                  data.phone_number ? data.phone_number : "+998901234567"
                }
                {...register("phone_number")}
              />
            </div>
          </div>
        </form>

        <div>
          <div className="flex items-center justify-between w-[850px]">
            <div className="h-[58px] flex items-center justify-between bg-[#E6EDF5] rounded-[24px] p-[8px_8px]">
              <button className="bg-[#3F8CFF] text-[16px] font-bold w-[150px] h-[100%] rounded-[24px] flex items-center justify-center text-white">
                Projects
              </button>
              <button className="w-[150px] text-[16px] font-bold h-[100%] flex items-center justify-center">
                Team
              </button>
              <button className="w-[150px] text-[16px] font-bold h-[100%] flex items-center justify-center">
                My vacations
              </button>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="bg-white py-[14px] px-[15px] rounded-[18px]">
                <Icon.notification />
              </div>
              <div className="flex items-center gap-1 bg-white rounded-[12px] px-[19px] py-[12px]">
                <h1>Current Projects</h1>
                <Icon.bottomArrowIcon2 />
              </div>
            </div>
          </div>
          <div className="flex items-center h-[148px] bg-white rounded-[24px] py-[24px] w-[850px] mt-[20px]">
            <div className="flex flex-col justify-between h-[100%] w-[350px]">
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
            <div className="w-[350px] flex flex-col justify-between h-[100%]">
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

          <div className="flex items-center h-[148px] bg-white rounded-[24px] py-[24px] w-[850px] mt-[20px]">
            <div className="flex flex-col justify-between h-[100%] w-[350px]">
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
            <div className="w-[350px] flex flex-col justify-between h-[100%]">
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

          <div className="flex items-center h-[148px] bg-white rounded-[24px] py-[24px] w-[850px] mt-[20px]">
            <div className="flex flex-col justify-between h-[100%] w-[350px]">
              <div className="top flex items-center gap-[16px]">
                <div className="top-left ml-[24px]">
                  <Icon.project />
                </div>
                <div className="top-right flex flex-col justify-between">
                  <p className="text-[14px] font-normal text-[#91929E]">
                    PN0001290
                  </p>
                  <h3 className="text-[18px] font-bold text-[#0A1629]">
                    Internal Project
                  </h3>
                </div>
              </div>
              <div className="bottom ml-[24px] flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-[14px] text-[#7D8592] font-semibold">
                  <Icon.calendar /> Created May 28, 2020
                </h1>
                <a href="#" className="text-[#0AC947] flex items-center gap-1">
                  <Icon.bottom /> Low
                </a>
              </div>
            </div>
            <div className="bg-[#E4E6E8] w-[1px] h-[100%] ml-[44px] mr-[44px]"></div>
            <div className="w-[350px] flex flex-col justify-between h-[100%]">
              <h1 className="text-[16px] font-bold text-[#0A1629]">
                Project Data
              </h1>
              <div className="flex items-center justify-between w-[100%]">
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    All tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">23</h2>
                </div>
                <div>
                  <h4 className="text-[14px] font-normal text-[#91929E]">
                    Active tasks
                  </h4>
                  <h2 className="text-[16px] font-bold text-[#0A1629]">20</h2>
                </div>
                <div>
                  <img src={as} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
