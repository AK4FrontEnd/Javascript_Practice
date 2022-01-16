function create(tag){
    return document.createElement(tag);
}

function select(selector){
    let nodeList = document.querySelectorAll(selector);

    if(nodeList.length == 0){
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}

export {create, select}