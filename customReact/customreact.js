// yahan second paramter container means ki kahan pe usko inject krenge
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')  continue;
        domElement.setAttribute(prop, reactElement.props[prop])
            
    }  
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
 
const mainContainer = document.querySelector('#root')
// You're selecting the DOM node where you want to render the new element.

customRender(reactElement, mainContainer)









/*

the function customRender takes two parameters:
reactElement: A plain object that acts like a React element (virtual DOM).
container: A real DOM element (like a <div id="root">) where you want to render the element.

basically it took the custom react element and created a real dom object in the html page, just how react does

*/

