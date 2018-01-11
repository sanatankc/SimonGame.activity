import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from './ToolBarButton'


class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStartEverClicked: false
    }
  }
  render() {
    return (
      <div id="main-toolbar" className="react-toolbar toolbar">
        <button className="toolbutton" id="activity-button" title="My Activity"></button>
        <button className="toolbutton pull-right" id="stop-button" title="Stop"></button>

        <Button
          title={this.state.isStartEverClicked ? 'Restart' : 'Start'}
          icon={this.state.isStartEverClicked ? 'replay.svg' : 'play.svg'}
          onClick={() => {
          !this.state.isStartEverClicked && this.setState({isStartEverClicked: true})
          this.props.onStartClick()
        }} />

        <Button
          title={!this.props.strict ? 'Strict' : 'Easy'}
          icon={!this.props.strict ? 'strict.svg' : 'easy.svg'}
          onClick={this.props.onLevelClick}
        />

      </div>
    )
  }
}

export default Toolbar
