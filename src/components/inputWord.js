import React, {Component} from 'react';
import '../styles/inputWindow.css'

class InputWord extends Component {
    constructor(props) {
        super (props);
        this.state= {isValid:false};
    }

    validation () {
        if(this.refs.inputWord.value) {
            this.setState({isValid: true});
        }
        else {
            this.setState({isValid: false});
        }
    }

    submit (event) {
        event.preventDefault();
        return this.props.onSubmit(this.refs.inputWord.value, this.props.directionTranslate);
    }
    render (){
        return (
            <form onSubmit = {(event) => this.submit(event)}>
                <input onChange={() => this.validation()} className="input-word" ref = "inputWord" placeholder='input word'/>
                <button
                    className= 'btn-submit'
                    type = "submit"
                    disabled={!this.state.isValid}
                >Translate</button>
            </form>
        )
    }

}

export default InputWord;