const t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.startButton.addEventListener("click",(function(){o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log("start")})),t.stopButton.addEventListener("click",(function(){clearInterval(o),console.log("stop")}));let o=null;
//# sourceMappingURL=01-color-switcher.521d96d3.js.map