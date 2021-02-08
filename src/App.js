import React, {useState, useEffect } from "react";
import services from "./apis/services";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItem] = useState([]);
  const [keys, setKeys] = useState([]);
  const [q, setQ] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await services.getItem();
      setItem(request.data);
      setKeys(request.data[0] && Object.keys(request.data[0]));
      return request;
    }
    fetchData();
  }, []);

  function search(rows) {
    return rows.filter((key) =>
      keys.some((value) => key[value] && key[value].toString().toLowerCase().indexOf(q) > -1)
    );
  }
  return (
    <div className="App">
      <div>
        Search :
          <input 
          style= {{marginLeft: 5, margin: "10px"}}
          type = "text"
          placeholder="Type to search... "
          label="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          />
      </div>
      <div>
        <ItemList data={search(items)} />
      </div>
    </div>
  );
}

export default App;
