import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteApi {
  static async create(note) {
    const response = await axios.post(`${BASE_URL}`, note);
    return response.data;
  }
  static async fetachAll() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  }
  static async fetchById(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  }
  static async delete(id) {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  }
  static async update(note) {
    const response = await axios.put(`${BASE_URL}/${note.id}`, note);
    return response.data;
  }
}
