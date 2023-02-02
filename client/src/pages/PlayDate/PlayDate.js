import React, { useState } from "react";

function PlayDatePage() {
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || []; 
    console.log('me: ', me);

    if (me.length === 0) {
        return (
        <Login />
    )
  }

    const [pet1, setPet1] = useState("");
    const [pet2, setPet2] = useState("");
    const [location, setLocation] = useState("");
    const [activity, setActivity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: add logic or API cal to schedule play date
        console.log(`Scheduled play date between ${pet1} and ${pet2} at ${location} for ${activity}`);
    };

    return (
        <div>
            <h1>Schedule a Play Date</h1>
            <form onSubmit={handleSubmit}>
                {/* <h2>Pet 1</h2>
                <input
                    type="text"
                    value={pet1}
                    onChange={(e) => setPet1(e.target.value)}
                    placeholder="Enter pet name or username"
                /> */}
                <h2>Pet 2</h2>
                <input
                    type="text"
                    value={pet2}
                    onChange={(e) => setPet2(e.target.value)}
                    placeholder="Enter pet name or username"
                />
                <h2>Location</h2>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter a location"
                />
                <h2>Activity</h2>
                <input 
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="Enter an activity for a play date"
                />
                <button type="submit">Schedule Play Date</button>
            </form>
        </div>
    );
}

export default PlayDatePage;