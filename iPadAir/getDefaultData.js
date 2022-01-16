import {create, select} from './functions.js';
import{ data } from './iPadAir.js';


let optionsList = select('.options');
const productsData = data.productsData;

function getColorSpec(){
    productsData.options.colorList.forEach((item) => {
        let optionBtn = create('button');
        optionBtn.setAttribute("class", "options-card d-flex flex-column justify-content-center align-items-center");
        optionBtn.setAttribute('data-product-img', item.productImg);
        optionBtn.addEventListener('click', selectColor);

        let img = create('img');
        img.src = item.colorDemoImg;
        img.setAttribute("class", "color-demo-img");
        optionBtn.appendChild(img);

        let optionInfo = create('p');
        optionInfo.innerText = item.spec;
        optionInfo.setAttribute("class", "info-txt");
        optionBtn.appendChild(optionInfo);

        optionsList[0].appendChild(optionBtn);
    })
}

function getStorageSpec(){
    productsData.options.storageList.forEach((item) => {
        let optionBtn = create('button');
        optionBtn.setAttribute("class", "options-card d-flex flex-column justify-content-center align-items-center");
        optionBtn.setAttribute('data-price', item.price);
        optionBtn.addEventListener('click', selectStorage);

        let optionTitle = create('p');
        optionTitle.innerText = item.spec;
        optionTitle.setAttribute("class", "title");
        optionBtn.appendChild(optionTitle);

        let optionInfo = create('p');
        optionInfo.innerText = `NT ${item.price} 起`;
        optionInfo.setAttribute("class", "info-txt");
        optionBtn.appendChild(optionInfo);

        optionsList[1].appendChild(optionBtn);
    })
}

function getWifiSpec(){
    productsData.options.wifiList.forEach((item) => {
        let optionBtn = create('button');
        optionBtn.setAttribute("class", "options-card d-flex flex-column justify-content-center align-items-center");
        optionBtn.setAttribute('data-price', item.price);
        optionBtn.addEventListener('click', selectWifi);

        let optionTitle = create('p');
        optionTitle.innerText = item.spec;
        optionTitle.setAttribute("class", "title");
        optionBtn.appendChild(optionTitle);

        let optionInfo = create('p');
        optionInfo.innerText = `NT ${item.price + 18900} 起`;
        optionInfo.setAttribute("class", "info-txt");
        optionBtn.appendChild(optionInfo);

        optionsList[2].appendChild(optionBtn);
    })
}

export { getColorSpec, getStorageSpec, getWifiSpec };