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
  const result = [];
  for (let metric of metrics) {
    for (let stat of stats) {
      if (stat === 'min') {
        const min = Math.min(...measurements.metric);
        result.push({})
      }
    }
  }
}
