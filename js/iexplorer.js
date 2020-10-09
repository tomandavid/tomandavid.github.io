$(document).ready(function() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        alert("Unfortunately your browser is not supported.")
    }
});
