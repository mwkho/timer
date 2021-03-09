let args = process.argv;
let length = args.length;
args = args.splice(2,length);

args.forEach(element => {
  if (element > 0 && Number.isInteger(element)) {
    setTimeout(()=> {
      process.stdout.write('beep\n');
    }, element * 1000);
  }
});



