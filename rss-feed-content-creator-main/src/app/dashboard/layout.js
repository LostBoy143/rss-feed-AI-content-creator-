"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ContentProvider } from "../context/ContentContext";
import TextArea from "../components/TextArea";
import RouteChangeHandler from "../components/RouteChangeHandler";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingFull";
import SideBarMenu from "../components/SideBarMenu";
import StepProvider, {
  useStepContext,
} from "../context/StepContext";
import BackButton from "../components/BackButton";

const inter = Inter({ subsets: ["latin"] });

function LayoutContent({ children }) {
  const { step, setStep, isLoading } =
    useStepContext();

  return (
    <>
      <Header />
      {/* desktop view */}
      <div className="hidden lg:block">
        <div className="flex mt-10 min-w-full h-screen overflow-hidden justify-between">
          <Sidebar />
          <div className="bg-black text-white flex-1 flex flex-col md:flex-row justify-around overflow-y-auto">
            <div className="flex-1 p-10 ">
              <h2 className="py-5 px-5 text-xl block mb-4 font-medium text-gray-300 ">
                Here are your results 👇
              </h2>
              <Suspense
                fallback={<LoadingSpinner />}
              >
                <RouteChangeHandler>
                  <div>{children}</div>
                </RouteChangeHandler>
              </Suspense>
            </div>

            <TextArea />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="lg:hidden mt-12">
        <div className="bg-black min-h-screen text-white flex-1 flex flex-col md:flex-row justify-around overflow-y-auto">
          {step === 1 && (
            <div className="flex-1 p-4 ">
              <h2 className="py-5 px-5 text-xl block mb-4 font-medium text-gray-200 ">
                Choose your favourite topic and
                start surfing!
              </h2>
              <div className="flex flex-col gap-4">
                <SideBarMenu setStep={setStep} />
              </div>
            </div>
          )}
          {step === 2 && (
            <Suspense
              fallback={<LoadingSpinner />}
            >
              <RouteChangeHandler
                setStep={setStep}
              >
                <div className="mt-8 ml-4 flex flex-col w-full justify-left">
                  <BackButton />
                </div>
                <div>{children}</div>
              </RouteChangeHandler>
            </Suspense>
          )}
          {step === 3 && (
            <div className="flex-1 p-4">
              <div className="mt-8 ml-4 flex w-full justify-left">
                <BackButton />
              </div>{" "}
              <h2 className="py-5 px-5 text-xl block mb-4 font-medium text-gray-300 ">
                Here are your results 👇
              </h2>
              <TextArea />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <ContentProvider>
      <StepProvider>
        <html lang="en">
          <body>
            <LayoutContent>
              {children}
            </LayoutContent>
          </body>
        </html>
      </StepProvider>
    </ContentProvider>
  );
}
