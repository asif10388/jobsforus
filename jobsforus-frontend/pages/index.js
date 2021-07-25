import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Jobcomponent from "../components/Jobcomponent/Jobcomponent";
import Headline from "../components/Headline/Headline";
import { API_URL } from "../config/index";

export default function Home({ jobs }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Jobs for Us</title>
      </Head>
      <Hero />
      <Headline title="Recent Jobs" />
      {jobs.length === 0 && <Headline description="No jobs to show" />}
      {jobs.map((job) => (
        <Jobcomponent key={job.id} job={job} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const jobs = await res.json();
  return {
    props: {
      jobs: jobs.slice(0, 3),
    },
    revalidate: 1,
  };
}
