import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import actions from './actions/index';

import InputWord from './components/inputWord';
import TranslatedWord from './components/translatedWord';


class AppView extends Component {
    render () {
        return(
            <div>
                <InputWord onSubmit = {this.props.submitAction}/>
                <TranslatedWord {...this.props}/>
            </div>
        )
    }

}

export default connect (
    state =>  ({
        test:console.log(state.submitTranslate),
        submitTranslate: state.submitTranslate[0]
    }),
    actions
)(AppView);