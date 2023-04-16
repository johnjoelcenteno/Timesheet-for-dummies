import axios from "axios";

class RecordsControllerAPI {
  constructor(baseUrl) {
    this.BaseUrl = baseUrl;
  }
  async GetAllRecords() {
    // TODO: must return and catch status
    const url = `${this.BaseUrl}/api/Records/GetAll`;
    const { data } = await axios.get(url);
    return data;
  }

  async CreateRecord(payload) {
    const url = `${this.BaseUrl}/api/Records/Create`;
    const { data } = await axios.post(url, payload);
    return data;
  }

  async DeleteRecord(id) {
    const url = `${this.BaseUrl}/api/Records(${id})/Delete`;
    const { data } = await axios.post(url);
    return data;
  }

  async UpdateRecord(id, payload) {
    const url = `${this.BaseUrl}/api/Records(${id})/Update`;
    const { data } = await axios.post(url, payload);
    return data;
  }
}

export default RecordsControllerAPI;
