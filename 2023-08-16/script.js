const updateValues = () => {
    let pageWidth = window.innerWidth;
    let elemWidth = document.querySelector(".element").clientWidth;
  
    document.querySelector(".window").innerText = pageWidth + "px";
    document.querySelector(".actual").innerText = elemWidth + "px";
  
    checkWidth(elemWidth);
  };
  
  const checkWidth = (elemWidth) => {
    const minVal = parseInt(document.querySelector(".min").innerText, 10);
  
    if (elemWidth < minVal) {
      document.querySelector(".min").classList.remove("highlight");
      document.querySelector(".max").classList.add("highlight");
    } else {
      document.querySelector(".max").classList.remove("highlight");
      document.querySelector(".min").classList.add("highlight");
    }
  };
  
  updateValues();
  window.onresize = updateValues;
  