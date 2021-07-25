import Link from "next/link";
const Jobcomponent = ({ job }) => {
  return (
    <div class="container lg:px-48 px-5 py-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="p-4 w-full border-l-4 border-green-500 bg-gray-100 mb-1 shadow-lg">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img
              alt="team"
              class="flex-shrink-0 rounded-full w-20 h-20 object-cover object-center sm:mb-0 mb-4"
              src="https://dummyimage.com/200x200"
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="text-gray-500">Company</h2>
              <h3 class="title-font text-lg font-medium text-gray-900 mb-3">
                {job.title}
              </h3>
              <span class="inline-flex">
                <a class="text-gray-500">1d ago .</a>
                <a class="ml-2 text-gray-500">Part time .</a>
                <a class="ml-2 text-gray-500">Remote</a>
              </span>
            </div>
            <div class="flex-end sm:pl-8 mt-3 sm:mt-0">
              <Link href={`/jobs/${job.slug}`}>
                <button
                  class={`inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none rounded text-lg`}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcomponent;
