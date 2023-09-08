import { useState, useEffect, FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isOpenM: boolean;
  closeModal: () => void;
}

export const Login: FC<Props> = ({ isOpenM, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpenM);
  useEffect(() => {
    setIsModalOpen(isOpenM);
  }, [isOpenM]);
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className=" relative z-10"
          /* open={isModalOpen} */
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* you can add this to make the backgroud dark "bg-black bg-opacity-25"*/}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black text-center"
                  >
                    Sign In
                  </Dialog.Title>
                  <div className="mt-2">
                   <form>
                   <div className="mb-4">
                <label  class="block text-gray-600 text-sm font-medium">Email</label>
                <input type="text" id="name" name="name" className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="John Doe"/>
            </div>
            <div className="mb-4">
                <label for="pass" class="block text-gray-600 text-sm font-medium">Paswword</label>
                <input type="password" id="pass" name="password" className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="password"/>
            </div>
           
           
                   </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-red-400 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
