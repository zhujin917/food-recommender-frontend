export default class API {
  #url;
  constructor(server: '35' | '25', route: string) {
    if (server == '35') this.#url = 'http://192.168.137.1:5000' + route;
    else if (server == '25') this.#url = 'http://192.168.137.237:3210' + route;
    else throw new Error('Server not exists.');
  }

  async get(data: unknown = {}, type: 'json' | 'text' = 'json') {
    let params = '';
    for (const [key, value] of Object.entries(data as object)) {
      params += params ? '&' : '?';
      params += `${key}=${encodeURIComponent(value)}`;
    }
    const response = await fetch(this.#url + params, {
      method: 'GET',
    });
    return await response[type]();
  }

  async post(data: unknown = {}, type: 'json' | 'text' = 'json') {
    // let body = '';
    // for (const [key, value] of Object.entries(data as object)) {
    //   if (body) body += '&';
    //   body += `${key}=${encodeURIComponent(value)}`;
    // }
    const response = await fetch(this.#url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      // body,
    });
    return await response[type]();
  }
}
