export default (data) => {
  let error = {};
  if (!data.email.includes("@")) {
    error.e1 = "Email is not valid ";
  }
  if (!data.email) {
    error.e2 = "Ingrese email";
  }
  if (data.email.length > 35) {
    error.e3 = "no puede tener mas de 35 caracteres";
  }
  if (!/\d/.test(data.password)) {
    error.p1 = "al menos debe tener un numero";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    error.p2 = "Longitud incorrecta";
  }
  return error;
};
