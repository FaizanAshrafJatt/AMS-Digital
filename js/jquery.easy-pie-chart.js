(function() {
    var $;
    (($ = jQuery).easyPieChart = function(a, i) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            j = this;
        return (
            (this.el = a),
            (this.$el = $(a)),
            this.$el.data("easyPieChart", this),
            (this.init = function() {
                var a;
                return (
                    (j.options = $.extend({}, $.easyPieChart.defaultOptions, i)),
                    (a = parseInt(j.$el.data("percent"), 10)),
                    (j.percentage = 0),
                    (j.canvas = $("<canvas width='" + j.options.size + "' height='" + j.options.size + "'></canvas>").get(0)),
                    j.$el.append(j.canvas),
                    "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(j.canvas),
                    (j.ctx = j.canvas.getContext("2d")),
                    window.devicePixelRatio > 1.5 && ($(j.canvas).css({
                        width: j.options.size,
                        height: j.options.size
                    }), (j.canvas.width *= 2), (j.canvas.height *= 2), j.ctx.scale(2, 2)),
                    j.ctx.translate(j.options.size / 2, j.options.size / 2),
                    j.$el.addClass("easyPieChart"),
                    j.$el.css({
                        width: j.options.size,
                        height: j.options.size,
                        lineHeight: "" + j.options.size + "px"
                    }),
                    j.update(a),
                    j
                );
            }),
            (this.update = function(a) {
                return !1 === j.options.animate ? d(a) : c(j.percentage, a);
            }),
            (g = function() {
                var a, c, d;
                for (j.ctx.fillStyle = j.options.scaleColor, j.ctx.lineWidth = 1, d = [], a = c = 0; c <= 24; a = ++c) d.push(b(a));
                return d;
            }),
            (b = function(b) {
                var a;
                return (a = b % 6 == 0 ? 0 : 0.017 * j.options.size), j.ctx.save(), j.ctx.rotate((b * Math.PI) / 12), j.ctx.fillRect(j.options.size / 2 - a, 0, -(0.05 * j.options.size) + a, 1), j.ctx.restore();
            }),
            (h = function() {
                var a;
                return (
                    (a = j.options.size / 2 - j.options.lineWidth / 2), !1 !== j.options.scaleColor && (a -= 0.08 * j.options.size),
                    j.ctx.beginPath(),
                    j.ctx.arc(0, 0, a, 0, 2 * Math.PI, !0),
                    j.ctx.closePath(),
                    (j.ctx.strokeStyle = j.options.trackColor),
                    (j.ctx.lineWidth = j.options.lineWidth),
                    j.ctx.stroke()
                );
            }),
            (f = function() {
                if ((!1 !== j.options.scaleColor && g(), !1 !== j.options.trackColor)) return h();
            }),
            (d = function(b) {
                var a;
                return (
                    f(),
                    (j.ctx.strokeStyle = $.isFunction(j.options.barColor) ? j.options.barColor(b) : j.options.barColor),
                    (j.ctx.lineCap = j.options.lineCap),
                    (j.ctx.lineWidth = j.options.lineWidth),
                    (a = j.options.size / 2 - j.options.lineWidth / 2), !1 !== j.options.scaleColor && (a -= 0.08 * j.options.size),
                    j.ctx.save(),
                    j.ctx.rotate(-Math.PI / 2),
                    j.ctx.beginPath(),
                    j.ctx.arc(0, 0, a, 0, (2 * Math.PI * b) / 100, !1),
                    j.ctx.stroke(),
                    j.ctx.restore()
                );
            }),
            (c = function(h, b) {
                var c, a, g;
                return (
                    (g = ((a = 30) * j.options.animate) / 1e3),
                    (c = 0),
                    j.options.onStart.call(j),
                    (j.percentage = b),
                    j.animation && (clearInterval(j.animation), (j.animation = !1)),
                    (j.animation = setInterval(function() {
                        if ((j.ctx.clearRect(-j.options.size / 2, -j.options.size / 2, j.options.size, j.options.size), f.call(j), d.call(j, [e(c, h, b - h, g)]), ++c / g > 1))
                            return clearInterval(j.animation), (j.animation = !1), j.options.onStop.call(j);
                    }, 1e3 / a))
                );
            }),
            (e = function(a, b, c, d) {
                var e, f;
                return (
                    (e = function(a) {
                        return Math.pow(a, 2);
                    }),
                    (c / 2) *
                    (function(a) {
                        return a < 1 ? e(a) : 2 - e(-((a / 2) * 2) + 2);
                    })((a /= d / 2)) +
                    b
                );
            }),
            this.init()
        );
    }),
    ($.easyPieChart.defaultOptions = {
        barColor: "#ef1e25",
        trackColor: "#f2f2f2",
        scaleColor: "#dfe0e0",
        lineCap: "round",
        size: 110,
        lineWidth: 3,
        animate: !1,
        onStart: $.noop,
        onStop: $.noop
    }),
    ($.fn.easyPieChart = function(a) {
        return $.each(this, function(d, b) {
            var c;
            if (!(c = $(b)).data("easyPieChart")) return c.data("easyPieChart", new $.easyPieChart(b, a));
        });
    });
}.call(this));