var Experigen =  {
	settings: {

		experimentName: "bp2test1", // use only A-Z, a-z, 0-9
		
		databaseServer: "https://sdb.phonologist.org/experigen1/",
		recorderServer: "https://sdb.phonologist.org/audio/upload.php",

		online: true, // make sure you know what you're doing before changing this
		
		strings: {
			windowTitle:     "Portugues do Brasil",
			connecting:		 "Conectando...",
			loading:         "Carregando...",
			soundButton:     "    ►    ",
			continueButton:  "   Continua   ",
			errorMessage:    "Um erro ocorreu. Pedimos desculpas pela inconveniência.",
			emptyBoxMessage: "Por favor, forneça sua resposta na caixa de texto.",
			
			recordButton : "Record",
			stopButton : "Stop",
			sentButton : "Save",
			tryagainButton: "Delete",
			uploadSuccessful : "Saved! ✔︎",
			uploading : "Saving...",
			recording : "Recording...",
			processing: "Processing..."
		},
		
		audio: true,
		
		progressbar: {
			visible: true, 
			adjustWidth: 6,
			percentage: false
		},
		
		items: "resources/items.txt",
		
		otherresources: {
			frames: "resources/frames.txt",
			pictures: "resources/pictures.txt"	
		},

		folders: {
			views: "views/",
			sounds: "resources/sounds/",
			pictures: "resources/pictures/"
		},
	
		footer: "views/footer.html",
		missingview: "views/missingview.ejs"
	}	
};




