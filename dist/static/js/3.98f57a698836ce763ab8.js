webpackJsonp([3],{582:function(t,i,e){e(618);var s=e(9)(e(600),e(630),"data-v-77ad6140",null);t.exports=s.exports},584:function(t,i,e){"use strict";function s(){var t=o()({},r.b,{uin:0,needNewCode:1,platform:"h5"});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,r.c)}function a(t){var i=o()({},r.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,r.c)}i.b=s,i.a=a;var n=e(87),o=e.n(n),l=e(199),r=e(65)},585:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(57),a=e.n(s),n=e(66),o=e.n(n),l=e(200),r=e.n(l),c=e(201),d=e.n(c),p=e(127),g=e(86),f=e(48),u=e.i(p.a)("transform"),h=e.i(p.a)("backdrop-filter");i.default={mixins:[g.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},e.i(f.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),e=1,s=0,a=0,n=Math.abs(t/this.imageHeight);t>0?(e=1+n,s=10):a=Math.min(20,20*n),this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[h]="blur("+a+"px)",t<this.minTransalteY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+e+")",this.$refs.bgImage.style.zIndex=s}},components:{Scroll:o.a,Loading:r.a,SongList:d.a}}},586:function(t,i,e){i=t.exports=e(574)(!1),i.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},587:function(t,i,e){var s=e(586);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(575)("6dec5362",s,!0)},588:function(t,i,e){e(587);var s=e(9)(e(585),e(589),"data-v-77c0eaa0",null);t.exports=s.exports},589:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},600:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(57),a=e.n(s),n=e(588),o=e.n(n),l=e(584),r=e(65),c=e(48),d=e(128);i.default={computed:a()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},e.i(c.a)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;if(!this.topList.id)return void this.$router.push("/rank");e.i(l.a)(this.topList.id).then(function(i){i.code===r.a&&(t.songs=t._normalizeSongs(i.songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var s=t.data;s.songid&&s.albummid&&i.push(e.i(d.b)(s))}),i}},components:{MusicList:o.a}}},608:function(t,i,e){i=t.exports=e(574)(!1),i.push([t.i,".slide-enter-active[data-v-77ad6140],.slide-leave-active[data-v-77ad6140]{transition:all .3s ease}.slide-enter[data-v-77ad6140],.slide-leave-to[data-v-77ad6140]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},618:function(t,i,e){var s=e(608);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(575)("4a9f4370",s,!0)},630:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{rank:t.rank,title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});