//新闻滚动条
$.get("api/getNews").done(function (data) {
    var ul = $("<ul></ul>");
    var li;
    var a;

    for (var i = 0; i < 4; i++) {
        li = $("<li></li>");
        a = $("<a href='" + data[i].sourceUrl + "' class='glyphicon glyphicon-flag' target='_blank'></a>").text(data[i].title + "  发布日期：" + data[i].pubDate);
        li.append(a);
        ul.append(li);
    }
    $('#news').append(ul);

    $('#news').vTicker({
        speed: 700,
        pause: 3000,
        showItems: 1,
        animation: '',
        mousePause: true,
        isPaused: false,
        direction: 'up',
        height: 0
    });
})

function windowResize() {
    setTimeout("$(window).trigger('resize');","10");
}

window.onresize = function() {
    try {
        chinaMap.resize();
        trendChartsForeign.resize();
        trendCharts.resize();
    } catch (e) {
    }
};

function loadHtml(url, id) {
    $.ajax({
        url: url,
        dataType: "html",
        async: false,
        success: function (data) {
            $(id).html(data);
        }
    })

    windowResize();
}

//比较数组对象
function sortBy(field) {
    return function(a,b) {
        return parseInt(b[field]) - parseInt(a[field]);
    }
}

// 数字动态变化
/**
 *
 * @param {}
 *            target 目标元素的 ID
 * @param {}
 *            startVal 开始值
 * @param {}
 *            endVal 结束值
 * @param {}
 *            decimals 小数点
 */
function countUp(target, startVal, endVal, decimals) {
    new CountUp(target, startVal, endVal, decimals, 1).start();
}

/**
 *
 * @param {}
 *            target 目标元素的 ID
 * @param {}
 *            startVal 开始值
 * @param {}
 *            endVal 结束值
 * @param {}
 *            decimals 小数点
 * @param {}
 *            options 选项 { useEasing: true, useGrouping: true, separator: ',',
 *            decimal: '.', };
 */
// function countUp(target, startVal, endVal, decimals, options) {
//     new CountUp(target, startVal, endVal, decimals, 1, options).start();
// }


$(function () {
    loadHtml("views/chinaView","#china");
})