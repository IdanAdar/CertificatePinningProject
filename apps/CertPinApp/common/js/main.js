function wlCommonInit(){
	$("#adapterResourceRequest").on("click", adapterResourceRequest);
	$("#resourceRequest").on("click", resourceRequest);
	
	// This API method must be called before any request attempt.
	WL.Client.pinTrustedCertificatePublicKey('MFP.cer').then(successfulPinning,failedPinning);
}

//Enable the buttons that send a request.
function successfulPinning() {
	 $("#certificatePinningStatus").html("Certificate pinned");
}

function failedPinning() {
	 $("#certificatePinningStatus").html("Certificate not pinned");
}

function adapterResourceRequest() {
    var resourceRequest = new WLResourceRequest(
        "/adapters/DummyAdapter/dummyProcedure",
        WLResourceRequest.GET
    );

    resourceRequest.send().then(
        function(response) {
            alert ("Successful resource request");
        },
        function(response) {
            alert ("Failed resource request: " + response.errorMsg);
        }
    );
}

function resourceRequest() {
	var resourceRequest = new WLResourceRequest(
		"https://www.google.com",
		WLResourceRequest.GET
	);
	
	resourceRequest.send().then(
	    function() {
		    alert ("Successful resource request.");
		},
		function(response) {
			 alert ("Failed resource request: " + response.errorMsg);
		}
	);
}
