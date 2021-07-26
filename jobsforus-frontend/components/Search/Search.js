import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/jobs/search?term=${term}`);
    setTerm("");
  };

  return (
    <div class="relative text-gray-600 sm:ml-auto">
      <input
        type="text"
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        class="bg-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        class="absolute right-0 top-0 mt-2 mr-4"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
