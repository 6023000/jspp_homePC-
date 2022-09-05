function getTarget (ev) {
	const e = ev || window.event;
	return e.target || e.srcElement;
}

function getEventType (ev) {
	const e = ev || window.event;
	return e.type;
}

function trimSpace (str) {
	return str.replace(/\s+/g, '');
}

function tplReplace (template, replaceObject) {
	return template().replace(/{{(.*?)}}/g, (node, key) => {
		return replaceObject[key];
	});
}

function filterData (data, id) {
	if (id === 0) {
		return data;
	}

	return data.filter((item, index) => {
    return item.field === id;
	});
}

export {
	getTarget,
	getEventType,
	trimSpace,
	tplReplace,
	filterData 
}