export function cls(obj) {
  const classes = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      classes.push(key);
    }
  });

  return classes;
}
