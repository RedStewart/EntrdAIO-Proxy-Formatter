document.getElementById("formatBtn").addEventListener("click", () => {
  const textArea = document.getElementById("textArea");
  let proxyArr = textArea.value.split("\n");
  let formattedArr = proxyArr.map((el) => {
    let splitArr = el.split(":");
    return `${splitArr[2]}:${splitArr[3]}@${splitArr[0]}:${splitArr[1]}`;
  });
  formattedArr = formattedArr.join("\n");
  textArea.value = formattedArr;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  document.getElementById("textArea").select();
  document.execCommand("copy");
});
