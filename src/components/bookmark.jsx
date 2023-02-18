import React from 'react';

const Bookmark = ({onToogle, status, id}) => {
    return (
        <button onClick= { () => onToogle(id)}>
            <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}></i>
        </button>
    );
}
 
export default Bookmark;