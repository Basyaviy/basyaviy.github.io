function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var title = document.getElementById('item2-title');
var current = document.getElementById('item2-current');
var previous = document.getElementById('item2-previous');

var yesterday = "Yesterday";
var lastWeek = "Last Week";
var lastMonth = "Last Month";

doMagic("daily");

function doMagic(timeframe) {
    readTextFile("js/data.json", function(text) {
        var data = JSON.parse(text);

        for (var i = 0; i < 6; i++) {
            title = document.getElementById('item' + (i + 2) + '-title');
            current = document.getElementById('item' + (i + 2) + '-current');
            previous = document.getElementById('item' + (i + 2) + '-previous');
            var period;
            switch (timeframe) {
                case 'daily':
                    period = yesterday;
                    break;
                case 'weekly':
                    period = lastWeek;
                    break;
                case 'monthly':
                    period = lastMonth;
                    break;
            }

            title.innerText = data[i].title;
            current.innerText = data[i].timeframes[timeframe].current;
            previous.innerText = period + " - " + data[i].timeframes[timeframe].previous + "hrs";
        }
    });
}