import { BsCloudCheck } from "react-icons/bs";

export const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2 ">
      <span className="text-sm px-1.5 cursor-pointer truncate">
        Untitle Document
      </span>
      <BsCloudCheck />
    </div>
  );
};
