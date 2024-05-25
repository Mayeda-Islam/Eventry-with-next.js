export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map((item) => {
    const { _id } = item;
    return { id: _id.toString(), ...item };
  });
  return mappedArray;
};
export const replaceMongoIdInObject = (obj) => {
  const { _id } = obj;
  return {
    id: _id.toString(),
    ...obj,
  };
};
