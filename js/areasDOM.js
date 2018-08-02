"use strict";

function createAreaCard(name, description, colorTheme, id) {
    return `<section style="width: 100%; margin-bottom: .5rem;">
    <div class="container py-3" style="background-color:#${colorTheme};">
      <div class="card">
        <div class="row ">
          <div class="col-md-4">
              <img src="../images/${id}.jpg" class="w-100">
            </div>
            <div class="col-md-8 px-3">
              <div class="card-block px-3">
                <h4 class="card-title" >${name}</h4>
                <p class="card-text">${description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}




module.exports = createAreaCard;