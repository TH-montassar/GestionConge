import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";

export const Loading = () => {
  /**here write ts  */

  return (
    <div className="">
      <Header />
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

      <Footer />
    </div>
  );
};
