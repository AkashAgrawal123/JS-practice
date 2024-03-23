const dialog = document.querySelector("dialog");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


// if we will write "dialog.show();" then we wont get default overlay kind of thing but if we
// will write "dialog.showModal();", then default overlay will also come.

// currently, on window load modal is opening without overlay effect and once we will click on
// close button and then again open then it will open with overlay effect.
// so here we need to stop default modal opening fucntionality on window laod which can be
// done by applying some styles - display: none, and on open button click can add
// display: block, property.