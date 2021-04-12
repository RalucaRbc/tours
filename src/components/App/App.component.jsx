import React, { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading.component";
import { Tours } from "../Tours/Tours.component";

const url = "https://course-api.com/react-tours-project";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
};
