// Get the value of background color from localstorage
document.body.classList.add(localStorage.getItem('page-color') || 'red')

let element = document.querySelectorAll('.color-switcher li');
let classesList =[];

//loop on elements

for ( let i=0 ; i<element.length ; i++){

classesList.push(element[i].getAttribute('data-color'));
element[i].addEventListener('click',function(){
    document.body.classList.remove(...classesList)
    document.body.classList.add(this.getAttribute('data-color'))

    // add date to localstorage
    localStorage.setItem('page-color',this.getAttribute('data-color'));
   

},false);
}


