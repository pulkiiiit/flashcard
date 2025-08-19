import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">
          <p className="text-3xl mb-3" >Flash Cards</p>
          <div className="flex items-center justify-between w-150 border border-gray-500 rounded-xl pl-1 pr-1">
            <div className="flex items-center">
              <div className="h-10 w-50 bg-gray-400 m-1 rounded-xl"></div>
              <div className="ml-3"><p>25%</p></div>
            </div>
            <div>5 of 20</div>
          </div>
          <div>main div</div>
        </div>
      </div>
    </main>
  );
}
