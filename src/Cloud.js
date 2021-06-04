import Side,{Header} from './SideNav';
import { useMediaQuery } from 'react-responsive';

const hide = {
	cloudName:"dxf6rxbyh",
	APIKey:"244837241455518",
	APISecret:"DRP8kQcnIjVyu6xA86Ha2duJsKk",
	EnvVar:"cloudinary://244837241455518:DRP8kQcnIjVyu6xA86Ha2duJsKk@dxf6rxbyh"
}

const des = [
	{	
		name:"alien",
		link:"./images/illus/alien.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"cat1",
		link:"./images/illus/cat1.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"cat2",
		link:"./images/illus/cat2.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"dino1",
		link:"./images/illus/dino1.JPG",
		type:"fit long illus",
		id:"illus"
	},
	{	
		name:"dino2",
		link:"./images/illus/dino2.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"dino3",
		link:"./images/illus/dino3.JPG",
		type:"fit long illus",
		id:"illus"
	},
	{	
		name:"fish",
		link:"./images/illus/fish.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"iguana",
		link:"./images/illus/iguana.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"octopus",
		link:"./images/illus/octopus.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"orca1",
		link:"./images/illus/orca1.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"orca2",
		link:"./images/illus/orca2.JPG",
		type:"fit long illus",
		id:"illus"
	},
	{	
		name:"shirt7",
		link:"./images/Shirt/shirt7.JPG",
		type:"fit shirt",
		id:"shirt"
	},
	{	
		name:"purple",
		link:"./images/illus/purple.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"temple",
		link:"./images/illus/temple.JPG",
		type:"fit none illus",
		id:"illus"
	},
	{	
		name:"mug1",
		link:"./images/mug/mug1.JPG",
		type:"fit none mug",
		id:"mug"
	},
	{	
		name:"mug2",
		link:"./images/mug/mug2.JPG",
		type:"fit none mug",
		id:"mug"
	},
	{	
		name:"mug3",
		link:"./images/mug/mug3.JPG",
		type:"fit none mug",
		id:"mug"
	},
	{	
		name:"shirt2",
		link:"./images/Shirt/shirt2.JPG",
		type:"fit shirt",
		id:"shirt"
	},
	{	
		name:"mug4",
		link:"./images/mug/mug4.JPG",
		type:"fit none mug",
		id:"mug"
	},
		{	
		name:"mag1",
		link:"./images/print/mag1.JPG",
		type:"fit none",
		id:"print"
	},
	{	
		name:"mag2",
		link:"./images/print/mag2.JPG",
		type:"fit none",
		id:"print"
	},
	{	
		name:"mag3",
		link:"./images/print/mag3.JPG",
		type:"fit none",
		id:"print"
	},
	{	
		name:"poster",
		link:"./images/print/poster.JPG",
		type:"fit none",
		id:"print"
	},
	{	
		name:"shirt1",
		link:"./images/Shirt/shirt1.JPG",
		type:"fit shirt",
		id:"shirt"
	},
	{	
		name:"shirt3",
		link:"./images/Shirt/shirt4.JPG",
		type:"fit shirt",
		id:"shirt"
	},
	{	
		name:"shirt5",
		link:"./images/Shirt/shirt5.JPG",
		type:"fit shirt",
		id:"shirt"
	},
		{	
		name:"shirt6",
		link:"./images/Shirt/shirt6.JPG",
		type:"fit shirt",
		id:"shirt"
	},
	{	
		name:"poster1",
		link:"./images/print/poster1.JPG",
		type:"fit none",
		id:"print"
	},

	{	
		name:"dog",
		link:"./images/illus/dog.JPG",
		type:"fit long illus",
		id:"illus"
	},
];

export default des;

export const Background = (prop)=>{
	return(
		<section className="back pos-abs w-100 h-100">
			<span className={prop.pos === "top"?"top-line hor-line":"bot-line hor-line"}></span>
		</section>
	);
}

