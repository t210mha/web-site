/*-----------------------------------------
    Topページ
-----------------------------------------*/

// ---------- ハンバーガーメニュー ----------
// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger-button').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    $('.header__nav').toggleClass('header__nav--active');
});
// ハンバーガーメニューのリンクをクリックしたら
$('.header__nav').on('click', function (e) {
    // クリックした場所がリンクであれば
    if ($(e.target).closest('a').length) {
        // ハンバーガーメニューを閉じる
        $('.header__nav').removeClass('header__nav--active');
    }
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    $('.header__nav').removeClass('header__nav--active');
});

/*-----------------------------------------
    Topページ
-----------------------------------------*/

// ---------- アコーディオン ----------
$('.faq__item-answer').hide(); // 初期表示を非表示に
$('.faq__item-question').on('click', function (e) {

    var content = $(e.target);

    if (content.hasClass('faq__item-question')) {
        content = content.next();
    }
    else if (content.hasClass('question__badges')) {
        content = content.parent().parent().next();
    }
    else if (content.hasClass('question__badge')) {
        content = content.parent().parent().parent().next();
    }
    else if (content.hasClass('question__badge-text')) {
        content = content.parent().parent().parent().parent().next();
    }
    else if (content.hasClass('question__text')) {
        content = content.parent().parent().next();
    }
    else if (content.hasClass('question__button-image')) {
        content = content.parent().parent().next();
    }
    else {
        // question__mark, question__content, question__button
        content = content.parent().next();
    }
    content.slideToggle();

    var btn_img = $('.faq__item-question').find('img');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        btn_img.attr('src', '/../assets/image/faq/faq/icon_plus_01.png');
    }
    else {
        $(this).addClass('open')
        btn_img.attr('src', '/../assets/image/faq/faq/icon_minus_01.png');
    }
});