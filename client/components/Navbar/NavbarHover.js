





/* 

liEhzT

let hoverLine = document.querySelector('#hoverline');
let item = document.querySelectorAll('nav a');

function hoverUnder(a){
    hoverLine.style.left = a.offsetLeft+"px";
    hoverLine.style.width = a.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('mouseenter', (a)=>{re
        hoverUnder(a.target);
    })
})


*/


/* nav #hoverline {
    position: absolute;
    height: 4px;
    left: 0;
    width: 0;
    background: #f6a3d1;
    bottom: 1em;
    transition: .6s;
    border-radius: 4px;
    transform: translateY(.7em);
}
    li:nth-child(n+2):nth-child(-n+15){
        display: none;
    }    */