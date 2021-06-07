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

export const Skills = (props)=>{

	const mobile = useMediaQuery({
     query: '(max-width: 800px)'
   })

  	const gen = ()=>{
    	return Math.floor(Math.random()*300);
  	};

	useEffect(()=>{
		let image = document.querySelectorAll(".skill");
		image.forEach(elem=>elem.style.opacity = '1');

		setInterval(()=>{
			if(props.skill.main&&!mobile){
				image[0].style.top = gen() + 'px';
    			image[0].style.right = gen() + 'px';
    			image[1].style.top = gen() + 'px';
    			image[1].style.left = gen() + 'px';
				image[2].style.top = gen() + 'px';
    			image[2].style.right = gen() + 'px';
    			image[3].style.top = gen() + 'px';
    			image[3].style.left = gen() + 'px';	
       			image[4].style.top = gen() + 'px';
    			image[4].style.left = gen() + 'px';					
			}else if(mobile){
				image[0].style.top = gen() + 'px';
    			image[0].style.right = gen() + 'px';
    			image[1].style.top = gen() + 'px';
    			image[1].style.left = gen() + 'px';
				image[2].style.top = gen() + 'px';
    			image[2].style.right = gen() + 'px';
    			image[3].style.top = gen() + 'px';
    			image[3].style.left = gen() + 'px';
    			image[4].style.top = (gen()+75) + 'px';
    			image[4].style.right = (gen()+75) + 'px';
    			image[5].style.top = (gen()+75) + 'px';
    			image[5].style.left = (gen()+75) + 'px';
				image[6].style.top = (gen()+75) + 'px';
    			image[6].style.right = (gen()+75) + 'px';
    			image[7].style.top = (gen()+75) + 'px';
    			image[7].style.right = (gen()+75) + 'px';
			}else{
				image[0].style.top = gen() + 'px';
    			image[0].style.right = gen() + 'px';
    			image[1].style.top = gen() + 'px';
    			image[1].style.left = gen() + 'px';
				image[2].style.top = gen() + 'px';
    			image[2].style.right = gen() + 'px';
			}
		}, 1500);
	});

	return(
		mobile?
		<div className="h-per pos-rel flex flx-col over-hide fade">

			<div className="pos-rel flex jc-flex al-flex h-per w-100">
				<div className="flex flx-col jc-flex al-flex p-20 w-80 m-2 pos-abs fadeInDown front bg-blur">
					<h4 className="mont bold al-ce clr-wht btn-grd p-10">Skills</h4>
					<p className="lato-r al-ce mt-2 p-10">The following are what I use in creating projects in Graphic design and Web development</p>
				</div>

					<img src="./images/css.svg" className="skill trans-1 pos-abs skill-1" alt="css"/>
					<img src="./images/html-5.svg" className="skill trans-1 pos-abs skill-2" alt="html"/>	
					<img src="./images/react.svg" className="skill trans-1 pos-abs skill-3" alt="react"/>
					<img src="./images/javascript.svg" className="skill trans-1 pos-abs skill-4" alt="js"/>
					<img src="./images/illustrator.svg" className="skill trans-1 pos-abs skill-5" alt="illustrator"/>
					<img src="./images/photoshop.svg" className="skill trans-1 pos-abs skill-5" alt="photoshop"/>	
					<img src="./images/figma.svg" className="skill trans-1 pos-abs skill-5" alt="figma"/>
					<img src="./images/bootstrap.svg" className="skill trans-1 pos-abs skill-5" alt="figma"/>
			</div>
		</div>
		:		
		<div className="h-50 pos-rel over-hide fade">

			{(props.skill.main)?<div>
				<img src="./images/css.svg" className="skill trans-1 pos-abs skill-1" alt="css"/>
				<img src="./images/html-5.svg" className="skill trans-1 pos-abs skill-2" alt="html"/>	
				<img src="./images/react.svg" className="skill trans-1 pos-abs skill-3" alt="react"/>
				<img src="./images/javascript.svg" className="skill trans-1 pos-abs skill-4" alt="js"/>	
				<img src="./images/bootstrap.svg" className="skill trans-1 pos-abs skill-5" alt="figma"/>
			</div>
			:	
			<div>
				<img src="./images/illustrator.svg" className="skill trans-1 pos-abs skill-1" alt="illustrator"/>
				<img src="./images/photoshop.svg" className="skill trans-1 pos-abs skill-2" alt="photoshop"/>	
				<img src="./images/figma.svg" className="skill trans-1 pos-abs skill-3" alt="figma"/>
			</div>}

		</div>			
	);
}