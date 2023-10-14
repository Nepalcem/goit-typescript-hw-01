import { concatenation } from "./concat";
const button = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector(".input-text");
if (button && input) {
    button.addEventListener("click", () => {
        output.textContent = concatenation("hello!", input.value);
    });
}
//# sourceMappingURL=index.js.map