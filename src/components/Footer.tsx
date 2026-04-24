import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Movie App</h3>
            <p className="text-sm">
              Watch and explore your favorite movies and TV shows anytime.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/t v">TV Shows</Link>
              </li>
              <li>
                <Link href="/popular">Popular</Link>
              </li>
              <li>
                <Link href="/top-rated">Top Rated</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/my-list">My List</Link>
              </li>
              <li>
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Link href="#">Settings</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2026 Movie App. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
