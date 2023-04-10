/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": function() { return /* binding */ burger; }\n/* harmony export */ });\nconst burger = () => {\r\n\r\n    const trigger = document.querySelector(\".burger\");\r\n    const menu = document.querySelector(\".menu\");\r\n\r\n    const toggleMenu = () => {\r\n        trigger.classList.toggle('burger_active');\r\n        menu.classList.toggle('menu_active');\r\n    }\r\n\r\n    trigger.addEventListener(\"click\", (event) => {\r\n        toggleMenu();\r\n        event.stopPropagation();\r\n    })\r\n\r\n    document.addEventListener('click', e => {\r\n        let target = e.target;\r\n\r\n        let its_menu = target == menu || menu.contains(target);\r\n        let menu_is_active = menu.classList.contains('menu_active');\r\n\r\n        if (!its_menu && menu_is_active) {\r\n            toggleMenu();\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/canvas.js":
/*!**********************************!*\
  !*** ./src/js/modules/canvas.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": function() { return /* binding */ canvas; }\n/* harmony export */ });\nconst canvas = () => {\r\n    var theCanvas = document.getElementById(\"canvasOne\");\r\n    var context = theCanvas.getContext(\"2d\");\r\n\r\n    var displayWidth;\r\n    var displayHeight;\r\n    var timer;\r\n    var wait;\r\n    var count;\r\n    var numToAddEachFrame;\r\n    var particleList;\r\n    var recycleBin;\r\n    var particleAlpha;\r\n    var r, g, b;\r\n    var fLen;\r\n    var m;\r\n    var projCenterX;\r\n    var projCenterY;\r\n    var zMax;\r\n    var turnAngle;\r\n    var turnSpeed;\r\n    var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;\r\n    var particleRad;\r\n    var zeroAlphaDepth;\r\n    var randAccelX, randAccelY, randAccelZ;\r\n    var gravity;\r\n    var rgbString;\r\n    //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.\r\n    var p;\r\n    var outsideTest;\r\n    var nextParticle;\r\n    var sinAngle;\r\n    var cosAngle;\r\n    var rotX, rotZ;\r\n    var depthAlphaFactor;\r\n    var i;\r\n    var theta, phi;\r\n    var x0, y0, z0;\r\n\r\n    init();\r\n\r\n    function init() {\r\n        wait = 1;\r\n        count = wait - 1;\r\n        numToAddEachFrame = 8;\r\n\r\n        //particle color\r\n        r = 255;\r\n        g = 255;\r\n        b = 255;\r\n\r\n        rgbString = \"rgba(\" + r + \",\" + g + \",\" + b + \",\"; //partial string for color which will be completed by appending alpha value.\r\n        particleAlpha = 1; //maximum alpha\r\n\r\n        displayWidth = theCanvas.width;\r\n        displayHeight = theCanvas.height;\r\n\r\n        fLen = 320; //represents the distance from the viewer to z=0 depth.\r\n\r\n        //projection center coordinates sets location of origin\r\n        projCenterX = displayWidth / 2;\r\n        projCenterY = displayHeight / 2;\r\n\r\n        //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).\r\n        zMax = fLen - 2;\r\n\r\n        particleList = {};\r\n        recycleBin = {};\r\n\r\n        //random acceleration factors - causes some random motion\r\n        randAccelX = 0.1;\r\n        randAccelY = 0.1;\r\n        randAccelZ = 0.1;\r\n\r\n        gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.\r\n\r\n        particleRad = 2.5;\r\n        sphereRad = 280;\r\n        sphereCenterX = 0;\r\n        sphereCenterY = 0;\r\n        sphereCenterZ = -3 - sphereRad;\r\n\r\n        //alpha values will lessen as particles move further back, causing depth-based darkening:\r\n        zeroAlphaDepth = -750;\r\n\r\n        turnSpeed = 2 * Math.PI / 1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).\r\n        turnAngle = 0; //initial angle\r\n\r\n        timer = setInterval(onTimer, 1000 / 24);\r\n    }\r\n\r\n    function onTimer() {\r\n        //if enough time has elapsed, we will add new particles.\t\t\r\n        count++;\r\n        if (count >= wait) {\r\n\r\n            count = 0;\r\n            for (i = 0; i < numToAddEachFrame; i++) {\r\n                theta = Math.random() * 2 * Math.PI;\r\n                phi = Math.acos(Math.random() * 2 - 1);\r\n                x0 = sphereRad * Math.sin(phi) * Math.cos(theta);\r\n                y0 = sphereRad * Math.sin(phi) * Math.sin(theta);\r\n                z0 = sphereRad * Math.cos(phi);\r\n\r\n                //We use the addParticle function to add a new particle. The parameters set the position and velocity components.\r\n                //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after\r\n                //it becomes unstuck).\r\n                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0);\r\n\r\n                //we set some \"envelope\" parameters which will control the evolving alpha of the particles.\r\n                p.attack = 50;\r\n                p.hold = 50;\r\n                p.decay = 160;\r\n                p.initValue = 0;\r\n                p.holdValue = particleAlpha;\r\n                p.lastValue = 0;\r\n\r\n                //the particle will be stuck in one place until this time has elapsed:\r\n                p.stuckTime = 80 + Math.random() * 20;\r\n\r\n                p.accelX = 0;\r\n                p.accelY = gravity;\r\n                p.accelZ = 0;\r\n            }\r\n        }\r\n\r\n        //update viewing angle\r\n        turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);\r\n        sinAngle = Math.sin(turnAngle);\r\n        cosAngle = Math.cos(turnAngle);\r\n\r\n        //background fill\r\n        context.fillStyle = \"#1F1F1F\";\r\n        context.fillRect(0, 0, displayWidth, displayHeight);\r\n\r\n        //update and draw particles\r\n        p = particleList.first;\r\n        while (p != null) {\r\n            //before list is altered record next particle\r\n            nextParticle = p.next;\r\n\r\n            //update age\r\n            p.age++;\r\n\r\n            //if the particle is past its \"stuck\" time, it will begin to move.\r\n            if (p.age > p.stuckTime) {\r\n                p.velX += p.accelX + randAccelX * (Math.random() * 2 - 1);\r\n                p.velY += p.accelY + randAccelY * (Math.random() * 2 - 1);\r\n                p.velZ += p.accelZ + randAccelZ * (Math.random() * 2 - 1);\r\n\r\n                p.x += p.velX;\r\n                p.y += p.velY;\r\n                p.z += p.velZ;\r\n            }\r\n\r\n            /*\r\n            We are doing two things here to calculate display coordinates.\r\n            The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for\r\n            x and z (but the y coordinate will not change).\r\n            Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.\r\n            */\r\n            rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);\r\n            rotZ = -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;\r\n            m = fLen / (fLen - rotZ);\r\n            p.projX = rotX * m + projCenterX;\r\n            p.projY = p.y * m + projCenterY;\r\n\r\n            //update alpha according to envelope parameters.\r\n            if (p.age < p.attack + p.hold + p.decay) {\r\n                if (p.age < p.attack) {\r\n                    p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;\r\n                }\r\n                else if (p.age < p.attack + p.hold) {\r\n                    p.alpha = p.holdValue;\r\n                }\r\n                else if (p.age < p.attack + p.hold + p.decay) {\r\n                    p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;\r\n                }\r\n            }\r\n            else {\r\n                p.dead = true;\r\n            }\r\n\r\n            //see if the particle is still within the viewable range.\r\n            if ((p.projX > displayWidth) || (p.projX < 0) || (p.projY < 0) || (p.projY > displayHeight) || (rotZ > zMax)) {\r\n                outsideTest = true;\r\n            }\r\n            else {\r\n                outsideTest = false;\r\n            }\r\n\r\n            if (outsideTest || p.dead) {\r\n                recycle(p);\r\n            }\r\n\r\n            else {\r\n                //depth-dependent darkening\r\n                depthAlphaFactor = (1 - rotZ / zeroAlphaDepth);\r\n                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor < 0) ? 0 : depthAlphaFactor);\r\n                context.fillStyle = rgbString + depthAlphaFactor * p.alpha + \")\";\r\n\r\n                //draw\r\n                context.beginPath();\r\n                context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false);\r\n                context.closePath();\r\n                context.fill();\r\n            }\r\n\r\n            p = nextParticle;\r\n        }\r\n    }\r\n\r\n    function addParticle(x0, y0, z0, vx0, vy0, vz0) {\r\n        var newParticle;\r\n        var color;\r\n\r\n        //check recycle bin for available drop:\r\n        if (recycleBin.first != null) {\r\n            newParticle = recycleBin.first;\r\n            //remove from bin\r\n            if (newParticle.next != null) {\r\n                recycleBin.first = newParticle.next;\r\n                newParticle.next.prev = null;\r\n            }\r\n            else {\r\n                recycleBin.first = null;\r\n            }\r\n        }\r\n        //if the recycle bin is empty, create a new particle (a new ampty object):\r\n        else {\r\n            newParticle = {};\r\n        }\r\n\r\n        //add to beginning of particle list\r\n        if (particleList.first == null) {\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n            newParticle.next = null;\r\n        }\r\n        else {\r\n            newParticle.next = particleList.first;\r\n            particleList.first.prev = newParticle;\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n        }\r\n\r\n        //initialize\r\n        newParticle.x = x0;\r\n        newParticle.y = y0;\r\n        newParticle.z = z0;\r\n        newParticle.velX = vx0;\r\n        newParticle.velY = vy0;\r\n        newParticle.velZ = vz0;\r\n        newParticle.age = 0;\r\n        newParticle.dead = false;\r\n        if (Math.random() < 0.5) {\r\n            newParticle.right = true;\r\n        }\r\n        else {\r\n            newParticle.right = false;\r\n        }\r\n        return newParticle;\r\n    }\r\n\r\n    function recycle(p) {\r\n        //remove from particleList\r\n        if (particleList.first == p) {\r\n            if (p.next != null) {\r\n                p.next.prev = null;\r\n                particleList.first = p.next;\r\n            }\r\n            else {\r\n                particleList.first = null;\r\n            }\r\n        }\r\n        else {\r\n            if (p.next == null) {\r\n                p.prev.next = null;\r\n            }\r\n            else {\r\n                p.prev.next = p.next;\r\n                p.next.prev = p.prev;\r\n            }\r\n        }\r\n        //add to recycle bin\r\n        if (recycleBin.first == null) {\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n            p.next = null;\r\n        }\r\n        else {\r\n            p.next = recycleBin.first;\r\n            recycleBin.first.prev = p;\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/canvas.js?");

/***/ }),

