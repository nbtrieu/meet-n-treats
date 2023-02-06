import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Login from "../../components/Login";

function ExplorePage() {
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || []; 
    console.log('me: ', me);

    if (me.length === 0) {
         return (
        <Login />
    )
    }

    return(
        <div className="page explore">
            <div>
                <p>Discover new pets and stay updated on your favorites</p>
            </div>
            <div className="exSection">
                <h2>Popular Pets</h2>
                <ul>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Labrador_Retriever_portrait.jpg" alt="Pet 1" />
                        <h3>Lucky</h3>
                        <p>Loves to play fetch and nap</p>
                    </li>
                    <li>
                        <img src="https://www.readersdigest.ca/wp-content/uploads/2013/02/beagle-most-popular-dog-breeds.jpg" alt="Pet 2" />
                        <h3>Brodie</h3>
                        <p>Enjoys long walks</p>
                    </li>
                    <li>
                        <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2019/03/shiba-inu.jpg?resize=500,333&quality=82&strip=all" alt="Pet 3" />
                        <h3>Spike</h3>
                        <p>Loves to cuddle</p>
                    </li>
                </ul>
                {/* <button>See More Popular Pets</button> */}
            </div>
            <div className="exSection">
                <h2>Recommend Pets</h2>
                <ul>
                    <li>
                        <img src="https://pyxis.nymag.com/v1/imgs/6a9/2a3/6c37ee37a2473f12b6dc4a703a50381993-09-clifford.jpg" alt="Pet 4" />
                        <h3>Clifford</h3>
                        <p>The big red dog</p>
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/800px-Garfield_the_Cat.svg.png" alt="Pet 5" />
                        <h3>Garfield</h3>
                        <p>Loves lasagna</p>
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png" alt="Pet 6" />
                        <h3>Tom</h3>
                        <p>Excellent at catching mouse</p>
                    </li>
                </ul>
                {/* <button>See More Recommended Pets</button> */}
            </div>
        </div>
    );
}

export default ExplorePage;