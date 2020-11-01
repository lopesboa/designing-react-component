// import Image from "next/image";
function Page() {
  return (
    <div className="component-highlight max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://placebear.com/640/360" alt="Sunset in the mountain" />

      <div className="px-6 py-4">
        <div className="font bold text-xl mb-2">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            doloribus.
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #winter
        </span>
        <div className="px-6 py-4 component-sub-highlight">
          <button className="btn-blue">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
