
function closeMenu(){
  document.querySelector('.dropdown-menu-show').className = 'dropdown-menu-hidden'
}

function openMenu(){
  document.querySelector('.dropdown-menu-hidden').className = 'dropdown-menu-show'
}

document.querySelector('.fa-ellipsis-v').addEventListener('click', openMenu)

document.querySelector('.fa-times').addEventListener('click', closeMenu)