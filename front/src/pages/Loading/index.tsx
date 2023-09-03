import { Link } from "react-router-dom";

export const Loading = () => {
  /**here write js  */

  return (
    <div>
      <header
        style={{ position: "fixed", top: 0, left: 0 }}
        className="w-full h-20  border-b border-gray-300 bg-white shadow-md flex justify-between items-center"
      >
        <div className="w-44 h-44 py-14 ml-4">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="ml-8">
          <a href="signIn" className="text-black">
            <button
              style={{ backgroundColor: "white" }}
              className="w-32 h-12 mr-4 border-b border-green-200"
            >
              Sign in{" "}
            </button>
          </a>
          <a href="signUp" className="text-black">
            <button
              style={{ backgroundColor: "#7BAD77" }}
              className="w-32 h-12 mr-4"
            >
              Sign Up
            </button>
          </a>{" "}
        </div>
      </header>

      <section
        className=" w-full  flex justify-center items-center mt-24 bg-gray-100 border shadow-md "
        style={{ height: "34rem", width: "100%" }}
      >
        <div className="w-1/2  mr-4 ">
          <img
            style={{ height: "34rem" }}
            src="https://website-assets-fw.freshworks.com/attachments/ck4wjykev048edcg1gxcqxdoe-freshteam-leave-management.one-half.png"
            alt=""
          />
        </div>
        <div className="w-1/2  mr-4 ">
          <p
            className="text-2xl "
            style={{ lineHeight: "1.5", textAlign: "justify" }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the
          </p>
        </div>
      </section>

      <footer
        className="bg-gray-100 rounded-lg shadow dark:bg-gray-900 mt-12 w-full h-[12rem]"
      >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <div className="w-44 h-44 py-14 ml-4">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6  font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mr-12">
              <li>
                <Link to="/"  className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>

              <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span
            className="block   sm:text-center "
            style={{ color: "#7BAD77" }}
          >
            © 2023 All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
