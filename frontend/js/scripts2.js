$(document).ready(function () {

    var scroolValue = "close";
    $(window).scroll(function () {
        if ($(document).scrollTop() < 150) {
            if (scroolValue === "open") {
                scroolValue = "close";
                $("#logo").stop()
                $("#logo").animate({
                    height: "12vh"
                })

                $(".headerLinkUp .headerLink").stop()
                $(".headerLinkUp .headerLink").animate({
                    fontSize: "2.5vh"
                })
            }
        } else {
            if (scroolValue === "close") {
                scroolValue = "open";
                $("#logo").stop()
                $("#logo").animate({
                    height: "10vh"
                })

                $(".headerLinkUp .headerLink").stop()
                $(".headerLinkUp .headerLink").animate({
                    fontSize: "2.2vh"
                })
            }
        }
    });




    var language;

    function getLanguage(langOld, page) {
        console.log(langOld, page);
        $.ajax({
            url: '/lib/language/' + page + '/' + langOld + '.json',
            async: false,
            success: function (lang) {
                language = lang;
            }
        });
        var langNumbers = $(".lang_choose")
        var placeholders = $(".placeholders")
        for (var i = 0; i < langNumbers.length; i++) {
            $(langNumbers[i]).html(language[0][i])
        }
        for (var y = 0; y < 4; y++) {
            $(placeholders[y]).attr('placeholder', language[1][y])
        }
    }


    // getLanguage("tr")
    $('#langTr').click(function () {
        $("#defaultImgLang").attr("src", "assets/tekstil/yeniFoto/türk.jpg")
        if ($(this).hasClass("index")) {
            var page = "index"
        }
        if ($(this).hasClass("cözüm")) {
            var page = "cözüm"
        }
        if ($(this).hasClass("machines")) {
            var page = "machines"
        }
        getLanguage("tr", page)
    });

    $('#langEn').click(function () {
        $("#defaultImgLang").attr("src", "assets/tekstil/yeniFoto/england.jpg")
        if ($(this).hasClass("index")) {
            var page = "index"
        }
        if ($(this).hasClass("cözüm")) {
            var page = "cözüm"
        }
        if ($(this).hasClass("machines")) {
            var page = "machines"
        }
        getLanguage("en", page)
    });

    $('#langAl').click(function () {
        $("#defaultImgLang").attr("src", "assets/tekstil/yeniFoto/polonya.jpg")
        if ($(this).hasClass("index")) {
            var page = "index"
        }
        if ($(this).hasClass("cözüm")) {
            var page = "cözüm"
        }
        if ($(this).hasClass("machines")) {
            var page = "machines"
        }
        getLanguage("al", page)
    });




    $(".image-container").hover(function (e) {
        $(this).children(".overlay").css("opacity", 1)
    }, function (e) {
        $(this).children(".overlay").css("opacity", 0.7)
    })


    $("#message_2").on("click", function (e) {
        window.location.href = "#place4-1"
    })



    $("#place1 , #place2 ,#place3, #place4 , #place5 , #place4-1").on("click", function (e) {
        $(".show").removeClass("show")
    })


    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });

        return false;
    });


    var window_size = window.matchMedia('(min-width: 768px)')
    if (window_size.matches) {
        $(' .dropdown ').hover(function () {
            var $subMenu = $(this).children('ul.dropdown-menu');
            $subMenu.addClass('show');
        }, function () {
            var $subMenu = $(this).children('ul.dropdown-menu');
            $subMenu.removeClass('show');
        })

        $('.dropdown-submenu').hover(function () {
            var $subMenu1 = $(this).children('.dropdown-menu');
            $subMenu1.toggleClass('show');
        }, function () {
            var $subMenu1 = $(this).children('.dropdown-menu');
            $subMenu1.toggleClass('show');
        })
    }

    $(".router").on("click", function (e) {
        $("#navbarSupportedContent").removeClass("show")
    })


    var messageSend = false;
    $("#formButton").on("click", function (e) {
        if ($("#name_1").val() == "" || $("#name_2").val() == "" || $("#exampleFormControlInput1").val() == "" || $("#exampleFormControlTextarea1").val() == "") {
            return true;
        } else {
            e.preventDefault();
            if (!messageSend) {
                $.ajax({
                    method: 'POST',
                    url: 'https://formsubmit.co/ajax/hamzaaygun62@gmail.com',
                    dataType: 'json',
                    accepts: 'application/json',
                    data: {
                        "İsim-Soyisim": $("#name_1").val(),
                        "Firma": $("#name_2").val(),
                        "Mail adresi": $("#exampleFormControlInput1").val(),
                        "Mesaj": $("#exampleFormControlTextarea1").val(),
                    },
                    success: (data) => {
                        if (data.success == "true") {
                            $("#formButton").css("backgroundColor", "green")
                            $("#formButton").html("MESAJINIZ İLETİLDİ...");
                            messageSend = true;
                        } else {
                            $("#formButton").css("backgroundColor", "red")
                            $("#formButton").html("MESAJ GÖNDERİLEMEDİ...");
                        }
                        console.log("ok", data);
                    },
                    error: (err) => {
                        $("#formButton").css("backgroundColor", "red")
                        $("#formButton").html("MESAJ GÖNDERİLEMEDİ...");
                        console.log("hata", err);
                    }
                });
            }
        }
    })


})