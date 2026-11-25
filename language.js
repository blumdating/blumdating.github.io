// Opens the site in the browser's language, if Blum has it. Nothing is stored.
(function () {
  var folders = {"en":"en","pt":"pt","es":"es","fr":"fr","de":"de","it":"it"};
  var wanted = navigator.languages || [navigator.language || ''];
  for (var i = 0; i < wanted.length; i++) {
    var folder = folders[String(wanted[i]).toLowerCase().split('-')[0]];
    if (folder) {
      location.replace(folder + '/index.html');
      return;
    }
  }
})();
