const letters = document.getElementsByClassName("zA");
for (let i = 2; i < letters.length; i+=3) {
    letters[i].style.display = "none";
}