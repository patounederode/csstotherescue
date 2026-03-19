const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
	const rangeName = range.name;
	const rangeValue = range.value;
	document.documentElement.style.setProperty("--"+rangeName, rangeValue);
}

ranges.forEach(range => {
	updateRange(range);
	
	range.oninput = () => {
		updateRange(range)
	};
});



// Code uit workshop range style query, toegepast
// https://codepen.io/pderode/pen/vEXyWZy