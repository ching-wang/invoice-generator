# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

buyers = [
  {
    id: 1,
    userId: 1,
    name: "Buyer McCurtains",
    address: "18 Buyer Street, Buyer City",
  },
  {
    id: 2,
    userId: 1,
    name: "Buyer McWater",
    address: "18 Water Street, Water City",
  },
]

users =
  [
    {
      id: 1,
      name: "Grumpy McCat",
      address: "42 Fake Street, Fake City",
    },
  ]

workItem = [
  {
        id: 1,
        invoiceId: 1,
        description: "Choosing curtains",
        rate: 60,
        amount: 2.5,
      },
  {
        id: 2,
        invoiceId: 1,
        description: "Curtains",
        rate: 180,
        amount: 1,
      },
  {
        id: 3,
        invoiceId: 2,
        description: "Water",
        rate: 888,
        amount: 2,
      },
]

invoices =

  [
    {
          id: 1,
          userId: 1,
          buyerId: 1,
          invoiceNumber: "12345",
          logoUrl: "https://dynamic.brandcrowd.com/asset/logo/522494d1-50ee-4316-bbc9-58b1f90bab5e/",
        },
    {
          id: 2,
          userId: 1,
          buyerId: 2,
          invoiceNumber: "45678",
          logoUrl: "https://dynamic.brandcrowd.com/asset/logo/522494d1-50ee-4316-bbc9-58b1f90bab5e/",
        },
  ]
