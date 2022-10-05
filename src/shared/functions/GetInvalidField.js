export const InvalidField = (data, array) => {
  for (const [key, value] of Object.entries(data)) {
    if (!value?.length) {
      array.push("Invalid " + key);
    }
  }
};
