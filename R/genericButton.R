# AUTO GENERATED FILE - DO NOT EDIT

genericButton <- function(buttonAction=NULL, buttonLabel=NULL) {
    
    props <- list(buttonAction=buttonAction, buttonLabel=buttonLabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GenericButton',
        namespace = 'custom_react_component',
        propNames = c('buttonAction', 'buttonLabel'),
        package = 'customReactComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
