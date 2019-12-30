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
  user_id: user_a,
  buyer_id: buyer_a,
)

inv_b = Invoice.create(
  logo: "https://dynamic.brandcrowd.com/asset/logo/522494d1-50ee-4316-bbc9-58b1f90bab5e/",
  invoiceNumber: "45677889",
  invoiceDate: 20181208,
  duedate: 20190110,
  notes: "this is the second invoice",
  user_id: user_b.id,
  buyer_id: buyer_b.id,
)

workItem_a = WorkItem.create(
  description: "web maintain",
  quantity: 10,
  rate: 60,
  amount: 70,
  invoice_id: inv_a.id,
)

workItem_b = WorkItem.create(
  description: "water",
  quantity: 6,
  rate: 10,
  amount: 16,
  invoice_id: inv_a.id,
)

workItem_c = WorkItem.create(
  description: "QA",
  quantity: 1,
  rate: 50,
  amount: 60,
  invoice_id: inv_b.id,
)

workItem_d = WorkItem.create(
  description: "curtains",
  quantity: 8,
  rate: 100,
  amount: 800,
  invoice_id: inv_b.id,
)
