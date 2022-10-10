const simpleComparator = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const sortRows = (rows, columnName, order, comparatorFn = simpleComparator) => {
    return [...rows].sort((a, b) =>
        "asc" === order
            ? comparatorFn(a[columnName], b[columnName])
            : comparatorFn(b[columnName], a[columnName])
    );
};

const filterRows = (rows, columnName, predicateFn = simpleComparator) => {
    return rows.filter((item) => predicateFn(item[columnName]));
};

const getPageRows = (rows, page, rowsPerPage) => {
    return rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export { sortRows, filterRows, getPageRows };
