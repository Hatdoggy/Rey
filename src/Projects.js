import React,{useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

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

  	useEffect(()=>{
  		let par = document.querySelectorAll("#prjBtn p");
  		par.forEach((elem)=>{
  		 	mobile?elem.classList.add('w-80'):elem.classList.add('w-100');
  		})
  	})

	return(
	<div id="prjBtn" className={mobile?"prjBtn fade_5 flex flx-col al-flex jc-flex w-100 bg-15 mt-5 trans":"prjBtn fade_5 flex flx-col al-flex al-ce w-100 h-70"}>
		<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("web")} >Web Development</p>
		<p className="lato bold p-10 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor" onClick={()=>props.proj("des")} >Graphic Design</p>
	</div>
	);
}