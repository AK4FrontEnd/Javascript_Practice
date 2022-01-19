//select element
function select(selector){
    let nodeList = document.querySelectorAll(selector);

    if(nodeList.length == 0){
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}

//create element & innerText
function createEl(element, text) {
    let el = document.createElement(element);

    if(text !== '' && text !== undefined && text !== null){
        el.innerText = text;
    }

    return el;
}

//#region 新增表格

// rowsArray 可以是一個 row 的字串陣列；也可以是一個 tbody 裡的所有 row 陣列（裡面是字串陣列）
// 第一個參數 titles 放 thead 裡的 dataArray；rowsArray 放 tbody 裡的內容（可放一或二維陣列）
function createTable(titles, rowsArray){
    let table = createEl('table');
    let thead = createEl('thead');
    let tbody = createEl('tbody');

    // thead 只有一列
    createRows(thead, titles);

    // 判斷 tbody 傳進來的 dataArray 是一個陣列放一行內容，還是一個陣列放多行內容（二維陣列）
    // 判斷方法：dataArray[0] 是不是陣列
    if(Array.isArray(rowsArray[0])){
        rowsArray.forEach( row => {
            createRows(tbody, row);
        })
    }else{
        createRows(tbody, rowsArray);
    }

    table.append(thead, tbody);

    return table;
}

// trElement 傳進去的要是 HTML element 例如： let trElement = document.createElement('thead');
// 把在 createTable 裡宣告的 thead / tbody element 傳進來才能 append tr 進去
function createRows(trElement, trInnerTextArray) {

    let tr = createEl('tr');

    // 傳進來的 element 是 thead 的話就是新增 th 儲存格；否則就是新增 td 儲存格
    let trType = (trElement == 'thead') ? 'th' : 'td';
    
    trInnerTextArray.forEach( text => {
        text = text.toString();

        // 若 text 為圖片檔名
        if(text.includes('.png') || text.includes('.svg') || text.includes('.jpg') || text.includes('.jpeg')){
            let img = createEl('img');
            let td = createEl('td');
            img.src = `./images/${text}`;
            td.append(img);
            tr.append(td);
        }else{
            tr.append(createEl(trType, text));
        }
    })

    trElement.append(tr);
}

//#endregion

export { select, createEl, createTable, createRows }