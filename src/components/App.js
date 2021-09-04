import React, {useState} from 'react';
import GetUserInfo from './GetUserInfo';
import SearchUser from './SearchUser';

const App = () => {
  const [user, setUser] = useState('brad traversy');

  return(
    <div>
      <SearchUser user={user} setUser={setUser}/>
      <GetUserInfo user={user.replace(/\s+/g, '')} />
    </div>
  );
};

export default App;