import {create, select} from './functions.js';
import{ data } from './iPadAir.js';


let optionsList = select('.options');
const productsData = data.productsData;

function createSpecCard(item, idx){
    let optionBtn = create('input');
    Object.assign(optionBtn, {
        type: "radio",
        name: "options",
        id: `option${idx}`,
        autocomplete: "off",
    })
    
    optionBtn.setAttribute('class', 'btn-check');
    optionBtn.setAttribute('data-spec', item.spec);
    

    let label = create('label');
    label.setAttribute('for', `option${idx}`);
    label.setAttribute('class', 'options-card btn d-flex flex-column justify-content-center align-items-center');

    return [optionBtn, label];
}


function getColorSpec(){
    productsData.options.colorList.forEach((item, idx) => {
        let arr = createSpecCard(item, idx);
        let optionBtn = arr[0];
        let label = arr[1];

        optionBtn.setAttribute('data-product-img', item.productImg);
        optionBtn.addEventListener('click', selectColor);

        let img = create('img');
        img.src = item.colorDemoImg;
        img.setAttribute("class", "color-demo-img");
        
        let optionInfo = create('p');
        optionInfo.innerText = item.spec;
        optionInfo.setAttribute("class", "info-txt");

        label.appendChild(img);
        label.appendChild(optionInfo);

        optionsList[0].appendChild(optionBtn);
        optionsList[0].appendChild(label);
    })
}

function getStorageSpec(){
    productsData.options.storageList.forEach((item, idx) => {
        let arr = createSpecCard(item, idx + 100);
        let optionBtn = arr[0];
        let label = arr[1];

        optionBtn.setAttribute('data-price', item.price);
        optionBtn.addEventListener('click', selectStorage);

        let optionTitle = create('p');
        optionTitle.innerText = item.spec;
        optionTitle.setAttribute("class", "title");

        let optionInfo = create('p');
        optionInfo.innerText = `NT ${item.price} 起`;
        optionInfo.setAttribute("class", "info-txt");

        label.appendChild(optionTitle);
        label.appendChild(optionInfo);

        optionsList[1].appendChild(optionBtn);
        optionsList[1].appendChild(label);
    })
}

function getWifiSpec(){
    productsData.options.wifiList.forEach((item, idx) => {
        let arr = createSpecCard(item, idx + 200);
        let optionBtn = arr[0];
        let label = arr[1];

        optionBtn.setAttribute('data-price', item.price);
        optionBtn.addEventListener('click', selectWifi);

        let optionTitle = create('p');
        optionTitle.innerText = item.spec;
        optionTitle.setAttribute("class", "title");

        let optionInfo = create('p');
        optionInfo.innerText = `NT ${item.price + 18900} 起`;
        optionInfo.setAttribute("class", "info-txt");

        label.appendChild(optionTitle);
        label.appendChild(optionInfo);

        optionsList[2].appendChild(optionBtn);
        optionsList[2].appendChild(label);
    })
}

export { getColorSpec, getStorageSpec, getWifiSpec };