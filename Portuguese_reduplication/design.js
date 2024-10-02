Experigen.initialize = function () {
	
	var items  = this.resource("items");
	var frames = this.resource("frames");

	items = items.pairWith("frame", frames)

	var sampleItem =  items.subset("experiment","real").chooseRandom(2)
			.pairWith("order",1)
			.pairWith("view","stimulus_showcase.ejs")
			;

	var block1 = []
			.concat(items.subset("experiment", "real").subset("syll","2"))
			.concat(items.subset("experiment", "real").subset("syll","3"))
			.pairWith("view","stimulus.ejs")
			.shuffle()
			;
			
	var block2 = []
			.concat(items.subset("experiment", "nonce").subset("syll","2"))
			.concat(items.subset("experiment", "nonce").subset("syll","3"))
			.pairWith("view","stimulus.ejs")
			.shuffle()
			;

	//this.progressbar.addSectionBreak();
	this.addStaticScreen("intro.ejs");
	this.addBlock(sampleItem);
	this.addStaticScreen("getgoingreal.ejs");
	this.addBlock(block1);
	this.addStaticScreen("getgoing.ejs");
	this.addBlock(block2);
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");
	
}
