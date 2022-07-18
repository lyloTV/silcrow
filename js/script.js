var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = 'Mac OS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = 'Windows';
} else if (/Android/.test(userAgent)) {
  os = 'Android';
} else if (!os && /Linux/.test(platform)) {
  os = 'Linux';
}

window.addEventListener("load", function(event) {
  var button = document.getElementById("download-button");
  var caption = document.getElementById("download-caption");
  if (os == "Mac OS") {
    document.getElementById("download-icon-macos").style.display = "inline";
    caption.innerHTML = "MacOS 10.13 - High Sierra / 10.14 - Mojave / 10.15 - Catalina / 11.0 - Big Sur / 12.0 - Monterey";
  } else if (os == "Windows") {
    document.getElementById("download-icon-windows").style.display = "inline";
    caption.innerHTML  = "";
  } else {
    button.disabled = true;
  }

  document.querySelector("#download-button").addEventListener('click', function(event) {
    if (os == "Mac OS") {
      window.open("https://apps.apple.com/app/silcrow/id1602134456");
    } else if (os == "Windows") {
      window.open("https://www.microsoft.com/p/silcrow/9p969t1tt5jk");
    }
  });

  document.querySelector("#anydesk-button").addEventListener('click', function(event) {
    var button = document.getElementById("anydesk-button");
    if (os == "Mac OS") {
      window.open("https://get.anydesk.com/TKJykQJ2/AnyDesk_Custom_Client.dmg");
    } else if (os == "Windows") {
      window.open("https://get.anydesk.com/xeFEfzYu/AnyDesk_Custom_Client.exe");
    } else {
      window.open( "https://anydesk.com/download");
    }
  });
});
