import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import type { HeadlineControlsProps } from "@/types/types";

export const HeadlineControls: React.FC<HeadlineControlsProps> = ({
  current,
  count,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex flex-row items-center justify-center text-secondary-text gap-x-4">
      <button
        onClick={onPrev}
        disabled={current === 1}
        className="px-4 disabled:opacity-50"
      >
        <BsChevronLeft />
      </button>
      {current} dari {count}
      <button
        onClick={onNext}
        disabled={current === count}
        className="px-4 disabled:opacity-50"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};
