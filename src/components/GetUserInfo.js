import React from 'react'
import '../index.css';

const GetUserInfo = ({data}) => {
  //const [userInfo, setUserInfo] = useState({});
  const {login, avatar_url, name, bio, public_repos, followers, following, location, twitter_username, blog, company, created_at} = data;


  return (
    <>
      <section className="bg-white rounded-xl m-4 p-4 max-w-xl mr-auto ml-auto">
        <div className="flex flex-row mb-6">
          <div>
            <img className="rounded-full w-28 h-auto inline-block mr-5" src={avatar_url} alt={login} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mt-3">{name}</h3>
            <a href="#" className="text-blue-400">@{login}</a>
            <p>Joined <span>{created_at}</span></p>
          </div>
        </div>        
        <p>{bio}</p>

        <div className="bg-indigo-100 rounded-lg flex justify-evenly p-4 mt-4 mb-4">
          <div>
            <p>Repos</p> 
            <p className="font-semibold">{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p className="font-semibold">{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-semibold">{following}</p>
          </div>
        </div>
  
        <p>
          <i className="fas fa-map-marker-alt"></i> 
          {
            location !== null ? <span>{location}</span> : <span>Not Available</span>
          }
        </p>
        <p>
          <i className="fab fa-twitter"></i> 
          {
            twitter_username !== null ? <span>{twitter_username}</span> : <span>Not Available</span>
          }
        </p>
        <p>
          <i className="fas fa-link"></i>
          {
            blog !== null ? <span><a href={blog} target="_blank" rel="noreferrer">{blog}</a></span> : <span>Not Available</span>
          }
        </p>
        <p>
          <i className="fas fa-building"></i>
          {
            company !== null ? <span>{company}</span> : <span>Not Available</span>
          }
        </p>
        
      </section> 
    </>
  )
}

export default GetUserInfo;