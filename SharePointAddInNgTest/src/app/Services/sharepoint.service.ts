import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharepointService {
  constructor() {}

  getappUrl() {
    return `https://${window.location.host}/sites/spec-dev/experiment`;
  }

  targetUrl(url: string): string {
   
    if (hostUrl) {
      const api = '_api/';
      const index = url.indexOf(api);
      url =
        url.slice(0, index + api.length) +
        'SP.AppContextSite(@target)' +
        url.slice(index + api.length - 1);

      let connector = '?';
      if (url.indexOf('?') > -1 && url.indexOf('$') > -1) {
        connector = '&';
      }
      url = url + "@target='" + hostUrl + "'";
    }
  //  console.log(url);
    return url;
  }
}
