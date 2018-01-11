$(document).ready(() => {
  $("#fonts-colors").click((e) => {
    $("body").toggleClass("access");
  });
  $("#font-down").click((e) => {
    let size = $("body").attr("style").split(" ");
    size = size[1].split("e");
    size = Number(size[0]);
    size = size -= 0.2;
    $("body").attr("style", "font-size: " + size + "em;");
  });
  $("#font-up").click((e) => {
    let size = $("body").attr("style").split(" ");
    size = size[1].split("e");
    size = Number(size[0]);
    size = size += 0.2;
    $("body").attr("style", "font-size: " + size + "em;");
  });
});