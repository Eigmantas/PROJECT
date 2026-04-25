const fs = require('fs');
const path =require('path');

const loadDate = () => {
    const filePath = path.join(__dirname, '../data/gullfoss-details.ejs');
        const fileDate = fs.readFileSync(filePath);
    return JSON.parse(fileDate);
};

const getGullfoss = () => {
    const Gullfoss = loadDate();
    return Gullfoss;
};

const getGullfossById = (id) => {
    const Gullfoss = loadDate();
    return Gullfoss.find((G) => G.id === id);
};

module.exports = {
    getGullfoss,
    getGullfossById
};