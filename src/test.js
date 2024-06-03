import { createClient } from '@supabase/supabase-js';

// Import the Supabase client
const supabaseUrl = 'https://wdihrezybypolubipgna.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaWhyZXp5Ynlwb2x1YmlwZ25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczOTE4MjcsImV4cCI6MjAzMjk2NzgyN30.ZzIpwKN3cvFjbAseZk3tAUG2vmhK6LtHGD2efkLxyWE'

// Create a Supabase client instance
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fetch the rows from the "learning_targets" table
export async function fetchLearningTargets() {
    try {
        const { data, error } = await supabase.from('learning_standards').select('*');

        if (error) {
            throw new Error(error.message);
        }
        else{
            return data;
        }
        
        // Iterate over the rows and display them on the screen
        for (const row of data) {
            console.log(data); // Replace this with your own display logic
        }
    } catch (error) {
        console.error('Error fetching learning targets:', error);
    }
}

export async function addToLearningTargets(name, ed_criteria, ex_criteria, de_criteria, em_criteria) {
    try {
        const { data, error } = await supabase.from('learning_standards').insert(
            { 
                name: name,
                ed_criteria: em_criteria,
                ex_criteria: de_criteria,
                de_criteria: ex_criteria,
                em_criteria: ed_criteria,
             }
        );

        console.log(data)
        
        if (error) {
            throw new Error(error.message);
        }
        
        console.log('Learning target added successfully:', data);
    } catch (error) {
        console.error('Error adding learning target:', error);
    }
}

// Call the fetchLearningTargets function to start fetching and displaying the rows
// addToLearningTargets('asd', 'asd', 'asd', 'asd', 'asd');
fetchLearningTargets();