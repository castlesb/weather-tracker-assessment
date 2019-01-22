import { HttpError } from '../errors';
import { Measurement } from '../measurements/measurement';

/**
 * Compute statistics for given measurements
 * @param {Measurement} measurements
 * @param {String[]} metrics
 * @param {String[]} stats
 * @return {*}
 */
export function computeStats(measurements, metrics, stats) {
  let min = 0;
  let max = 0;
  for (let m of measurements) {
    
  }
/*
  for (let stat of stats) {
    if (stat === 'min') {
      for (let metric of metrics) {
      }
    }
  }
*/
}
