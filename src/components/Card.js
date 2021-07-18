  import React from 'react';
  import '../containers/styles.css';

  const Card = ({ name, email, id, lname}) => {
    //Displays all the information in a card format
      return (
        <div className='tc grow col pa5 ma3 dib '>
          <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
          <div>
        <br />
            <h2>{name} {lname}</h2>
        <br />
            <h3>{email}</h3>
          </div>
        </div>
      );
    }

  export default Card;
