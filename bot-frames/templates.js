const folder = `
<article class="current folder-bot">

<!-- Bot Info -->
<section class="bot-info">
    <div class="item folder-tab">
        <span class="folder-icon icon-bot" data-update=".footer .footer-link .full-text">--</span>
    </div>
    <div class="item">
            <div class="folder-icon icon-exchange">
                    <span data-update="#apiExchange">--</span>
                    <span>-</span>
                    <span data-update="#apiMarket">--</span>
            </div>
            <div class="folder-icon icon-time" data-update="#dvUptime">--</div>
    </div>
</section>

<!-- Bot Stats 
******************************************************************************************* -->
<section class="bot-stats">

    <!-- Current Value -->
    <div class="current-value folder-icon icon-market">
        <span class="market-price market-btc" data-update="#nTotalCurrentVal">--</span>
        <span class="fiat-price" data-update="#mTCVUSDValue">--</span>
        <span class="stat-text">Total Current Value</span>
    </div>

    
    <!-- Profit Chart -->
    <div class="profit-chart"></div>

    
    <!-- Profit Stats -->
    <div class="profit-stats">
        
        <p class="folder-icon icon-arrow">
            <span class="fiat-price" data-update="#mTodayProfitUSDValue">--</span>
            <span class="market-price market-btc percentage-price" data-update="#mTodayProfitPercent">--</span>
            <span class="stat-text">Profit Today</span>
        </p>
        <p class="folder-icon icon-arrow">
            <span class="fiat-price" data-update="#mYesterdayProfitUSDValue">--</span>
            <span class="market-price market-btc percentage-price" data-update="#mYesterdayProfitPercent">--</span>
            <span class="stat-text">Profit Yesterday</span>
        </p>
        <p class="folder-icon icon-arrow">
            <span class="fiat-price" data-update="#mLastWeekProfitUSDValue">--</span>
            <span class="market-price market-btc percentage-price" data-update="#mLastWeekProfitPercent">--</span>
            <span class="stat-text">Profit Last 7 Days</span>
        </p>

    </div>

</section>

<!-- Bot Settings -->
<section class="bot-settings">
    
    <!-- graphic -->
    <i class="folder-icon icon-settings"></i>
    
    <!-- title -->
    <section class="title-container">
        <div class="title">
            <h3 data-update="#nSelectedConfig"></h3>
            <div class="settings-type"></div>
        </div> 
        <div class="graph">
            <i class="meter"></i>
        </div>
    </section>
    
    <!-- percent -->
    <!-- <b class="percent">0</b> -->
</section>


</article>`;