import clsx from "clsx";
import { useRouter } from "next/router";
import type { FC } from "react";
import { LangButtonts } from "./LangButtonts";

export const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        pathname === "/" ? "h-screen" : null,
        "px-5 pt-2.5 relative"
      )}
    >
      <div className="flex items-center justify-end gap-8 mt-4 mr-4">
        <div className="z-10 text-white">
          <LangButtonts />
        </div>
        <div
          className={clsx(
            "w-8 h-8 py-1 font-bold z-10 text-sand relative flex flex-col gap-1 items-center justify-between cursor-pointer hover:scale-x-75",
            "after:w-full after:h-1 after:bg-sand hover:after:scale-x-100",
            "before:w-full before:h-1 before:bg-sand hover:before:scale-x-50"
          )}
        >
          <span className="w-full h-1 bg-sand" />
        </div>
        {/* <button
          className="z-10 cursor-pointer ease-out duration-300"
          // onClick={handleToggle}
        >
          <div
            className={clsx(
              "w-full flex flex-col gap-1 transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]"
              // isToggled ? 'rotate-180' : null,
            )}
          >
            <div
              className={clsx(
                "w-8 h-1 bg-sand transition-all duration-300 delay-200"
                // isToggled ? 'rotate-45 translate-y-[10px]' : null,
              )}
            ></div>
            <div
              className={clsx(
                "w-8 h-1 bg-sand transition-all duration-100 delay-300"
                // isToggled ? 'bg-transparent' : 'bg-white',
              )}
            ></div>
            <div
              className={clsx(
                "w-8 h-1 bg-sand transition-all duration-300 delay-200"
                // isToggled ? '-rotate-45 -translate-y-[10px]' : null,
              )}
            ></div>
          </div>
        </button> */}
      </div>
    </header>
  );
};
