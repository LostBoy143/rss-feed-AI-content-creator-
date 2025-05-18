"use client";
import { createContext, useContext, useState } from "react";

const StepContext = createContext();

function StepProvider({ children }) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}

export const useStepContext = () => useContext(StepContext);
export default StepProvider;
