import { Event } from '/vendor/infrajs/event/Event.js'

let Infratag = {}
Infratag.counter = 0
Infratag.childs = {}
let ws = new WeakSet()
Event.handler('Layer.onshow', async (layer) => {
	if (!layer.div) return
	let div = document.getElementById(layer.div)
	let blocks = div.querySelectorAll('[data-infra]')
	blocks.forEach(block => {
		if (ws.has(block)) return
		ws.add(block)

		if (!block.id) {
			Infratag.counter++;
			block.id = 'infratag' + Infratag.counter;
		}
		if (!Infratag.childs[block.id]) {
			let child = {};
			for (name in block.dataset) child[name] = block.dataset[name]
			child.div = block.id;
			Infratag.childs[block.id] = child;
		} else {
			let child = Infratag.childs[block.id];
		}
		child.showed = false;
		Controller.check(child);
	});
});

export {Infratag}