export const Circ = (prop)=>{

	return(
	<svg className={prop.pos === "top"?"circ circ-top back pos-abs":"circ circ-bot back pos-abs"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.49 295.96">
	
	<g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">

		<path d="M53.8,38.41c0,20.79-12,34-26.9,28.06C12,60.36,0,41.09,0,26.94,0,13,12,.89,26.9,0,41.75-.45,53.8,17.54,53.8,38.41Z" fill="#231f20"/>
		<path d="M53.8,139.76c0,16.75-12,25.28-26.9,15.82S0,122.29,0,107.63C0,93.12,12,90.52,26.9,97.57,41.75,104.89,53.8,122.82,53.8,139.76Z" fill="#231f20"/>
		<path d="M53.8,220.45c0,12.77-12,18.93-26.9,11.61C12,225,0,203.52,0,188.33s12-15.23,26.9-5.85S53.8,207.49,53.8,220.45Z" fill="#231f20"/>
		<path d="M53.8,280.49c0,8.84-12,14.94-26.9,15.43C12,296.77,0,284.79,0,269c0-15.56,12-20.38,26.9-14.27C41.75,260.69,53.8,271.57,53.8,280.49Z" fill="#231f20"/>
		<path d="M136.93,39.57c0,21-12,38.67-26.89,39.44s-26.9-16.62-26.9-38.26S95.18.07,110,0C124.89.2,136.93,18.68,136.93,39.57Z" fill="#231f20"/>
		<path d="M136.93,143c0,16.87-12,32.39-26.89,33.49s-26.9-13.07-26.9-30.19,12-31.08,26.9-32S136.93,126.12,136.93,143Z" fill="#231f20"/>
		<path d="M136.93,223.69c0,12.83-12,24.31-26.89,25.1s-26.9-9.17-26.9-21.8,12-22.48,26.9-23.6S136.93,210.85,136.93,223.69Z" fill="#231f20"/>
		<path d="M136.93,281.65c0,8.82-12,14.43-26.89,14.27-14.86,0-26.9-4.95-26.9-13.09s12-14.9,26.9-15.53S136.93,272.89,136.93,281.65Z" fill="#231f20"/>
		<path d="M220.07,29.22c0,15.65-12,31.85-26.89,35.94s-26.9-8.44-26.9-28.43,12-37.1,26.9-36.69S220.07,13.68,220.07,29.22Z" fill="#231f20"/>
		<path d="M220.07,114c0,15.13-12,33-26.89,39.38s-26.9-1.81-26.9-18.37,12-34.31,26.9-39.2S220.07,99,220.07,114Z" fill="#231f20"/>
		<path d="M220.07,194.72c0,14.64-12,30.75-26.89,35.6s-26.9-1.47-26.9-14.59,12-29,26.9-35.43S220.07,180.14,220.07,194.72Z" fill="#231f20"/>
		<path d="M220.07,271.3c0,14.17-12,25.08-26.89,24.62s-26.9-7.43-26.9-17.11,12-21.32,26.9-25.36S220.07,257.24,220.07,271.3Z" fill="#231f20"/>
		<path d="M303.21,17.15c0,9.72-12,21.32-26.9,25.36s-26.89-3.78-26.89-17.85S261.46-.42,276.31,0,303.21,7.47,303.21,17.15Z" fill="#231f20"/>
		<path d="M303.21,80.23c0,13.15-12,29.05-26.9,35.43s-26.89.16-26.89-14.42,12-30.75,26.89-35.6S303.21,67.11,303.21,80.23Z" fill="#231f20"/>
		<path d="M303.21,160.92c0,16.59-12,34.31-26.9,39.21s-26.89-3.13-26.89-18.2,12-33,26.89-39.38S303.21,144.37,303.21,160.92Z" fill="#231f20"/>
		<path d="M303.21,259.23c0,20-12,37.1-26.9,36.69s-26.89-13.64-26.89-29.18,12-31.85,26.89-35.94S303.21,239.24,303.21,259.23Z" fill="#231f20"/>
		<path d="M386.35,13.13c0,8.07-12,14.9-26.9,15.53s-26.89-5.59-26.89-14.35S344.6-.11,359.45,0C374.31,0,386.35,5,386.35,13.13Z" fill="#231f20"/>
		<path d="M386.35,69c0,12.59-12,22.48-26.9,23.6s-26.89-7.46-26.89-20.3,12-24.31,26.89-25.1S386.35,56.35,386.35,69Z" fill="#231f20"/>
		<path d="M386.35,149.67c0,17.08-12,31.07-26.9,32s-26.89-11.82-26.89-28.7,12-32.39,26.89-33.49S386.35,132.54,386.35,149.67Z" fill="#231f20"/>
		<path d="M386.35,255.21c0,21.58-12,40.69-26.9,40.71-14.85-.16-26.89-18.64-26.89-39.53s12-38.67,26.89-39.44S386.35,233.57,386.35,255.21Z" fill="#231f20"/>
		<path d="M469.49,26.94c0,15.57-12,20.38-26.9,14.27-14.85-5.94-26.9-16.81-26.9-25.74S427.74.53,442.59,0C457.45-.81,469.49,11.17,469.49,26.94Z" fill="#231f20"/>

		<path d="M469.49,107.63c0,15.06-12,15.23-26.9,5.85s-26.9-25-26.9-38c0-12.77,12.05-18.93,26.9-11.61C457.45,71,469.49,92.44,469.49,107.63Z" fill="#231f20"/>
		<path d="M469.49,188.33c0,14.51-12,17.11-26.9,10.06-14.85-7.32-26.9-25.25-26.9-42.19,0-16.75,12.05-25.28,26.9-15.82S469.49,173.67,469.49,188.33Z" fill="#231f20"/>
		<path d="M469.49,269c0,14-12,26.05-26.9,26.9-14.85.49-26.9-17.5-26.9-38.37s12.05-34,26.9-28.06C457.45,235.6,469.49,254.88,469.49,269Z" fill="#231f20"/></g></g>

	</svg>	
	);

}

export const Modal = (prop)=>{

	const mobile = useMediaQuery({
    	query: '(max-width: 800px)'
  	})

	return(
		<div className="modal-cont w-100 flex jc-flex al-flex h-100 pos-fix" onClick={()=>prop.set(false)}>
			<div className="modal">
				<img src={prop.data[prop.ndx].link} alt={prop.data.name}/>
			</div>
		</div>
	);
}


