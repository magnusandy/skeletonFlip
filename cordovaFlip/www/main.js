!function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(d&&d(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={1:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=u;i.push([235,0]),n()}([,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n(132),i=n(131),a=n(130),c=n(129),u=n(128),s=n(127),d=n(126),f=n(51),p=n(125),l=n(124),h=n(123),g=n(122),y=n(121),w=n(120),C=n(119),b=n(118),S=n(117),_=n(116),v=n(115),x=n(114),O=n(113);e.uiHeart=O;var m=n(112),k=n(111),M=n(110),T=n(109),P=n(108),A=n(107),R=n(106),E=n(105),D=n(104),z=n(103),G=n(102),j=n(101),I=n(100),W=n(99),H={victory:new r.Texture(P),gameOver:new r.Texture(p),title:new r.Texture(f),sword:new r.Texture(o),skull:new r.Texture(i),potion:new r.Texture(a),coin:new r.Texture(c),card:new r.Texture(u),startMenu:new r.Texture(s),optionMenu:new r.Texture(d),backgroundTile:new r.Texture(W),0:new r.Texture(l),1:new r.Texture(h),2:new r.Texture(g),3:new r.Texture(y),4:new r.Texture(w),5:new r.Texture(C),6:new r.Texture(b),7:new r.Texture(S),8:new r.Texture(_),9:new r.Texture(v),uiSword:new r.Texture(x),uiHeart:new r.Texture(O),uiLeft:new r.Texture(m),uiRight:new r.Texture(k),uiX:new r.Texture(M),uiBlank:new r.Texture(T),cardSound:new r.Sound(A),boneSound:new r.Sound(E),coinSound:new r.Sound(G),laughSound:new r.Sound(z),potionSound:new r.Sound(R),swordSound:new r.Sound(D),victorySound:new r.Sound(I),backgroundMusic:new r.Sound(j)};e.Resources=H,e.Config={maxHealth:3,maxAttack:2,gridPadding:4,backgroundColor:"#bfbfbf",uiItemSize:50,menuHeight:150}},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n){this.gridSize=t,this.difficulty=e,this.disableProgression=n}return t.get=function(){return this.singleton?this.singleton:(this.singleton=new t(t.baseGridSize,t.baseDifficulty,!1),this.singleton)},t.prototype.getGridSize=function(){return this.gridSize},t.prototype.getDifficulty=function(){return this.difficulty},t.prototype.getSkullFactor=function(){return t.getBuffAndSkullByDifficulty(this.difficulty).skullFactor},t.prototype.getBuffFactor=function(){return t.getBuffAndSkullByDifficulty(this.difficulty).buffFactor},t.prototype.progress=function(){this.disableProgression||(5===this.difficulty?(this.difficulty=this.nextDifficulty(this.difficulty,this.gridSize),this.gridSize=this.nextGridSize(this.gridSize)):(this.nextDifficulty(this.difficulty,this.gridSize),this.difficulty=this.nextDifficulty(this.difficulty,this.gridSize)))},t.prototype.resetProgress=function(){this.disableProgression||(this.difficulty=t.baseDifficulty,this.gridSize=t.baseGridSize)},t.prototype.nextGridSize=function(t){return 9===t?9:t+1},t.prototype.nextDifficulty=function(t,e){if(9!==e||5!==t)return 2===t||4===t?t+1:5===t?1:t+2},t.getBuffAndSkullByDifficulty=function(t){var e=function(t,e){return{skullFactor:t,buffFactor:e}};switch(t){case 1:return e(3,0);case 2:return e(2.5,0);case 3:return e(2.5,1);case 4:return e(2,1);case 5:return e(2,2)}},t.baseGridSize=4,t.baseDifficulty=1,t}();e.default=r},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.GAME_WINDOW="gameWindow",t.MAIN_MENU="mainMenu",t.GAME_OVER="gameOver",t.VICTORY="victory"}(e.Scenes||(e.Scenes={}))},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n(6),i=function(){function t(t){var e=o.Resources.backgroundTile,n=Math.ceil(t.drawWidth/e.width),i=Math.ceil(t.drawHeight/e.height),a=new r.TileMap(0,0,e.width,e.height,i,n);a.registerSpriteSheet("background",new r.SpriteSheet(e,1,1,e.width,e.height));for(var c=new r.TileSprite("background",0),u=0;u<i*n;u++)a.getCellByIndex(u).pushSprite(c);this.tileMap=a}return t.prototype.getTileMap=function(){return this.tileMap},t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o=function(){function t(){}return t.get=function(){return t.soundManager?t.soundManager:(t.soundManager=new t,t.soundManager)},t.prototype.backgroundMusicStart=function(){this.backgroundSound||(this.backgroundSound=r.Resources.backgroundMusic,this.backgroundSound.loop=!0,this.backgroundSound.play(.1))},t.prototype.playSoundInterrupt=function(t,e){this.currentSound&&this.currentSound.isPlaying()&&(this.currentSound.pause(),this.currentSound=null),this.playSoundWithAfter(t,e)},t.prototype.playSoundWithAfter=function(t,e){this.currentSound=t,e?t.play().then(e):t.play()},t}();e.default=o},,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);function o(t,e,n,o,i,a){var c=i||1,u=t*c,s=e*c,d=s/o;if(d*n>t){var f,p=u/n;return{width:o*(f=a<p?a:p),height:u,scale:new r.Vector(f,f)}}return{width:s,height:n*(f=a<d?a:d),scale:new r.Vector(f,f)}}e.calcDimensionsSingleObjectTexture=function(t,e,n,r,i){return o(t,e,n.height,n.width,r,i)},e.calcDimensionsSingleObject=o},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(4),c=n(6),u=n(4),s=n(50),d=n(26),f=n(14);!function(t){t.COIN="coin",t.SKELETON="skeleton",t.POTION="potion",t.ATTACK="attack"}(i=e.CardType||(e.CardType={}));var p=function(t){function e(n,r,o,a,u,f,p){var l=t.call(this)||this;l.onEnter=function(){l.baseSprite.clearEffects(),l.baseSprite.addEffect(new s.Darken(.2))},l.onExit=function(){l.baseSprite.clearEffects()},l.playSound=function(){var t;l.cardType===i.SKELETON?t=c.Resources.boneSound:l.cardType===i.ATTACK?t=c.Resources.swordSound:l.cardType===i.COIN?t=c.Resources.coinSound:l.cardType===i.POTION&&(t=c.Resources.potionSound),d.default.get().playSoundInterrupt(t)},l.cardType=f,l.passedInOnClick=a,l.row=o,l.col=r,l.flipped=!1,l.texture=p;var h=e.calcCardDimensions(2*n.y,2*n.x);return l.baseSprite=e.sprite(c.Resources.card,h.scale),l.addDrawing("base",l.baseSprite),l.addDrawing("flip",e.sprite(l.texture,h.scale)),l.setWidth(h.width),l.setHeight(h.height),l.on("pointerup",l.fullOnClick),l.on("pointerenter",l.onEnter),l.on("pointerleave",l.onExit),l.x=e.calcX(r,h.width,n)+h.width,l.y=e.calcY(h.height,o,n)+h.height,l}return o(e,t),e.calcX=function(t,e,n){return n.x-f.default.get().getGridSize()/2*e-(f.default.get().getGridSize()-1)*c.Config.gridPadding/2+e*t+c.Config.gridPadding*t},e.calcY=function(t,e,n){return n.y+c.Config.menuHeight/2-f.default.get().getGridSize()/2*t-(f.default.get().getGridSize()-1)*c.Config.gridPadding/2+t*e+c.Config.gridPadding*e},e.calcCardDimensions=function(t,n){var r=c.Resources.card,o=r.height,i=r.width,a=t-c.Config.menuHeight,s=e.calcMaxCardHeight(a),d=e.calcMaxCardWidth(n),p=d/i;if(p*(o*(f.default.get().getGridSize()+1))>a){var l=s/o;return{width:i*l,height:s,scale:new u.Vector(l,l)}}return{width:d,height:o*p,scale:new u.Vector(p,p)}},e.calcMaxCardHeight=function(t){return.95*t/(f.default.get().getGridSize()+1)-c.Config.gridPadding},e.calcMaxCardWidth=function(t){return.95*t/(f.default.get().getGridSize()+1)-c.Config.gridPadding},e.sprite=function(t,e){var n=new u.Sprite(t,0,0,t.width,t.height);return n.scale=e,n},e.prototype.fullOnClick=function(){this.flipped||(this.flipped=!0,this.setDrawing("flip"),d.default.get().playSoundInterrupt(c.Resources.cardSound,this.playSound),this.passedInOnClick())},e.prototype.type=function(){return this.cardType},e.prototype.getRow=function(){return this.row},e.prototype.getCol=function(){return this.col},e.prototype.isFlipped=function(){return this.flipped},e.skeleton=function(t,n,r,o){return new e(t,r,n,o,a.Color.White,i.SKELETON,c.Resources.skull)},e.potion=function(t,n,r,o){return new e(t,r,n,o,a.Color.Red,i.POTION,c.Resources.potion)},e.attack=function(t,n,r,o){return new e(t,r,n,o,a.Color.Gray,i.ATTACK,c.Resources.sword)},e.coin=function(t,n,r,o){return new e(t,r,n,o,a.Color.Yellow,i.COIN,c.Resources.coin)},e}(a.Actor);e.Card=p},,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"60875f949f42a486e64184bc743af777.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=n(17),u=n(26),s=n(14),d=n(35),f=n(25),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){var e=this;this.engine=t;var n=new i.Actor;n.addDrawing(a.Resources.victory.asSprite()),n.x=this.engine.drawWidth/2,n.y=this.engine.drawHeight/2;var r=d.calcDimensionsSingleObjectTexture(this.engine.drawHeight,this.engine.drawWidth,a.Resources.victory,.8,1.5);n.setHeight(r.height),n.setWidth(r.width),n.scale=r.scale,n.on("pointerup",function(){s.default.get().progress(),e.engine.goToScene(c.Scenes.GAME_WINDOW)}),this.add(n),this.add(new f.default(t).getTileMap())},e.prototype.onActivate=function(){u.default.get().playSoundInterrupt(a.Resources.victorySound)},e.prototype.onDeactivate=function(){},e}(i.Scene);e.Victory=p},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=n(17),u=n(26),s=n(14),d=n(35),f=n(25),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){var e=this;this.engine=t;var n=new i.Actor,r=new i.SpriteSheet(a.Resources.gameOver,3,1,360,360).getAnimationForAll(this.engine,125);n.addDrawing("idle",r);var o=d.calcDimensionsSingleObject(this.engine.drawHeight,this.engine.drawWidth,360,360,.8,1.5);this.add(n),n.x=this.engine.drawWidth/2,n.y=this.engine.drawHeight/2,n.setHeight(o.height),n.setWidth(o.width),n.scale=o.scale,n.on("pointerup",function(){s.default.get().resetProgress(),e.engine.goToScene(c.Scenes.MAIN_MENU)}),this.add(new f.default(t).getTileMap())},e.prototype.onActivate=function(){u.default.get().playSoundInterrupt(a.Resources.laughSound)},e.prototype.onDeactivate=function(){a.Resources.laughSound.stop()},e}(i.Scene);e.GameOver=p},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=n(51),u=function(t){function e(){var e=t.call(this)||this;return e.backgroundColor=a.Config.backgroundColor.toString(),e.logo=c,e.logoHeight=234,e.logoWidth=1260,e}return o(e,t),e}(i.Loader);e.GameLoader=u},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=function(t){function e(){return t.call(this,{suppressConsoleBootMessage:!0,displayMode:i.DisplayMode.FullScreen,suppressPlayButton:!0})||this}return o(e,t),e.prototype.start=function(e){return t.prototype.start.call(this,e)},e}(i.Engine);e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(50),c=function(t){function e(e,n,r){var o=t.call(this)||this;return o.onDown=function(){o.sprite.clearEffects(),o.sprite.addEffect(new a.Darken(.2))},o.onEnter=function(){o.sprite.clearEffects(),o.sprite.addEffect(new a.Darken(.1))},o.onExit=function(){o.sprite.clearEffects()},o.sprite=e.asSprite(),o.on("pointerdown",o.onDown),o.on("pointerup",o.onClickWrapper(n)),o.on("pointerenter",o.onEnter),o.on("pointerleave",o.onExit),o}return o(e,t),e.prototype.onClickWrapper=function(t){var e=this;return function(){e.sprite.clearEffects(),t()}},e}(i.Actor);e.default=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=n(17),u=n(95),s=n(35),d=n(25),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){this.screenWidth=t.drawWidth,this.screenHeight=t.drawHeight,this.game=t;var e=new d.default(t);this.addTileMap(e.getTileMap())},e.prototype.onActivate=function(){var t=this,e=new i.Vector(1,1);this.start=new u.default(a.Resources.startMenu,function(){return t.game.goToScene(c.Scenes.GAME_WINDOW)},e),this.sizeProperly(this.start,.4,.5,a.Resources.startMenu),this.add(this.start),this.options=new u.default(a.Resources.optionMenu,function(){},e),this.sizeProperly(this.options,.4,.5,a.Resources.optionMenu),this.add(this.options),this.title=this.sizeProperly(new i.Actor,.9,1.5,a.Resources.title),this.add(this.title),this.placeActors()},e.prototype.sizeProperly=function(t,e,n,r){var o=s.calcDimensionsSingleObjectTexture(this.screenHeight,this.screenWidth,r,e,n);return t.addDrawing(r),t.scale=o.scale,t.setHeight(o.height),t.setWidth(o.width),t},e.prototype.placeActors=function(){this.start.x=this.screenWidth/2,this.start.y=this.screenHeight/2-this.start.getHeight()/2-a.Config.gridPadding,this.options.x=this.screenWidth/2,this.options.y=this.screenHeight/2+this.options.getHeight()/2+a.Config.gridPadding,this.title.x=this.screenWidth/2,this.title.y=this.title.getHeight()},e.prototype.onDeactivate=function(){},e}(i.Scene);e.MainMenu=f},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=n(36),u=n(14),s=function(t){function e(n,r,o,i){var u=t.call(this)||this;u.type=n,u.index=r,u.screenCenter=o;var s=c.Card.calcCardDimensions(2*o.y,2*o.x);return u.addDrawing("0",e.sprite(a.Resources[0],s.scale)),u.addDrawing("1",e.sprite(a.Resources[1],s.scale)),u.addDrawing("2",e.sprite(a.Resources[2],s.scale)),u.addDrawing("3",e.sprite(a.Resources[3],s.scale)),u.addDrawing("4",e.sprite(a.Resources[4],s.scale)),u.addDrawing("5",e.sprite(a.Resources[5],s.scale)),u.addDrawing("6",e.sprite(a.Resources[6],s.scale)),u.addDrawing("7",e.sprite(a.Resources[7],s.scale)),u.addDrawing("8",e.sprite(a.Resources[8],s.scale)),u.addDrawing("9",e.sprite(a.Resources[9],s.scale)),u.setWidth(s.width),u.setHeight(s.height),u.x=e.calcX(n,r,o,s.width)+s.width,u.y=e.calcY(n,r,o,s.height)+s.height,u.setCount(i),u}return o(e,t),e.calcX=function(t,e,n,r){var o=n.x-u.default.get().getGridSize()/2*r-r-(u.default.get().getGridSize()+1)*a.Config.gridPadding/2;return"row"===t?o:o+r+r*e+a.Config.gridPadding*(e+1)},e.calcY=function(t,e,n,r){var o=n.y+a.Config.menuHeight/2-u.default.get().getGridSize()/2*r-r-(u.default.get().getGridSize()+1)*a.Config.gridPadding/2;return"col"===t?o:o+r+r*e+a.Config.gridPadding*(e+1)},e.sprite=function(t,e){var n=t.asSprite();return n.scale=e,n},e.prototype.setCount=function(t){return this.setDrawing(""+t),this},e}(i.Actor);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n(34),i=n(4),a=n(14),c=function(){function t(e,n,r){this.skeletonCount=0,this.potionCount=0,this.swordCount=0,this.gridSize=n,this.callbackProvider=e,this.screenCenter=r,this.grid=t.blankGrid(n,e,this.screenCenter)}return t.prototype.getGridAsList=function(){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(o.Function.identity()).toArray()},t.prototype.getCard=function(t,e){return this.grid[t][e]},t.prototype.getRow=function(t){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(function(t){return t}).filter(function(e){return e.getRow()==t}).toArray()},t.prototype.getCol=function(t){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(function(t){return t}).filter(function(e){return e.getCol()==t}).toArray()},t.blankGrid=function(t,e,n){var r=this;return o.Stream.range(0,t).map(function(o){return r.blankGridRow(t,o,e,n)}).toArray()},t.blankGridRow=function(t,e,n,i){return o.Stream.range(0,t).map(function(t){return r.Card.coin(i,e,t,n.coinCardCallback)}).toArray()},t.prototype.initializeSkeletons=function(){for(;this.needMoreSkeletons();){var t=this.randomCoord(),e=this.randomCoord();this.isCoin(t,e)&&this.insertCard(t,e,r.Card.skeleton(this.screenCenter,t,e,this.callbackProvider.skeletonCardCallback))}},t.prototype.initializeBuffs=function(){for(;this.needMoreBuffs();){var t=this.randomCoord(),e=this.randomCoord();this.isCoin(t,e)&&this.insertCard(t,e,this.generateBuffCard(t,e))}},t.prototype.generateBuffCard=function(t,e){return Math.random()<.5?r.Card.attack(this.screenCenter,t,e,this.callbackProvider.attackCardCallback):r.Card.potion(this.screenCenter,t,e,this.callbackProvider.potionCardCallback)},t.prototype.insertCard=function(t,e,n){n.type()==r.CardType.SKELETON?this.skeletonCount++:n.type()==r.CardType.ATTACK?this.swordCount++:n.type()==r.CardType.POTION&&this.potionCount++,this.grid[t][e]=n},t.prototype.isCoin=function(t,e){return this.grid[t][e].type()==r.CardType.COIN},t.prototype.needMoreSkeletons=function(){return this.skeletonCount<Math.ceil(this.gridSize*this.gridSize/a.default.get().getSkullFactor())},t.prototype.needMoreBuffs=function(){return this.potionCount+this.swordCount<this.skeletonCount-a.default.get().getBuffFactor()},t.prototype.randomCoord=function(){return Math.floor(Math.random()*this.gridSize)},t.createGrid=function(e,n,r){var o=new t(e,n,new i.Vector(r.drawWidth/2,r.drawHeight/2));return o.initializeSkeletons(),o.initializeBuffs(),o},t}();e.GridCoordinator=c},function(t,e,n){t.exports=n.p+"e1f03a0829378e36ba7058cc784f431c.png"},function(t,e,n){t.exports=n.p+"5acc4c358abe356ab34cb46990213c87.mp3"},function(t,e,n){t.exports=n.p+"e1587389071cad642af4ea472a7657df.wav"},function(t,e,n){t.exports=n.p+"7969b4d1ca99e09c909f6b4247f2e20a.wav"},function(t,e,n){t.exports=n.p+"ec591911768b22068d38bb5b2a321448.ogg"},function(t,e,n){t.exports=n.p+"c17429a3194184f1823e8652b19665db.wav"},function(t,e,n){t.exports=n.p+"9b230c404133d31e8b32b72e4f4709d6.wav"},function(t,e,n){t.exports=n.p+"84f7a92ac15bb28de085370686c46b57.wav"},function(t,e,n){t.exports=n.p+"b58455f5ec6aaf2a19902f196a55e98a.wav"},function(t,e,n){t.exports=n.p+"7765777ed029910c394ea6ecdc46e707.png"},function(t,e,n){t.exports=n.p+"252e335cd8e95aa7f9af810197527c88.png"},function(t,e,n){t.exports=n.p+"7bc9ef00f9c3eac4ed90e0f78fe053f4.png"},function(t,e,n){t.exports=n.p+"4be259f95a7562b19fc50f5956f3064a.png"},function(t,e,n){t.exports=n.p+"f37c84d41789ca95567a2e9f9b3288cb.png"},function(t,e,n){t.exports=n.p+"8c33cba37ae9cda19c0c4706219cd540.png"},function(t,e,n){t.exports=n.p+"78b5b4973f64552277b581a279a72a42.png"},function(t,e,n){t.exports=n.p+"6944ce0fd23293c610a6b7881300e188.png"},function(t,e,n){t.exports=n.p+"0574a2e0749918363ef5593ddc58b2e7.png"},function(t,e,n){t.exports=n.p+"e7192d5fba02e9c6c174e7e3d9487a6b.png"},function(t,e,n){t.exports=n.p+"46f00f6169dccc5ee028881800a09fe3.png"},function(t,e,n){t.exports=n.p+"3844e977328e0e91b54f2d32278684c5.png"},function(t,e,n){t.exports=n.p+"56376cf0ad0de37681a110e6dbfc3fb8.png"},function(t,e,n){t.exports=n.p+"2a3f5e19c5b2efd0462fb7cc1b704558.png"},function(t,e,n){t.exports=n.p+"4ce8baed92fdbe83ea831d09b512beb2.png"},function(t,e,n){t.exports=n.p+"b6ac9dbcd6cad76692d5dc9ffd4d530d.png"},function(t,e,n){t.exports=n.p+"d564e115a42fa163a7bc9e1328b2d216.png"},function(t,e,n){t.exports=n.p+"29171ae82e287f9d176ab7ddd7f6b382.png"},function(t,e,n){t.exports=n.p+"ccd1e8955823c41dd50406b82e3d7dc0.png"},function(t,e,n){t.exports=n.p+"598df00bd95514ed5a3f054793f36da1.png"},function(t,e,n){t.exports=n.p+"022ab466b958b1e014b14ab33cf74a84.png"},function(t,e,n){t.exports=n.p+"c150a67e689f09935b6d97e1989f8b56.png"},function(t,e,n){t.exports=n.p+"17b342f332f5ab3ea92edee594cc0ff7.png"},function(t,e,n){t.exports=n.p+"bfc4eed12d62bc8834e80f5ad6a79e14.png"},function(t,e,n){t.exports=n.p+"0cfb30ca844b8dc2e00ca6a6b6125ca5.png"},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(6),c=function(t){function e(e,n,r,o){var c=t.call(this)||this;return c.x=n,c.y=r,c.sprite=new i.Sprite(o,0,0,o.width,o.height),c.scale=new i.Vector(a.Config.uiItemSize/o.width,a.Config.uiItemSize/o.height),c.addDrawing(c.sprite),c.setEnabled(e),c}return o(e,t),e.prototype.setEnabled=function(t){return this.enabled=t,this.sprite.clearEffects(),t?this.sprite.opacity(1):this.sprite.opacity(e.DISABLED_OPACITY),this},e.prototype.isEnabled=function(){return this.enabled},e.DISABLED_OPACITY=.5,e}(i.Actor);e.default=c},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(34),o=n(133),i=n(6),a=function(){function t(t,e,n,r){this.current=e,this.max=t,this.onZero=n,this.statActors=r}return t.create=function(e,n,a,c,u,s){var d=s||0,f=r.Stream.range(0,a).map(function(t){return t>d-1?new o.default(!1,e+t*i.Config.uiItemSize,n,u):new o.default(!0,e+t*i.Config.uiItemSize,n,u)}).toArray();return new t(a,d,c,f)},t.prototype.add=function(t){return this.current+t>this.max?this.current=this.max:this.current=this.current+t,this.statActors[this.current-1].setEnabled(!0),this.current},t.prototype.subtract=function(t){return this.current-t<=0?(this.current=0,this.onZero()):this.current=this.current-t,this.statActors[this.current].setEnabled(!1),this.current},t.prototype.getCurrent=function(){return this.current},t.prototype.getStatActors=function(){return this.statActors},t}();e.NumberCoordinator=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(232),o=n(36),i=n(6),a=n(34),c=n(98),u=n(4),s=n(17),d=n(97),f=n(14),p=function(){function t(t,e,n){var r=this;this.skeletonCardCallback=function(){r.attackCoordinator.getCurrent()>0?r.attackCoordinator.subtract(1):r.healthCoordinator.subtract(1),r.updateLabels(),r.checkIfCompleteGame()},this.coinCardCallback=function(){r.checkIfCompleteGame()},this.attackCardCallback=function(){r.attackCoordinator.add(1),r.checkIfCompleteGame()},this.potionCardCallback=function(){r.healthCoordinator.add(1),r.checkIfCompleteGame()},this.healthCoordinator=e,this.attackCoordinator=n,this.engine=t}return t.initialize=function(e){var n=new t(e,r.NumberCoordinator.create(i.Config.uiItemSize/2,i.Config.uiItemSize/2,i.Config.maxHealth,function(){e.goToScene(s.Scenes.GAME_OVER)},i.Resources.uiHeart,i.Config.maxHealth),r.NumberCoordinator.create(i.Config.uiItemSize/2,1.5*i.Config.uiItemSize,i.Config.maxAttack,function(){},i.Resources.uiSword));return n.gridCoordinator=c.GridCoordinator.createGrid(n,f.default.get().getGridSize(),e),n.rowCounts=n.createRowCountCards(),n.columnCounts=n.createColCountCards(),n},t.prototype.getStatTrackers=function(){return this.healthCoordinator.getStatActors().concat(this.attackCoordinator.getStatActors())},t.prototype.getRowCountCards=function(){return this.rowCounts},t.prototype.getColCountCards=function(){return this.columnCounts},t.prototype.createColCountCards=function(){var t=this,e=new u.Vector(this.engine.drawWidth/2,this.engine.drawHeight/2);return a.Stream.of(this.gridCoordinator.getRow(0)).map(function(n){return new d.default("col",n.getCol(),e,t.skeletonCountForCol(n.getCol()))}).toArray()},t.prototype.createRowCountCards=function(){var t=this,e=new u.Vector(this.engine.drawWidth/2,this.engine.drawHeight/2);return a.Stream.of(this.gridCoordinator.getCol(0)).map(function(n){return new d.default("row",n.getRow(),e,t.skeletonCountForRow(n.getRow()))}).toArray()},t.prototype.skeletonCountForRow=function(t){return a.Stream.of(this.gridCoordinator.getRow(t)).filter(function(t){return!t.isFlipped()}).filter(function(t){return t.type()==o.CardType.SKELETON}).count()},t.prototype.skeletonCountForCol=function(t){return a.Stream.of(this.gridCoordinator.getCol(t)).filter(function(t){return!t.isFlipped()}).filter(function(t){return t.type()==o.CardType.SKELETON}).count()},t.prototype.getGridAsList=function(){return this.gridCoordinator.getGridAsList()},t.prototype.updateLabels=function(){var t=this;this.rowCounts.forEach(function(e,n){e.setCount(t.skeletonCountForRow(n))}),this.columnCounts.forEach(function(e,n){e.setCount(t.skeletonCountForCol(n))})},t.prototype.checkIfCompleteGame=function(){a.Stream.of(this.getGridAsList()).allMatch(function(t){return t.isFlipped()})&&this.healthCoordinator.getCurrent()>0&&this.engine.goToScene(s.Scenes.VICTORY)},t}();e.GameCoordinatior=p},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(233),c=n(34),u=n(26),s=n(25),d=n(4),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){this.engine=t,this.add(new s.default(t).getTileMap())},e.prototype.onActivate=function(){var t=this;u.default.get().backgroundMusicStart();var e=a.GameCoordinatior.initialize(this.engine);this.coordinator=e,e.getGridAsList().forEach(function(e){return t.add(e)}),e.getColCountCards().forEach(function(e){return t.add(e)}),e.getRowCountCards().forEach(function(e){return t.add(e)}),c.Stream.ofValues(this.coordinator.getStatTrackers()).map(function(t){return c.Stream.ofValues.apply(c.Stream,t)}).flatMap(function(t){return t}).forEach(function(e){return t.add(e)});var n=new d.Actor;n.y=150,n.x=this.engine.drawWidth/2,n.setHeight(1),n.setWidth(this.engine.drawWidth),n.color=d.Color.Red,this.add(n)},e.prototype.onDeactivate=function(){var t=this;this.coordinator.getGridAsList().forEach(function(e){return t.remove(e)}),this.coordinator.getColCountCards().forEach(function(e){return t.remove(e)}),this.coordinator.getRowCountCards().forEach(function(e){return t.remove(e)}),c.Stream.ofValues(this.coordinator.getStatTrackers()).map(function(t){return c.Stream.ofValues.apply(c.Stream,t)}).flatMap(function(t){return t}).forEach(function(e){return t.remove(e)})},e}(i.Scene);e.GameWindow=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(234),o=n(6),i=n(17),a=n(96),c=n(94),u=n(93),s=n(92),d=n(91),f=new c.default,p=new a.MainMenu(f);f.add(i.Scenes.MAIN_MENU,p),f.add(i.Scenes.GAME_OVER,new s.GameOver(f)),f.add(i.Scenes.GAME_WINDOW,new r.GameWindow(f)),f.add(i.Scenes.VICTORY,new d.Victory(f));var l=new u.GameLoader;Object.keys(o.Resources).forEach(function(t){return l.addResource(o.Resources[t])}),f.start(l).then(function(){f.goToScene(i.Scenes.MAIN_MENU)})}]);
//# sourceMappingURL=main.js.map