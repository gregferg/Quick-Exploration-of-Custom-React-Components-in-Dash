import custom_react_component
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    custom_react_component.CustomReactComponent(
        id='input',
        value='my-value',
        label='my-label'
    ),
    html.Button('Stop that ticking', id='stop-button', n_clicks_timestamp=-1),
    html.Button('Start that ticking', id='start-button', n_clicks_timestamp=-1),
])


@app.callback(Output('input', 'shouldBeTicking'), [Input('stop-button', 'n_clicks_timestamp'), Input('start-button', 'n_clicks_timestamp')])
def should_be_ticking(stop_timestamp, start_timestamp):
    if stop_timestamp == -1 & start_timestamp == -1:
        return True

    return stop_timestamp < start_timestamp


if __name__ == '__main__':
    app.run_server(debug=False)
