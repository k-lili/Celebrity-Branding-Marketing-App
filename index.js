let event1 = document.getElementById("event1");
let eventName1 = document.getElementById("eventName1");
let event2 = document.getElementById("event2");
let eventName2 = document.getElementById("eventName2");

let img=document.getElementById("eImage");
let inputName = document.getElementById("inputName");
let inputDate = document.getElementById("inputDate");
let inputVenue = document.getElementById("inputVenue");
let inputMembers = document.getElementById("inputMembers");
let inputSource = document.getElementById("inputSource");

function td1click(){
    console.log('td1 clicked', event1.innerHTML);

    event1.style.backgroundColor = "#816157";
    event1.style.color = "#FFFFFF";
    eventName1.style.color = "#FFFFFF";

    event2.style.backgroundColor = "#ddc1b9";
    event2.style.color = "darkslategray";
    eventName2.style.color = "darkslategray";

    img.src = "image/Index/Events/MoovLive.jpg";
    inputSource.innerHTML = "Photo source: Timable";
    inputName.innerHTML = "Moov Live Music On The Road";
    inputDate.innerHTML = `Dec 7-8, 2021  8:15pm`;
    inputVenue.innerHTML = "Hall 5BC, Hong Kong Convention and Exhibition Centre";
    inputMembers.innerHTML = "Anson Kong, Anson Lo, Edan Lui, Ian Chan, Jer Lau, Keung To";
}

function td2click(){
    console.log('td2 clicked', event2.innerHTML);

    event2.style.backgroundColor = "#816157";
    event2.style.color = "#FFFFFF";
    eventName2.style.color = "#FFFFFF";

    event1.style.backgroundColor = "#ddc1b9";
    event1.style.color = "darkslategray";
    eventName1.style.color = "darkslategray";

    img.src = "image/Index/Events/MirrorTeam2.jpg";
    inputSource.innerHTML = "Photo source: MIRROR's Facebook";
    inputName.innerHTML = "Hong Kong New Year Countdown Concert";
    inputDate.innerHTML = "Dec 31, 2021 10:00pm- Jan 1, 2022";
    inputVenue.innerHTML = "Great Lawn, West Kowloon Cultural District Art Park";
    inputMembers.innerHTML = "All MIRROR's members";

}

function showMirrorImg(img1, img2, img3){
    let imgarray=[img1, img2, img3];
    let currimg = 0;

    setInterval(function(){
            let mirrorimg = document.getElementById("mirrorimg");
            mirrorimg.src = imgarray[currimg];

            if (currimg < imgarray.length-1){
                currimg++; 
            }
            else{currimg = 0;
            }     
    }, 5000);
}