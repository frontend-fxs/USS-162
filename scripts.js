document.addEventListener("DOMContentLoaded", function() {
    var windowWidth = window.innerWidth;
    window.setTimeout(function() {
        document.querySelector('#fxs_custom_notification_body').classList.add('fxs_custom_notification_transition');
        document.querySelector('#fxs_custom_notification_close').addEventListener('click', function() {
            document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_custom_notification_transition');

        });
        document.querySelector('#fxs_custom_notification_link').addEventListener('click', function() {
            document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_custom_notification_transition');

        });
        document.querySelector('#fxs_custom_notification_accept').addEventListener('click', function() {
            document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_custom_notification_transition');

        });
    }, 2000);
});