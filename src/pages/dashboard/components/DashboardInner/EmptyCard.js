import React from 'react';
import { emptyIcon } from '../../../../assets/exports'

const EmptyCard =(props) =>{
    return (
        <div className="empty-card--items">
            <div className="empty-illustration" dangerouslySetInnerHTML={{ __html: emptyIcon }}></div>
            <div className="empty-text">
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default  EmptyCard;