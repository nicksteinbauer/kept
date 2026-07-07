import Link from "next/link";
import LogoFooter from "./LogoFooter";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-end py-10 px-6 gap-5">
      <LogoFooter />
      <nav>
        <ul className="flex flex-col lg:flex-row">
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan block"
              href="/memberships"
            >
              Memberships
            </Link>
          </li>
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan block"
              href="/app-overview"
            >
              App Overview
            </Link>
          </li>

          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan block"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-green px-4 py-2 rounded-[20px] bg-transparent transition-all duration-300 hover:bg-sage hover:text-light-tan block"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/sign-up"
              className="bg-green text-light-tan px-6 py-2 rounded-[20px] border-2 border-tan ml-2 transition-all duration-300 hover:bg-sage block"
            >
              Sign Up Now
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
