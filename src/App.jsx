import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutTable from "./WorkoutTable";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = ({ date, km }) => {
    setWorkouts((prev) => {
      const existing = prev.find((w) => w.date === date);
      if (existing) {
        return prev.map((w) =>
          w.date === date ? { ...w, km: w.km + km } : w
        );
      }
      return [...prev, { date, km }];
    });
  };

  const deleteWorkout = (date) => {
    setWorkouts((prev) => prev.filter((w) => w.date !== date));
  };

  return (
    <div className="App">
      <h1>Учёт тренировок</h1>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutTable workouts={workouts} onDelete={deleteWorkout} />
    </div>
  );
}

export default App;
