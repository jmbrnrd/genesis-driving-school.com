/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon-essential\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-menu' : '&#x21;',
			'icon-location' : '&#x23;',
			'icon-envelop' : '&#x26;',
			'icon-search' : '&#x2b;',
			'icon-google-plus' : '&#x3c;',
			'icon-twitter' : '&#x3d;',
			'icon-facebook' : '&#x3e;',
			'icon-arrow-right' : '&#x48;',
			'icon-mobile' : '&#x24;',
			'icon-clock' : '&#x25;',
			'icon-quotes-left' : '&#x28;',
			'icon-gift' : '&#x29;',
			'icon-calendar' : '&#x2d;',
			'icon-share' : '&#x2c;',
			'icon-new-tab' : '&#x2e;',
			'icon-plus' : '&#x22;',
			'icon-target' : '&#x2a;',
			'icon-twitter-2' : '&#x2f;',
			'icon-home' : '&#x27;',
			'icon-gds' : '&#x31;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};