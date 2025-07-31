import { useEffect, useState } from "react";
const FetchUserdataapi = () => {
  const [userData, setUserData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData.length > 0 ? (
        userData.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "10px",
              border: "1px solid black",
              margin: "10px 0",
            }}
          >
            <p>
              <strong>Name : </strong>
              {user.name}
            </p>
            <p>
              <strong>Email : </strong>
              {user.email}
            </p>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default FetchUserdataapi;
