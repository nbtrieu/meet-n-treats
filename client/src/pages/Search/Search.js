import React, {useState} from "react";
import { useQuery } from "@apollo/client";

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyDown = (event) => {
        event.preventDefault();
        // TODO: Make API call to search for pets or users with the search term
    };

    return (
        <div className="my-5 mx-10 flex-column align-start">
          <div className="row">
            <div className="col-1 pt-3">
              <h2>🔎</h2>
            </div>
            <div className="col-1 search-box">
              <form>
                <input 
                  type="text"
                  placeholder="Search by pet name or username"
                  value={searchTerm}
                  tabIndex="-1"
                  onKeyDown={handleKeyDown}
                />
              </form>
            </div>
          </div>
          <ul>
              {/* TODO: Add display search results */}
          </ul>
        </div>
    );
}

export default SearchPage;