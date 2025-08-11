import { Link } from "react-router-dom";
import Icon from "../components/ui/Icon";

const SuccessfullPage = () => {
  return (
    <section className="h-[100vh] p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="h-full bg-white flex flex-col items-center justify-center rounded-[24px]">
        <Icon.illustration />
        <h1 className="text-[22px] font-bold mt-[60px]">
          You are successfully registered!
        </h1>
        <Link
          to={"/"}
          className="mt-[24px] link flex gap-x-3 items-center"
        >
          Let's Start <Icon.rightArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default SuccessfullPage;
