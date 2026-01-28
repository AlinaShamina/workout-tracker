import React from "react";

export default function WorkoutTable({ workouts, onDelete }) {
    const sorted = [...workouts].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Километры</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((w) => (
          <tr key={w.date}>
            <td>{w.date}</td>
            <td>{w.km}</td>
            <td>
              <button onClick={() => onDelete(w.date)}>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
