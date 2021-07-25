import GlobalStyles from "../../styles/globalStyles.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Check out open jobs
              <br class="hidden lg:inline-block" />& apply right away
            </h1>
            <p class="mb-8 leading-relaxed">
              Search and filter from thousands of jobs and apply to the ones you
              seem fit for.
            </p>
            <div class="flex justify-center">
              <Link href="/jobs">
                <button
                  class={`inline-flex text-white ${GlobalStyles.accentColor} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
                >
                  Search Jobs
                </button>
              </Link>
              <Link href="/login">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Log In
                </button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
