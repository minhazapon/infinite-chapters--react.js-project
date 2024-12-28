import React, { useState, useEffect } from "react";

function SearchSystem() {
  const [query, setQuery] = useState(""); // User input for search
  const [data, setData] = useState([]); // Fetched data
  const [filteredData, setFilteredData] = useState([]); // Filtered results
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch data from the Express.js server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:5000/AllData");
        if (!response.ok) throw new Error("Error fetching data");
        const json = await response.json();
        setData(json);
        setFilteredData(json); // Initially display all data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search query
  useEffect(() => {
    const results = data.filter((item) => {
      // Adjust this logic based on the JSON structure
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) || // Match title
        item.description.toLowerCase().includes(query.toLowerCase()) // Match description
      );
    });
    setFilteredData(results);
  }, [query, data]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Search System</h1>
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 mb-6 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p className="text-blue-500">Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4">
          {filteredData.length > 0 ? (
            <ul>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  className="border-b last:border-0 py-4 hover:bg-gray-50 transition"
                >
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchSystem;
