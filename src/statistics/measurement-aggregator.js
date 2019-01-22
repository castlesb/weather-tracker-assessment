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
      const metricArray = measurements.map(m => m[metric]);
      console.log(`METRIC ARRAY: ${JSON.stringify(metricArray)}`);
    for (let stat of stats) {
      if (stat === 'min') {
        const min = Math.min(...metricArray);
        result.push({metric, stat: 'min', value: min});
      } else if (stat === 'max') {
        const max = Math.max(...metricArray);
        result.push({metric, stat: 'max', value: max});
      } else {
        const sum = metricArray.reduce((acc, val) => acc + val, 0);
        result.push({metric, stat: 'average', value: sum / metricArray.length});
      }
    }
  }

  console.log(`RESULT: ${JSON.stringify(result)}`);
  return result;
}

function arrayMin(arr) {
  return arr.reduce(function (a, b) {
    return (p < v ? p : v);
  });
}

function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return (p > v ? p : v);
  });
}
