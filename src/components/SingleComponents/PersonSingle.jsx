import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const PersonSingle = () => {
  const [person, setPerson] = useState();
  console.log(person);
  //   const params = useParams();

  const getPerson = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/2524?api_key=b39a6d50962ff85858b03b950b6d3958`
    );

    setPerson(data);
  };
  useEffect(() => {
    getPerson();
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex-container-title">
            <h2>Actor</h2>
          </div>
        </div>
      </section>
      <div className="container">{person.name}</div>
    </>
  );
};

export default PersonSingle;
