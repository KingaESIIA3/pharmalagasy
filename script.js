var myIndex= 0;
var x = document.getElementsByClassName("mySlides");

function baba(){
    var i;
    for(i=0; i < x.length; i++){
        x[i].style.display="none";
    }
    myIndex++;
    if (myIndex> x.length){
        myIndex=1;
    }
    x[myIndex-1].style.display="block";
    setTimeout(baba, 4000);
}
