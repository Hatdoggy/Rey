import React,{useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

const ContHead = (prop)=>{

	return(
		<div className="flex flx-col h-30 jc-flx-e p-20 fade_5 brd-bot">
			<h4 className="mont bold">Contact Me</h4>
			<p className="lato-r mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae et quis deleniti obcaecati maiores, beatae consequuntur magnam quasi itaque at iste deserunt quaerat expedita quisquam dolore harum adipisci. Dolorem?</p>
		</div>
		);
}

export default ContHead

export const Contact = ()=>{

	const mobile = useMediaQuery({
    	query: '(max-width: 800px)'
  	})

  	useEffect(()=>{
  		if(mobile){
  			document.querySelector("#prjBtn h4").style.width = "100%!important"
  		}
  	});

	return(
			<div id="contact" className={mobile?"fade flex flx-col p-20 mid ":"flex flx-col fade_5 p-20"}>
				<form action="" className={mobile?"ml-5 mr-5":"h-70"}>
					<div className="mt-15 flex flx-col">
						<label htmlFor="name" className={mobile?"lato-r al-ce":"lato-r"}>Name</label>
						<input type="text" className="bg-trans lato-r" id="name"/>
					</div>
					<div className="mt-15 flex flx-col">
						<label htmlFor="email" className={mobile?"lato-r al-ce":"lato-r"}>Email</label>
						<input type="text" className="bg-trans lato-r" id="email"/>
					</div>
					<div className="mt-15 flex flx-col">
						<label htmlFor="message" className={mobile?"lato-r al-ce":"lato-r"}>Message</label>
						<textarea type="text" className="bg-trans lato-r" id="message"></textarea>
					</div>

					<div id="prjBtn" className={mobile?"flex w-100 mt-5":""}>
						<h4 className={mobile?"lato bold p-10 w-50 mt-2 al-ce btn-grd trans-1 br-20 clr-wht w-100":"lato bold p-10 w-50 mt-2 al-ce btn-grd trans-1 br-20 clr-wht cursor"}>Send Message</h4>
					</div>
				</form>
			</div>
		);
}