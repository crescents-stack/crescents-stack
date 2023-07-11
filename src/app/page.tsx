import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-2">
      <Image
        src="/images/crescents_logo.png"
        alt="under_contruction"
        height={100}
        width={100}
        className="h-[50px] w-[50px] rounded-full"
      />
      <p>
        <span>CrescentsStack</span> {"-"} <span>Under contruction! </span>
      </p>
    </div>
  );
};

export default Home;
