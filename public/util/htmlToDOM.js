function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;
    console.log(content); 
    // eslint-disable-next-line keyword-spacing
    if(content.children.length > 1) {
        throw new Error('html needs to have single parent element');
    }
    
    const firstElementChild = content.firstElementChild;
    return firstElementChild;
}

export default htmlToDOM;