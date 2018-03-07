import React, {Component} from 'react';

export default class TranslatedWord extends Component{
    render(){
        return (
            <div>
                <ul>
                    {this.props.submitTranslate.map((item, i) =>
                        <li key={i} >{item}</li>
                    )}
                </ul>

            </div>
        )

    }
}