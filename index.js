

function appear() {
  var homepageFooter = document.getElementById('homepage-footer');
  var scrollingElement = (document.scrollingElement || document.body);
  homepageFooter.style.display = 'block';
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
