document.getElementById("clickMe").addEventListener("click", (e) => start(e));

function start(e) {
  if (e) e.preventDefault();
  console.clear();

  var fileInput = document.getElementById("fileInput");
  var fileDisplayArea = document.getElementById("fileDisplayArea");

  var file = fileInput.files[0];
  var textType = /text.*/;

  if (!file) return;

  if (file.type.match(textType)) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var content = reader.result;
      //Here the content has been read successfuly
      count_occurs(content, count);
    };

    reader.readAsText(file);
  } else {
    fileDisplayArea.innerText = "File not supported!";
  }
}

function entropia(ans, Palphabet) {
  const rangeSlider = document.getElementById("rangeSlider");

  let h = 0;

  for (i = 0; i < Palphabet.length; i++) {
    h += Palphabet[i] * Math.log2(Palphabet[i]);
  }

  h = -h;

  fileDisplayArea.innerText = h.toFixed(rangeSlider.value);
  fileDisplayArea.classList.add("active");
}

function pithanothtes(ans) {
  let i = 0;
  let Palphabet = [];
  let sum = 0;

  let gridContainer = document.getElementById("gridContainer");
  const gridTitles = document.getElementsByClassName("grid-title");

  gridContainer.scrollTo(0, 0);

  gridContainer.innerHTML = '<div class="grid-title">Key</div>';
  gridContainer.innerHTML += '<div class="grid-title">Probability</div>';

  //sum of characters
  for (let [key, value] of ans) {
    sum += value;
  }

  for (let [key, value] of ans) {
    // if()

    gridContainer.innerHTML += `<div class="Key">"${key}"</div>`;
    //console.log(`"${key}"  occurs  ${value} times`);
    Palphabet[i] = value / sum;
    //console.log("Chance: " + Palphabet[i]);
    gridContainer.innerHTML += `<div class="Probability">${Palphabet[i]}</div>`;

    i++;
  }

  entropia(ans, Palphabet);
}

// function count occurrence of character
function count(str, outp_map) {
  for (let i = 0; i < str.length; i++) {
    let k = outp_map.get(str[i]);
    outp_map.set(str[i], k + 1);
  }
  //calling  print function
  pithanothtes(outp_map);
}

//function create map to count character
function count_occurs(test, callback) {
  //checking string is valid or not
  if (test.length === 0) {
    console.log(" empty string ");
    return;
  } else {
    // map for storing count values
    let ans = new Map();
    for (let i = 0; i < test.length; i++) {
      ans.set(test[i], 0);
    }

    callback(test, ans);
  }
}

function rangeSlideMove(value) {
  document.getElementById("rangeValue").innerHTML = value + " decimals";
}

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value + " decimals";
  start();
}
