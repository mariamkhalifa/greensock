(()=> {
	const box = document.querySelector('.box');

	// baisc structure of a TweenMax Tween;
	// TweenMax.to(el, time, {properties});
	// 
	TweenMax.to(box, 0.8, { x: 400, rotation: 180, scaleX: 1.5, scaleY: 1.75 });


})();