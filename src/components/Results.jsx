import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ inputs }) {
  let results = calculateInvestmentResults({ ...inputs });
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
        <td>Year</td>
        <td>Investment Value</td>
        <td>Interest(Year)</td>
        <td>Total Interest</td>
        <td>Invested Capital</td>
      </thead>
      <tbody>
        {results.map(result => {
          totalInterest += result.interset;

          return (
            <tr>
              <td>{result.year}</td>
              <td>{result.valueEndOfYear}</td>
              <td>{result.interest}</td>
              <td>{totalInterest}</td>
              <td>{result.annualInvestment}</td>
            </tr>
          )})
        }
      </tbody>
    </table>
  );
}
