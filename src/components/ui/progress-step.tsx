import Icon from "./Icon";

interface ProgressProps {
  currentStep: number;
  previusStepSuccess: boolean;
  previusSteps: number[];
  steps: number;
}

const progressStepsChars = [
  "Valid your phone",
  "Tell about yourself",
  "Tell about your company",
  "Invite team Members",
];

const ProgressStep = ({
  steps,
  currentStep,
  previusStepSuccess,
  previusSteps,
}: ProgressProps) => {
  const stepsArray = new Array(steps).fill(1).map((item, index) => {
    return progressStepsChars[index];
  });
  return (
    <div className="flex gap-y-1.5 gap-x-[22px]">
      <div className="flex flex-col justify-between items-center gap-[6px]">
        {stepsArray.map((steps, index) => {
          return (
            <>
              {previusStepSuccess && previusSteps.includes(index + 1) ? (
                <>
                  <div
                    className={`w-[24px] h-[24px] rounded-full border-2 bg-white border-none flex items-center justify-center`}
                  >
                    <Icon.correctIcon />
                  </div>
                  {index < stepsArray.length - 1 && (
                    <div
                      className={`w-[2px] h-[26px] bg-white rounded-[1px]`}
                    ></div>
                  )}
                </>
              ) : (
                <>
                  <div
                    style={{ backgroundColor: "#79afff" }}
                    className={`w-[24px] h-[24px] ${
                      index !== currentStep - 1 ? "opacity-30" : ""
                    }  rounded-full border-2 border-white`}
                  ></div>
                  {index < stepsArray.length - 1 && (
                    <div
                      className={`w-[2px] h-[26px] ${
                        index !== currentStep - 1 && "opacity-30"
                      } bg-white rounded-[1px]`}
                    ></div>
                  )}
                </>
              )}
            </>
          );
        })}
      </div>

      <div className="flex flex-col justify-between text-[18px] font-semibold text-white">
        {stepsArray.map((stepTitle, index) => {
          return (
            <>
              {previusStepSuccess && previusSteps.includes(index + 1) ? (
                <span className={`block text-white `}>{stepTitle}</span>
              ) : (
                <span
                  className={`block text-white ${
                    index !== currentStep - 1 && "opacity-30"
                  }`}
                >
                  {stepTitle}
                </span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStep;