/***/ "./src/js/modules/cursor.js":
/*!**********************************!*\
  !*** ./src/js/modules/cursor.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cursor\": function() { return /* binding */ cursor; }\n/* harmony export */ });\nconst cursor = () => {\r\n\r\n    const cursor = document.querySelector(\".cursor\");\r\n    const follower = document.querySelector(\".follower\");\r\n\r\n    let cursorX = 0;\r\n    let cursorY = 0;\r\n\r\n    let followerX = 0;\r\n    let followerY = 0;\r\n\r\n    window.addEventListener(\"mousemove\", (event) => {\r\n        cursorX = event.clientX;\r\n        cursorY = event.clientY;\r\n    })\r\n\r\n    TweenMax.to({}, 0.01, {\r\n        repeat: -1,\r\n        onRepeat: () => {\r\n            followerX += (cursorX - followerX) / 5;\r\n            followerY += (cursorY - followerY) / 5;\r\n\r\n            TweenMax.set(cursor, {\r\n                css: {\r\n                    left: cursorX,\r\n                    top: cursorY\r\n                }\r\n            })\r\n\r\n            TweenMax.set(follower, {\r\n                css: {\r\n                    left: followerX - 21,\r\n                    top: followerY - 21\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n    document.querySelectorAll(\".link\").forEach(link => {\r\n        link.addEventListener(\"mouseenter\", () => {\r\n            follower.classList.add(\"follower_active\")\r\n            cursor.classList.add(\"cursor_active\")\r\n        })\r\n        link.addEventListener(\"mouseleave\", (e) => {\r\n            follower.classList.remove(\"follower_active\")\r\n            cursor.classList.remove(\"cursor_active\")\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/cursor.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": function() { return /* binding */ modal; }\n/* harmony export */ });\nconst modal = () => {\r\n\r\n    const modal = document.querySelector(\".modal\");\r\n    const modalWrapper = document.querySelector(\".modal-wrapper\");\r\n\r\n    const closeTriggers = document.querySelectorAll(\"[data-close]\");\r\n\r\n    const openTriggers = document.querySelectorAll(\"[data-open]\");\r\n\r\n    openTriggers.forEach(trigger => {\r\n        trigger.addEventListener(\"click\", () => {\r\n            modal.classList.add(\"modal_active\")\r\n            modalWrapper.classList.add(\"modal-wrapper_active\")\r\n        })\r\n    })\r\n\r\n    closeTriggers.forEach(trigger => {\r\n        trigger.addEventListener(\"click\", () => {\r\n            modal.classList.remove(\"modal_active\")\r\n            modalWrapper.classList.remove(\"modal-wrapper_active\")\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/phoneMask.js":
/*!*************************************!*\
  !*** ./src/js/modules/phoneMask.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phoneMask\": function() { return /* binding */ phoneMask; }\n/* harmony export */ });\nconst phoneMask = (input) => {\r\n    const config = {\r\n        mask: \"+{3}(000)000-00-00\"\r\n    }\r\n    const elem = document.querySelector(input);\r\n\r\n    IMask(elem, config);\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/phoneMask.js?");

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": function() { return /* binding */ scroll; }\n/* harmony export */ });\nconst scroll = () => {\r\n    new SmoothScroll('a[href*=\"#\"]');\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/scroll.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": function() { return /* binding */ slider; }\n/* harmony export */ });\nconst MARGIN_RIGHT = 23;\r\n\r\nconst slider = () => {\r\n    let offset = 0;\r\n    let count = 1;\r\n\r\n    const container = document.querySelector(\".slider__window-container\");\r\n\r\n    const sliderElements = document.querySelectorAll(\".slider__item\");\r\n    const MAX = sliderElements.length;\r\n    const offsetLength = sliderElements[0].offsetWidth + MARGIN_RIGHT;\r\n\r\n    const left = document.querySelector(\".slider__arrows-left\");\r\n    const right = document.querySelector(\".slider__arrows-right\");\r\n\r\n    const setOffset = (offset) => {\r\n        container.style.transform = `translateX(${offset}px)`;\r\n    }\r\n\r\n    left.addEventListener(\"click\", () => {\r\n        if (count === 1) {\r\n            offset = -(MAX - 1) * offsetLength\r\n            count = MAX;\r\n            setOffset(offset);\r\n            return;\r\n        }\r\n        offset += offsetLength;\r\n        count--;\r\n        setOffset(offset);\r\n    })\r\n    right.addEventListener(\"click\", () => {\r\n        if (count === MAX) {\r\n            count = 1;\r\n            offset = 0;\r\n            setOffset(0);\r\n            return;\r\n        }\r\n        offset -= offsetLength;\r\n        count++;\r\n        setOffset(offset);\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabs\": function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = (parent, trigger, content, activeClass, activeTriggerClass) => {\r\n    const contents = document.querySelectorAll(content);\r\n    const triggers = document.querySelectorAll(trigger);\r\n\r\n    const parents = document.querySelectorAll(parent);\r\n\r\n    const hideAll = () => {\r\n        contents.forEach(item => {\r\n            item.classList.remove(activeClass);\r\n        })\r\n\r\n        if (activeTriggerClass) {\r\n            triggers.forEach(item => {\r\n                item.classList.remove(activeTriggerClass);\r\n            })\r\n        }\r\n    }\r\n    const showContent = (index = 0) => {\r\n        contents.forEach((item, i) => {\r\n            if (i === index) {\r\n                item.classList.add(activeClass);\r\n            }\r\n        })\r\n        if (activeTriggerClass) {\r\n            triggers.forEach((item, i) => {\r\n                if (i === index) {\r\n                    item.classList.add(activeTriggerClass);\r\n                }\r\n            })\r\n        }\r\n    }\r\n    hideAll();\r\n    showContent();\r\n\r\n    parents.forEach(item => {\r\n        item.addEventListener(\"click\", (event) => {\r\n            const target = event.target;\r\n            if (target && target.classList.contains(trigger.slice(1))) {\r\n                triggers.forEach((trigger, i) => {\r\n                    if (target === trigger) {\r\n                        hideAll();\r\n                        showContent(i);\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/validate.js":
/*!************************************!*\
  !*** ./src/js/modules/validate.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": function() { return /* binding */ validate; }\n/* harmony export */ });\nconst inputNotificator = (input, message) => {\r\n\r\n    const element = document.createElement(\"p\");\r\n    element.textContent = message\r\n    element.style.color = \"red\";\r\n\r\n    const deleteMessage = () => {\r\n        element.remove();\r\n    }\r\n\r\n    const addMessage = () => {\r\n        input.insertAdjacentElement('beforebegin', element);\r\n    }\r\n\r\n    const addErrorStyleInput = () => {\r\n        input.classList.add(\"form__input_error\");\r\n    }\r\n\r\n\r\n    const deleteErrorStyleInput = () => {\r\n        input.classList.remove(\"form__input_error\");\r\n    }\r\n\r\n    return {\r\n        deleteMessage,\r\n        addMessage,\r\n        addErrorStyleInput,\r\n        deleteErrorStyleInput\r\n    }\r\n}\r\n\r\nconst validate = (input, { max }) => {\r\n    const elem = document.querySelector(input);\r\n\r\n    const InputNotificator = inputNotificator(elem, max.message);\r\n\r\n    elem.addEventListener(\"input\", (event) => {\r\n        const target = event.target\r\n        if (target.value.length >= max.count) {\r\n            InputNotificator.addMessage();\r\n            InputNotificator.addErrorStyleInput();\r\n            return;\r\n        }\r\n        InputNotificator.deleteMessage();\r\n        InputNotificator.deleteErrorStyleInput();\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/validate.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/phoneMask.js */ \"./src/js/modules/phoneMask.js\");\n/* harmony import */ var _modules_validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate.js */ \"./src/js/modules/validate.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll.js */ \"./src/js/modules/scroll.js\");\n/* harmony import */ var _modules_cursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cursor.js */ \"./src/js/modules/cursor.js\");\n/* harmony import */ var _modules_canvas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/canvas.js */ \"./src/js/modules/canvas.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabs)(\".projects__tabs\", \".projects__tabs-item\", \".projects__content\", \"projects__content_active\");\r\n    (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabs)(\".accordeon\", \".accordeon__item-content__title\", \".accordeon__item\", \"accordeon__item_active\");\r\n    (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__.slider)();\r\n    (0,_modules_phoneMask_js__WEBPACK_IMPORTED_MODULE_2__.phoneMask)(\".form__input_phone\");\r\n\r\n    (0,_modules_validate_js__WEBPACK_IMPORTED_MODULE_3__.validate)(\".form__input_name\", {\r\n        max: {\r\n            count: 10,\r\n            message: \"Invalid length of name\"\r\n        }\r\n    });\r\n    (0,_modules_validate_js__WEBPACK_IMPORTED_MODULE_3__.validate)(\".form__input_message\", {\r\n        max: {\r\n            count: 50,\r\n            message: \"Invalid length of message\"\r\n        }\r\n    });\r\n    (0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_4__.scroll)();\r\n    (0,_modules_cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor)();\r\n    (0,_modules_canvas_js__WEBPACK_IMPORTED_MODULE_6__.canvas)();\r\n    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_7__.modal)();\r\n    (0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_8__.burger)();\r\n});\r\n\n\n//# sourceURL=webpack://mytemplate/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;