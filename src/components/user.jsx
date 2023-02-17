import React from "react";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete}) => {
  return (
    
    
    // create row table
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => {
          return (
            <span
              className={`badge bg-${quality.color} mx-1`}
              key={quality._id}
            >
              {quality.name}
            </span>
          );
        })}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
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
