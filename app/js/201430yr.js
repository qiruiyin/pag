var jump = document.querySelectorAll('[data-jump]');
for(var i=0, x=jump.length; i<x; i++) {
  jump[i].addEventListener('click', function(){
    window.location = 'articles.html#' + this.dataset.jump;
  }, false);
}

var swiper = new Swiper('#rootSwiper', {
  hashnav: true
});

var artSwiper = [];
var doArtSwiper = function(el, i){
  var id = document.querySelector('#'+el).querySelector(".swiper-pagination").id;
  artSwiper[i]=id;

  artSwiper[i] = new Swiper('#' + el, {
    pagination: '#' + id,
    spaceBetween: 8,
    slidesPerView: 1.45,
    centeredSlides: true,
    loop: true
  });
};

var allBox = document.querySelectorAll(".qir");
 
for(var i = allBox.length-1; i >= 0; i--){
  doArtSwiper(allBox[i].id, i);
}

// 大图内文字显示
var imgbtn = document.querySelectorAll('.img-btn');
for (var i = imgbtn.length - 1; i >= 0; i--) {
  imgbtn[i].addEventListener('click',function(){
    this.nextSibling.style.display = this.nextSibling.style.display == 'none' ? 'block' : 'none';
  },false);
};
