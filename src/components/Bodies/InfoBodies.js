const InfoBodies = (props) => {
  const {
    id,
    name,
    englishName,
    isPlanet,
    moons,
    semimajorAxis,
    perihelion,
    aphelion,
    eccentricity,
    inclination,
    mass,
    vol,
    density,
    gravity,
    escape,
    meanRadius,
    equaRadius,
    polarRadius,
    flattening,
    dimension,
    sideralOrbit,
    sideralRotation,
    aroundPlanet,
    discoveredBy,
    discoveryDate,
    alternativeName,
    axialTilt,
    avgTemp,
    mainAnomaly,
    argPeriapsis,
    longAscNode,
    rel,
  } = props;
  return (
    <>
      <p>
        {name}
        {isPlanet === true ? ` est une planète.` : ` n'est pas une planète. `}
        {dimension}
      </p>
      <p>La gravité est de {gravity}g.</p>
      <div className="moons">
        {moons != null && <p>Voici les lunes : </p>}
        {moons != null && moons.map((m) => <p key={m.moon}> {m.moon} </p>)}
      </div>
    </>
  );
};

export default InfoBodies;
