import Image from "next/image";
import SidebarButtons from "./SidebarButtons";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center xl:items-start
    xl:w-[340px] p-2 fixed h-full"
    >
      <div
        className="flex items-center justify-center w-14 h-14
      hoverAnimation p-0 xl:ml-24"
      >
        <Image src="/twitter-icon.jpeg" width={30} height={30} />
      </div>
      <div className="space-y-2 mt-2 mb-2.5 xl:ml-24">
        <SidebarButtons text="Home" Icon={HomeIcon} active />
        <SidebarButtons text="Explore" Icon={HashtagIcon} />
        <SidebarButtons text="Notifications" Icon={BellIcon} />
        <SidebarButtons text="Messages" Icon={InboxIcon} />
        <SidebarButtons text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarButtons text="Lists" Icon={ClipboardListIcon} />
        <SidebarButtons text="Profile" Icon={UserIcon} />
        <SidebarButtons text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white 
      rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
      >
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center xl:w-56 justify-center xl:justify-between mt-auto hoverAnimation xl:ml-auto">
        <div className="flex">
          <img
            src="https://pbs.twimg.com/profile_images/1399020768713916423/Ln2tk7R9_400x400.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">Elliop</h4>
            <p className="text-[#6e767d]">@elliop</p>
          </div>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
