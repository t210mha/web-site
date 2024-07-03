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
    価格・スペックページ
-----------------------------------------*/

// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loopedSlides: 3, // 3つのスライドをループに含める
    initialSlide: 0, // 初期表示スライドを2番目に設定
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true, // スクロールバーを非表示にする
    },
    autoplay: {
        delay: 6000, // 6秒ごとにスライドを切り替える
    },
});

/*-----------------------------------------
    よくあるご質問ページ
-----------------------------------------*/

// ---------- アコーディオン ----------
$('.faq__item-question').on('click', function (e) {

    // クリックしたアコーディオンの中身を開く
    $(e.currentTarget).next().slideToggle();

    // アコーディオンの開閉状態を切り替える
    $(this).toggleClass('open');

});
