import { useBundle } from "../context/BundleContext.jsx";

const AccordionSection = ({
  stepNum,
  title,
  iconSrc,
  category,
  isOpen,
  onToggle,
  onNext,
  nextText,
  children,
}) => {
  const { items } = useBundle();

  const selectedCount = new Set(
    Object.values(items)
      .filter((item) => item.category === category)
      .map((item) => item.title),
  ).size;

  if (isOpen) {
    return (
      <div className="w-full bg-[#EDF4FF] font-sans flex flex-col gap-[5px] pt-[15px] sm:rounded-[10px] ">
        <div className="flex flex-row px-[15px]">
          <p className="text-[#484848] text-[12px] max-[450px]:text-[10px] font-medium leading-[100%] uppercase tracking-[1.6px]">
            Step {stepNum} of 4
          </p>
        </div>
        <div className="flex flex-col py-[20px] max-[450px]:py-[15px] px-[15px] max-[450px]:px-[12px] gap-[15px] shadow-[inset_0_0.5px_0_0_#1F1F1F]">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={onToggle}
          >
            <div className="flex flex-row gap-[8px] items-center justify-between">
              <img
                src={iconSrc}
                className="w-[26px] max-[450px]:w-[20px] h-[26px] max-[450px]:h-[20px] object-contain"
              />
              <h2 className="text-[#0B0D10] text-[22px] max-[450px]:text-[18px] font-semibold leading-[100%]">
                {title}
              </h2>
            </div>

            <div className="flex flex-row items-center gap-[4px]">
              {selectedCount > 0 && (
                <span className="text-[#4E2FD2] text-[14px] max-[450px]:text-[12px] font-medium justify-center leading-[16px] whitespace-nowrap">
                  {selectedCount} selected
                </span>
              )}
              <img
                src="./up.svg"
                className="w-[12px] max-[450px]:w-[10px] h-[12px] max-[450px]:h-[10px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">{children}</div>

          {onNext && (
            <div className="flex justify-center mt-[5px]">
              <button
                onClick={onNext}
                className="flex items-center justify-center w-min-[242px] max-[450px]:w-full h-[39px] ring-[1px] ring-inset ring-[#4E2FD2] py-[5px] px-[24px] rounded-[7px] text-[#4E2FD2] text-[18px] max-[450px]:text-[16px] font-semibold leading-[24px] hover:bg-[#EDF4FF] transition-colors duration-200 whitespace-nowrap"
              >
                Next: {nextText}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[5px] w-full">
      <div className="flex flex-row items-center px-[15px]">
        <p className="text-[#484848] text-[10px] font-medium leading-[100%] uppercase tracking-[1.6px]">
          Step {stepNum} of 4
        </p>
      </div>
      <div
        onClick={onToggle}
        className="flex justify-between items-center h-[67px] max-[450px]:h-[55px] shadow-[inset_0_0.5px_0_0_#1F1F1F,inset_0_-0.5px_0_0_#1F1F1F] px-[15px] max-[450px]:px-[12px] py-[20px] max-[450px]:py-[15px] cursor-pointer hover:bg-[#F8F9FA] transition-colors duration-200"
      >
        <div className="flex flex-row items-center gap-[8px] h-[27px]">
          <img
            src={iconSrc}
            alt={`Step ${stepNum} icon`}
            className="w-[26px] max-[450px]:w-[20px] h-[27px] max-[450px]:h-[20px] object-contain"
          />
          <h3 className="text-[#0B0D10] text-[22px] max-[450px]:text-[18px] font-semibold leading-[100%]">
            {title}
          </h3>
        </div>

        <div className="flex flex-row gap-[4px] items-center">
          {selectedCount > 0 && (
            <span className="text-[#4E2FD2] text-[14px] max-[450px]:text-[12px] font-medium justify-center leading-[16px] mr-1 whitespace-nowrap">
              {selectedCount} selected
            </span>
          )}
          <img
            src="/carrot-down.png"
            alt="Expand step"
            className="object-contain w-[12px] max-[450px]:w-[10px] h-[12px] max-[450px]:h-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
