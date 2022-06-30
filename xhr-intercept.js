(function(XHR) {
    "use strict";

    var open = XHR.prototype.open;
    var send = XHR.prototype.send;
    
    XHR.prototype.open = function(method, url, async, user, pass) {
        this._url = url;
        this._method = method;
        open.call(this, method, url, async, user, pass);
        console.log("Starting request: ", url, method);
    };
    
    XHR.prototype.send = function(data) {
        var self = this;
        var oldOnReadyStateChange;
        var url = this._url;
        var method = this._method;
        
        function onReadyStateChange() {
            if(self.readyState == 4 /* complete */) {
                console.log("Request completed: ", url, method);
                console.log("payload: ", data);
                try {
                    console.log("response: ", JSON.parse(self.response));
                } catch (error) {
                    console.log("response: ", self.response);
                }                
            }
            
            if(oldOnReadyStateChange) {
                oldOnReadyStateChange();
            }
        }
        
        if(this.addEventListener) {
            this.addEventListener("readystatechange", onReadyStateChange, false);
        } else {
            oldOnReadyStateChange = this.onreadystatechange; 
            this.onreadystatechange = onReadyStateChange;
        }
        
        send.call(this, data);
    }
})(XMLHttpRequest);