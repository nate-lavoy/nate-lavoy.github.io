let album = document.getElementsByClassName("album");
let slideIndex = 1;

showAlbum(slideIndex);

function showAlbum(num){
    if(num > album.length){
        slideIndex = 1;
    }
    if(num < 1)
        slideIndex = album.length;
    for(let i = 0; i < album.length; i++){
        album[i].style.display = "none";
        album[slideIndex - 1].style.display = "flex"; 
    }
}

function navigateAlbum(num){
    showAlbum((slideIndex += num));
}