import React from 'react';
import {topics} from './topics';
import './Topic.css'

export class Topic extends React.Component {
    isLast (index) {
        if (index + 1 === topics.length) {
            return true;
        } else {
            return false;
        }
    }

    render () {
        let isLast = (
            <div>
                <div className='grid'>
                    <div className='info'>
                        <h2 className='title'>{this.props.title}</h2>
                        <p className='author'>By {this.props.author}</p>
                    </div>
                    <p className='date'>{this.props.date}</p>
                    <p className='text'>{this.props.children}</p>
                </div>
            </div>
        );
        let  isNotLast = (
            <div>
                <div className='grid'>
                    <div className='info'>
                        <h2 className='title'>{this.props.title}</h2>
                        <p className='author'>By {this.props.author}</p>
                    </div>
                    <p className='date'>{this.props.date}</p>
                    <p className='text'>{this.props.children}</p>
                </div>
                <hr className='line'/>
            </div>
        )
        if (this.isLast(this.props.index)) {
            return isLast;
        } else {
            return isNotLast;
        }
    }
}