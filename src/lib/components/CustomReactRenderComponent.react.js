import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class TestReact extends Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is.{this.props.text}</h2>
          </div>
        );
      }
    }

    TestReact.defaultProps = {};

    TestReact.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    text: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
