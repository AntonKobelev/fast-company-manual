import React from 'react';

const SearchStatus = (props) => {
    const usersLength = props.usersLength
    // create array textForms for function renderPhrase
    const textForms = ['человек тусанет с тобой сегодня', 'человека тусанет с тобой сегодня']

    // create function for rendering phrase
    const renderPhrase = (usersLength) => {
        const arrayUsersLength = Math.abs(usersLength) % 100
        console.log(arrayUsersLength)
        if (usersLength === 0) {
            return 'Никто c тобой не тусанет'
        } else if (arrayUsersLength >= 5 && arrayUsersLength < 20 || arrayUsersLength === 1) { return `${usersLength} ${textForms[0]}`
        } else if (arrayUsersLength > 1 && arrayUsersLength < 5) { return `${usersLength} ${textForms[1]}`}
    }
    return (
        <span className="badge bg-primary fs-5">{`${renderPhrase(usersLength)}`}</span>
      );
}

export default SearchStatus

