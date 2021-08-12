import api from "../config";

function signin(data) {
  return api({
    url: "/session",
    data: data,
    method: "POST",
  });
}

export { signin };
