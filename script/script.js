var ham = document.getElementById('ham');
var slider = document.getElementById('slider');
var cross = document.getElementById('cross');

ham.addEventListener('click', function(){
  slider.style.width = '70%';
})

cross.addEventListener('click', function(){
  slider.style.width = '0%';
})


// var image1 = document.getElementById('image1'),
//     image2 = document.getElementById('image2'),
//     image3 = document.getElementById('image3'),
//     image4 = document.getElementById('image4'),
//     body = document.getElementById('body');
//


var child = false;
function image(image){
    if(child){
      var view = document.getElementById('view');
      body.removeChild(view);
      child = false;
    }

    var div1 = document.createElement('div');
    child = true;
    div1.setAttribute('id', "view");
    div1.innerHTML = "<img src='images/"+ image +"' alt='"+image+"' width=100%>";
    div1.style = "position: fixed";
    div1.style.top = 0;
    div1.style.bottom = 0;
    div1.style.left = 0;
    div1.style.right = 0;
    div1.style.backgroundColor = "rgb(0,0,0, 0.5)";
    div1.style.padding = '10%';


    body.appendChild(div1);
     div1.addEventListener('click', function(){
       body.removeChild(div1);
       child = false;
     });
}



// var ham = document.getElementById('ham')
//     cross = document.getElementById('cross')
//     side = document.getElementById('side')
//     update = document.getElementById('update');
//
//
//     ham.addEventListener('click', function(){
//       side.style.width = "70%";
//     });
//
//     cross.addEventListener('click', function(){
//       side.style.width = 0;
//     });
//
//     update.addEventListener('click', function(){
//       side.style.width = 0;
//     });
