(function($) {
  var MaxWidth = window.matchMedia("(max-width: 767.98px)");
  var slideSpeedAnim = 350;
  var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var slideSpeed;
  var slideSpeedInit = function() {
    if (mediaQuery.matches) {
      slideSpeed = 1;
    } else {
      slideSpeed = slideSpeedAnim;
    }
  };
  window.addEventListener("load", slideSpeedInit);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", slideSpeedInit);
  } else if (mediaQuery.attachEvent) {
    mediaQuery.attachEvent("change", slideSpeedInit);
  }
  $(".jq-slide").on("show.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideDown(slideSpeed);
  });
  $(".jq-slide").on("hide.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideUp(slideSpeed);
  });
  $(".jqui-slide").on("show.bs.dropdown", function() {
    if (MaxWidth.matches) {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .slideDown(slideSpeed);
    } else {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .show(
          "slide",
          {
            direction: "up"
          },
          slideSpeed
        );
    }
  });
  $(".jqui-slide").on("hide.bs.dropdown", function() {
    if (MaxWidth.matches) {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .slideUp(slideSpeed);
    } else {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .hide(
          "slide",
          {
            direction: "up"
          },
          slideSpeed
        );
    }
  });
  firebase
    .database()
    .ref("/Bus")
    .once("value")
    .then(function(snap) {
      data = snap.val();
      document.getElementById("title").innerHTML = "Bus no :- " + 111;
      document.getElementById("avgtime").innerHTML =
        "Average time :- " + data[111].avgtime;

      document.getElementById("cap").innerHTML = "Capacity :- " + data[111].cap;
      document.getElementById("lstart").innerHTML =
        "Journey Started :- " + data[111].lstart;
      document.getElementById("occ").innerHTML =
        "Occupancy :- " + data[111].occ;
      document.getElementById("routedistance").innerHTML =
        "Routed Distance :- " + data[111].routedistance;
      var stops = data[111].stops;
      datas = "";
      stops.split("").forEach(d => (datas = datas.concat(d, " -> ")));
      datas = datas.substring(0, datas.length - 3);
      document.getElementById("stops").innerHTML = "Stops :- " + datas;
    });
})(jQuery);


function showBus(no) {
  firebase
    .database()
    .ref("/Bus")
    .once("value")
    .then(function(snap) {
      data = snap.val();
      document.getElementById("title").innerHTML = "Bus no :- " + no;
      document.getElementById("avgtime").innerHTML =
        "Average time :- " + data[no].avgtime;
      document.getElementById("cap").innerHTML = "Capacity :- " + data[no].cap;
      document.getElementById("lstart").innerHTML =
        "Journey Started :- " + data[no].lstart;
      document.getElementById("occ").innerHTML = "Occupancy :- " + data[no].occ;
      document.getElementById("routedistance").innerHTML =
        "Routed Distance :- " + data[no].routedistance;
      var stops = data[no].stops;
      datas = "";
      stops.split("").forEach(d => (datas = datas.concat(d, " -> ")));
      datas = datas.substring(0, datas.length - 3);
      document.getElementById("stops").innerHTML = "Stops :- " + datas;
    });
}
