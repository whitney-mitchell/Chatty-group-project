var dark = document.getElementById('darkTheme');
dark.addEventListener("change", theme);

 function theme(){
  console.log("dark Theme");
  document.querySelector("body").classList.toggle("darkTheme");
}

var larger = document.getElementById('largeText');
larger.addEventListener("change", big);

function big(){
  console.log("bigger");
  document.querySelector("body").classList.toggle("largeText");
}
