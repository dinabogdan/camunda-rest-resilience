var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1994",
        "ok": "-",
        "ko": "1994"
    },
    "maxResponseTime": {
        "total": "2381",
        "ok": "-",
        "ko": "2381"
    },
    "meanResponseTime": {
        "total": "2196",
        "ok": "-",
        "ko": "2196"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "-",
        "ko": "86"
    },
    "percentiles1": {
        "total": "2201",
        "ok": "-",
        "ko": "2201"
    },
    "percentiles2": {
        "total": "2253",
        "ok": "-",
        "ko": "2253"
    },
    "percentiles3": {
        "total": "2330",
        "ok": "-",
        "ko": "2330"
    },
    "percentiles4": {
        "total": "2360",
        "ok": "-",
        "ko": "2360"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "-",
        "ko": "333.333"
    }
},
contents: {
"req_request1-57888": {
        type: "REQUEST",
        name: "request1",
path: "request1",
pathFormatted: "req_request1-57888",
stats: {
    "name": "request1",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1994",
        "ok": "-",
        "ko": "1994"
    },
    "maxResponseTime": {
        "total": "2381",
        "ok": "-",
        "ko": "2381"
    },
    "meanResponseTime": {
        "total": "2196",
        "ok": "-",
        "ko": "2196"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "-",
        "ko": "86"
    },
    "percentiles1": {
        "total": "2201",
        "ok": "-",
        "ko": "2201"
    },
    "percentiles2": {
        "total": "2253",
        "ok": "-",
        "ko": "2253"
    },
    "percentiles3": {
        "total": "2330",
        "ok": "-",
        "ko": "2330"
    },
    "percentiles4": {
        "total": "2360",
        "ok": "-",
        "ko": "2360"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "-",
        "ko": "333.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
