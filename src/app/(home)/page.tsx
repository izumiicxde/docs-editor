import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Link href={"/documents/lotex"} className="text-blue-500 underline">Document</Link>
    </div>
  );
};

export default Home;
