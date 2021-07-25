import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="ml-3 text-xl">Jobs for Us</span>
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/jobs">
              <a class="mr-5 hover:text-gray-900">Jobs</a>
            </Link>
          </nav>
          <Link href="/login">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
