$(function() {
    $('#switch1').click(function() {
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
            $('.card-header1').css({
                'backgroundColor': '#7C002F',
                'color': '#ffffff',
                'textAlign': 'center',
                'height': '100px',
                'verticalAlign': 'middle'
            });
            $('.card-header1').html('Сильный ветер (шквалистый)')
            $('.img-box1').css('backgroundImage', 'url("http://d.radikal.ru/d41/2003/cb/2d748f712ad0.png")');
            $('.img-box1').css('backgroundRepeat', 'no-repeat');
            $('.card-text1').html('Скорость порывов от 25м/c и более. ');
            $('.header-text').css({
                'fontFamily': 'Arial',
                'fontWeight': 'regular',
                'fontSize': '16pt',
                'height': '50px',
                'display': 'inline-block'
            })
        } else {
            $(this).trigger('off.switch');
            $('.card-header1').css({
                'backgroundColor': '#7C7C7C',
                'color': '#ffffff',
                'textAlign': 'center',
                'height': '100px',
                'verticalAlign': 'middle'
            });
            $('.card-header1').html('Ветер')
            $('.img-box1').css('backgroundImage', 'url("http://d.radikal.ru/d19/2003/29/20b73f81d588.png")');
            $('.img-box1').css('backgroundRepeat', 'no-repeat');
            $('.card-text1').html('');
            $('.header-text').css({
                'font-family': 'Arial',
                'fontWeight': 'regular',
                'fontSize': '16pt',
                'height': '50px',
                'display': 'inline-block'
            })
        };

        $('.switch-btn1').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn1').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch2').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header2').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header2').html('Сильный дождь (Ливень)')
                $('.img-box2').css('backgroundImage', 'url("https://a.radikal.ru/a15/2003/c0/227049f0a3b4.png")');
                $('.img-box2').css('backgroundRepeat', 'no-repeat')
                $('.card-text2').html('Кол-во осадков 100 мм и более, в период менее чем за 12 часов.')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header2').css('backgroundColor', '#7c7c7c');
                $('.card-header2').html('Дождь')
                $('.img-box2').css('backgroundImage', 'url("https://c.radikal.ru/c31/2003/05/6b6696f6ff66.png")');
                $('.img-box2').css('backgroundRepeat', 'no-repeat')
                $('.card-text2').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            }
        });
        $('.switch-btn2').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn2').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch3').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header3').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header3').html('Сильный снег')
                $('.img-box3').css('backgroundImage', 'url("https://d.radikal.ru/d15/2003/c2/d3316ea556bb.png")');
                $('.img-box3').css('backgroundRepeat', 'no-repeat')
                $('.card-text3').html('Кол-во осадков 20 мм и более, в период менее чем за 12 часов.')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header3').css('backgroundColor', '#7c7c7c');
                $('.card-header3').html('Снег')
                $('.img-box3').css('backgroundImage', 'url("https://b.radikal.ru/b15/2003/63/e0b71a428898.png")');
                $('.img-box3').css('backgroundRepeat', 'no-repeat')
                $('.card-text3').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            }
        });
        $('.switch-btn3').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn3').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch4').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header4').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header4').html('Сильная метель')
                $('.img-box4').css('backgroundImage', 'url("https://d.radikal.ru/d43/2003/cd/c17500b30af3.png")');
                $('.img-box4').css('backgroundRepeat', 'no-repeat')
                $('.card-text4').html('При ветре 20 м/c в течение суток с выпадением снега.')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header4').css('backgroundColor', '#7c7c7c');
                $('.card-header4').html('Метель')
                $('.img-box4').css('backgroundImage', 'url("https://b.radikal.ru/b43/2003/88/322c95029677.png")');
                $('.img-box4').css('backgroundRepeat', 'no-repeat')
                $('.card-text4').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            }
        });
        $('.switch-btn4').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn4').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch5').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header5').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header5').html('Крупный град')
                $('.img-box5').css('backgroundImage', 'url("https://b.radikal.ru/b17/2003/6c/61c5c8eda49b.png")');
                $('.img-box5').css('backgroundRepeat', 'no-repeat')
                $('.card-text5').html('Диаметр градин 20 мм и более.')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header5').css('backgroundColor', '#7c7c7c');
                $('.card-header5').html('Град')
                $('.img-box5').css('backgroundImage', 'url("https://c.radikal.ru/c27/2003/fc/d215f11bfb06.png")');
                $('.img-box5').css('backgroundRepeat', 'no-repeat')
                $('.card-text5').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            }
        });
        $('.switch-btn5').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn5').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch6').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header6').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header6').html('Сильный гололёд')
                $('.img-box6').css('backgroundImage', 'url("https://d.radikal.ru/d40/2003/2d/ee37c5abbecc.png")');
                $('.img-box6').css('backgroundRepeat', 'no-repeat')
                $('.card-text6').html('Диаметр отложений на проводах 20 мм и более.')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header6').css('backgroundColor', '#7c7c7c');
                $('.card-header6').html('Гололёд')
                $('.img-box6').css('backgroundImage', 'url("https://d.radikal.ru/d31/2003/f1/d7d3869bec35.png")');
                $('.img-box6').css('backgroundRepeat', 'no-repeat')
                $('.card-text6').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })

            }
        });
        $('.switch-btn6').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn6').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });

    $(function() {
        $('#switch7').click(function() {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
                $('.card-header7').css({
                    'backgroundColor': '#7C002F',
                    'color': '#ffffff',
                    'textAlign': 'center',
                    'height': '100px',
                    'verticalAlign': 'middle'
                });
                $('.card-header7').html('Сильный мороз')
                $('.img-box7').css('backgroundImage', 'url("https://b.radikal.ru/b30/2003/99/af380ecf92b4.png")');
                $('.img-box7').css('backgroundRepeat', 'no-repeat')
                $('.card-text7').html('Температура воздуха у поверхности земли - 30°C и ниже для Европейской части РФ. ')
                $('.header-text').css({
                    'fontFamily': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            } else {
                $(this).trigger('off.switch');
                $('.card-header7').css('backgroundColor', '#7c7c7c');
                $('.card-header7').html('Мороз')
                $('.img-box7').css('backgroundImage', 'url("https://b.radikal.ru/b05/2003/46/5c028b38ca3a.png")');
                $('.img-box7').css('backgroundRepeat', 'no-repeat')
                $('.card-text7').html('')
                $('.header-text').css({
                    'font-family': 'Arial',
                    'fontWeight': 'regular',
                    'fontSize': '16pt',
                    'height': '50px',
                    'display': 'inline-block'
                })
            }
        });
        $('.switch-btn7').on('on.switch', function() {
            $($(this).attr('data-id')).removeClass('bl-hide');

        });
        $('.switch-btn7').on('off.switch', function() {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });
})