# AUTO GENERATED FILE - DO NOT EDIT

customReactRenderComponent <- function(text=NULL) {
    
    props <- list(text=text)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CustomReactRenderComponent',
        namespace = 'custom_react_component',
        propNames = c('text'),
        package = 'customReactComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
