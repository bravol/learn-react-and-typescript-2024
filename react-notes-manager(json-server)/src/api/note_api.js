import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteApi {
  static async create(note) {
    const response = await axios.post(`${BASE_URL}`, note);
    return this.formatId(response.data);
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
  static async update(id, note) {
    const response = await axios.patch(`${BASE_URL}/${id}`, note);
    return response.data;
  }

  //use this function only if the id is not a string
  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
