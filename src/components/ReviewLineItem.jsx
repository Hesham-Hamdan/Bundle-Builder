import DesignStepper from "./DesignStepper.jsx";

const ReviewLineItem = ({
  imageSrc,
  title,
  variant,
  quantity,
  price,
  oldPrice,
  isFree,
  hideStepper,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex justify-between items-center w-full flex-row gap-[10px] sm:gap-[16px]">
      <div className="flex flex-row items-center gap-[10px] sm:gap-[12px] flex-shrink">
        <div className="w-[35px] sm:w-[41px] h-[35px] sm:h-[41px] rounded-[5px] bg-white flex items-center justify-center shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-[28px] sm:max-w-[32px] max-h-[28px] sm:max-h-[32px] object-contain"
          />
        </div>
        <div className="flex flex-col break-words">
          <span className="text-[#0B0D10] text-[12px] sm:text-[14px] font-medium leading-[120%] sm:leading-[100%]">
            {title}
          </span>
          {variant && (
            <span className="text-[#575757] text-[11px] sm:text-[12px] font-medium mt-[4px] leading-[100%]">
              {variant}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center flex-shrink-0">
        {!hideStepper && quantity > 0 && (
          <DesignStepper
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        )}

        <div className="flex flex-col items-end justify-center min-w-[45px] sm:min-w-[50px]">
          {oldPrice && (
            <span className="text-[#6F7882] text-[12px] sm:text-[14px] font-medium line-through decoration-[#6F7882] leading-[100%] mb-[4px]">
              {oldPrice}
            </span>
          )}
          {isFree ? (
            <span className="text-[#4E2FD2] text-[12px] font-bold uppercase tracking-[0.5px] leading-[100%]">
              FREE
            </span>
          ) : (
            <span className="text-[#4E2FD2] text-[14px] font-semibold leading-[100%]">
              {price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewLineItem;
