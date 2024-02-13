$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var reset_element = $(".reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    reset_element.removeClass("hidden");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    reset_element.addClass("hidden");
  }
});
