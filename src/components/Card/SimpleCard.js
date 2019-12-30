import React from 'react'
import '../Card/SimpleCard.scss'

const SimpleCard = (props) => (
    <div  className="card-column">
        <div className='simple-card'>
            <div className="_card-name">
                <span className="_title">{props.title}</span>
            </div>
            </div>
    </div>

)

export default SimpleCard