function customRender(reactElem,maincontainer){
    // const domElem=document.createElement(reactElem.type)
    // domElem.innerHTML=reactElem.children
    // domElem.setAttribute('href',reactElem.props.href)
    // domElem.setAttribute('target',reactElem.props.target)
    // maincontainer.appendChild(domElem)
    const dom=document.createElement(reactElem.type)
    dom.innerHTML=reactElem.children
    for (const prop in reactElem.props) {
        if (prop=='children') continue ;
            dom.setAttribute(prop,reactElem.props[prop])
        }
        maincontainer.appendChild(dom)
    }


const reactElem={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blanks'
    },
    children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactElem,maincontainer);

