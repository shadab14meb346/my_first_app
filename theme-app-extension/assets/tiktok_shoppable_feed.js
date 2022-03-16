(function () {
  console.log("JS Injected");
  const URL =
    "https://sheet.best/api/sheets/bd370767-b278-4aa0-bab3-ccab8ed0d4da";
  const handleImageClick = (url) => {
    const image = e.target;
    const modal = document.getElementById("shadab-tiktok-modal");
  };
  const getData = async () => {
    // const response = await fetch(URL);
    // const data = await response.json();
    // console.log(data, "from");
    const feedSection = document.getElementById("tiktok-shoppable-feed-shadab");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div style="display: flex;">
      <img
        src="https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1deee6dbd21b4064aef8f43ff87934a1_1647280315?x-expires=1647349200&x-signature=InrErHWTYWVkbaC1X5uERGANJAU%3D"
        style="height: 400px; border-radius: 8px; margin-right: 13px;"
      />
      <img
        src="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/051a7caa1c984ced9fddb55f720eeead_1647249721?x-expires=1647349200&x-signature=FOmBoxgSf0NvQxG8dMg%2F7KxlnCo%3D"
        style="height: 400px; border-radius: 8px; margin-right: 13px;"
      />
      <img
        src="https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1deee6dbd21b4064aef8f43ff87934a1_1647280315?x-expires=1647349200&x-signature=InrErHWTYWVkbaC1X5uERGANJAU%3D"
        style="height: 400px; border-radius: 8px; margin-right: 13px;"
      />
      <img
        src="https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1deee6dbd21b4064aef8f43ff87934a1_1647280315?x-expires=1647349200&x-signature=InrErHWTYWVkbaC1X5uERGANJAU%3D"
        style="height: 400px; border-radius: 8px; margin-right: 13px;"
      />
      <img
        src="https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1deee6dbd21b4064aef8f43ff87934a1_1647280315?x-expires=1647349200&x-signature=InrErHWTYWVkbaC1X5uERGANJAU%3D"
        style="height: 400px; border-radius: 8px; margin-right: 13px;"
      />
    </div>`;
    feedSection.appendChild(newDiv);
  };
  getData();
})();
