import React,{useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

const SkillDesc = ()=>{
	return(
			<div className="flex flx-col h-30 jc-flx-e p-20 fade">
				<h4 className="mont bold">About Me</h4>
				<p className="lato mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae et quis deleniti obcaecati maiores, beatae consequuntur magnam quasi itaque at iste deserunt quaerat expedita quisquam dolore harum adipisci. Dolorem?</p>
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
		<div className="h-100 pos-rel over-hide fade">
			<img src="../images/css.svg" className="skill trans-1 pos-abs skill-1" alt="css"/>
			<img src="../images/html-5.svg" className="skill trans-1 pos-abs skill-2" alt="html"/>	
			<img src="../images/react.svg" className="skill trans-1 pos-abs skill-3" alt="react"/>
			<img src="../images/javascript.svg" className="skill trans-1 pos-abs skill-4" alt="js"/>
			<img src="../images/illustrator.svg" className="skill trans-1 pos-abs skill-5" alt="illustrator"/>
			<img src="../images/photoshop.svg" className="skill trans-1 pos-abs skill-5" alt="photoshop"/>	
			<img src="../images/figma.svg" className="skill trans-1 pos-abs skill-5" alt="figma"/>
		</div>
		:		
		<div className="h-50 pos-rel over-hide fade">

			{(props.skill.main)?<div>
				<img src="../images/css.svg" className="skill trans-1 pos-abs skill-1" alt="css"/>
				<img src="../images/html-5.svg" className="skill trans-1 pos-abs skill-2" alt="html"/>	
				<img src="../images/react.svg" className="skill trans-1 pos-abs skill-3" alt="react"/>
				<img src="../images/javascript.svg" className="skill trans-1 pos-abs skill-4" alt="js"/>	
			</div>
			:	
			<div>
				<img src="../images/illustrator.svg" className="skill trans-1 pos-abs skill-1" alt="illustrator"/>
				<img src="../images/photoshop.svg" className="skill trans-1 pos-abs skill-2" alt="photoshop"/>	
				<img src="../images/figma.svg" className="skill trans-1 pos-abs skill-3" alt="figma"/>
			</div>}

		</div>			
	);
}