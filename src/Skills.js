import React,{useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

const SkillDesc = ()=>{
	return(
			<div className="flex flx-col h-30 jc-flx-e p-20 fade">
				<h4 className="mont bold">About Me</h4> 
				<p className="lato mt-2">I am a Web Developer and a Graphic Designer with experiences in using HTML, CSS, Bootstrap, Javascript, and React for development. And experiences in using Figma, Photoshop, and Illustrator for Graphic design.</p>
			</div>
		);
}

export default SkillDesc;

const gen = (val)=>{
   return Math.floor(Math.random()*val);
};

const ident = (mob)=>{
	return mob?150:300;
}

export const WebSkl = (props)=>{

	const mobile = useMediaQuery({
     query: '(max-width: 800px)'
   })

	let val = ident(mobile);
	useEffect(()=>{
		let image = document.querySelectorAll(".webS");
		image.forEach(elem=>elem.style.opacity = '1');

		setInterval(()=>{
				image[0].style.top = gen(val) + 'px';
    			image[0].style.right = gen(val) + 'px';
    			image[1].style.top = gen(val) + 'px';
    			image[1].style.left = gen(val) + 'px';
				image[2].style.top = gen(val) + 'px';
    			image[2].style.right = gen(val) + 'px';
    			image[3].style.top = gen(val) + 'px';
    			image[3].style.left = gen(val) + 'px';	
       			image[4].style.top = gen(val) + 'px';
    			image[4].style.left = gen(val) + 'px';

		}, 1500);
	});

	return(	
		<div className="h-50 pos-rel over-hide fade w-100 skillCont">
			<div>
				<img src="./images/css.svg" className="skill webS trans-1 pos-abs skill-1" alt="css"/>
				<img src="./images/html-5.svg" className="skill webS trans-1 pos-abs skill-2" alt="html"/>	
				<img src="./images/react.svg" className="skill webS trans-1 pos-abs skill-3" alt="react"/>
				<img src="./images/javascript.svg" className="skill webS trans-1 pos-abs skill-4" alt="js"/>	
				<img src="./images/bootstrap.svg" className="skill webS trans-1 pos-abs skill-5" alt="figma"/>
			</div>

		</div>			
	);
}

export const DesSkl = ()=>{

	const mobile = useMediaQuery({
     query: '(max-width: 800px)'
   })

	let val = ident(mobile);
	useEffect(()=>{
		let image = document.querySelectorAll(".desS");
		image.forEach(elem=>elem.style.opacity = '1');
		setInterval(()=>{
				image[0].style.top = gen(val) + 'px';
    			image[0].style.right = gen(val) + 'px';
    			image[1].style.top = gen(val) + 'px';
    			image[1].style.left = gen(val) + 'px';
				image[2].style.top = gen(val) + 'px';
    			image[2].style.right = gen(val) + 'px';
		}, 1500);
	});

	return(
		<div className="h-50 pos-rel over-hide fade w-100 skillCont">
			<img src="./images/illustrator.svg" className="skill desS trans-1 pos-abs skill-1" alt="illustrator"/>
			<img src="./images/photoshop.svg" className="skill desS trans-1 pos-abs skill-2" alt="photoshop"/>	
			<img src="./images/figma.svg" className="skill desS trans-1 pos-abs skill-3" alt="figma"/>
		</div>
	)
}