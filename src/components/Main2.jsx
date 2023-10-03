import "../App.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <button style={{ width: 100, height: 44, color: "black" }}>Search</button>
    </div>
  );
};

export default Main;
