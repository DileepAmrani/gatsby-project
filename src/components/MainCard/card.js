import React from 'react'
import './card.scss'
const Card = (props) => (

    // <div className='column'>

        <div className='card'>
            <div className="card-top-border card-1"></div>

            <div className="card-name">
                <span className="card-title title-1">{props.heading}</span>
            </div>

            <div class="overlay">
                <div class="_text">
                    <span className="title_heading">
                        Hello World
                    </span>
                    <span className="title_descripation">
                        We use floats to make the divs align horizontally. Their width is set to 33.3333% of their parent which has a width of 300%; the result is that each color is 100% wide as the body.
                    </span>
                </div>
            </div>
        </div>

    // </div>


)

export default Card