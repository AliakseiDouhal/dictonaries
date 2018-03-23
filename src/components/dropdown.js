import React, { Component } from 'react';
import '../styles/dropdown.css'

class Dropdown extends Component {
    componentWillMount() {
        return this.props.getLanguages();
    }
    componentWillUpdate(nextProps) {
        if (nextProps.directionTranslate.length > 0) {
            return
        }
        this.setDirection();
    }

    setDirection () {
        return this.props.setDirection(this.refs.select.value)
    }

    render () {
        return (
            <select onChange={() => this.setDirection()}  ref='select' size='1' className='dropdown'>
                {(
                    this.props.receiveLanguage.map((item, i) =>
                    <option key={i}>{item}</option>)
                )}
            </select>
        )
    }

}

export default Dropdown

