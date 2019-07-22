var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9193",
        "ko": "807"
    },
    "minResponseTime": {
        "total": "1121",
        "ok": "1887",
        "ko": "1121"
    },
    "maxResponseTime": {
        "total": "19860",
        "ok": "19860",
        "ko": "2273"
    },
    "meanResponseTime": {
        "total": "10611",
        "ok": "11396",
        "ko": "1669"
    },
    "standardDeviation": {
        "total": "5624",
        "ok": "5174",
        "ko": "266"
    },
    "percentiles1": {
        "total": "10871",
        "ok": "12088",
        "ko": "1755"
    },
    "percentiles2": {
        "total": "15788",
        "ok": "16079",
        "ko": "1882"
    },
    "percentiles3": {
        "total": "18839",
        "ok": "18897",
        "ko": "2027"
    },
    "percentiles4": {
        "total": "19469",
        "ok": "19488",
        "ko": "2138"
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
        "count": 9193,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 807,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "459.65",
        "ko": "40.35"
    }
},
contents: {
"req_request3-0e747": {
        type: "REQUEST",
        name: "request3",
path: "request3",
pathFormatted: "req_request3-0e747",
stats: {
    "name": "request3",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9193",
        "ko": "807"
    },
    "minResponseTime": {
        "total": "1121",
        "ok": "1887",
        "ko": "1121"
    },
    "maxResponseTime": {
        "total": "19860",
        "ok": "19860",
        "ko": "2273"
    },
    "meanResponseTime": {
        "total": "10611",
        "ok": "11396",
        "ko": "1669"
    },
    "standardDeviation": {
        "total": "5624",
        "ok": "5174",
        "ko": "266"
    },
    "percentiles1": {
        "total": "10874",
        "ok": "12085",
        "ko": "1755"
    },
    "percentiles2": {
        "total": "15788",
        "ok": "16080",
        "ko": "1882"
    },
    "percentiles3": {
        "total": "18839",
        "ok": "18897",
        "ko": "2027"
    },
    "percentiles4": {
        "total": "19469",
        "ok": "19488",
        "ko": "2138"
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
        "count": 9193,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 807,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "459.65",
        "ko": "40.35"
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
