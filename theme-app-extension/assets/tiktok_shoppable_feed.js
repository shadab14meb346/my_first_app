(function () {
  console.log("JS Injected");
  const URL =
    "https://sheet.best/api/sheets/bd370767-b278-4aa0-bab3-ccab8ed0d4da";
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data, "from");
    const section = document.getElementById("tiktok-shoppable-feed-shadab");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = data[0].name;
    section.appendChild(newDiv);
    return data;
  };
  getData();
})();
