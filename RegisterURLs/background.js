// Evento - cargar una pestaña
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// Si esta cargando
	if(changeInfo.status=="loading"){
		// Imprime url
		console.log(tab.url);
	}
});