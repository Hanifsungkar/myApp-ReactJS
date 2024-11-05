import React from 'react'
import { userParams } from 'react-router-dom'

    function People() {
    const { id } = userParams()
    return (
        <div>
            <h1>People</h1>
            <p>This is People Page</p>
            <p>You are requesting for person with ID: {id}</p>
        </div>
    )
}

export default People