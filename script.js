
const body=document.querySelector('body')
let mian=document.querySelector('main')
let selectorall=document.querySelectorAll('.selectorall')
const nav=document.querySelector('.nav2');
const fiximg=document.querySelectorAll('.imagefixed')

let container1=document.querySelector('.container1');
let about1=document.querySelector('.about');
let resume=document.querySelector('.resume');
let blog=document.querySelector('.blog');
let portfiolio=document.querySelector('.portfolio');



let btn;
let selector=Array.from(selectorall);
let box8=document.querySelector('.pattern');
function cross() {
     btn=document.querySelector('#mainbutton i');
     btn.classList.remove('fa-bar')
     btn.classList.toggle('fa-xmark')
     nav.classList.toggle('nav1')
    mian.classList.toggle('mian')
    box8.classList.toggle('pattern1')
    fiximg.forEach((img)=>{
        img.classList.toggle("width")
    })
    selector.filter((select)=>{
        select.getAttribute('class')!=='active';
    }).map((select)=>{
        select.classList.toggle('hide')
    })
    body.classList.toggle('overflow')
}
// body.style.overflow='scroll';
function home() {
    function activer() {
        blog.classList.remove('active')
        resume.classList.remove('active')
        portfiolio.classList.remove('active')
        about1.classList.remove('active')
    }activer();
    nav.classList.toggle('nav1')
    mian.classList.remove('mian')
    box8.classList.toggle('pattern1')
    function fa() {
        btn.classList.add('fa-bar')
        btn.classList.remove('fa-xmark')
    }fa();
   
    selector.forEach((select)=>{
        select.classList.add('hide')
        
    })
    container1.classList.add('active')
    body.classList.toggle('overflow')
}
let about=()=>{
    function activer() {
        container1.classList.remove('active')
        blog.classList.remove('active')
        resume.classList.remove('active')
        portfiolio.classList.remove('active')
    }activer();   
    function fa() {
        btn.classList.add('fa-bar')
        btn.classList.remove('fa-xmark')
    }fa();
    nav.classList.toggle('nav1')

    selector.forEach((select)=>{
        select.classList.add('hide')
        
    })
    mian.classList.remove('mian')
    about1.classList.add('active')
    
    fiximg.forEach((img)=>{
        img.classList.remove("width")
    })
    body.classList.toggle('overflow')
}
let resume1=()=>{
    function activer() {
        container1.classList.remove('active')
        blog.classList.remove('active')
        about1.classList.remove('active')
        portfiolio.classList.remove('active')
    }activer();   
    function fa() {
        btn.classList.add('fa-bar')
        btn.classList.remove('fa-xmark')
    }fa();
    nav.classList.toggle('nav1')
    selector.forEach((select)=>{
        select.classList.add('hide')
        
    })
    mian.classList.remove('mian')
    resume.classList.add('active')
    
    fiximg.forEach((img)=>{
        img.classList.remove("width")
    })
    body.classList.toggle('overflow')
}
let portfolio1=()=>{
    function activer() {
        container1.classList.remove('active')
        blog.classList.remove('active')
        about1.classList.remove('active')
        resume.classList.remove('active')
    }activer();   
    function fa() {
        btn.classList.add('fa-bar')
        btn.classList.remove('fa-xmark')
    }fa();
    nav.classList.toggle('nav1')
    selector.forEach((select)=>{
        select.classList.add('hide')
        
    })
    mian.classList.remove('mian')
    portfiolio.classList.add('active')
    
    fiximg.forEach((img)=>{
        img.classList.remove("width")
    })
    body.classList.toggle('overflow')
}
let blog1=()=>{
    function activer() {
        container1.classList.remove('active')
        portfiolio.classList.remove('active')
        about1.classList.remove('active')
        resume.classList.remove('active')
    }activer();   
    function fa() {
        btn.classList.add('fa-bar')
        btn.classList.remove('fa-xmark')
    }fa();
    nav.classList.toggle('nav1')
    selector.forEach((select)=>{
        select.classList.add('hide')
        
    })
    mian.classList.remove('mian')
    blog.classList.add('active')
    
    fiximg.forEach((img)=>{
        img.classList.remove("width")
    })
    body.classList.toggle('overflow')
}



let images=document.querySelectorAll('#imagef div');
const imaage=Array.from(images);

function total() {
   console.log("sdab")
      
      imaage.map((val)=>{
         val.classList.remove('none')
   })

}
let brand=()=>{
 
   // console.log('dfdk')
   imaage.filter((val)=>{
      val.classList.remove('none')
      return  val.getAttribute('id')!=='brand';
   }).map((val)=>{
      val.classList.add('none')
   })
}
let design=()=>{
   // console.log('dfdk')
   imaage.filter((val)=>{
      val.classList.remove('none')
      return  val.getAttribute('id')!=='design';
   }).map((val)=>{
      val.classList.add('none')
   })
}
let graphic=()=>{
   // console.log('dfdk')
   imaage.filter((val)=>{
      val.classList.remove('none')
      return  val.getAttribute('id')!=='graphic';
   }).map((val)=>{
      val.classList.add('none')
   })
}
