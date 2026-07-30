import { useBundle } from "../context/BundleContext.jsx";
import ReviewLineItem from "../components/ReviewLineItem.jsx";

export default function Frame1736_ReviewPanel() {
  const { items, totals, updateQuantity, saveForLater } = useBundle();

  const cameras = Object.values(items).filter((i) => i.category === "Cameras");
  const sensors = Object.values(items).filter((i) => i.category === "Sensors");
  const accessories = Object.values(items).filter(
    (i) => i.category === "Accessories",
  );
  const plan = Object.values(items).find((i) => i.category === "Plan");
  const shipping = Object.values(items).find((i) => i.category === "Shipping");

  const hasProducts =
    cameras.length > 0 || sensors.length > 0 || accessories.length > 0;

  if (!hasProducts) {
    return null;
  }

  return (
    <div className="w-full max-w-[768px] lg:w-[399px] lg:max-w-[399px] h-fit bg-[#EDF4FF] sm:rounded-[10px] pt-[15px] font-sans flex flex-col gap-[5px] mx-auto lg:mx-0">
      <div className="text-[#484848] h-[12px] text-[12px] max-[450px]:text-[10px] font-medium leading-[100%] tracking-[1.6px] uppercase px-[15px]">
        Review
      </div>
      <div className="flex flex-col p-[15px] sm:p-[20px] pb-[31px] gap-[10px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-[#1F1F1F] text-[18px] sm:text-[22px] font-semibold leading-[100%] tracking-[0.6px]">
            Your security system
          </h2>
          <p className="text-[#1F1F1F]/[0.75] text-[12px] sm:text-[14px] font-medium leading-[130%] pr-[10px] sm:pr-[35px]">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          {cameras.length > 0 && (
            <div className="flex flex-col gap-[8px] shadow-[inset_0_1px_0_0_#CED6DE] pt-[15px]">
              <h4 className="text-[#A8B2BD] text-[10px] sm:text-[12px] font-normal leading-[16px] tracking-[3%] uppercase">
                Cameras
              </h4>
              <div className="flex flex-col gap-[12px]">
                {cameras.map((cam, idx) => (
                  <ReviewLineItem
                    key={idx}
                    imageSrc={cam.image}
                    title={cam.title}
                    variant={cam.variant}
                    quantity={cam.quantity}
                    price={`$${(cam.price * cam.quantity).toFixed(2)}`}
                    oldPrice={
                      cam.oldPrice
                        ? `$${(cam.oldPrice * cam.quantity).toFixed(2)}`
                        : null
                    }
                    onIncrease={() =>
                      updateQuantity(
                        cam,
                        { label: cam.variant },
                        1,
                        cam.category,
                      )
                    }
                    onDecrease={() =>
                      updateQuantity(
                        cam,
                        { label: cam.variant },
                        -1,
                        cam.category,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {sensors.length > 0 && (
            <div className=" shadow-[inset_0_1px_0_0_#CED6DE] pt-[15px] flex flex-col gap-[8px]">
              <h4 className="text-[#A8B2BD] text-[10px] sm:text-[12px] font-medium leading-[16px] tracking-[3%] uppercase">
                Sensors
              </h4>
              {sensors.map((sensor, idx) => (
                <ReviewLineItem
                  key={idx}
                  imageSrc={sensor.image}
                  title={sensor.title}
                  variant={sensor.variant}
                  quantity={sensor.quantity}
                  price={`$${(sensor.price * sensor.quantity).toFixed(2)}`}
                  oldPrice={
                    sensor.oldPrice
                      ? `$${(sensor.oldPrice * sensor.quantity).toFixed(2)}`
                      : null
                  }
                  isFree={sensor.isFree}
                  onIncrease={() =>
                    updateQuantity(
                      sensor,
                      { label: sensor.variant },
                      1,
                      sensor.category,
                    )
                  }
                  onDecrease={() =>
                    updateQuantity(
                      sensor,
                      { label: sensor.variant },
                      -1,
                      sensor.category,
                    )
                  }
                />
              ))}
            </div>
          )}

          {accessories.length > 0 && (
            <div className=" shadow-[inset_0_1px_0_0_#CED6DE] pt-[15px] flex flex-col gap-[8px]">
              <h4 className="text-[#A8B2BD] text-[10px] sm:text-[12px] font-medium leading-[16px] tracking-[3%] uppercase">
                Accessories
              </h4>
              {accessories.map((acc, idx) => (
                <ReviewLineItem
                  key={idx}
                  imageSrc={acc.image}
                  title={acc.title}
                  variant={acc.variant}
                  quantity={acc.quantity}
                  price={`$${(acc.price * acc.quantity).toFixed(2)}`}
                  oldPrice={
                    acc.oldPrice
                      ? `$${(acc.oldPrice * acc.quantity).toFixed(2)}`
                      : null
                  }
                  onIncrease={() =>
                    updateQuantity(acc, { label: acc.variant }, 1, acc.category)
                  }
                  onDecrease={() =>
                    updateQuantity(
                      acc,
                      { label: acc.variant },
                      -1,
                      acc.category,
                    )
                  }
                />
              ))}
            </div>
          )}

          {plan && (
            <div className="flex flex-col shadow-[inset_0_1px_0_0_#CED6DE] pt-[15px] gap-[8px]">
              <h4 className="text-[#A8B2BD] text-[10px] sm:text-[12px] font-medium leading-[16px] tracking-[3%] uppercase ">
                Plan
              </h4>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-[3px]">
                  <img
                    src="/Layer_1.svg"
                    alt="Cam Unlimited"
                    className="w-[20px] h-[23.7px] object-contain"
                  />

                  <p className="text-[14px] sm:text-[16px] font-bold text-[#0B0D10] leading-[100%] tracking-[-0.2%]">
                    Cam <span className="text-[#4E2FD2]">Unlimited</span>
                  </p>
                </div>
                <div className="flex flex-col items-end justify-center min-w-[50px]">
                  {plan.oldPrice && (
                    <span className="text-[#6F7882] text-[12px] sm:text-[14px] font-medium line-through decoration-[#6F7882] leading-[16px] tracking-[0.5%]">
                      ${plan.oldPrice.toFixed(2)}/mo
                    </span>
                  )}
                  <span className="text-[#4E2FD2] text-[14px] font-semibold leading-[16px] tracking-[0.5%]">
                    ${plan.price.toFixed(2)}/mo
                  </span>
                </div>
              </div>
            </div>
          )}

          {shipping && (
            <div className="flex flex-col gap-[8px] shadow-[inset_0_1px_0_0_#CED6DE] pt-[15px]">
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-row justify-between gap-[16px]">
                  <div className="flex items-center flex-row gap-[12px]">
                    <img
                      src="/Wyze Sense Keypad.png"
                      alt="Fast Shipping"
                      className="w-[35px] sm:w-[41px] h-[35px] sm:h-[41px] rounded-[5px] object-contain"
                    />
                    <p className="text-[#0B0D10] text-[12px] sm:text-[14px] font-medium leading-[16px] tracking-[0.5%]">
                      Fast Shipping
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center min-w-[50px]">
                    {shipping.oldPrice && (
                      <span className="text-[#6F7882] text-[12px] sm:text-[14px] font-medium line-through decoration-[#6F7882] leading-[100%] mb-[4px]">
                        ${shipping.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#4E2FD2] text-[12px] font-bold uppercase tracking-[0.5px] leading-[100%]">
                      FREE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex flex-row justify-between">
                <img
                  src="/badge.png"
                  alt="100% Satisfaction Guarantee"
                  className="w-[78px] h-[78px]"
                />

                <div className=" flex flex-col gap-[8px] items-end">
                  <div className="flex flex-row  bg-[#4E2FD2] px-[8px] py-[5px] rounded-[3px] gap-[10px]">
                    <span className=" text-white text-[12px] font-[400] leading-[100%] tracking-[-5%]">
                      as low as $19.19/mo
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-[8px]">
                    <span className="text-[#6F7882] text-[18px] font-medium line-through decoration-[#6F7882] leading-[20px] tracking-[0.25%]">
                      ${totals.original.toFixed(2)}
                    </span>
                    <span className="text-[#4E2FD2] text-[24px] font-bold leading-[32px] tracking-[-0.13%]">
                      ${totals.current.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] pt-[10px]">
                <p className="text-[#0AA288] flex items-center justify-center text-[12px] font-semibold leading-[100%] tracking-[-0.06px]">
                  Congrats! You're saving ${totals.savings.toFixed(2)} on your
                  security bundle!
                </p>

                <button className="h-[48px] bg-[#4E2FD2] rounded-[4px] py-[13px] px-[16px] flex items-center justify-center text-white text-[17px] font-bold gap-[8px] leading-[100%] hover:bg-[#391E9A] transition-colors duration-200">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              saveForLater();
            }}
            className="flex items-center justify-center text-[#484848] text-[14px] leading-[120%] tracking-[-0.02px] italic underline decoration-solid underline-offset-[2px] hover:text-black transition-colors duration-200"
          >
            Save my system for later
          </a>
        </div>
      </div>
    </div>
  );
}
