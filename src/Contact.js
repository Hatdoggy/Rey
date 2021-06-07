import React,{useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContHead = (prop)=>{

	return(
		<div className="flex flx-col h-30 jc-flx-e p-20 fade_5 brd-bot">
			<h4 className="mont bold">Contact Me</h4>
			<p className="lato-r mt-2">Did you like my websites or designs? contact me by clicking any of the following buttons to connect and make wonderful things with me</p>
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
  			let btn = document.querySelector("#prjBtn h4");
  			let links = document.querySelectorAll('a.over-hide');
  			let slide = document.querySelectorAll('.slide');
  			if(btn)btn.style.width = "100%!important"

  			links.forEach((elem)=>{
  				elem.classList.add('w-50')
  			})

  			slide.forEach((elem)=>{
  				elem.classList.add('port');
  			})
  		}
  	});

	return(
			<div id="contact" className={mobile?"fade flex flx-col p-20 mid jc-flex al-flex h-100":"flex flx-col fade_5 p-20"}>
				<a href="https://www.facebook.com/rey.ondap.77/" className="btn-fb p-15 mt-2 clr-wht lato bold br-20 pos-rel over-hide al-ce flex jc-flx-ar">
					<div className="slide pos-abs"></div>
					<FontAwesomeIcon className="mr-auto" icon={["fab","facebook"]}/>
					Facebook
				</a>
				<a href="https://www.instagram.com/onda_plor/" className="btn-grd p-15 mt-2 clr-wht lato bold br-20 pos-rel over-hide al-ce flex jc-flx-ar">
					<div className="slide pos-abs"></div>				
					<FontAwesomeIcon className="mr-auto" icon={["fab","instagram"]}/>
					Instagram			
				</a>
				<a href="https://github.com/Hatdoggy" className="btn-gh p-15 mt-2 clr-wht lato bold br-20 pos-rel over-hide al-ce flex jc-flx-ar">
					<div className="slide pos-abs"></div>
					<FontAwesomeIcon className="mr-auto" icon={["fab","github"]}/>
					Github
				</a>
				<a href="https://www.linkedin.com/in/rey-louis-ondap-7282991ba" className="btn-lnk p-15 mt-2 clr-wht lato bold br-20 pos-rel over-hide al-ce flex jc-flx-ar">
					<div className="slide pos-abs"></div>
					<FontAwesomeIcon className="mr-auto" icon={["fab","linkedin"]}/>
					LinkedIn			
				</a>
				<a href="https://mail.google.com/mail/u/0/?fs=1&to=ondaprey@gmail.com&tf=cm" className="btn-g p-15 mt-2 clr-wht lato bold br-20 pos-rel over-hide al-ce flex jc-flx-ar">
					<div className="slide pos-abs"></div>
					<FontAwesomeIcon className="mr-auto" icon={["fab","google"]}/>
					Gmail			
				</a>
			</div>
		);
}