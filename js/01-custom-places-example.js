function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				lat: 19.39592,
				lng:-99.09191,
				name: "UPIICSA",
				street: "Avenida T",
				userData: 99
			},
			// Random made up CUSTOM place

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


