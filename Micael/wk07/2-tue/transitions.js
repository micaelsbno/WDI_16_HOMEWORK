function showContent() { 
  m$('main section').className = 'hidden'
  m$('.fa-spinner').classList.remove('show_spinner')
  m$('.fa-spinner').classList.add('hide_spinner')
}

function hideContent() {
  m$('main section').className = 'show'
  m$('.fa-spinner').classList.remove('hide_spinner')
  m$('.fa-spinner').classList.add('show_spinner')
}
