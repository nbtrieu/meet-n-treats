import React, {useState} from "react";

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Make API call to search for pets or users with the search term
    };

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search by pet name or username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h2>Results</h2>
            <ul>
                {/* TODO: Add display search results */}
            </ul>
        </div>
    );
}

export default SearchPage;