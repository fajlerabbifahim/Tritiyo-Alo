import { useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

function SocialLogin() {
  const { singInWithGoogle } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    singInWithGoogle(googleProvider).then(() => {});
  };

  return (
    <div>
      <h1 className="font-semibold text-[20px]">Login With </h1>
      <div className="flex flex-col mt-5  ">
        <button onClick={handleSignInWithGoogle} className="btn  mb-2">
          <FcGoogle /> Sign Up With Google
        </button>
        <button className="btn ">
          <FaXTwitter /> Sign Up With X
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
