(function() {
    var windowWidth = window.innerWidth;
    document.querySelector('#fxs_custom_notification_close').addEventListener('click', function() {
        document.querySelector('#fxs_custom_notification_body').classList.remove('fxs_custom_notification_animation');

    });

    document.querySelector('#show_custom_notification').addEventListener('click', function() {
        document.querySelector('#fxs_custom_notification_body').classList.add('fxs_custom_notification_animation');
    });

})();