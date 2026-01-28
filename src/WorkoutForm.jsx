import React, { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [date, setDate] = useState("");
  const [km, setKm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !km) return;
    onAdd({ date, km: parseFloat(km) });
    setDate("");
    setKm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={km}
        onChange={(e) => setKm(e.target.value)}
        step="0.1"
        min="0"
        placeholder="км"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
