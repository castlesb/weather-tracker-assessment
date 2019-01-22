import { Measurement } from './measurement';
import { HttpError } from '../errors';

// Array to store measurements
const store = [];

/**
 * Add new measurement
 * @param {Measurement} measurement to be added
 */
export function add(measurement) {
  store.push(measurement);
}

/**
 * Get existing measurement
 * @param {Date} timestamp when measurement was taken
 * @returns {Measurement} measurement for the particular date
 */
export function fetch(timestamp) {
  console.log('TIME: ' + timestamp.getTime());
  // return store.find(e => e.timestamp.toISOString() === timestamp.toISOString());
  return store.find(e => e.timestamp.getTime() === timestamp.getTime());
}

/**
 * Get the measurements within the given date range
 * @param {Date} start Lower bound for the query, inclusive
 * @param {Date} end Upper bound for the query, exclusive
 */
export function queryDateRange(from, to) {
  const result = [];
  const start = store.findIndex(e => e.timestamp.toISOString() === from.toISOString());
  let i = start;
  
  while (store[i].timestamp.toISOString() !== to.toISOString()) {
    result.push(store[i]);
    i++;
  }

  return result;
}

function binarySearch(timestamp) {
    
}
