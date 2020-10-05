function appear() {
  var readMoreButton = document.getElementById('read-more-button');
  var additionalSingers = document.querySelectorAll('.additional-singers-article');

  //var arrowForward = document.getElementById('arrowForward');
  //var arrowBackward = document.getElementById('arrowBackward').innerHTML('22');

  for (let i = 1; i < additionalSingers.length; i++) {
    if (additionalSingers[i].style.display === 'flex') {
      additionalSingers[i].style.display = 'none';
      readMoreButton.innerHTML = 'Read More >>';
      console.log('if');
    }else {
      additionalSingers[i].style.display = 'flex';
      readMoreButton.innerHTML = '<< Read Less';
    }
  }
}

function mobileNav() {
  var mobilNavUl = document.querySelector('.mobile-nav-ul');
  if (mobilNavUl.style.display === 'block') {
    console.log('1');
    mobilNavUl.style.display = 'none';
  }else {
    console.log('2');
    mobilNavUl.style.display = 'block';
  }
}
