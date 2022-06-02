$(() => {
  let openSkill;

  $(".skill").on("pointerenter", function (e) {
    if (e.pointerType === "touch") {
      if (openSkill) {
        if (openSkill[0] == $(this).find(".desc")[0]) {
          openSkill?.stop().slideUp();
          openSkill = undefined;
          return;
        }
      }

      $(this).find(".desc").stop().slideDown();

      openSkill?.stop().slideUp();
      openSkill = $(this).find(".desc");
    } else {
      $(this).find(".desc").stop().slideDown();
    }
  });

  $(".skill").on("pointerleave", function (e) {
    if (e.pointerType === "mouse") {
      $(this).find(".desc").stop().slideUp();
    }
  });
});
