import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
*/

const anotherUser = "its arsh here"

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me baby to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App />,
    // MyApp()
    reactElement
    
)







/*
=> React needs to hook into this real DOM to start controlling the page.
in the above line, You create a React Root → this is a special thing that manages the connection between Virtual DOM and the Real DOM.

=> reactElement mein hamne apni marzi se syntax bana diya jo chahe woh fields daalke but now its different neevhe wale reactElement mein ham jaise syntax hita hai react mein vaisa hi daalre hain 

=> in jsx file the methods or funcitons that create which contain our html content, do they get converted to a reactElement before rendering
*/
