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
    "&#8986; bep",
    "&#127764; elegansio",
    "&#128512; jajecznica",
    "&#126980; pomidor",
    "&#127817; lubieplacki &#9986;",
    "adidance",
    "spinboy",
    "szanuje kukiza &#9986;",
    "nosi buty na rzepy  &#129510;",
    "&#129510; wylizuje talerz po bułce",
    "&#127817; pije barszcz sosnowskiego  &#129510;",
    "&#129510; kopie bitcoiny łopatą",
    `Lorem ipsum dolor sit amet,  &#129510; consectetur adipiscing elit. 
        Sed placerat mauris sed ex euismod, nec tincidunt nisi 
        sollicitudin. Class aptent taciti sociosqu ad litora 
        torquent per conubia nostra, per inceptos himenaeos. 
        Etiam eget rhoncus odio. Proin euismod orci in felis 
        vehicula mattis. Duis viverra vel orci et luctus. Proin 
        tristique dolor non leo posuere tincidunt. Morbi vitae 
        feugiat nisi, sit amet vulputate &#1127857; tellus. Maecenas eget 
        aliquam nibh. Quisque et posuere neque.
    `,
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
