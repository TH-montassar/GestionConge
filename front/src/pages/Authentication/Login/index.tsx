import { useState, useEffect, FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../../Redux/store";
import { login } from "../../../Redux//action/auth.action";

interface Props {
  isOpenM: boolean;
  closeModal: () => void;
}

export const Login: FC<Props> = ({ isOpenM, closeModal }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(isOpenM);
  useEffect(() => {
    setIsModalOpen(isOpenM);
  }, [isOpenM]);

  //initialize inputs empty
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("the name", inputs.email);
  console.log("the name", inputs.password);
  // console.log(inputs);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  //console.log(isAuthenticated);
  // console.log(user);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      setIsEmpty(true);
      // Reset the isEmpty state to false after 1 second
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
      return;
    }
    setIsEmpty(false);
    dispatch(login(inputs));
  };
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
                    <form onSubmit={formSubmitHandler}>
                      <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">
                          Email
                        </label>
                        <input
                          value={inputs.email}
                          onChange={handleChange}
                          type="text"
                          id="email"
                          name="email"
                          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="pass"
                          className="block text-gray-600 text-sm font-medium"
                        >
                          Paswword
                        </label>
                        <input
                          value={inputs.password}
                          onChange={handleChange}
                          type="password"
                          id="pass"
                          name="password"
                          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="password"
                        />
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
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          login
                        </button>
                      </div>
                    </form>
                    {isEmpty && (
                      <div className="mt-5 text-red-600 mx-auto">is empty</div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </>
  );
};
