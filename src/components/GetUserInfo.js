import React from 'react'
import { useState, useEffect } from 'react';


const GetUserInfo = ({user}) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchDate = async() => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const userData = await response.json();
    setUserInfo(userData);
  }

    fetchDate();
  }, [user]);


  return (
    <>
      <section>
        <img src={userInfo.avatar_url} alt={userInfo.login} />
        <h3>{userInfo.name}</h3>
        <p>{userInfo.bio}</p>
        <p>Repos: <span>{userInfo.public_repos}</span></p>
        <p>Followers: <span>{userInfo.followers}</span></p>
        <p>Following: <span>{userInfo.following}</span></p>
        <p>Location: <span>{userInfo.location}</span></p>
        <p>Twitter: <span>{userInfo.twitter_username}</span></p>
        <p>Blog Link: <span>{userInfo.blog}</span></p>
        <p>Company: <span>{userInfo.company}</span></p>
        <p>Created In: <span>{userInfo.created_at}</span></p>
      </section> 
    </>
  )
}

export default GetUserInfo;