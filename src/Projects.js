import React,{useState,useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = (prop)=>{

	return(
		<div className="flex flx-col h-30 jc-flx-e p-20 fade_5">
			<h4 className="mont bold">Projects</h4>
			<p className="lato-r mt-2">Explore my projects on Web development and Graphic design. These projects contain my knowledge and application of the different topics related to both Web development and Graphic design.</p>
		</div>
		);
}

export default Projects

export const ProjBtn = (props)=>{

	const mobile = useMediaQuery({
    	query: '(max-width: 800px)'
  	})

  	const [info,showInfo] = useState({
  		web:false,
  		des:false
  	});

  	useEffect(()=>{
  		let par = document.querySelectorAll("#prjBtn p");
  		par.forEach((elem)=>{
  		 	mobile?elem.classList.add('w-80'):elem.classList.add('w-100');
  		})
  	})

  	const show = (val)=>{
  			
  		if(val === "exit"){
   			showInfo({
   				web:false,
  				des:false,		
  			}) 			
  		}else{
  			showInfo({
   				web:false,
  				des:false,
  				[val]:true			
  			})  			
  		}
  	}

	return(
	<div id="prjBtn" className={mobile?"prjBtn fade_5 flex flx-col al-flex jc-flex w-100 bg-15 mt-5 trans":"prjBtn fade_5 flex flx-col al-flex al-ce w-100 h-70"} onMouseLeave={()=>show("exit")}>
		<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("web")} onMouseOver={()=>show("web","show")}>Web Development<FontAwesomeIcon className="pos-abs arw-r icont" icon={["far","arrow-alt-circle-down"]}/></p>
		{info.web&&<p className="lato p-20 fadeInDown">My web development projects showing my knowledge on the concepts of development and web design. Shows my skills in Figma, HTML, CSS ,JavaScript (React JS), and JQuery</p>}
		<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("des")} onMouseOver={()=>show("des")}>Graphic Design<FontAwesomeIcon className="pos-abs arw-r icont" icon={["far","arrow-alt-circle-down"]}/></p>
		{info.des&&<p className="lato p-20 fadeInDown">Graphic design projects and past works showing my knowledge on Photoshop, Illustrator, and design</p>}	
	</div>
	);
}