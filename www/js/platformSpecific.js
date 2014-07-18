function LocalData() {
    var loadAtStartup = ["user"]; 
    var allEntries = loadAtStartup.concat([]);
    var savedData;
    var myself = this;

    this.initialize = function() {
        savedData = {};
        for(var i = 0; i < loadAtStartup.length; i++) {
            try {
                savedData[loadAtStartup[i]] =
                    JSON.parse(window.localStorage.getItem(loadAtStartup[i]).trim());
                controller.log("loaded data" + savedData[loadAtStartup[i]], 1);
            } catch(err) {
                controller.log("error parsing json! " + err, 8);
            }
        }
        alert(JSON.strinfigy(savedData.user));
        return myself;
    };

    this.get = function(key) {
        if(!savedData) {
            myself.initialize();
        }
        controller.log("getting " +key, 1);
        controller.log("has " + savedData[key], 1);
        return savedData[key];
    };

    this.save = function(key, value) {
        if(!savedData) {
            myself.initialize();
        }
        savedData[key] = value;
        window.localStorage.setItem(key, JSON.stringify(value));
        return myself;
    };

    return this;
}
// will only work on mobile devices
var youLoseDevice = "mobile";
controller.log("mobile startup", 1);
document.addEventListener("deviceready", controller.initialize, false);
document.addEventListener("resume", controller.resume, false);

