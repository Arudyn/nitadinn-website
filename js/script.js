  function handleSubmit(e) {
    e.preventDefault();
    const name    = document.getElementById('name').value;
    const phone   = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout= document.getElementById('checkout').value;
    const guests  = document.getElementById('guests').value;
    const message = document.getElementById('message').value;

    const text = encodeURIComponent(
      `Hi Kak Nita! I'd like to enquire about booking NitaDinn Guest House.\n\n` +
      `Name: ${name}\nPhone: ${phone}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\n` +
      (message ? `Notes: ${message}` : '')
    );
    window.open(`https://wa.me/60199830699?text=${text}`, '_blank');
  }

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('checkin').min = today;
  document.getElementById('checkout').min = today;

  document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
  });