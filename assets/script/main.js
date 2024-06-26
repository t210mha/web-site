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
