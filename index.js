let sidebar=document.getElementById('side-bar')
let menu=document.getElementById('menu-btn')
let conntent=document.getElementById('contet-area')
var sidebarstatus= true;
menu.addEventListener('click',(e)=>
{   
    e.preventDefault();

    if(sidebarstatus)
    {
     
    sidebar.classList.add('ytsidebar-mini')
    conntent.classList.add('yt-sidebar-collapsed')
     }
   else
   {
    sidebar.classList.remove('ytsidebar-mini')
    conntent.classList.remove('yt-sidebar-collapsed')
    
    
   }
   sidebarstatus=!sidebarstatus
  
})
