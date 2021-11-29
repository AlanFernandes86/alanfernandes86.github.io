/* 
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ). */

window.onload = () => {
  const main = document.querySelector("main");
  const title = document.querySelector(".title h1");
  const subtitle = document.querySelectorAll(".title p");
  const textMain = document.querySelectorAll(".text p");
  let preferences = {
      main: {},
      title: {},
      subtitle: {},
      textMain: {},
  };

  init();
  setMenu();
  backgroundColorListener();
  textColorListener();
  textSizeListener();
  lineHeightListener();
  fontTypeListener();

  function init() {
    if (localStorage) {
      if (localStorage.preferences !== undefined) {
        preferences = JSON.parse(localStorage.preferences);
        console.log(preferences);
        for (let key1 in preferences) {
          for (let key2 in preferences[key1]){
              setStyle(key1, key2, preferences[key1][key2])
          }
        }
      }
    } else {
      alert("Não foi possível acessar o Local Storage");
    }

    // https://qastack.com.br/programming/5613834/convert-string-to-variable-name-in-javascript
    function setStyle(elementName, style, value) {
      let element = eval(elementName);
      if (element instanceof NodeList) {
        element.forEach((element) => {
          element.style[style] = value;
        });
      } else {
        element.style[style] = value;
      }
    }
  }

  function setMenu() {
    const menu = document.getElementById("menu");
    const menuList = document.querySelectorAll(".menu-item");
    let auxToggle = {};

    function random255() {
      return Math.random() * 255;
    }

    menuList.forEach((item) => {
      const color = `rgb(${random255()},${random255()},${random255()})`;
      const selected = false;
      auxToggle[item.id] = { color, selected };
    });

    console.log(auxToggle);
    console.log(menuList);

    menu.onclick = (event) => {
      if (event.target.id != "menu") {
        menuToggle(event.target);
      }
    };

    function menuToggle(target) {
      let targetSection = document.getElementById(
        target.attributes.section.nodeValue
      );
      if (auxToggle[target.id].selected) {
        target.style = "";
        auxToggle[target.id].selected = false;
        targetSection.style.display = "none";
      } else {
        target.style.color = auxToggle[target.id].color;
        target.style = `border-right: solid 2px ${
          auxToggle[target.id].color
        }; padding-right: 4px; color: white;`;
        auxToggle[target.id].selected = true;
        targetSection.style.display = "block";
        targetSection.style.borderColor = auxToggle[target.id].color;
      }
    }
  }

  function backgroundColorListener() {
    const colorPicker = document.getElementById("color-picker");
    const colorPickerInput = document.getElementById("color-picker-input");

    colorPicker.onclick = (event) => {
      colorPickerInput.click();
    };
    colorPickerInput.oninput = (event) => {
      main.style.backgroundColor = event.target.value;
      colorPicker.style.backgroundColor = event.target.value;
    };

    colorPickerInput.onchange = (event) => {
      preferences.main.backgroundColor = event.target.value;
    };
  }

  function textColorListener() {
    const titleColorPick = document.getElementById("title-color");
    const subtitleColorPick = document.getElementById("subtitle-color");
    const textColorPick = document.getElementById("text-color");

    titleColorPick.oninput = (event) => {
      title.style.color = event.target.value;
    };

    subtitleColorPick.oninput = (event) => {
      subtitle.forEach((p) => {
        p.style.color = event.target.value;
      });
    };

    textColorPick.oninput = (event) => {
      textMain.forEach((p) => {
        p.style.color = event.target.value;
      });
    };

    titleColorPick.onchange = (event) => {preferences.title.color = event.target.value};

    subtitleColorPick.onchange = (event) => {preferences.subtitle.color = event.target.value};

    textColorPick.onchange = (event) => {preferences.textMain.color = event.target.value};
  }

  // https://www.ti-enxame.com/pt/javascript/como-obter-o-tamanho-da-fonte-em-html/1070829157/
  function textSizeListener() {
    const titleSizeSlider = document.getElementById("title-size");
    const subtitleSizeSlider = document.getElementById("subtitle-size");
    const textSizeSlider = document.getElementById("text-size");

    initializeSlider();
    
    titleSizeSlider.oninput = (event) => {
        setTextSize(event, title);
      };
      subtitleSizeSlider.oninput = (event) => {
        setTextSize(event, subtitle);
      };
      textSizeSlider.oninput = (event) => {
        setTextSize(event, textMain);
      };

    function initializeSlider() {
      const actualTitleSize = parseInt(window.getComputedStyle(title).fontSize);
      const actualSubtitleSize = parseInt(window.getComputedStyle(subtitle[0]).fontSize);
      const actualTextSize = parseInt(window.getComputedStyle(textMain[0]).fontSize);

      titleSizeSlider.value = actualTitleSize;
      subtitleSizeSlider.value = actualSubtitleSize;
      textSizeSlider.value = actualTextSize;

      titleSizeSlider.nextElementSibling.innerText = `${actualTitleSize < 10 ? 0 : ""}${actualTitleSize}px`;
      subtitleSizeSlider.nextElementSibling.innerText = `${actualSubtitleSize < 10 ? 0 : ""}${actualSubtitleSize}px`;
      textSizeSlider.nextElementSibling.innerText = `${actualTextSize < 10 ? 0 : ""}${actualTextSize}px`;
    }

    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
    function setTextSize(event, element) {
      const valueFormatted = `${event.target.value < 10 ? 0 : ""}${event.target.value}px`;
      event.target.nextElementSibling.innerText = valueFormatted;
      if (element instanceof NodeList) {
        element.forEach((element) => {
          element.style.fontSize = valueFormatted;
        });
      } else {
        element.style.fontSize = valueFormatted;
      }
    }    

    titleSizeSlider.onchange = (event) => { preferences.title.fontSize = event.target.value+'px'; };
    subtitleSizeSlider.onchange = (event) => { preferences.subtitle.fontSize = event.target.value+'px'; };
    textSizeSlider.onchange = (event) => { preferences.textMain.fontSize = event.target.value+'px';};
  }

  function setLineHeight(lineHeight) {
    title.style.lineHeight = lineHeight;
    subtitle.forEach((p) => { 
        p.style.lineHeight = lineHeight;
    });
    textMain.forEach((p) => { 
        p.style.lineHeight = lineHeight;
    });
  }

  // https://www.w3schools.com/jsref/jsref_tofixed.asp
  function lineHeightListener() {
    const plus = document.getElementById("plus-line-height");
    const minus = document.getElementById("minus-line-height");
    const lineHeight = document.getElementById("line-height-value");

    plus.onclick = () => {
      let value = parseFloat(lineHeight.innerText);
      if (value < 2) {
       [lineHeight.innerText, value] = [value + 0.5, value + 0.5];
       setLineHeight(value);
       [preferences.title.lineHeight, preferences.subtitle.lineHeight, preferences.textMain.lineHeight] = [value, value, value];
      }
    };
    minus.onclick = () => {
      let value = parseFloat(lineHeight.innerText);
      if (value > 0.5) {
        [lineHeight.innerText, value] = [value - 0.5, value - 0.5];
        setLineHeight(value);
        [preferences.title.lineHeight, preferences.subtitle.lineHeight, preferences.textMain.lineHeight] = [value, value, value];
      }
    };
  }

  function setFontType(fontType) {
    title.style.fontFamily = fontType;
    subtitle.forEach((p) => { 
        p.style.fontFamily = fontType;
    });
    textMain.forEach((p) => { 
        p.style.fontFamily = fontType;
    });
  }
  // https://www.w3schools.com/css/css_font.asp
  // https://www.w3schools.com/tags/tag_select.asp
  // https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript?rq=1
  function fontTypeListener() {
    const selectFont = document.getElementById("select-font-family");
    fonts.forEach((font) => {
      const option = document.createElement("option");
      option.value = font.name;
      option.innerText = font.name;
      selectFont.appendChild(option);
    });
    selectFont.onchange = (event) => {
      const fontType = `${fonts[event.target.selectedIndex].name}, ${fonts[event.target.selectedIndex].family}`;
      setFontType(fontType);
      [preferences.title.fontFamily, preferences.subtitle.fontFamily, preferences.textMain.fontFamily] = [fontType, fontType, fontType];
    };
  }

  // https://qastack.com.br/programming/13443503/run-javascript-code-on-window-close-or-page-refresh
  window.onbeforeunload = () => {
    localStorage.preferences = JSON.stringify(preferences);
  }  
};

let fonts = [
  { family: "serif", name: "Times New Roman" },
  { family: "serif", name: "Georgia" },
  { family: "serif", name: "Garamond" },
  { family: "sans-serif", name: "Arial" },
  { family: "sans-serif", name: "Verdana" },
  { family: "sans-serif", name: "Helvetica" },
  { family: "monospace", name: "Courier New" },
  { family: "monospace", name: "Lucida Console" },
  { family: "monospace", name: "Monaco" },
  { family: "cursive", name: "Brush Script MT" },
  { family: "cursive", name: "Lucida Handwriting" },
  { family: "fantasy", name: "Copperplate" },
  { family: "fantasy", name: "Papyrus" },
];
