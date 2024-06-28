import { useEffect, useState } from "react";
import axios from "axios";

//sorry for the mistakes i made in the last commit, i was speed-running it, didn't even see if it's working or not 😅, it's working fine now!

function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <section>
      <h1>
        this app is pretty! for this app i went with a simple design that is
        REALLY IMPORTANT for me because it reminds of the 1st apps i built :D
      </h1>
      {data.map((current) => {
        return <h1 key={current.id}>{current.name}</h1>;
      })}
    </section>
  );
}

export default UserList;
