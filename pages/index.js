/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

import GoogleAd from 'react-google-ad';

import { client, slot } from '../config.js';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      output: '',
    });
  }

  onClicked() {
    this.setState({
      output: this.state.input,
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  clear() {
    this.setState({
      input: '',
      output: '',
    });
  }

    render() {
      return (
        <div className="container">
          <h1>マルコフ連鎖要約器 β</h1>
          <TextField
            value={this.state.input}
            onChange={::this.handleChange}
            onEnterKeyDown={::this.onClicked}
            hintText="ここに要約する文章を入力してください"
            rows={4}
            rowsMax={30}
            underlineShow
            /><br/>
          <GoogleAd client={client} slot={slot} format="rectangle" />
          <RaisedButton
            onClick={::this.onClicked}
            secondary
            label="要約する"
            />
          <FlatButton
            label="クリア"
            onClick={::this.clear}
          />
          <br/>
          <GoogleAd client={client} slot={slot} format="rectangle" />
          <TextField
            value={this.state.output}
            hintText="要約された文章がここに表示されます"
            rows={4}
            rowsMax={30}
            />
          <GoogleAd client={client} slot={slot} format="rectangle" />
        </div>
      );
    }

  }
