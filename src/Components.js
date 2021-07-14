import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Docs,{WebSvg,DesSvg,Cont,Logo} from './Svgs.js';
import {WebSkl,DesSkl} from './Skills.js';
import ContHead,{Contact} from './Contact.js'
import { Link as Scroll} from 'react-scroll';

const GreetMain = (prop)=>{
	return(
		 <div className="greet flex flx-col w-50 jc-flex al-flx-e p-100 bg-toL br-50 popShdw sub">
			 <h1 className="mont bold w-100 al-r">Hi I am Rey</h1>
			 <p className="clr-wht mt-5 w-100 al-r lato-r">I am a Web Developer and a Graphic Designer with experiences in using HTML, CSS, Bootstrap, Javascript, and React for development. And experiences in using Figma, Photoshop, and Illustrator for Graphic design.</p>
		 </div>
	)	
}

export default GreetMain;

const Choice = (props)=>{
	return(
		<div className="w-auto flex jc-flex al-flex h-100 container" id="proj">
			<div className="flex h-80 mr-2 bg-toL br-50 jc-flex flx-col al-flex trans popShdw  glass w-50 p-20 sub" onClick={()=>props.choose('web','websites')}>
				<WebSvg/>
				<div className="flex jc-flex al-flex flx-col projects">
					<h4 className="clr-wht mont al-ce mt-2">Web Projects</h4>
					<p className="clr-wht lato-r al-ce mt-5 w-80">These are websites I have made that are built and displays my knowledge and skills in using HTML,CSS ,JavaScript, JQuery ,React and Node JS</p>
				</div>
			</div>
			<div className="flex h-80 ml-2 bg-toR br-50 jc-flex flx-col al-flex trans popShdw  glass w-50 p-20 sub" onClick={()=>props.choose('graph','design')}>
				<DesSvg/>
				<div className="flex jc-flex al-flex flx-col projects">
					<h4 className="clr-wht mont al-ce mt-2">Graphic Design Projects</h4>
					<p className="clr-wht lato-r al-ce mt-5 w-80">These are my projects from my past jobs in graphic design, the software used in creating these designs are mostly Adobe Photoshop and Adobe Illustrator</p>
				</div>
			</div>			
		</div>

	)
}

const Skills = (props)=>{
	return(
		<div className="w-auto flex jc-flex al-flex h-100 container" id="skills">
			<div className="flex h-80 mr-2 bg-toL br-50 jc-flex flx-col al-flex trans popShdw  w-50 p-20 sub">
				<WebSkl/>
				<div className="flex jc-flex al-flex flx-col sklCont">
					<h4 className="clr-wht mont al-ce mt-2">Development Skills</h4>
					<p className="clr-wht lato-r al-ce mt-5 w-80">HTML, CSS ,JavaScript, Bootstrap, and React JS are my main strengths and go to when developing websites especially Front End</p>
				</div>
			</div>
			<div className="flex h-80 ml-2 bg-toR br-50 jc-flex flx-col al-flex trans popShdw  w-50 p-20 sub">
				<DesSkl/>
				<div className="flex jc-flex al-flex flx-col sklCont">
					<h4 className="clr-wht mont al-ce mt-2">Design Skills</h4>
					<p className="clr-wht lato-r al-ce mt-5 w-80">As a Graphic Designer I am most knowledgeable in the following softwares Adobe Photoshop and Adobe Illustrator for illustrations, and Figma for web design</p>
				</div>
			</div>			
		</div>

	)
}

const Main = (props)=>{
	return(
  	<div className="flex jc-flex al-flex p-20 h-100" id="top">  	
  		<div className="clr-wht flex jc-flex al-flex h-80 p-20 container">
   			<div className="flex jc-flex w-50">
  				<Docs/>
  			</div>
  				<GreetMain set={props.type} skills={props.skills}/> 
  		</div>			
  	</div>		
	)
}

const Contacts = ()=>{
	return(
		<div className="flex jc-flex al-flex h-100 " id="cont">
			<div className="flex jc-flex al-flex h-80 p-20 container">
				
				<div className="flex p-20 flx-col bg-toR br-50 jc-flex al-flex w-50 popShdw sub">
					<ContHead/>
					<Contact/>						
				</div>

				<Cont/>
			</div>
		</div>
	)
}

const Navi = (props)=>{
	return(
		<div className="p-20 pos-fix bg-toR glass trans popShdw front-1" onClick={()=>props.disp(true)} id="navBar">
				<div className="flex jc-flex al-flex">
					<FontAwesomeIcon icon="bars" className="tech clr-wht"/>
					<h4 className="mont ml-5 clr-wht">Portfolio</h4>
				</div>		
				
		</div>
	)
}

const NavCont = (props)=>{
	return(
		<nav className="h-100 w-50 flex jc-flex al-flex bg-white fadeInDown trans pos-fix frnt-top navBr" id="navCont">
			<div className="m-5 w-100 pos-rel h-per flex jc-flex al-flex">
				<Logo/>
				<FontAwesomeIcon className="clr-dark pos-abs exit cursor" icon="times-circle" onClick={()=>props.disp(false)}/>
				<div className="flex flx-col">
					<p className="lato-r pos-rel nav cursor trans al-ce mb-10"><Scroll to="top">About</Scroll></p>
					<p className="lato-r pos-rel nav cursor trans al-ce mb-10"><Scroll to="skills">Skills</Scroll></p>
					<p className="lato-r pos-rel nav cursor trans al-ce mb-10"><Scroll to="proj">Projects</Scroll></p>
					<p className="lato-r pos-rel nav cursor trans al-ce mb-10"><Scroll to="cont">Contact</Scroll></p>
				</div>	
			</div>
		</nav>
	)
}

export {Choice,Main,Contacts,Skills,Navi,NavCont}

