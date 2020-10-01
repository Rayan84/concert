function appear() {
  var homepageFooter = document.getElementById('homepage-footer');
  var scrollingElement = (document.scrollingElement || document.body);
  homepageFooter.style.display = 'block';
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

function mobileNav() {
  var mobilNavUl = document.querySelector('.mobile-nav-ul');
  if (mobilNavUl.style.display == 'none') {
    console.log('1');
    mobilNavUl.style.display = 'block';
  }else {
    console.log('2');
    mobilNavUl.style.display = 'none';
  }
}
