import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { DotsHorizontalIcon, CheckIcon } from "@heroicons/react/outline";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={() => setIsOpen(true)}
        className="text-[#d9d9d9] flex items-center xl:w-56 justify-center xl:justify-between mt-auto hoverAnimation xl:ml-auto"
      >
        <div className="flex">
          <img
            src={session.user.image}
            alt="Profile"
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-[#6e767d]">@{session.user.tag}</p>
          </div>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative h-60 w-full" onClose={setIsOpen}>
          <div className="absolute bottom-16 left-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-transparent transition-opacity" />
            </Transition.Child>
            {/* This elm is to trick the browser into centring the modal contents :3 */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block bg-black rounded-xl
              text-left overflow-hidden transform
            transition-all align-middle
             drop-shadow-[0_0_3px_#ffffffd6]"
              >
                <div className="flex flex-col justify-center items-center">
                  <div
                    onClick={() => setIsOpen(true)}
                    className="text-[#d9d9d9] flex items-center w-full justify-between space-x-36 mt-6 px-4"
                  >
                    <div className="flex">
                      <img
                        src={session.user.image}
                        alt="Profile"
                        className="h-10 w-10 rounded-full xl:mr-2.5"
                      />
                      <div className="hidden xl:inline leading-5">
                        <h4 className="font-bold">{session.user.name}</h4>
                        <p className="text-[#6e767d]">@{session.user.tag}</p>
                      </div>
                    </div>
                    <CheckIcon className="h-6 text-blue-500" />
                  </div>
                  <div className="w-full h-[0.1px] bg-gray-700 mt-4"></div>
                  <div className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer">
                    <span className="ml-4">Add an existing account</span>
                  </div>
                  <div
                    onClick={signOut}
                    className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer"
                  >
                    <span className="ml-4">{`Log out @${session.user.tag}`}</span>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Logout;
