import React from "react";

export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <form
  onSubmit={(e) => {
    e.preventDefault();
    onSearch();
  }}
 className="flex flex-col sm:flex-row gap-3 mb-6 max-w-md mx-auto"
>
  <input
    type="text"
    placeholder="Enter movie name..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 disabled:opacity-50 font-semibold transition-colors cursor-pointer"
    disabled={loading}
  >
    {loading ? "Searching..." : "Search"}
  </button>
</form>

  );
}
