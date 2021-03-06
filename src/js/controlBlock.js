export const controlBlock = `<div class="control-block">
    <div class="control-block_buttons">
      <img id="refresh-bg" src="assets/Refresh_BG.png" width="45" height="45">
      <select class="control-block_languages">
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="be">BE</option>
      </select>
      <div class="control-block_choose-degrees">
        <div class="labels-for-degrees-inputs">
          <input id="celsius" type="radio" name="degrees" value="c" checked>
          <label for="celsius">
            <div class="celsius">
              <p>°C</p>
            </div>
          </label>
          <input id="fahrenheit" type="radio" name="degrees" value="f">
          <label for="fahrenheit">
            <div class="fahrenheit">
              <p>°F</p>
            </div>
          </label>
        </div>
      </div>
      <label class="change-color">
        <input type="color" value="#ffffff">
        <div class="circle"></div>
      </label>
    </div>
    <div class="control-block_search">
      <div class="search-input">
        <input id="search-input" type="text">
        <img id="microfon-img" src="assets/micrrofon.png" width="14.5" height="17" alt="micro">
      </div>
      <div id="search-btn" class="search-btn">
        <p>SEARCH</p>
      </div>
    </div>
  </div>`;
