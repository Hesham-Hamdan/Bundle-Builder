import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useBundle } from "../context/BundleContext";

const ProductCard = ({
  badge,
  title,
  description,
  oldPrice,
  price,
  variants,
  image,
  category = "Cameras",
  isFree = false,
}) => {
  const { items, updateQuantity } = useBundle();

  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const activeVariant = variants ? variants[activeVariantIndex] : null;
  const currentKey = `${title}_${activeVariant ? activeVariant.label : "default"}`;

  const quantity = items[currentKey] ? items[currentKey].quantity : 0;
  const isHighlighted = Object.keys(items).some((key) =>
    key.startsWith(`${title}_`),
  );

  const displayImage =
    activeVariant && activeVariant.image ? activeVariant.image : image;

  const handleUpdate = (delta) => {
    const numericPrice = isFree ? 0 : parseFloat(price.replace("$", ""));
    const numericOldPrice = oldPrice
      ? parseFloat(oldPrice.replace("$", ""))
      : null;

    updateQuantity(
      {
        title,
        price: numericPrice,
        oldPrice: numericOldPrice,
        image: displayImage,
        isFree,
      },
      activeVariant,
      delta,
      category,
    );
  };

  return (
    <div
      className={`p-[11px] flex gap-[19px] max-[450px]:gap-[12px] rounded-[10px] bg-white transition-shadow duration-200 ${
        isHighlighted
          ? "ring-[2px] ring-inset ring-[#4E2FD2B2]"
          : "ring-[1px] ring-inset ring-[#CED6DE]"
      }`}
    >
      <div className="relative w-[101px] max-[450px]:w-[85px] h-[137px] max-[450px]:h-[115px] rounded-[5px] bg-white flex items-center justify-center flex-shrink-0 transition-all">
        {badge && (
          <div className="absolute top-[4px] left-[4px] bg-[#4E2FD2] text-white text-[12px] max-[450px]:text-[10px] font-semibold leading-[15px] px-[6px] py-[2px] rounded-[10px] whitespace-nowrap z-10">
            {badge}
          </div>
        )}
        <img
          src={displayImage}
          alt={title}
          className="object-contain w-full h-full max-h-full max-w-full p-[5px]"
        />
      </div>

      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
        <div className=" flex flex-col gap-[8px]">
          <h3 className="text-[#1F1F1F] text-[16px] max-[450px]:text-[14px] font-semibold leading-[120%] tracking-[0.6px] break-words whitespace-normal">
            {title}
          </h3>
          <span className="text-[#575757] text-[12px] max-[450px]:text-[11px] font-medium leading-[130%] tracking-[0.6px] break-words whitespace-normal">
            {description}
            <a
              href="#"
              className="text-blue-800 underline underline-offset-2 decoration-solid hover:text-purple-700 ml-1"
            >
              Learn More
            </a>
          </span>
        </div>

        {variants && (
          <div className="flex flex-row gap-[6px] flex-wrap">
            {variants.map((v, i) => (
              <div
                key={i}
                onClick={() => setActiveVariantIndex(i)}
                className={`cursor-pointer flex flex-row items-center px-[4px] py-[1px] rounded-[2px] h-[26px] max-[450px]:h-[24px] w-auto pr-2 ${
                  i === activeVariantIndex
                    ? "ring-[0.5px] ring-inset ring-[#0AA288] bg-[#1DF0BB]/[0.04]"
                    : "ring-[0.5px] ring-inset ring-[#E6EBF0] bg-white"
                }`}
              >
                <img
                  src={v.image}
                  className="w-[24px] max-[450px]:w-[20px] h-[24px] max-[450px]:h-[20px] rounded-[5px] object-contain"
                  alt={v.label}
                />
                <span className="text-[#1F1F1F] text-[10px] max-[450px]:text-[9px] font-medium leading-[100%] tracking-[0.6px] ml-1">
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-row items-center justify-between gap-[10px] max-[450px]:gap-[5px] mt-auto pt-2 flex-wrap">
          {category === "Plan" ? (
            <button
              onClick={() => handleUpdate(quantity > 0 ? -quantity : 1)}
              className={`flex items-center justify-center px-[16px] max-[450px]:px-[12px] h-[35px] max-[450px]:h-[30px] rounded-[4px] text-[14px] max-[450px]:text-[12px] font-semibold transition-colors duration-200 ${
                quantity > 0
                  ? "bg-[#4E2FD2] text-white hover:bg-[#391E9A]"
                  : "bg-[#F0F4F7] text-[#525963] hover:bg-[#e2e8ec]"
              }`}
            >
              {quantity > 0 ? "Selected" : "Add Plan"}
            </button>
          ) : (
            <div className="flex flex-row items-center w-[80px] max-[450px]:w-[70px] h-[35px] max-[450px]:h-[30px] rounded-[4px] py-[4px] gap-[10px] max-[450px]:gap-[6px] overflow-hidden">
              <button
                onClick={() => handleUpdate(-1)}
                className="w-[20px] max-[450px]:w-[18px] h-[20px] max-[450px]:h-[18px] flex flex-row items-center rounded-[4px] ring-[2px] ring-inset ring-[#E6EBF0] justify-center text-[#CED6DE] hover:bg-gray-50 transition-colors"
              >
                <Minus size={12} />
              </button>
              <span className="flex-1 text-center text-[#1F1F1F] text-[16px] max-[450px]:text-[14px] font-semibold leading-[20px]">
                {quantity}
              </span>
              <button
                onClick={() => handleUpdate(1)}
                className="w-[20px] max-[450px]:w-[18px] h-[20px] max-[450px]:h-[18px] flex flex-row items-center rounded-[4px] justify-center text-[#525963] bg-[#F0F4F7] hover:bg-[#e2e8ec] transition-colors"
              >
                <Plus size={12} />
              </button>
            </div>
          )}

          <div className="flex flex-col items-end gap-[3px] max-[450px]:gap-[1px]">
            {oldPrice && (
              <span className="text-[#D8392B] text-[16px] max-[450px]:text-[14px] tracking-[0.6px] leading-[100%] line-through decoration-[#D8392B]">
                {oldPrice}
              </span>
            )}
            <span
              className={
                isFree
                  ? "text-[#4E2FD2] font-bold text-[16px] max-[450px]:text-[14px] uppercase"
                  : "text-[#575757] text-[16px] max-[450px]:text-[14px] tracking-[0.6px] leading-[100%]"
              }
            >
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
