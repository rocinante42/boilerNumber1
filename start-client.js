const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'react_client', shell: true };
require('child_process').spawn('npm', args, opts);