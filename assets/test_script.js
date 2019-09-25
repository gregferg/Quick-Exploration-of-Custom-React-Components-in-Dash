console.log("what up!")

// Need to wait for page to load as scripts are loaded before app.
window.onload = () => {
    // Need to set a timeout since Page resources have loaded, but the javascript hasn't finished executing, so the components don't exist yet.
    setTimeout(findElementAndSetListener, 1000)

}

function findElementAndSetListener(){
    const customReactComponent = document.querySelector("#hook-to-this")
    

    customReactComponent.addEventListener('click', doSomething)
    console.log(customReactComponent)

}

// Doesn't do anything because react & virtual dom.
function doSomething() {
    console.log("HI")
}

window.doSomething = doSomething;