import AppStoreIcon from "./Icons/appStore";
import GooglePlayBadge from "./Icons/googlePlay";

export default function Footer() {
  return (
    <footer className="bg-[#009DDC] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MegaMart</h2>
          <div className="mb-4">
            <p className="flex items-center gap-2">
              <span>📱</span> WhatsApp <br />
              <span className="ml-6">+1 202-918-2132</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span>📞</span> Call Us <br />
              <span className="ml-6">+1 202-918-2132</span>
            </p>
          </div>
          <div>
            <p className="mb-2">Download App</p>
            <div className="flex gap-2">
            <GooglePlayBadge width={100} height={100}/>
            <AppStoreIcon  width={100} height={100}/>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white w-fit">Most Popular Categories</h3>
          <ul className="space-y-1">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white w-fit">Customer Services</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white mt-10 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
