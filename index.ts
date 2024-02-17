console.log('Hello via Bun!');
import { exec } from 'child_process';
import { resolve } from 'path';

const scriptPath = './src/create_ae_project/create_ae_project.sh';

console.log('scriptPath: ' + scriptPath);

exec(scriptPath, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});
