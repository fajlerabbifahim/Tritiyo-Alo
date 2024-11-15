import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

function FindUs() {
  return (
    <div>
      <h1 className="mt-5 text-[20px] font-semibold ">Find Us</h1>
      <div className="join flex join-vertical mt-4 rounded-sm ">
        <button className="btn join-item justify-start ">
          {" "}
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start ">
          {" "}
          <FaXTwitter /> X
        </button>
        <button className="btn join-item justify-start ">
          {" "}
          <FaInstagram /> Instagram
        </button>
        <button className="btn join-item justify-start ">
          {" "}
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
}

export default FindUs;
