import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import actions from './actions/index';

import InputWord from './components/inputWord';
import TranslatedWord from './components/translatedWord';
import Dropdown from './components/dropdown'


class AppView extends Component {
    render () {
        return(
            <div>
                <Dropdown directionTranslate = {this.props.directionTranslate} setDirection = {this.props.setDirectionTranslate} getLanguages = {this.props.getLanguage} receiveLanguage = {this.props.receiveLanguage} />
                <InputWord directionTranslate = {this.props.directionTranslate} onSubmit = {this.props.submitAction}/>
                <TranslatedWord {...this.props}/>
            </div>
        )
    }

}

export default connect (
    state =>  ({
        submitTranslate: state.submitTranslate[0],
        receiveLanguage: state.receiveLanguage,
        directionTranslate: state.directionTranslate
    }),
    actions
)(AppView);