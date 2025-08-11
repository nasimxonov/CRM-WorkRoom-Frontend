import "../../assets/styles/input.css";
import SelectInput from "../ui/SelectInput";

const Step2 = () => {
  return (
    <div className="max-w-[403px]">
      <form className="flex w-full flex-col gap-y-[31px] mt-[33px]">
        <SelectInput
          label="Why will you use the service?"
          options={[
            { value: "work", label: "Work" },
            { value: "personal", label: "Personal" },
            { value: "education", label: "Education" },
            { value: "research", label: "Research" },
            { value: "other", label: "Other" },
          ]}
        />
        <SelectInput
          label="What describes you best?"
          options={[
            { value: "businessowner", label: "Business Owner" },
            { value: "student", label: "Student" },
            { value: "professional", label: "Professional" },
            { value: "entrepreneur", label: "Entrepreneur" },
            { value: "freelancer", label: "Freelancer" },
            { value: "hobbyist", label: "Hobbyist" },
            { value: "other", label: "Other" },
          ]}
        />
        <div className="flex items-center justify-between">
          <label className="label">What describes you best?</label>
          <div className="flex items-center gap-[14px]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="desc" value="yes" />
              <span>Yes</span>
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="desc" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
