const kebabToCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

const camelCaseToKebab = (s) =>
    s
        .replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, "-$1")
        .toLowerCase();

const hasValue = (value) => value !== undefined && null !== value;

const getVh = (v) => {
    const h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
};

const getCountryCode = (code) => {
    const dict = {
        _1: "XK", //_1 - Kosowo
    };
    return dict[code] || code;
};

const extractFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1].split(".")[0];
};

const importAsyncComponents = (componentsContext) => {
    const components = {};
    componentsContext.keys().forEach((path) => {
        components[extractFileName(path)] = () => componentsContext(path);
    });
    return components;
};

const registerDirectives = (Vue, context) => {
    context.keys().forEach((path) => {
        const camelCaseName = camelCaseToKebab(extractFileName(path));
        Vue.directive(camelCaseName, context(path).default);
    });
};

const getTranslations = (Vue, translationsKeysDict) => {
    const translations = {};
    Object.keys(translationsKeysDict).forEach((key) => {
        translations[key] = Vue.$t(translationsKeysDict[key]);
    });
    return translations;
};

const omitObjectKeys = (obj, keys) => {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};

const omitObjectKeysArray = (arr, keys) => {
    return arr.map((object) => {
        return omitObjectKeys(object, keys);
    });
};

const changeAllDictValues = (object, value) => {
    const preparedObject = {};
    Object.keys(object).forEach((key) => {
        preparedObject[key] = value;
    });
    return preparedObject;
};

const getLastItem = (arr) => {
    return arr[arr.length - 1];
};

const hexToRgb = (hex) =>
    hex
        .replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => "#" + r + r + g + g + b + b
        )
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

const getResponseData = (response, dataKeyHeaderName = "x-data-key") => {
    const dataKey = response.headers[dataKeyHeaderName];
    if (!dataKey) {
        throw new Error(
            `"${dataKeyHeaderName}" header is not present in response headers`
        );
    }
    if (!(dataKey in response.data)) {
        throw new Error(
            `"${dataKeyHeaderName}" key is not present in response data`
        );
    }
    return response.data[dataKey];
};

const roundNumber = (value, decimalPlaces = 0) => {
    const p = Math.pow(10, decimalPlaces);
    return Math.round((value + Number.EPSILON) * p) / p;
};

const range = (length, fromZero = false) => {
    return Array.from({ length }, (x, i) => (fromZero ? i : i + 1));
};

const isFunction = (value) => {
    return "function" === typeof value;
};

module.exports = {
    kebabToCamelCase,
    camelCaseToKebab,
    hasValue,
    getVh,
    getCountryCode,
    extractFileName,
    importAsyncComponents,
    registerDirectives,
    getTranslations,
    omitObjectKeys,
    omitObjectKeysArray,
    changeAllDictValues,
    getLastItem,
    hexToRgb,
    getResponseData,
    roundNumber,
    isFunction,
    range,
};
