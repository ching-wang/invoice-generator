class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.string :logo
      t.string :invoiceNumber
      t.date :invoiceDate
      t.date :duedate
      t.string :notes
      t.references :user, null: false, foreign_key: true
      t.references :buyer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
