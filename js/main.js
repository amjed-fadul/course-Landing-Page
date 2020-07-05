$(function () {

    // $('.instructors').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     slidesToShow: 3,
    //     prevArrow:'<span class="priv_arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
    //     nextArrow:'<span class="next_arrow"><i class="fas fa-long-arrow-alt-right"></i></span>'
    //   });

  });

  new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
  });