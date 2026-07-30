const DesignStepper = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center gap-[8px] sm:gap-[14px] ml-2 mr-[18px]">
    <div
      onClick={onDecrease}
      className="cursor-pointer flex items-start justify-center w-[20px] h-[20px] bg-white rounded-[4px]"
    >
      <div className="w-[8px] h-[9.6px] flex items-center justify-center text-[#575757] font-bold">
        _
      </div>
    </div>

    <span className="text-[#0B0D10] text-[14px] font-semibold leading-[100%] min-w-[8px] text-center">
      {quantity}
    </span>

    <div
      onClick={onIncrease}
      className="cursor-pointer flex items-center justify-center w-[20px] h-[20px] bg-white rounded-[4px]"
    >
      <div className="w-[8px] h-[9.6px] flex items-center justify-center text-[#575757] font-bold">
        +
      </div>
    </div>
  </div>
);

export default DesignStepper;
