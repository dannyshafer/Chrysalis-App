# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150808033100) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "industries", force: :cascade do |t|
    t.string   "name"
    t.float    "eps"
    t.float    "pe"
    t.float    "pbook"
    t.float    "psales"
    t.float    "markcap"
    t.float    "peg"
    t.float    "book_value"
    t.float    "shares"
    t.float    "graham_number"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "stocks", force: :cascade do |t|
    t.string   "ticker"
    t.string   "name"
    t.string   "industry"
    t.float    "eps"
    t.float    "pe"
    t.float    "pbook"
    t.float    "psales"
    t.float    "markcap"
    t.float    "ask"
    t.float    "bid"
    t.float    "peg"
    t.float    "graham_number"
    t.float    "shares"
    t.float    "book_value"
    t.float    "eps_v_ind"
    t.float    "pe_v_ind"
    t.float    "pbook_v_ind"
    t.float    "psales_v_ind"
    t.float    "markcap_v_ind"
    t.float    "peg_v_ind"
    t.float    "graham_number_v_ind"
    t.float    "shares_v_ind"
    t.float    "book_value_v_ind"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
  end

end
