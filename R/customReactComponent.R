# AUTO GENERATED FILE - DO NOT EDIT

customReactComponent <- function(id=NULL, label=NULL, value=NULL, shouldBeTicking=NULL) {
    
    props <- list(id=id, label=label, value=value, shouldBeTicking=shouldBeTicking)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CustomReactComponent',
        namespace = 'custom_react_component',
        propNames = c('id', 'label', 'value', 'shouldBeTicking'),
        package = 'customReactComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
