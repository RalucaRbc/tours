import React from "react";
import { Tour } from "../Tour/Tour.component";

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour } removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
