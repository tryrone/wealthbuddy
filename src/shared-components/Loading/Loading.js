import React from 'react'
import './styles.css'

const Loading = ({ text = 'Loading' }) => {
    return (
        <>
            <span className="font-medium">{text}</span>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Loading
