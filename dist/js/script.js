$(document).ready(function() {
    // modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow')
    $('#thanks').fadeOut();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow')
  });


    // dawnload
    $('input[type="file"]').change(function(){
        var value = $("input[type='file']").val();
        $('.value').text(value);
    });

    // up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          data: $(this).serialize()
        }).done(function() {
          $(this).find('input').val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
    
          $('form').trigger('reset');
        });
        return false;
      });
});$(document).ready(function() {
    // modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow')
    $('#thanks').fadeOut();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow')
  });


    // dawnload
    $('input[type="file"]').change(function(){
        var value = $("input[type='file']").val();
        $('.value').text(value);
    });

    // up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          data: $(this).serialize()
        }).done(function() {
          $(this).find('input').val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
    
          $('form').trigger('reset');
        });
        return false;
      });
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const cunters =  document.querySelectorAll('.skills-ratings__cunter'),
        lines = document.querySelectorAll('.skills-ratings__line span');

cunters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

