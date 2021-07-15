import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    // if no method use GET
    options.method = options.method || 'GET';
    // if no headers use empty obj
    options.headers = options.headers || {};

    // if not 'GET', set "Content-Type" to
    // "application/json", "XSRF-TOKEN" header to value of
    // "XSRF-TOKEN" cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }
    // call the default window's fetch
    const res = await window.fetch(url, options);

    // if the response status code is 400 or above, throw error
    if (res.status >= 400) throw res;

    // if the response status code is under 400, return response
    return res;
}

export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}