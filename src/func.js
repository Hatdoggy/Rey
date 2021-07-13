	const load = (ndx,arr,trgt,body,callback)=>{

		if(typeof arr != "undefined"){

			setTimeout(async()=>{
			arr[ndx].style.strokeOpacity =1;
			ndx++;
				if(ndx<arr.length){
					load(ndx,arr,trgt,body,callback);
				}else{
					trgt.forEach( function(elem) {
						elem.style.fill = "white";
					});
					arr.forEach( function(elem) {
						elem.style.stroke = "white";
					});
					body.classList.remove("loading-screen");
					callback(true);
				}

			},500);

		}
		return true
	}	

	export default load;