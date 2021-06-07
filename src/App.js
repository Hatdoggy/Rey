import React,{useState,useEffect} from 'react';
import Side,{Header,Nav,Footer} from './SideNav.js'
import Main,{Mob_main} from './Content.js'
import Portfolio, {DesPort} from './Portfolio.js'
import Loading from './Loading.js'
import des,{Background,Circ,Modal}from './Cloud'
import { useMediaQuery } from 'react-responsive';

const App = ()=>{

	const [fin,setFin] = useState(false);
	const [main,setMain] = useState(true);
	const [menu,setMenu] = useState(false);
  const mobile = useMediaQuery({
     query: '(max-width: 800px)'
   })
  const [curPage,setPage] = useState("");

	const [type,setType] = useState({
		main:true,
		other:false
	});

	const [proj,setProj] = useState({
		web:false,
		des:false,
		clicked:false
	});  	

	const project = async (target)=>{

		setProj({
			web:false,
			des:false,
			clicked:true,			
			[target]:true
		})

		if(mobile){
			document.querySelector("#main-top").classList.remove('over-hide');
		}
	};

	const res = (val)=>{
		setProj({
			clicked:false
		});

		setType({
			main:true,
			other:false
		})

		let icons = document.querySelector("#greet-icon");
		if(!mobile){
			if(val === 'Contact'){
				icons.classList.add('port');
			}else{
				icons.classList.remove('port');
			}
		}
	};

	const test = (val,arr,trgt,body)=>{

		if(typeof arr != "undefined"){

			setTimeout(()=>{
			arr[val].style.strokeOpacity =1;
			val++;
			if(val<arr.length){
				test(val,arr,trgt,body);
			}else{
				trgt.forEach( function(elem) {
					elem.style.fill = "white";
				});
				arr.forEach( function(elem) {
					elem.style.stroke = "white";
				});
				setFin(true);
				body.classList.remove("loading-screen");
			}
			},500);
		}
	}	

	const [head,setHead] = useState(false);

	const scroll = ()=>{
		let time;
		let target = document.querySelector('html').scrollTop;
		target >= 716?setHead(true):setHead(false);	
	}

	useEffect(()=>{
		document.addEventListener('scroll',scroll);
	})

	useEffect(()=>{
		let foot = document.querySelector('footer');
		console.log(foot)
		// (window.location.href === "http://localhost:3000/#/cont")?foot.classList.add('port'):foot.classList.remove('port')
		
		if(!fin){
			let parent  = document.querySelector("#border").children;
			let trgt = document.querySelectorAll(".change");
			let arr = [];
			let x = 0 ;
			for (var i = 0 ; i<parent.length; i++) {
				arr.push(parent[i]);
			}
			
			let body = document.querySelector("body");
			body.classList.add("loading-screen");

			test(x,arr,trgt,body);			
		}
		if(mobile)document.querySelector("#background").style.display = 'none'

	})	

	const ret = (val)=>{

		window.scrollTo({
			top:0,
			behavior:'smooth'
		})

		setTimeout(()=>{
			res();
		},1000);

		if(mobile){

			let foot = document.querySelector('footer div');

				if(foot){
					val === "Contact"?foot.classList.add('port'):foot.classList.remove('port')
				}
			setPage(val);
			setMenu(false);

		}
		else{
			let icons = document.querySelector("#greet-icon");
			(val === "Contact")?icons.style.display = 'none!important':icons.style.display = 'inherit!important';
		}

	}

/*Modal functions*/

const [modal,dispModal] = useState({
	disp:false,
	ndx:0,
	obj:[]
})

const imgClick = (disp,ndx,type)=>{

	let arr = (typeof type !="undefined"&&des.filter((elem)=>elem.id === type));
		console.log(arr)

	if(disp ){	
		dispModal({

			disp:true,
			ndx:[ndx],
			obj:(typeof type !="undefined"?[...arr]:[])
		})

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
  		mobile?
  		<div className="flex flx-col h-100 pos-rel flow-y-scr hide-x">

  			<img className="bg-2 pos-abs back bck-img" src="./images/BG.png" alt="puzzle" loading="lazy"/>
  			<Circ pos="top"/>
  			<Header res={res} main={main} ret={ret} menu={setMenu} cur={curPage}/>

  			<Mob_main type={type} ret={ret} proj={project} click={proj.clicked} cur={proj.des} setType={setType} set={imgClick} web={proj.web} des={proj.des}/>

      	<Circ pos="bot"/>

  	 		{modal.disp&&<Modal ndx={modal.ndx} data={modal.obj.length !==0? modal.obj:des} set={imgClick}/>}
  	 		{menu&&<Nav res={res} main={main} ret={ret} menu={setMenu}/>}
  	 		<img className="bg-1 pos-abs back bck-img" src="./images/BG.png" alt="puzzle" loading="lazy"/>
  	 		<Footer res={res} main={main} ret={ret} menu={setMenu} des={proj.des} web={proj.web} set={imgClick}/>
  	 	</div>
  		:<div className="flex flx-col">

  		<Circ pos="top"/>
  		{head&&<Header res={res} main={main} ret={ret}/>}
  		<Background pos="top"/>

     	<div className="mr-10 ml-10 flex" id="main-top">
      		<Main proj={project} click={proj.clicked} cur={proj.des} setType={setType} type={type}/>
      		<Side res={res} main={main}/>
     	</div>

      {proj.web&&
      	<div>
					<Portfolio/>
      	</div>
      }
      {proj.des&&<DesPort set={imgClick}/>}
      <Circ pos="bot"/>
  		<Background pos="bot"/>

  	 {modal.disp&&<Modal ndx={modal.ndx} data={modal.obj.length !==0? modal.obj:des} set={imgClick}/>}
    </div>
    :
    <Loading/>

    )
};

export default App;