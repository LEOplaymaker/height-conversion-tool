<form>
  <label for="feet">Feet:</label>
  <input type="number" id="feet" name="feet"><br>

  <label for="inches">Inches:</label>
  <input type="number" id="inches" name="inches"><br>

  <input type="submit" value="Convert">
</form>

<div id="results"></div>

<script>
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e){
      //grab content from feet input
      let feet = document.querySelector('#feet');
      let inches = document.querySelector('#inches');
      const results = document.querySelector('#results');
      e.preventDefault();

      feet = parseInt(feet.value);
      inches = parseInt(inches.value);

      if (isNaN(feet) || isNaN(inches)){
          results.textContent = "Please enter a valid number!";
      } else if (feet < 0 ) {
          results.textContent = "Please enter a feet value > 0";
      } else if (inches < 0 || inches >= 12) {
          results.textContent = "Please enter an inch value between 0 and 12";
      } else {
          //make conversion to centimeters
          let totalInches = (feet*12) + inches;
          let cm = totalInches * 2.54;
          results.textContent = `${cm} cm`;
          document.querySelector('#feet').value = '';
          document.querySelector('#inches').value = '';
      }
  });
</script>
