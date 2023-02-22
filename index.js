const sh = require("shelljs")
require("dotenv").config()

// gh repo create my-project --private --source=. --remote=upstream
// sh.exec("git init")
// sh.exec("git add .")
// sh.exec("git commit -m 'initial_commit'")

// sh.exec(`gh repo create ${process.env.NAME} --private`)
sh.exec("git add .")
sh.exec("git commit -m 'initial_commit'")
sh.exec("git push -u origin master")

// sh.exec()
