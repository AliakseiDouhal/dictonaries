import React, {Component} from 'react';

class InputWord extends Component {
    constructor(props) {
        super (props);
    }

    submit () {
        console.log('button');
        return this.props.onSubmit(this.refs.inputWord.value);
    }
    render (){
        return (
            <div>
                <textarea ref = "inputWord"/>
                <button
                    onClick = {() => this.submit()}
                >send</button>
            </div>
        )
    }

}

export default InputWord;