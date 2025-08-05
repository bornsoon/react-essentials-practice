export default function UserInput({ userInputs, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial">INITIAL INVESTMENT</label>
          <input type="number" id="initial"
          value={userInputs.initialInvestment}
          onChange={e => onChange("initialInvestment", e.target.value)} />
        </p>
        <p>
          <label for="annual">ANNUAL INVESTMENT</label>
          <input type="number" id="annual"
          value={userInputs.annualInvestment}
          onChange={e => onChange("annualInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="return">EXPECTED RETURN</label>
          <input type="number" id="return"
          value={userInputs.expectedReturn}
          onChange={e => onChange("expectedReturn", e.target.value)} />
        </p>
        <p>
          <label for="duration">DURATION</label>
          <input type="number" id="duration"
          value={userInputs.duration}
          onChange={e => onChange("duration", e.target.value)} />
        </p>
      </div>
    </section>
  );
}
