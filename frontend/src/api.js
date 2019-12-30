class InvoiceGeneratorApi {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  async getInvoices() {
    return this.fetchJson("/invoices");
  }

  async getInvoice(invoiceId) {
    return this.fetchJson(`/invoices/${invoiceId}`);
  }

  async fetchJson(path) {
    const url = this.makeUrl(path);
    debugLog("API fetching URL...", { url });

    const res = await fetch(url);
    const json = await res.json();
    debugLog("API got response", { url, status: res.status, json });

    return json;
  }

  makeUrl(path) {
    return `${this.baseUrl}${path}`;
  }
}
