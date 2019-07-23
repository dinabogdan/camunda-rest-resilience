var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "1238",
        "ok": "-",
        "ko": "1238"
    },
    "maxResponseTime": {
        "total": "30497",
        "ok": "-",
        "ko": "30497"
    },
    "meanResponseTime": {
        "total": "16400",
        "ok": "-",
        "ko": "16400"
    },
    "standardDeviation": {
        "total": "8217",
        "ok": "-",
        "ko": "8217"
    },
    "percentiles1": {
        "total": "16631",
        "ok": "-",
        "ko": "16635"
    },
    "percentiles2": {
        "total": "23513",
        "ok": "-",
        "ko": "23509"
    },
    "percentiles3": {
        "total": "28891",
        "ok": "-",
        "ko": "28891"
    },
    "percentiles4": {
        "total": "29949",
        "ok": "-",
        "ko": "29949"
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
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "322.581",
        "ok": "-",
        "ko": "322.581"
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
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "1238",
        "ok": "-",
        "ko": "1238"
    },
    "maxResponseTime": {
        "total": "30497",
        "ok": "-",
        "ko": "30497"
    },
    "meanResponseTime": {
        "total": "16400",
        "ok": "-",
        "ko": "16400"
    },
    "standardDeviation": {
        "total": "8217",
        "ok": "-",
        "ko": "8217"
    },
    "percentiles1": {
        "total": "16624",
        "ok": "-",
        "ko": "16632"
    },
    "percentiles2": {
        "total": "23508",
        "ok": "-",
        "ko": "23509"
    },
    "percentiles3": {
        "total": "28891",
        "ok": "-",
        "ko": "28891"
    },
    "percentiles4": {
        "total": "29949",
        "ok": "-",
        "ko": "29949"
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
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "322.581",
        "ok": "-",
        "ko": "322.581"
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
