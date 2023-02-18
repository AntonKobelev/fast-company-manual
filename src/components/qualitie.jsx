import React from 'react';


const Qualitie = ({id, name, color}) => {
    return (
        <span
          className={`badge bg-${color} mx-1`}
          key={id}
        >
          {name}
        </span>
      );
}
 

export default Qualitie;

