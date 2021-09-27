let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 1000) {
    document.getElementById("navbar").style.transform = "translateY(0px)"

    if (currentScrollPos <= 50) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("nav-link-1").style.color = "#fff"
      document.getElementById("nav-link-2").style.color = "#fff"
      document.getElementById("nav-link-3").style.color = "#fff"
      document.getElementById("nav-link-4").style.color = "#fff"
      document.getElementById("togg-id").style.backgroundColor = "#fff"
      document.getElementById("togg-id-1").style.backgroundColor = "#fff"
      document.getElementById("logo").src = "./assets/logo-white.svg"
    }
    else {
      document.getElementById("navbar").style.backgroundColor = "#fff";
      document.getElementById("nav-link-1").style.color = "#000"
      document.getElementById("nav-link-2").style.color = "#000"
      document.getElementById("nav-link-3").style.color = "#000"
      document.getElementById("nav-link-4").style.color = "#000"
      document.getElementById("togg-id").style.backgroundColor = "#000"
      document.getElementById("togg-id-1").style.backgroundColor = "#000"
      document.getElementById("logo").src = "./assets/logo-black.svg"
    }
  }
  else if(currentScrollPos < prevScrollpos) {
    document.getElementById("navbar").style.transform = "translateY(0px)"
  }
  else{
    document.getElementById("navbar").style.transform = "translateY(-500px)"

  }
  prevScrollpos = currentScrollPos;
}