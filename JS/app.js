class BoredActivity {
    content = "";
    getNewActivity(URL) {
        let ajax = new XMLHttpRequest();
        let scoped = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let activityObject = JSON.parse(this.responseText);
                document.getElementById("activityText").innerHTML = activityObject.activity;
                scoped.content = activityObject.activity;
            } else if (this.readyState != 4) {
                document.getElementById("activityText").innerHTML = "Loading";
            } else {
                document.getElementById("activityText").innerHTML = "Something went Wrong";
            }
        }
        ajax.open("GET", URL, true);
        ajax.send();
    }
}

document.getElementById("activityButton").addEventListener("click", function () {
    let myActivity = new BoredActivity();
    myActivity.getNewActivity("http://www.boredapi.com/api/activity/");
});

document.getElementById("recActivityButton").addEventListener("click", function () {
    let myActivity = new BoredActivity();
    myActivity.getNewActivity("http://www.boredapi.com/api/activity?type=recreational");
});