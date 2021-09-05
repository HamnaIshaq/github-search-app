import React, {useState} from 'react'

const SearchUser = ({user, setUser}) => {
  const [userName, setUserName] = useState(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName) {
      setUser(userName.replace(/\s+/g, ''));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center pt-10 mb-10">
      <label htmlFor="github-username"></label>
      <input 
        type="text" 
        id="github-username" 
        name="github-username" 
        className="border-2 border-gray-700 rounded-md p-1 bg-white"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" className="bg-purple-400 p-1 rounded-md">Submit</button>
      
    </form>
  );
};

export default SearchUser;
