const generateColumns = (colsAmount) => {
    const columns = [];
    for (let i = 0; i < colsAmount; i++) {
        columns.push({
            label: `Column ${i}`,
            name: `column${i}`,
            type: i % 2 ? "number" : "string",
        });
    }
    return columns;
};

const randomWordsArray = [
    "bep",
    "elegansio",
    "jajecznica",
    "pomidor",
    "lubieplacki",
    "adidance",
    "spinboy",
    "szanuje kukiza",
    "nosi buty na rzepy",
    "wylizuje talerz po bułce",
    "pije barszcz sosnowskiego",
    "kopie bitcoiny łopatą",
];

const getRandomWord = (wordsArray) => {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const generateRows = (
    rowsAmount,
    columns,
    randomWordsArr = randomWordsArray
) => {
    const rows = [];
    for (let i = 0; i < rowsAmount; i++) {
        const item = {};
        columns.forEach((column) => {
            item[column.name] =
                "number" === column.type
                    ? Math.ceil(Math.random() * 1000)
                    : getRandomWord(randomWordsArr);
        });
        rows.push(item);
    }
    return rows;
};

export { generateColumns, generateRows };
