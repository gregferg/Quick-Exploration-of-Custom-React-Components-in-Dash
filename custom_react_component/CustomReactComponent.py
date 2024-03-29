# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CustomReactComponent(Component):
    """A CustomReactComponent component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; required): A label that will be printed when this component is rendered.
- value (string; optional): The value displayed in the input.
- shouldBeTicking (boolean; default True): If the counter should start counting on load."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.REQUIRED, value=Component.UNDEFINED, shouldBeTicking=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'value', 'shouldBeTicking']
        self._type = 'CustomReactComponent'
        self._namespace = 'custom_react_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'value', 'shouldBeTicking']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CustomReactComponent, self).__init__(**args)
