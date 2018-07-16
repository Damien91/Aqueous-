const path = require("path");

const rootDir = path.join(__dirname);
const setupFiles = [];

console.log("rootDir = ", rootDir);
module.exports = {
    rootDir: rootDir,
    collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
    setupFiles: setupFiles,
    testMatch: [
      "<rootDir>/__tests__/**/*.{ts,tsx}",
    ],
    testEnvironment: "node",
    testURL: "http://localhost",
    transform: {
      ".(tsx|ts)": "ts-jest",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
    moduleFileExtensions: ["ts", "json", "tsx", "js", "jsx"]
};
