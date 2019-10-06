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
    .on("value", function(snap) {
      data = snap.val();
      document.getElementById("title").innerHTML = "Bus no :- " + 111;
      document.getElementById("avgtime").innerHTML =
        "<b>" + "Average time :- " + "</b>" + data[111].avgtime;

      document.getElementById("cap").innerHTML =
        "<b>" + "Capacity :- " + "</b>" + data[111].cap;
      document.getElementById("lstart").innerHTML =
        "<b>" + "Journey Started :- " + "</b>" + data[111].lstart;
      document.getElementById("occ").innerHTML =
        "<b>" + "Occupancy :- " + "</b>" + data[111].occ;
      document.getElementById("routedistance").innerHTML =
        "<b>" + "Routed Distance :- " + "</b>" + data[111].routedistance;
      var stops = data[111].stops;
      datas = "";
      stops.split("").forEach(d => {
        if (d == 1) d = "Prashant Vihar";
        else if (d == 2) d = "Rohini Court Subway";
        else if (d == 3) d = "Madhuban Chowk";
        else if (d == 4) d = "Pitampura Metro";
        else if (d == 5) d = "Kohat Enclave";
        else if (d == 6) d = "ND Block";
        else if (d == 7) d = "Netaji Subhash Place";
        datas = datas.concat(d, " -> ");
      });
      datas = datas.substring(0, datas.length - 3);
      document.getElementById("stops").innerHTML =
        "<b>" + "Stops :- " + "</b>" + datas;
    });
})(jQuery);
function showBus(no) {
  firebase
    .database()
    .ref("/Bus")
    .on("value", function(snap) {
      data = snap.val();
      document.getElementById("title").innerHTML = "Bus no :- " + no;
      document.getElementById("avgtime").innerHTML =
        "<b>" + "Average time :- " + "</b>" + data[no].avgtime;
      document.getElementById("cap").innerHTML =
        "<b>" + "Capacity :- " + "</b>" + data[no].cap;
      document.getElementById("lstart").innerHTML =
        "<b>" + "Journey Started :- " + "</b>" + data[no].lstart;
      document.getElementById("occ").innerHTML =
        "<b>" + "Occupancy :- " + "</b>" + data[no].occ;
      document.getElementById("routedistance").innerHTML =
        "<b>" + "Routed Distance :- " + "</b>" + data[no].routedistance;
      var stops = data[no].stops;
      datas = "";
      stops.split("").forEach(d => {
        if (d == 1) d = "Prashant Vihar";
        else if (d == 2) d = "Rohini Court Subway";
        else if (d == 3) d = "Madhuban Chowk";
        else if (d == 4) d = "Pitampura Metro";
        else if (d == 5) d = "Kohat Enclave";
        else if (d == 6) d = "ND Block";
        else if (d == 7) d = "Netaji Subhash Place";
        datas = datas.concat(d, " -> ");
      });
      datas = datas.substring(0, datas.length - 3);
      document.getElementById("stops").innerHTML =
        "<b>" + "Stops :- " + "</b>" + datas;
    });
}
