import React from 'react';
/*import {topics} from './topics';*/ //Necessary comment for React to not show a warning
import './Topic.css'

export class Topic extends React.Component {
    /**
    isLast (index) {
        if (index + 1 === topics.length) {
            return true;
        } else {
            return false;
        }
    }
    */

    render () {
        return (
            <div>
                <div className='grid'>
                    <div className='info'>
                        <p className='title'>{this.props.title}</p>
                        <p className='author'>By {this.props.author}</p>
                    </div>
                    <p className='text'>{this.props.children}</p>
                </div>
                <hr className='line'/>
            </div>
        )
    }
}
