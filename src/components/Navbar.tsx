"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, Globe, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
        {/* LEFT: Logo + Menu */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-wide"
          >
            Movie<span className="text-red-500">App</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-gray-300 text-sm font-medium">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/tv" className="hover:text-white">
              TV Show
            </Link>
            <Link href="/movies" className="hover:text-white">
              Movies
            </Link>
            <Link href="/videos" className="hover:text-white">
              Videos
            </Link>
            <Link
              href="/explore"
              className="hover:text-white flex items-center gap-1"
            >
              Other ▾
            </Link>
          </div>
        </div>

        {/* CENTER: Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="flex items-center w-full bg-black border border-white/20 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
            />
            <Search size={18} className="text-gray-400" />
          </div>
        </div>

        {/* RIGHT: Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <Bell className="hover:text-white cursor-pointer" size={20} />
          <Globe className="hover:text-white cursor-pointer" size={20} />

          <button className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-red-600 transition">
            Subscription
          </button>

          <User className="hover:text-white cursor-pointer" size={22} />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-5 space-y-4 text-gray-300 text-sm border-t border-white/10">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/tv" className="block">
            TV Shows
          </Link>
          <Link href="/movies" className="block">
            Movies
          </Link>

          <Link href="/video" className="block">
            Videos
          </Link>
          <Link href="/other" className="block">
            Other
          </Link>
        </div>
      )}
    </nav>
  );
}
