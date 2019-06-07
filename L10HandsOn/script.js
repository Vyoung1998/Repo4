$(document).ready(function(){
    $("img").hover(function(){
        $(this).addClass("size");
    });
});


let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("repos").innerHTML = gitObject.repos;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Vyoung1998/repos", true);
gitHubRequest.send();