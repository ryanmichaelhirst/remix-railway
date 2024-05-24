// Identifies what operating system the client is running on
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent
export function getOperatingSystem() {
  const userAgent = navigator.userAgent
  let platform = "Unknown"

  if (userAgent.match(/Windows/i)) {
    platform = "Windows"
  } else if (userAgent.match(/Macintosh|Mac OS/i)) {
    platform = "Mac"
  } else if (userAgent.match(/Linux/i)) {
    platform = "Linux"
  }

  return platform
}
