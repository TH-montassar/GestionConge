import { useState, useEffect, FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/action/auth.action";
import { useNavigate } from "react-router-dom";


interface Props {
  isOpenR: boolean;
  closeModal: () => void;
}

export const Register: FC<Props> = ({ isOpenR, closeModal }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(isOpenR);


  useEffect(() => {
    setIsModalOpen(isOpenR);
  }, [isOpenR]);


//initialize sign up inputs  
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",    
    email: "",
    password: "",
  });

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs.firstName);
  console.log(inputs.lastName);
  console.log(inputs.email);
  console.log(inputs.password);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
  
    if (!inputs.firstName || !inputs.lastName || !inputs.email || !inputs.password) {
      setIsEmpty(true);
      return;
    }
  
    setIsEmpty(false);
    
    try {
      const resultAction = await dispatch(register(inputs));
      if (register.fulfilled.match(resultAction)) {
        closeModal()
        toast.success('Registration successful!');
      } else if (register.rejected.match(resultAction)) {
        if (resultAction.error.message) {
          toast.error(resultAction.error.message);
        } else {
          toast.error('Registration failed. Please try again.');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }

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
                    Sign Up
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={formSubmitHandler}>
                      <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">
                          FirstName
                        </label>
                        <input
                          value={inputs.firstName}
                          onChange={handleChange}
                          type="text"
                          id="firstname"
                          name="firstName"
                          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="Your First Name "
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">
                          LastName
                        </label>
                        <input
                          value={inputs.lastName}
                          onChange={handleChange}
                          type="text"
                          id="lastname"
                          name="lastName"
                          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="Your Last Name"
                        />
                      </div>
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
                          placeholder="exemple@xyz.com"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="pass"
                          className="block text-gray-600 text-sm font-medium"
                        >
                          Password
                        </label>
                        <input
                          value={inputs.password}
                          onChange={handleChange}
                          type="password"
                          id="pass"
                          name="password"
                          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="Your Password"
                        />
                      </div>
                      
                      <div className="mt-4">
                        <button
                          type="button"
                          className="mr-5 inline-flex justify-center rounded-md border border-transparent bg-red-50  px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 hover:border-red-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Register
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


