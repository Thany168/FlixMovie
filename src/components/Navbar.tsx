"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-30 bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Movie-App
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/popular">Popular</Link>
          <Link href="/top-rated">Top Rated</Link>
          <Link href="/my-list">My List</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-800 px-6 pb-4 space-y-3 text-white">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/movies" className="block">
            Movies
          </Link>
          <Link href="/tv" className="block">
            TV Shows
          </Link>
          <Link href="/popular" className="block">
            Popular
          </Link>
          <Link href="/top-rated" className="block">
            Top Rated
          </Link>
          <Link href="/my-list" className="block">
            My List
          </Link>
        </div>
      )}
    </nav>
  );
}
