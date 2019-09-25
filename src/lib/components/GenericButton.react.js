import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class GenericButton extends Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
          <button type='button' onClick={()=> {this.props.buttonAction() }}>{this.props.buttonLabel}</button>
        );
      }
    }

    GenericButton.defaultProps = {};

    GenericButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    buttonAction: PropTypes.func,
    buttonLabel: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
