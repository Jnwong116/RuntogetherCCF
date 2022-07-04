
function NewTab(){
	window.open("https://www.youtube.com/watch?v=LLFhKaqnWwk", "_blank");
	document.getElementById("my_button").innerHTML = "lol";
}

const names = [
  // const because we only want to make it clear that
  // these are the names to be displayed
  // and that the array won't be switched to another
  "Alaina",
  "Chris",
  "Clayton",
  "Daniel",
  "Ginny",
  "John",
  "Jordan",
  "Julie",
  "Kelvin",
  "Marian",
  "Neo",
  "Riley",
];

const toggle = (button) => {
  if (button.value == "ON") {
    button.value = "OFF";
  } else {
    button.value = "ON"; // button.value starts undefined so we turn it on when it is first clicked
  }
};

const add_names_to_list = () => {
  const list_element = document.getElementById("name_list");
  for (let i = 0; i < names.length; i++) {
    const item = document.createElement("li"); //  create new list item

    item.innerHTML = names[i];

    list_element.appendChild(item); // add name to the list
  }
};

const remove_names_from_list = () => {
  const list_element = document.getElementById("name_list");
  list_element.innerHTML = "";
};

const toggle_names_on_list = () => {
  const list_element = document.getElementById("name_list");

  toggle(list_element);

  if (list_element.value == "ON") {
    add_names_to_list();
  } else {
    remove_names_from_list();
  }
};

