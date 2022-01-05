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
      <p>{name}</p>
      <p>{rel}</p>
      <p>{gravity}</p>
    </>
  );
};

export default InfoBodies;
