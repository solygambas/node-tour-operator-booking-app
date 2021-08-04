const program = require("commander");

const createPassword = require("./utils/createPassword");
const log = console.log;

// without commander
// if (process.argv[2] === "generate") {
//   log("Generated");
// }

// with commander
// program
//   .command("generate")
//   .action(() => {
//     log("Generated");
//   })

program.version("1.0.0").description("Simple Password Generator");
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
log(generatedPassword);
