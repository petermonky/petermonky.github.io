import "./Heading.scss";

const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h1 className="text-7xl">{title}</h1>
    </div>
  );
};

export default Heading;
