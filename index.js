'use strict'
const API_URL = "https://jsonplaceholder.typicode.com/albums";
const albumsList = document.getElementById('albums');

makeApiRequest(API_URL).then(resolve=>{
    resolve.map(album=>appendListItem(albumsList,album.title));
    addListItemClass(albumsList,'album_title');
})

function addListItemClass(targetList,className){
    const itemsArray = Array.from(targetList.querySelectorAll('li'));
    itemsArray.map(item=>item.classList.add(className))
}

function appendListItem(targetList,content){
    const doc = document;
    const listNode = doc.createElement('li');
    listNode.innerHTML = content;
    targetList.append(listNode);
}

async function makeApiRequest(API_URL){
    const response = await fetch(API_URL);
    const resolve = await response.json();
    try{
        if (!response.ok) {
            throw new Error('bad response')
        };
        return resolve
    }
    catch(error){
        console.error(`Error: ${error.message}`);
    }
}
