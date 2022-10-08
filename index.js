const topContainer=document.querySelector('.container-top')
const bottomContainer=document.querySelector('.container-bottom')
const navBar= document.querySelector('.nav-bar')
 window.addEventListener('scroll', ()=>{
    let y1= window.scrollY  // finding the height when scrolled
    let y2= bottomContainer.offsetTop //height of bottomContainer from top
    let navHeight = navBar.offsetHeight; //height of navbar
    //finding out that point from where the changes should me made
    // 50 is the margin we added
    if(y1 > y2 - navHeight - 50){ 
        navBar.classList.add('active')
    }
    else{
        navBar.classList.remove('active')
    }
 })


 //console.log to know in between


 