const esModules = ['@agm', 'ngx-bootstrap'].join('|');

module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    "transform": {
        "\\.[jt]sx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    moduleDirectories: ["node_modules", "src"],
};