import React, {useState} from 'react'

const SearchUser = ({user, setUser}) => {
  const [userName, setUserName] = useState(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName) {
      setUser(userName.replace(/\s+/g, ''))
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="github-username"></label>
      <input 
        type="text" 
        id="github-username" 
        name="github-username" 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Submit</button>
      
    </form>
  );
};

export default SearchUser;
