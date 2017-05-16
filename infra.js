(function(){
	if (!window.infra) window.infra = {};
	infra.infratag = {};
	infra.infratag.counter = 0;
	infra.infratag.childs = {};
	Event.handler('Layer.onshow', function (layer) {
		$(document.getElementById(layer.div)).find('[data-infra]').removeAttr('data-infra').each( function () {
			if (!this.id) {
				infra.infratag.counter++;
				this.id = 'infratag' + infra.infratag.counter;
			}
			if (!infra.infratag.childs[this.id]) {
				var child = $(this).data();
				child.div = this.id;
				//child.divparent=layer.div;
				infra.infratag.childs[this.id]=child;
			} else {
				var child = infra.infratag.childs[this.id];
			}
			child.showed = false;
			Controller.check(child);
		});
	});
})();
