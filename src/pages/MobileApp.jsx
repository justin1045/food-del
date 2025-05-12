import { assets } from '../assets/assets'

function MobileApp() {
  return (
    <div className="bg-red-50 h-[60vh] flex flex-col items-center justify-center px-6 md:px-20 text-center">
      <p className="text-lg md:text-2xl font-semibold text-gray-800 mb-6">
        For Better Experience Download <br className="hidden md:inline" /> Tomato App
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-36 md:w-40 hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-36 md:w-40 hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileApp
