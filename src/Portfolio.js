import React,{useEffect} from 'react';
import data,{Web,WebMob} from './webProj.js'
import './fontawesome'
import des from './Cloud.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive';
import {useState} from 'react'

const WebPort = ()=>{

	let curNdx = 0;
	const [webDesc,show] = useState({
		display:false,
		title:"",
		info:"",
		src:"",
		site:"",
		class:"",
		id:"",
		code:"",
		ndx:0
	});

	const redirect = (url)=>{
		window.location.href = url;
	}

	const mobile = useMediaQuery({//Phone
    	query: '(max-width: 800px)'
  	})

  	const land = useMediaQuery({//Ipad
    	query: '(min-width : 481px) and (max-device-width : 800px) and (orientation : landscape)'
  	})

  	const disp = (event)=>{
  		let src = event.target.src;
  		let name = event.target.name;
  		let target = document.querySelector('#'+name);
  		console.log(target);
  		target.classList.toggle('fade-1');
  		target.src = src;
  		setTimeout(()=>target.classList.toggle('fade-1'), 1000)
  	}	

  	const showInfo = (info)=>{
  		show({
  			display:true,
			title:[info.title],
			info:[info.info],
			src:[info.src],
			site:[info.site],
			class:[info.class],
			view:[...info.view],
			id:[info.id],
			code:[info.code],
			ndx:[info.ndx]
  		})
  	}

  	const reset = ()=>{

   		show({
			display:false,
			title:"",
			info:"",
			src:"",
			site:"",
			class:"",
			id:"",
			code:"",
			ndx:0
  		}) 		
  		
  	}

  	useEffect(()=>{
  		let scrll = document.querySelectorAll(".thmb");

  		scrll.forEach((elem)=>{
  			elem.addEventListener("wheel",(event)=>{
        		let y = event.deltaY;
        		event.preventDefault();
        		elem.scrollLeft += y*5;
      		});
  		})

  		if(mobile){
  			let target = document.querySelectorAll('.web-des');
  			target.forEach((elem)=>{
  				elem.style.marginTop = "5%!important";
  			},1500)
  		}
  	})

  	const arw = (dir)=>{
  		let scrll = document.querySelector("#web-scrll");
  		let where = document.querySelectorAll('.scr-itm');
  		if(dir === "right"&&curNdx < 2){
  			curNdx++;
  		}else if(dir === "left" && curNdx >0){
  			curNdx--;
  		}
  		scrll.scrollLeft = where[curNdx].offsetLeft;
  	}

  	const transfer = (url)=>{
		window.location.href = url;
	}

	return(
		<section id="webPort" className={mobile?"fade flex flx-col p-20 mid ":"fade ml-10 mr-10 flx-col h-per p-20 mid port mb-2"}>
			 <div className={mobile?"flex flx-col al-ce w-100 h-auto":"flex flx-col al-ce w-100 h-auto"} id="des-main">
				<h4 className="al-ce mont bold btn-grd p-10 clr-wht">Web Development Projects</h4>
				<p className={mobile?"al-ce lato-r w-100 mt-5":"al-ce lato-r w-60 mt-2"}>The following are the projects I made the past few months studying the fundamentals of web development these show my knowledge on HTML, CSS, Javascript, and React JS</p>
			</div>
			
		{mobile?
			<WebMob land={land} redirect={redirect} disp={disp}/>
			:
			<div className="flex pos-rel mt-5">
				<div className="flex scr-man flow-x-scr hide-bar" id="web-scrll">
					{data.map((elem,ndx)=>(
					<div className={`${elem.class} flex al-flex flx-col w-100 flx-shr scr-el scr-itm fadeInRight`} key={ndx}>
						<img src={elem.src} alt={elem.alt} className="w-80 h-per img-shdw"/>
						<p className="btn-grd clr-wht al-ce lato p-10 mt-2 w-50 cursor hov bold pos-rel" onClick={()=>showInfo(elem)}>
						View {elem.title}
						</p>
					</div>
					))}
				</div>
				<FontAwesomeIcon className="pos-abs clr-dark arw-l arw-sz cursor hov" icon={["far","arrow-alt-circle-left"]} onClick={()=>arw("left")}/>
				<FontAwesomeIcon className="pos-abs clr-dark arw-r arw-sz cursor hov" icon={["far","arrow-alt-circle-right"]} onClick={()=>arw("right")}/>

				{webDesc.display&&<Web webDesc={webDesc} disp={disp} reset={reset} transfer={transfer} mobile={mobile}/>}			
			</div>
		}

		</section>		
		);
}

