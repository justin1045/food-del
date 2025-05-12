import React from 'react';

function Home() {
  return (
    <div className="header mb-15 h-[600px] w-full px-10 sm:px-5 bg-[url('/header_img.png')] bg-no-repeat bg-cover bg-center relative rounded-3xl max-w-[90%] mx-auto">
      <div className="header-contents absolute bottom-[10%] left-[5%] right-[5%] flex flex-col gap-4 text-white max-w-[700px]">
        <h2 className="text-6xl sm:text-4xl font-extrabold leading-tight drop-shadow-lg">
          Order your favourite food here
        </h2>
        <p className="text-lg sm:text-sm font-normal drop-shadow-md">
          Delicious meals delivered at your doorstep. Choose from a wide range of dishes and enjoy fast delivery.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded font-semibold w-fit text-base sm:text-sm">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Home;
