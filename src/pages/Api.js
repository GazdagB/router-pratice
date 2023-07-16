import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Api.css'
//Import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUserGroup} from '@fortawesome/free-solid-svg-icons'


const Api = () => {
  const [api, setApi] = useState(null);

  function calculatePrice(price) {
    if (price === 0) {
      return 'Free';
    } else if (price < 0.3) {
      return 'Cheap';
    } else if (price < 0.7) {
      return 'Normal';
    } else {
      return 'Expensive';
    }
  }

  const fetchApi = ()=>{
    axios
      .get('https://www.boredapi.com/api/activity')
      .then(res => setApi(res.data))
      .catch(err => console.log(err));
  }

  //make a function that checks if there is a link in the api and if there is, display a button that takes you to that link when clicked

  useEffect(() => {
    fetchApi();
    
  }, []);

  
  return (
    <div className='api'>
      {api && (
        <div className='activity'>
          <h1>Random Activity:</h1>
          <h2>{api.activity}</h2>
          <p>{api.type}</p>
          <p><FontAwesomeIcon icon={faUserGroup} /> {api.participants}</p>
          <p><FontAwesomeIcon icon={faDollarSign} /> {calculatePrice(api.price)}</p>
          <a  target='_blank' href={api.link}>{api.link} </a>
        </div>
      )}
      
      <button onClick={fetchApi} >New Activity</button>
    </div>
  );
};

export default Api;
