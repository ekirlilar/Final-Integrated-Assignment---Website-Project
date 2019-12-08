
var snowStorm=function(g,f){function k(a,d){isNaN(d)&&(d=0);return Math.random()*a+d}function x(){g.setTimeout(function(){a.start(!0)},20);a.events.remove(m?f:g,"mousemove",x)}function y(){(!a.excludeMobile||!D)&&x();a.events.remove(g,"load",y)}this.excludeMobile=this.autoStart=!0;this.flakesMax=128;this.flakesMaxActive=64;this.animationInterval=33;this.useGPU=!0;this.className=null;this.excludeMobile=!0;this.flakeBottom=null;this.followMouse=!0;this.snowColor="#fff";this.snowCharacter="&bull;";this.snowStick=
!0;this.targetElement=null;this.useMeltEffect=!0;this.usePixelPosition=this.usePositionFixed=this.useTwinkleEffect=!1;this.freezeOnBlur=!0;this.flakeRightOffset=this.flakeLeftOffset=0;this.flakeHeight=this.flakeWidth=8;this.vMaxX=5;this.vMaxY=4;this.zIndex=0;var a=this,q,m=navigator.userAgent.match(/msie/i),E=navigator.userAgent.match(/msie 6/i),D=navigator.userAgent.match(/mobile|opera m(ob|in)/i),r=m&&"BackCompat"===f.compatMode||E,h=null,n=null,l=null,p=null,s=null,z=null,A=null,v=1,t=!1,w=!1,
u;a:{try{f.createElement("div").style.opacity="0.5"}catch(F){u=!1;break a}u=!0}var B=!1,C=f.createDocumentFragment();q=function(){function c(b){g.setTimeout(b,1E3/(a.animationInterval||20))}function d(a){return void 0!==h.style[a]?a:null}var e,b=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||g.msRequestAnimationFrame||c;e=b?function(){return b.apply(g,arguments)}:null;var h;h=f.createElement("div");e={transform:{ie:d("-ms-transform"),
moz:d("MozTransform"),opera:d("OTransform"),webkit:d("webkitTransform"),w3:d("transform"),prop:null},getAnimationFrame:e};e.transform.prop=e.transform.w3||e.transform.moz||e.transform.webkit||e.transform.ie||e.transform.opera;h=null;return e}();this.timer=null;this.flakes=[];this.active=this.disabled=!1;this.meltFrameCount=20;this.meltFrames=[];this.setXY=function(c,d,e){if(!c)return!1;a.usePixelPosition||w?(c.style.left=d-a.flakeWidth+"px",c.style.top=e-a.flakeHeight+"px"):r?(c.style.right=100-100*
(d/h)+"%",c.style.top=Math.min(e,s-a.flakeHeight)+"px"):a.flakeBottom?(c.style.right=100-100*(d/h)+"%",c.style.top=Math.min(e,s-a.flakeHeight)+"px"):(c.style.right=100-100*(d/h)+"%",c.style.bottom=100-100*(e/l)+"%")};this.events=function(){function a(c){c=b.call(c);var d=c.length;e?(c[1]="on"+c[1],3<d&&c.pop()):3===d&&c.push(!1);return c}function d(a,b){var c=a.shift(),d=[f[b]];if(e)c[d](a[0],a[1]);else c[d].apply(c,a)}var e=!g.addEventListener&&g.attachEvent,b=Array.prototype.slice,f={add:e?"attachEvent":
"addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){d(a(arguments),"add")},remove:function(){d(a(arguments),"remove")}}}();this.randomizeWind=function(){var c;c=k(a.vMaxX,0.2);z=1===parseInt(k(2),10)?-1*c:c;A=k(a.vMaxY,0.2);if(this.flakes)for(c=0;c<this.flakes.length;c++)this.flakes[c].active&&this.flakes[c].setVelocities()};this.scrollHandler=function(){var c;p=a.flakeBottom?0:parseInt(g.scrollY||f.documentElement.scrollTop||(r?f.body.scrollTop:0),10);isNaN(p)&&
(p=0);if(!t&&!a.flakeBottom&&a.flakes)for(c=0;c<a.flakes.length;c++)0===a.flakes[c].active&&a.flakes[c].stick()};this.resizeHandler=function(){g.innerWidth||g.innerHeight?(h=g.innerWidth-16-a.flakeRightOffset,l=a.flakeBottom||g.innerHeight):(h=(f.documentElement.clientWidth||f.body.clientWidth||f.body.scrollWidth)-(!m?8:0)-a.flakeRightOffset,l=a.flakeBottom||f.documentElement.clientHeight||f.body.clientHeight||f.body.scrollHeight);s=f.body.offsetHeight;n=parseInt(h/2,10)};this.resizeHandlerAlt=function(){h=
a.targetElement.offsetWidth-a.flakeRightOffset;l=a.flakeBottom||a.targetElement.offsetHeight;n=parseInt(h/2,10);s=f.body.offsetHeight};this.freeze=function(){if(a.disabled)return!1;a.disabled=1;a.timer=null};this.resume=function(){if(a.disabled)a.disabled=0;else return!1;a.timerInit()};this.toggleSnow=function(){a.flakes.length?(a.active=!a.active,a.active?(a.show(),a.resume()):(a.stop(),a.freeze())):a.start()};this.stop=function(){var c;this.freeze();for(c=0;c<this.flakes.length;c++)this.flakes[c].o.style.display=
"none";a.events.remove(g,"scroll",a.scrollHandler);a.events.remove(g,"resize",a.resizeHandler);a.freezeOnBlur&&(m?(a.events.remove(f,"focusout",a.freeze),a.events.remove(f,"focusin",a.resume)):(a.events.remove(g,"blur",a.freeze),a.events.remove(g,"focus",a.resume)))};this.show=function(){var a;for(a=0;a<this.flakes.length;a++)this.flakes[a].o.style.display="block"};this.SnowFlake=function(c,d,e){var b=this;this.type=c;this.x=d||parseInt(k(h-20),10);this.y=!isNaN(e)?e:-k(l)-12;this.vY=this.vX=null;
this.vAmpTypes=[1,1.2,1.4,1.6,1.8];this.vAmp=this.vAmpTypes[this.type]||1;this.melting=!1;this.meltFrameCount=a.meltFrameCount;this.meltFrames=a.meltFrames;this.twinkleFrame=this.meltFrame=0;this.active=1;this.fontSize=10+10*(this.type/5);this.o=f.createElement("div");this.o.innerHTML=a.snowCharacter;a.className&&this.o.setAttribute("class",a.className);this.o.style.color=a.snowColor;this.o.style.position=t?"fixed":"absolute";a.useGPU&&q.transform.prop&&(this.o.style[q.transform.prop]="translate3d(0px, 0px, 0px)");
this.o.style.width=a.flakeWidth+"px";this.o.style.height=a.flakeHeight+"px";this.o.style.fontFamily="arial,verdana";this.o.style.cursor="default";this.o.style.overflow="hidden";this.o.style.fontWeight="normal";this.o.style.zIndex=a.zIndex;C.appendChild(this.o);this.refresh=function(){if(isNaN(b.x)||isNaN(b.y))return!1;a.setXY(b.o,b.x,b.y)};this.stick=function(){r||a.targetElement!==f.documentElement&&a.targetElement!==f.body?b.o.style.top=l+p-a.flakeHeight+"px":a.flakeBottom?b.o.style.top=a.flakeBottom+
"px":(b.o.style.display="none",b.o.style.bottom="0%",b.o.style.position="fixed",b.o.style.display="block")};this.vCheck=function(){0<=b.vX&&0.2>b.vX?b.vX=0.2:0>b.vX&&-0.2<b.vX&&(b.vX=-0.2);0<=b.vY&&0.2>b.vY&&(b.vY=0.2)};this.move=function(){var c=b.vX*v;b.x+=c;b.y+=b.vY*b.vAmp;b.x>=h||h-b.x<a.flakeWidth?b.x=0:0>c&&b.x-a.flakeLeftOffset<-a.flakeWidth&&(b.x=h-a.flakeWidth-1);b.refresh();l+p-b.y+a.flakeHeight<a.flakeHeight?(b.active=0,a.snowStick?b.stick():b.recycle()):(a.useMeltEffect&&(b.active&&3>
b.type&&!b.melting&&0.998<Math.random())&&(b.melting=!0,b.melt()),a.useTwinkleEffect&&(0>b.twinkleFrame?0.97<Math.random()&&(b.twinkleFrame=parseInt(8*Math.random(),10)):(b.twinkleFrame--,u?b.o.style.opacity=b.twinkleFrame&&0===b.twinkleFrame%2?0:1:b.o.style.visibility=b.twinkleFrame&&0===b.twinkleFrame%2?"hidden":"visible")))};this.animate=function(){b.move()};this.setVelocities=function(){b.vX=z+k(0.12*a.vMaxX,0.1);b.vY=A+k(0.12*a.vMaxY,0.1)};this.setOpacity=function(a,b){if(!u)return!1;a.style.opacity=
b};this.melt=function(){!a.useMeltEffect||!b.melting?b.recycle():b.meltFrame<b.meltFrameCount?(b.setOpacity(b.o,b.meltFrames[b.meltFrame]),b.o.style.fontSize=b.fontSize-b.fontSize*(b.meltFrame/b.meltFrameCount)+"px",b.o.style.lineHeight=a.flakeHeight+2+0.75*a.flakeHeight*(b.meltFrame/b.meltFrameCount)+"px",b.meltFrame++):b.recycle()};this.recycle=function(){b.o.style.display="none";b.o.style.position=t?"fixed":"absolute";b.o.style.bottom="auto";b.setVelocities();b.vCheck();b.meltFrame=0;b.melting=
!1;b.setOpacity(b.o,1);b.o.style.padding="0px";b.o.style.margin="0px";b.o.style.fontSize=b.fontSize+"px";b.o.style.lineHeight=a.flakeHeight+2+"px";b.o.style.textAlign="center";b.o.style.verticalAlign="baseline";b.x=parseInt(k(h-a.flakeWidth-20),10);b.y=parseInt(-1*k(l),10)-a.flakeHeight;b.refresh();b.o.style.display="block";b.active=1};this.recycle();this.refresh()};this.snow=function(){var c=0,d=null,e,d=0;for(e=a.flakes.length;d<e;d++)1===a.flakes[d].active&&(a.flakes[d].move(),c++),a.flakes[d].melting&&
a.flakes[d].melt();c<a.flakesMaxActive&&(d=a.flakes[parseInt(k(a.flakes.length),10)],0===d.active&&(d.melting=!0));a.timer&&q.getAnimationFrame(a.snow)};this.mouseMove=function(c){if(!a.followMouse)return!0;c=parseInt(c.clientX,10);c<n?v=-2+2*(c/n):(c-=n,v=2*(c/n))};this.createSnow=function(c,d){var e;for(e=0;e<c;e++)if(a.flakes[a.flakes.length]=new a.SnowFlake(parseInt(k(6),10)),d||e>a.flakesMaxActive)a.flakes[a.flakes.length-1].active=-1;a.targetElement.appendChild(C)};this.timerInit=function(){a.timer=
!0;a.snow()};this.init=function(){var c;for(c=0;c<a.meltFrameCount;c++)a.meltFrames.push(1-c/a.meltFrameCount);a.randomizeWind();a.createSnow(a.flakesMax);a.events.add(g,"resize",a.resizeHandler);a.events.add(g,"scroll",a.scrollHandler);a.freezeOnBlur&&(m?(a.events.add(f,"focusout",a.freeze),a.events.add(f,"focusin",a.resume)):(a.events.add(g,"blur",a.freeze),a.events.add(g,"focus",a.resume)));a.resizeHandler();a.scrollHandler();a.followMouse&&a.events.add(m?f:g,"mousemove",a.mouseMove);a.animationInterval=
Math.max(20,a.animationInterval);a.timerInit()};this.start=function(c){if(B){if(c)return!0}else B=!0;if("string"===typeof a.targetElement&&(c=a.targetElement,a.targetElement=f.getElementById(c),!a.targetElement))throw Error('Snowstorm: Unable to get targetElement "'+c+'"');a.targetElement||(a.targetElement=f.body||f.documentElement);a.targetElement!==f.documentElement&&a.targetElement!==f.body&&(a.resizeHandler=a.resizeHandlerAlt,a.usePixelPosition=!0);a.resizeHandler();a.usePositionFixed=a.usePositionFixed&&
!r&&!a.flakeBottom;if(g.getComputedStyle)try{w="relative"===g.getComputedStyle(a.targetElement,null).getPropertyValue("position")}catch(d){w=!1}t=a.usePositionFixed;h&&(l&&!a.disabled)&&(a.init(),a.active=!0)};a.autoStart&&a.events.add(g,"load",y,!1);return this}(window,document);



var snowStorm = (function(window, document) {

  // --- common properties ---

  this.autoStart = true;          // Whether the snow should start automatically or not.
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) Enable at your own risk.
  this.flakesMax = 128;           // Limit total amount of snow made (falling + sticking)
  this.flakesMaxActive = 64;      // Limit amount of snow falling at once (less = lower CPU use)
  this.animationInterval = 33;    // Theoretical "miliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower
  this.useGPU = true;             // Enable transform-based hardware acceleration, reduce CPU load.
  this.className = null;          // CSS class name for further customization on snow elements
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) By default, be nice.
  this.flakeBottom = null;        // Integer for Y axis snow limit, 0 or null for "full-screen" snow effect
  this.followMouse = true;        // Snow movement can respond to the user's mouse
  this.snowColor = '#fff';        // Don't eat (or use?) yellow snow.
  this.snowCharacter = '&bull;';  // &bull; = bullet, &middot; is square on some systems etc.
  this.snowStick = true;          // Whether or not snow should "stick" at the bottom. When off, will never collect.
  this.targetElement = null;      // element which snow will be appended to (null = document.body) - can be an element ID eg. 'myDiv', or a DOM node reference
  this.useMeltEffect = true;      // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
  this.useTwinkleEffect = false;  // Allow snow to randomly "flicker" in and out of view while falling
  this.usePositionFixed = false;  // true = snow does not shift vertically when scrolling. May increase CPU load, disabled by default - if enabled, used only where supported
  this.usePixelPosition = false;  // Whether to use pixel values for snow top/left vs. percentages. Auto-enabled if body is position:relative or targetElement is specified.

  // --- less-used bits ---

  this.freezeOnBlur = true;       // Only snow when the window is in focus (foreground.) Saves CPU.
  this.flakeLeftOffset = 0;       // Left margin/gutter space on edge of container (eg. browser window.) Bump up these values if seeing horizontal scrollbars.
  this.flakeRightOffset = 0;      // Right margin/gutter space on edge of container
  this.flakeWidth = 8;            // Max pixel width reserved for snow element
  this.flakeHeight = 8;           // Max pixel height reserved for snow element
  this.vMaxX = 5;                 // Maximum X velocity range for snow
  this.vMaxY = 4;                 // Maximum Y velocity range for snow
  this.zIndex = 0;                // CSS stacking order applied to each snowflake

  // --- "No user-serviceable parts inside" past this point, yadda yadda ---

  var storm = this,
  features,
  // UA sniffing and backCompat rendering mode checks for fixed position, etc.
  isIE = navigator.userAgent.match(/msie/i),
  isIE6 = navigator.userAgent.match(/msie 6/i),
  isMobile = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
  isBackCompatIE = (isIE && document.compatMode === 'BackCompat'),
  noFixed = (isBackCompatIE || isIE6),
  screenX = null, screenX2 = null, screenY = null, scrollY = null, docHeight = null, vRndX = null, vRndY = null,
  windOffset = 1,
  windMultiplier = 2,
  flakeTypes = 6,
  fixedForEverything = false,
  targetElementIsRelative = false,
  opacitySupported = (function(){
    try {
      document.createElement('div').style.opacity = '0.5';
    } catch(e) {
      return false;
    }
    return true;
  }()),
  didInit = false,
  docFrag = document.createDocumentFragment();

  features = (function() {

    var getAnimationFrame;

    /**
     * hat tip: paul irish
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * https://gist.github.com/838785
     */

    function timeoutShim(callback) {
      window.setTimeout(callback, 1000/(storm.animationInterval || 20));
    }

    var _animationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        timeoutShim);

    // apply to window, avoid "illegal invocation" errors in Chrome
    getAnimationFrame = _animationFrame ? function() {
      return _animationFrame.apply(window, arguments);
    } : null;

    var testDiv;

    testDiv = document.createElement('div');

    function has(prop) {

      // test for feature support
      var result = testDiv.style[prop];
      return (result !== undefined ? prop : null);

    }

    // note local scope.
    var localFeatures = {

      transform: {
        ie:  has('-ms-transform'),
        moz: has('MozTransform'),
        opera: has('OTransform'),
        webkit: has('webkitTransform'),
        w3: has('transform'),
        prop: null // the normalized property value
      },

      getAnimationFrame: getAnimationFrame

    };

    localFeatures.transform.prop = (
      localFeatures.transform.w3 || 
      localFeatures.transform.moz ||
      localFeatures.transform.webkit ||
      localFeatures.transform.ie ||
      localFeatures.transform.opera
    );

    testDiv = null;

    return localFeatures;

  }());

  this.timer = null;
  this.flakes = [];
  this.disabled = false;
  this.active = false;
  this.meltFrameCount = 20;
  this.meltFrames = [];

  this.setXY = function(o, x, y) {

    if (!o) {
      return false;
    }

    if (storm.usePixelPosition || targetElementIsRelative) {

      o.style.left = (x - storm.flakeWidth) + 'px';
      o.style.top = (y - storm.flakeHeight) + 'px';

    } else if (noFixed) {

      o.style.right = (100-(x/screenX*100)) + '%';
      // avoid creating vertical scrollbars
      o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

    } else {

      if (!storm.flakeBottom) {

        // if not using a fixed bottom coordinate...
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.bottom = (100-(y/screenY*100)) + '%';

      } else {

        // absolute top.
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

      }

    }

  };

  this.events = (function() {

    var old = (!window.addEventListener && window.attachEvent), slice = Array.prototype.slice,
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    function getArgs(oArgs) {
      var args = slice.call(oArgs), len = args.length;
      if (old) {
        args[1] = 'on' + args[1]; // prefix
        if (len > 3) {
          args.pop(); // no capture
        }
      } else if (len === 3) {
        args.push(false);
      }
      return args;
    }

    function apply(args, sType) {
      var element = args.shift(),
          method = [evt[sType]];
      if (old) {
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }
    }

    function addEvent() {
      apply(getArgs(arguments), 'add');
    }

    function removeEvent() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      add: addEvent,
      remove: removeEvent
    };

  }());

  function rnd(n,min) {
    if (isNaN(min)) {
      min = 0;
    }
    return (Math.random()*n)+min;
  }

  function plusMinus(n) {
    return (parseInt(rnd(2),10)===1?n*-1:n);
  }

  this.randomizeWind = function() {
    var i;
    vRndX = plusMinus(rnd(storm.vMaxX,0.2));
    vRndY = rnd(storm.vMaxY,0.2);
    if (this.flakes) {
      for (i=0; i<this.flakes.length; i++) {
        if (this.flakes[i].active) {
          this.flakes[i].setVelocities();
        }
      }
    }
  };

  this.scrollHandler = function() {
    var i;
    // "attach" snowflakes to bottom of window if no absolute bottom value was given
    scrollY = (storm.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || (noFixed ? document.body.scrollTop : 0), 10));
    if (isNaN(scrollY)) {
      scrollY = 0; // Netscape 6 scroll fix
    }
    if (!fixedForEverything && !storm.flakeBottom && storm.flakes) {
      for (i=0; i<storm.flakes.length; i++) {
        if (storm.flakes[i].active === 0) {
          storm.flakes[i].stick();
        }
      }
    }
  };

  this.resizeHandler = function() {
    if (window.innerWidth || window.innerHeight) {
      screenX = window.innerWidth - 16 - storm.flakeRightOffset;
      screenY = (storm.flakeBottom || window.innerHeight);
    } else {
      screenX = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0) - storm.flakeRightOffset;
      screenY = storm.flakeBottom || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
    }
    docHeight = document.body.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
  };

  this.resizeHandlerAlt = function() {
    screenX = storm.targetElement.offsetWidth - storm.flakeRightOffset;
    screenY = storm.flakeBottom || storm.targetElement.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
    docHeight = document.body.offsetHeight;
  };

  this.freeze = function() {
    // pause animation
    if (!storm.disabled) {
      storm.disabled = 1;
    } else {
      return false;
    }
    storm.timer = null;
  };

  this.resume = function() {
    if (storm.disabled) {
       storm.disabled = 0;
    } else {
      return false;
    }
    storm.timerInit();
  };

  this.toggleSnow = function() {
    if (!storm.flakes.length) {
      // first run
      storm.start();
    } else {
      storm.active = !storm.active;
      if (storm.active) {
        storm.show();
        storm.resume();
      } else {
        storm.stop();
        storm.freeze();
      }
    }
  };

  this.stop = function() {
    var i;
    this.freeze();
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'none';
    }
    storm.events.remove(window,'scroll',storm.scrollHandler);
    storm.events.remove(window,'resize',storm.resizeHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.remove(document,'focusout',storm.freeze);
        storm.events.remove(document,'focusin',storm.resume);
      } else {
        storm.events.remove(window,'blur',storm.freeze);
        storm.events.remove(window,'focus',storm.resume);
      }
    }
  };

  this.show = function() {
    var i;
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'block';
    }
  };

  this.SnowFlake = function(type,x,y) {
    var s = this;
    this.type = type;
    this.x = x||parseInt(rnd(screenX-20),10);
    this.y = (!isNaN(y)?y:-rnd(screenY)-12);
    this.vX = null;
    this.vY = null;
    this.vAmpTypes = [1,1.2,1.4,1.6,1.8]; // "amplification" for vX/vY (based on flake size/type)
    this.vAmp = this.vAmpTypes[this.type] || 1;
    this.melting = false;
    this.meltFrameCount = storm.meltFrameCount;
    this.meltFrames = storm.meltFrames;
    this.meltFrame = 0;
    this.twinkleFrame = 0;
    this.active = 1;
    this.fontSize = (10+(this.type/5)*10);
    this.o = document.createElement('div');
    this.o.innerHTML = storm.snowCharacter;
    if (storm.className) {
      this.o.setAttribute('class', storm.className);
    }
    this.o.style.color = storm.snowColor;
    this.o.style.position = (fixedForEverything?'fixed':'absolute');
    if (storm.useGPU && features.transform.prop) {
      // GPU-accelerated snow.
      this.o.style[features.transform.prop] = 'translate3d(0px, 0px, 0px)';
    }
    this.o.style.width = storm.flakeWidth+'px';
    this.o.style.height = storm.flakeHeight+'px';
    this.o.style.fontFamily = 'arial,verdana';
    this.o.style.cursor = 'default';
    this.o.style.overflow = 'hidden';
    this.o.style.fontWeight = 'normal';
    this.o.style.zIndex = storm.zIndex;
    docFrag.appendChild(this.o);

    this.refresh = function() {
      if (isNaN(s.x) || isNaN(s.y)) {
        // safety check
        return false;
      }
      storm.setXY(s.o, s.x, s.y);
    };

    this.stick = function() {
      if (noFixed || (storm.targetElement !== document.documentElement && storm.targetElement !== document.body)) {
        s.o.style.top = (screenY+scrollY-storm.flakeHeight)+'px';
      } else if (storm.flakeBottom) {
        s.o.style.top = storm.flakeBottom+'px';
      } else {
        s.o.style.display = 'none';
        s.o.style.bottom = '0%';
        s.o.style.position = 'fixed';
        s.o.style.display = 'block';
      }
    };

    this.vCheck = function() {
      if (s.vX>=0 && s.vX<0.2) {
        s.vX = 0.2;
      } else if (s.vX<0 && s.vX>-0.2) {
        s.vX = -0.2;
      }
      if (s.vY>=0 && s.vY<0.2) {
        s.vY = 0.2;
      }
    };

    this.move = function() {
      var vX = s.vX*windOffset, yDiff;
      s.x += vX;
      s.y += (s.vY*s.vAmp);
      if (s.x >= screenX || screenX-s.x < storm.flakeWidth) { // X-axis scroll check
        s.x = 0;
      } else if (vX < 0 && s.x-storm.flakeLeftOffset < -storm.flakeWidth) {
        s.x = screenX-storm.flakeWidth-1; // flakeWidth;
      }
      s.refresh();
      yDiff = screenY+scrollY-s.y+storm.flakeHeight;
      if (yDiff<storm.flakeHeight) {
        s.active = 0;
        if (storm.snowStick) {
          s.stick();
        } else {
          s.recycle();
        }
      } else {
        if (storm.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random()>0.998) {
          // ~1/1000 chance of melting mid-air, with each frame
          s.melting = true;
          s.melt();
          // only incrementally melt one frame
          // s.melting = false;
        }
        if (storm.useTwinkleEffect) {
          if (s.twinkleFrame < 0) {
            if (Math.random() > 0.97) {
              s.twinkleFrame = parseInt(Math.random() * 8, 10);
            }
          } else {
            s.twinkleFrame--;
            if (!opacitySupported) {
              s.o.style.visibility = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 'hidden' : 'visible');
            } else {
              s.o.style.opacity = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 0 : 1);
            }
          }
        }
      }
    };

    this.animate = function() {
      // main animation loop
      // move, check status, die etc.
      s.move();
    };

    this.setVelocities = function() {
      s.vX = vRndX+rnd(storm.vMaxX*0.12,0.1);
      s.vY = vRndY+rnd(storm.vMaxY*0.12,0.1);
    };

    this.setOpacity = function(o,opacity) {
      if (!opacitySupported) {
        return false;
      }
      o.style.opacity = opacity;
    };

    this.melt = function() {
      if (!storm.useMeltEffect || !s.melting) {
        s.recycle();
      } else {
        if (s.meltFrame < s.meltFrameCount) {
          s.setOpacity(s.o,s.meltFrames[s.meltFrame]);
          s.o.style.fontSize = s.fontSize-(s.fontSize*(s.meltFrame/s.meltFrameCount))+'px';
          s.o.style.lineHeight = storm.flakeHeight+2+(storm.flakeHeight*0.75*(s.meltFrame/s.meltFrameCount))+'px';
          s.meltFrame++;
        } else {
          s.recycle();
        }
      }
    };

    this.recycle = function() {
      s.o.style.display = 'none';
      s.o.style.position = (fixedForEverything?'fixed':'absolute');
      s.o.style.bottom = 'auto';
      s.setVelocities();
      s.vCheck();
      s.meltFrame = 0;
      s.melting = false;
      s.setOpacity(s.o,1);
      s.o.style.padding = '0px';
      s.o.style.margin = '0px';
      s.o.style.fontSize = s.fontSize+'px';
      s.o.style.lineHeight = (storm.flakeHeight+2)+'px';
      s.o.style.textAlign = 'center';
      s.o.style.verticalAlign = 'baseline';
      s.x = parseInt(rnd(screenX-storm.flakeWidth-20),10);
      s.y = parseInt(rnd(screenY)*-1,10)-storm.flakeHeight;
      s.refresh();
      s.o.style.display = 'block';
      s.active = 1;
    };

    this.recycle(); // set up x/y coords etc.
    this.refresh();

  };

  this.snow = function() {
    var active = 0, flake = null, i, j;
    for (i=0, j=storm.flakes.length; i<j; i++) {
      if (storm.flakes[i].active === 1) {
        storm.flakes[i].move();
        active++;
      }
      if (storm.flakes[i].melting) {
        storm.flakes[i].melt();
      }
    }
    if (active<storm.flakesMaxActive) {
      flake = storm.flakes[parseInt(rnd(storm.flakes.length),10)];
      if (flake.active === 0) {
        flake.melting = true;
      }
    }
    if (storm.timer) {
      features.getAnimationFrame(storm.snow);
    }
  };

  this.mouseMove = function(e) {
    if (!storm.followMouse) {
      return true;
    }
    var x = parseInt(e.clientX,10);
    if (x<screenX2) {
      windOffset = -windMultiplier+(x/screenX2*windMultiplier);
    } else {
      x -= screenX2;
      windOffset = (x/screenX2)*windMultiplier;
    }
  };

  this.createSnow = function(limit,allowInactive) {
    var i;
    for (i=0; i<limit; i++) {
      storm.flakes[storm.flakes.length] = new storm.SnowFlake(parseInt(rnd(flakeTypes),10));
      if (allowInactive || i>storm.flakesMaxActive) {
        storm.flakes[storm.flakes.length-1].active = -1;
      }
    }
    storm.targetElement.appendChild(docFrag);
  };

  this.timerInit = function() {
    storm.timer = true;
    storm.snow();
  };

  this.init = function() {
    var i;
    for (i=0; i<storm.meltFrameCount; i++) {
      storm.meltFrames.push(1-(i/storm.meltFrameCount));
    }
    storm.randomizeWind();
    storm.createSnow(storm.flakesMax); // create initial batch
    storm.events.add(window,'resize',storm.resizeHandler);
    storm.events.add(window,'scroll',storm.scrollHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.add(document,'focusout',storm.freeze);
        storm.events.add(document,'focusin',storm.resume);
      } else {
        storm.events.add(window,'blur',storm.freeze);
        storm.events.add(window,'focus',storm.resume);
      }
    }
    storm.resizeHandler();
    storm.scrollHandler();
    if (storm.followMouse) {
      storm.events.add(isIE?document:window,'mousemove',storm.mouseMove);
    }
    storm.animationInterval = Math.max(20,storm.animationInterval);
    storm.timerInit();
  };

  this.start = function(bFromOnLoad) {
    if (!didInit) {
      didInit = true;
    } else if (bFromOnLoad) {
      // already loaded and running
      return true;
    }
    if (typeof storm.targetElement === 'string') {
      var targetID = storm.targetElement;
      storm.targetElement = document.getElementById(targetID);
      if (!storm.targetElement) {
        throw new Error('Snowstorm: Unable to get targetElement "'+targetID+'"');
      }
    }
    if (!storm.targetElement) {
      storm.targetElement = (document.body || document.documentElement);
    }
    if (storm.targetElement !== document.documentElement && storm.targetElement !== document.body) {
      // re-map handler to get element instead of screen dimensions
      storm.resizeHandler = storm.resizeHandlerAlt;
      //and force-enable pixel positioning
      storm.usePixelPosition = true;
    }
    storm.resizeHandler(); // get bounding box elements
    storm.usePositionFixed = (storm.usePositionFixed && !noFixed && !storm.flakeBottom); // whether or not position:fixed is to be used
    if (window.getComputedStyle) {
      // attempt to determine if body or user-specified snow parent element is relatlively-positioned.
      try {
        targetElementIsRelative = (window.getComputedStyle(storm.targetElement, null).getPropertyValue('position') === 'relative');
      } catch(e) {
        // oh well
        targetElementIsRelative = false;
      }
    }
    fixedForEverything = storm.usePositionFixed;
    if (screenX && screenY && !storm.disabled) {
      storm.init();
      storm.active = true;
    }
  };

  function doDelayedStart() {
    window.setTimeout(function() {
      storm.start(true);
    }, 20);
    // event cleanup
    storm.events.remove(isIE?document:window,'mousemove',doDelayedStart);
  }

  function doStart() {
    if (!storm.excludeMobile || !isMobile) {
      doDelayedStart();
    }
    // event cleanup
    storm.events.remove(window, 'load', doStart);
  }

  // hooks for starting the snow
  if (storm.autoStart) {
    storm.events.add(window, 'load', doStart, false);
  }

  return this;

}(window, document));
