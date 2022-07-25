export const NewTab = (url) => {
  window.open(url, "_blank");
};

export const newFunction = (data, page) => {
  page.setState({
    text: data,
  });
};
