import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="bg-gray-900 text-white px-6 py-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        
        {/* Left Section */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim ut necessitatibus veritatis porro voluptatem ea saepe.
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">About us</li>
            <li className="cursor-pointer hover:text-white transition">Delivery</li>
            <li className="cursor-pointer hover:text-white transition">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>+1-909-818-1984</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="border-gray-700 mb-4" />
      <p className="text-center text-sm text-gray-500">
        &copy; 2025 @ C.S.TANK - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
