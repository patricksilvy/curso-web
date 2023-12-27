const { ipcMain } = require("electron")

const pathsToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupWords = require("./groupWords")

ipcMain.on("process-subtitles", (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(preparedData => groupWords(preparedData))
        .then(groupWords => {
            event.reply("process-subtitles", groupWords)
        })
})