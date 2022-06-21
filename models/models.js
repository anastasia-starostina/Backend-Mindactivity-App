import express from 'express';
import { query } from '../db/index.js';
import { affirmations } from '../lib/data.js'

//Get Affirmation table

export async function getAffirmations() {
    const affirmations = await query(`SELECT * FROM codingAffirmations;`);
    return affirmations.rows
}

//Get Affermations by ID

export async function getAffirmationsById(id) {
    const affirmation = await query(`SELECT * FROM codingAffirmations WHERE id = ($1);`, [id])
    return affirmation.rows
}

//Delete an affirmation by id 
export async function deleteAffirmationById(id) {
    const deletedAffirmation = await query(
        'DELETE FROM codingAffirmations WHERE id = $1 RETURNING *;',
        [id]
    );
}