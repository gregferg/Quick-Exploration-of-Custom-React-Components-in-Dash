# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GenericButton(Component):
    """A GenericButton component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- buttonLabel (string; optional)"""
    @_explicitize_args
    def __init__(self, buttonAction=Component.UNDEFINED, buttonLabel=Component.UNDEFINED, **kwargs):
        self._prop_names = ['buttonLabel']
        self._type = 'GenericButton'
        self._namespace = 'custom_react_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['buttonLabel']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GenericButton, self).__init__(**args)
