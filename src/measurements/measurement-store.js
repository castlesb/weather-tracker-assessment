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
  // return store.find(e => e.timestamp.getTime() === timestamp.getTime());
  const index = binarySearch(timestamp);
  return store[index];
}

/**
 * Get the measurements within the given date range
 * @param {Date} start Lower bound for the query, inclusive
 * @param {Date} end Upper bound for the query, exclusive
 */
export function queryDateRange(from, to) {
  const result = [];
  
  if (from.getTime() > to.getTime()) throw new HttpError(400);

  // const start = store.findIndex(e => e.timestamp.getTime() === from.getTime());
  const start = binarySearch(from);

  for (let i = start; i < store.length; i++) {
    if (store[i].timestamp.getTime() === to.getTime()) break;
    result.push(store[i]);
  }

  return result;
}

// Search for the timestamp in the store using binary search and return the index.
// Useful for a store with hundreds 
function binarySearch(timestamp) {
  let start = 0;
  let end = store.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (store[mid].timestamp.getTime() === timestamp.getTime()) {
      return mid;
    } else if (store[mid].timestamp.getTime() < timestamp.getTime()) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}