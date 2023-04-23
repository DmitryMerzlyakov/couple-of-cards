/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    'use strict';
    var e = {
            './src/style.css': (e, t, n) => {
                n.r(t);
            },
            './levelOne.ts': (e, t, n) => {
                function a(e) {
                    document.querySelector('.app').textContent = '';
                    var t = document.createElement('div');
                    window.application.renderBlock('LevelOneBlock', e),
                        e.appendChild(t);
                }
                n.r(t),
                    n.d(t, { renderLevelOneScreens: () => a }),
                    (window.application.blocks.LevelOneBlock = function (e) {
                        var t,
                            n,
                            d = 0,
                            i = 0,
                            c = 6,
                            o = document.createElement('div');
                        o.classList.add('headerBox');
                        var l = document.createElement('div'),
                            r = document.createElement('div');
                        r.textContent = '00';
                        var s = document.createElement('div');
                        s.textContent = ':';
                        var p = document.createElement('div');
                        (p.textContent = '00'),
                            (l.id = 'timerid'),
                            l.classList.add('headerBox__timer'),
                            l.appendChild(r),
                            l.appendChild(s),
                            l.appendChild(p);
                        var m = document.createElement('div');
                        function v() {
                            c--, (m.innerHTML = '00:0'.concat(c));
                        }
                        function u() {
                            0 == c &&
                                ((w.style.pointerEvents = 'auto'),
                                (E.style.pointerEvents = 'auto'),
                                clearInterval(n),
                                (m.textContent = 'Поехали!'),
                                ++d <= 9 && (p.innerText = '0' + d),
                                d > 9 && (p.innerText = ''.concat(d)),
                                d > 60 &&
                                    (i++,
                                    (r.innerText = '0' + i),
                                    (d = 0),
                                    (p.innerText = '0' + d)));
                        }
                        m.classList.add('headerBox__timer');
                        var h = document.createElement('button');
                        (h.textContent = 'Начать игру'),
                            h.classList.add('choiceForm__button'),
                            h.addEventListener('click', function () {
                                if (
                                    (e.removeChild(L),
                                    L.classList.add('none'),
                                    (m.textContent = '00:06'),
                                    (w.style.pointerEvents = 'none'),
                                    (E.style.pointerEvents = 'none'),
                                    (t = setInterval(u, 1e3)),
                                    (n = setInterval(v, 1e3)),
                                    1 == window.application.numbers)
                                )
                                    for (var a = 0; a < 3; a++) b(g);
                                else if (2 == window.application.numbers)
                                    for (a = 0; a < 6; a++) b(g);
                                else if (3 == window.application.numbers)
                                    for (a = 0; a < 9; a++) b(g);
                                h.setAttribute('disabled', '');
                            });
                        var L = document.createElement('div');
                        if (
                            (L.classList.add('startBox'),
                            0 !== window.application.numbers)
                        )
                            for (var _ = 0; _ < 12; _++) {
                                var C = document.createElement('img');
                                C.classList.add('cardBox__img'),
                                    (C.src = './static/cardBack.jpg'),
                                    L.appendChild(C);
                            }
                        var w = document.createElement('div');
                        w.classList.add('cardBox');
                        var E = document.createElement('div');
                        E.classList.add('cardBox');
                        var g = [];
                        g = window.application.cards;
                        var x = [],
                            f = [];
                        function b(e) {
                            var t = e[Math.floor(Math.random() * e.length)];
                            console.log(t);
                            var n = document.createElement('img'),
                                a = document.createElement('img');
                            (n.src = t.img),
                                n.classList.add('cardBox__img'),
                                (a.src = t.img),
                                a.classList.add('cardBox__img');
                            var d,
                                i,
                                c = setInterval(function () {
                                    (n.src = './static/cardBack.jpg'),
                                        (a.src = './static/cardBack.jpg');
                                }, 6e3);
                            w.appendChild(n),
                                E.appendChild(a),
                                n.addEventListener('click', function () {
                                    clearInterval(c),
                                        (n.src = t.img),
                                        (window.application.cardIdOne.id =
                                            t.id),
                                        (d = window.application.cardIdOne.id),
                                        f.push(d),
                                        x.push(f),
                                        B(x),
                                        console.log(x),
                                        console.log(f),
                                        f.length >= 2 &&
                                            (d == i ? (f = []) : F());
                                }),
                                a.addEventListener('click', function () {
                                    clearInterval(c),
                                        (a.src = t.img),
                                        (window.application.cardIdTwo.id =
                                            t.id),
                                        (i = window.application.cardIdTwo.id),
                                        f.push(i),
                                        x.push(f),
                                        B(x),
                                        console.log(x),
                                        console.log(f),
                                        f.length >= 2 &&
                                            (d == i ? (f = []) : F());
                                });
                        }
                        function F() {
                            clearInterval(t);
                            var n = document.createElement('div');
                            n.classList.add('wrapper'),
                                n.classList.add('popup');
                            var d = document.createElement('img');
                            (d.src = './static/ImageLose.jpg'),
                                d.classList.add('popup__img');
                            var i = document.createElement('h2');
                            i.classList.add('popup__text'),
                                (i.textContent = 'Вы проиграли!');
                            var c = document.createElement('h2');
                            c.textContent = 'Затраченное время:';
                            var r = document.createElement('div');
                            (r.textContent = '00:00'),
                                r.classList.add('headerBox__timer'),
                                l.classList.add('popup__time');
                            var s = document.createElement('button');
                            s.classList.add('choiceForm__button'),
                                s.classList.add('newGame'),
                                (s.textContent = 'Играть снова'),
                                s.addEventListener('click', function () {
                                    a(e), n.classList.add('none');
                                }),
                                m.classList.add('none'),
                                n.appendChild(d),
                                n.appendChild(i),
                                n.appendChild(c),
                                n.appendChild(l),
                                n.appendChild(s),
                                o.appendChild(r),
                                o.appendChild(h),
                                e.removeChild(k),
                                e.appendChild(n);
                        }
                        function B(n) {
                            ((6 == n.length &&
                                1 == window.application.numbers) ||
                                (12 == n.length &&
                                    2 == window.application.numbers) ||
                                (18 == n.length &&
                                    3 == window.application.numbers)) &&
                                (console.log('game over'),
                                clearInterval(t),
                                console.log(i),
                                console.log(d),
                                (function () {
                                    var t = document.createElement('div');
                                    t.classList.add('wrapper'),
                                        t.classList.add('popup');
                                    var n = document.createElement('img');
                                    (n.src = './static/ImageWin.jpg'),
                                        n.classList.add('popup__img');
                                    var d = document.createElement('h2');
                                    d.classList.add('popup__text'),
                                        (d.textContent = 'Вы выиграли!');
                                    var i = document.createElement('h2');
                                    i.textContent = 'Затраченное время:';
                                    var c = document.createElement('div');
                                    (c.textContent = '00:00'),
                                        c.classList.add('headerBox__timer'),
                                        l.classList.add('popup__time');
                                    var r = document.createElement('button');
                                    r.classList.add('choiceForm__button'),
                                        r.classList.add('newGame'),
                                        (r.textContent = 'Играть снова'),
                                        r.addEventListener(
                                            'click',
                                            function () {
                                                a(e), t.classList.add('none');
                                            }
                                        ),
                                        m.classList.add('none'),
                                        t.appendChild(n),
                                        t.appendChild(d),
                                        t.appendChild(i),
                                        t.appendChild(l),
                                        t.appendChild(r),
                                        o.appendChild(c),
                                        o.appendChild(h),
                                        e.removeChild(k),
                                        e.appendChild(t);
                                })());
                        }
                        var k = document.createElement('div');
                        k.classList.add('fieldForGame'),
                            k.appendChild(w),
                            k.appendChild(E),
                            o.appendChild(l),
                            o.appendChild(m),
                            o.appendChild(h),
                            e.appendChild(o),
                            e.appendChild(L),
                            e.appendChild(k);
                    }),
                    (window.application.screens.LevelOneScreens = a);
            },
        },
        t = {};
    function n(a) {
        var d = t[a];
        if (void 0 !== d) return d.exports;
        var i = (t[a] = { exports: {} });
        return e[a](i, i.exports, n), i.exports;
    }
    (n.d = (e, t) => {
        for (var a in t)
            n.o(t, a) &&
                !n.o(e, a) &&
                Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        });
    var a = {};
    (() => {
        n.r(a);
        var e = n('./levelOne.ts'),
            t = (n('./src/style.css'), document.querySelector('.app'));
        (window.application.blocks.StartPage = function (t) {
            var n = document.createElement('div');
            n.classList.add('choiceForm');
            var a = document.createElement('h1');
            a.classList.add('choiceForm__text'),
                (a.textContent = 'Выбери сложность'),
                n.appendChild(a);
            var d = document.createElement('div');
            d.classList.add('choiceForm__levelBox'), n.appendChild(d);
            var i = document.createElement('button');
            i.classList.add('choiceForm__level-one'),
                (i.textContent = '1'),
                i.addEventListener('click', function () {
                    (window.application.numbers = 1),
                        i.classList.add('choiceForm__level-active'),
                        c.classList.remove('choiceForm__level-active'),
                        o.classList.remove('choiceForm__level-active');
                }),
                d.appendChild(i);
            var c = document.createElement('button');
            c.classList.add('choiceForm__level-two'),
                (c.textContent = '2'),
                c.addEventListener('click', function () {
                    (window.application.numbers = 2),
                        c.classList.add('choiceForm__level-active'),
                        i.classList.remove('choiceForm__level-active'),
                        o.classList.remove('choiceForm__level-active');
                }),
                d.appendChild(c);
            var o = document.createElement('button');
            o.classList.add('choiceForm__level-three'),
                (o.textContent = '3'),
                o.addEventListener('click', function () {
                    (window.application.numbers = 3),
                        o.classList.add('choiceForm__level-active'),
                        c.classList.remove('choiceForm__level-active'),
                        i.classList.remove('choiceForm__level-active');
                }),
                d.appendChild(o),
                n.appendChild(d);
            var l = document.createElement('button');
            l.classList.add('choiceForm__button'),
                (l.textContent = 'Старт'),
                l.addEventListener('click', function () {
                    (0, e.renderLevelOneScreens)(t);
                }),
                n.appendChild(l),
                t.appendChild(n);
        }),
            window.application.renderBlock('StartPage', t);
    })();
})();
//# sourceMappingURL=bundle.js.map
