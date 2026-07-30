import { useState } from "react";
import data from "../data/data.json";
import ProductCard from "../components/ProductCard.jsx";
import AccordionSection from "../components/AccordionSection.jsx";

export default function BundleBuilder() {
  const [openStep, setOpenStep] = useState(1);

  const handleToggle = (stepNum) => {
    setOpenStep(openStep === stepNum ? null : stepNum);
  };

  const handleNext = (nextStepNum) => {
    setOpenStep(nextStepNum);
  };

  return (
    <div className="flex flex-col gap-[13px] w-full max-w-[768px]">
      <h1 className="block lg:hidden text-[32px] font-bold text-[#1F1F1F] text-center w-full mb-[5px] leading-[110.00000000000001%] tracking-[-0.06px]">
        Let's get started!
      </h1>

      <AccordionSection
        stepNum={1}
        title="Choose your cameras"
        iconSrc="./cam.svg"
        category="Cameras"
        isOpen={openStep === 1}
        onToggle={() => handleToggle(1)}
        onNext={() => handleNext(2)}
        nextText="Choose your plan"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {data.catalog.cameras.slice(0, 2).map((cam, idx) => (
            <ProductCard key={`cam1-${idx}`} {...cam} category="Cameras" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {data.catalog.cameras.slice(2, 4).map((cam, idx) => (
            <ProductCard key={`cam2-${idx}`} {...cam} category="Cameras" />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-[calc(50%-7.5px)]">
            {data.catalog.cameras.slice(4, 5).map((cam, idx) => (
              <ProductCard key={`cam3-${idx}`} {...cam} category="Cameras" />
            ))}
          </div>
        </div>
      </AccordionSection>

      <AccordionSection
        stepNum={2}
        title="Choose your plan"
        iconSrc="/shield.svg"
        category="Plan"
        isOpen={openStep === 2}
        onToggle={() => handleToggle(2)}
        onNext={() => handleNext(3)}
        nextText="Choose your sensors"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {data.catalog.plans.map((plan, idx) => (
            <ProductCard key={`plan-${idx}`} {...plan} category="Plan" />
          ))}
        </div>
      </AccordionSection>

      <AccordionSection
        stepNum={3}
        title="Choose your sensors"
        iconSrc="/radio.svg"
        category="Sensors"
        isOpen={openStep === 3}
        onToggle={() => handleToggle(3)}
        onNext={() => handleNext(4)}
        nextText="Add extra protection"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {data.catalog.sensors.map((sensor, idx) => (
            <ProductCard
              key={`sensor-${idx}`}
              {...sensor}
              category="Sensors"
              isFree={sensor.isFree}
            />
          ))}
        </div>
      </AccordionSection>

      <AccordionSection
        stepNum={4}
        title="Add extra protection"
        iconSrc="/cal.svg"
        category="Accessories"
        isOpen={openStep === 4}
        onToggle={() => handleToggle(4)}
        onNext={null}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {data.catalog.accessories.map((acc, idx) => (
            <ProductCard key={`acc-${idx}`} {...acc} category="Accessories" />
          ))}
        </div>
      </AccordionSection>
    </div>
  );
}
