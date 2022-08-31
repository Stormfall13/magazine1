let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};


var $slider = $('.slider');

$.each($slider, function(idx, root) {  
  var $thumbsItems = $(root).find('.slider-thumbs .slider-item');
  var currentIndex = 0;
  var total = $thumbsItems.length;
  var timeout = 99999999999;
  var interval;

  // Setup
  changeSlide($(root), currentIndex);
  
  // Start autoplay
  function autoplay() {
    currentIndex++;
    if (currentIndex >= total) currentIndex = 0;
    
    changeSlide($(root), currentIndex);
  }
  
  interval = setInterval(autoplay, timeout);
  
  // Handle thumbs click
  $thumbsItems.on('click', function(e) {
    e.preventDefault();
    
    currentIndex = $(this).index();
    
    clearInterval(interval);
    changeSlide($(root), currentIndex);
    
    interval = setInterval(autoplay, timeout);
  });
});

function changeSlide($root, index) {
  $root
    .find('.slider-main .slider-item')
    .eq(index)
    .addClass('-active')
    .siblings()
    .removeClass('-active')  
  
  $root
    .find('.slider-thumbs .slider-item')
    .eq(index)
    .addClass('-active')
    .siblings()
    .removeClass('-active')
};




$(".form button").on("click", function () {
    $(".belt").addClass("transitioned-1");
    $(".progress-inner").addClass("loading");
    
    setTimeout(function () {
        $(".form-container").addClass("transitioned-3");
    }, 3000);
    
    setTimeout(function () {
        $(".belt").removeClass("transitioned-1");
        $(".belt").addClass("transitioned-2");
    }, 3300);
    
    $(".success button").on("click", function () {
        $(".progress-inner").removeClass("loading");
        $(".belt").removeClass("transitioned-2");
        $(".form-container").removeClass("transitioned-3");
    });
    
    // setTimeout(function(){
    //   $('.form-container').addClass('transitioned-3');
    // },6000);
    // $('.belt').removeClass('transitioned-2');
    // $('.form-container').removeClass('transitioned-3');
    });
