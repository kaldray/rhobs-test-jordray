import InfoBodies from "./InfoBodies";

const ListBodies = (props) => {
  const bodie = props.bodie;
  return (
    <>
      {bodie.map((b) => (
        <InfoBodies key={b.id} {...b} />
      ))}
    </>
  );
};

export default ListBodies;
