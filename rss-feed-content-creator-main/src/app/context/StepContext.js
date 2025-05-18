"use client";
import { createContext, useContext, useState } from "react";

const StepContext = createContext();

function StepProvider({ children }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StepContext.Provider value={{ step, setStep, isLoading, setIsLoading }}>
      {children}
    </StepContext.Provider>
  );
}

export const useStepContext = () => useContext(StepContext);
export default StepProvider;
