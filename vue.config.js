const fs = require('fs');

function get_JSON(){
  const path = './src/components/codeView/Codelab';
  var files = fs.readdirSync(path);
  let json = [];
  for (var i=0; i<files.length; i++){
      let rawdata = fs.readFileSync(path+'/'+files[i]+'/codelab.json');
      let data = JSON.parse(rawdata);
      json.push(data);
  }
  fs.writeFile('codelabs.json', JSON.stringify(json), 'utf-8', (err)=>{
    if (err) throw err;
 })
}

get_JSON();

module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  pwa: {
    name: 'Codelab website',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    msTileColor: '#4A90E2',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  },
}