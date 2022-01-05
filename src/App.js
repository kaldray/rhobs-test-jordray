import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import ListBodies from "./components/Bodies/ListBodies.js";

function App() {
  let [bodie, setBodie] = useState([]);
  const [planet, setPlanet] = useState([]);
  const { register, handleSubmit, getValues } = useForm();
  const displayBodies = getValues("bodies");

  useEffect(() => {
    fetch(
      "https://api.le-systeme-solaire.net/rest.php/bodies?page=1%2C1&rowData=false"
    ).then((res) =>
      res.json().then((response) => {
        setBodie(response.bodies);
        setPlanet(response.bodies);
      })
    );
  }, [setBodie]);

  const updateState = () => {
    changeInputValues();
  };

  const changeInputValues = () => {
    let gravityNumber = getValues("gravity");
    gravityNumber = parseInt(gravityNumber);
    const input = getValues("isPlanet");
    if (input === false) {
      setBodie(
        (bodie = planet.filter(
          (planet) =>
            planet.isPlanet === false && planet.gravity < gravityNumber
        ))
      );
    } else {
      setBodie(
        (bodie = planet.filter(
          (planet) => planet.isPlanet === true && planet.gravity < gravityNumber
        ))
      );
    }
  };

  return (
    <>
      <main>
        <form onChange={updateState}>
          <div className="input-group">
            <label htmlFor="isPlanet">IsPlanet:</label>
            <input {...register("isPlanet")} type="checkbox" name="isPlanet" />
            <input
              {...register("gravity")}
              min="0"
              step="0.10"
              max="30"
              type="range"
              name="gravity"
            />
          </div>
          <div className="select">
            <label htmlFor="select">Bodies :</label>
            <select {...register("bodies")}>
              <option>Choisir une valeur</option>
              {/* liste de tout les bodies */}
              {bodie.map((bodies) => (
                <option key={bodies.id}>{bodies.name}</option>
              ))}
            </select>
          </div>
        </form>
        <div className="bodies-info">
          <h1>Informations</h1>
          <ListBodies
            bodie={bodie.filter((bodie) => bodie.name === displayBodies)}
          />
        </div>
      </main>
    </>
  );
}

export default App;
