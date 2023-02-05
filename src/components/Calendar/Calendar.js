import React, { useState } from "react";
import Calendar from "react-calendar";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const isToday = (current) => {
    return (
      current.getDate() === new Date().getDate() &&
      current.getMonth() === new Date().getMonth() &&
      current.getFullYear() === new Date().getFullYear()
    );
  };

  const isSelected = (current) => {
    return (
        current.getDate() === date.getDate() &&
        current.getMonth() === date.getMonth() &&
        current.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) =>{
            let className = "";
            if(isToday(date)) className="today-tile";
            if(isSelected(date)) className="selected-tile";
            return className;
        }}
        style={{
          height: "400px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #333",
          backgroundColor: "#f2f2f2",
        }}
        calendarType="US"
      />
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        Selected date: {date.toString()}
      </p>
    </div>
  );
};

export default MyCalendar;
