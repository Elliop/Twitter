import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1399020768713916423/Ln2tk7R9_400x400.jpg"
        alt="Profile"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="divide-y divide-gray-700 w-full">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg 
            placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
          {selectedFile && (
            <div className="relative">
              <div
                onClick={() => setSelectedFile(null)}
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] 
            bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
              <input type="file" ref={filePickerRef} hidden />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
