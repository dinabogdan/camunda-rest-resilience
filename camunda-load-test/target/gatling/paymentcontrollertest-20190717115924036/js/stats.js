var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9102",
        "ko": "898"
    },
    "minResponseTime": {
        "total": "788",
        "ok": "1086",
        "ko": "788"
    },
    "maxResponseTime": {
        "total": "17604",
        "ok": "17604",
        "ko": "3228"
    },
    "meanResponseTime": {
        "total": "9242",
        "ok": "9955",
        "ko": "2019"
    },
    "standardDeviation": {
        "total": "4820",
        "ok": "4455",
        "ko": "483"
    },
    "percentiles1": {
        "total": "9531",
        "ok": "10243",
        "ko": "2069"
    },
    "percentiles2": {
        "total": "13414",
        "ok": "13738",
        "ko": "2191"
    },
    "percentiles3": {
        "total": "16580",
        "ok": "16646",
        "ko": "2930"
    },
    "percentiles4": {
        "total": "17180",
        "ok": "17193",
        "ko": "3141"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9095,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 898,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "555.556",
        "ok": "505.667",
        "ko": "49.889"
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
        "total": "10000",
        "ok": "9102",
        "ko": "898"
    },
    "minResponseTime": {
        "total": "788",
        "ok": "1086",
        "ko": "788"
    },
    "maxResponseTime": {
        "total": "17604",
        "ok": "17604",
        "ko": "3228"
    },
    "meanResponseTime": {
        "total": "9242",
        "ok": "9955",
        "ko": "2019"
    },
    "standardDeviation": {
        "total": "4820",
        "ok": "4455",
        "ko": "483"
    },
    "percentiles1": {
        "total": "9531",
        "ok": "10242",
        "ko": "2069"
    },
    "percentiles2": {
        "total": "13416",
        "ok": "13738",
        "ko": "2191"
    },
    "percentiles3": {
        "total": "16580",
        "ok": "16646",
        "ko": "2930"
    },
    "percentiles4": {
        "total": "17180",
        "ok": "17193",
        "ko": "3141"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9095,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 898,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "555.556",
        "ok": "505.667",
        "ko": "49.889"
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
