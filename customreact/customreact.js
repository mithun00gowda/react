function customRender (reactElemnt, mainContainer){
    // const domElement = document.createElement(reactElemnt.type);
    // domElement.innerHTML = reactElemnt.children;
    // domElement.setAttribute('href',reactElemnt.href);
    // domElement.setAttribute('target',reactElemnt.target);

    // mainContainer.appendChild(domElement);

    const domElement = document.createElement(reactElemnt.type)
    domElement.innerHTML = reactElemnt.children;
    for (const prop in reactElemnt.props){
        if(prop === reactElemnt.children) continue;
        domElement.setAttribute(prop, reactElemnt.props[prop])
    }

    mainContainer.appendChild(domElement);
}

const reactElemnt = {
    type: 'a',
    props: {
        href : 'https://www.google.com/',
        target: '_self'
    },
    children : 'Click me now',
}

const mainContainer = document.querySelector('#root');

customRender(reactElemnt, mainContainer);