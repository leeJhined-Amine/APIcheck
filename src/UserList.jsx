import { useEffect, useState } from "react";

function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const users = axios.get("https://jsonplaceholder.typicode.com/users");
    setData(users);
  }, []);
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
