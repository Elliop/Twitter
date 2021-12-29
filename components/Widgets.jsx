import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";

const trendingData = [
  {
    heading: "Blockchain Technology? How Does It Work?",
    description:
      "Blockchain: a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions ...",
    img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    tags: ["#Blockchain, ", "#Ethereum"],
  },
  {
    heading: "Business & finance · Trending",
    description:
      "online virtual environment that incorporates a broad range of Internet functions",
    img: "https://images.theconversation.com/files/429939/original/file-20211103-25-13vyyra.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    tags: ["#Metaverse"],
  },
  {
    heading: "Politics · Trending",
    description: "Trump",
    img: "https://rb.gy/jvuy4v",
    tags: ["#Trump, ", "#Politics"],
  },
];

const followData = [
  {
    userImg:
      "https://pbs.twimg.com/profile_images/1399020768713916423/Ln2tk7R9_400x400.jpg",
    username: "Elliop",
    tag: "@Elliop_Sh",
  },
  {
    userImg:
      "https://pbs.twimg.com/profile_images/1474910968157249536/FS8-70Ie_400x400.jpg",
    username: "Elon Musk",
    tag: "@Elonmusk",
  },
  {
    userImg:
      "https://pbs.twimg.com/profile_images/1466001345324875784/4RrjsTR__400x400.jpg",
    username: "Binance",
    tag: "@Binance",
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
        <h4 className="font-bold text-xl px-4">What's happening</h4>
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
    </div>
  );
};

export default Widgets;
