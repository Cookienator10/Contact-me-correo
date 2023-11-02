const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', SendEmail)

const serviceId = 'service_ps0m52b'
const templateId = 'template_3tp0i8k'
const apikey = 'ku04H77979U5SDMjK'

function SendEmail (event) {
 event.preventDefault()
 emailjs.init(serviceId)

 emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
 .then ( result => Swal.fire('Su mensaje se ha enviado con exito.!'))
 .catch ( error => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha sido posible enviar el mensaje!',
      });
 });

}

const commentInput = document.getElementById("msg");
const maxLength = 255;

commentInput.addEventListener("input", function() {
  const comment = commentInput.value.trim();
  const length = comment.length;
  const remainingChars = maxLength - length;

  if (remainingChars >= 0) {
    document.getElementById("char-count").textContent = remainingChars;
  } else {
    commentInput.value = comment.slice(0, maxLength);
  }
});