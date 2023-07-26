import { Counter } from "./counter.js";
//Instance of the Counter Class
var CounterObj = new Counter();
//Element References
var IncrementBtn = document.getElementById("increment-counter-btn");
var CounterVal = document.getElementById("counter-value");
var ResetBtn = document.getElementById("reset-counter-btn");
//Listen for Increment Button to be clicked
IncrementBtn === null || IncrementBtn === void 0 ? void 0 : IncrementBtn.addEventListener("click", () => {
    CounterObj.IncrementCounterByOne();
    RefreshDisplay();
});
//Listen for Reset Button to be clicked
ResetBtn === null || ResetBtn === void 0 ? void 0 : ResetBtn.addEventListener("click", () => {
    CounterObj.ResetCounter();
    RefreshDisplay();
});
//Set CounterVal Element equal to counter count
function RefreshDisplay() {
    if (CounterVal != null)
        CounterVal.innerText = CounterObj.GetCount().toString();
}
