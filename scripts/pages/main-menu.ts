const panel = $.GetContextPanel();
$.RegisterForUnhandledEvent('ChaosShowMainMenu', () => { panel.AddClass('main-menu') });
$.RegisterForUnhandledEvent('ChaosHideMainMenu', () => { panel.RemoveClass('main-menu') });
$.RegisterForUnhandledEvent('ChaosShowPauseMenu', () => { panel.AddClass('pause-menu') });
$.RegisterForUnhandledEvent('ChaosHidePauseMenu', () => { panel.RemoveClass('pause-menu') });

const GameUIState = {
	INVALID: 0,
	LOADINGSCREEN: 1,
	INGAME: 2,
	MAINMENU: 3,
	PAUSEMENU: 4,
	INTROMOVIE: 5,
} as const;

function quit() {
	if (GameInterfaceAPI.GetGameUIState() === GameUIState.PAUSEMENU) {
		GameInterfaceAPI.ConsoleCommand('disconnect');
	}
	else {
		GameInterfaceAPI.ConsoleCommand('quit');
	}
}

function play() {
	GameInterfaceAPI.ConsoleCommand('map sp_a2_triple_laser');
}

function resume() {
	$.DispatchEvent('ChaosMainMenuResumeGame');
}