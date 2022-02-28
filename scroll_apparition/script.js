const slidingNewsLetters = document.querySelector('.slide-in')

window.addEventListener('scroll',()=>{
	const {scrollTop,clientHeight} = document.documentElement;
	const topElementToTopViewport = slidingNewsLetters.getBoundingClientRect().top;

	if(scrollTop > (scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.5){
		slidingNewsLetters.classList.add('active')
	}
})