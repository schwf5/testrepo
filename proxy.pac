function FindProxyForURL(url, host) {

  if (shExpMatch(url, "https://test*.ch/*"))
    return "PROXY 88.88.88.88";

  return "DIRECT";
}
