import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <ul className="md:flex justify-center gap-6 px-4 py-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
