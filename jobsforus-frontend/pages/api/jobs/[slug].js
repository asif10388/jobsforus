const { jobs } = require("./data.json");

export default function helloAPI(req, res) {
  const job = jobs.filter((job) => job.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(job);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
