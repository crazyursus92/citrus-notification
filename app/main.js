var _Toast = {
    liveTime: 4000,
    className: "notification-toast ",
    element: {},
    /**
     * Function create toast
     * @param {string} message
     * @param {string} [className] - custom class name
     * @param {int} [liveTime] - time live toast
     */
      init: function ( message ,className, liveTime){
        if(className)
            this.className += className;
        if(liveTime)
            this.liveTime = liveTime;
        this.element = document.createElement("div");
        this.element.classList.add(this.className);
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
};

/**
 * Function create toast
 * @param {string} message
 * @param {string} [className] - custom class name
 * @param {int} [liveTime] - time live toast
 */
var Toast = function (message, className, liveTime) {
    this.liveTime = 4000;
    this.className = "notification-toast";
    this.element = {};
    this.init(message, className, liveTime);
};

Toast.prototype = _Toast;

var _Notification = {
    container: {},

    init: function () {
        this.container = document.createElement("div");
        this.container.classList.add("notification-container");
        var body  = document.querySelector("body");
        body.appendChild(this.container);
    },
    message: function (message, className, liveTime) {
        var toast = new Toast(message, className, liveTime);
        this.container.appendChild(toast.element);
    }
};

var Notification = function () {
    this.container = {};
    this.init();
};

Notification.prototype = _Notification;

var testNotif = new Notification();