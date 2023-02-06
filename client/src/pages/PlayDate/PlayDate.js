import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import Login from "../../components/Login";
import MyCalendar from "../../components/Calendar";

function PlayDatePage() {
    const [pet1, setPet1] = useState("");
    const [pet2, setPet2] = useState("");
    const [location, setLocation] = useState("");
    const [activity, setActivity] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [playDates, setPlayDates] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);

    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || []; 
    console.log('me: ', me);

    if (me.length === 0) {
        return (
        <Login />
    )
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: add logic or API cal to schedule play date
        console.log(`Scheduled play date between ${pet1} and ${pet2} at ${location} for ${activity}`);
        // setPlayDates([...playDates, newPlayDate]);
    };

    return (
        <div className="page">
          <div className="playdate-form-card">
            <h2>Schedule a Play Date</h2>
            <form onSubmit={handleSubmit}>
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
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Enter an activity for a play date"
              />
              <h2>Date</h2>
              <input 
                type="text"
                id="date"
                value={selectedDate ? selectedDate.toDateString() : ''}
                onClick={() => setShowCalendar(true)}
                // placeholder="Click to select a date"
              />
              {showCalendar && 
                <MyCalendar 
                  value={new Date()}
                  style={{
                    width: "500px",
                    height: "500px",
                    margin: "0 auto",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "10px"
                  }}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  setShowCalendar={setShowCalendar}
                />
              }
              <button type="submit">Schedule Play Date</button>
            </form>  
          </div>
          <div className="calendar-card">
            <MyCalendar playDates={playDates} />
          </div>
        </div>
    );
}

export default PlayDatePage;