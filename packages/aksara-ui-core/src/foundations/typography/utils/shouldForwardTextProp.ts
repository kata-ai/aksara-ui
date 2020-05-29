const shouldForwardTextProp = (prop: string) => {
  return !['scale'].includes(prop);
};

export default shouldForwardTextProp;
