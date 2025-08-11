// const incrementCurrentStep = () => {
// if (currentStep < totalStep) {
// const updatedSteps = progressData.map((step) =>
// step.step === currentStep ? { ...step, isSuccess: true } : step
// );
// setProgressData(updatedSteps);
// setCurrentStep((prev) => prev + 1);
// }
// };

// const decrementCurrentStep = () => {
// if (currentStep > 1) {
// const updatedSteps = progressData.map((step) =>
// step.step === currentStep - 1 ? { ...step, isSuccess: false } : step
// );
// setProgressData(updatedSteps);
// setCurrentStep((prev) => prev - 1);
// }
// };

      // <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
    //   <div className="flex h-full gap-x-8">
    //     <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
    //       <div className="flex flex-col gap-y-14 h-full items-start">
    //         <div className="mt-4 text-white gap-x-8">
    //           <Icon.companyLogo />
    //         </div>
    //         <p className="description text-white text-[40px] max-w-[400px]">
    //           Get started
    //         </p>
    //         <ProgressStep steps={progressData} currentStep={currentStep} />
    //       </div>
    //     </div>
    //     <div className="w-[100%] flex flex-col justify-between pb-[18px] max-w-[70%] rounded-[24px] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
    //       <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[75px]">
    //         <span className="font-bold text-[14px] text-[#3F8CFF]">
    //           Step {currentStep}/{totalStep}
    //         </span>
    //         <h2 className="signin-title text-[22px] font-bold">
    //           {progressData[currentStep - 1].title}
    //         </h2>
    //         {currentStep === 1 && <Step1 />}
    //         {currentStep === 2 && <Step2 />}
    //         {currentStep === 3 && <Step3 />}
    //         {currentStep === 4 && <Step4 />}
    //       </div>
    //       <div className="border-t-2 border-[#E4E6EF] pt-[18px] mt-10 flex items-center">
    //         {currentStep > 1 && (
    //           <button
    //             onClick={decrementCurrentStep}
    //             className="flex items-center gap-[5px] border-none text-[#3F8CFF] ml-[56px]"
    //           >
    //             <Icon.previusIcon />
    //             Previous
    //           </button>
    //         )}
    //         {currentStep === 4 ? (
    //           <Link
    //             to={"/successfull"}
    //             className="link flex gap-x-3 items-center ml-auto mr-10"
    //           >
    //             Next Step <Icon.rightArrowIcon />
    //           </Link>
    //         ) : (
    //           <Button
    //             onClick={incrementCurrentStep}
    //             disabled={false}
    //             variant="small"
    //             className={`flex gap-x-3 items-center ml-auto mr-10 ${
    //               !isSuccess && "disabled"
    //             }`}
    //           >
    //             Next Step
    //             <Icon.rightArrowIcon />
    //           </Button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </section>
