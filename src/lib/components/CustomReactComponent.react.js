import React, {Component} from 'react';
import TestReact from './CustomReactRenderComponent.react';
import GenericButton from './GenericButton.react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CustomReactComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
         this.startTicking()
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      onClick() {
          console.log("IT WORKED")
          window.doSomthing();
      }

      startTicking() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
          );
        }
    
      tick() {
if (this.props.shouldBeTicking) {
  this.setState({
    date: new Date()
  });
} 
      }
    
      render() {
        return (
          <div id='hook-to-this' onClick={(e) => {this.onClick()}}>
            <TestReact text={this.state.date.toLocaleTimeString()}/>
            <GenericButton buttonAction={()=> {this.stopTicking()}} buttonLabel="Stop the ticking! Now"/>
            <GenericButton buttonAction={()=> {this.startTicking()}} buttonLabel="Start the ticking! Now"/>
          </div>
        );
      }
    }


CustomReactComponent.defaultProps = {shouldBeTicking: true};

CustomReactComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * If the counter should start counting on load.
     */
    shouldBeTicking: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
