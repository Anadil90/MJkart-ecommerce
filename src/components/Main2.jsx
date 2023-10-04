import "../App.css";
import "./main2.css";

const Main = () => {
  return (
    <div className="main-container">

      <div class="input-group">
			  <input type="text" class="form-control" placeholder="search for a product"/>
			  <div class="input-group-append"> 	
		      <button type="submit" class="input-group-text btn">search</button>
		    </div>
      </div>
  </div>
  );
};

export default Main;
