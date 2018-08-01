document.addEventListener("DOMContentLoaded", function() {
    var windowWidth = window.innerWidth;
    window.setTimeout(function() {
        if (windowWidth > 768) {
            document.querySelector('#fxs_custom_notification_body').classList.add('fxs_left');
        } else {
            document.querySelector('#fxs_custom_notification_body').classList.add('fxs_top');
        }
        if (windowWidth > 768) {

            document.querySelector('#fxs_custom_notification_close').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_left');

            });
            document.querySelector('#fxs_custom_notification_link').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_left');

            });
            document.querySelector('#fxs_custom_notification_accept').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_left');

            });
        } else {
            document.querySelector('#fxs_custom_notification_close').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_top');
            });
            document.querySelector('#fxs_custom_notification_link').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_top');
            });
            document.querySelector('#fxs_custom_notification_accept').addEventListener('click', function() {
                document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_top');
            });
        }
    }, 2000);
});