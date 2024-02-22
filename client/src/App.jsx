import react, { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import PopUp from "./components/PopUp";
const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(false);
  const[showPopup,setShowPopup]=useState(false);
  const [popupContent,setPopupContent]=useState({});
  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdate((prev) => !prev);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title"> ToDo's</h1>
        <div className="input_holder">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add TODO"
          />
          <button onClick={saveToDo}>Add</button>
        </div>
        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              id={el._id}
              text={el.toDo}
              setUpdate={setUpdate}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <PopUp
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdate={setUpdate}
        />
      )}
    </main>
  );
};
export default App;
