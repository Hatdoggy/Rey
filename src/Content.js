import React,{useState,useEffect,lazy,Suspense} from 'react';
import SkillDesc,{Skills} from './Skills.js'
import Projects,{ProjBtn} from './Projects.js'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as Scroll} from 'react-scroll';
import ContHead,{Contact} from './Contact';
import Loading from './Loading';
import Portfolio,{DesPort} from './Portfolio'

const Main = (prop)=>{

	const res = ()=>{
		prop.setType({
			main:true,
			other:false
		});
	}

	useEffect(()=>{
		let target = document.querySelector("#background");
		target.style.opacity = '1';
	});

	const line = ()=>{
		// let target = document.querySelector("#line span");
		let show = document.querySelector("#webPort");


		show.style.display = "flex";


	}
	const webShow = ()=>{
		let show = document.querySelector("#desPort");
		show.style.display = "flex";
	}

	const project = async (val)=>{
		setTimeout(()=>{
			prop.proj(val);
			let target = document.querySelector('.arw');
			target.style.opacity = "1";
		},10);
	}

	const clicked = (val)=>{	

		let main = document.querySelector("#main");
		let other = document.querySelector("#other");

		prop.setType({
			main:false,
			other:false,
			[val]:true
		})	

		if(val === "other"){
			document.querySelector(".btn").classList.toggle("right");
			main.classList.remove("white");
			main.classList.add("dark");
			other.classList.add("white");
			other.classList.remove("dark");
		}
		else{
			document.querySelector(".btn").classList.remove("right");
			main.classList.add("white");
			main.classList.remove("dark");
			other.classList.remove("white");
			other.classList.add("dark");
		}
	}

	return(
		<main className="flex w-80 h-100">

			<div className="greet flex flx-col w-50 jc-flex ai-ce">
				<h1 className="mont bold w-75">Hi I am Rey</h1>
				<div className="w-75 mt-2">
					<FontAwesomeIcon icon={["fab","github"]} className="tech" />
					<FontAwesomeIcon icon={["fab","linkedin"]} className="tech"/>
					<FontAwesomeIcon icon={["fab","google"]} className="tech"/>
				</div>
			</div>
			<section className="pos-rel jc-ce fadeInDown flex flx-col w-50 ">
				<Router>
					<Switch>

					<Route exact path="/">
						<SkillDesc/>
							<div className="btn flex fade_5 trans mt-2 mb-2 p-10 br-15 btn-grd">
								<h4 onClick={()=>clicked("main")} className="white lato w-50 al-ce cursor" id="main"> Main Dev Skills</h4>
								<h4 onClick={()=>clicked("other")} className="dark lato w-50 al-ce cursor" id="other"> Other Dev Skills</h4>
							</div>
						<Skills skill={prop.type}/>
					</Route>

					<Route path="/proj">
						<Projects reset={res}/>
						<ProjBtn proj={project}/>
					</Route>

					<Route path="/cont">
						<ContHead reset={res}/>
						<Contact/>
					</Route>}

					</Switch>	

				</Router>

				{prop.click&&	<Scroll to={prop.cur?"desPort":"webPort"} spy={true} id="arrow" smooth={true}><FontAwesomeIcon icon={["far","arrow-alt-circle-down"]} className={prop.cur?"arw arw-des cursor vio":"arw arw-web cursor vio"} onClick={()=>prop.cur?webShow():line()}/></Scroll>}

			</section>

		</main>
		);
}

export default Main;

export const Mob_main = (prop)=>{

	const res = ()=>{
		prop.setType({
			main:true,
			other:false
		});
	}

	return(
		<Router>

			<Route exact path="/">
				<div className="mr-10 ml-10 flex jc-ce al-ce h-per flx-col jc-flex al-flex pos-rel fade_5" id="main-top">
      	 <h1 className="lato bold head pos-rel">Hi I am Rey</h1>
      	 <p className="w-80 mt-5 txt-jst lato-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae et quis deleniti obcaecati maiores</p>
     		 <Link className="mt-5 btn-grd w-75 lato bold al-ce p-10 clr-wht br-15 cursor" onClick={()=>prop.ret("Skills")} to='/skills'>View Skills</Link>
    		</div>
			</Route>

			<Route path="/skills">
				<Skills skill={prop.type}/>
			</Route>

			<Route path="/proj">
				<div className="mr-10 ml-10 flex jc-ce al-ce h-100 over-hide flx-col jc-flex al-flex trans-ht fade_5" id="main-top">

					<div className="flex jc-ce al-ce h-100 flx-col jc-flex al-flex w-100 trans-ht">
							<h1 className="lato bold head pos-rel trans">Projects</h1>
      	 			<p className="w-80 mt-5 txt-jst lato-r trans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae et quis deleniti obcaecati maiores</p>
     		 			<ProjBtn proj={prop.proj} />
					</div>

     		 
     		 </div>
     		{prop.web&&<Portfolio/>}

     		{prop.des&&<DesPort set={prop.set}/>}

			</Route>

			<Route path="/cont">

				<div className="mr-10 ml-10 flex jc-ce al-ce h-per flx-col jc-flex al-flex pos-rel fade_5" id="main-top">
      	 	<h1 className="lato bold head pos-rel">Contact Me</h1>
      	 	<p className="w-80 mt-5 txt-jst lato-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae et quis deleniti obcaecati maiores</p>
     		</div>
     		<Contact/>
     	</Route>

		</Router>
	);
}