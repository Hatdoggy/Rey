import React,{useEffect} from 'react';
import data from './webProj.js'
import './fontawesome'
import des from './Cloud.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive';

const WebPort = ()=>{

	const redirect = (url)=>{
		window.location.href = url;
	}

	const mobile = useMediaQuery({
    	query: '(max-width: 800px)'
  	})

  	const disp = (event)=>{
  		let src = event.target.src;
  		let name = event.target.name;
  		let target = document.querySelector('#'+name);

  		target.classList.toggle('fade-1');
  		target.src = src;
  		setTimeout(()=>target.classList.toggle('fade-1'), 1000)
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

	return(
		<section id="webPort" className={mobile?"fade flex flx-col p-20 mid ":"fade ml-10 mr-10 flx-col h-per p-20 mid port mb-2"}>
			 
			{data.map((cur,ndx)=>(	
				<div className={ndx===1?"web-des flex mt-5 flx-rev over-hide":"web-des flex mt-5 over-hide"} key={ndx}>
					<img src={cur.src} alt={cur.title} className="web-img img-shdw" id={cur.id}/>
					<div className={mobile?"mt-5 flex flx-col mr-0":"ml-5 flex flx-col over-hide"}>
						<h4 className={ndx===1?"mont bold mt-2 txt-r title":"mont bold mt-2 title"}>{cur.title}</h4>
						<p className={ndx===1?"lato mt-2 txt-r":"lato mt-2"}>{cur.info}</p>
						<div className={mobile?"mt-5 flex al-flex jc-flex":"mt-2 flex"}>
							{cur.tech.map((tech,index)=>
								(
								 	<FontAwesomeIcon icon={["fab", tech]} id={tech} key={index} className="tech"/>
								))}
						</div>
						<div className="flex mt-5 h-cus over-hide flow-x-scr thmb w-100">
							{cur.view.map((src,ndx)=>(
								<div className="fit ml-2" key={ndx}>
									<img src={src} alt={ndx} className="img-shdw ml-2 h-per cursor" name={cur.id} onClick={disp}/>
								</div>
							))}
						</div>
						<p onClick={()=>redirect(cur.site)} className="view cursor p-10 btn-grd al-ce mt-2 br-15 w-50 trans-1 lato bold">View Project</p>
					</div>
				</div>
			))}
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
				<h4 className="al-ce mont bold btn-grd p-10 clr-wht">Sample</h4>
				<p className={mobile?"al-ce lato w-100 mt-5":"al-ce lato w-60 mt-2"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolorem ut tenetur quasi rem, doloribus suscipit, inventore atque quaerat illum magnam repellat qui quidem commodi doloremque reiciendis harum, asperiores! Ullam.</p>

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
