import React from "react";
import { useState, useEffect } from "react";

function About(props) {
  //create state to hold data
  const [about, setAbout] = useState(null);
  //create function to make API call
  const getAboutData = async () => {
    //MAKE API CALL AND GET RESPONSE
    const response = await fetch(props.URL + "about");
    //TURN RESPONSE INTO JAVASCRIPT OBJECT
    const data = await response.json();
    //SET THE ABOUT STATE TO THE DATA
    setAbout(data);
  };

  //MAKE AN INITIAL CALL FOR THE DATA INSIDE useEFFECT
  useEffect(() => {
    getAboutData();
  }, []);

  //DEFINE A FUNCTION THAT WILL RETURN THE JSX NEEDED ONCE WE GET THE DATA
  const loaded = () => (
    <div>
      <img src={about.headshot} alt="profile pic" className="headshot" />
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );
  //IF DATA ARRIVES RETURN THE RESULT OF LOADED, IF NOT, AN H1 THAT SAYS LOADING
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
