class InvoiceGeneratorApi {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  //get invoices
  async getInvoices() {
    return this.fetchJson("/invoices");
  }

  async getInvoice(invoiceId) {
    return this.fetchJson(`/invoices/${invoiceId}`);
  }

  //get users
  async getUsers() {
    return this.fetchJson("/users");
  }

  async getUser(userID) {
    return this.fetchJson(`/${userID}`);
  }

  //get buyers
  async getBuyers() {
    return this.fetchJson("/users");
  }

  async getBuyers(userID) {
    return this.fetchJson(`/${userID}`);
  }

  //get Work-items
  async getWorkItems() {
    return this.fetchJson("/work_items");
  }

  async getWorkItem(workItemID) {
    return this.fetchJson(`${workItemID}`);
  }

  async postInvoice(data) {
    return this.postJson("/invoices", data);
  }

  async patchInvoice(invoiceId, patchData) {
    return this.patchJson(`/invoices/${invoiceId}`, patchData);
  }

  async patchUser(userId, patchData) {
    return this.patchJson(`/users/${userId}`, patchData);
  }

  async fetchJson(path) {
    const url = this.makeUrl(path);
    debugLog("API fetching URL...", { url });

    const res = await fetch(url);
    const json = await res.json();
    debugLog("API got response", { url, status: res.status, json });

    return json;
  }

  async patchJson(path, body) {
    const url = this.makeUrl(path);
    const config = {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    debugLog("API patching URL...", { url, config });

    const res = await fetch(url, config);
    const json = await res.json();
    debugLog("API got response from PATCH", { url, status: res.status, json });

    return json;
  }

  async postJson(path, body) {
    const url = this.makeUrl(path);
    const config = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    debugLog("API posting URL...", { url, config });

    const res = await fetch(url, config);
    const json = await res.json();
    debugLog("API got response from POST", { url, status: res.status, json });

    return json;
  }

  makeUrl(path) {
    return `${this.baseUrl}${path}`;
  }
}
