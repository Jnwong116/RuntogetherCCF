const formatWithCommas = (items) => {
  return items.map((item, idx) =>
    idx !== items.length - 1 ? `${item}, ` : item
  );
};

export { formatWithCommas };
