const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('beep\n');
    
  }
  // if key is a letter, do nothing.
  if (Number.isInteger(Number(key))) {
    setTimeout(()=> {
      process.stdout.write('beep\n');
    }, key * 1000);
  }
  if (key === '\u0003') {
    console.log('thank you for using me');
    process.exit();
  }
});
