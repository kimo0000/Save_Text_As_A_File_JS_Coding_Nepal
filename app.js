const textArea = document.querySelector("#textarea");
const fileName = document.querySelector(".fil_name input");
const select = document.querySelector(".save_as select");
const btnSave = document.querySelector(".save");

console.log(textArea, select);

select.addEventListener("change", () => {
  let selectOption = select.options[select.selectedIndex].text;
  // console.log(selectOption.split(' ')[0]);
  btnSave.innerText = `Save As ${selectOption.split(" ")[0]} File`;
});

btnSave.addEventListener("click", () => {
  const blob = new Blob([textArea.value], { type: select.value });
  const fileURL = URL.createObjectURL(blob);
  // console.log(fileURL);
  const link = document.createElement("a");
  link.download = fileName.value;
  link.href = fileURL;
  link.click();
});
