(i=>{var n=i.fancybox;n.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(t,s){t.skipSingle&&s.group.length<2?(s.helpers.buttons=!1,s.closeBtn=!0):s.margin["bottom"===t.position?2:0]+=30},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(t,s){var l=this.buttons;l||(this.list=i(t.tpl).addClass(t.position).appendTo("body"),l={prev:this.list.find(".btnPrev").click(n.prev),next:this.list.find(".btnNext").click(n.next),play:this.list.find(".btnPlay").click(n.play),toggle:this.list.find(".btnToggle").click(n.toggle),close:this.list.find(".btnClose").click(n.close)}),0<s.index||s.loop?l.prev.removeClass("btnDisabled"):l.prev.addClass("btnDisabled"),s.loop||s.index<s.group.length-1?(l.next.removeClass("btnDisabled"),l.play.removeClass("btnDisabled")):(l.next.addClass("btnDisabled"),l.play.addClass("btnDisabled")),this.buttons=l,this.onUpdate(t,s)},onUpdate:function(t,s){var l;this.buttons&&(l=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),s.canShrink?l.addClass("btnToggleOn"):s.canExpand||l.addClass("btnDisabled"))},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}})(jQuery);