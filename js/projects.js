let animating = false;

const nextP = () => {
  if (animating) return;

  animating = true;

  $(".project:nth-child(3)").removeClass("focussed");
  $(".project:nth-child(4)").addClass("focussed");

  $(".project")
    .first()
    .animate({ marginLeft: "-268px" }, function () {
      $(".project").first().css("margin-left", "12px");
      $(".list-container").append($(".project").first());

      animating = false;
    });
};

const prevP = () => {
  if (animating) return;

  animating = true;

  $(".project:nth-child(3)").removeClass("focussed");
  $(".project:nth-child(2)").addClass("focussed");

  $(".project")
    .first()
    .animate({ marginLeft: "292px" }, function () {
      $(".project").first().css("margin-left", "12px");
      $(".list-container").prepend($(".project").last());

      animating = false;
    });
};

$(() => {
  //$("#about").animate({ marginTop: "500px" }, 5000, "linear");
});
