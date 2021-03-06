
var NotificationNS = {
    _Toast: {
        liveTime: 4000,
        element: {},
        /**
         * Function create toast
         * @param {string} message
         * @param {string} [className] - custom class name
         * @param {int} [liveTime] - time live toast
         */
          init: function ( message ,className, liveTime){
            var classes = ["notification-toast"];
            if(className)
                classes.push(className);
            if(liveTime)
                this.liveTime = liveTime;
            this.element = document.createElement("div");
            for(var i = 0; i < classes.length; i++)
            this.element.classList.add(classes[i]);
            this.element.textContent = message;
            setTimeout(function (el) {
                el.remove();
            }, this.liveTime, this);
          },
          remove: function () {
              this.element.classList.add("hide");
              setTimeout(function (el) {
                  el.element.parentNode.removeChild(el.element);
              }, 400,this);
          }
    },

    /**
     * Function create toast
     * @param {string} message
     * @param {string} [className] - custom class name
     * @param {int} [liveTime] - time live toast
     */
    Toast: function (message, className, liveTime) {
        this.liveTime = 4000;
        this.className = "notification-toast";
        this.element = {};
        this.init(message, className, liveTime);
    },



    _Notification: {
        container: {},

        init: function () {
            this.container = document.createElement("div");
            this.container.classList.add("notification-container");
            var body  = document.querySelector("body");
            body.appendChild(this.container);
        },
        message: function (message, className, liveTime) {
            var toast = new NotificationNS.Toast(message, className, liveTime);
            this.container.appendChild(toast.element);
        }
    }

};

var Notification = function () {
    this.container = {};
    this.init();
};
NotificationNS.Toast.prototype = NotificationNS._Toast;
Notification.prototype = NotificationNS._Notification;
