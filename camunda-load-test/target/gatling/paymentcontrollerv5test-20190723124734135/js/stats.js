var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9176",
        "ko": "824"
    },
    "minResponseTime": {
        "total": "2029",
        "ok": "2366",
        "ko": "2029"
    },
    "maxResponseTime": {
        "total": "28967",
        "ok": "28967",
        "ko": "3291"
    },
    "meanResponseTime": {
        "total": "15423",
        "ok": "16568",
        "ko": "2672"
    },
    "standardDeviation": {
        "total": "7849",
        "ok": "7157",
        "ko": "286"
    },
    "percentiles1": {
        "total": "15701",
        "ok": "16848",
        "ko": "2720"
    },
    "percentiles2": {
        "total": "22260",
        "ok": "22780",
        "ko": "2903"
    },
    "percentiles3": {
        "total": "27396",
        "ok": "27497",
        "ko": "3049"
    },
    "percentiles4": {
        "total": "28354",
        "ok": "28364",
        "ko": "3174"
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
        "count": 9176,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 824,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "305.867",
        "ko": "27.467"
    }
},
contents: {
"req_request5-cdd0c": {
        type: "REQUEST",
        name: "request5",
path: "request5",
pathFormatted: "req_request5-cdd0c",
stats: {
    "name": "request5",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9176",
        "ko": "824"
    },
    "minResponseTime": {
        "total": "2029",
        "ok": "2366",
        "ko": "2029"
    },
    "maxResponseTime": {
        "total": "28967",
        "ok": "28967",
        "ko": "3291"
    },
    "meanResponseTime": {
        "total": "15423",
        "ok": "16568",
        "ko": "2672"
    },
    "standardDeviation": {
        "total": "7849",
        "ok": "7157",
        "ko": "286"
    },
    "percentiles1": {
        "total": "15703",
        "ok": "16848",
        "ko": "2720"
    },
    "percentiles2": {
        "total": "22259",
        "ok": "22782",
        "ko": "2903"
    },
    "percentiles3": {
        "total": "27396",
        "ok": "27497",
        "ko": "3049"
    },
    "percentiles4": {
        "total": "28354",
        "ok": "28364",
        "ko": "3174"
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
        "count": 9176,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 824,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "305.867",
        "ko": "27.467"
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
