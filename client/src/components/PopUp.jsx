import { useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/constant";
import { IoIosCloseCircleOutline } from "react-icons/io";
const popUp = ({ setShowPopup, popupContent, setUpdate }) => {
  const [input, setInput] = useState(popupContent.text);
  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdate((prev) => !prev);
        setShowPopup(false);
      });
  };
  return (
    <div className="backdrop">
      <div className="popup">
        <IoIosCloseCircleOutline
          onClick={() => {
            setShowPopup((prev) => !prev);
          }}
          className="cross"
        />
        <h1>Update ToDo</h1>
        <div className="popup__input_holder">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update.. TODO"
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};
export default popUp;
