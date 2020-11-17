'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted"){
            console.log("aceptado");
        } else {
            console.log("NO aceptado");
        }
        deferredInstallPrompt = null;
    })
}

// Evento que se dispara al terminar de instalar la app
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("app Disparos instalada");
}