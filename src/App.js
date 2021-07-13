import React,{useState,useEffect} from 'react';
import Loading from './Loading.js'
import { useMediaQuery } from 'react-responsive';
import {Choice,Main,Contacts,Skills,Navi,NavCont} from './Components.js';
import load from './func.js'; 
import des,{Circ,Background,CircBg,Modal} from './Cloud.js';
import WebPort,{DesPort} from './Portfolio.js';


const App = ()=>{

	const [fin,setFin] = useState(false);
	const [nav,dispNav] = useState(false);
	const [modal,dispModal] = useState({
		disp:false,
		ndx:0,
		obj:[]
	})

	const [skills,setSkill] = useState({
		main:false,
		des:false,
		svg:true
	})

	const [projChoice,setChoice] = useState({
		graph:false,
		web:false
	})

	const updFin = (val)=>{
		setFin(val)
	}

	useEffect(()=>{

		let foot = document.querySelector('footer');
		
		if(!fin){
			let parent  = document.querySelector("#border").children;
			let trgt = document.querySelectorAll(".change");
			let arr = [];
			let ndx = 0 ;
			for (var i = 0 ; i<parent.length; i++) {
				arr.push(parent[i]);
			}
			
			let body = document.querySelector("body");
			body.classList.add("loading-screen");
			load(ndx,arr,trgt,body,updFin);
		}

	})	

	const chosen = (val,id)=>{
		setChoice({
			graph:false,
			web:false,
			[val]:true
		})

		let scroll = document.querySelector('html');
		setTimeout(()=>{
			let targ = document.querySelector(`#${id}`);
			scroll.scrollTop = targ.offsetTop;
		},500);
	}

	const type = (val)=>{
		
		setSkill({
			main:false,
			other:false,
			[val]:true
		})

	}

	const imgClick = (disp,ndx,type)=>{

	let arr = (typeof type !="undefined"&&des.filter((elem)=>elem.id === type));
		console.log(disp)

	if(disp){	
		dispModal({
			disp:true,
			ndx:[ndx],
			obj:(typeof type !="undefined"?[...arr]:[])
		})
		console.log("You went here")
	}else{

		dispModal({
			disp:false,
			ndx:0,
			obj:[]
		})

		}

	}


  return(

  	fin?
  	<main className="pos-rel flex flx-col">
  	  <Circ pos="top"/>
  	  {nav&&<NavCont disp={dispNav}/>}
  		<CircBg pos="circTop"/>
  		<CircBg pos="circMid"/>
  	  	<div className="flex pos-rel h-100 mr-5 ml-5 flex flx-col br-50 fade-1 trans" id="borders">
  				<section className="h-100">
  					<Navi disp={dispNav}/>
  					<Main skills={skills} type={type}/>
  					<Skills/>
  					<Choice choose={chosen}/>
  						{projChoice.web&&<WebPort/>}
  						{projChoice.graph&&<DesPort set={imgClick}/>}
  					<Contacts/>
  				</section>

  			</div>	
  		<CircBg pos="circBot"/>
  		<Circ pos="bot"/>
  		<Background pos="bot"/>
  		{modal.disp&&<Modal ndx={modal.ndx} data={modal.obj.length !==0? modal.obj:des} set={imgClick}/>}
  	</main>	
    :
    <Loading/>

    )
};

export default App;