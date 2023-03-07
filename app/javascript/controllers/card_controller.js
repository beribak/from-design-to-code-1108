import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card"
export default class extends Controller {

  static targets = ["form", "btn", "card"]
  
  connect() {
    console.log(this.formTarget)
    console.log(this.btnTarget)
    
  }

  btnVisible() {
    this.formTarget.classList.toggle("d-none")
  }

  submitForm(event) {
    event.preventDefault()
    const url = this.formTarget.action

    fetch(url, {
      headers: { "Accept": "text/plain"},
      method: "PATCH",
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then(data => {
      this.cardTarget.outerHTML = data
    })
  }
}
