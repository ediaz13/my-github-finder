import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    
    
    const data = await res.json();
    
    setUsers(data)
    setLoading(false)
  };

  if (!loading) {
    return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        { users.map(user => (
            <div key={user.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-32 h-32 mx-auto rounded-full" />
            <h2 className="text-xl font-bold text-center">{user.login}</h2>
            <a href={user.html_url} className="block text-center text-blue-500">View Profile</a>
        </div>
        ))}
        </div>;
  } else {
    return <Spinner />;
  }

}

export default UserResults;
