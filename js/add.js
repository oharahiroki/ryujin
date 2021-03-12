//topに戻る

$(function () {
    let topBtn = $('#top_page');
    topBtn.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function (event) {
        event.preventDefault();

        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});

//    スライドショー

$(function () {
    $('#slide_show').slick({
        fade: true, // fedeオン
        speed: 1500, // 画像切り替えにかかる時間（ミリ秒）
        autoplaySpeed: 3000, // 自動スライド切り替え速度
        arrows: false, // 矢印表示・非表示
        autoplay: true, // 自動再生
        slidesToShow: 1, // スライド表示数
        slidesToScroll: 1, // スライドする数
        infinite: true // 無限リピート オン・オフ
    });
});

//ハンバーガーメニュー


$(function () {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open2 = 'open2';

    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open2)) {
            $nav.addClass(open2);
        } else {
            $nav.removeClass(open2);
        }
    });

    // mask close
    $mask.on('click', function () {
        $nav.removeClass(open2);
    });
});


//アコーディオンメニュー

$(function () {
    $(".qa-list dd").hide();
    $(".qa-list dl").on("click", function (e) {
        $('dd', this).slideToggle('fast');
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });
});





//アルバムデータ


let album = [
    {src: 'img/wasitu_koukaku.jpg',msg: '和室1'},
    {src: 'img/wasitu_hana.jpg',msg: '和室2'},
    {src: 'img/wasitu_take.jpg',msg: '和室3'},
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
