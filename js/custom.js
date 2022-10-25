var dark = true;

function changeBg() {
   if (dark == true) {
      darkModeOff();
   } else {
      darkModeOn();
   }
}



////////////////////////////////////////////////////
function darkModeOn() {
   console.log('LLEGA LA FUNCIÓN AQUI !')
   var headDoc = document.querySelector('head');
   console.log('pegamo o head aqui')
   var linkCssLightMode = document.createElement('link')
   console.log('criado o elemento')
   linkCssLightMode.setAttribute('href', 'css/dark_mode.css')
   console.log('adicionado né... ')
   linkCssLightMode.setAttribute('rel', 'stylesheet');
   console.log('atribuido o stylesheet... ')
   headDoc.appendChild(linkCssLightMode);
   console.log('em teoria foi....dark')
}

function darkModeOff() {
   console.log('LLEGA LA FUNCIÓN AQUI !')
   var headDoc = document.querySelector('head');
   console.log('pegamo o head aqui')
   var linkCssLightMode = document.createElement('link')
   console.log('criado o elemento')
   linkCssLightMode.setAttribute('href', 'css/light_mode.css')
   console.log('adicionado né... ')
   linkCssLightMode.setAttribute('rel', 'stylesheet');
   console.log('atribuido o stylesheet... ')
   headDoc.appendChild(linkCssLightMode);
   console.log('em teoria foi....light')

   var btnIcon = document.querySelector()
}
