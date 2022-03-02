$(document).ready(function () {
    $('.bar').each(function () {
        let _this = $(this),
            per = _this.attr('per');
        _this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 2000,
            step: function () {
                _this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                _this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });
});