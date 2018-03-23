import React, {Component} from 'react';
import '../styles/outputWindow.css'

export default class TranslatedWord extends Component{
    render(){
        return (
            <div className="output-window">
                <p>
                    {this.props.submitTranslate}
                </p>

            </div>
        )

    }
}