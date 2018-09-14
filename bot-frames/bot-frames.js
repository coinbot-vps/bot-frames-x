/* Create Element
*********************************/
function createContent() {
	$('body').append(folder);
}


function dataUpdate() {
  $('[data-update]').each(function (){
    var dataUPDATE = $(this).data("update");
    
  	$(this).html($(dataUPDATE).text()).closest('li').addClass('active');
  	
  });
}

function removeDash() {
    $('.folder-bot .bot-settings .title-container .title:contains("_")').each(function(){
        $(this).html($(this).html().split("_").join(" "));
    });
}

function botClasses() {
    var bot = $(".footer .footer-link .full-text").text();
    var toast = $("#toast-container");
    var LEDyellow = $(".led-yellow-blink");
    var LEDgreen = $("#dv2LastUpdatedOn");
    var exchange = $("#apiExchange").text();
    var market = $("#apiMarket").text();
    var settings = $("#nSelectedConfig").text();

    // Bot
    if (bot == "ProfitTrailer") {
        $('.folder-bot').addClass('bot-profittrailer');
    } else {
        // Silence is golden.
    }

    // Status
    if ((toast.length >= 1) && (LEDgreen.css('display') == 'none') && (LEDyellow.css('display') == 'block')) {
        $('.folder-bot').removeClass('bot-on').addClass('bot-off');
    } else {
        // Silence is golden.
    }

    // Settings
    if ((settings.includes("Franken_Strategy")) || (settings.includes("Double_Cross")) || (settings.includes("Monte_Carlo"))) {
        $('.folder-bot').removeClass('settings-normal settings-bull').addClass('settings-bear');
    } else if ((settings.includes("El_Dorado")) || (settings.includes("El_Toro")) || (settings.includes("Old_Faithful"))) { 
        $('.folder-bot').removeClass('settings-bear settings-bull').addClass('settings-normal');
    } else if ((settings.includes("Jobbing_The_Market")) || (settings.includes("Golden_Cross")) || (settings.includes("Spanish_Cross"))) { 
        $('.folder-bot').removeClass('settings-normal settings-bear').addClass('settings-bull');
    } else {
        // Silence is golden.
    }

    // Market
    if (market == "BTC") {
        $('.folder-bot').addClass('market-btc');
    } else if (market == "ETH") {
        $('.folder-bot').addClass('market-eth');
    } else if (market == "LTC") {
        $('.folder-bot').addClass('market-ltc');
    } else if (market == "USDT") {
        $('.folder-bot').addClass('market-usdt');
    } else {
        // Silence is golden.
    }

    // exchange
    if (exchange == "BITTREX") {
        $('.folder-bot').addClass('exchange-bittrex');
    } else if (exchange == "BINANCE") {
        $('.folder-bot').addClass('exchange-binance');
    } else if (exchange == "POLONIEX") {
        $('.folder-bot').addClass('exchange-poloniex');
    } else if (exchange == "HUOBI") {
        $('.folder-bot').addClass('exchange-huobi');
    } else if (exchange == "KUCOIN") {
        $('.folder-bot').addClass('exchange-kucoin');
    } else {
        // Silence is golden.
    }

    
    $('.folder-bot .bot-stats .profit-stats .percentage-price').each(function (){

        var percentage = $(this).text();
        var percentageNum = parseInt(percentage);

        if (percentageNum <= 0) {
            $(this).closest('.icon-arrow').removeClass('profitup').addClass('profitdown');
        } else if (percentageNum >= 0) {
            $(this).closest('.icon-arrow').removeClass('profitdown').addClass('profitup');
        } else {
            // Silence is golden.
        }
    });
}




/* Auto Update
*********************************/
$(document).ready(function() {
    createContent();
    setInterval(botClasses, 2000);
    setInterval(dataUpdate,2000);
    setInterval(removeDash, 2000);
});