export default WebPort;

export const DesPort = (prop)=>{

	const mobile = useMediaQuery({
    	query: '(max-width: 800px)'
    	
  	})

	const filter = (event)=>{

		let targets = document.querySelectorAll("."+event);
		let parent = document.querySelector(".grid");

		parent.innerHTML = "";

		if(event === "reset"){

			des.forEach((elem,ndx)=>{
				let newNode = document.createElement("img");
				newNode.src = elem.link;
				newNode.alt = elem.title;
				newNode.className = elem.type;
				newNode.style.webkitAnimation = `fadeInDown ${.5+(ndx/10)}s ease-in-out`;
    			newNode.style.animation = 'fadeInDown ${.5+ndx}s ease-in-out';
      			newNode.onclick = ()=>prop.set(true,ndx);
				parent.appendChild(newNode);
			});

		}else{
			let arr = des.filter((elem)=>elem.id === event);
			arr.forEach((elem,ndx)=>{
				let newNode = document.createElement("img");
				newNode.src = elem.link;
				newNode.alt = elem.title;
				newNode.className = "filt fit";
				newNode.style.webkitAnimation = `fadeInDown ${.5+(ndx/10)}s ease-in-out`;
    			newNode.style.animation = 'fadeInDown ${.5+ndx}s ease-in-out';
    			newNode.onclick = ()=>prop.set(true,ndx,elem.id);
				parent.appendChild(newNode);
			});
		}

		
	}

	return(
		<section id="desPort" className={mobile?"fade flx-col p-20 mid ":"fade ml-10 mr-10 h-100 flx-col p-20 mid port"}>
			<div className={mobile?"flex flx-col al-ce w-100 h-auto":"flex flx-col al-ce w-100 h-70"} id="des-main">
				<h4 className="al-ce mont bold btn-grd p-10 clr-wht">Graphic Design Projects</h4>
				<p className={mobile?"al-ce lato-r w-100 mt-5":"al-ce lato-r w-60 mt-2"}>These are my projects from my past jobs in graphic design, the software used in creating these designs are mostly Adobe Photoshop and Adobe Illustrator</p>

				{!mobile&&<div className="flex jc-flex mt-2 w-100">
					<div className="flex w-100 jc-flex mt-2 flx-col filter" onClick={()=>filter("shirt")}>
						<FontAwesomeIcon className="tech1" icon="tshirt" onClick={()=>filter("shirt")}/>
						<p className="al-ce ml-2 mt-2 pos-rel nav mont bold" onClick={()=>filter("shirt")}>Shirts</p>
					</div>	
					<div className="flex w-100 jc-flex mt-2 flx-col filter" onClick={()=>filter("mug")}>
						<FontAwesomeIcon className="tech1" icon="coffee" onClick={()=>filter("mug")}/>
						<p className="al-ce ml-2 mt-2 pos-rel nav mont bold" onClick={()=>filter("mug")}>Mugs</p>
					</div>	
					<div className="flex w-100 jc-flex mt-2 flx-col filter" onClick={()=>filter("print")}>
						<FontAwesomeIcon className="tech1" icon="book-open" onClick={()=>filter("print")}/>
						<p className="al-ce ml-2 mt-2 pos-rel nav mont bold" onClick={()=>filter("print")}>Prints</p>
					</div>					
					<div className="flex w-100 jc-flex mt-2 flx-col filter" onClick={()=>filter("illus")}>
						<FontAwesomeIcon className="tech1" icon="pencil-alt" onClick={()=>filter("illus")}/>
						<p className="al-ce ml-2 mt-2 pos-rel nav mont bold" onClick={()=>filter("illus")}>Illustrations</p>
					</div>
					<div className="flex w-100 jc-flex mt-2 flx-col filter" onClick={()=>filter("reset")}>
						<FontAwesomeIcon className="tech1" icon="redo-alt" onClick={()=>filter("reset")}/>
						<p className="al-ce ml-2 mt-2 pos-rel nav mont bold" onClick={()=>filter("reset")}>Reset</p>
					</div>
				</div>}

			</div>
			<div className={mobile?"grid des-grid mt-5":"grid des-grid"}>
				{des.map( (elem, ndx) => (
					<img src={elem.link} alt={elem.name} className={elem.type} loading="lazy" key={ndx}  onClick={()=>prop.set(true,ndx)}/>
				))}
			</div>			
		</section>
		);
}
