import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

function RightNav() {
  return (
    <div className="sticky top-5">
      <SocialLogin />
      <FindUs />
    </div>
  );
}

export default RightNav;
