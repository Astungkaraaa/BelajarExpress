"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_js_1 = require("./application/web.js");
const PORT = process.env.PORT || 3000;
web_js_1.web.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
