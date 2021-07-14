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
    	query: '(max-width: 480px)'
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

  	const transfer = (url)=>{
		window.location.href = url;
	}

	return(
			<div className="flex jc-flex al-flex h-100 pos-rel mt-5" id="websites">
				<div className="flex flx-wrp h-vh" id="web-scrll">
					{data.map((elem,ndx)=>(
					<div className={`flex al-flex jc-flex flx-col flx-shr mt-5 w-50 fadeInDown`} key={ndx}>
						<div className="p-20 cust br-15 bg-toL flex jc-flex al-flex popShdw webItem">
							<img src={elem.src} alt={elem.alt} className="w-80 h-per img-shdw"/>
						</div>
						<p className="glassBtn popShdw clr-wht al-ce lato p-10 mt-2 w-50 cursor hov bold pos-rel webBtn" onClick={()=>showInfo(elem)}>
						View {elem.title}
						</p>
					</div>
					))}
				</div>

				{webDesc.display&&<Web webDesc={webDesc} disp={disp} reset={reset} transfer={transfer} mobile={mobile}/>}			
			</div>	
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
				newNode.className = "bet filt fit";
				newNode.style.webkitAnimation = `fadeInDown ${.5+(ndx/10)}s ease-in-out`;
    			newNode.style.animation = 'fadeInDown ${.5+ndx}s ease-in-out';
    			newNode.onclick = ()=>prop.set(true,ndx,elem.id);
				parent.appendChild(newNode);
			});
		}
		
	}

	return(
		<section id="desPort" className="fade ml-10 mr-10 h-100 flx-col p-20 mid over-hide flow-y-scr hide-bar popShdw trans fadeInDown" id="design">
			<div className="flex flx-col al-flex jc-flex w-100 h-auto" id="des-main">
				<div className="flex jc-flex w-100" id="menuFilt">
					<div className="flex w-100 jc-flex mt-2 flx-col filter bg-toR shadow glass p-20" onClick={()=>filter("shirt")}>
						<FontAwesomeIcon className="tech1 clr-wht" icon="tshirt" onClick={()=>filter("shirt")}/>
						<p className="al-ce ml-2 mt-2 pos-rel mont clr-wht bold" onClick={()=>filter("shirt")}>Shirts</p>
					</div>	
					<div className="flex w-100 jc-flex mt-2 flx-col filter bg-toR shadow glass p-20" onClick={()=>filter("mug")}>
						<FontAwesomeIcon className="tech1 clr-wht" icon="coffee" onClick={()=>filter("mug")}/>
						<p className="al-ce ml-2 mt-2 pos-rel mont clr-wht bold" onClick={()=>filter("mug")}>Mugs</p>
					</div>	
					<div className="flex w-100 jc-flex mt-2 flx-col filter bg-toR shadow glass p-20" onClick={()=>filter("print")}>
						<FontAwesomeIcon className="tech1 clr-wht" icon="book-open" onClick={()=>filter("print")}/>
						<p className="al-ce ml-2 mt-2 pos-rel mont clr-wht bold" onClick={()=>filter("print")}>Prints</p>
					</div>					
					<div className="flex w-100 jc-flex mt-2 flx-col filter bg-toR shadow glass p-20" onClick={()=>filter("illus")}>
						<FontAwesomeIcon className="tech1 clr-wht" icon="pencil-alt" onClick={()=>filter("illus")}/>
						<p className="al-ce ml-2 mt-2 pos-rel mont clr-wht bold" onClick={()=>filter("illus")}>Illustrations</p>
					</div>
					<div className="flex w-100 jc-flex mt-2 flx-col filter bg-toR shadow glass p-20" onClick={()=>filter("reset")}>
						<FontAwesomeIcon className="tech1 clr-wht" icon="redo-alt" onClick={()=>filter("reset")}/>
						<p className="al-ce ml-2 mt-2 pos-rel mont clr-wht bold" onClick={()=>filter("reset")}>Reset</p>
					</div>
				</div>

			</div>
			<div className="grid des-grid p-20 m-2">
				{des.map( (elem, ndx) => (
					<img src={elem.link} alt={elem.name} className={elem.type} loading="lazy" key={ndx}  onClick={()=>prop.set(true,ndx)}/>
				))}
			</div>			
		</section>
		);
}
