// autoriser que les numero
function special_caract(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    //if (keyCode==9) return true;

    var interdit = '0123456789\b';
    if (interdit.indexOf(String.fromCharCode(keyCode)) >= 0) {
        return true;
    }
    else
        return false;
}

(function($) {
    $(window).load(function() {
        if ($(".wp-caption .wp-caption-text").length > 0)
        {
            var htmlCaption = $('.wp-caption .wp-caption-text').html();
            // htmlCaption=htmlCaption.replace('/amp;/g',"");
            var find = 'amp;';
            var re = new RegExp(find, 'g');
            htmlCaption = htmlCaption.replace(re, '');
            $('.wp-caption .wp-caption-text').html(htmlCaption);
        }
// slider top home

        $('.bxSlide').bxSlider({
            auto: true,
            pause: 6000,
            speed: 300,
            autoControls: false,
            controls: true,
            startText: '',
            stopText: '',
            pager: false,
        });

        /*** scrollReveal animation *****/
        var config = {vFactor: 0.30, reset: true, mobile: false, }
        window.sr = new scrollReveal(config);

        /***** input number style with jquery ui ******/

        $(".isnumber").spinner();

        /************************/

        /***** scroll pan ***********/
        $('#conditions_generals').jScrollPane();
        /**************/

        /**** ajout du placeholder searche form ***/
        if ($(".fr #searchform input.custom-combobox-input").length > 0) {
            $(".fr #searchform input.custom-combobox-input").attr("placeholder", "Rechercher");
        }

        if ($(".en #searchform input.custom-combobox-input").length > 0) {
            $(".en #searchform input.custom-combobox-input").attr("placeholder", "Search");
        }
        /****/

        /***** searche loading ****/
        $("#combobox").combobox({
            select: function(event, ui) {
                //alert(this.value);
                document.location.href = this.value;
            }
        });

        $("input.custom-combobox-input").live("click", function() {
            //alert( "Goodbye!" ); // jQuery 1.3+
            $('input.custom-combobox-input').focus();
            $('input.custom-combobox-input').autocomplete("search", "");
        });

        /***/

        /****** responsive slider articles *****/

        if ($(".bxslider2").length > 0)
        {
            var slider;
            slider = $('.bxslider2').bxSlider({
                auto: false,
                pause: 6000,
                speed: 300,
                autoControls: false,
                controls: true,
                startText: '',
                stopText: '',
                pager: false,
            });

            var widtht = $(window).width();
            //console.log('>> '+widtht);
            if (widtht >= 769) {
                slider.destroySlider();
            }
            else {
                slider.reloadSlider();
            }

            $(window).resize(function() {
                var widtht = $(window).width();
                //console.log('>> '+widtht);
                if (widtht >= 769) {
                    slider.destroySlider();
                    //console.log("destroy");
                } else {
                    slider.reloadSlider();
                    //console.log("reload");
                }
            });

        }
        /**** end *****/

        /****** responsive slider temoignages *****/
        if ($(".bxslider3").length > 0)
        {
            var slider3;
            slider3 = $('.bxslider3').bxSlider({
                auto: false,
                pause: 6000,
                speed: 300,
                easing: 'swing',
                mode: 'fade',
                autoControls: false,
                controls: true,
                startText: '',
                stopText: '',
                pager: false,
            });

            var widtht = $(window).width();
            if (widtht >= 769) {
                slider3.destroySlider();
            }
            else {
                slider3.reloadSlider();
            }

            $(window).resize(function() {
                var widtht = $(window).width();
                //console.log('>> '+widtht);
                if (widtht >= 769) {
                    slider3.destroySlider();
                    //console.log("destroy");
                } else {
                    slider3.reloadSlider();
                    //console.log("reload");
                }
            });
        }
        /**** end *****/

        /****** responsive slider voyageur *****/
        if ($(".bxslider4").length > 0)
        {
            var bxslider4;
            bxslider4 = $('.bxslider4').bxSlider({
                auto: false,
                pause: 6000,
                speed: 300,
                easing: 'swing',
                mode: 'fade',
                autoControls: false,
                controls: true,
                startText: '',
                stopText: '',
                pager: false,
            });

            var widtht = $(window).width();

            //console.log('>> '+widtht);
            if (widtht >= 769) {
                bxslider4.destroySlider();
            } else {
                bxslider4.reloadSlider();
            }

            $(window).resize(function() {
                var widtht = $(window).width();
                //console.log('>> '+widtht);
                if (widtht >= 769) {
                    bxslider4.destroySlider();
                    //console.log("destroy");
                } else {
                    bxslider4.reloadSlider();
                    //console.log("reload");
                }
            });
        }
        /**** end *****/

        /**** sidebar ****/

        /****** responsive slider sidbar *****/
        if ($(".temoinages_bxslider").length > 0) {
            var temoinages_bxslider;
            temoinages_bxslider = $('.temoinages_bxslider').bxSlider({
                auto: false,
                pause: 6000,
                speed: 300,
                easing: 'swing',
                mode: 'fade',
                autoControls: false,
                controls: true,
                startText: '',
                stopText: '',
                pager: false
            });
            
            var widtht = $(window).width();
            //console.log('>> '+widtht);
            if (widtht >= 960) {
                temoinages_bxslider.destroySlider();
                //console.log("destroy");
            } else {
                temoinages_bxslider.reloadSlider();
                // console.log("rolad");
            }

            $(window).resize(function() {
                var widtht = $(window).width();
                //console.log('>> '+widtht);
                if (widtht >= 960) {
                    temoinages_bxslider.destroySlider();
                    //console.log("destroy");
                } else {
                    temoinages_bxslider.reloadSlider();
                    //console.log("reload");
                }
            });
        }
        if ($(".post_bxslider").length > 0) {

            var post_bxslider;
            post_bxslider = $('.post_bxslider').bxSlider({
                auto: false,
                pause: 6000,
                speed: 300,
                easing: 'ease',
                adaptiveHeight: true,
                adaptiveHeightSpeed: 600,
                mode: 'fade',
                autoControls: false,
                controls: true,
                startText: '',
                stopText: '',
                pager: false
            });

            var widtht = $(window).width();
            //console.log('>> '+widtht);
            if (widtht >= 960) {
                post_bxslider.destroySlider();
                //console.log("destroy");
            } else {
                post_bxslider.reloadSlider();
                //console.log("rolad");
            }

            $(window).resize(function() {
                var widtht = $(window).width();
                //console.log('>> '+widtht);
                if (widtht >= 960) {
                    post_bxslider.destroySlider();
                    //console.log("destroy");
                } else {
                    post_bxslider.reloadSlider();
                    //console.log("reload");
                }
            });
        }
        /**** end *****/

        /*                      UniForm.js                               */
        /*****************************************************************/

        // Personnalisation des champs de formulaires
        $uniformed = $("input[type='number'] , .contact select, .radio input, input[type='radio'], input[type='checkbox'] , .storage-oui-non input, .nez input");
        if ($.isFunction($.fn.uniform))
            $uniformed.uniform();

        /**** ajout d'une div pour le style personnaliser sur wisiwing ***/

        if ($(".text_orange ").length > 0) {
            $(".text_orange ").wrap("<div class='text_orange_'></div>");
        }

        /*****/

        /********* call *****/
        if ($(window).width() <= 1030) {
            var tel = $(".linkphone a").text();
            // alert(tel);
            $(".linkphone a").attr("href", "tel:" + tel);
        }
        $(window).resize(function() {

            if ($(window).width() <= 1030) {
                var tel = $(".linkphone a").text();
                // alert(tel); 
                $(".linkphone a").attr("href", "tel:" + tel);
            }

            $(".ui-autocomplete").css('display', 'none');

        });
        $(".ui-autocomplete").css('display', 'none');

        //script select language
        $('.lang_sel_sel').mouseenter(function() {
            $(this).next().show();
        });
        $('.lang_sel_sel').parent().mouseleave(function() {
            $('.lang_sel_sel').next().hide();
        });

        jQuery('*').bind('click', function(e) {
            if (!jQuery(e.target).closest('.lang_sel_sel')[0]) {
                $('.lang_sel_sel').next().hide();
            }
        });

        //lien extern 
        $('.Slide-n a[href^="http://"]').not('a[href*=gusdecool]').attr('target', '_blank');
    });


})(jQuery);
