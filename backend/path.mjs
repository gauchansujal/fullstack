import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {promises as fs} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function resolvePath(relativePath){
    return new URL(relativePath, import.meta.url).pathname;

}

const configpath = join(__dirname, '..','config', 'settings.json');
const assetPath = resolvePath('../backend/myl.text');

async function loadModule(modulePath){
    const fullPath = new URL(modulePath, import.meta.url);
    return import(fullPath);
}