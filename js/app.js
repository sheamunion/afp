$(document).ready(function () {
    let $graphicContainer = $('.graphic-photo-container');

    function startCycle() {
        $graphicContainer.cycle({
            speed: 800,
            timeout: 1500
        });
    }

    function stopAndDestroyCycle() {
        $graphicContainer.cycle('stop');
        $graphicContainer.cycle('destroy');
    }

    function toggleClasses() {
        $('.graphic-photo').toggleClass('graphic-blur');
        $('.hide-on-click').toggle();
    }

    $('.graphic-photo-container span').click(function () {
        toggleClasses();
        startCycle();
    });

    $('.graphic-photo').click(function () {
        toggleClasses();
        stopAndDestroyCycle();
    });
});