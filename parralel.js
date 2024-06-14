import http from 'k6/http';

export const options = {

    discardResponseBodies: true,
    scenarios: {
        hello: {
            executor: 'ramping-arrival-rate',
            timeUnit: '1s',
            stages: [
                { target: 40, duration: '30s' },
                { target: 40, duration: '3m30s' },
                { target: 300, duration: '3m30s' },
                { target: 300, duration: '3m30s' },
                { target: 400, duration: '3m30s' },
                { target: 400, duration: '3m30s' },
                { target: 500, duration: '3m30s' },
                { target: 500, duration: '3m30s' },
                { target: 600, duration: '3m30s' },
                { target: 600, duration: '3m30s' },
                { target: 0, duration: '30s' },
            ],
            preAllocatedVUs: 100, // how large the initial pool of VUs would be
            maxVUs: 1000,
            tags: { test_type: 'hello' },
            exec: 'hello',
        },
        moreload: {
            executor: 'ramping-arrival-rate',
            timeUnit: '1s',
            stages: [
                { target: 10, duration: '30s' },
                { target: 10, duration: '3m30s' },
                { target: 75, duration: '3m30s' },
                { target: 75, duration: '3m30s' },
                { target: 100, duration: '3m30s' },
                { target: 100, duration: '3m30s' },
                { target: 125, duration: '3m30s' },
                { target: 125, duration: '3m30s' },
                { target: 150, duration: '3m30s' },
                { target: 150, duration: '3m30s' },
                { target: 0, duration: '30s' },
            ],
            preAllocatedVUs: 10, // how large the initial pool of VUs would be
            maxVUs: 1000,
            tags: { test_type: 'moreload' },
            exec: 'moreload',
        },
    },
};

export function hello() {
    http.get('http://127.0.0.1:8050/index', {
        tags: { my_custom_tag: 'hello' },
    });
}

export function moreload() {
    http.get('http://127.0.0.1:8050/moreload', { tags: { my_custom_tag: 'moreload' } });
}