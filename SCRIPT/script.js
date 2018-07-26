var listvalue=''
dataGet = function () {
    console.log("haii");
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            const details = JSON.parse(this.responseText);
            var value = '';
            var result = `<li class="box-class" id="myDiv" onclick="openNavbottom(this)">\
            <div>\
            <i class="material-icons star-icon-box">star_border</i>\
            </div>\
            <p class="finance-class">FINANCE</p>\
             <p class="title">{title}</p>\
            <div class="target-class">\
                <p class="ericson">{sourcesystem}</p>\
                <hr>\
                <p class="hive-hadoop">{targetsystem}</p>\
            </div>\
            <div class="box-line1-class">\
                <p class="number">{pipelineno}</p>\
                <p class="date">{date}</p>\
            </div>\
            <div class="box-line1-class">\
                <p class="type-class displayclass">{type}</p>\
                <p class="type-class">{time}</p>\
            </div>\
            <div class="box-line1-class">\
                <p class="type-class displayclass" id="own">{owner}</p>\
                {bar}\
            </div> `;
            
            // var listresult=`<li class="box-class-list" id="myDiv" onclick="openNavbottom(this)">\
            // <i class="material-icons ">star_border</i>\
            // <p class="finance-class-list">FINANCE</p>\
            //  <p class="title-list">{title}</p>\
            //     <div class="target-class-list">
            //     <p class="ericson">{sourcesystem}</p>\
            //     <hr>\
            //     <p class="hive-hadoop">{targetsystem}</p>\
            //     </div>
            //    <p class="number">{pipelineno}</p>\
            //     <p class="date">{date}</p>\
            //     <p class="type-class">{type}</p>\
            //     <p class="type-class">{time}</p>\
            //     <p class="type-class" style="width:7%" id="own">{owner}</p>\
            //     <p class="bar-class"></p>`;
            for (var i = 0; i < details.length; i++) {
                value += result.replace("{title}", details[i].title).replace("{sourcesystem}", details[i].sourceSystem).replace("{targetsystem}", details[i].targetSystem).replace("{pipelineno}", details[i].pipelineno).replace("{date}", details[i].date).replace("{type}", details[i].type).replace("{time}", details[i].time).replace("{owner}", details[i].owner).replace("{bar}",details[i].bar);
                //listvalue += listresult.replace("{title}", details[i].title).replace("{sourcesystem}", details[i].sourceSystem).replace("{targetsystem}", details[i].targetSystem).replace("{pipelineno}", details[i].pipelineno).replace("{date}", details[i].date).replace("{type}", details[i].type).replace("{time}", details[i].time).replace("{owner}", details[i].owner);
            }
            document.getElementById("replacejson").innerHTML = value;

        }
    };
    
    xhr.open('GET', '../Task2/JSON/data.json', true);
    xhr.send();
}
// function dd(){
//     document.getElementById("replacejson").innerHTML = listvalue;
// }
// dd = function () {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (this.status === 200 && this.readyState === 4) {
//             const details = JSON.parse(this.responseText);
//             var value = '';
//             var result = `<li class="box-class-list" id="myDiv" onclick="openNavbottom(this)">\
//             <i class="material-icons ">star_border</i>\
//             <p class="finance-class-list">FINANCE</p>\
//              <p class="title-list">{title}</p>\
//                 <div class="target-class-list">
//                 <p class="ericson">{sourcesystem}</p>\
//                 <hr>\
//                 <p class="hive-hadoop">{targetsystem}</p>\
//                 </div>
//                <p class="number">{pipelineno}</p>\
//                 <p class="date">{date}</p>\
//                 <p class="type-class">{type}</p>\
//                 <p class="type-class">{time}</p>\
//                 <p class="type-class" style="width:7%" id="own">{owner}</p>\
//                 <p class="bar-class"></p> `;
//             for (var i = 0; i < details.length; i++) {
//                 value += result.replace("{title}", details[i].title).replace("{sourcesystem}", details[i].sourceSystem).replace("{targetsystem}", details[i].targetSystem).replace("{pipelineno}", details[i].pipelineno).replace("{date}", details[i].date).replace("{type}", details[i].type).replace("{time}", details[i].time).replace("{owner}", details[i].owner);
//             }
//             document.getElementById("replacejson").innerHTML = value;

//         }
//     };
    
//     xhr.open('GET', '../Task2/JSON/data.json', true);
//     xhr.send();
// }

