var index = 0;
showImage();

function showImage() {
    var ind = index;
    var slides1 = document.getElementsByClassName('slides1');
    if (ind - 1 < 0) {                  //check if index < 0   
        // console.log(ind);
        document.getElementById('btnBack').disabled = true;   // it disables the Back Btn
    }
    for (var i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }
    slides1[ind++].style.display = 'block';           //set image on container1

    var slides2 = document.getElementsByClassName('slides2');
    for (var i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }
    slides2[ind++].style.display = 'block';   //set image on container2

    var slides3 = document.getElementsByClassName('slides3');
    if (ind + 1 > slides3.length - 1) {             //check if index > slides.length  
        document.getElementById('btnNext').disabled = true;         // it disables the Next Btn
    }
    for (var i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none';
    }
    slides3[ind++].style.display = 'block';      //set image on container3
}

function incrementIndex() {
    index++;
    showImage();
}
function decrementIndex() {
    index--;
    showImage();
}

function next() {
    document.getElementById('btnBack').disabled = false;      //it enables the back button
    incrementIndex();

}

function back() {
    document.getElementById('btnNext').disabled = false;    //it enables the next button
    decrementIndex();

}
