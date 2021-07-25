import Link from "next/link";
import GlobalStyles from "../../styles/globalStyles.module.css";

const Register = () => {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md bg-gray-200">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Login/Sign Up
            </h2>
            <div class="relative mb-4">
              <label htmlFor="text" class="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="text"
                name="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label htmlFor="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label htmlFor="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label htmlFor="password" class="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class={`${GlobalStyles.accentColor} text-white border-0 py-2 px-6 focus:outline-none rounded text-lg`}
            >
              Register
            </button>
            <Link href="/login">
              <p class="text-xs text-gray-500 my-3">
                Already have an account?{" "}
                <span class="cursor-pointer text-blue-500">Login</span>
              </p>
            </Link>
            <div class="flex">
              <button class="w-1/2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-1">
                Google
              </button>
              <button class="w-1/2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
