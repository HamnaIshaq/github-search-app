import React, {useState, useEffect} from 'react';
import GetUserInfo from './GetUserInfo';
import SearchUser from './SearchUser';

const App = () => {
  const [user, setUser] = useState('ben');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDate = async() => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const userData = await response.json();
    console.log(userData);
    setData(userData);
  }

    fetchDate();
  }, [user]);

  return(
    <main className="box-border h-screen w-screen bg-indigo-100">
      <SearchUser user={user} setUser={setUser}/>
      <GetUserInfo data={data} />
    </main>
  );
};

export default App;