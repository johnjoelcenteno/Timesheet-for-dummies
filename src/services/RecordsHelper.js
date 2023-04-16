import axios from "axios";

class RecordsAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getWeather() {
    try {
      const response = await axios.get(`${this.baseUrl}/WeatherForecast`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllRecords() {
    try {
      const response = await fetch(`${this.baseUrl}/records`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getRecordById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/records/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async createRecord(action, hours, date, company) {
    try {
      const response = await axios.post(`${this.baseUrl}/records/create`, {
        action,
        hours,
        date,
        company,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateRecord(id, action, hours, date, company) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/records/update/${id}`,
        {
          action,
          hours,
          date,
          company,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteRecord(id) {
    try {
      const response = await axios.post(`${this.baseUrl}/records/delete/${id}`);
      return response.status === 204;
    } catch (error) {
      console.error(error);
    }
  }
}

export default RecordsAPI;
