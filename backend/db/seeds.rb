# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_a = User.create(name: "Grumpy McCat", address: "User Water Street, User City")
user_b = User.create(name: "Grumpy McDog", address: "User Water Street, User City")

buyer_a = Buyer.create(name: "Chris", address: "Buyer Water Street, Buyer City")
buyer_b = Buyer.create(name: "TongTong", address: "Buyer Water Street, Buyer City")

inv_a = Invoice.create(
  logo: "https://dynamic.brandcrowd.com/asset/logo/522494d1-50ee-4316-bbc9-58b1f90bab5e/",
  invoiceNumber: "89754322",
  invoiceDate: 20191208,
  duedate: 20200110,
  notes: "this is the first invoice",
  user_id: user_a.id,
  buyer_id: buyer_a.id,
)

inv_b = Invoice.create(
  logo: "https://cdn.dribbble.com/users/617587/screenshots/4753797/tandem800x600_v1_1x.png",
  invoiceNumber: "45677889",
  invoiceDate: 20181208,
  duedate: 20190110,
  notes: "this is the second invoice",
  user_id: user_b.id,
  buyer_id: buyer_b.id,
)

inv_c = Invoice.create(
  logo: "https://d1.awsstatic.com/case-studies/Flatiron%20Logo.cfea1e05f55b890e20228e5eef33a2ea2053864f.png",
  invoiceNumber: "898888888",
  invoiceDate: 20200102,
  duedate: 20200201,
  notes: "This is a test notes",
  user_id: user_b.id,
  buyer_id: buyer_b.id,
)

workItem_a = WorkItem.create(
  description: "Server Maintain",
  quantity: 10,
  rate: 600,
  amount: 600,
  invoice_id: inv_a.id,
)

workItem_b = WorkItem.create(
  description: "Web Maintain",
  quantity: 6,
  rate: 10,
  amount: 16,
  invoice_id: inv_a.id,
)

workItem_c = WorkItem.create(
  description: "ISO900 Auditing",
  quantity: 1,
  rate: 500,
  amount: 500,
  invoice_id: inv_b.id,
)

workItem_d = WorkItem.create(
  description: "Web Design",
  quantity: 8,
  rate: 100,
  amount: 800,
  invoice_id: inv_b.id,
)

workItem_e = WorkItem.create(
  description: "Books",
  quantity: 2,
  rate: 100,
  amount: 200,
  invoice_id: inv_b.id,
)

workItem_f = WorkItem.create(
  description: "Gardening",
  quantity: 4,
  rate: 100,
  amount: 400,
  invoice_id: inv_a.id,
)

workItem_g = WorkItem.create(
  description: "Test Items 1",
  quantity: 5,
  rate: 100,
  amount: 500,
  invoice_id: inv_b.id,
)

workItem_h = WorkItem.create(
  description: "Test Items 2",
  quantity: 1,
  rate: 100,
  amount: 100,
  invoice_id: inv_c.id,
)

workItem_i = WorkItem.create(
  description: "Test Items 3",
  quantity: 2,
  rate: 100,
  amount: 200,
  invoice_id: inv_c.id,
)

workItem_j = WorkItem.create(
  description: "Test Items 4",
  quantity: 2,
  rate: 100,
  amount: 200,
  invoice_id: inv_a.id,
)
