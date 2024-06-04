import Swal from "sweetalert2";

export async function toast(type, msg) {
  return await Swal.fire({
    position: "top-end",
    icon: type,
    title: msg,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
  });
}
