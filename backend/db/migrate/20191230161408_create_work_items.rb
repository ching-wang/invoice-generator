class CreateWorkItems < ActiveRecord::Migration[6.0]
  def change
    create_table :work_items do |t|
      t.string :description
      t.decimal :quantity
      t.decimal :amount
      t.references :invoice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
