function setupGame()
{
	//Use light fog for multiplayer
	setRevealStatus(true);

	if (tilesetType === "ARIZONA")
	{
		setCampaignNumber(1);
	}
	else if (tilesetType === "URBAN")
	{
		setCampaignNumber(2);
		replaceTexture("page-7-barbarians-arizona.png", "page-7-barbarians-urban.png");
	}
	else if (tilesetType === "ROCKIES")
	{
		setCampaignNumber(3);
		replaceTexture("page-7-barbarians-arizona.png", "page-7-barbarians-kevlar.png");
		// for some reason rockies will use arizona babas
	}
	if (tilesetType !== "ARIZONA")
	{
		setSky("texpages/page-25-sky-urban.png", 0.5, 10000.0);
	}
	if (!isSpectator(-1))
	{
		// Disabled by default
		setMiniMap(false);
	}
	// Enable all templates
	setDesign(true);

	// Enable all guide topics
	addGuideTopic("wz2100::**");

	showInterface(); // init buttons. This MUST come before setting the reticule button data
	queue("setMainReticule", TICK_TIME);
	mainReticule = true;
}
