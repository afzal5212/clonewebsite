const slide = document.querySelectorAll(".slide")
var counter = 0;
//console.log(slides)
slide.forEach(
	(slide, index) => {
		slide.style.left = '${index * 100}%'
	}
	)