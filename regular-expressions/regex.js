document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validasi Penginputan Email
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('inputEmailError');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(emailInput.value);

  // Validasi Penginputan Nama
  const nameInput = document.getElementById('nama');
  const nameError = document.getElementById('inputNamaError');
  const nameRegex = /^[A-Z][a-z](?:[A-Z][a-z])*$/;

  // Validasi Penginputan No Handphone
  const phoneInput = document.getElementById('noTelp');
  const phoneError = document.getElementById('inputNoTelpError');
  const phoneRegex = /^[0-9+]+$/;

  // Validasi Penginputan Password
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('inputPasswordError');
  const password = passwordInput.value;
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  // Validasi Penginputan URL
  const urlInput = document.getElementById('url');
  const urlError = document.getElementById('inputURLError');
  const urlRegex = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-zA-Z\d%@.~+&:])(\?[;&a-zA-Z\d%@.,~+&:=-])?(#[-a-zA-Z\d_])?$/;

  // Inputan Nama
  if (nameInput.value.trim() === '') {
      nameError.textContent = 'Tolong Masukkan Nama Anda';
      nameInput.classList.add('border-red-500');
  } else if (!nameRegex.test(nameInput.value)) {
      nameError.textContent = 'Masukkan Nama Yang Valid Dengan Menggunakan Camel Case';
      nameInput.classList.add('border-red-500');
  } else {
      nameError.textContent = '';
      nameInput.classList.remove('border-red-500');
  }

  // Inputan Email
  if (emailInput.value.trim() === '') {
      emailError.textContent = 'Tolong Masukkan Email Anda';
      emailInput.classList.add('border-red-500');
  } else if (!isEmailValid) {
      emailError.textContent = 'Tolong Masukkan Email Yang Valid';
      emailInput.classList.add('border-red-500');
  } else {
      emailError.textContent = '';
      emailInput.classList.remove('border-red-500');
  }

  // Inputan No Handphone
  if (phoneInput.value.trim() === '') {
      phoneError.textContent = 'Tolong Masukkan No Handphone Anda';
      phoneInput.classList.add('border-red-500');
  } else if (!phoneRegex.test(phoneInput.value)) {
      phoneError.textContent = 'Tolong Masukkan No Handphone Yang Valid';
      phoneInput.classList.add('border-red-500');
  } else {
      phoneError.textContent = '';
      phoneInput.classList.remove('border-red-500');
  }

  // Validasi Penginputan Password
  if (password.trim() === '') {
      passwordError.textContent = 'Tolong Masukkan Password Anda';
      passwordInput.classList.add('border-red-500');
  } else if (!passwordRegex.test(password)) {
      passwordError.textContent = 'Password harus minimal 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus (@$!%*?&).';
      passwordInput.classList.add('border-red-500');
  } else {
      passwordError.textContent = '';
      passwordInput.classList.remove('border-red-500');
  }

  // Validasi Penginputan URL
  if (urlInput.value.trim() === '') {
      urlError.textContent = 'Tolong Masukkan URL Anda';
      urlInput.classList.add('border-red-500');
  } else if (!urlRegex.test(urlInput.value)) {
      urlError.textContent = 'Tolong Masukkan URL Yang Valid';
      urlInput.classList.add('border-red-500');
  } else {
      urlError.textContent = '';
      urlInput.classList.remove('border-red-500');
  }
});
