const path = require('path');
const isWindows = process.platform ==='win32'
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

const appDataDir = isWindows
? path.join(process.env.APPDATA || path.join(process.env.USERPROFILE, 'APPDATA', 'ROAMING')) : path.join(process.env.HOME || process.env.USERPROFILE, isMac ? 'Library/Application support': '.config');

const appName = 'MyApp';
const appDir = path.join(appDataDir, appName);

require('fs').mkdirSync(appDir,{recursive: true});

const tempDir = path.join(require('os').tmpdir(), appName);

function getConfigPath(){
  const configName = 'config.json';
  if(process.env.NODE_ENV === 'devlopment'){
    return path.join(process.cwd(), 'config', configName);

  }
  return path.join(appDir, configName);
}
console.log('Application directory:', appDir);
console.log('temporary directory:', tempDir);
console.log('Config file path:', getConfigPath)