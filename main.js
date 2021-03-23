
var options = {
  strings: ['Web Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true, // this is a default
  // loop: true,
  showCursor: false
};

var typed = new Typed('.landingtext', options);


 $('#menubar ul li a, header a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

