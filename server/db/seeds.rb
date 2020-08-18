#
#This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

CSV.read(Rails.root.join('db', 'csv', 'universities.csv').to_s).each do |row|
  university = University.find_by(name: row[0])
  next unless university.nil?
  University.create(name: row[0])
end

TAG_LABELS = ['講義', 'サークル']
TAG_LABELS.each do |label|
  tag = Tag.find_by(label: label)
  next unless tag.nil?
  Tag.create(label: label)
end
