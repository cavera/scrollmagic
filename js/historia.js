$(function() {
    var scrollMagicController = new ScrollMagic.Controller();

    var tl = new TimelineMax()
    .fromTo('#titulo', 1, {
        scale: 0,
        rotation: 15,
    }, {
        scale: 1,
        rotation: 0
    })
    .fromTo('#dialogo', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('#dialogo', 0.5, {
        opacity: 1
    }, {
        opacity: 0,
        delay:0.5
    })
    .fromTo('#dialogo2', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('#dialogo2', 0.5, {
        opacity: 1
    }, {
        opacity: 0,
        delay:0.5
    })

    var scene = new ScrollMagic.Scene({
            triggerElement: ".contenedor",
            duration:300
        })
        .setTween(tl)
        .addIndicators() // add indicators (requires plugin)
        .addTo(scrollMagicController);

    var scenePin = new ScrollMagic.Scene({
            triggerElement: ".contenedor",
            offset: 200,
            duration: 400
        })
        .setPin('.contenedor')
        .addIndicators() // add indicators (requires plugin)
        .addTo(scrollMagicController);
});
