var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9173",
        "ko": "827"
    },
    "minResponseTime": {
        "total": "765",
        "ok": "2047",
        "ko": "765"
    },
    "maxResponseTime": {
        "total": "30918",
        "ok": "30918",
        "ko": "3060"
    },
    "meanResponseTime": {
        "total": "16145",
        "ok": "17426",
        "ko": "1935"
    },
    "standardDeviation": {
        "total": "8882",
        "ok": "8132",
        "ko": "582"
    },
    "percentiles1": {
        "total": "16504",
        "ok": "18109",
        "ko": "1740"
    },
    "percentiles2": {
        "total": "23990",
        "ok": "24515",
        "ko": "2521"
    },
    "percentiles3": {
        "total": "29241",
        "ok": "29361",
        "ko": "2895"
    },
    "percentiles4": {
        "total": "30380",
        "ok": "30401",
        "ko": "2996"
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
        "count": 9173,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 827,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "286.656",
        "ko": "25.844"
    }
},
contents: {
"req_request4-c9ae9": {
        type: "REQUEST",
        name: "request4",
path: "request4",
pathFormatted: "req_request4-c9ae9",
stats: {
    "name": "request4",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9173",
        "ko": "827"
    },
    "minResponseTime": {
        "total": "765",
        "ok": "2047",
        "ko": "765"
    },
    "maxResponseTime": {
        "total": "30918",
        "ok": "30918",
        "ko": "3060"
    },
    "meanResponseTime": {
        "total": "16145",
        "ok": "17426",
        "ko": "1935"
    },
    "standardDeviation": {
        "total": "8882",
        "ok": "8132",
        "ko": "582"
    },
    "percentiles1": {
        "total": "16507",
        "ok": "18110",
        "ko": "1740"
    },
    "percentiles2": {
        "total": "23992",
        "ok": "24513",
        "ko": "2521"
    },
    "percentiles3": {
        "total": "29241",
        "ok": "29360",
        "ko": "2895"
    },
    "percentiles4": {
        "total": "30380",
        "ok": "30401",
        "ko": "2996"
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
        "count": 9173,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 827,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "286.656",
        "ko": "25.844"
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
