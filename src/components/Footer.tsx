export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Burger Haven</h3>
            <p className="text-gray-400">Craft burgers made with passion</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white">Locations</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Burger Street</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@burgerhaven.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Burger Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 