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
  let min = ;
  let max = 0;
  let avg = 0;

  for (let measurement of measurements) {
    for (let metric of metrics) {
        measurement.metric
    }
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
