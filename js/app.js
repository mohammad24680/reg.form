var db = [];
var count;
var ss;
var bb;
var txt;

function _check() {
  var i = 0;
  $(".login>label").fadeOut();
  db = [$(".login>input:eq(0)").val(), $(".login>input:eq(1)").val()];
  console.log(db);
  if (
    db[0].search(/@/) < 3 ||
    db[0].search(/@/) + 3 >= db[0].search(/[.]/) ||
    db[0].length < db[0].search(/[.]/) + 4
  ) {
    $(".login>label:eq(0)").fadeIn(500);
    i++;
  }
  if (count != 3) {
    i++;
    $(".login>label:eq(1)").fadeIn();
  }
  if (i > 0) {
    return false;
  }
}

function _checkpass() {
  count = 0;
  db[1] = $(".login>input:eq(1)").val();
  if (db[1].length >= 8 || db[1].search(/[a-z]/i) >= 0) {
    count++;
  }
  if (db[1].search(/[A-Z]/) >= 0 || db[1].search(/[1-9]/) >= 0) {
    count++;
  }
  if (db[1].search(/[~!@#$%^&*()_+]/) >= 0) {
    count++;
  }
  switch (count) {
    case 0:
      txt = "please fill out this field";
      $(".login>label:eq(1)").css("color", "red");
      break;
    case 1:
      txt = "low level";
      $(".login>label:eq(1)").css("color", "red");
      break;
    case 2:
      txt = "medium level";
      $(".login>label:eq(1)").css("color", "yellow");
      break;
    case 3:
      txt = "high level";
      $(".login>label:eq(1)").css("color", "green");
      break;
  }
  console.log(txt);
  $(".login>label:eq(1)").fadeIn().text(txt);
}

function _check2() {
  ss = 0;
  var i = 0;
  $(".register>label").fadeOut();
  db = [
    $(".register>input:eq(0)").val(),
    $(".register>input:eq(1)").val(),
    $(".register>input:eq(2)").val(),
  ];
  console.log(db);
  if (db[0].length >= 1 && db[0].length <= 40) {
    ss++;
  }
  if (db[0].length > 4) {
    ss++;
  }
  switch (ss) {
    case 0:
      txt = "please fill out this field";
      $(".register>label:eq(0)").css("color", "red");
      break;
    case 1:
      txt = "please Use more caracter";
      $(".register>label:eq(0)").css("color", "red");
      break;
    case 2:
      txt = "";
      $(".register>label:eq(0)").css("color", "green");
      break;
  }
  $(".register>label:eq(0)").fadeIn().text(txt);

  if (ss != 2) {
    i++;
    $(".register>label:eq(0)").fadeIn();
  }

  console.log(db[0]);

  if (
    db[1].search(/@/) < 3 ||
    db[1].search(/@/) + 3 >= db[1].search(/[.]/) ||
    db[1].length < db[1].search(/[.]/) + 4
  ) {
    $(".register>label:eq(1)").fadeIn(500);
    i++;
  }
  if (count != 3) {
    i++;
    $(".register>label:eq(2)").fadeIn();
  }
  if (i > 0) {
    return false;
  }
}

function _checkpass2() {
  count = 0;
  db[2] = $(".register>input:eq(2)").val();
  if (db[2].length >= 8 || db[2].search(/[a-z]/i) >= 0) {
    count++;
  }
  if (db[2].search(/[A-Z]/) >= 0 || db[2].search(/[1-9]/) >= 0) {
    count++;
  }
  if (db[2].search(/[~!@#$%^&*()_+]/) >= 0) {
    count++;
  }
  switch (count) {
    case 0:
      txt = "please fill out this field";
      $(".register>label:eq(2)").css("color", "red");
      break;
    case 1:
      txt = "low level";
      $(".register>label:eq(2)").css("color", "red");
      break;
    case 2:
      txt = "medium level";
      $(".register>label:eq(2)").css("color", "yellow");
      break;
    case 3:
      txt = "high level";
      $(".register>label:eq(2)").css("color", "green");
      break;
  }
  console.log(txt);
  $(".register>label:eq(2)").fadeIn().text(txt);
}

$(".to-left").click(function () {
  $(".sign-in2").css("left", "10%");
  $(".description").css({
    left: "0%",
    "box-shadow":
      "-50px -10px 40px rgb(22 20 19 / 14%), 20px 20px 40px rgb(22 20 19 / 14%)",
  });
  $(".sign-up2").css({
    opacity: "1",
    left: "43%",
    "z-index": "30",
  });
  $(".register").css("opacity", "1");
  $(".login").css("opacity", "0");
  $(".sign-in2").css("opacity", "0");
  $(".description>div:nth-of-type(1)").css("display", "none");
  $(".description2").css("display", "block");
});

$(".to-right").click(function () {
  $(".sign-in2").css("left", "0%");
  $(".description").css({
    left: "57%",
    "box-shadow":
      "15px -10px 40px rgb(22 20 19 / 14%), 20px 20px 40px rgb(22 20 19 / 14%)",
  });
  $(".sign-in2").css("opacity", "1");
  $(".login").css("opacity", "1");
  $(".sign-up2").css({
    opacity: "0",
    left: "33%",
    "z-index": "10",
  });
  $(".register").css("opacity", "0");
  $(".description2").css("display", "none");
  $(".description>div:nth-of-type(1)").css("display", "block");
});
