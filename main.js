(() => {



  // ドロワーメニュー
  const open = document.getElementById('open');
  const close = document.getElementById('close');

  const closeMenu = document.querySelector('.closemenu');

  open.addEventListener('click', () => {
    closeMenu.classList.add('show');

  });

  close.addEventListener('click', () => {
    closeMenu.classList.remove('show');

  });

  // ページ内スクロール

  $(function () {
    $('a[href^="#"]').click(function () {
      let speed = 400;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;

    });

    // トップに戻るスクロール

    const topBtn = $('.back #backTop')

    topBtn.hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }



    });




  });



})();
