const fs = require("fs")
const path = require("path")


const fileHandler = (file) => {
    const dir = 'uploads'
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    const fileExt = path.extname(file.originalname);
    const fileName = `${Date.now()}${fileExt}`;
    const filePath = path.join(dir, fileName);

    fs.writeFileSync(filePath, file.buffer)

    return filePath
}

module.exports = fileHandler