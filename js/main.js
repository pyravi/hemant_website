(function () {
    "use strict";
    window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
    });
    $(window).on("scroll", function() {
        console.log($(this).scrollTop())
        if($(this).scrollTop() >= 30){
            // set to new image
            $(".navbar-area .navbar-brand img").attr("src","images/logo-white.png");
        } else {
            //back to default
            $(".navbar-area .navbar-brand img").attr("src","images/logo.png");
        }
    })

    window.onload = function () {
        const getHeaderId = document.getElementById("navbar");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 50;
                const {scrollTop} = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }
        const getId = document.getElementById("backtotop");
        if (getId) {
            const topbutton = document.getElementById("backtotop");
            topbutton.onclick = function (e) {
                window.scrollTo({top: 0, behavior: "smooth"});
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }
    };
    var swiper = new Swiper(".hero-slider-one", {
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        autoHeight: true,
        speed: 1200,
        navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',}
    });
    var swiper = new Swiper(".feature-slider-one", {
        spaceBetween: 10,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        speed: 1400,
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            }
        }
    });
    var swiper = new Swiper(".testimonial-slider-one", {
        spaceBetween: 25,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        speed: 1400,
        autoHeight: true,
        navigation: {nextEl: ".testimonial-button-next", prevEl: ".testimonial-button-prev"},
        // Responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
    AOS.init({startEvent: 'load',});
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText);
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                }
            });
        });
        let counters = document.querySelectorAll(".counter");
        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }
    var resultEl = document.querySelector(".resultSet"), plusMinusWidgets = document.querySelectorAll(".v-counter");
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
        plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
    }

    function clickHandler(event) {
        var countEl = event.target.parentNode.querySelector(".count");
        if (event.target.className.match(/\bminusBtn\b/)) {
            countEl.value = Number(countEl.value) - 1;
        } else if (event.target.className.match(/\bplusBtn\b/)) {
            countEl.value = Number(countEl.value) + 1;
        }
        triggerEvent(countEl, "change");
    }

    function triggerEvent(el, type) {
        if ('createEvent' in document) {
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        } else {
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent('on' + e.eventType, e);
        }
    }

    function triggerEvent(el, type) {
        if ('createEvent' in document) {
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        } else {
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent('on' + e.eventType, e);
        }
    }
})();