"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const headerHeight = 100.24; // adjust if your top header row is taller
    const availableHeight = window.innerHeight - headerHeight - 32; // 32 = p-4 top/bottom

    gsap.killTweensOf(menuRef.current);

    if (isOpen) {
      gsap.to(menuRef.current, {
        height: availableHeight,
        duration: 0.45,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.45,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between -mb-6 fixed w-full z-50 left-0 top-0 px-8 pt-4 py-4 bg-light-tan">
      <Link className="relative z-50" href="/">
        <Logo />
      </Link>
      <nav className="ml-auto relative top-2">
        <ul className="hidden lg:flex">
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan"
              href="/memberships"
            >
              Memberships
            </Link>
          </li>
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan"
              href="/app-overview"
            >
              App Overview
            </Link>
          </li>

          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/sign-up"
              className="bg-green text-light-tan px-6 py-2 rounded-[20px] border-2 border-tan ml-2 transition-all duration-300 hover:bg-sage"
            >
              Sign Up Now
            </Link>
          </li>
        </ul>
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`absolute h-[4px] w-7 bg-green transition-all duration-300 ease-in-out rounded-[10px] ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />

          <div
            className={`absolute h-[4px] w-7 bg-green transition-all duration-300 ease-in-out rounded-[10px] ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>

        <div
          ref={menuRef}
          className="min-h-0 overflow-y-auto bg-tan lg:hidden fixed top-[100.24px] left-7.5 right-7.5 z-40 transition-all duration-300 ease-in rounded-xl"
          style={{ height: 0 }}
        >
          <ul className="flex flex-col gap-2 p-4 pt-10">
            <li>
              <Link
                className="text-green block px-4 py-2 rounded-xl bg-light-tan transition-all duration-300 hover:bg-sage hover:text-light-tan"
                href="/memberships"
                onClick={() => setIsOpen(false)}
              >
                Memberships
              </Link>
            </li>
            <li>
              <Link
                className="text-green block px-4 py-2 rounded-xl bg-light-tan transition-all duration-300 hover:bg-sage hover:text-light-tan"
                href="/app-overview"
                onClick={() => setIsOpen(false)}
              >
                App Overview
              </Link>
            </li>
            <li>
              <Link
                className="text-green block px-4 py-2 rounded-xl bg-light-tan transition-all duration-300 hover:bg-sage hover:text-light-tan"
                href="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-green block px-4 py-2 rounded-xl bg-light-tan transition-all duration-300 hover:bg-sage hover:text-light-tan"
                href="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="bg-green text-light-tan px-6 py-2 rounded-[30px] border-2 border-tan transition-all duration-300 hover:bg-sage block"
                onClick={() => setIsOpen(false)}
              >
                Sign Up Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
