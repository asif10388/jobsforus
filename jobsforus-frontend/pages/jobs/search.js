import Jobcomponent from "../../components/Jobcomponent/Jobcomponent";
import { API_URL } from "../../config/index";
import Headline from "../../components/Headline/Headline";
import qs from "qs";
import { useRouter } from "next/router";

const Search = ({ jobs }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {jobs.length === 0 && <Headline description="No jobs to show" />}
      {jobs.map((job) => (
        <>
          <Headline title={`Search results for ${router.query.term}`} />
          <Jobcomponent key={job.id} job={job} />
        </>
      ))}
    </div>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { company_contains: term },
        { location_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/jobs?${query}`);
  const jobs = await res.json();
  return {
    props: {
      jobs,
    },
  };
}

export default Search;
