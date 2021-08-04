const program = require("commander");
program.version("1.0.0").description("Simple Password Generator");

// without commander
// if (process.argv[2] === "generate") {
//   console.log("Generated");
// }

// with commander
// program
//   .command("generate")
//   .action(() => {
//     console.log("Generated");
//   })

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();
