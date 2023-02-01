import React from "react";
import Sidebar from "../../components/Sidebar";
import Nav from "../../components/Nav";

function ExplorePage() {
    return(
        <div>
            <Sidebar>
                <Nav>
                </Nav>
            </Sidebar>
            
            <h1>Explore</h1>
            <p>Discover new pets and stay updated on your favorites</p>
            <h2>Popular Pets</h2>
            <ul>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 1" />
                    <h3>Pet 1</h3>
                    <p>Pet 1's bio</p>
                </li>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 2" />
                    <h3>Pet 2</h3>
                    <p>Pet 2's bio</p>
                </li>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 3" />
                    <h3>Pet 3</h3>
                    <p>Pet 3's bio</p>
                </li>
            </ul>
            <button>See More Popular Pets</button>
            <h2>Recommend Pets</h2>
            <ul>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 4" />
                    <h3>Pet 4</h3>
                    <p>Pet 4's bio</p>
                </li>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 5" />
                    <h3>Pet 5</h3>
                    <p>Pet 5's bio</p>
                </li>
                <li>
                    <img src="https://via.placeholder.com/150x150" alt="Pet 6" />
                    <h3>Pet 6</h3>
                    <p>Pet 6's bio</p>
                </li>
            </ul>
            <button>See More Recommended Pets</button>
        </div>
    );
}

export default ExplorePage;