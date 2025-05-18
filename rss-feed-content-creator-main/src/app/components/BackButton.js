import { useStepContext } from "../context/StepContext";

const BackButton = () => {
  const { setStep } = useStepContext();
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setStep((prev) => prev - 1)}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
