!function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(d&&d(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={1:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=u;i.push([211,0]),n()}({10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n(4),i=n(207),a=n(206),c=n(205),u=n(204),s=n(203),d=n(202),f=n(201),p=n(83),l=n(200),h=n(199),g=n(198),C=n(197),y=n(196),w=n(195),b=n(194),_=n(193),v=n(192),O=n(191),x=n(190),m={gameOver:new r.Texture(l),title:new r.Texture(p),sword:new r.Texture(i),skull:new r.Texture(a),potion:new r.Texture(c),coin:new r.Texture(u),card:new r.Texture(s),startMenu:new r.Texture(d),optionMenu:new r.Texture(f),0:new r.Texture(h),1:new r.Texture(g),2:new r.Texture(C),3:new r.Texture(y),4:new r.Texture(w),5:new r.Texture(b),6:new r.Texture(_),7:new r.Texture(v),8:new r.Texture(O),9:new r.Texture(x)};e.Resources=m;var S={maxHealth:3,maxAttack:2,gridPadding:8,gridSize:4,gridOffset:100,cardHeight:90,cardWidth:75,skeletonDifficultyFactor:2,buffDifficultyFactor:2,backgroundColor:o.Color.Gray};e.Config=S},139:function(t,e){},140:function(t,e){},177:function(t,e){},179:function(t,e){},190:function(t,e,n){t.exports=n.p+"6944ce0fd23293c610a6b7881300e188.png"},191:function(t,e,n){t.exports=n.p+"0574a2e0749918363ef5593ddc58b2e7.png"},192:function(t,e,n){t.exports=n.p+"e7192d5fba02e9c6c174e7e3d9487a6b.png"},193:function(t,e,n){t.exports=n.p+"46f00f6169dccc5ee028881800a09fe3.png"},194:function(t,e,n){t.exports=n.p+"3844e977328e0e91b54f2d32278684c5.png"},195:function(t,e,n){t.exports=n.p+"56376cf0ad0de37681a110e6dbfc3fb8.png"},196:function(t,e,n){t.exports=n.p+"2a3f5e19c5b2efd0462fb7cc1b704558.png"},197:function(t,e,n){t.exports=n.p+"4ce8baed92fdbe83ea831d09b512beb2.png"},198:function(t,e,n){t.exports=n.p+"b6ac9dbcd6cad76692d5dc9ffd4d530d.png"},199:function(t,e,n){t.exports=n.p+"d564e115a42fa163a7bc9e1328b2d216.png"},200:function(t,e,n){t.exports=n.p+"7f0a2a655d51479def4f8b21fd3b5738.png"},201:function(t,e,n){t.exports=n.p+"ccd1e8955823c41dd50406b82e3d7dc0.png"},202:function(t,e,n){t.exports=n.p+"598df00bd95514ed5a3f054793f36da1.png"},203:function(t,e,n){t.exports=n.p+"b4c4a5b43037b15315c6c75870cbb701.png"},204:function(t,e,n){t.exports=n.p+"8c1509dd1b13c9b73931d6618c43997a.png"},205:function(t,e,n){t.exports=n.p+"3e597a67bfe1e56605598b0b20f7c961.png"},206:function(t,e,n){t.exports=n.p+"419e057f2b0e2d8670422004f5820c24.png"},207:function(t,e,n){t.exports=n.p+"040adb5051047f4fef1d17a65a486b10.png"},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=function(){function t(t,e,n,r,o){this.current=n,this.max=e,this.label=r,this.labelPrefix=t,this.onZero=o}return t.create=function(e,n,o,i,a,c){var u=c||0;return new t(e,i,u,new r.Label(e+u,n,o,"20px Arial"),a)},t.prototype.add=function(t){return this.current+t>this.max?this.current=this.max:this.current=this.current+t,this.label.text=this.labelPrefix+this.current,this.current},t.prototype.subtract=function(t){return this.current-t<=0?(this.current=0,this.onZero()):this.current=this.current-t,this.label.text=this.labelPrefix+this.current,this.current},t.prototype.getCurrent=function(){return this.current},t.prototype.getLabel=function(){return this.label},t}();e.NumberCoordinator=o},209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(208),o=n(84),i=n(10),a=n(44),c=n(91),u=n(4),s=n(23),d=n(90),f=function(){function t(t,e,n){var r=this;this.skeletonCardCallback=function(){r.attackCoordinator.getCurrent()>0?r.attackCoordinator.subtract(1):r.healthCoordinator.subtract(1),r.updateLabels()},this.coinCardCallback=function(){},this.attackCardCallback=function(){r.attackCoordinator.add(1)},this.potionCardCallback=function(){r.healthCoordinator.add(1)},this.healthCoordinator=e,this.attackCoordinator=n,this.engine=t}return t.initialize=function(e){console.log(i.Config.maxHealth);var n=new t(e,r.NumberCoordinator.create("Health: ",50,50,i.Config.maxHealth,function(){e.goToScene(s.Scenes.GAME_OVER)},i.Config.maxHealth),r.NumberCoordinator.create("Attack: ",50,100,i.Config.maxAttack,function(){}));return n.gridCoordinator=c.GridCoordinator.createGrid(n,i.Config.gridSize,e),n.rowCounts=n.createRowCountCards(),n.columnCounts=n.createColCountCards(),n},t.prototype.getUIBar=function(){return[this.healthCoordinator.getLabel(),this.attackCoordinator.getLabel()]},t.prototype.getRowCountCards=function(){return this.rowCounts},t.prototype.getColCountCards=function(){return this.columnCounts},t.prototype.createColCountCards=function(){var t=this,e=new u.Vector(this.engine.drawWidth/2,this.engine.drawHeight/2);return a.Stream.of(this.gridCoordinator.getRow(0)).map(function(n){return new d.default("col",n.getCol(),e,t.skeletonCountForCol(n.getCol()))}).toArray()},t.prototype.createRowCountCards=function(){var t=this,e=new u.Vector(this.engine.drawWidth/2,this.engine.drawHeight/2);return a.Stream.of(this.gridCoordinator.getCol(0)).map(function(n){return new d.default("row",n.getRow(),e,t.skeletonCountForRow(n.getRow()))}).toArray()},t.prototype.skeletonCountForRow=function(t){return a.Stream.of(this.gridCoordinator.getRow(t)).filter(function(t){return!t.isFlipped()}).filter(function(t){return t.type()==o.CardType.SKELETON}).count()},t.prototype.skeletonCountForCol=function(t){return a.Stream.of(this.gridCoordinator.getCol(t)).filter(function(t){return!t.isFlipped()}).filter(function(t){return t.type()==o.CardType.SKELETON}).count()},t.prototype.getGridAsList=function(){return this.gridCoordinator.getGridAsList()},t.prototype.updateLabels=function(){var t=this;this.rowCounts.forEach(function(e,n){e.setCount(t.skeletonCountForRow(n))}),this.columnCounts.forEach(function(e,n){e.setCount(t.skeletonCountForCol(n))})},t}();e.GameCoordinatior=f},210:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(209),c=n(44),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){},e.prototype.onActivate=function(){var t=this,e=a.GameCoordinatior.initialize(this.engine);this.coordinator=e,e.getGridAsList().forEach(function(e){return t.add(e)}),e.getColCountCards().forEach(function(e){return t.add(e)}),e.getRowCountCards().forEach(function(e){return t.add(e)}),c.Stream.ofValues(e.getUIBar()).map(function(t){return c.Stream.ofValues.apply(c.Stream,t)}).flatMap(function(t){return t}).forEach(function(e){return t.add(e)})},e.prototype.onDeactivate=function(){var t=this;this.coordinator.getGridAsList().forEach(function(e){return t.remove(e)}),this.coordinator.getColCountCards().forEach(function(e){return t.remove(e)}),this.coordinator.getRowCountCards().forEach(function(e){return t.remove(e)}),c.Stream.ofValues(this.coordinator.getUIBar()).map(function(t){return c.Stream.ofValues.apply(c.Stream,t)}).flatMap(function(t){return t}).forEach(function(e){return t.remove(e)})},e}(i.Scene);e.GameWindow=u},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(210),o=n(10),i=n(23),a=n(89),c=n(88),u=n(87),s=n(86),d=new c.default;d.add(i.Scenes.MAIN_MENU,new a.MainMenu(d)),d.add(i.Scenes.GAME_OVER,new s.GameOver(d)),d.add(i.Scenes.GAME_WINDOW,new r.GameWindow(d));var f=new u.GameLoader;Object.keys(o.Resources).forEach(function(t){return f.addResource(o.Resources[t])}),d.start(f).then(function(){d.goToScene(i.Scenes.MAIN_MENU)})},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.GAME_WINDOW="gameWindow",t.MAIN_MENU="mainMenu",t.GAME_OVER="gameOver"}(e.Scenes||(e.Scenes={}))},83:function(t,e,n){t.exports=n.p+"32e41cd2c45011981855c5231583be07.png"},84:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(4),c=n(10),u=n(4);!function(t){t.COIN="coin",t.SKELETON="skeleton",t.POTION="potion",t.ATTACK="attack"}(i=e.CardType||(e.CardType={}));var s=function(t){function e(n,r,o,i,a,u,s){var d=t.call(this)||this;return d.screenCenter=n,d.cardType=u,d.passedInOnClick=i,d.row=o,d.col=r,d.flipped=!1,d.texture=s,d.addDrawing("base",e.sprite(c.Resources.card)),d.addDrawing("flip",e.sprite(d.texture)),d.setWidth(c.Config.cardWidth),d.setHeight(c.Config.cardHeight),d.on("pointerdown",d.fullOnClick),d.x=e.calcX(r,o,n),d.y=e.calcY(r,o,n),d}return o(e,t),e.calcX=function(t,e,n){return n.x-c.Config.gridSize/2*c.Config.cardWidth-(c.Config.gridSize-1)*c.Config.gridPadding/2+c.Config.cardWidth*t+c.Config.gridPadding*t},e.calcY=function(t,e,n){return n.y-c.Config.gridSize/2*c.Config.cardHeight-(c.Config.gridSize-1)*c.Config.gridPadding/2+c.Config.cardHeight*e+c.Config.gridPadding*e},e.sprite=function(t){var e=t.asSprite();return e.scale=new u.Vector(.5,.5),e},e.prototype.fullOnClick=function(){this.flipped||(this.flipped=!0,this.setDrawing("flip"),this.passedInOnClick())},e.prototype.type=function(){return this.cardType},e.prototype.getRow=function(){return this.row},e.prototype.getCol=function(){return this.col},e.prototype.isFlipped=function(){return this.flipped},e.skeleton=function(t,n,r,o){return new e(t,r,n,o,a.Color.White,i.SKELETON,c.Resources.skull)},e.potion=function(t,n,r,o){return new e(t,r,n,o,a.Color.Red,i.POTION,c.Resources.potion)},e.attack=function(t,n,r,o){return new e(t,r,n,o,a.Color.Gray,i.ATTACK,c.Resources.sword)},e.coin=function(t,n,r,o){return new e(t,r,n,o,a.Color.Yellow,i.COIN,c.Resources.coin)},e}(a.Actor);e.Card=s},86:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(10),c=n(23),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){},e.prototype.onActivate=function(){var t=this,e=new i.Actor,n=new i.SpriteSheet(a.Resources.gameOver,3,1,360,360).getAnimationForAll(this.engine,125);e.addDrawing("idle",n),this.add(e),e.x=this.engine.drawWidth/2,e.y=this.engine.drawHeight/2,e.setHeight(360),e.setWidth(360),e.on("pointerdown",function(){return t.engine.goToScene(c.Scenes.MAIN_MENU)})},e.prototype.onDeactivate=function(){},e}(i.Scene);e.GameOver=u},87:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(10),c=n(83),u=function(t){function e(){var e=t.call(this)||this;return e.backgroundColor=a.Config.backgroundColor.toString(),e.logo=c,e.logoHeight=96,e.logoWidth=480,e}return o(e,t),e}(i.Loader);e.GameLoader=u},88:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(10),c=function(t){function e(){var e=t.call(this,{displayMode:i.DisplayMode.FullScreen})||this;return e.backgroundColor=a.Config.backgroundColor,e}return o(e,t),e.prototype.start=function(e){return t.prototype.start.call(this,e)},e}(i.Engine);e.default=c},89:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(4),c=n(10),u=n(23),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onInitialize=function(t){this.screenWidth=t.drawWidth,this.screenHeight=t.drawHeight,this.engine=t},e.prototype.onActivate=function(){var t=this,e=new d(c.Resources.startMenu,function(){return t.engine.goToScene(u.Scenes.GAME_WINDOW)});e.x=this.screenWidth/2,e.y=this.screenHeight/2-e.drawHeight/2-c.Config.gridPadding,this.add(e);var n=new d(c.Resources.optionMenu,function(){});n.x=this.screenWidth/2,n.y=this.screenHeight/2+n.drawHeight/2+c.Config.gridPadding,this.add(n);var r=c.Resources.title.asSprite(),o=new a.Actor;o.addDrawing(r),o.x=this.screenWidth/2,o.y=this.screenHeight/2-2*e.drawHeight,this.add(o)},e.prototype.onDeactivate=function(){},e}(i.Scene);e.MainMenu=s;var d=function(t){function e(n,r){var o=t.call(this)||this,i=n.asSprite();return i.scale=e.buttonScale,o.addDrawing(i),o.setHeight(i.drawHeight),o.setWidth(i.drawWidth),o.on("pointerdown",r),o.drawHeight=i.drawHeight,o}return o(e,t),e.buttonScale=new a.Vector(.4,.4),e}(i.Actor)},90:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n(10),c=function(t){function e(n,r,o,i){var c=t.call(this)||this;return c.type=n,c.index=r,c.screenCenter=o,c.addDrawing("0",e.sprite(a.Resources[0])),c.addDrawing("1",e.sprite(a.Resources[1])),c.addDrawing("2",e.sprite(a.Resources[2])),c.addDrawing("3",e.sprite(a.Resources[3])),c.addDrawing("4",e.sprite(a.Resources[4])),c.addDrawing("5",e.sprite(a.Resources[5])),c.addDrawing("6",e.sprite(a.Resources[6])),c.addDrawing("7",e.sprite(a.Resources[7])),c.addDrawing("8",e.sprite(a.Resources[8])),c.addDrawing("9",e.sprite(a.Resources[9])),c.setWidth(a.Config.cardWidth),c.setHeight(a.Config.cardHeight),c.x=e.calcX(n,r,o),c.y=e.calcY(n,r,o),c.setCount(i),c}return o(e,t),e.calcX=function(t,e,n){var r=n.x-a.Config.gridSize/2*a.Config.cardWidth-a.Config.cardWidth-(a.Config.gridSize+1)*a.Config.gridPadding/2;return"row"===t?r:r+a.Config.cardWidth+a.Config.cardWidth*e+a.Config.gridPadding*(e+1)},e.calcY=function(t,e,n){var r=n.y-a.Config.gridSize/2*a.Config.cardHeight-a.Config.cardHeight-(a.Config.gridSize+1)*a.Config.gridPadding/2;return"col"===t?r:r+a.Config.cardHeight+a.Config.cardHeight*e+a.Config.gridPadding*(e+1)},e.sprite=function(t){var e=t.asSprite();return e.scale=new i.Vector(.5,.5),e},e.prototype.setCount=function(t){return this.setDrawing(""+t),this},e}(i.Actor);e.default=c},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(84),o=n(44),i=n(10),a=n(4),c=function(){function t(e,n,r){this.skeletonCount=0,this.potionCount=0,this.swordCount=0,this.gridSize=n,this.callbackProvider=e,this.screenCenter=r,this.grid=t.blankGrid(n,e,this.screenCenter)}return t.prototype.getGridAsList=function(){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(o.Function.identity()).toArray()},t.prototype.getCard=function(t,e){return this.grid[t][e]},t.prototype.getRow=function(t){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(function(t){return t}).filter(function(e){return e.getRow()==t}).toArray()},t.prototype.getCol=function(t){return o.Stream.of(this.grid).map(function(t){return o.Stream.ofValues.apply(o.Stream,t)}).flatMap(function(t){return t}).filter(function(e){return e.getCol()==t}).toArray()},t.blankGrid=function(t,e,n){var r=this;return o.Stream.range(0,t).map(function(o){return r.blankGridRow(t,o,e,n)}).toArray()},t.blankGridRow=function(t,e,n,i){return o.Stream.range(0,t).map(function(t){return r.Card.coin(i,e,t,n.coinCardCallback)}).toArray()},t.prototype.initializeSkeletons=function(){for(;this.needMoreSkeletons();){var t=this.randomCoord(),e=this.randomCoord();this.isCoin(t,e)&&this.insertCard(t,e,r.Card.skeleton(this.screenCenter,t,e,this.callbackProvider.skeletonCardCallback))}},t.prototype.initializeBuffs=function(){for(;this.needMoreBuffs();){var t=this.randomCoord(),e=this.randomCoord();this.isCoin(t,e)&&this.insertCard(t,e,this.generateBuffCard(t,e))}},t.prototype.generateBuffCard=function(t,e){return Math.random()<.5?r.Card.attack(this.screenCenter,t,e,this.callbackProvider.attackCardCallback):r.Card.potion(this.screenCenter,t,e,this.callbackProvider.potionCardCallback)},t.prototype.insertCard=function(t,e,n){n.type()==r.CardType.SKELETON?this.skeletonCount++:n.type()==r.CardType.ATTACK?this.swordCount++:n.type()==r.CardType.POTION&&this.potionCount++,this.grid[t][e]=n},t.prototype.isCoin=function(t,e){return this.grid[t][e].type()==r.CardType.COIN},t.prototype.needMoreSkeletons=function(){return this.skeletonCount<Math.ceil(this.gridSize*this.gridSize/i.Config.skeletonDifficultyFactor)},t.prototype.needMoreBuffs=function(){return this.potionCount+this.swordCount<this.skeletonCount-i.Config.buffDifficultyFactor},t.prototype.randomCoord=function(){return Math.floor(Math.random()*this.gridSize)},t.createGrid=function(e,n,r){var o=new t(e,n,new a.Vector(r.drawWidth/2,r.drawHeight/2));return o.initializeSkeletons(),o.initializeBuffs(),o},t}();e.GridCoordinator=c}});
//# sourceMappingURL=main.js.map