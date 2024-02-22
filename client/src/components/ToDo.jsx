import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { baseURL } from "../utils/constant";
import axios from "axios";
const ToDo = ({ text, id, setUpdate, setShowPopup, setPopupContent }) => {
  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdate((prev) => !prev);
    });
  };
  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <FaEdit onClick={updateToDo} className="icon" />
        <MdDelete onClick={deleteToDo} className="icon" />
      </div>
    </div>
  );
};
export default ToDo;
