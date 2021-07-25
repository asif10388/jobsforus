import Jobcomponent from "../../components/Jobcomponent/Jobcomponent";
import { API_URL } from "../../config/index";

const Jobs = ({ jobs }) => {
  return (
    <div className="min-h-screen">
      {jobs.length === 0 && <Headline description="No jobs to show" />}
      {jobs.map((job) => (
        <Jobcomponent key={job.id} job={job} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const jobs = await res.json();
  return {
    props: {
      jobs,
    },
    revalidate: 1,
  };
}

export default Jobs;
