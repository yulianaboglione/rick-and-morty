import axios from "axios";
import { React, useState, useEffect } from "react";

const IdItems = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(id).then((res) => setItem(res.data));
  }, []);
  console.log(item);
  return (
    <li className="item">
      <div className="card">
        <img src={item.image} alt="" /> <p className="name">{item.name}</p>
        <i
          class="fa-solid fa-circle fa-2xs"
          style={{
            color:
              item.status === "Alive"
                ? "green"
                : item.status === "Dead"
                ? "red"
                : "grey",
          }}
        ></i>{" "}
        {item.status} - {item.species}
        <p className="description">origin:</p> {item.origin?.name}
        <p className="description">episodes where appear:</p>{" "}
        {item.episode?.length}
      </div>
    </li>
  );
};

export default IdItems;
