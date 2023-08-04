export const handleEdit = (evt: any) => {
  try {
    console.log('Edit detected! Data:\n' + JSON.stringify(evt));
  } catch (error) {
    console.error(error);
  }
};
