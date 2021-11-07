document.querySelector(".i").addEventListener("click",function()
{
    this.style.display = "none";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.querySelector(".left").style.width = "48%";
    document.querySelector(".right").style.width = "48%";
});

document.querySelector("#submit").onclick = function()
{
    this.style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById(".i").style.display = "block";
}

function logo()
{
	window.open("file:///C:/Users/admin/Desktop/kun.uz/index.html");
}