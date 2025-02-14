const status = "AUTOMATIC";
const botName = "Earth Premium RA/WOLF";
const text = "Earth Premium";
const version = "Latest@ v1.0";
const startTime = Date.now();


const outerBoxColor = '\x1b[34m';  
const innerBoxColor = '\x1b[32m';  
const resetColor = '\x1b[0m';      

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log(`
${outerBoxColor}╭────────────────────────────────────────────╮
│                                            
│  ${botName}                                
│  ${innerBoxColor}╭──────────────────────────────────────╮  
│  │  Status: ${status}                  
│  │  Version: ${version}                
│  │  Uptime: ${uptimeInSeconds}s        
│  │  Powered by ${text}                 
│  ╰──────────────────────────────────────╯  
│${outerBoxColor}                                            
╰────────────────────────────────────────────╯${resetColor}
  `);
}

module.exports = {
  printWatermark,
};
