import React from 'react'

export default function ChoiceCard(props) {
    return ( // can draw UI with HTML. have to wrap all source code in one <div> tag
        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}> 
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title} />
            <h3>{props.winner ? 'Won' : 'Loss'}</h3>
        </div>
    )
}