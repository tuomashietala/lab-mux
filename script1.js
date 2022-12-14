

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


document.addEventListener('click', ({ target }) => {
  if (!target.closest('#menupop')) {
    document.querySelector('#myLinks').style.display = 'none'
  }
  }
)