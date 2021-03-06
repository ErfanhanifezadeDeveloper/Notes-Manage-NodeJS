const yargs = require("yargs");
const note = require("./note");


//add af Command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "notes title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.add(argv.title , argv.body);
  },
});


yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      demandOption: true,
      describe: "enter an intended note title for remove to remove!",
      type: "string"
    }
  },
  handler: (argv) => {
    note.remove(argv.title);
  },
});



yargs.command({
  command: "list",
  describe: "list your notes",
  handler: () => {
    note.show();
  },
});


yargs.command({
  command: "read",
  describe: "Read a intended Note",
  builder: {
    title: {
      demandOption: true,
      describe: "title for find note",
      type: "string"
    }
  },
  handler: (argv)=>{
    note.read(argv.title);
  }
});

console.log(yargs.argv)