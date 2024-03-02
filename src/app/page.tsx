import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-off-black p-8">
      <div className="w-full p-6 sm:p-9 my-auto rounded-xl max-w-96 bg-dark-gray flex flex-col gap-y-6 justify-center items-center">
        <Image
          src={"/avatar-jessica.jpeg"}
          alt={"user avatar"}
          width={96}
          height={96}
          className="rounded-full"
        ></Image>
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h1 className="text-2xl font-bold text-white">Jessica Randall</h1>
          <h2 className="text-sm font-bold text-primary-green">
            London, United Kingdom
          </h2>
          <h3 className="text-sm text-white mt-4">
            &quot;Front-end developer and avid reader.&quot;
          </h3>
        </div>
        <div className="space-y-4">
          <button className="text-white text-sm font-semibold bg-primary-gray w-full p-3 rounded-lg hover:bg-primary-green hover:text-off-black">
            GitHub
          </button>
          <button className="text-white text-sm font-semibold bg-primary-gray w-full p-3 rounded-lg hover:bg-primary-green hover:text-off-black">
            Frontend Mentor
          </button>
          <button className="text-white text-sm font-semibold bg-primary-gray w-full p-3 rounded-lg hover:bg-primary-green hover:text-off-black">
            LinkedIn
          </button>
          <button className="text-white text-sm font-semibold bg-primary-gray w-full p-3 rounded-lg hover:bg-primary-green hover:text-off-black">
            Twitter
          </button>
          <button className="text-white text-sm font-semibold bg-primary-gray w-full p-3 rounded-lg hover:bg-primary-green hover:text-off-black">
            Instragram
          </button>
        </div>
      </div>
    </main>
  );
}
