import Swal from "sweetalert2";

export const showMessage = (icon, message) => {
  Swal.fire({
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
