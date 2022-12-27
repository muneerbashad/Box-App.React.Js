const Box = (props) => {
  const { className, boxName } = props;
  const containerClassName = `box-container${className}`;

  return (
    <div className={containerClassName}>
      <p className="Boxes">{boxName}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="box-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-list-container">
      <Box className="small-box" boxName="Small" />
      <Box className="medium-box" boxName="Medium" />
      <Box className="large-box" boxName="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
