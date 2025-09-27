const os = require('os');
const user = os.userInfo();
console.log('user information:');
console.log(`-Username: ${user.username}`);
console.log(`-user ID: ${user.uid}`);
console.log(`-Group ID: ${user.gid}`);
console.log(`- Home Directory:#{user.homedir}`);

if (os.platform()==='win32'){
    console.log(`-Domain:${user.domain || 'N/A'}`);

}

if (user.shell){
    console.log(`-default shell:${user.shell}`);
}