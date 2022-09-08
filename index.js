'use strict'
const API_URL = "https://jsonplaceholder.typicode.com/albums";
const albumsList = document.getElementById('albums');

fetchAPI(API_URL).then(albums=>{
    albums.map(album=>appendListItem(albumsList,album.title));
})



function appendListItem(targetList,content){
    const liClassName = 'album_title';
    const listNode = document.createElement('li');
    listNode.classList.add(liClassName);
    listNode.innerHTML = content;
    targetList.append(listNode);
}

async function fetchAPI (API_URL){
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
