import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { data, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardPage from "../pages/DashboardPage";
import { useGetMe } from "../hooks/requests/useGetMe";
import { useGetWorkload } from "../hooks/requests/useGetWorkload";
import Profile from "../pages/Profile";

interface UserData {
  img_url?: string;
  email: string;
  username: string;
  position: string;
  level: string;
  company: string;
  phone_number: string;
}

interface WorkloadData {
  img_url: string;
  username: string;
  position: string;
  level: string;
}

const RootLayout = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [workloadDatas, setWorkloadData] = useState<WorkloadData[] | null>(
    null
  );
  const [isProfile, setIsProfile] = useState(true);

  const { data, isFetching, isLoading, isSuccess } = useGetMe();
  const { workloadData, Success, fetching, loading } = useGetWorkload();
  useEffect(() => {
    if (isSuccess && data) {
      setUserData(data.user);
    }
  }, [isSuccess, data]);
  useEffect(() => {
    if (isSuccess && data) {
      setWorkloadData(workloadData.updatedMembers);
    }
  }, [Success, workloadData]);

  if (isLoading || isFetching || !userData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex bg-[rgba(244,_249,_253,_1)]">
        <Sidebar />
        <div className="grow">
          <Header
            img_url={userData?.img_url || null}
            username={userData?.username || "John Doe"}
            setIsProfile={setIsProfile}
            isProfile={isProfile}
          />
          {isProfile === false ? (
            <DashboardPage
              username={userData?.username || "John Doe"}
              workload={workloadDatas || []}
            />
          ) : (
            <Profile data={userData} />
          )}
        </div>
      </div>
    </>
  );
};

export default RootLayout;
