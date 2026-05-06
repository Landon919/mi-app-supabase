import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqlcofsthnnhpahpdyte.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbGNvZnN0aG5uaHBhaHBkeXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NzI1MjksImV4cCI6MjA5MzA0ODUyOX0.ZwEEcerq5_5n91BTMWwPhsV7w0MyZ0KRDmLBg_I820E'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    const { data, error } = await supabase
        .from('Estudiantes')
        .select('*')

    if (error) {
        console.log('Error:', error)
    } else {
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()