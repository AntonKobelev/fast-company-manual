import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToogleBookmark
  }) => {
  return (
    
    
    // create row table
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => {
          return (
            <Qualitie key={quality._id} id = {quality._id} name = {quality.name} color = {quality.color}/>
          );
        })}
        
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onToogle = {onToogleBookmark} id = {_id}/>
      </td>
      <td>
        {/* create button with method onClick that calls function handleDelete with argument user._id */}
        <button
          key={_id}
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
