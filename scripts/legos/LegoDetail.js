import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {

  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3>Name: ${brick.LegoName.toUpperCase()}</h3>
              <div>${brick.Notes}</div>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              </section>
              `;
  const link = brick.ColorstreamLinkImage;
  if (link) {
    //true? wrap the block in an a tag
    return `
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>`;
  } else {
    //false? return the block
    return block;
  }
}

// material drop down
export const dropDown = () => {
  return `
  <section id="dropDown">
<label for="materials">Select specific brick material</label>

 <select name="materials" id="materials">

    <option value="Solid">Solid</option>
    <option value="Transparent">Transparent</option>
    <option value="Pearl">Pearl</option>
    <option value="Chrome">Chrome</option>
    <option value="Metallic">Metallic</option>
    <option value="Milky">Milky</option>
    <option value="Glitter">Glitter</option>
    <option value="Speckle">Speckle</option>
    <option value="Ink">Ink</option>
    <option value="Process">Process</option>
    <option value="Modulex">Modulex</option>
  </select>
  </section>
  `
}