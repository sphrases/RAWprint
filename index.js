const filesArray = [];

function handleFileSelect(evt) {
  const files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  const output = [];
  let reader = new FileReader(files[0]);

  reader.readAsDataURL(files[0]);
  console.log(reader);
}

$("#files").change(evt => handleFileSelect(evt));
