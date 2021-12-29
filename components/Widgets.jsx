import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Trending from "./Trending";

const trendingData = [
  {
    heading: "Blockchain Technology? How Does It Work?",
    description:
      "Blockchain: a decentralized, distributed, and oftentimes public, digital ledger consisting ...",
    img: "/Blockchain1.jpeg",
    tags: ["#Blockchain, ", "#Ethereum"],
  },
  {
    heading: "Business & finance · Trending",
    description:
      "Online virtual environment that incorporates a broad range of Internet functions",
    img: "/Metaverse.jpeg",
    tags: ["#Metaverse"],
  },
  {
    heading: "Politics · Trending",
    description: "Trump",
    tags: ["#Trump, ", "#Politics"],
  },
];

const followData = [
  {
    userImg:
      "https://pbs.twimg.com/profile_images/1399020768713916423/Ln2tk7R9_400x400.jpg",
    username: "Elliop",
    tag: "@Elliop_Sh",
    link: "https://twitter.com/Elliop_Sh",
  },
  {
    userImg:
      "https://pbs.twimg.com/profile_images/1474910968157249536/FS8-70Ie_400x400.jpg",
    username: "Elon Musk",
    tag: "@Elonmusk",
  },
  {
    userImg:
      "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    username: "React",
    tag: "@reactjs",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] 
            absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full 
            focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">{`What's happening`}</h4>
        {trendingData.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button
          className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition 
        duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
        >
          Show more
        </button>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {followData.map((result, index) => (
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition 
            duration-200 ease-out flex items-center"
            key={index}
          >
            <Image
              src={result.userImg}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                {result.username}
              </h4>
              <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
            </div>
            {result.link && (
              <a
                className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5"
                target="_blank"
                rel="noreferrer"
                href={result.link}
              >
                Follow
              </a>
            )}
            {!result.link && (
              <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
                Follow
              </button>
            )}
          </div>
        ))}
        <button
          className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer 
        transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;
