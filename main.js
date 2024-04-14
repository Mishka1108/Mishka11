let product = "db.json"
let section = document.querySelector("section")
fetch(product)
.then( res => res.json())
.then( data => render(data))
 
function render(apires){
    console.log(apires);
    for(let i = 0; i < apires.length; i++){
        section.innerHTML += `
   <div id="DivCard" class="${apires[i].class}">
  <h6 class="h6tag">${apires[i].title}</h6>
  <img src="${apires[i].image}" alt="" class="CardImg">
  <div class="about"><h6>Category:</h6><span>${apires[i].category}</span></div>
  <div class="about"><h6>date of issue:</h6><span>${apires[i].date}</span></div>
  <div class="about"><h6>Price:</h6><span>${apires[i].price}₾</span></div>
  <a href="${apires[i].link}" class="btn btn-outline-info">Show</a>
  
</div>
        `
    }
};
const search = () =>{
    let searchbox = document.getElementById("searchinput").value.toUpperCase();
    let storeitem = document.getElementById("item")
    let product = document.querySelectorAll("#DivCard")
    let pname = storeitem.querySelectorAll(".h6tag")
    for( let i =0; i < pname.length; i++){
        let match = product[i].querySelectorAll(".h6tag")[0];
        if(match){
           let textValue = match.textContent || match.innerHTML
           if(textValue.toLocaleUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
           }  
           else{
            product[i].style.display = "none";
           }
        }
    }
};

let inp = document.querySelectorAll(".Value ");
let text = document.querySelectorAll("h2");
let photoinp = document.querySelector("#image");
let photo = document.querySelector(".Customer")
let alink = document.querySelectorAll("a")
let linkinp = document.querySelectorAll('.link')
for(let i= 0; i < inp.length; i++){
   inp[i].addEventListener('input', function() {
    text[i].innerHTML = inp[i].value
   })
}
photoinp.addEventListener("input", function(){
    photo.src=photoinp.value
})
for(let i = 0; i < alink.length; i++){
    linkinp[i].addEventListener("input", function() {
        alink[i].href = linkinp[i].value
    })
}

let btn =document.querySelector(".btn-success")
function rgbGenerator (){
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
   return `rgb(${r},${g},${b})`
};
let m = "msad"
console.log("m");