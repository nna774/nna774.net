function FindProxyForURL(url, host) {
  if (shExpMatch(host,"*.nna774.net")) {
    return "DIRECT";
  }
  if (url.substring(0, 5) == "http:") {
    return "PROXY 10.8.8.33:8080";
  } else {
    return "DIRECT";
  }
}
