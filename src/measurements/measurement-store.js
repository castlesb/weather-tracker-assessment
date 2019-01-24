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
  // return store.find(e => e.timestamp.toISOString() === timestamp.toISOString());
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
  
  if (from > to) {
    return n
  }

  // const start = store.findIndex(e => e.timestamp.toISOString() === from.toISOString());
  const start = binarySearch(from);
  let i = start;
  
  while (store[i].timestamp.toISOString() !== to.toISOString()) {
    result.push(store[i]);
    i++;
  }

  return result;
}

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