function dd(){
   var box=document.querySelectorAll('.box-class');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("box-class");
   box[i].classList.add("box-class-list");
   }
   var box=document.querySelectorAll('.target-class');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("target-class");
   box[i].classList.add("target-class-list");
   }
   var box=document.querySelectorAll('.box-line1-class');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("box-line1-class");
   box[i].classList.add("box-line1-class-list");
   }
   var box=document.querySelectorAll('.displayclass');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("displayclass");
   box[i].classList.add("display-class");
   }
   var box=document.querySelectorAll('.finance-class');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("finance-class");
   box[i].classList.add("finance-class-list");
   }

    
}
function pp(){
    var box=document.querySelectorAll('.box-class-list');
    for(var i=0;i<box.length;i++){
    box[i].classList.remove("box-class-list");
    box[i].classList.add("box-class");
    }
    var box=document.querySelectorAll('.target-class-list');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("target-class-list");
   box[i].classList.add("target-class");
   }
   var box=document.querySelectorAll('.box-line1-class-list');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("box-line1-class-list");
   box[i].classList.add("box-line1-class");
   }
   var box=document.querySelectorAll('.display-class');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("display-class");
   box[i].classList.add("displayclass");
   }
   var box=document.querySelectorAll('.finance-class-list');
   for(var i=0;i<box.length;i++){
   box[i].classList.remove("finance-class-list");
   box[i].classList.add("finance-class");
   }

}
function popBox(owner) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../Task2/JSON/data.json', true);
    var popval = ``
    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            const details = JSON.parse(this.responseText);
            for (var i = 0; i < details.length; i++) {
                if (details[i].owner === owner) {
                    popval = ` <div class="popbox">
                     <center><h1> DETAILS OF INDIVIDUAL</h1><center>
                            <table>
                        <tr>
                            <td>TITLE:${details[i].title}</td>
                            <td>PIPELINE NO:${details[i].pipelineno}</td>
                            <td>DATE:${details[i].date}</td>
                        </tr>
                        <tr>
                            <td>SOURCE SYSTEM:${details[i].sourceSystem}</td>
                            <td>TARGET SYSTEM:${details[i].targetSystem}</td>
                            <td>TIME:${details[i].time}</td>
                        </tr>
                        <tr>
                            <td>TYPE:${details[i].type}</td>
                            <td>OWNER:${details[i].owner}</td>
                            <td>KEY:VALUE</td>
                        </tr>
                        </table>
                        <div class="buttonClass"><button class="button-view">VIEW MORE</button></div>
                        </div>
                        `;
                    document.getElementById("popcode").innerHTML = popval;
                }
            }
        }
    }
    xhr.send();
    var x = document.getElementById("snackbar");
   
}
function openNavbottom(ctrl) {
    
    // var a= document.getElementById("snackbar");
    // if(a.classList.contains("js-is-hidden1")){
    //    a.classList.remove("js-is-hidden1")
    // }
    var owner = ctrl.getElementsByTagName('p')[8].innerHTML;
    document.getElementById("snackbar").style.height = "400px";
    popBox(owner);
}
function closeNavbottom() {
    document.getElementById("snackbar").style.height = "0px";
}

function openNav() {
//     var box = document.querySelector(".sidenav");
// document.addEventListener("click", function(event) {
// if (event.target.closest(".sidenav")) return;
// document.addEventListener("click",function(){
//     var a= document.getElementById("mySidenav");
//     if(a.classList.contains("js-is-hidden")){
//         var a= document.getElementById("mySidenav");
//         if(a.classList.contains("js-is-hidden")){
//            a.classList.remove("js-is-hidden")
//         }
//     }
//      else{   box.classList.add("js-is-hidden");
// }
// })
// });
    
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function activecolor() {
    var header = document.getElementById("navoption_id");
    var btns = header.getElementsByClassName("option");
    for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}
function activecolor1() {
    console.log("Dfsfs")
    var header1 = document.getElementById("opt-rectangle");
    var btns1 = header1.getElementsByClassName("opt");
    for (var i = 0; i < btns1.length; i++) {
        btns1[i].addEventListener("click", function () {
            var current1 = document.getElementsByClassName("active");
             current1[0].className = current1[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
// function activecolor1(e){
//     document.body.className = document.body.className.replace("active","");
//     e.classList.add("active");

// }
function popfunc() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    // onmouseout= function(event) {
        
    //  }
}
function popremove(){
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}

function colorChange(){
    var toggle  = document.getElementById("toggle");
    var content = document.getElementById("content");
    if(toggle.addEventListener("click",function(){
    toggle.style.color = " #e20074";
    content.style.color = "#7b808a";
    })){
    }
    else if(content.addEventListener("click",function(){
    toggle.style.color = "#7b808a";
    content.style.color = " #e20074";
    })){

    }
    }


// var box = document.querySelector(".sidenav");
// document.addEventListener("click", function(event) {
// if (event.target.closest(".sidenav")) return;
// document.addEventListener("click",function(){
//     var a= document.getElementById("mySidenav");
//     if(a.classList.contains("js-is-hidden")){
//         openNav();
//     }
//      else{   box.classList.add("js-is-hidden");
// }
// })
// });

// var box1 = document.querySelector(".snackbar");
// document.addEventListener("click", function(event) {
// if (event.target.closest(".snackbar")) return;
// document.addEventListener("click",function(){
//     var a= document.getElementById("snackbar");
//     if(a.classList.contains("js-is-hidden1")){
//         closeNavbottom();
//     }
//      else{   
//          box1.classList.add("js-is-hidden1");
// }
// })
// });
   