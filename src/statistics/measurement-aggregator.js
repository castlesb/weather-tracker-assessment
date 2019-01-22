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
      const metricArray = measurements
      .filter(m => m.getMetric(metric) != null)
      .map(m => m.getMetric(metric));
      if (metricArray.length === 0) return result;
    for (let stat of stats) {
      if (stat === 'min') {
        const min = metricArray.reduce((a, b) => (a < b ? a : b));
        result.push({metric, stat: 'min', value: min});
      } else if (stat === 'max') {
        const max = metricArray.reduce((a, b) => (a > b ? a : b));
        result.push({metric, stat: 'max', value: max});
      } else {
        const average = metricArray.reduce((a, b) => a + b) / metricArray.length;
        result.push({metric, stat: 'average', value: Math.round(average * 10) / 10});
      }
    }
  }

  return result;
}
