# invoice-generator

## Models

- User
- Invoice
- WorkItem
- InvoicePayment
- Buyer

## User Stories

- AAU I want to create a new invoice.
- AAU I want to add a work item to my invoice.
- AAU I want to edit a work item to my invoice.
- AAU want to delete a work item to my invoice.

- AAU I want to record a payment on my invoice.
- AAU I want to see the outstanding total of my invoice.
- AAU I want to add the buyer to the invoice.
- Extra: [AAU I want to get a printable version (PDF) of the invoice.]
- Extra: [AAU I want to see which buyers owe me what money]

## Model Detail

### User

- name
- address
- has many invoices
- has many buyers

### Buyer

- name
- address
- has many invoices
- belongs to a user

### Invoice

- has many WorkItems
- has many invoicePayment
- has a invoice number
- has a logo (Gravatar API maybe)
- Invoice Data
- Due Data
- Notes

### Work Item

- Description
- Quantity
- Rate
- Amount