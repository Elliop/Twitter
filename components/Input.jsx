import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

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
        <div className="">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg 
            placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
