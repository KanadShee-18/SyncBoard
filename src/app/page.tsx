import Link from "next/link";

const Home = () => {
  return (
    <div className="grid w-full min-h-screen place-items-center">
      <span>
        Click{" "}
        <Link href={"/documents/123"} className="text-blue-600 underline">
          here
        </Link>{" "}
        to go to dashboard page
      </span>
    </div>
  );
};

export default Home;
