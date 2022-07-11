export const NewTab = () => {
  window.open("https://www.youtube.com/watch?v=LLFhKaqnWwk", "_blank");
};

export const newFunction = (data, page) => {
  page.setState({
    text: data,
  });
};
