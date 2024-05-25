export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map((item) => {
    const { _id } = item;
    return { id: _id.toString(), ...item };
  });
  return mappedArray;
};
