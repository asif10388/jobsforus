import { API_URL } from "../../config/index";

const JobPage = ({ job }) => {
  return (
    <div>
      <div class="container w-full md:max-w-3xl mx-auto pt-20">
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div class="font-sans">
            <p class="text-base md:text-sm text-green-500 font-bold">
              <a class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                {job.company}
              </a>
            </p>
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {job.title}
            </h1>
            <p class="text-sm md:text-base font-normal text-gray-600">
              Posted on {new Date(job.postingdate).toLocaleDateString("en-US")}
            </p>
          </div>

          <p class="py-6">{job.description}</p>

          <p class="py-6">{job.qualifications}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/jobs`);
  const jobs = await res.json();

  const paths = jobs.map((job) => ({
    params: { slug: job.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
  const jobs = await res.json();
  return {
    props: {
      job: jobs[0],
    },
    revalidate: 1,
  };
}

export default JobPage;
