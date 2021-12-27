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
      <div className="space-y-2 mt-4 mb-2.5 xl:ml-24">
        <SidebarButtons text="Home" Icon={HomeIcon} active />
        <SidebarButtons text="Explore" Icon={HashtagIcon} />
        <SidebarButtons text="Notifications" Icon={BellIcon} />
        <SidebarButtons text="Messages" Icon={InboxIcon} />
        <SidebarButtons text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarButtons text="Lists" Icon={ClipboardListIcon} />
        <SidebarButtons text="Profile" Icon={UserIcon} />
        <SidebarButtons text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
