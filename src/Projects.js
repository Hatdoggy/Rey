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

  	 const [accrd,showAccrd] = useState({
  		0:false,
  		1:false
  	});

  	useEffect(()=>{
  		let par = document.querySelectorAll("#prjBtn p");
  		par.forEach((elem)=>{
  		 	mobile?elem.classList.add('w-80'):elem.classList.add('w-100');
  		})
  	})

  	const show = (val,act,targ)=>{

  		let tar = document.querySelectorAll(".icont path");	

  		if(act === "show"){

  			showAccrd({
  				...accrd,
  				[targ]:true
  			})

  			showInfo({
   				web:false,
  				des:false,
  				[val]:true			
  			})

  		}else{

  			showAccrd({
  				...accrd,
  				[targ]:false
  			})	
   			showInfo({
   				web:false,
  				des:false,		
  			})
  		}

  		tar[targ].style.fill = accrd[targ]?"black":"#743ad5";
  		tar[targ].parentNode.style.transform = `rotate(${accrd[targ]?"0deg":"180deg"})`;
  	}

	return(
	<div id="prjBtn" className={mobile?"prjBtn fade_5 flex flx-col al-flex jc-flex w-100 bg-15 mt-5 trans":"prjBtn fade_5 flex flx-col al-flex al-ce w-100 h-70"}>
		
		<div className={`flex w-100 jc-flex al-flex`}>
			<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("web")}>Web Development</p>
			<FontAwesomeIcon className="clr-vio mt-2 ml-2 arw-r icont trans-1" onClick={()=>show("web",(accrd[0]?"hide":"show"),0)} icon={["far","arrow-alt-circle-down"]} id="arr-web"/>
		</div>
		{accrd[0]&&<p className="lato-r p-20 fadeInDown">My web development projects showing my knowledge on the concepts of development and web design. Shows my skills in Figma, HTML, CSS ,JavaScript (React JS), and JQuery</p>}
		
		<div className={`flex w-100 jc-flex al-flex`}>
			<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("des")}>Graphic Design</p>
			<FontAwesomeIcon className="clr-vio mt-2 ml-2 arw-r icont trans-1" onClick={()=>show("des",(accrd[1]?"hide":"show"),1)} icon={["far","arrow-alt-circle-down"]} id="arr-des"/>
		</div>
		{accrd[1]&&<p className="lato-r p-20 fadeInDown">Graphic design projects and past works showing my knowledge on Photoshop, Illustrator, and design</p>}
		
	
	</div>
	);
}