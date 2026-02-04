import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center text-center w-[35%] gap-6 text-black p-10 mx-auto">
          <h1 className="text-5xl font-bold ">Resume templates</h1>
          <p>
            Each resume template is designed to follow the exact rules you need
            to get hired faster. Use our resume templates and get free access to
            18 more career tools!
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/design/builder">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Create my resume
              </button>
            </Link>
            {/* <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Upload my resume
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
