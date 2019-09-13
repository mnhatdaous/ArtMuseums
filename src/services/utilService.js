const userService = {
  parseObject
};

function parseObject(object) {
  return {
    src: object.primaryimageurl,
    thumbnail: object.primaryimageurl,
    caption: object.medium,
    key: object.id,
    ...object
  };
}

export default userService;
