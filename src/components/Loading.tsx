import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-3 items-center justify-center bg-[#262626]">
      <BarLoader color="#ffffff" />
      <h3>Fetching Photo Data from the API.</h3>
    </div>
  );
};

export default Loading;
