let profileimg = document.getElementsByClassName("profileimg");
    
function mouseentereffect(index, altimg){
    profileimg[index].src=altimg;
}

function mouseleaveeffect(index, defaultimg){
    profileimg[index].src= defaultimg;
}
