var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9358",
        "ko": "642"
    },
    "minResponseTime": {
        "total": "1174",
        "ok": "1740",
        "ko": "1174"
    },
    "maxResponseTime": {
        "total": "27392",
        "ok": "27392",
        "ko": "2362"
    },
    "meanResponseTime": {
        "total": "14253",
        "ok": "15132",
        "ko": "1435"
    },
    "standardDeviation": {
        "total": "7581",
        "ok": "7027",
        "ko": "128"
    },
    "percentiles1": {
        "total": "14328",
        "ok": "15154",
        "ko": "1419"
    },
    "percentiles2": {
        "total": "20875",
        "ok": "21169",
        "ko": "1490"
    },
    "percentiles3": {
        "total": "25877",
        "ok": "25953",
        "ko": "1661"
    },
    "percentiles4": {
        "total": "26982",
        "ok": "26994",
        "ko": "1805"
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
        "count": 9358,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 642,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "357.143",
        "ok": "334.214",
        "ko": "22.929"
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
        "ok": "9358",
        "ko": "642"
    },
    "minResponseTime": {
        "total": "1174",
        "ok": "1740",
        "ko": "1174"
    },
    "maxResponseTime": {
        "total": "27392",
        "ok": "27392",
        "ko": "2362"
    },
    "meanResponseTime": {
        "total": "14253",
        "ok": "15132",
        "ko": "1435"
    },
    "standardDeviation": {
        "total": "7581",
        "ok": "7027",
        "ko": "128"
    },
    "percentiles1": {
        "total": "14328",
        "ok": "15157",
        "ko": "1419"
    },
    "percentiles2": {
        "total": "20872",
        "ok": "21165",
        "ko": "1490"
    },
    "percentiles3": {
        "total": "25877",
        "ok": "25953",
        "ko": "1661"
    },
    "percentiles4": {
        "total": "26982",
        "ok": "26994",
        "ko": "1805"
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
        "count": 9358,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 642,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "357.143",
        "ok": "334.214",
        "ko": "22.929"
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
