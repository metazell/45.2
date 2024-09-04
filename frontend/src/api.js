import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get") ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Fetch all companies
  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  // Fetch all jobs
  static async getJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

  // Fetch single company
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Log in user
  static async login(data) {
    let res = await this.request("auth/token", data, "post");
    return res.token;
  }

  // Register user
  static async signup(data) {
    let res = await this.request("auth/register", data, "post");
    return res.token;
  }

  // Apply to a job
  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res;
  }
}

export default JoblyApi;
