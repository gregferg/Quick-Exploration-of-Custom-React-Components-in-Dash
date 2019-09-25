# AUTO GENERATED FILE - DO NOT EDIT

stopTickingComponent <- function(stopTicking=NULL) {
    
    props <- list(stopTicking=stopTicking)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StopTickingComponent',
        namespace = 'custom_react_component',
        propNames = c('stopTicking'),
        package = 'customReactComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
