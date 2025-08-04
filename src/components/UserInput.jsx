export default function UserInput() {
  return (
    <section id="user-input">
      <div class="input-group">
        <p>
          <label for="initial">INITIAL INVESTMENT</label>
          <input type="number" id="initial" />
        </p>
        <p>
          <label for="annual">ANNUAL INVESTMENT</label>
          <input type="number" id="annual" />
        </p>
      </div>
      <div class="input-group">
        <p>
          <label for="return">EXPECTED RETURN</label>
          <input type="number" id="return" />
        </p>
        <p>
          <label for="duration">DURATION</label>
          <input type="number" id="duration" />
        </p>
      </div>
    </section>
  );
}
