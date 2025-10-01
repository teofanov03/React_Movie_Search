import React from "react";

export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); 
        onSearch();         
      }}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Enter movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border border-gray-300 rounded p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
