import moment from "moment";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4">
      <div>
        {" "}
        <h1 className="text-4xl font-semibold text-zinc-600  ">
          The Tritiyo Alo
        </h1>
      </div>
      <h5 className="text-gray-500">Journalism Without Fear or Favour</h5>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}

export default Header;
