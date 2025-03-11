import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wubtzzckkvtenqdlicfw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1YnR6emNra3Z0ZW5xZGxpY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MDgzMzAsImV4cCI6MjA1NzI4NDMzMH0.8xFGapGUO_MyuMZLadFiCK77f-UZkjFalwMJKETAGYE'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books, error } = await supabase
  .from('books')
  .select('*')

for(let book of books){
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title}</li>`;
}