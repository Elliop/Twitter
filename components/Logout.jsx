import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { DotsHorizontalIcon, CheckIcon } from "@heroicons/react/outline";
const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={() => setIsOpen(true)}
        className="text-[#d9d9d9] flex items-center xl:w-56 justify-center xl:justify-between mt-auto hoverAnimation xl:ml-auto"
      >
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
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative h-60 w-full" onClose={setIsOpen}>
          <div className="absolute bottom-10 left-20">
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
                        src="https://pbs.twimg.com/profile_images/1399020768713916423/Ln2tk7R9_400x400.jpg"
                        alt="Profile"
                        className="h-10 w-10 rounded-full xl:mr-2.5"
                      />
                      <div className="hidden xl:inline leading-5">
                        <h4 className="font-bold">Elliop</h4>
                        <p className="text-[#6e767d]">@elliop</p>
                      </div>
                    </div>
                    <CheckIcon className="h-6 text-blue-500" />
                  </div>
                  <div className="w-full h-[0.1px] bg-slate-300 mt-8"></div>
                  <div className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer">
                    <span className="ml-4">Log out @elliop</span>
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
