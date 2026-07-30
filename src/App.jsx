import BundleBuilder from "./layouts/BundleBuilder.jsx";
import ReviewPanel from "./layouts/ReviewPanel.jsx";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 justify-center items-center lg:items-start py-5 md:px-8 max-w-[1250px] mx-auto w-full">
      <BundleBuilder />
      <ReviewPanel />
    </div>
  );
}
